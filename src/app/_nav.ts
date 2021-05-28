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
    url: 'https://dashboard.cowin.gov.in/',
    icon: 'icon-drop'
  },
  {
    name: 'Covid19 Self Checker',
    url: 'https://neubergdiagnostics.com/covid19-selfassessment/selfchecker.html',
    icon: 'icon-pencil',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Resources',
    url: 'https://jam4.sapjam.com/groups/SxM5GuzBIhfUECmNpLGnle/overview_page/vFHjzlpe4giaC8sVG2sL81',
    icon: 'icon-puzzle'
  },
  {
    name: 'FAQs',
    url: 'https://www.mohfw.gov.in/pdf/FAQCoWINforcitizens.pdf',
    icon: 'icon-cursor'
  },
  {
    name: 'Hospitals',
    url: 'https://www.uhcpindia.com/web/statenotifications/documents/Networks/COVID%20-%20NETWORK%20HOSPITAL.pdf',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Privacy Policy',
    url: '/base/cards',
    icon: 'icon-bell',
  },
  {
    name: 'Terms Of Use',
    url: '/widgets',
    icon: 'icon-calculator',
  },
  {
    name: 'Our Team',
    url: '/success',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'App Version - 1.0.0',
    icon: 'icon-star',
    attributes: { disabled: true },
  }
];
