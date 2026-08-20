"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandableBio({
  paragraphs,
  initialCount,
}: {
  paragraphs: string[];
  initialCount: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? paragraphs : paragraphs.slice(0, initialCount);
  const hasMore = paragraphs.length > initialCount;

  return (
    <div className="space-y-3">
      {visible.map((para, i) => (
        <p key={i} className="text-zinc-300 text-sm leading-relaxed text-justify">{para}</p>
      ))}
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {expanded ? (
            <>
              sembunyikan <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              lihat selengkapnya <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
