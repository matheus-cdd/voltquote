"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Users, Package, Zap } from "lucide-react";

const links = [
  { href: "/", label: "Painel", icon: LayoutDashboard },
  { href: "/quotes", label: "Orçamentos", icon: FileText },
  { href: "/clients", label: "Clientes", icon: Users },
  { href: "/materials", label: "Materiais", icon: Package },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-950 p-4">
      <div className="mb-8 flex items-center gap-2 px-2 text-lg font-bold text-white">
        <Zap className="h-5 w-5 text-blue-500" />
        VoltQuote
      </div>

      <nav className="flex flex-col gap-1">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
