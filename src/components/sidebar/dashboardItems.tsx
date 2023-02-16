import { SidebarItemsType } from '../../types/sidebar';

import { Sliders } from 'react-feather';

const pagesSection = [
  {
    href: '/dashboard',
    icon: Sliders,
    title: 'Dashboard',
    children: [
      {
        href: '/dashboard/analytics',
        title: 'Analytics',
      },
    ],
  },
] as SidebarItemsType[];

const navItems = [
  {
    title: 'Pages',
    pages: pagesSection,
  },
];

export default navItems;
