import { EmploymentData, MenuItem } from './app-types';

export const routes = {
  EMPLOYMENT_HISTORY: 'employment-history',
};

export const menuItems: MenuItem[] = [
  {
    route: '',
    text: 'Home',
  },
  {
    route: `/${routes.EMPLOYMENT_HISTORY}`,
    text: 'Employment History',
  },
  // {
  //   routePath: 'personal-projects',
  //   text: 'Personal Projects',
  // },
  // {
  //   routePath: '/contact-me',
  //   text: 'Contact Me',
  // },
];

export const exmploymentDataList: EmploymentData[] = [
  {
    headerData: {
      organization: 'LTIMindtree',
      designation: 'Trainee',
      timeline: 'August 2021 - December 2021',
    },
    bodyData: {
      data: ['Test'],
    },
  },
  {
    headerData: {
      organization: 'LTIMindtree',
      designation: 'Senior Software Engineer',
      timeline: 'December 2021 - January 2025',
    },
    bodyData: {
      data: ['Test'],
    },
  },
  {
    headerData: {
      organization: 'Deloitte USI',
      designation: 'Consultant',
      timeline: 'Febuary 2025 - Present',
    },
    bodyData: {
      data: ['Test'],
    },
  },
];
