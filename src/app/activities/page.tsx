import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { activities } from "@/data";

export const metadata: Metadata = { title: "Activities — heyfiinnn_" };

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen pt-24 max-w-6xl mx-auto px-4 pb-20">
      <h1 className="text-3xl font-bold font-mono mb-2">
        <span className="text-cyan-400">./</span>activities
      </h1>
      <p className="text-zinc-500 font-mono text-sm mb-10">// dokumentasi kegiatan</p>

      {activities.length === 0 && (
        <div className="max-w-2xl mx-auto bg-white/[0.03] border border-white/10 rounded-xl p-6">
          <p className="font-mono text-zinc-600 text-sm">// coming soon</p>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        {activities.map((post) => (
          <Link
            key={post.slug}
            href={`/activities/${post.slug}/`}
            className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/20 rounded-xl overflow-hidden transition-all flex flex-col w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <div className="relative w-full aspect-square bg-zinc-900">
              <Image
                src={`${BASE_PATH}${post.image}`}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <p className="font-mono text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors mb-1.5">
                {post.title}
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-1">
                <span className="font-mono text-zinc-600 text-xs mr-1">{post.date}</span>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 font-mono text-xs rounded border border-cyan-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
