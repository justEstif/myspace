import NavMenu from "@/organisms/nav-menu";
import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "@/components/atoms/auth-provider";

export const metadata: Metadata = {
  title: "MySpace",
  description: "NextJS clone of MySpace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="container px-4 mx-auto">
          <NavMenu />
          <div className="px-6">{children}</div>
        </body>
      </html>
    </AuthProvider>
  );
}
