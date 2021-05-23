import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Status Check',
    url: '/theme/colors',
    icon: 'icon-drop',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Health Check',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Resources',
    url: '/Resources',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'FAQs',
    url: '/buttons',
    icon: 'icon-cursor'
  },
  {
    name: 'Hospitals',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Settings',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Delete My Account',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Change Password',
        url: '/icons/flags',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Privacy Policy',
    url: '/notifications',
    icon: 'icon-bell',
  },
  {
    name: 'Terms Of Use',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Our Team',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'App Version - 1.0.0',
    url: '/pages',
    icon: 'icon-star',
    attributes: { disabled: true },
  }
];
