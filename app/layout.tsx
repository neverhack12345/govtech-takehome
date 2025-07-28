import "@/app/globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | GovTech Takehome Assignment",
    default: "GovTech Takehome Assignment",
  },
  description: "GovTech Takehome Assignment",
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col sm:px-6">
          <div className="item-center md:overflow-y-auto ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

