import type { Metadata } from "next";
import { projects } from "@/data";
import { ExternalLink, GitFork, Lock } from "lucide-react";

export const metadata: Metadata = { title: "Projects — heyfiinnn_" };

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 max-w-6xl mx-auto px-4 pb-20">
      <h1 className="text-3xl font-bold font-mono mb-2">
        <span className="text-cyan-400">./</span>projects
      </h1>
      <p className="text-zinc-500 font-mono text-sm mb-10">// what i&apos;ve built</p>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/[0.03] border border-white/10 hover:border-cyan-500/20 rounded-xl p-5 transition-colors flex flex-col"
          >
            <p className="font-mono text-white font-semibold text-sm mb-2">{p.name}</p>
            <p className="text-zinc-400 text-xs leading-relaxed flex-1 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 font-mono text-xs rounded border border-cyan-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white font-mono text-xs transition-colors"
                >
                  <GitFork className="w-3.5 h-3.5" />
                  GitHub
                </a>
              ) : (
                <span className="flex items-center gap-1.5 text-zinc-600 font-mono text-xs">
                  <Lock className="w-3.5 h-3.5" />
                  Private
                </span>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-mono text-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <p className="text-zinc-600 font-mono text-sm col-span-2">
            // coming soon
          </p>
        )}
      </div>
    </main>
  );
}
