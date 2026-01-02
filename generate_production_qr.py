import qrcode
import os

# Production URL on Render
PRODUCTION_URL = "https://restro-menu-mh1g.onrender.com"

# QR code URLs for each table
tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # Adjust number of tables as needed

# Output directory
output_dir = "/Users/mridulnehra/sagar-menu/assets/qr-codes"
os.makedirs(output_dir, exist_ok=True)

print("🍽️ Generating Production QR Codes for Sagar Cafe")
print("=" * 50)

for table_num in tables:
    url = f"{PRODUCTION_URL}?table={table_num}"
    
    # Create QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    
    # Create image with cafe brand colors
    img = qr.make_image(fill_color="#1a1a2e", back_color="white")
    
    # Save
    filename = f"table-{table_num}-production.png"
    filepath = os.path.join(output_dir, filename)
    img.save(filepath)
    print(f"✅ Table {table_num}: {filename}")
    print(f"   URL: {url}")

print("\n" + "=" * 50)
print(f"📁 All QR codes saved to: {output_dir}")
print(f"🌐 Base URL: {PRODUCTION_URL}")
print("\n🎉 Ready to print and place on cafe tables!")
