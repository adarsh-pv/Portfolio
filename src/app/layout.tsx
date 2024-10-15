import { ReactNode } from "react";
import "./globals.css";
import { Fira_Code } from 'next/font/google'
const fira_code = Fira_Code({
  weight: ['300'],
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-fira-code', 
});
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children}:RootLayoutProps ) {
  return (
    <html lang="en" className={fira_code.variable}>
      <body>
        <div className="layout">
          {children} 
        </div>
      </body>
    </html>
  );
}
