import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities } from "@/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function generateStaticParams() {
  return activities.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = activities.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — heyfiinnn_` : "Activities — heyfiinnn_" };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = activities.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-24 max-w-4xl mx-auto px-4 pb-20">
      <Link href="/activities/" className="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
        ← kembali ke activities
      </Link>

      <div className="flex flex-col sm:flex-row gap-6 mt-4">
        <div className="relative w-full sm:w-96 aspect-[9/16] shrink-0 rounded-xl overflow-hidden border border-white/10 bg-zinc-900 mx-auto sm:mx-0">
          <Image src={`${BASE_PATH}${post.image}`} alt={post.title} fill className="object-contain" priority />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-mono mb-3">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-1.5 mb-4">
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

          <div className="space-y-5">
            {post.content.map((section, i) => (
              <div key={i}>
                <h2 className="font-mono text-cyan-400 text-xs font-semibold mb-1.5">{section.heading}</h2>
                <p className="text-zinc-300 text-xs leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
