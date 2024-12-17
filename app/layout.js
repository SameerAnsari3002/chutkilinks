import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "ChutkiLinks - Your trusted URL shortener",
  description: "ChutkiLinks helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-purple-50">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
