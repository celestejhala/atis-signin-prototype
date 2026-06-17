import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is set for production builds so assets resolve under the GitHub
// Pages project path (https://<user>.github.io/atis-signin-prototype/).
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/atis-signin-prototype/' : '/',
}))
