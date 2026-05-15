'use client';

import React from 'react';
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  LogOut,
  MoveIcon,
  Plus,
  Projector,
  Scale,
  Search,
  Settings,
  User,
  User2
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

export default function AppSidebar() {
  // Menu Items
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
    <Sidebar className="" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="NovaPanel" width={32} height={32} className="rounded-full" />
                <>NovaPanel</>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      {/* Sidebar header contents ends here */}
      {/* First Sidebar Contents Group */}
      <SidebarContent>
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
                  {item.title === 'Inbox' && (
                    <SidebarMenuBadge className="text-blue-100 bg-blue-800 ring-1 ring-blue-100">
                      9
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* First Sidebar Contents Group */}

        {/* Advance Collapse Menu Actions */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel>
              <CollapsibleTrigger className="flex items-center gap-2 w-full p-y-3">
                <span>View All Projects</span>
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link href="#" className="flex items-center gap-2">
                        <Projector />
                        <span>Event Planner</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link href="#" className="flex items-center gap-2">
                        <MoveIcon />
                        <span>Movie Hub</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link href="#" className="flex items-center gap-2">
                        <Scale />
                        <span>Budget Planner</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* Advance Collapse Menu Actions */}
      </SidebarContent>
      {/* Sidebar Footer Contents */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full">
                <SidebarMenuButton className="w-full">
                  <User2 />
                  <span className="text-white font-bold">Dev</span>Kiddz
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <User className="w-[1.2rem] h-[1.2rem] mr-2" />
                  <Link href="/users/profile">Profile </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-[1.2rem] h-[1.2rem] mr-2" />
                  <Link href="#">Settings </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {' '}
                  <LogOut className="w-[1.2rem] h-[1.2rem] mr-2" />
                  <Link href="#">Logout! </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
