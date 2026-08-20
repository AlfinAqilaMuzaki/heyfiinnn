import type { Metadata } from "next";
import { profile } from "@/data";
import { Send, MessageCircle, Mail, GitFork, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export const metadata: Metadata = { title: "Contact — heyfiinnn_" };

const channels = [
  {
    name: "Telegram",
    desc: "Cara tercepat untuk reach me",
    detail: "Chat langsung via Telegram bot — response lebih cepat.",
    icon: MessageCircle,
    color: "#229ED9",
    href: profile.telegram,
    cta: "Chat di Telegram",
    ctaIcon: Send,
  },
  {
    name: "Email",
    desc: "Untuk urusan formal & kolaborasi",
    detail: "Kirim email untuk kerjasama, konsultasi, atau laporan insiden.",
    icon: Mail,
    color: "#22D3EE",
    href: `mailto:${profile.email}`,
    cta: profile.email,
    ctaIcon: Send,
  },
  {
    name: "GitHub",
    desc: "Lihat kode & kontribusi open-source",
    detail: "Repo project, tools, dan riset yang open untuk publik.",
    icon: GitFork,
    color: "#E4E4E7",
    href: profile.github,
    cta: "Kunjungi Profil",
    ctaIcon: Send,
  },
  {
    name: "LinkedIn",
    desc: "Koneksi & rekam jejak profesional",
    detail: "Terhubung buat networking, peluang kolaborasi, atau kerja sama profesional.",
    icon: LinkedinIcon,
    color: "#0A66C2",
    href: profile.linkedin,
    cta: "Kunjungi Profil",
    ctaIcon: Send,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 max-w-6xl mx-auto px-4 pb-20">
      <h1 className="text-3xl font-bold font-mono mb-2">
        <span className="text-cyan-400">./</span>contact
      </h1>
      <p className="text-zinc-500 font-mono text-sm mb-10">// reach out</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {channels.map((ch) => (
          <div key={ch.name} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${ch.color}1a`, border: `1px solid ${ch.color}4d` }}
              >
                <ch.icon className="w-5 h-5" style={{ color: ch.color }} />
              </div>
              <div>
                <p className="text-white font-mono font-semibold text-sm">{ch.name}</p>
                <p className="text-zinc-500 text-xs font-mono">{ch.desc}</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm font-mono mb-4 flex-1">{ch.detail}</p>
            <a
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-mono text-sm transition-colors truncate"
              style={{ backgroundColor: `${ch.color}1a`, border: `1px solid ${ch.color}4d`, color: ch.color }}
            >
              <ch.ctaIcon className="w-4 h-4 shrink-0" />
              <span className="truncate">{ch.cta}</span>
            </a>
          </div>
        ))}
      </div>

      <p className="flex items-center justify-center gap-2 text-zinc-600 font-mono text-xs mt-10">
        <MapPin className="w-3.5 h-3.5 shrink-0" />
        {profile.location} — terbuka untuk kolaborasi remote maupun on-site di area Jawa Tengah.
      </p>
    </main>
  );
}
