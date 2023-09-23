interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'HR Manager', 'Payroll Officer', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/af7ecbf6-944a-4186-a1de-1fcf573e1948',
};
