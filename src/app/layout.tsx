import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://vampireattack.com"),
  title: "Vampire Attack",
  description: "Vampire Attack",
  keywords: ['Vampire Attack, unleash your fury'],
  authors: [{ name: 'Vampire Attack' }, { name: 'Vampire Attack', url: 'VampireAttack.com' }],
  openGraph: {
    siteName: 'Vampire Attack',
    url: 'https://vampireattack.com',
    images: 'https://vampire-attack.github.io/vampireattack.com/img/vampire-attack-thumbnail.png',
  },
  
  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}