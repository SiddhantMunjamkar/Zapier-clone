# Zapier Clone

A frontend clone of Zapier's workflow automation interface built with modern web technologies.


## Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components built with Radix UI and Tailwind CSS
- **[Lucide React](https://lucide.dev/)** - Icon library

## Features

- 📊 **Dashboard** - Main dashboard with automation suggestions and popular templates
- 🔧 **Zap Builder** - Visual workflow builder interface with trigger and action steps
- 🔍 **Search Modal** - App search functionality for selecting integrations
- 📱 **Responsive Sidebar** - Navigation with collapsible menu items
- 🎨 **Modern UI** - Clean, professional design matching Zapier's aesthetic
- 🌙 **Theme Support** - Dark/Light mode with next-themes

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with theme provider
│   ├── page.tsx          # Home page with Dashboard
│   └── zaps/
│       └── page.tsx      # Zap builder page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── dashboard.tsx     # Main dashboard component
│   ├── sidebar.tsx       # Navigation sidebar
│   ├── header.tsx        # Top header with search
│   ├── zap-builder.tsx   # Workflow builder interface
│   ├── automation-card.tsx
│   └── ...
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SiddhantMunjamkar/Zapier-clone.git
   cd Zapier-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## shadcn/ui Components Used

This project utilizes the following shadcn/ui components:

- Accordion, Alert, Alert Dialog
- Avatar, Badge, Button
- Card, Carousel, Checkbox
- Command, Dialog, Dropdown Menu
- Form, Input, Label
- Popover, Progress, Select
- Separator, Sheet, Skeleton
- Tabs, Toast, Tooltip
- And more...

## Screenshots

![Zapier Clone Dashboard](image%20of%20zapier-clone.png)
![Zapier Clone Zap](image%20of%20zapier-clone2.png)


Built with  using Next.js and shadcn/ui
