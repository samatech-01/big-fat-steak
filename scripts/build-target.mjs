import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const target = process.argv[2];
if (!['github', 'cloudflare'].includes(target)) {
  throw new Error('Build target must be github or cloudflare.');
}
const vite = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url));
const result = spawnSync(process.execPath, [vite, 'build'], {
  stdio: 'inherit',
  env: { ...process.env, VITE_DEPLOY_TARGET: target },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
