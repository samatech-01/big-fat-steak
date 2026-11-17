import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const target = process.env.VITE_DEPLOY_TARGET ?? env.VITE_DEPLOY_TARGET ?? 'cloudflare';
  if (!['github', 'cloudflare'].includes(target)) {
    throw new Error('VITE_DEPLOY_TARGET must be github or cloudflare.');
  }
  return {
    base: target === 'github' ? '/big-fat-steak/' : '/',
    plugins: [react(), tailwindcss()],
  };
});
