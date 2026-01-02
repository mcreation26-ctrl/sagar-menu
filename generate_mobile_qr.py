import qrcode
import os

# Your Mac's local IP address
LOCAL_IP = "10.255.100.124"
PORT = 8080

# QR code URLs for each table - for MOBILE testing
base_url = f"http://{LOCAL_IP}:{PORT}/index.html"
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
    filename = f"table-{table_num}-mobile-qr.png"
    filepath = os.path.join(output_dir, filename)
    img.save(filepath)
    print(f"Generated: {filename}")
    print(f"  URL: {url}\n")

print(f"\nAll mobile QR codes saved to: {output_dir}")
print(f"\n⚠️  Make sure your phone is on the SAME WiFi network as your Mac!")
