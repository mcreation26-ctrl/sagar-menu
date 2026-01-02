import qrcode
import os

# QR code URLs for each table - LOCAL testing
base_url = "file:///Users/mridulnehra/sagar-menu/index.html"
tables = [1, 2, 3]

# Output directory
output_dir = "/Users/mridulnehra/sagar-menu/assets/qr-codes"

for table_num in tables:
    url = f"{base_url}?table={table_num}"
    
    # Create QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    
    # Create image with nice colors
    img = qr.make_image(fill_color="#1a1a2e", back_color="white")
    
    # Save
    filename = f"table-{table_num}-local-qr.png"
    filepath = os.path.join(output_dir, filename)
    img.save(filepath)
    print(f"Generated: {filename}")
    print(f"  URL: {url}\n")

print(f"All local QR codes saved to: {output_dir}")
