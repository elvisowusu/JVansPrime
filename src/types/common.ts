import { LucideIcon } from "lucide-react";

export interface SidebarTab {
  title: string;
  url: string;
  icon: LucideIcon;
}

export interface socialIconLink {
  icon: string;
  link: string;
}
export interface FooterLink {
  text: string;
  link: string;
}
export interface FooterSection {
  title: string;
  links?: FooterLink[];
  iconLink?: socialIconLink[];
}

export interface NavLink {
  link: string;
  text: string;
}

export interface FeatureSection {
  icon: LucideIcon;
  text: string;
}

export interface AccommodationList {
  title: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

type CarSpec = {
  icon: React.ReactNode;
  value: string;
};

type Car = {
  id: string | number;
  name: string;
  image?: string;
  specs: CarSpec[];
  dailyRate: number;
};

export interface CarGridProps {
  carList: Car[];
}

export interface SalonCarList {
  id: string;
  name: string;
  image: string;
  specs: CarSpec[];
  dailyRate: number;
}

export interface SuvList {
  id: string;
  name: string;
  image: string;
  specs: CarSpec[];
  dailyRate: number;
}

export interface BusList {
  id: string;
  name: string;
  image: string;
  specs: CarSpec[];
  dailyRate: number;
}
