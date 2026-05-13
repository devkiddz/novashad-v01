import React from 'react';
import { Calendar, Group, Home, Inbox, Search, Settings } from 'lucide-react';
import { User } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import Link from 'next/link';

export default function AppSidebar() {
  const items = [
    {
      title: 'Home',
      url: '/',
      icon: Home
    },
    {
      title: 'Inbox',
      url: '#',
      icon: Inbox
    },
    {
      title: 'Calendar',
      url: '#',
      icon: Calendar
    },
    {
      title: 'Search',
      url: '#',
      icon: Search
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings
    }
  ];
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        {/* First Sidebar Contents Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* First Sidebar Contents Group */}

        {/* First Sidebar Contents Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* First Sidebar Contents Group */}
        {/* First Sidebar Contents Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* First Sidebar Contents Group */}
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
