import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata = {
    title: "Abhishek kumar | Home",
    description:
        "Welcome to my portfolio website. Explore my projects, articles, and learn more about me.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={montserrat.variable}>
            <body>
                <Script id="theme-switcher" strategy="beforeInteractive">
                    {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
                </Script>
                <main
                    className={`font-montserrat bg-light dark:bg-dark w-full min-h-screen`}
                >
                    <NavBar />
                    {children}
                    <Footer />
                </main>
                <SpeedInsights />
            </body>
        </html>
    );
}
