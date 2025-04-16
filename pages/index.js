import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const newsArticles = [
    { title: 'News 1', content: 'Content for news 1' },
    { title: 'News 2', content: 'Content for news 2' },
    // 더 많은 뉴스 기사 추가 가능
  ];

  return (
    <div>
      <Head>
        <title>Card News App</title>
        <meta name="description" content="A simple card news web app" />
      </Head>
      <div className="site-title">
        <h1>NEWS APP</h1>
        <p>Where typography meets activism</p>
      </div>
      <Header />
      <div className="features">
        <FeatureCard title="3D webviewer" />
        <FeatureCard title="AI-backgrounds" />
        <FeatureCard title="AR" />
      </div>
    </div>
  );
}
