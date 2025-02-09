import { Roboto } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "tailwindcss/tailwind.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Jaagruthi Degree and PG College",
  description: "Jaagruthi Degree and PG College.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${roboto.variable} antialiased`}> 
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
