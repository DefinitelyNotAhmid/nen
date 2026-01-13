const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, '../public/qt=q_95.webp');
    const outputPath = path.join(__dirname, '../public/favicon.ico');
    
    // Convert webp to ico with multiple sizes
    await sharp(inputPath)
      .resize(64, 64, { fit: 'cover' })
      .toFile(outputPath);
      
    console.log('Generated favicon.ico successfully');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
