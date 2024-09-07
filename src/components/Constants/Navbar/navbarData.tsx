import AboutLayout from "../../Layout/AboutLayout";
import ProductLayout from "../../Layout/ProductLayout";
import ApplicationPage from "../../Layout/ApplicationLayout";
import { supporItem, supportMobile } from "./support-data";
import { DataBankItem, ResourcesMobile } from "./resources-data";
import SupportGrid from "@/components/Layout/Support";
import ResourceGrid from "@/components/Layout/ResourceLayout";

export interface NavbarItem {
  name: string;
  link:string;
  component?: React.ReactNode;
  type?: string;
}

export const navbarItems: NavbarItem[] = [
  {
    name: "About Us",
    link:"about",
    component: <AboutLayout />,
  },
  {
    name: "Products",
    link:"Products",
    component: (
      <ProductLayout
        setHoveredItem={() => {}}
        setHeading={() => {}}
        setIsVisible={() => {}}
      />
    ),
  },
  {
    name: "Application",
    link:"application",
    component: <ApplicationPage />,
  },
 
  {
    name: "Support",
    link:"support",
    component: (
      <SupportGrid supporItem={supporItem} supportMobile={supportMobile} />
    ),
  },
  {
    name: "Resources",
    link:"resources",
    component: <ResourceGrid supporItem={DataBankItem} ResourcesMobile={ResourcesMobile} />,
  },
  {
    name: "Video",
    link:"video",
    component: <ResourceGrid supporItem={DataBankItem} ResourcesMobile={ResourcesMobile} />,
  },
  {
    name: "Contact", 
    link:"contact"
  },
];
// for mobile
