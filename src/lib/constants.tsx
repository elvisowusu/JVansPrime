import {
  BadgeIcon,
  Building2,
  CalendarClockIcon,
  CarFrontIcon,
  HomeIcon,
  PercentIcon,
  Plane,
  Share2Icon,
  UserIcon,
  WalletIcon,
} from "lucide-react";

import { FeatureSection, FooterSection, NavLink, SidebarTab } from "@/types/common";

export const SidebarTabs: SidebarTab[] = [
  { title: "Overview", url: "/dashboard/dashboard-overview", icon: HomeIcon },
  { title: "Users", url: "/dashboard/users", icon: UserIcon },
  { title: "Membership", url: "/dashboard/membership", icon: BadgeIcon },
  { title: "Booking", url: "/dashboard/bookings", icon: CalendarClockIcon },
  { title: "Events", url: "/dashboard/events", icon: Share2Icon },
  { title: "Discount Cards", url: "/dashboard/discount-cards", icon: PercentIcon },
  { title: "Revenue", url: "/dashboard/revenue", icon: WalletIcon },
];

export const PAGE_TITLES: Record<string, string> = {
  "/dashboard/dashboard-overview": "Overview",
  "/dashboard/users": "User Management",
  "/dashboard/membership": "Membership Management",
  "/dashboard/bookings": "Travel Bookings",
  "/dashboard/events": "Events Management",
  "/dashboard/discount-cards": "Discount Cards Management",
  "/dashboard/revenue": "Revenue & Payments",
};

export const navLinks: NavLink[] = [
  { link: "/", text: "Home" },
  { link: "/about-us", text: "About Us" },
  { link: "/membership", text: "Membership" },
  { link: "/services", text: "Services" },
  { link: "/tour-and-events", text: "Tours & Events" },
  { link: "/contact-us", text: "Contact Us" },
  { link: "/partners", text: "Partners" },
];
export const footerSections: FooterSection[] = [
  {
    title: "Discover",
    links: [
      { text: "Our Discount card", link: "/discount-card" },
      { text: "Membership packages", link: "/membership" },
      { text: "blog", link: "/blog" },
      { text: "Our Cooperate Social Responsibilities", link: "/csr" },
      { text: "careers", link: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Travel Packing Tips", link: "/travel-packing-tips" },
      { text: "Ghana Safety Information", link: "/ghana-safety-information" },
      { text: "Travel Safety Tips", link: "/travel-safety-tips" },
      { text: "Securing a Visa to Ghana", link: "/securing-visa" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Terms of use", link: "/terms-of-use" },
      { text: "Privacy Policy", link: "/privacy-policy" },
      { text: "FAQs", link: "/faq" },
    ],
  },
  {
    title: "Get Connected",
    iconLink: [
      { icon: "/assets/pngs/x.png", link: "https://twitter.com" },
      { icon: "/assets/pngs/linkedIn.png", link: "https://linkedin.com" },
      { icon: "/assets/pngs/facebook.png", link: "https://facebook.com" },
      { icon: "/assets/pngs/instagram.png", link: "https://instagram.com" },
    ],
  },
];