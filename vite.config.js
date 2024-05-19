import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/boord/',
    plugins: [svgr(), react()],
    server: {
        // https: {
        //     key: './boord-privateKey.key',
        //     cert: './boord.crt',
        // },
        port: 5173,
        strictPort: true,
    },
    preview: {
        port: 5173,
        strictPort: true,
    },
})
