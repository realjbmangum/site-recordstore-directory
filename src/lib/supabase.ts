import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Create client only if credentials are available
const hasCredentials = supabaseUrl && supabaseAnonKey;

export const supabase: SupabaseClient | null = hasCredentials
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Mock data for development
const MOCK_STORES: Store[] = [
  {
    id: '1',
    name: "Dusty Grooves",
    slug: 'dusty-grooves',
    street_address: '1120 N Ashland Ave',
    city: 'Chicago',
    state: 'Illinois',
    postal_code: '60622',
    country: 'US',
    latitude: 41.9032,
    longitude: -87.6694,
    phone: '(773) 342-3600',
    website: 'https://dustygroove.com',
    email: 'info@dustygroove.com',
    instagram: '@dustygrooveamerica',
    genres: ['jazz', 'soul-rnb', 'world', 'electronic'],
    formats: ['vinyl', 'cd'],
    features: ['rare-imports', 'used-vinyl', 'new-vinyl', 'buys-records'],
    price_range: '$$',
    vibe: 'A soul and jazz collector\'s paradise. Floor-to-ceiling rare finds from around the globe. The kind of place where you lose track of time.',
    owner_name: 'Rick Wojcik',
    year_opened: 1996,
    description: 'Dusty Groove is a Chicago institution specializing in soul, jazz, funk, hip-hop, Latin, Brazilian, and African music. Their online catalog is legendary, but nothing beats digging through the bins in person.',
    photo_urls: ['https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800'],
    verified: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: "Wax Trax Records",
    slug: 'wax-trax-records',
    street_address: '638 E 13th Ave',
    city: 'Denver',
    state: 'Colorado',
    postal_code: '80203',
    country: 'US',
    latitude: 39.7352,
    longitude: -104.9772,
    phone: '(303) 831-7246',
    website: 'https://waxtraxrecords.com',
    instagram: '@waxtraxdenver',
    genres: ['rock', 'punk', 'metal', 'indie', 'electronic'],
    formats: ['vinyl', 'cassette', 'cd'],
    features: ['used-vinyl', 'new-vinyl', 'listening-station', 'buys-records', 'live-music'],
    price_range: '$$',
    vibe: 'Punk rock attitude with a welcoming spirit. Stickers everywhere, great staff picks, and a listening station that actually works.',
    year_opened: 1975,
    description: 'A Denver landmark since 1975. Three floors of vinyl, CDs, and cassettes spanning every genre. The basement punk section is not to be missed.',
    photo_urls: ['https://images.unsplash.com/photo-1619983081563-430f63602796?w=800'],
    verified: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: "Grimey's New & Preloved Music",
    slug: 'grimeys-nashville',
    street_address: '1060 E Trinity Ln',
    city: 'Nashville',
    state: 'Tennessee',
    postal_code: '37216',
    country: 'US',
    latitude: 36.2070,
    longitude: -86.7389,
    phone: '(615) 226-3811',
    website: 'https://grimeys.com',
    instagram: '@grimlovinmusic',
    genres: ['rock', 'country', 'indie', 'folk', 'soul-rnb'],
    formats: ['vinyl', 'cd'],
    features: ['new-vinyl', 'used-vinyl', 'live-music', 'coffee', 'buys-records'],
    price_range: '$$',
    vibe: 'Nashville\'s living room for music lovers. Catch an in-store performance, grab coffee next door, and dig through curated bins that actually make sense.',
    owner_name: 'Doyle Davis',
    year_opened: 1999,
    description: 'More than just a record store—Grimey\'s is where Nashville\'s music community gathers. Their in-store performances are legendary, hosting everyone from Jack White to Sturgill Simpson.',
    photo_urls: ['https://images.unsplash.com/photo-1534187886935-1e1236e856c3?w=800'],
    verified: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: "Amoeba Music",
    slug: 'amoeba-hollywood',
    street_address: '6200 Hollywood Blvd',
    city: 'Los Angeles',
    state: 'California',
    postal_code: '90028',
    country: 'US',
    latitude: 34.1016,
    longitude: -118.3245,
    phone: '(323) 245-6400',
    website: 'https://amoeba.com',
    instagram: '@amoebamusic',
    genres: ['rock', 'hip-hop', 'electronic', 'jazz', 'punk', 'metal', 'classical', 'world'],
    formats: ['vinyl', 'cd', 'cassette'],
    features: ['new-vinyl', 'used-vinyl', 'rare-imports', 'buys-records', 'turntables'],
    price_range: '$$$',
    vibe: 'The mothership. A cathedral of music where you could spend an entire day and still miss sections. Overwhelming in the best possible way.',
    year_opened: 2001,
    description: 'The world\'s largest independent record store. Their Hollywood location is a must-visit pilgrimage for any serious collector. Bring comfortable shoes.',
    photo_urls: ['https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=800'],
    verified: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: "Rough Trade NYC",
    slug: 'rough-trade-nyc',
    street_address: '30 Rockefeller Plaza',
    city: 'New York',
    state: 'New York',
    postal_code: '10112',
    country: 'US',
    latitude: 40.7587,
    longitude: -73.9787,
    phone: '(212) 843-4882',
    website: 'https://roughtrade.com',
    instagram: '@rloastantradeeast',
    genres: ['indie', 'electronic', 'rock', 'experimental'],
    formats: ['vinyl', 'cd'],
    features: ['new-vinyl', 'listening-station', 'coffee', 'live-music', 'beer'],
    price_range: '$$$',
    vibe: 'Sleek, modern, and curated with impeccable taste. The listening stations are phenomenal, and the in-store shows attract serious talent.',
    year_opened: 2013,
    description: 'The legendary London label\'s NYC outpost. Perfect curation, great coffee, and one of the best in-store performance spaces in the city.',
    photo_urls: ['https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=800'],
    verified: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    name: "Waterloo Records",
    slug: 'waterloo-records-austin',
    street_address: '600 N Lamar Blvd',
    city: 'Austin',
    state: 'Texas',
    postal_code: '78703',
    country: 'US',
    latitude: 30.2729,
    longitude: -97.7533,
    phone: '(512) 474-2500',
    website: 'https://waterloorecords.com',
    instagram: '@waterloorecords',
    genres: ['rock', 'country', 'indie', 'blues', 'folk', 'hip-hop'],
    formats: ['vinyl', 'cd'],
    features: ['new-vinyl', 'used-vinyl', 'live-music', 'listening-station'],
    price_range: '$$',
    vibe: 'Austin\'s beating musical heart. Great local section, friendly staff who actually listen to your tastes, and SXSW madness every March.',
    year_opened: 1982,
    description: 'The definitive Austin record store. Their staff picks are always on point, and their commitment to local artists is unmatched. Essential stop during SXSW.',
    photo_urls: ['https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800'],
    verified: true,
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    name: "Sweat Records",
    slug: 'sweat-records-miami',
    street_address: '5505 NE 2nd Ave',
    city: 'Miami',
    state: 'Florida',
    postal_code: '33137',
    country: 'US',
    latitude: 25.8322,
    longitude: -80.1916,
    phone: '(786) 693-9309',
    website: 'https://sweatrecordsmiami.com',
    instagram: '@sweatrecordsmiami',
    genres: ['electronic', 'hip-hop', 'world', 'indie', 'experimental'],
    formats: ['vinyl'],
    features: ['new-vinyl', 'coffee', 'dog-friendly', 'live-music'],
    price_range: '$$',
    vibe: 'Miami\'s coolest hangout disguised as a record store. Vegan cafe attached, DJ sets on weekends, and a seriously good electronic music selection.',
    owner_name: 'Lolo Reskin',
    year_opened: 2005,
    description: 'Part record store, part vegan cafe, part community hub. Their electronic and Latin selections are phenomenal, and the attached cafe is perfect for post-dig refueling.',
    photo_urls: ['https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800'],
    verified: true,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '8',
    name: "Bull Moose",
    slug: 'bull-moose-portland',
    street_address: '151 Middle St',
    city: 'Portland',
    state: 'Maine',
    postal_code: '04101',
    country: 'US',
    latitude: 43.6568,
    longitude: -70.2553,
    phone: '(207) 780-6424',
    website: 'https://bullmoose.com',
    instagram: '@bullmoosemusic',
    genres: ['rock', 'indie', 'folk', 'punk', 'metal'],
    formats: ['vinyl', 'cd', 'cassette'],
    features: ['new-vinyl', 'used-vinyl', 'buys-records'],
    price_range: '$',
    vibe: 'No-frills New England charm. Great prices, deep used bins, and staff who\'ve been digging longer than you\'ve been alive.',
    year_opened: 1989,
    description: 'A Maine institution that\'s expanded across New England. Known for competitive pricing and a massive used selection. Employee-owned since forever.',
    photo_urls: ['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800'],
    verified: true,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '9',
    name: "Josey Records",
    slug: 'josey-records-dallas',
    street_address: '2821 Lyndon B Johnson Fwy',
    city: 'Dallas',
    state: 'Texas',
    postal_code: '75234',
    country: 'US',
    latitude: 32.9234,
    longitude: -96.8956,
    phone: '(972) 243-5844',
    website: 'https://joseyrecords.com',
    instagram: '@joseyrecords',
    genres: ['hip-hop', 'soul-rnb', 'rock', 'country', 'jazz'],
    formats: ['vinyl', 'cd', 'cassette'],
    features: ['used-vinyl', 'new-vinyl', 'buys-records', 'rare-imports'],
    price_range: '$',
    vibe: 'Warehouse vibes with endless bins to explore. The hip-hop and soul sections are ridiculous. Bring snacks—you\'ll be here a while.',
    year_opened: 2014,
    description: 'A massive warehouse filled with over 200,000 records. Seriously competitive prices and new stock arriving constantly. Destination shopping.',
    photo_urls: ['https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800'],
    verified: true,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '10',
    name: "Everyday Music",
    slug: 'everyday-music-portland',
    street_address: '1313 W Burnside St',
    city: 'Portland',
    state: 'Oregon',
    postal_code: '97209',
    country: 'US',
    latitude: 45.5228,
    longitude: -122.6869,
    phone: '(503) 274-0961',
    website: 'https://everydaymusic.com',
    instagram: '@everydaymusicpdx',
    genres: ['indie', 'rock', 'electronic', 'hip-hop', 'jazz'],
    formats: ['vinyl', 'cd'],
    features: ['used-vinyl', 'new-vinyl', 'buys-records', 'listening-station'],
    price_range: '$',
    vibe: 'Portland weird in the best way. Open late, great cheap finds, and the kind of place where the staff recommendations actually slap.',
    year_opened: 1995,
    description: 'Open until midnight, this Portland staple has survived the digital apocalypse through sheer love of music. Great for late-night digging sessions.',
    photo_urls: ['https://images.unsplash.com/photo-1461784180009-21121b2f204c?w=800'],
    verified: true,
    featured: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// Type definitions for our database
export interface Store {
  id: string;
  name: string;
  slug: string;
  street_address?: string;
  city: string;
  state: string;
  postal_code?: string;
  country: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  website?: string;
  email?: string;
  instagram?: string;
  hours?: Record<string, string>;
  genres: string[];
  formats: string[];
  features: string[];
  price_range?: string;
  vibe?: string;
  owner_name?: string;
  year_opened?: number;
  description?: string;
  ai_description?: string;
  photo_urls: string[];
  source?: string;
  verified: boolean;
  featured: boolean;
  last_visited?: string;
  created_at: string;
  updated_at: string;
}

export interface City {
  id: string;
  name: string;
  state: string;
  slug: string;
  store_count: number;
  guide_content?: string;
  featured: boolean;
  meta_title?: string;
  meta_description?: string;
  created_at: string;
  updated_at: string;
}

export interface Submission {
  id: string;
  store_name: string;
  contact_name?: string;
  contact_email: string;
  phone?: string;
  website?: string;
  city?: string;
  state?: string;
  street_address?: string;
  genres?: string[];
  description?: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

// Helper functions
export async function getStores(options?: {
  state?: string;
  city?: string;
  genre?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
}): Promise<Store[]> {
  // Use mock data if Supabase not configured
  if (!supabase) {
    let results = [...MOCK_STORES];

    if (options?.state) {
      results = results.filter((s) => s.state === options.state);
    }
    if (options?.city) {
      results = results.filter((s) => s.city === options.city);
    }
    if (options?.genre) {
      results = results.filter((s) => s.genres.includes(options.genre!));
    }
    if (options?.featured) {
      results = results.filter((s) => s.featured);
    }

    results.sort((a, b) => a.name.localeCompare(b.name));

    if (options?.offset) {
      results = results.slice(options.offset);
    }
    if (options?.limit) {
      results = results.slice(0, options.limit);
    }

    return results;
  }

  let query = supabase
    .from('recordstore_stores')
    .select('*')
    .order('name');

  if (options?.state) {
    query = query.eq('state', options.state);
  }
  if (options?.city) {
    query = query.eq('city', options.city);
  }
  if (options?.genre) {
    query = query.contains('genres', [options.genre]);
  }
  if (options?.featured) {
    query = query.eq('featured', true);
  }
  if (options?.limit) {
    query = query.limit(options.limit);
  }
  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 24) - 1);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching stores:', error);
    return [];
  }

  return data as Store[];
}

export async function getStoreBySlug(slug: string): Promise<Store | null> {
  // Use mock data if Supabase not configured
  if (!supabase) {
    return MOCK_STORES.find((s) => s.slug === slug) || null;
  }

  const { data, error } = await supabase
    .from('recordstore_stores')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching store:', error);
    return null;
  }

  return data as Store;
}

export async function getCities(options?: { featured?: boolean; limit?: number }): Promise<City[]> {
  if (!supabase) {
    return [];
  }

  let query = supabase
    .from('recordstore_cities')
    .select('*')
    .order('store_count', { ascending: false });

  if (options?.featured) {
    query = query.eq('featured', true);
  }
  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching cities:', error);
    return [];
  }

  return data as City[];
}

export async function getStatesWithCounts(): Promise<{ state: string; count: number }[]> {
  // Use mock data if Supabase not configured
  if (!supabase) {
    const stateCounts: Record<string, number> = {};
    MOCK_STORES.forEach((store) => {
      stateCounts[store.state] = (stateCounts[store.state] || 0) + 1;
    });

    return Object.entries(stateCounts)
      .map(([state, count]) => ({ state, count }))
      .sort((a, b) => b.count - a.count);
  }

  const { data, error } = await supabase
    .from('recordstore_stores')
    .select('state');

  if (error) {
    console.error('Error fetching states:', error);
    return [];
  }

  // Count stores per state
  const stateCounts: Record<string, number> = {};
  data?.forEach((store) => {
    stateCounts[store.state] = (stateCounts[store.state] || 0) + 1;
  });

  return Object.entries(stateCounts)
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count);
}

export async function submitStore(submission: Omit<Submission, 'id' | 'status' | 'created_at'>) {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }

  const { data, error } = await supabase
    .from('recordstore_submissions')
    .insert([{ ...submission, status: 'pending' }])
    .select()
    .single();

  if (error) {
    console.error('Error submitting store:', error);
    throw error;
  }

  return data;
}
