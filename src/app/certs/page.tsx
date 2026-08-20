"use client";

import { useState, useEffect, useCallback } from "react";
import { certificates } from "@/data";
import { ExternalLink, X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CertsPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const certsWithImage = certificates
    .map((c, i) => ({ ...c, idx: i }))
    .filter((c) => c.image);

  const currentLightboxPos = lightbox !== null
    ? certsWithImage.findIndex((c) => c.idx === lightbox)
    : -1;

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const goPrev = useCallback(() => {
    if (currentLightboxPos > 0) setLightbox(certsWithImage[currentLightboxPos - 1].idx);
  }, [currentLightboxPos, certsWithImage]);

  const goNext = useCallback(() => {
    if (currentLightboxPos < certsWithImage.length - 1) setLightbox(certsWithImage[currentLightboxPos + 1].idx);
  }, [currentLightboxPos, certsWithImage]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const activeCert = lightbox !== null ? certificates[lightbox] : null;

  return (
    <>
      <main className="min-h-screen pt-24 max-w-6xl mx-auto px-4 pb-20">
        <h1 className="text-3xl font-bold font-mono mb-2">
          <span className="text-cyan-400">./</span>certificates
        </h1>
        <p className="text-zinc-500 font-mono text-sm mb-10">
          // {certificates.length} sertifikasi &amp; kredensial
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="group bg-white/[0.03] border border-white/10 hover:border-cyan-500/20 rounded-xl overflow-hidden transition-colors flex flex-col w-full sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
            >
              {cert.image ? (
                <button
                  onClick={() => openLightbox(i)}
                  className="relative overflow-hidden bg-zinc-900 aspect-[4/3] w-full cursor-zoom-in"
                  aria-label={`Lihat sertifikat ${cert.name}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BASE_PATH}${cert.image}`}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs text-white bg-black/60 px-2 py-1 rounded">
                      lihat
                    </span>
                  </div>
                </button>
              ) : (
                <div className="aspect-[4/3] w-full bg-zinc-900 flex flex-col items-center justify-center gap-2">
                  <ImageOff className="w-6 h-6 text-zinc-700" />
                  <p className="font-mono text-zinc-700 text-xs">no image</p>
                </div>
              )}

              <div className="p-4 flex flex-col flex-1">
                <p className="font-mono text-white text-xs font-semibold leading-snug mb-1">
                  {cert.name}
                </p>
                <p className="text-zinc-500 text-xs mb-1">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <span className="font-mono text-zinc-600 text-xs">{cert.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 font-mono text-xs rounded border border-cyan-500/20">
                      {cert.skill}
                    </span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-cyan-400 transition-colors"
                        title="Verify credential"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {lightbox !== null && activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {currentLightboxPos > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentLightboxPos < certsWithImage.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            className="max-w-3xl w-full flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}${activeCert.image}`}
              alt={activeCert.name}
              className="w-full rounded-lg shadow-2xl max-h-[70vh] object-contain"
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-white text-sm font-semibold">{activeCert.name}</p>
                <p className="text-zinc-400 text-xs mt-1">{activeCert.issuer} · {activeCert.date}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 font-mono text-xs rounded border border-cyan-500/20">
                  {activeCert.skill}
                </span>
                {activeCert.verifyUrl && (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-400 hover:text-cyan-400 font-mono text-xs transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    verify
                  </a>
                )}
              </div>
            </div>
            <p className="font-mono text-zinc-600 text-xs text-center">
              {currentLightboxPos + 1} / {certsWithImage.length} · ESC untuk tutup · ← → navigasi
            </p>
          </div>
        </div>
      )}
    </>
  );
}
