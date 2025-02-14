import { Press_Start_2P, Roboto_Mono } from 'next/font/google';
import type { Metadata } from "next";
import '@/styles/main.scss';

const pressStart2P = Press_Start_2P({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
    variable: '--ff-press-start',
});

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    variable: '--ff-roboto',
});

export const metadata: Metadata = {
    title: "Alienpigeon",
    description: "A small indie game team bringing fresh ideas to life. Check out our games, playtest prototypes, and follow our journey.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👾</text></svg>"
                />
            </head>
            <body className={`${pressStart2P.variable} ${robotoMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
