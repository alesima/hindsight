import { ReactNode } from "react";
import { Timer } from "~/src/components/Timer";

import * as style from "./style.module.css";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className={style.layout}>
      <header className={style.topbar}>
        <h1>
          <a href="/">Hindsight</a>
        </h1>

        <Timer />
      </header>

      <main>{children}</main>

      <footer className={style.footer}>
        <p>©️ 2022 Hindsight</p>
      </footer>
    </div>
  );
}
