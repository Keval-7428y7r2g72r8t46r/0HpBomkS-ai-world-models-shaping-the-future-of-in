"use client";
import * as React from "react"
import { cn } from "@/lib/utils"

export const Sheet = ({ children, isOpen, onClose }: { children: React.ReactNode, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-card h-full shadow-xl border-l p-6 animate-in slide-in-from-right duration-300 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};