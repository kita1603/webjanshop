import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Crowd Fuding',
    imgUrl: dashboard,
    link: '/crowdfunding',
  },
  {
    name: 'Home',
    imgUrl: createCampaign,
    link: '/',
  },
  {
    name: 'Shop',
    imgUrl: payment,
    link: '/Shop',
    // disabled: true,
  },
  {
    name: 'Cart',
    imgUrl: withdraw,
    link: '/Cart',
    disabled: true,
  },
  {
    name: 'Funding profile',
    imgUrl: profile,
    link: 'wallet-profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];