This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### Pacakges installed 

1. [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

- Add TailWind Css [Install Tailwind CSS with Next.js- TailWindCSS -Docs](https://tailwindcss.com/docs/guides/nextjs)
 ```
   //installs tailwind css using yarn
   
   npm install -D tailwindcss postcss autoprefixer
   
   // Generates tailwind.config.js postcss.config.js 
   
   npx tailwindcss init -p 
```
   
- Add Content to /tailwind.config.js 
```
/** @type {import('tailwindcss').Config} */ 
module.exports = {
    //Add content to 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add tailwind directives inside  
```
//add to ./styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. [tailwind-styled-components](https://www.npmjs.com/package/tailwind-styled-components)

```
//required to install tailwind css first
npm i -D tailwind-styled-components

```


3. [Add the Mapbox GL JS module](https://www.mapbox.com/install/js/bundler-install/)

```
npm install mapbox-gl --save

// & add 
//  mapbox-gl in _app.js
import "mapbox-gl/dist/mapbox-gl.css"

// Include the GL JS CSS file in the <head> of your HTML file.
```

## References 

1. [Markers and controls Map Box](https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker)


### Tasks

1. Add Navigation []
2. Calculate the prices for the worker[]
3. Add Login Page[]
