import localFont from 'next/font/local'

export const mainSignFont = localFont({
  src: "../public/fonts/MorrisRoman-Black.ttf",
  variable: "--font-main-sign",
});

export const secondarySignFont = localFont({
  src: "../public/fonts/BlackChancery.ttf",
  variable: "--font-secondary-sign",
});