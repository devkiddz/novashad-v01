import React from 'react';
import { userDetails } from './userDetails';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';

const skillColors: Record<string, string> = {
  'Next.js': 'border-white/10 bg-white/5 text-white',
  React: 'border-cyan-500/20 bg-cyan-500/10 text-cyan-400',
  TypeScript: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
  'Tailwind CSS': 'border-sky-500/20 bg-sky-500/10 text-sky-400',
  'shadcn/ui': 'border-zinc-500/20 bg-zinc-500/10 text-zinc-300',
  'React Hook Form': 'border-pink-500/20 bg-pink-500/10 text-pink-400',
  Zod: 'border-violet-500/20 bg-violet-500/10 text-violet-400',
  Recharts: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
};

export default function AccountDetails() {
  return (
    <div className="flex flex-col gap-4">
      {userDetails.map(user => (
        <Card key={user.id} className="rounded-2xl">
          <div className="flex items-center gap-2">
            <Avatar className="size-12">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-semibold">{user.name}</h1>
          </div>
          <CardHeader>
            <CardTitle>{user.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">{user.content}</p>

            {user.skills && (
              <div className="flex flex-wrap gap-2">
                {user.skills?.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="ring ring-white/10 rounded-full border-white/10 bg-white/5 text-white p-3">
                    <img src={skill.logo} alt={skill.repo} className="size-4 object-cover rounded-full" />
                    <Link href={skill.link}>{skill.repo}</Link>
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
