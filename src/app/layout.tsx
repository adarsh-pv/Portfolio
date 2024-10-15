import "./globals.css";
import { Fira_Code } from 'next/font/google'
const fira_code = Fira_Code({
  weight: ['300'],
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-fira-code', 
});
export default function RootLayout({ children }) {
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
