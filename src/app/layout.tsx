import type { Metadata } from "next";
import classNames from "classnames";
import { appFonts } from "@/shared/config";

import "./styles/reset.scss";
import "./styles/global.scss";

export const metadata: Metadata = {
  title: "Сайт по манхвам",
  description: "Здесь можно будет делать что угодно",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={classNames(appFonts)}>{children}</body>
    </html>
  );
}
