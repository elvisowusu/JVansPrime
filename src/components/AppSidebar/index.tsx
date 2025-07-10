"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarTabs } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SidebarTab } from "@/types/common";

export function AppSidebar() {
  const pathname = usePathname();
  const tabTransition = "transition-all duration-150 ease-in-out";
  return (
    <Sidebar>
      <SidebarHeader className="px-8 p-5 h-15 bg-white ">
        <Image src={"/assets/svgs/logo.svg"} width={80} height={25} alt="accra travel club" />
      </SidebarHeader>
      <SidebarContent className="px-2 pt-4 bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarTabs.map((item: SidebarTab) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={pathname === item.url} asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        "text-gray-500 py-5 border-transparent rounded-l-none",
                        { tabTransition },
                        {
                          "!text-[#739C7F] border-l-[3px] border-[#739C7F]": pathname === item.url,
                        }
                      )}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
