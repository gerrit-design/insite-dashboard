# InSite Dashboard

Professional imaging center analytics dashboard for tracking monthly collections, claims activity, and operational metrics across multiple locations.

## Overview

InSite Dashboard is a data visualization platform built for imaging centers to monitor business performance. The dashboard provides real-time insights into collections, claim volumes, scan types (MRI, CT, PET), and payment category breakdowns across multiple facilities.

## Tech Stack

- **Next.js 14** - React framework with server-side rendering
- **React 18** - UI component library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Recharts 2** - Chart and data visualization library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Features

- **Multi-Location Support** - Track metrics for multiple imaging centers (JAX1, JAX2, Orange Park, Aventura)
- **Collections Tracking** - Monthly revenue and collections data visualization
- **Claims Analysis** - Detailed breakdown of claims by scan type and payment category
- **Interactive Charts** - Line charts, pie charts, and bar charts for trend analysis
- **Payment Categories** - Insurance, PIP (Personal Injury Protection), LOP (Letter of Protection), and research tracking
- **Scan Type Breakdown** - Monitor MRI, CT, PET scan volumes and other procedures

## Project Structure

```
insite-dashboard/
├── insite-dashboard-flat/      # Source code (Next.js application)
│   ├── pages/
│   │   └── index.js           # Main dashboard page with data and charts
│   ├── styles/                # Global styles
│   ├── package.json           # Dependencies and scripts
│   ├── next.config.js         # Next.js configuration
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   └── postcss.config.js      # PostCSS configuration
├── insite-sefl-deploy/        # SEFL location build output
├── index.html                 # JAX location build output
└── vercel.json                # Vercel deployment configuration
```

## Data Sources

The dashboard integrates with:
- **Airtable** - Imaging Center Activity data (appUcuxfhvKNnYol)
- Monthly collections data (July - December 2025)
- Claims breakdown by facility, scan type, and payment category

## Installation

```bash
# Navigate to source directory
cd insite-dashboard-flat

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will start at `http://localhost:3000`

## Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
```

## Deployment

The dashboard is configured for Vercel deployment with separate builds for different locations:
- **JAX Dashboard** - Main deployment (root directory)
- **SEFL Dashboard** - Alternative deployment (insite-sefl-deploy)

Both versions are production-ready static builds optimized for fast loading.

## Key Metrics Tracked

- **Total Claims** - Monthly claim volume
- **Scan Types** - MRI, CT, PET scan counts
- **Payment Categories** - Insurance, PIP, LOP, Research
- **Collections** - Monthly revenue in USD
- **Location Comparisons** - Performance across multiple facilities

## Data Visualization

The dashboard includes:
- **Line Charts** - Trend analysis for collections over time
- **Pie Charts** - Payment category distribution
- **Bar Charts** - Scan type comparisons and claims breakdown
- **Responsive Design** - Mobile-friendly charts and layouts

## License

Private project - All rights reserved

## Notes

This dashboard is designed for internal use by imaging center management to track business performance and make data-driven operational decisions.
