import MainLayout from "@/components/Home/MainLayout";
import { Metadata } from "next";
import React from "react";
import seoData from "../components/Constants/hero.json"; // Importing the JSON array

interface HomeSeoData {
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    title: string;
    description: string;
    images: { url: string; alt: string }[];
  };
  robots: string;
  authors: { name: string }[];
  publisher: string;
  alternates: {
    canonical: string;
  };
}
export async function generateMetadata(): Promise<Metadata> {
  const metadata: HomeSeoData | undefined = seoData[0]?.homeSeoData; // Safely access homeSeoData
  // Provide fallback values in case metadata is undefined
  if (!metadata) {
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
      openGraph: {
        title: "Default OG Title",
        description: "Default OG Description",
        images: [
          {
            url: "/default-image.webp",
            alt: "Default Image Alt",
          },
        ],
      },
      robots: "index, follow",
      authors: [{ name: "Default Author" }],
      publisher: "Default Publisher",
      alternates: {
        canonical: "https://www.default.com",
      },
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      images: metadata.openGraph.images.map((image) => ({
        url: image.url,
        alt: image.alt,
      })),
    },
    robots: metadata.robots,
    authors: metadata.authors.map((author) => ({
      name: author.name,
    })),
    publisher: metadata.publisher,
    alternates: {
      canonical: metadata.alternates.canonical,
    },
  };
}

export default function Home() {
  return (
    <main className="">
      <MainLayout />
    </main>
  );
}
