import { Moon } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* Left Details */}
      <div>CollapseButton</div>
      {/* Right Details */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />

        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/56824782?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
