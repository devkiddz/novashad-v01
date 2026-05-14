import CardList from '@/components/CardList';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Progress } from '@/components/ui/progress';
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import EditUser from '@/components/EditUser';
import AppLineChart from '@/components/AppLineChart';
import TodoList from '@/components/TodoList';
import AccountDetails from '@/components/AccountDetails';

const SingleUserPage = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dev Kiddz</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8 space-y-6">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* Earned Badges CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-md font-semibold">Earned Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="ring ring-white/10 rounded-full border-white/10 bg-white/5 text-white p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-normal text-md mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="ring ring-white/10 rounded-full border-white/10 bg-white/5 text-white p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-normal text-md mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="ring ring-white/10 rounded-full border-white/10 bg-white/5 text-white p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-normal text-md mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="ring ring-white/10 rounded-full border-white/10 bg-white/5 text-white p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-normal text-md mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-md font-normal">Account Information</h1>
              <Sheet>
                <SheetTrigger>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">Profile completion</p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-normal text-md">Account Name:</span>
                <span>dev.kiddz</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-normal text-md">Email:</span>
                <span>dev.kiddz@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-normal text-md">Phone:</span>
                <span>+1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-normal text-md">Location:</span>
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-normal text-md">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Joined on 2025.01.01</p>
          </div>
          {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <TodoList />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER */}
          <AccountDetails />

          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-md font-semibold">Activity Tracker</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
