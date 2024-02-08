import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import {serif} from "./fonts";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <AutoRefresh>
      <html lang="en" className={serif.className}>
      <body className="mx-auto max-w-2xl bg-[--bg] px-5 pt-12 pb-2 text-[--text]">
      <header className="mb-14 flex flex-row place-content-between">
        <HomeLink/>
        <span className="relative top-[4px] italic">
              <Link href="/about" target="_blank">
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
      <div className={"mt-10 flex flex-row place-content-center"}>
        <span className={"text-xs font-light font-sans"}>
            © Stoilsky {new Date().getFullYear()} | Fork of{" "}
            <Link className={"underline"} href="https://github.com/gaearon/overreacted.io" target="_blank">
                overreacted.io
            </Link>
        </span>
      </div>
      </body>
      </html>
    </AutoRefresh>
  );
}
