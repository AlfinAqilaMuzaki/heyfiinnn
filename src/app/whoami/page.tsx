import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile, expertise, experiences, education, certificates } from "@/data";
import ExpandableBio from "@/components/ExpandableBio";

export const metadata: Metadata = { title: "whoami — heyfiinnn_" };

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function WhoamiPage() {
  return (
    <main className="min-h-screen pt-24 max-w-6xl mx-auto px-4 pb-20">
      <h1 className="text-3xl font-bold font-mono mb-2">
        <span className="text-cyan-400">./</span>whoami
      </h1>
      <p className="text-zinc-500 font-mono text-sm mb-10">// about me</p>

      <div className="space-y-8">
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-[35%_1fr] gap-6">
          <div className="w-48 sm:w-4/5 aspect-[3/4] shrink-0 rounded-xl overflow-hidden border border-white/10 mx-auto self-start">
            <Image
              src={`${BASE_PATH}/profil/alfinam.jpeg`}
              alt={profile.name}
              width={878}
              height={1058}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400 mb-3">$ cat bio.txt</p>
            <ExpandableBio paragraphs={profile.about} initialCount={4} />
            <div className="flex flex-wrap gap-2 mt-4">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-400 hover:text-white transition-colors">
                  github →
                </a>
              )}
              {profile.telegram && (
                <a href={profile.telegram} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                  telegram →
                </a>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs text-zinc-500 mb-4">// fokus & keahlian</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {expertise.map((e) => (
              <div key={e.area} className="bg-white/[0.03] border border-white/10 rounded-lg p-4">
                <p className="font-mono text-cyan-400 text-sm font-semibold mb-2">{e.area}</p>
                <p className="text-zinc-400 text-xs leading-relaxed">{e.description}</p>
              </div>
            ))}
          </div>
        </div>

        {experiences.length > 0 && (
          <div>
            <p className="font-mono text-xs text-zinc-500 mb-4">// experience</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {experiences.map((exp, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-mono text-white font-semibold text-sm">{exp.role}</p>
                      <p className="font-mono text-cyan-400 text-xs">{exp.org}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {exp.active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      )}
                      <p className="font-mono text-zinc-600 text-xs">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-zinc-400 text-xs leading-relaxed flex gap-2">
                        <span className="text-cyan-600 flex-shrink-0">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="font-mono text-xs text-zinc-500 mb-4">// education</p>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-white font-semibold text-sm">{education.degree}</p>
                <p className="font-mono text-cyan-400 text-xs mt-1">{education.university}</p>
              </div>
              <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded px-2 py-0.5 shrink-0">
                {education.gpa}
              </span>
            </div>
            <p className="font-mono text-zinc-600 text-xs mt-1">{education.period}</p>
            <p className="text-zinc-400 text-xs leading-relaxed mt-3">{education.description}</p>
            <ul className="space-y-1 mt-3">
              {education.activities.map((a, i) => (
                <li key={i} className="text-zinc-400 text-xs leading-relaxed flex gap-2">
                  <span className="text-cyan-600 flex-shrink-0">›</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {education.skills.map((s) => (
                <span key={s} className="px-2 py-0.5 bg-white/[0.05] text-zinc-400 font-mono text-xs rounded border border-white/10">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {certificates.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-xs text-zinc-500">// certificates ({certificates.length})</p>
              <Link href="/certs/" className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                lihat semua →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {certificates.slice(0, 5).map((cert, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-lg p-4 flex flex-col gap-2">
                  <p className="font-mono text-white text-xs font-semibold line-clamp-2">{cert.name}</p>
                  <p className="font-mono text-zinc-500 text-xs">{cert.issuer}</p>
                  <div className="flex items-center justify-between gap-2 mt-auto pt-1">
                    <span className="font-mono text-zinc-600 text-xs">{cert.date}</span>
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 font-mono text-xs rounded border border-cyan-500/20">
                      {cert.skill.split("·")[0].trim()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
