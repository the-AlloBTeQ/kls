// lib/db.ts
import { MongoClient, Db } from 'mongodb';

let cachedDb: Db | null = null;
let client: MongoClient | null = null;

export async function connectToDatabase(): Promise<Db> {
  // If we already have a connection, use it
  if (cachedDb) {
    return cachedDb;
  }

  // Check if we have connection string in env vars
  if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  // Connect to the database
  try {
    client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB || 'kls-security');
    
    // Cache the connection
    cachedDb = db;
    
    // Add event listener for proper cleanup
    process.on('beforeExit', () => {
      if (client) {
        client.close();
      }
    });
    
    return db;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

// Helper function to seed the database with initial products
export async function seedProducts() {
  const db = await connectToDatabase();
  const productsCollection = db.collection('products');
  
  // Check if we already have products
  const count = await productsCollection.countDocuments();
  if (count > 0) {
    console.log('Products already seeded');
    return;
  }
  
  // Sample product data
  const products = [
    {
      id: '1',
      name: 'Pro HD Security Camera',
      category: 'cameras',
      price: 1299.99,
      image: '/products/camera-hd.jpg',
      description: 'Professional 1080p HD security camera with night vision and advanced motion detection',
      features: [
        '1080p Full HD Resolution',
        'Night Vision up to 30m',
        'Smart Motion Detection',
        'IP66 Weather Resistant',
        'Mobile App Integration'
      ],
      bestSeller: true,
      stock: 50
    },
    {
      id: '2',
      name: 'Smart Access Control Panel',
      category: 'access',
      price: 2499.99,
      salePrice: 2199.99,
      image: '/products/access-panel.jpg',
      description: 'Advanced access control panel with biometric capabilities and cloud management',
      features: [
        'Facial Recognition',
        'Fingerprint Scanner',
        'RFID Card Support',
        'Cloud Management',
        'Anti-tailgating Features'
      ],
      new: true,
      stock: 25
    },
    {
      id: '3',
      name: 'Smart Home Alarm System',
      category: 'alarms',
      price: 3499.99,
      image: '/products/alarm-system.jpg',
      description: 'Complete smart alarm system with smartphone integration and voice control',
      features: [
        'Smartphone Control',
        'Voice Assistant Compatible',
        'Window/Door Sensors',
        'Motion Detectors',
        'Backup Battery'
      ],
      stock: 30
    },
    {
      id: '4',
      name: 'Advanced Motion Sensor',
      category: 'monitoring',
      price: 599.99,
      image: '/products/motion-sensor.jpg',
      description: 'High-sensitivity motion detection sensor with pet immunity and false alarm filtering',
      features: [
        'Pet Immunity up to 30kg',
        'Dual Technology Detection',
        'False Alarm Prevention',
        'Wireless Installation',
        '2-Year Battery Life'
      ],
      stock: 100
    },
    {
      id: '5',
      name: '4K Ultra HD CCTV System',
      category: 'cameras',
      price: 6999.99,
      salePrice: 5999.99,
      image: '/products/cctv-system.jpg',
      description: 'Complete 4K surveillance system with 8 cameras and 2TB storage',
      features: [
        '4K Ultra HD Resolution',
        '8 Weather-resistant Cameras',
        '2TB Surveillance Hard Drive',
        'AI Person Detection',
        'Mobile & Desktop Viewing'
      ],
      bestSeller: true,
      stock: 15
    },
    {
      id: '6',
      name: 'Biometric Door Lock',
      category: 'access',
      price: 1899.99,
      image: '/products/door-lock.jpg',
      description: 'Secure fingerprint and code door lock with remote management capabilities',
      features: [
        'Fingerprint Recognition',
        'PIN Code Access',
        'Mobile App Control',
        'Emergency Override',
        'Tamper Alarm'
      ],
      new: true,
      stock: 40
    },
    {
      id: '7',
      name: 'Perimeter Security Kit',
      category: 'alarms',
      price: 4299.99,
      image: '/products/perimeter-kit.jpg',
      description: 'Complete perimeter protection system for residential and small business properties',
      features: [
        'Beam Sensors',
        'Outdoor Motion Detectors',
        'Wireless Installation',
        'Weather Resistant',
        'Smart Notifications'
      ],
      stock: 20
    },
    {
      id: '8',
      name: 'Professional Monitoring Station',
      category: 'monitoring',
      price: 7999.99,
      image: '/products/monitoring-station.jpg',
      description: 'Professional-grade monitoring station for security control rooms',
      features: [
        'Quad Monitor Support',
        'Security Management Software',
        'Multi-Site Management',
        'Incident Logging',
        'Dispatch Integration'
      ],
      stock: 5
    }
  ];
  
  try {
    await productsCollection.insertMany(products);
    console.log(`Inserted ${products.length} products`);
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

// Get single product by ID
export async function getProductById(productId: string) {
  const db = await connectToDatabase();
  return db.collection('products').findOne({ id: productId });
}

// Update product
export async function updateProduct(productId: string, updates: any) {
  const db = await connectToDatabase();
  return db.collection('products').updateOne(
    { id: productId },
    { $set: updates }
  );
}

// Create a new order
export async function createOrder(orderData: any) {
  const db = await connectToDatabase();
  return db.collection('orders').insertOne({
    ...orderData,
    createdAt: new Date()
  });
}

// Get orders for a customer
export async function getCustomerOrders(customerId: string) {
  const db = await connectToDatabase();
  return db.collection('orders')
    .find({ 'customerInfo.id': customerId })
    .sort({ createdAt: -1 })
    .toArray();
}

// Get order by ID
export async function getOrderById(orderId: string) {
  const db = await connectToDatabase();
  return db.collection('orders').findOne({ orderId });
}

// Update order status
export async function updateOrderStatus(orderId: string, status: string) {
  const db = await connectToDatabase();
  return db.collection('orders').updateOne(
    { orderId },
    { 
      $set: { 
        status,
        updatedAt: new Date()
      } 
    }
  );
}