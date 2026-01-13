const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, '../public/qt=q_95.webp');
    const outputPath = path.join(__dirname, '../public/favicon.ico');

    const iconsDir = path.join(__dirname, '../public/icons');
    const icon192Path = path.join(iconsDir, 'icon-192.png');
    const icon512Path = path.join(iconsDir, 'icon-512.png');

    const appDir = path.join(__dirname, '../app');
    const nextIconPath = path.join(appDir, 'icon.png');
    const nextAppleIconPath = path.join(appDir, 'apple-icon.png');

    fs.mkdirSync(iconsDir, { recursive: true });
    fs.mkdirSync(appDir, { recursive: true });
    
    // Convert webp to ico with multiple sizes
    await sharp(inputPath)
      .resize(64, 64, { fit: 'cover' })
      .toFile(outputPath);

    await sharp(inputPath)
      .resize(192, 192, { fit: 'cover' })
      .png()
      .toFile(icon192Path);

    await sharp(inputPath)
      .resize(512, 512, { fit: 'cover' })
      .png()
      .toFile(icon512Path);

    await sharp(inputPath)
      .resize(32, 32, { fit: 'cover' })
      .png()
      .toFile(nextIconPath);

    await sharp(inputPath)
      .resize(180, 180, { fit: 'cover' })
      .png()
      .toFile(nextAppleIconPath);
      
    console.log('Generated favicon.ico successfully');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
