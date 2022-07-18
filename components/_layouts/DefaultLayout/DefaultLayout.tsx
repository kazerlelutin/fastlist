import Link from "next/link";
import { ReactChild } from "react";
import KofiButton from "../../_ui/KofiButton/KofiButton";
import Logo from "../../_ui/Logo/Logo";
import classes from "./DefaultLayout.module.css";

interface props {
  readonly children: ReactChild;
}

export default function DefaultLayout({ children }: props) {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Logo />
          <div className="title">Fast List</div>
        </div>
        <KofiButton />
      </header>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        <Link href="legale">Mentions légales</Link>
        <Link href="about">à propos</Link>
      </footer>
    </div>
  );
}
