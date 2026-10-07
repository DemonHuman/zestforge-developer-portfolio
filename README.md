# ZestForge — Modern Developer Portfolio

A modern, responsive and customizable portfolio template built for developers and designers.

## ✨ Features

- Modern dark design
- Fully responsive
- Smooth animations
- React + Vite
- Tailwind CSS
- Framer Motion animations
- Lucide React icons
- Centralized portfolio content
- Easy customization
- Production-ready

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Framer Motion
- Lucide React

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── data/
│   └── portfolio.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The website will usually be available at:

```text
http://localhost:5173
```

### 3. Build for production

```bash
npm run build
```

## ⚙️ Customization

Most of the portfolio content can be edited from:

```text
src/data/portfolio.js

This file centralizes the main content of the portfolio, making it easy to customize without modifying the individual components.

You can update:

Personal information
Name and role
Location and availability
Email address
Social media links
Hero section
About section
Skills
Projects
Experience
Services
Contact section
Footer
Accent color

### Example

```js
export const portfolio = {
  brand: "Your Name",
  role: "Frontend Developer",
  location: "France",
  availability: "Available",
  email: "hello@example.com",
}
```

Simply replace the example values with your own information.

No advanced coding knowledge is required for basic content customization.

## 🎨 Changing the Accent Color

The main accent color is defined in:

```text
src/data/portfolio.js
```

Look for:

```js
theme: {
  accent: "#BF4A1A",
},
```

Replace `#BF4A1A` with your preferred color.

## 🌐 Deployment

After customizing your portfolio, create a production build with:

```bash
npm run build
```

The production files will be generated in:

```text
dist/
```

You can deploy the project using Vercel, Netlify, or any other hosting service that supports Vite applications.

📄 License

This template is provided as a customizable portfolio starter for developers and designers.