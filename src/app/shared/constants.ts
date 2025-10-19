import { EmploymentData, MenuItem } from './app-types';

export const routes = {
  EXPERIENCE: 'experience',
};

export const menuItems: MenuItem[] = [
  {
    route: '',
    text: 'Home',
  },
  {
    route: `/${routes.EXPERIENCE}`,
    text: 'Experience',
  },
  {
    route: '/personal-projects',
    text: 'Personal Projects',
  },
  {
    route: '/contact-me',
    text: 'Contact Me',
  },
];

export const exmploymentDataList: EmploymentData[] = [
  {
    headerData: {
      organization: 'Deloitte USI',
      designation: 'Consultant',
      timeline: 'Febuary 2025 - Present',
    },
    bodyData: {
      data: [],
    },
  },
  {
    headerData: {
      organization: 'LTIMindtree',
      designation: 'Senior Software Engineer',
      timeline: 'Oct 2024 - January 2025',
      //timeline: 'May 2023 - January 2025',
    },
    bodyData: {
      data: [
        'Developed a major chunk of a lazily loaded module and its components giving privileged users of the application the ability to configure some features in the application.',
        'Reduced boilerplate code used in over 20 components on the client application by writing the code to a common reusable component and making it flexible to account for all possible use cases..',
        'Improved the security of the web application on client side by preventing unauthorized access to routes requiring specific roles.',
        'Identified and removed several redundant network calls from the web application improving performance.',
        'Transitioned to a development project for three sprints and worked in a fast-paced environment to redevelop four screens from scratch based off on Figma. The client was impressed that I was pulled in to support for another sprint.',
        'Took ownership of entire features, from development of REST APIs to their integration on the client application and even leveraged knowledge of data structures to construct API responses and UI components based on trees.',
      ],
    },
  },
  {
    headerData: {
      organization: 'LTIMindtree',
      designation: 'Software Engineer',
      timeline: 'December 2021 - March 2023',
    },
    bodyData: {
      data: [
        'Achieved consistent updates across the UI by keeping it in sync with global state.',
        'Cached duplicate calls to upstream systems on backend, optimizing performance.',
        'Shipped components and REST APIs for critical functionalities helping target audience of the application meet their SLAs.',
        'Incorporated best practices and improved code maintainability through use of linting applications and feedback provide from tools like SonarQube.',
        'Addressed critical security vulnerabilities highlighted by applications such as JFrog Xray.',
        'Improved front-end and back-end code coverage by 20% and 30% respectively.',
      ],
    },
  },
  {
    headerData: {
      organization: 'LTIMindtree',
      designation: 'Trainee',
      timeline: 'August 2021 - December 2021',
    },
    bodyData: {
      data: [
        'I was trained in Java for a few weeks before being allotted to the MERN stack',
        'There were challenging milestones to complete in the form of assignments',
        'Final project involved developing a food delivery website with payment gateway integration for which I received a score of 88%',
      ],
    },
  },
];
