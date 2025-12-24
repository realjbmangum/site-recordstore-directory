# Record Store Directory - Design & Implementation Spec

> A buildable design spec aligned with the Site Factory stack.
> Replaces the Grok style guide with actionable implementation details.

---

## Tech Stack (Factory Standard)

| Layer | Technology | Notes |
|-------|------------|-------|
| **Framework** | Astro | Static-first, ships zero JS by default |
| **Styling** | Tailwind CSS | Using factory patterns |
| **Database** | Supabase | Per-site tables: `recordstore_*` |
| **Hosting** | Cloudflare Pages | Unlimited bandwidth, auto-SSL |
| **Forms** | Web3Forms + Supabase | Dual submission for notifications + data |
| **Maps** | Mapbox | Store locations, city maps |
| **Analytics** | Plausible | Privacy-focused |
| **Email** | Resend | Newsletter, store outreach |

---

## Design System

### Design Philosophy

**Theme:** Modern vinyl collector aesthetic - warm, tactile, authentic.

**NOT:** Retro kitsch, vintage clip art, or "old record shop" cliches.

**IS:** Clean layouts that let store photography shine, subtle warmth in colors, typography that feels curated but readable.

Think: Criterion Collection meets your favorite local shop's Instagram.

---

### Color Palette

```javascript
// tailwind.config.mjs
colors: {
  // Primary - Warm charcoal for text and headers
  ink: {
    50: '#f7f7f6',
    100: '#e5e4e2',
    200: '#cbc9c5',
    300: '#aaa7a1',
    400: '#8a857d',
    500: '#706b63',
    600: '#5a554f',
    700: '#4a4641',
    800: '#3d3a36',
    900: '#2d2b28',
    950: '#1a1918',
  },
  // Accent - Vinyl orange (warm, inviting)
  groove: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',  // Primary accent
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  // Secondary - Deep purple (vinyl label vibes)
  label: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },
  // Utility - Cream for backgrounds
  cream: '#faf9f7',
  // Success/Error using Tailwind defaults
}
```

**Usage:**
- `ink-950` - Primary text, headers
- `ink-600` - Secondary text, descriptions
- `ink-200` - Borders, dividers
- `groove-500` - CTAs, links, interactive elements
- `groove-100` - Hover backgrounds, highlights
- `label-600` - Genre tags, badges
- `cream` - Page backgrounds (not pure white)

---

### Typography

```javascript
// tailwind.config.mjs
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Space Grotesk', 'Inter', 'sans-serif'],
},
```

**Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

**Usage:**
| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 (Page title) | Space Grotesk | 700 | 48px / 3rem | 32px / 2rem |
| H2 (Section) | Space Grotesk | 600 | 32px / 2rem | 24px / 1.5rem |
| H3 (Card title) | Space Grotesk | 600 | 20px / 1.25rem | 18px / 1.125rem |
| Body | Inter | 400 | 16px / 1rem | 16px / 1rem |
| Small/Meta | Inter | 500 | 14px / 0.875rem | 14px / 0.875rem |
| Button | Inter | 600 | 14px / 0.875rem | 14px / 0.875rem |

**Why these fonts:**
- **Inter** - Extremely readable, great for body text and UI
- **Space Grotesk** - Geometric sans with personality, works for headers without being gimmicky

---

### Component Patterns

#### Store Card (Primary)

```astro
<!-- src/components/StoreCard.astro -->
---
interface Props {
  store: {
    name: string;
    slug: string;
    city: string;
    state: string;
    genres: string[];
    photo_url?: string;
    rating?: number;
    verified?: boolean;
  };
}
const { store } = Astro.props;
---

<a
  href={`/store/${store.slug}`}
  class="group block bg-white rounded-lg border border-ink-200 overflow-hidden hover:border-groove-300 hover:shadow-md transition-all duration-200"
>
  <!-- Image -->
  <div class="aspect-[4/3] bg-ink-100 overflow-hidden">
    {store.photo_url ? (
      <img
        src={store.photo_url}
        alt={`${store.name} storefront`}
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    ) : (
      <div class="w-full h-full flex items-center justify-center text-ink-400">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
    )}
  </div>

  <!-- Content -->
  <div class="p-4">
    <div class="flex items-start justify-between gap-2">
      <h3 class="font-display font-semibold text-ink-900 group-hover:text-groove-600 transition-colors">
        {store.name}
      </h3>
      {store.verified && (
        <span class="shrink-0 text-groove-500" title="Verified listing">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </span>
      )}
    </div>

    <p class="mt-1 text-sm text-ink-500">
      {store.city}, {store.state}
    </p>

    <!-- Genres -->
    {store.genres?.length > 0 && (
      <div class="mt-3 flex flex-wrap gap-1.5">
        {store.genres.slice(0, 3).map((genre) => (
          <span class="px-2 py-0.5 text-xs font-medium bg-label-100 text-label-700 rounded-full">
            {genre}
          </span>
        ))}
        {store.genres.length > 3 && (
          <span class="px-2 py-0.5 text-xs font-medium bg-ink-100 text-ink-500 rounded-full">
            +{store.genres.length - 3}
          </span>
        )}
      </div>
    )}
  </div>
</a>
```

#### Button Styles

```css
/* Primary CTA */
.btn-primary {
  @apply inline-flex items-center justify-center px-4 py-2.5
         bg-groove-500 text-white font-semibold text-sm rounded-lg
         hover:bg-groove-600 focus:outline-none focus:ring-2
         focus:ring-groove-500 focus:ring-offset-2
         transition-colors duration-150;
}

/* Secondary */
.btn-secondary {
  @apply inline-flex items-center justify-center px-4 py-2.5
         bg-white text-ink-700 font-semibold text-sm rounded-lg
         border border-ink-300 hover:bg-ink-50 hover:border-ink-400
         focus:outline-none focus:ring-2 focus:ring-ink-500 focus:ring-offset-2
         transition-colors duration-150;
}

/* Ghost (for nav, filters) */
.btn-ghost {
  @apply inline-flex items-center justify-center px-3 py-2
         text-ink-600 font-medium text-sm rounded-lg
         hover:bg-ink-100 hover:text-ink-900
         transition-colors duration-150;
}
```

#### Genre/Feature Tags

```astro
<!-- Genre tag (purple) -->
<span class="px-2 py-0.5 text-xs font-medium bg-label-100 text-label-700 rounded-full">
  Jazz
</span>

<!-- Feature tag (neutral) -->
<span class="px-2 py-0.5 text-xs font-medium bg-ink-100 text-ink-600 rounded-full">
  Listening Station
</span>

<!-- Highlight tag (orange) -->
<span class="px-2 py-0.5 text-xs font-medium bg-groove-100 text-groove-700 rounded-full">
  New Arrivals
</span>
```

---

### Layout Patterns

#### Header/Navigation

```astro
<!-- src/components/Header.astro -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-ink-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <span class="font-display font-bold text-xl text-ink-900">
          RecordStores
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1">
        <a href="/stores" class="btn-ghost">Browse Stores</a>
        <a href="/cities" class="btn-ghost">City Guides</a>
        <a href="/gear" class="btn-ghost">Gear</a>
        <a href="/blog" class="btn-ghost">Blog</a>
      </nav>

      <!-- Search + Submit -->
      <div class="flex items-center gap-3">
        <button class="btn-ghost p-2" aria-label="Search">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <a href="/submit" class="btn-primary hidden sm:inline-flex">
          Add a Store
        </a>
        <!-- Mobile menu button -->
        <button class="md:hidden btn-ghost p-2" aria-label="Menu">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
```

#### Page Container

```astro
<!-- Standard page wrapper -->
<main class="bg-cream min-h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <!-- Page content -->
  </div>
</main>
```

#### Store Grid

```astro
<!-- 4-column grid, responsive -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {stores.map((store) => (
    <StoreCard store={store} />
  ))}
</div>
```

---

## SEO Architecture

### URL Structure

```
/                                    # Homepage
/stores                              # All stores (paginated)
/stores/[state]                      # State listing (e.g., /stores/texas)
/stores/[state]/[city]               # City listing (e.g., /stores/texas/austin)
/store/[slug]                        # Individual store page
/cities                              # City guides index
/city/[slug]                         # City guide (e.g., /city/austin)
/gear                                # Gear reviews index
/gear/[slug]                         # Individual gear review
/blog                                # Blog index
/blog/[slug]                         # Blog post
/submit                              # Submit a store form
/about                               # About page
/contact                             # Contact form
```

### Required Meta Tags (Per Page)

```astro
<!-- src/components/SEOHead.astro -->
---
interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'place';
  noindex?: boolean;
}

const {
  title,
  description,
  canonical = Astro.url.href,
  ogImage = '/og-default.jpg',
  type = 'website',
  noindex = false
} = Astro.props;

const siteName = 'RecordStores.com';
const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
---

<!-- Primary Meta -->
<title>{fullTitle}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />
{noindex && <meta name="robots" content="noindex, nofollow" />}

<!-- Open Graph -->
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonical} />
<meta property="og:site_name" content={siteName} />
<meta property="og:image" content={new URL(ogImage, Astro.site)} />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={new URL(ogImage, Astro.site)} />
```

### Schema Markup

#### Store Page (LocalBusiness)

```astro
<!-- In store/[slug].astro -->
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MusicStore",
  "name": store.name,
  "description": store.description,
  "image": store.photo_urls?.[0],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": store.street_address,
    "addressLocality": store.city,
    "addressRegion": store.state,
    "postalCode": store.postal_code,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": store.latitude,
    "longitude": store.longitude
  },
  "telephone": store.phone,
  "url": store.website,
  "openingHoursSpecification": store.hours, // Format appropriately
  "aggregateRating": store.rating ? {
    "@type": "AggregateRating",
    "ratingValue": store.rating,
    "bestRating": "5",
    "worstRating": "1"
  } : undefined
})} />
```

#### City Guide (ItemList)

```astro
<!-- In city/[slug].astro -->
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": `Record Stores in ${city.name}`,
  "description": `Complete guide to ${stores.length} record stores in ${city.name}, ${city.state}`,
  "numberOfItems": stores.length,
  "itemListElement": stores.map((store, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "MusicStore",
      "name": store.name,
      "url": `${Astro.site}store/${store.slug}`
    }
  }))
})} />
```

#### Gear Review (Product)

```astro
<!-- In gear/[slug].astro -->
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": product.name,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "image": product.image_url,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "url": product.affiliate_url
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": product.rating,
    "bestRating": "5"
  },
  "author": {
    "@type": "Organization",
    "name": "RecordStores.com"
  }
})} />
```

### Sitemap Configuration

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://recordstores.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize: (item) => {
        // Higher priority for city guides and store pages
        if (item.url.includes('/city/') || item.url.includes('/store/')) {
          item.priority = 0.8;
        }
        if (item.url === 'https://recordstores.com/') {
          item.priority = 1.0;
        }
        return item;
      }
    })
  ]
});
```

---

## Database Schema

### Tables (Prefix: `recordstore_`)

```sql
-- Main stores table
CREATE TABLE recordstore_stores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    street_address TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    postal_code VARCHAR(10),
    country TEXT DEFAULT 'US',
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    phone TEXT,
    website TEXT,
    email TEXT,
    instagram TEXT,
    hours JSONB,
    genres TEXT[] DEFAULT '{}',
    formats TEXT[] DEFAULT '{}',
    features TEXT[] DEFAULT '{}',
    price_range TEXT,
    vibe TEXT,
    owner_name TEXT,
    year_opened INTEGER,
    description TEXT,
    ai_description TEXT,
    photo_urls TEXT[] DEFAULT '{}',
    source TEXT,
    verified BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    last_visited DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_recordstore_stores_state_city ON recordstore_stores(state, city);
CREATE INDEX idx_recordstore_stores_slug ON recordstore_stores(slug);
CREATE INDEX idx_recordstore_stores_genres ON recordstore_stores USING GIN(genres);

-- RLS
ALTER TABLE recordstore_stores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON recordstore_stores FOR SELECT USING (true);

-- Submissions table
CREATE TABLE recordstore_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_name TEXT NOT NULL,
    contact_name TEXT,
    contact_email TEXT NOT NULL,
    phone TEXT,
    website TEXT,
    city TEXT,
    state TEXT,
    street_address TEXT,
    genres TEXT[],
    description TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE recordstore_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public insert" ON recordstore_submissions FOR INSERT WITH CHECK (true);

-- Contact messages
CREATE TABLE recordstore_contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE recordstore_contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public insert" ON recordstore_contact_messages FOR INSERT WITH CHECK (true);

-- City guides (editorial content)
CREATE TABLE recordstore_cities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    state TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    store_count INTEGER DEFAULT 0,
    guide_content TEXT,
    featured BOOLEAN DEFAULT false,
    meta_title TEXT,
    meta_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_recordstore_cities_slug ON recordstore_cities(slug);
```

---

## File Structure

```
site-recordstore-directory/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SEOHead.astro
│   │   ├── StoreCard.astro
│   │   ├── StoreGrid.astro
│   │   ├── StoreMap.astro
│   │   ├── SearchBar.astro
│   │   ├── FilterPanel.astro
│   │   ├── GenreTag.astro
│   │   ├── FeatureTag.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── Pagination.astro
│   │   ├── ContactForm.astro
│   │   ├── SubmitForm.astro
│   │   └── NewsletterSignup.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── StoreLayout.astro
│   │   └── BlogLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── stores/
│   │   │   ├── index.astro
│   │   │   └── [state]/
│   │   │       ├── index.astro
│   │   │       └── [city].astro
│   │   ├── store/
│   │   │   └── [slug].astro
│   │   ├── cities/
│   │   │   └── index.astro
│   │   ├── city/
│   │   │   └── [slug].astro
│   │   ├── gear/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── submit.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   └── terms.astro
│   │
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── utils.ts
│   │   └── seo.ts
│   │
│   ├── data/
│   │   ├── site-config.json
│   │   ├── genres.json
│   │   └── features.json
│   │
│   └── styles/
│       └── global.css
│
├── public/
│   ├── favicon.ico
│   ├── og-default.jpg
│   └── robots.txt
│
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── .env.example
└── README.md
```

---

## Configuration Files

### site-config.json

```json
{
  "name": "RecordStores",
  "tagline": "Find your local groove",
  "domain": "recordstores.com",
  "description": "The most comprehensive directory of independent record stores. Find vinyl shops, discover new stores, and support your local music scene.",
  "social": {
    "instagram": "@recordstorescom",
    "twitter": "@recordstorescom"
  },
  "contact": {
    "email": "hello@recordstores.com"
  },
  "defaults": {
    "storesPerPage": 24,
    "featuredCount": 6
  }
}
```

### genres.json

```json
[
  { "id": "rock", "label": "Rock", "color": "label" },
  { "id": "jazz", "label": "Jazz", "color": "label" },
  { "id": "hip-hop", "label": "Hip-Hop", "color": "label" },
  { "id": "electronic", "label": "Electronic", "color": "label" },
  { "id": "soul-rnb", "label": "Soul/R&B", "color": "label" },
  { "id": "punk", "label": "Punk", "color": "label" },
  { "id": "metal", "label": "Metal", "color": "label" },
  { "id": "country", "label": "Country", "color": "label" },
  { "id": "classical", "label": "Classical", "color": "label" },
  { "id": "world", "label": "World", "color": "label" },
  { "id": "indie", "label": "Indie", "color": "label" },
  { "id": "experimental", "label": "Experimental", "color": "label" }
]
```

### features.json

```json
[
  { "id": "listening-station", "label": "Listening Station", "icon": "headphones" },
  { "id": "coffee", "label": "Coffee/Cafe", "icon": "coffee" },
  { "id": "beer", "label": "Beer/Bar", "icon": "beer" },
  { "id": "live-music", "label": "Live Music", "icon": "music" },
  { "id": "dog-friendly", "label": "Dog Friendly", "icon": "dog" },
  { "id": "buys-records", "label": "Buys Records", "icon": "dollar" },
  { "id": "rare-imports", "label": "Rare/Imports", "icon": "star" },
  { "id": "new-vinyl", "label": "New Vinyl", "icon": "sparkles" },
  { "id": "used-vinyl", "label": "Used Vinyl", "icon": "refresh" },
  { "id": "turntables", "label": "Sells Turntables", "icon": "turntable" }
]
```

---

## Environment Variables

```bash
# .env.example

# Supabase
PUBLIC_SUPABASE_URL=https://xxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJxxx...

# Web3Forms (for form notifications)
PUBLIC_WEB3FORMS_KEY=your_key_here

# Mapbox (for store maps)
PUBLIC_MAPBOX_TOKEN=pk.xxx...

# Site
PUBLIC_SITE_URL=https://recordstores.com
```

---

## Build Checklist

### Phase 1: Foundation
- [ ] Initialize Astro project with Tailwind
- [ ] Set up Supabase tables (use SQL above)
- [ ] Create base layout with header/footer
- [ ] Implement SEOHead component
- [ ] Configure tailwind.config.mjs with colors/fonts
- [ ] Set up environment variables

### Phase 2: Core Pages
- [ ] Homepage with search + featured stores
- [ ] /stores index with grid + filters
- [ ] /stores/[state] state listing
- [ ] /stores/[state]/[city] city listing
- [ ] /store/[slug] individual store page
- [ ] /submit form (Web3Forms + Supabase)
- [ ] /contact form
- [ ] /about page

### Phase 3: Content Pages
- [ ] /cities index
- [ ] /city/[slug] city guide pages
- [ ] /blog index
- [ ] /blog/[slug] blog posts
- [ ] /gear index (affiliate)
- [ ] /gear/[slug] gear reviews

### Phase 4: SEO & Polish
- [ ] Schema markup on all page types
- [ ] Sitemap configuration
- [ ] robots.txt
- [ ] OG images
- [ ] 404 page
- [ ] Loading states
- [ ] Mobile testing

### Phase 5: Launch
- [ ] Deploy to Cloudflare Pages
- [ ] Connect custom domain
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster
- [ ] Set up Plausible analytics
- [ ] Seed initial store data

---

## What Changed from Grok's Design

| Grok's Spec | This Spec | Why |
|-------------|-----------|-----|
| Impact font | Space Grotesk + Inter | Readable, professional, still has character |
| Brick red/dark green palette | Ink (charcoal) + Groove (orange) + Label (purple) | Better contrast, more modern, still warm |
| Chalkboard text effects | Clean typography | Accessibility, readability |
| Handwritten fonts for reviews | Inter for everything | Consistency, professionalism |
| Bootstrap grid | Tailwind CSS | Factory standard, more flexible |
| Vinyl record map pins | Standard Mapbox markers | Usability over novelty |
| No SEO details | Full schema + sitemap config | Critical for discoverability |
| Mood-based | Component-based | Actually buildable |

---

*This spec is ready to build. Follow the checklist and reference component patterns above.*
