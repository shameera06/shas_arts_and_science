const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const frontendDir = path.join(rootDir, 'frontend');
const publicDir = path.join(rootDir, 'public');

console.log('Building portal for Vercel deployment...');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy all files from frontend to public
fs.cpSync(frontendDir, publicDir, { recursive: true });

console.log('Frontend assets successfully synced to public directory.');
console.log('Build completed successfully.');
