 const pricing = {
    tiers: [
      {
        name: 'Light',
        id: 'tier-light',
        href: '#',
        price: '€850',
        description: 'The essentials to showcase your endeavours',
        features: ['No monthly fees', 'domain included'],
        mostPopular: false,
        buttonText: 'Buy Plan',
      },
      {
        name: 'Pro',
        id: 'tier-buisness',
        href: '#',
        price: '€1500',
        description: 'The essentials to provide your best work for clients.',
        features: ['No monthly fees','domain included', 'content management system', 'E-commerce integration',],
        mostPopular: true,
        buttonText: 'Buy Plan',
      },
      {
        name: 'Custom',
        id: 'tier-enterprise',
        href: '/contact',
        price: 'inquire for pricing',
        description: 'A fully customised web-app tailored to your exact needs.',
        features: [],
        mostPopular: false,
        buttonText:'Contact us',
      },
    ],
  }
  

  export default pricing