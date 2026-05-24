# tinyurl-client

A TinyURL-inspired URL shortener frontend built with **React + Vite**. Allows users to paste a long URL and instantly receive a shortened link powered by the [tinyurl-server](https://github.com/MohidWebDev/tinyurl-server.git) backend.

## 🔗 Related Repository

This is the **frontend** of a two-part project.
👉 Backend repo: [tinyurl-server](https://github.com/MohidWebDev/tinyurl-server.git)

## 🛠️ Tech Stack

- React 18
- Vite
- CSS (custom, no UI library)
- Font Awesome (icons)

## 📁 Folder Structure

```
tinyurl-client/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CTA.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Info.jsx
│   │   ├── Navbar.jsx
│   │   ├── Plans.jsx
│   │   ├── Solutions.jsx
│   │   └── Stats.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## ⚙️ Setup & Installation

1. Clone the repository

   ```bash
   git clone https://github.com/MohidWebDev/tinyurl-client.git
   cd tinyurl-client
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Make sure the backend server is running on `http://localhost:5050`
   👉 [tinyurl-server setup guide](https://github.com/MohidWebDev/tinyurl-server#setup--installation)

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`

## 🔁 How It Works

1. User pastes a long URL into the input field and clicks **Shorten Link**
2. The frontend sends a `POST /api/save` request to the backend (proxied via Vite)
3. The backend returns a short URL
4. The short URL is displayed inside the card with a **Copy** button
5. Clicking the short URL redirects the user to the original long URL

## 🔀 Vite Proxy

The `vite.config.js` is configured to proxy API requests to the backend during development:

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5050',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
},
```

This avoids CORS issues during local development.

## 📄 License

MIT
