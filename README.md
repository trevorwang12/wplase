# WLPase Live - WPlace Information Hub

Comprehensive documentation and analysis platform for the collaborative pixel art platform WPlace.live.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling framework
- **React 19** - UI library

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Deploy automatically

### Environment Variables

No environment variables required for basic functionality.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── tools/          # Tools documentation
│   ├── timeline/       # Platform timeline
│   ├── community/      # Community guides
│   ├── archive/        # Controversy archives
│   ├── privacy/        # Privacy policy
│   └── terms/          # Terms of service
├── components/         # Reusable components
│   ├── Analytics.tsx   # Analytics tracking
│   └── Footer.tsx      # Site footer
└── globals.css         # Global styles
```

## 🎨 Features

- **Pixel Art Aesthetic** - Custom CSS animations and retro styling
- **SEO Optimized** - Complete metadata, canonical URLs, and structured data
- **Mobile Responsive** - Tailwind CSS responsive design
- **Performance** - Next.js App Router with static generation
- **Analytics** - Plausible analytics integration
- **PWA Ready** - Web app manifest and favicons

## 📊 Analytics

Uses Plausible Analytics for privacy-friendly tracking:
- Domain: `wlpase.live`
- Tracks outbound links
- No cookies, GDPR compliant

## ⚡ Performance

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- CDN deployment via Vercel

## 📄 Legal

This is an independent documentation project, not affiliated with WPlace.live or its developers.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request
