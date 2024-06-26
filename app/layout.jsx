import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Componentes
import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ThemeProvider } from "./provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "joseMoya's Portfolio",
  description: "Presentation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/logo-JM.png" sizes="any" />
      <body className={jetbrainsMono.variable}>
        <ThemeProvider
          atribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
