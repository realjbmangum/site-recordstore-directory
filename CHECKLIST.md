# Record Store Directory - Launch Checklist

> Granular task list for building and launching the record store directory.

---

## Phase 1: Setup & Foundation

### Domain & Hosting
- [ ] Research domain availability (check all options in PROJECT-NOTES.md)
- [ ] Purchase domain
- [ ] Set up Cloudflare DNS
- [ ] Configure Cloudflare Pages project
- [ ] Set up SSL certificate (auto via Cloudflare)

### Database Setup
- [ ] Create Supabase project (or use shared instance)
- [ ] Run migration: Create `stores` table
- [ ] Run migration: Create `store_reviews` table
- [ ] Run migration: Create `store_events` table
- [ ] Run migration: Create `cities` table
- [ ] Run migration: Create `blog_posts` table
- [ ] Set up Row Level Security policies
- [ ] Create database indexes for common queries
- [ ] Test CRUD operations

### Project Scaffolding
- [ ] Initialize Astro project
- [ ] Install dependencies (Tailwind, Supabase client, etc.)
- [ ] Set up Tailwind config
- [ ] Create base layout component
- [ ] Set up environment variables (.env.example)
- [ ] Configure Cloudflare adapter
- [ ] Create component library structure
- [ ] Set up Git repository
- [ ] Create .gitignore
- [ ] Initial commit

### Design System
- [ ] Choose color palette (vinyl/music inspired)
- [ ] Select typography (headings, body)
- [ ] Design logo or wordmark
- [ ] Create favicon
- [ ] Design component patterns:
  - [ ] Store card
  - [ ] Store list item
  - [ ] City card
  - [ ] Blog post card
  - [ ] Search bar
  - [ ] Filter chips
  - [ ] Map marker
  - [ ] Rating stars
  - [ ] Genre tags

---

## Phase 2: Core Pages

### Homepage
- [ ] Hero section with search
- [ ] Featured stores section
- [ ] Browse by city section
- [ ] Recent blog posts
- [ ] Newsletter signup
- [ ] Footer with links

### Store Listing Page (/stores)
- [ ] Store grid/list view
- [ ] Filter by state
- [ ] Filter by city
- [ ] Filter by genre
- [ ] Filter by features
- [ ] Sort options (name, rating, newest)
- [ ] Pagination or infinite scroll
- [ ] Map view toggle

### State Page (/stores/[state])
- [ ] State header with stats
- [ ] Cities in state
- [ ] All stores in state
- [ ] State-level map

### City Page (/stores/[state]/[city])
- [ ] City header with description
- [ ] Interactive map with all stores
- [ ] Store list with filters
- [ ] Neighborhood breakdown (if applicable)
- [ ] City guide content (editorial)

### Individual Store Page (/store/[slug])
- [ ] Store header (name, rating, address)
- [ ] Photo gallery
- [ ] Hours of operation
- [ ] Contact info (phone, website, email)
- [ ] Social links
- [ ] Genre tags
- [ ] Features/amenities
- [ ] Description/about
- [ ] Owner info (if available)
- [ ] Map embed
- [ ] Directions link
- [ ] Reviews section
- [ ] Nearby stores
- [ ] Share buttons
- [ ] Schema markup (LocalBusiness)

### Blog Index (/blog)
- [ ] Post grid
- [ ] Category filter
- [ ] Search
- [ ] Pagination

### Blog Post Page (/blog/[slug])
- [ ] Post header (title, date, category)
- [ ] Featured image
- [ ] Content area
- [ ] Author info
- [ ] Related posts
- [ ] Social sharing
- [ ] Newsletter CTA
- [ ] Schema markup (Article)

### Static Pages
- [ ] About page (/about)
- [ ] Contact page (/contact)
- [ ] Submit a store page (/submit)
- [ ] Privacy policy (/privacy)
- [ ] Terms of service (/terms)

### Gear Section (Affiliate)
- [ ] Gear landing page (/gear)
- [ ] Turntables category
- [ ] Speakers category
- [ ] Accessories category
- [ ] Individual gear review template
- [ ] Comparison tables
- [ ] Affiliate disclosure

### Record Store Day Hub
- [ ] RSD landing page (/record-store-day)
- [ ] Current year releases list
- [ ] Participating stores
- [ ] Survival guide content
- [ ] Historical RSD content

---

## Phase 3: Features & Functionality

### Search
- [ ] Basic search implementation
- [ ] Search stores by name
- [ ] Search by city
- [ ] Search by genre
- [ ] Autocomplete suggestions
- [ ] Search results page
- [ ] No results handling

### Maps
- [ ] Choose map provider (Mapbox vs Google)
- [ ] Set up API keys
- [ ] Create map component
- [ ] Custom map markers
- [ ] Store popup on click
- [ ] Cluster markers for density
- [ ] User location detection
- [ ] "Stores near me" functionality

### Forms
- [ ] Store submission form
  - [ ] Form validation
  - [ ] Spam protection (honeypot or captcha)
  - [ ] Submission to Supabase
  - [ ] Confirmation message
  - [ ] Email notification
- [ ] Contact form
  - [ ] Form validation
  - [ ] Spam protection
  - [ ] Email delivery (Resend)
  - [ ] Confirmation message
- [ ] Newsletter signup
  - [ ] Email validation
  - [ ] Supabase storage or email provider
  - [ ] Double opt-in (optional)

### Reviews (Future)
- [ ] Review submission form
- [ ] Rating component
- [ ] Review moderation queue
- [ ] Display reviews on store page
- [ ] Average rating calculation

---

## Phase 4: Data Population

### Local Store Research (Your City)
- [ ] List all record stores in your city
- [ ] Visit each store personally
- [ ] Take photos:
  - [ ] Storefront exterior
  - [ ] Interior (crates, listening stations)
  - [ ] Unique features
  - [ ] Signage
- [ ] Collect data:
  - [ ] Hours
  - [ ] Contact info
  - [ ] Genres carried
  - [ ] Special features
  - [ ] Price range
  - [ ] Vibe/atmosphere
- [ ] Interview owners (if possible)
- [ ] Write descriptions
- [ ] Add all stores to database
- [ ] Verify all data accuracy

### Regional Expansion Data
- [ ] Configure Outscraper search for "record store" queries
- [ ] Run searches for target cities
- [ ] Clean and deduplicate data
- [ ] Import to Supabase
- [ ] Enrich with website/email scraping
- [ ] Mark as unverified (vs personally visited)

### Data Quality
- [ ] Create verification workflow
- [ ] Flag closed stores
- [ ] Update hours from Google
- [ ] Collect social media handles
- [ ] Scrape Instagram for photos (with permission)

---

## Phase 5: Content Creation

### Launch Content (Before Go-Live)
- [ ] Homepage copy
- [ ] About page content
- [ ] 1 comprehensive city guide (your city)
- [ ] 3-5 store spotlights (your city)
- [ ] 1 gear guide ("Best turntables under $300")
- [ ] 1 beginner guide ("How to start collecting vinyl")

### Content Pipeline (Post-Launch)
- [ ] Create content calendar
- [ ] Set up editorial workflow
- [ ] Establish style guide
- [ ] Create blog post templates
- [ ] Set publishing schedule (2-4 posts/month)

### Content Ideas Backlog
City Guides:
- [ ] [Your city] - The Complete Guide
- [ ] Austin, TX vinyl guide
- [ ] Brooklyn, NY vinyl guide
- [ ] Los Angeles, CA vinyl guide
- [ ] Chicago, IL vinyl guide
- [ ] Portland, OR vinyl guide

Gear Reviews:
- [ ] Best turntables under $300
- [ ] Best turntables under $500
- [ ] Best turntables under $1000
- [ ] Best speakers for vinyl under $200
- [ ] Best speakers for vinyl under $500
- [ ] Best vinyl cleaning kits
- [ ] Best record storage solutions
- [ ] Audio-Technica AT-LP120 review
- [ ] Fluance RT85 review
- [ ] U-Turn Orbit review

Guides:
- [ ] How to start a vinyl collection
- [ ] How to grade vinyl records
- [ ] How to clean vinyl records
- [ ] How to set up your first turntable
- [ ] Record Store Day survival guide
- [ ] Best albums to own on vinyl
- [ ] Vinyl vs streaming: Why bother?

Store Features:
- [ ] [Store name] owner interview
- [ ] Hidden gems at [store name]
- [ ] What's in the crates at [store name]

---

## Phase 6: SEO & Analytics

### Technical SEO
- [ ] Generate XML sitemap
- [ ] Create robots.txt
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site ownership in GSC
- [ ] Set up canonical URLs
- [ ] Implement structured data:
  - [ ] LocalBusiness for stores
  - [ ] Article for blog posts
  - [ ] BreadcrumbList
  - [ ] Organization
- [ ] Test structured data in Rich Results Test
- [ ] Set up 404 page
- [ ] Configure redirects (if needed)

### On-Page SEO
- [ ] Create SEO component (meta tags)
- [ ] Write unique title tags for all pages
- [ ] Write unique meta descriptions
- [ ] Optimize heading hierarchy
- [ ] Add alt text to all images
- [ ] Internal linking strategy
- [ ] Create pillar/cluster content structure

### Analytics
- [ ] Set up Plausible or Fathom (or GA4)
- [ ] Configure goal tracking:
  - [ ] Store page views
  - [ ] Outbound clicks (store websites)
  - [ ] Affiliate clicks
  - [ ] Form submissions
  - [ ] Newsletter signups
- [ ] Set up Google Search Console
- [ ] Configure weekly reporting

### Page Speed
- [ ] Run Lighthouse audit
- [ ] Optimize images (WebP, lazy loading)
- [ ] Minimize JavaScript
- [ ] Enable Cloudflare caching
- [ ] Target 90+ Lighthouse score

---

## Phase 7: Monetization Setup

### Affiliate Programs
- [ ] Apply to Amazon Associates
- [ ] Apply to Turntable Lab affiliate
- [ ] Apply to Crutchfield affiliate
- [ ] Research Audio-Technica direct program
- [ ] Research other gear affiliate programs
- [ ] Set up affiliate link tracking
- [ ] Create affiliate disclosure page
- [ ] Add disclosure to gear content

### Affiliate Implementation
- [ ] Create product comparison tables
- [ ] Add affiliate links to gear reviews
- [ ] Create "recommended gear" widgets
- [ ] Set up link cloaking (optional)
- [ ] Track clicks and conversions

### Advertising (Future)
- [ ] Apply to Mediavine (requires 50K sessions)
- [ ] Or set up AdSense as interim
- [ ] Create ad placement zones
- [ ] Test ad layouts

### Premium Listings (Future)
- [ ] Design premium listing features
- [ ] Set pricing tiers
- [ ] Create payment flow (Stripe)
- [ ] Build store owner dashboard
- [ ] Outreach to stores

---

## Phase 8: Launch

### Pre-Launch
- [ ] Test all pages on mobile
- [ ] Test all pages on desktop
- [ ] Test all forms
- [ ] Test all links
- [ ] Spell-check all content
- [ ] Review all images load correctly
- [ ] Test page speed
- [ ] Check meta tags and OG images
- [ ] Test social sharing
- [ ] Cross-browser testing
- [ ] Get feedback from 2-3 friends

### Launch Day
- [ ] Deploy to production
- [ ] Verify DNS propagation
- [ ] Test production site
- [ ] Submit to Google for indexing
- [ ] Announce on social media
- [ ] Post in relevant communities (Reddit vinyl, etc.)
- [ ] Email friends/network
- [ ] Monitor for errors

### Post-Launch (Week 1)
- [ ] Monitor analytics
- [ ] Check Search Console for issues
- [ ] Respond to any feedback
- [ ] Fix any bugs discovered
- [ ] Add 2-3 more stores
- [ ] Publish 1 blog post

---

## Phase 9: Growth & Maintenance

### Weekly Tasks
- [ ] Check analytics
- [ ] Review Search Console
- [ ] Add new stores
- [ ] Respond to submissions
- [ ] Social media posting
- [ ] Community engagement

### Monthly Tasks
- [ ] Publish 2-4 blog posts
- [ ] Add 10-20 new stores
- [ ] Update any changed store info
- [ ] Review affiliate performance
- [ ] Newsletter send (if applicable)
- [ ] Content planning for next month

### Quarterly Tasks
- [ ] SEO audit
- [ ] Content audit (update old posts)
- [ ] Competitor check
- [ ] Revenue review
- [ ] Goal setting for next quarter

### Annual Tasks
- [ ] Record Store Day coverage (April + November)
- [ ] Year-end roundup content
- [ ] Major site updates/redesign review
- [ ] Annual review and planning

---

## Future Features (Backlog)

### Community Features
- [ ] User accounts
- [ ] User reviews
- [ ] User collections
- [ ] Wishlist / want list
- [ ] Check-ins ("I visited this store")
- [ ] User photos

### Store Owner Features
- [ ] Claim your store
- [ ] Update store info
- [ ] Add events
- [ ] Respond to reviews
- [ ] Premium dashboard

### Advanced Features
- [ ] Mobile app (PWA)
- [ ] Push notifications (RSD alerts)
- [ ] Email alerts (new stores in area)
- [ ] Store inventory integration
- [ ] Discogs marketplace integration
- [ ] Social features (follow stores, users)

---

## Notes

### Don't Forget
- Always backup database before major changes
- Keep affiliate disclosures compliant (FTC)
- Respect store owners (ask before using photos)
- Verify store info before publishing
- Respond to community feedback quickly

### Tools to Use
- **Outscraper**: Initial data sourcing
- **Directory Factory**: Data management
- **Cloudflare Pages**: Hosting
- **Supabase**: Database
- **Resend**: Email
- **Figma**: Design
- **Notion/Linear**: Task tracking

---

*Last Updated: December 2024*
