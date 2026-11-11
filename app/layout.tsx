import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'VistaHaven | Find Your Perfect Home Today',
  description: 'Discover exceptional homes, curated properties and trusted real estate guidance with VistaHaven.',
  keywords: ['real estate', 'luxury homes', 'property listings', 'VistaHaven'],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
