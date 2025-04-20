import {
    HomeIcon,
    UserIcon,
    TicketIcon,
    CogIcon,
  } from '@heroicons/react/24/outline'
  import { ComponentType, SVGProps } from 'react'
  
  export interface NavItem {
    label: string
    href: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
    active?: boolean
  }
  
  export const navItems: NavItem[] = [
    { label: 'Dashboard', href: '#', icon: HomeIcon, active: true },
    { label: 'Accounts', href: '#', icon: UserIcon },
    { label: 'Tickets', href: '#', icon: TicketIcon },
    { label: 'Settings', href: '#', icon: CogIcon },
  ]
  