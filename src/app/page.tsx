import Link from "next/link";
import { profile } from "@/data";

const quickLinks = [
  { href: "/whoami/", label: "whoami", desc: "about me" },
  { href: "/projects/", label: "projects", desc: "what i've built" },
  { href: "/certs/", label: "certs", desc: "credentials" },
  { href: "/activities/", label: "activities", desc: "field logs" },
  { href: "/contact/", label: "contact", desc: "reach out" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-4 pt-14">
      <div className="py-24">
        <p className="font-mono text-cyan-400 text-sm mb-4">$ whoami</p>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold text-white mb-3">
          {profile.name}
        </h1>
        <p className="font-mono text-zinc-400 text-sm sm:text-base mb-6 max-w-xl">
          {profile.role}
        </p>
        <p className="text-zinc-500 text-sm max-w-lg leading-relaxed mb-10">
          {profile.bio}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 rounded-lg p-4 transition-all"
            >
              <p className="font-mono text-cyan-400 text-xs mb-1">./</p>
              <p className="font-mono text-white text-sm font-semibold">{l.label}</p>
              <p className="font-mono text-zinc-600 text-xs mt-1">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
