// Mock data for Garena Store SG clone

export const games = [
  {
    id: 'shell',
    name: 'Shell Top Up',
    icon: 'https://cdn-gop.garenanow.com/gop/app/0000/010/096/icon.png',
    banner: 'https://contentgarena-a.akamaihd.net/GOP/newshop_banners/Shell_MY_PC.png?v=1728630072',
    pointIcon: 'https://cdn-gop.garenanow.com/gop/app/0000/010/096/point.png',
    pointLabel: 'Shell',
    badge: null,
    amounts: [320, 640, 960, 1600, 3200, 24000],
    redeemAmounts: [100, 500, 1000, 2000],
    accent: '#d92027'
  },
  {
    id: 'freefire',
    name: 'Free Fire',
    icon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/067/icon.png',
    banner: 'https://contentgarena-a.akamaihd.net/GOP/newshop_banners/FF_SG_PC.png',
    pointIcon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/067/point.png',
    pointLabel: 'Diamonds',
    badge: null,
    amounts: [100, 310, 520, 1060, 2180, 5600],
    redeemAmounts: [100, 500, 1000],
    accent: '#ff6a00'
  },
  {
    id: 'codm',
    name: 'Call of Duty: Mobile - Garena',
    icon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/082/icon.png',
    banner: 'https://contentgarena-a.akamaihd.net/GOP/newshop_banners/CODM_SG_PC.png',
    pointIcon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/082/point.png',
    pointLabel: 'CP',
    badge: null,
    amounts: [80, 400, 800, 2000, 5000, 10000],
    redeemAmounts: [100, 500],
    accent: '#0f2027'
  },
  {
    id: 'deltaforce',
    name: 'Delta Force',
    icon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/151/icon.png',
    banner: 'https://contentgarena-a.akamaihd.net/GOP/newshop_banners/DF_SG_PC.png',
    pointIcon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/151/point.png',
    pointLabel: 'D-Coin',
    badge: null,
    amounts: [60, 300, 980, 1980, 3280, 6480],
    redeemAmounts: [],
    accent: '#4a3520'
  },
  {
    id: 'haikyu',
    name: 'HAIKYU!! FLY HIGH',
    icon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/153/icon.png',
    banner: 'https://contentgarena-a.akamaihd.net/GOP/newshop_banners/HKY_SG_PC.png',
    pointIcon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/153/point.png',
    pointLabel: 'Gems',
    badge: null,
    amounts: [60, 300, 980, 1980, 3280, 6480],
    redeemAmounts: [],
    accent: '#ff8c00'
  },
  {
    id: 'aov',
    name: 'Garena AOV - Arena of Valor',
    icon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/057/icon.png',
    banner: 'https://contentgarena-a.akamaihd.net/GOP/newshop_banners/AOV_SG_PC.png',
    pointIcon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/057/point.png',
    pointLabel: 'Vouchers',
    badge: null,
    amounts: [40, 200, 400, 1000, 2000, 4000],
    redeemAmounts: [100, 500],
    accent: '#3a1f5c'
  },
  {
    id: 'undawn',
    name: 'Garena Undawn',
    icon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/105/icon.png',
    banner: 'https://contentgarena-a.akamaihd.net/GOP/newshop_banners/UND_SG_PC.png',
    pointIcon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/105/point.png',
    pointLabel: 'Gold',
    badge: null,
    amounts: [60, 300, 980, 1980, 3280, 6480],
    redeemAmounts: [],
    accent: '#8a2820'
  },
  {
    id: 'speed',
    name: 'Speed Drifters',
    icon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/070/icon.png',
    banner: 'https://contentgarena-a.akamaihd.net/GOP/newshop_banners/SD_SG_PC.png',
    pointIcon: 'https://cdn-gop.garenanow.com/gop/app/0000/100/070/point.png',
    pointLabel: 'Diamonds',
    badge: null,
    amounts: [60, 300, 980, 1980, 3280, 6480],
    redeemAmounts: [],
    accent: '#ffb700'
  }
];

export const paymentMethods = [
  {
    id: 'shopeepay',
    name: 'ShopeePay',
    icon: 'https://cdn-gop.garenanow.com/webmain/static/payment_center/sg/menu/shopeepay_epic_mb.png',
    promo: true
  },
  {
    id: 'paypal',
    name: 'Paypal',
    icon: 'https://cdn-gop.garenanow.com/webmain/static/payment_center/sg/menu/mobile/paypal_mobile.png',
    promo: false
  },
  {
    id: 'razergold',
    name: 'Razer Gold Wallet',
    icon: 'https://cdn-gop.garenanow.com/gop/static/channel/0000/201/003/icon.png',
    promo: false
  },
  {
    id: 'googlepay',
    name: 'Google Pay',
    icon: '/gpay-logo.jpg',
    promo: false
  }
];

export const footerLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Help Center', href: '#help' },
  { label: 'Terms and Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' }
];
