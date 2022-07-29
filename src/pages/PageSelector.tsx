import { Account } from "./MainPages/Account";

export const PageSelector = ({ page }: { page: string }) => {
  switch (page) {
    case "home":
      return <h1>Home</h1>;
    case "dashboard":
      return <h1>Dashboard</h1>;
    case "analytics":
      return <h1>Analytics</h1>;
    case "releases":
      return <h1>Releases</h1>;
    case "account":
      return <Account />;
    case "security":
      return <h1>Security</h1>;
    case "settings":
      return <h1>Settings</h1>;
    default:
      return <></>;
  }
};
