import "../styles/globals.css";
import Head from "./head";
import Header from "./Header";
import Navbar from "./Navbar";

export default function RootLayout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <Head />
        <body>
            <Header />
            <Navbar />
            <div>
                {children}
            </div>
        </body>
      </html>
    );
  }
  