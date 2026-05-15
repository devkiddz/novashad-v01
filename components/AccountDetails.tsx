import React from 'react';
import { userDetails } from './userDetails';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';

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
                    className="ring ring-white/10 rounded-full border-[#EDEDED] bg-[#000000] text-white p-3">
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
