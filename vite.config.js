import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/kabira_foundation/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    host: true, // 👈 allows external access (including tunnels)
    origin: 'http://localhost:5173', // 👈 match your local dev server
    strictPort: true,
  },
});
