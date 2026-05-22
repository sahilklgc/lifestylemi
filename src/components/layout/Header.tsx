"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-xl font-bold tracking-tight">
              Lifestylemi
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Link href="/quote" className={buttonVariants()}>Request a Quote</Link>
          </div>
          
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left font-heading">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4">
                  <Link href="/quote" className={buttonVariants({ className: "w-full" })}>Request a Quote</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
