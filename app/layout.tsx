import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script";
import { useEffect } from "react";


declare global {
  interface Window {
    VectorshiftChatWidget?: {
      open?: () => void;
    };
  }
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ali Elbermawy - Portfolio",
  description: "Full-stack developer passionate about creating clean, functional solutions",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript"],
  authors: [{ name: "Ali Elbermawy" }],
  openGraph: {
    title: "Ali Elbermawy - Portfolio",
    description: "Full-stack developer passionate about creating clean, functional solutions",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/images/favorite.png' },
    ],
    apple: [
      { url: '/images/favorite.png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Optional: If the widget exposes a global open function, you can call it here
  const openChat = () => {
    if (typeof window !== "undefined" && window.VectorshiftChatWidget?.open) {
      window.VectorshiftChatWidget.open();
    } else {
      // fallback: try to click the widget if it renders a button
      const widget = document.getElementById("vectorshift-chat-widget");
      if (widget) widget.click();
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        {/* Floating Chat Button */}
        {/* <ChatWidgetButton /> */}
        <Script
          id="vectorshift-chat-widget"
          src="https://app.vectorshift.ai/chatWidget.js"
          strategy="afterInteractive"
          async
          chatbot-id="6883ef5bee88d30916d2ac22"
          chatbot-height="700px"
          chatbot-width="500px"
        />
      </body>
    </html>
  );
}
