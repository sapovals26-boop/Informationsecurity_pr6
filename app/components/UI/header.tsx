"use client";

import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";

export default function Header() {
  const navItems = [
    { href: "#features", label: "Наши особенности" },
    { href: "#menu", label: "Меню" },
    { href: "#about", label: "О нас" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <Navbar className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-4 shadow-md">
      <NavbarBrand className="flex items-center gap-3">
        <Image src="/logo.png" width={50} height={50} alt="Foodie" className="rounded-full" />
        <span className="font-bold text-xl sm:text-2xl">Foodie</span>
      </NavbarBrand>

      <NavbarContent className="flex-1 justify-end hidden md:flex gap-6">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link href={item.href} className="text-white font-medium hover:opacity-80 transition">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden md:flex ml-4">
        <Link
          href="#order"
          className="bg-white text-amber-600 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Заказать
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
