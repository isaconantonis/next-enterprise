  const pricing = {
    tiers: [
      {
        name: 'Light',
        id: 'tier-light',
        href: '#',
        price: '€850',
        description: 'The essentials to showcase your endeavours in a static website.',
        features: ['Custom design','No monthly fees', 'domain included'],
        mostPopular: false,
        buttonText: 'Buy Plan',
        previewAvailable: false,
        previewHref: '#',
      },
      {
        name: 'Pro',
        id: 'tier-buisness',
        href: '#',
        price: '€1500',
        description: 'A professional site with direct control over content.',
        features: ['Custom design','No monthly fees','Domain included', 'Content Management System', 'E-commerce integration',],
        mostPopular: true,
        buttonText: 'Buy Plan',
        previewAvailable: true,
        previewHref: '#',
      },
      {
        name: 'Custom',
        id: 'tier-enterprise',
        href: '/contact',
        price: 'Inquire for pricing',
        description: 'A fully customised web-app tailored to your exact needs.',
        features: ['Whatever you need',],
        mostPopular: false,
        buttonText:'Contact us',
        previewAvailable: false,
      },
    ],
  }
  

  export default pricing