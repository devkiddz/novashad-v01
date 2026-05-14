'use client';

import { useState } from 'react';
import { Card, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from './ui/calendar';
import { Badge } from './ui/badge';

const tagColors = [
  'bg-[var(--chart-1)]/10 text-[var(--chart-1)] border-[var(--chart-1)]/20',
  'bg-[var(--chart-2)]/10 text-[var(--chart-2)] border-[var(--chart-2)]/20',
  'bg-[var(--chart-3)]/10 text-[var(--chart-3)] border-[var(--chart-3)]/20',
  'bg-[var(--chart-4)]/10 text-[var(--chart-4)] border-[var(--chart-4)]/20',
  'bg-[var(--chart-5)]/10 text-[var(--chart-5)] border-[var(--chart-5)]/20'
];
export const programmingTodos = [
  {
    title: 'Build reusable dashboard cards',
    place: 'Home Workspace',
    time: '08:00 AM',
    date: '2026-05-15',
    isActive: true,
    tags: ['Next.js', 'TypeScript', 'UI Design']
  },
  {
    title: 'Refactor chart components',
    place: 'VS Code',
    time: '11:30 AM',
    date: '2026-05-15',
    isActive: true,
    tags: ['Recharts', 'Optimization', 'Frontend']
  },
  {
    title: 'Study server actions in Next.js',
    place: 'YouTube / Docs',
    time: '03:00 PM',
    date: '2026-05-16',
    isActive: false,
    tags: ['Next.js', 'Server Actions', 'Learning']
  },
  {
    title: 'Push latest dashboard updates to GitHub',
    place: 'GitHub',
    time: '06:00 PM',
    date: '2026-05-16',
    isActive: true,
    tags: ['Git', 'Deployment', 'Portfolio']
  }
];

export const jobTodos = [
  {
    title: 'Apply for junior frontend developer role',
    place: 'Remote',
    time: '10:00 AM',
    date: '2026-05-17',
    isActive: true,
    tags: ['Frontend', 'Remote', 'React']
  },
  {
    title: 'Update portfolio resume',
    place: 'Canva',
    time: '01:00 PM',
    date: '2026-05-17',
    isActive: true,
    tags: ['Resume', 'Portfolio', 'Career']
  },
  {
    title: 'Research internship opportunities',
    place: 'LinkedIn',
    time: '04:30 PM',
    date: '2026-05-18',
    isActive: false,
    tags: ['Internship', 'Tech Jobs', 'Networking']
  }
];

export const trainingTodos = [
  {
    title: 'Complete advanced Tailwind CSS tutorial',
    place: 'Frontend Masters',
    time: '09:00 PM',
    date: '2026-05-15',
    isActive: true,
    tags: ['TailwindCSS', 'Training', 'Frontend']
  },
  {
    title: 'Practice TypeScript utility types',
    place: 'Local Project',
    time: '07:30 PM',
    date: '2026-05-16',
    isActive: true,
    tags: ['TypeScript', 'Practice', 'Development']
  },
  {
    title: 'Watch UI/UX design breakdowns',
    place: 'YouTube',
    time: '08:30 PM',
    date: '2026-05-18',
    isActive: false,
    tags: ['UI/UX', 'Design', 'Inspiration']
  }
];

export const dailyRoutineTodos = [
  {
    title: 'Morning workout',
    place: 'Gym',
    time: '06:00 AM',
    date: '2026-05-15',
    isActive: true,
    tags: ['Health', 'Fitness', 'Routine']
  },
  {
    title: 'Read programming articles',
    place: 'Medium',
    time: '12:00 PM',
    date: '2026-05-15',
    isActive: true,
    tags: ['Reading', 'Programming', 'Growth']
  },
  {
    title: 'Evening coding session',
    place: 'Home Workspace',
    time: '08:00 PM',
    date: '2026-05-15',
    isActive: true,
    tags: ['Coding', 'Practice', 'Consistency']
  },
  {
    title: 'Plan next day goals',
    place: 'Notion',
    time: '10:30 PM',
    date: '2026-05-15',
    isActive: false,
    tags: ['Planning', 'Productivity', 'Routine']
  }
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between items-center p-2 mb-4 rounded-2xl ring-1 ring-border/50">
        <h1 className="text-lg font-medium">Todo List</h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <Button className="">
              <CalendarIcon />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={date => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* LIST */}
      <ScrollArea className="max-h-\[400px\] {max-height: 400px; mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4 p-2">
          {/* LIST ITEM */}
          {programmingTodos.map(todo => (
            <Card
              key={todo.title}
              className={`p-4 w-auto ring-1 ring-border/50  transition ${todo.isActive ? '' : 'opacity-80'}`}>
              <div className="flex items-start justify-between gap-4">
                {/* Left content */}
                <div className="flex flex-col gap-2">
                  {/* Title + checkbox */}
                  <div className="flex items-center gap-2">
                    <Checkbox checked={todo.isActive} />

                    <CardTitle
                      className={`text-sm font-medium ${
                        todo.isActive ? 'text-foreground' : 'text-muted-foreground line-through opacity-70'
                      }`}>
                      {todo.title}
                    </CardTitle>
                  </div>

                  {/* Meta info */}
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">{todo.place}</Badge>
                    <Badge variant="outline">{todo.date}</Badge>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {todo.tags.map((tag, index) => (
                      <Badge key={tag} variant="outline" className={`${tagColors[index % tagColors.length]}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
