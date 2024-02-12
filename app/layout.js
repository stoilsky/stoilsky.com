'use client'
import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import {serif} from "./fonts";
import "./global.css";
import Footer from "./Footer";
import {useEffect} from "react";
import {usePathname} from 'next/navigation';
import {create} from 'ackee-tracker';

let instance;

// This domain id comes from our Netlify-deployed Ackee instance (analytics tool)
const STOILSKY_DOT_COM_ANALYTICS_DOMAIN = '2a97e286-d2ca-4755-afb6-1addeac283e8';

export default function RootLayout({ children}) {
    const path = usePathname();

    useEffect(() => {
        instance = create('https://analytics.stoilsky.com', {
            detailed: true,
            ignoreLocalhost: true,
        })
    }, []);

    useEffect(() => {
        instance.record(STOILSKY_DOT_COM_ANALYTICS_DOMAIN)
    }, [path]);

  return (
    <AutoRefresh>
      <html lang="en" className={serif.className}>
      <body className="mx-auto max-w-2xl bg-[--bg] px-5 pt-12 pb-4 text-[--text]">
      <header className="mb-14 flex flex-row place-content-between">
        <HomeLink/>
        <span className="relative top-[4px] italic">
              <Link href="/about">
                  Author{" "}
                <img
                    alt="Stoil Stoychev"
                    src="https://github.com/stoich.png"
                    className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
                />
              </Link>
            </span>
      </header>
      <main>{children}</main>
      <Footer/>
      </body>
      </html>
    </AutoRefresh>
  );
}
