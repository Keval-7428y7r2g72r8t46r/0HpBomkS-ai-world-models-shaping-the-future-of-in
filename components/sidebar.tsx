"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Beaker, Library, CheckSquare, StickyNote, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet } from './ui/sheet';
import { PROJECT_DATA } from '@/lib/data';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/' },
    { icon: Beaker, label: 'Research', href: '/research/cab7b48f-8813-4109-8d85-e6c3f4435d87' },
    { icon: Library, label: 'Library', href: '/library' },
    { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
  ];

  return (
    <>
      <aside className={cn(
        "sticky top-0 h-screen bg-card border-r transition-all duration-300 flex flex-col",
        isCollapsed ? "w-20" : "w-64"
      )}>
        <div className="p-6 flex items-center justify-between">
          {!isCollapsed && <span className="font-bold text-lg truncate">AI World Models</span>}
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </Button>
        </div>

        <nav className="flex-1 px-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors group"
            >
              <item.icon className="w-5 h-5" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <Button
            variant="outline"
            className={cn("w-full flex items-center gap-2", isCollapsed && "px-0 justify-center")}
            onClick={() => setIsNoteOpen(true)}
          >
            <StickyNote className="w-4 h-4" />
            {!isCollapsed && <span>Notes</span>}
          </Button>
        </div>
      </aside>

      <Sheet isOpen={isNoteOpen} onClose={() => setIsNoteOpen(false)}>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Project Notes</h2>
          {PROJECT_DATA.notes.map((note) => (
            <div key={note.id} className={cn("p-4 rounded-lg border-l-4", 
              note.color === 'yellow' ? "border-yellow-500 bg-yellow-500/10" : "border-blue-500 bg-blue-500/10"
            )}>
              <h3 className="font-semibold mb-2">{note.title}</h3>
              <p className="text-sm text-muted-foreground">{note.preview}</p>
            </div>
          ))}
        </div>
      </Sheet>
    </>
  );
}