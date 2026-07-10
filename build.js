import { build } from 'esbuild';
import { execSync } from 'child_process';

// Type-check first — fail fast on type errors before emitting declarations
console.log('Running TypeScript type check...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('TypeScript type check passed!');
} catch (error) {
  console.error('TypeScript type check failed:', error.message);
  process.exit(1);
}

// Generate TypeScript declarations
console.log('Generating TypeScript declarations...');
try {
  execSync('npx tsc --emitDeclarationOnly', { stdio: 'inherit' });
  console.log('TypeScript declarations generated successfully!');
} catch (error) {
  console.error('Failed to generate TypeScript declarations:', error.message);
  process.exit(1);
}

// Build configuration shared between entry points
const buildConfig = {
  bundle: true,
  platform: 'neutral', // Neutral platform for cross-platform compatibility
  target: 'es2022',
  format: 'esm',
  external: [
    'console',
    '@fjell/logging',
    'deepmerge',
    'luxon'
  ], // Keep external dependencies as they should be installed separately
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  metafile: true,
  minify: false, // Keep readable for debugging
};

// Build main cross-platform version
console.log('Building cross-platform version...');
await build({
  ...buildConfig,
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
});

console.log('Build completed successfully!');
console.log(`- Cross-platform build: dist/index.js`);
console.log(`- TypeScript declarations: dist/index.d.ts`);
console.log('This build works in both Node.js and browser environments');
