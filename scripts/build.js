#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building FormFormatter package...');

try {
  // Clean dist directory
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true });
    console.log('✅ Cleaned dist directory');
  }

  // Build the package
  console.log('📦 Building with Vite...');
  execSync('npm run build', { stdio: 'inherit' });

  // Copy types file to dist
  if (fs.existsSync('types/form-formatter.d.ts')) {
    fs.copyFileSync('types/form-formatter.d.ts', 'dist/form-formatter.d.ts');
    console.log('✅ Copied TypeScript declarations');
  }

  // Copy README and other files
  const filesToCopy = ['README.md', 'CHANGELOG.md', 'LICENSE'];
  filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, `dist/${file}`);
      console.log(`✅ Copied ${file}`);
    }
  });

  console.log('🎉 Build completed successfully!');
  console.log('📁 Output directory: dist/');
  console.log('');
  console.log('To publish to npm:');
  console.log('  npm publish');
  console.log('');
  console.log('To test locally:');
  console.log('  npm pack');
  console.log('  npm install ./form-formatter-1.0.0.tgz');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
