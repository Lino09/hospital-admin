import "./globals.css";
import Link from "next/link";

const Header = () => (
  <header className="w-full flex items-center justify-between p-4 border-b-2 border-b-lime-200">
    <div className="w-32 h-16 bg-gray-200">Logo</div>
    <ul className="flex gap-8">
      <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
      <li>Menu Item</li>
    </ul>
    <Link href="/auth" className="border border-black rounded px-8 py-2">
      CTO
    </Link>
  </header>
);

const Footer = () => (
  <footer className="w-full mt-60 flex items-center justify-between p-4 border-t-2 border-lime-200">
    <div className="w-32 h-16 bg-gray-200">Logo</div>
    <ul className="flex gap-8">
      <li>Footer Item</li>
      <li>Footer Item</li>
      <li>Footer Item</li>
      <li>Footer Item</li>
    </ul>
    <button className="border border-black rounded px-8 py-2">CTO</button>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
