import Image from "next/image";
import classes from "./KofiButton.module.css";

export default function KofiButton() {
  return (
    <a
      className={classes.coffe}
      href="https://ko-fi.com/kazerlelutin"
      target="_blank"
      rel="noreferrer"
    >
      <div className={classes.buy}>{"Supportez-moi"}</div>
      <Image src="/static/images/kofi_logo.svg" width={30} height={20} alt="kofi logo" />
    </a>
  );
}
