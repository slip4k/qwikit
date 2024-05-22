import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import HomeNavBar from '@/components/home-navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'qwikit - Start your Next.js application qwik with qwikit',
  description:
    'Qwikit is a boilerplat for Next.js applications including Authentication, payments, and analytics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <HomeNavBar />
          {children}
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
