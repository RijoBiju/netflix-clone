import "@styles/globals.css";
import Login from "./page";

export const metadata = {
  title: "Netflix",
  description: "Watch your favorite Movies and TV Shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
