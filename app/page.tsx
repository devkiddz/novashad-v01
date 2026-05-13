import AppAreaChart from '@/components/AppAreaChart';
import AppBarchart from '@/components/AppBarChart';
import { Maname } from 'next/font/google';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarchart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Hello, Next.js!</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Hello, Next.js!</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Hello, Next.js!</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Hello, Next.js!</div>
    </div>
  );
}
