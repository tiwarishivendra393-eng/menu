# JAY AMBE FAST FOOD - QR Menu Website

Simple, modern, mobile-first restaurant menu website built with React + Tailwind CSS.

This project is designed for table QR code usage:
- no login
- no ordering flow
- no payment flow
- no backend

## Features

- Mobile-first responsive layout
- Smooth category navigation and smooth scrolling
- Modern food-themed UI (red/orange/yellow palette)
- Reusable React components
- Menu data stored in a separate JSON file for easy updates
- Ready to deploy on Vercel

## Tech Stack

- React
- Vite
- Tailwind CSS v4

## Project Structure

```txt
jay-ambe-menu/
  public/
  src/
    components/
      CategorySection.jsx
      Footer.jsx
      Header.jsx
      MenuItem.jsx
    data/
      menu.json
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Update Menu Content

Edit `src/data/menu.json`:
- `restaurantName`
- `welcomeMessage`
- `contactNumber`
- `address`
- category list and item prices

## Run Locally

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Keep defaults:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

After deploy, copy the live URL and generate a QR code pointing to it.

## Suggested Next Step

Replace placeholder logo/contact/address with real details before printing QR codes.
