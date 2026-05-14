'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

export type Payment = {
  id: string;
  amount: number;
  username: string;
  email: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
};

const statusStyles: Record<Payment['status'], string> = {
  pending: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-500',

  processing: 'border-sky-500/20 bg-sky-500/10 text-sky-400',

  success: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',

  failed: 'border-red-500/20 bg-red-500/10 text-red-400'
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',

    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),

    enableSorting: false,
    enableHiding: false
  },

  {
    accessorKey: 'username',

    header: 'User',

    cell: ({ row }) => <div className="font-medium">{row.getValue('username')}</div>
  },

  {
    accessorKey: 'email',

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-accent/50"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

    cell: ({ row }) => <div className="text-muted-foreground">{row.getValue('email')}</div>
  },

  {
    accessorKey: 'status',

    header: 'Status',

    cell: ({ row }) => {
      const status = row.getValue('status') as Payment['status'];

      return (
        <div className={cn('w-max rounded-md border px-2 py-1 text-xs capitalize', statusStyles[status])}>
          {status}
        </div>
      );
    }
  },

  {
    accessorKey: 'amount',

    header: () => <div className="text-right">Amount</div>,

    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    }
  },

  {
    id: 'actions',

    enableHiding: false,

    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-accent/50">
              <span className="sr-only">Open menu</span>

              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>View customer</DropdownMenuItem>

            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
