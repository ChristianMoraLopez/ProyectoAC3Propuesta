const data: Record<TProductId, TProduct> = {
  'a1b2c3d4': {
    name: 'Echo Dot (4th generation)',
    sku: 'MW79ZZ6Y',
    id: 'a1b2c3d4',
    brand: 'Amazon',
    price: 4999,
    image: '/images/echo_dot.jpg',
    attributes: {
      description: 'Set of 2',
      color: 'Charcoal',
      connectivity: 'Bluetooth, Wi-Fi',
      power_source: 'Corded Electric',
      dimensions: '3.9” x 3.9” x 3.5”',
    },
  },
  'e5f6g7h8': {
    name: 'Kindle Paperwhite',
    sku: 'ZY3T9XXC',
    id: 'e5f6g7h8',
    brand: 'Amazon',
    price: 10999,
    image: '/images/kindle_paperwhite.jpg',
    attributes: {
      description: 'Set of 2',
      color: 'Black',
      display: '6” glare-free display',
      connectivity: 'Wi-Fi',
      storage: '8 GB',
      dimensions: '6.6” x 4.6” x 0.3”',
    },
  },
  'i9j0k1l2': {
    name: 'AmazonBasics Portable Power Bank',
    id: 'i9j0k1l2',
    brand: 'AmazonBasics',
    sku: 'B4HZ42TM',
    price: 2499,
    image: '/images/portable_power_bank.jpg',
    attributes: {
      description: 'Set of 2',
      capacity: '10,000 mAh',
      ports: '2 USB ports',
      weight: '6.8 oz',
      dimensions: '5.7” x 2.7” x 0.6”',
    },
  },
  'm3n4o5p6': {
    name: 'AmazonBasics Lightweight Microfiber Sheet Set',
    sku: 'ZY3T9XXC',
    id: 'm3n4o5p6',
    brand: 'AmazonBasics',
    price: 1999,
    image: '/images/microfiber_sheet_set.jpg',
    attributes: {
      description: 'Set of 2',
      size: 'Queen',
      color: 'Navy Blue',
      material: '100% Polyester Microfiber',
      thread_count: '90 GSM',
    },
  },
  'q7r8s9t0': {
    name: 'Fire TV Stick 4K',
    sku: 'B4HZ42TM',
    id: 'q7r8s9t0',
    brand: 'Amazon',
    price: 4999,
    image: '/images/fire_tv_stick_4k.jpg',
    attributes: {
      description: 'Set of 2',
      resolution: '4K Ultra HD, HDR, HDR10+, Dolby Vision, HLG',
      storage: '8 GB',
      connectivity: 'Wi-Fi, Bluetooth',
      dimensions: '3.9” x 1.2” x 0.5”',
    },
  },
  'u1v2w3x4': {
    name: 'AmazonBasics Neoprene Dumbbell Hand Weights',
    sku: 'N55229ZA',
    id: 'u1v2w3x4',
    brand: 'AmazonBasics',
    price: 2299,
    image: '/images/dumbbell_hand_weights.jpg',
    attributes: {
      description: 'Set of 2',
      weight: '5 Pounds',
      material: 'Neoprene',
      grip_type: 'Textured Grip',
      dimensions: '8.7” x 4.7” x 2.7”',
    },
  },
}

export default data
