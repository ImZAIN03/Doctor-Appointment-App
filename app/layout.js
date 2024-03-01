import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appointment App",
  description: "Doctor's Appointment App for patients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="">
        <Header/>
        {children}
      </div>
      </body>
    </html>
  );
}
