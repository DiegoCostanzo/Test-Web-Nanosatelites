# NanoSpace - Nanosatellite Technology Website

A modern, responsive web application showcasing nanosatellite technology and space missions.

## 🚀 Features

- Modern space-themed design with gradient effects
- Responsive layout for all devices
- Showcase of satellite missions and projects
- Technical specifications and capabilities
- Contact form for mission inquiries
- Optimized for Vercel deployment

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

This project is optimized for Vercel deployment:

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the configuration
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Main app component
│   │   └── components/
│   │       ├── NanoHeader.tsx         # Navigation header
│   │       ├── NanoHero.tsx           # Hero section
│   │       ├── NanoMissions.tsx       # Missions gallery
│   │       ├── NanoTechnology.tsx     # Tech specs
│   │       ├── NanoAbout.tsx          # About & contact
│   │       └── NanoFooter.tsx         # Footer
│   ├── main.tsx                       # Entry point
│   └── styles/
│       ├── index.css
│       ├── theme.css
│       └── fonts.css
├── index.html                         # HTML template
├── vite.config.ts                     # Vite configuration
├── vercel.json                        # Vercel configuration
└── package.json

```

## 🎨 Customization

### Colors

The project uses a purple-cyan gradient color scheme. To customize:

1. Edit gradient classes in components (e.g., `from-purple-600 to-cyan-500`)
2. Modify Tailwind theme in `/src/styles/theme.css`

### Content

- **Missions**: Edit `/src/app/components/NanoMissions.tsx`
- **Technology specs**: Edit `/src/app/components/NanoTechnology.tsx`
- **Company info**: Edit `/src/app/components/NanoAbout.tsx`

### Images

Replace Unsplash URLs with your own images in component files.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📧 Contact

For questions or support, please contact us through the website form.

---

Built with ❤️ for the space community
