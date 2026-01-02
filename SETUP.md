# Setup Instructions

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Building for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

- `App.tsx` - Main application component with panel switching
- `main.tsx` - Application entry point
- `components/` - All React components
  - `buyer/` - Buyer panel components
  - `dealer/` - Dealer panel components
  - `admin/` - Admin panel components
  - `ui/` - Reusable UI components (shadcn/ui)
- `index.css` - Global styles with Tailwind CSS

## Features

- **Buyer Panel**: Browse cars, place bids, apply for finance and insurance, track orders
- **Dealer Panel**: Manage inventory, place quotes, handle orders
- **Admin Panel**: Review applications, manage orders, handle refunds

Switch between panels using the top navigation bar.

