import './ui/global.css'
import {montserrat} from './ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {`${montserrat.className} antialiased`}>
        
          {children}
       <footer className='py-10 flex justify-center items-center'>😎 Rommel &#169; 🚀</footer> 
        
      </body>
    </html>
  );
}
