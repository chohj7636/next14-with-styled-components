import type { Metadata } from 'next';
import StyledComponentsRegistry from './register';
import Navigation from '@/components/Organisms/Navigation';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Navigation />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}