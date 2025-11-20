import localFont from 'next/font/local'

export const mainSignFont = localFont({
  src: "/fonts/MorrisRoman-Black.ttf",
  variable: "--font-main-sign",
});

export const secondarySignFont = localFont({
  src: "/fonts/BlackChancery.ttf",
  variable: "--font-secondary-sign",
});