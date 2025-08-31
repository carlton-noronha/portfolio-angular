export type MenuItem = {
  route: string;
  text: string;
};

export type EmploymentData = {
  headerData: {
    organization: string;
    designation: string;
    timeline: string;
  };
  bodyData: { data: string[] };
};
