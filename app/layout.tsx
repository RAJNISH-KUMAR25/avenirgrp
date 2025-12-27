import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Avenir",
  description: "Engineering Smart & Sustainable Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#020617]">
      <body className="min-h-screen bg-[#020617] text-white">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-28">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
