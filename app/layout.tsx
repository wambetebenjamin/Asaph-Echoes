import type { Metadata, Viewport } from 'next';
import { Header, Footer, GlobalTools } from '@/components/Site';
import './globals.css';
export const metadata:Metadata={title:{default:'Asaph Echoes | The story still travels.',template:'%s | Asaph Echoes'},description:'A pan-African home for oral storytelling, griot traditions and new audio narratives.'};
export const viewport:Viewport={width:'device-width',initialScale:1,userScalable:true,viewportFit:'cover'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><head><link rel="stylesheet" href="/css/bootstrap.min.css"/><link rel="stylesheet" href="/css/style.css"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,700,900" rel="stylesheet"/></head><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><GlobalTools/></body></html>}
