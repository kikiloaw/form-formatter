import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: './index.js',
            name: 'FormFormatter',
            fileName: 'form-formatter',
        },
        rollupOptions: {
            external: ['vue', 'fahad-select'],
            output: {
                globals: {
                    vue: 'Vue',
                    'fahad-select': 'FahadSelect',
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'form-formatter.css';
                    return assetInfo.name;
                },
            },
        },
        cssCodeSplit: false,
        outDir: 'dist',
    },
    define: {
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
    },
});