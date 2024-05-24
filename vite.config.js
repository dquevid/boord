import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/[hash].js`,
                chunkFileNames: `assets/[hash].js`,
                assetFileNames: `assets/[hash].[ext]`,
            },
        },
    },
    plugins: [svgr(), react()],
    base: '/boord/',
    server: {
        port: 5173,
        strictPort: true,
    },
    preview: {
        port: 5173,
        strictPort: true,
    },
})
