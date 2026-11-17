import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ base: '/big-fat-steak/', plugins: [react(), tailwindcss()] });
