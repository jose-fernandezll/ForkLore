import barranquillaHero from './assets/images/barranquilla_hero.png';
import medellinHero from './assets/images/medellin_hero.png';
import bogotaHero from './assets/images/bogota_hero.png';
import cartagenaHero from './assets/images/cartagena_hero.png';

export const regions = [
  {
    id: 'barranquilla',
    name: 'Barranquilla',
    heroTitle: 'Celebrate the Spirit of Barranquilla',
    heroSubtitle: 'From high-end coastal restaurants to hidden street gems, discover the authentic flavors and vibrant commerce of the Golden Gate of Colombia.',
    heroImage: barranquillaHero,
    aboutTitle: 'The Golden Gate to Authentic Experiences',
    aboutText: 'ForkLore is more than a culinary guide; it\'s a bridge to the vibrant soul of Barranquilla. We showcase the perfect blend of high-end restaurants, traditional commerce, and those specialized street flavors that define our identity.',
    palette: {
      primary: '#D62828', // Red
      secondary: '#003049', // Blue
      accent: '#FCBF49', // Yellow
      brand: '#009639', // Green (Barranquilla inner star/color)
      background: '#FDFCF0'
    },
    routes: [
      { id: 1, title: 'Coastal Fine Dining', desc: 'Indulge in high-end cuisine with the freshest sea flavors.', icon: '🦞' },
      { id: 2, title: 'Artisanal Commerce', desc: 'Explore boutique shops and local artisanal markets.', icon: '🏺' },
      { id: 3, title: 'Street Gastronomy', desc: 'The heart of our flavor, from specialized stalls to hidden gems.', icon: '🍲' },
    ]
  },
  {
    id: 'medellin',
    name: 'Medellín',
    heroTitle: 'Taste the Innovation of Medellín',
    heroSubtitle: 'Explore the City of Eternal Spring through its mountain flavors, avant-garde coffee shops, and world-class culinary innovation.',
    heroImage: medellinHero,
    aboutTitle: 'A Mountain Haven of Culinary Art',
    aboutText: 'In Medellín, tradition meets modernity. From the heart of family-run kitchens in Antioquia to the most sophisticated rooftop bistros, we invite you to discover a city that reinvents its flavor every day.',
    palette: {
      primary: '#2D6A4F', // Medellín Green
      secondary: '#1B4332', // Dark Forest
      accent: '#95D5B2', // Light Mint
      brand: '#000000', // Black (Medellín accent)
      background: '#F7FDF9'
    },
    routes: [
      { id: 1, title: 'Mountain Gourmet', desc: 'Savor sophisticated takes on traditional Antioquian recipes.', icon: '⛰️' },
      { id: 2, title: 'Coffee & Innovation', desc: 'Tour specialized coffee shops and innovative food tech hubs.', icon: '☕' },
      { id: 3, title: 'Traditional Paisa', desc: 'Experience the authentic rural flavors that built our heritage.', icon: '🍛' },
    ]
  },
  {
    id: 'bogota',
    name: 'Bogotá',
    heroTitle: 'Savor the Altitude of Bogotá',
    heroSubtitle: 'Journey through the historic capital, from colonial food markets to the most exclusive dining experiences in the Andes.',
    heroImage: bogotaHero,
    aboutTitle: 'A Melting Pot of National Flavor',
    aboutText: 'Bogotá is center of Colombia\'s gastronomic diversity. Discover where every region of the country meets in the cozy bistros of La Candelaria and the bustling markets of the historic center.',
    palette: {
      primary: '#D62828', // Bogotá Red
      secondary: '#1A1A1A', // Urban Grey
      accent: '#FCBF49', // Bogotá Yellow
      brand: '#8B0000', // Crimson
      background: '#FDFAFC'
    },
    routes: [
      { id: 1, title: 'Historic Markets', desc: 'Walk through centuries-old markets and taste national staples.', icon: '🏛️' },
      { id: 2, title: 'High-Altitude Dining', desc: 'Exclusive experiences in the best restaurants of the capital.', icon: '🏙️' },
      { id: 3, title: 'Craft & Culture', desc: 'Explore local design boutiques and artisanal food craft.', icon: '🎨' },
    ]
  },
  {
    id: 'cartagena',
    name: 'Cartagena',
    heroTitle: 'Indulge in the Magic of Cartagena',
    heroSubtitle: 'Experience the Caribbean soul through its colonial charm, tropical commerce, and the freshest seafood on the Atlantic coast.',
    heroImage: cartagenaHero,
    aboutTitle: 'A Tropical Tale of Taste and History',
    aboutText: 'Behind the stone walls of the old city lies a world of tropical flavors. Cartagena offers a unique blend of Spanish heritage, African roots, and Caribbean freshness that will captivate your senses.',
    palette: {
      primary: '#003049', // Cartagena Sea Blue
      secondary: '#D62828', // Colonial Red
      accent: '#FCBF49', // Sun Yellow
      brand: '#009639', // Tropical Green
      background: '#FFFDF5'
    },
    routes: [
      { id: 1, title: 'Colonial Luxury', desc: 'Dine in historic courtyards with world-class Caribbean fusion.', icon: '🏯' },
      { id: 2, title: 'Coastal Commerce', desc: 'Shop for luxury tropical fashion and artisanal emeralds.', icon: '💎' },
      { id: 3, title: 'Traditional Seafood', desc: 'The most authentic fish and coconut rice experiences.', icon: '🏖️' },
    ]
  }
];
