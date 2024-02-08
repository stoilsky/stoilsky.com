import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import {serif} from "./fonts";
import "./global.css";
import Footer from "./Footer";

export default function RootLayout({ children}) {
  return (
    <AutoRefresh>
      <html lang="en" className={serif.className}>
      <body className="mx-auto max-w-2xl bg-[--bg] px-5 pt-12 pb-2 text-[--text]">
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
