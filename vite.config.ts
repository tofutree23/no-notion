const react = require('@vitejs/plugin-react')
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'NoNotion',
      fileName: (format) => `no-notion.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
})
