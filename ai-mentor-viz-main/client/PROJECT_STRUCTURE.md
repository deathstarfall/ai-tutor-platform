# AI Tutor - JavaScript Project

## 📁 Folder Organization

```
ai-tutor/
├── 📄 index.html              # Main HTML file
├── ⚙️  vite.config.js         # Build configuration
├── 📦 package.json            # Dependencies (read-only)
├── 🎨 tailwind.config.ts      # Tailwind CSS configuration
│
├── 📁 src/
│   ├── 🎨 index.css           # Main CSS (design system)
│   ├── 🚀 main.jsx            # React entry point
│   ├── 🔧 App.jsx             # Main app component
│   │
│   ├── 📁 components/
│   │   └── 📁 ui/             # Essential UI components only
│   │       ├── button.jsx     # Button component
│   │       ├── card.jsx       # Card component
│   │       └── badge.jsx      # Badge component
│   │
│   ├── 📁 pages/
│   │   └── Index.jsx          # Main landing page
│   │
│   └── 📁 lib/
│       └── utils.js           # Utility functions
│
└── 📁 public/
    └── robots.txt             # SEO robots file
```

## 🧹 What Was Cleaned Up

### ❌ Removed Files:
- All TypeScript files (.tsx/.ts extensions)
- TypeScript configuration files 
- README.md (replaced with this file)
- src/App.css (styles moved to index.css)
- src/pages/NotFound.tsx (not needed)
- All unused shadcn/ui components (35+ files)
- All unused hooks and utilities

### ✅ What Remains:
- **Pure JavaScript** - No TypeScript complexity, just plain JS
- **Core React Structure** - Essential for modern web app functionality
- **Only Used Components** - Button, Card, Badge (what the landing page actually uses)
- **Design System** - All styles properly organized in index.css
- **Build Configuration** - Necessary files for development and deployment

## 🚀 Benefits of This Structure:
1. **Simple JavaScript** - No TypeScript learning curve required
2. **Minimal & Clean** - Only essential files remain
3. **Easy to Navigate** - Clear folder structure
4. **Fast Loading** - No unused code
5. **Maintainable** - Simple to understand and modify
6. **Beginner Friendly** - Standard JavaScript syntax

## 💻 Development Commands:
```bash
npm install    # Install dependencies
npm run dev    # Start development server
npm run build  # Build for production
```

The website works exactly the same but now has a much cleaner, more organized structure!