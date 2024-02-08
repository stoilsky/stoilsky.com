import Link from "./Link";

const Footer = () => (
    <div className={"mt-10 flex flex-row place-content-center"}>
        <span className={"text-xs font-light font-sans"}>
          © Stoilsky {new Date().getFullYear()} | Fork of{" "}
            <Link
                className={"underline"}
                href="https://github.com/gaearon/overreacted.io"
                target="_blank"
            >
            overreacted.io
          </Link>
        </span>
    </div>
);

export default Footer;
