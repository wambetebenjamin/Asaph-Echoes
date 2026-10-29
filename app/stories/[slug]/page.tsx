import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { topics, disclaimer } from '@/lib/content';
export const dynamicParams = false;
export function generateStaticParams(){return topics.map(t=>({slug:t.slug}))}
export default async function Story({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const t=topics.find(x=>x.slug===slug);if(!t)notFound();return <><section className="page-hero"><div className="container"><p className="eyebrow light">{t.region} / {t.label}</p><h1>{t.title}</h1><p>{t.text}</p></div></section><section className="site-section"><div className="container reading-layout"><div className="reading-main"><div className="detail-image"><Image src={t.image} alt={t.alt} fill sizes="(max-width: 768px) 100vw, 700px"/></div><h2>An introduction</h2><p>{t.text}</p><p>This editorial introduction is not a recording of a specific story. We are working toward sharing audio and transcripts with the permission and context they deserve.</p><Link href="/traditions" className="text-link">Learn about traditions ↗</Link></div><aside className="reading-aside"><p className="eyebrow">A NOTE FROM US</p><p>{disclaimer}</p><Link href="/contribute" className="text-link">Share a story ↗</Link></aside></div></section></>}
