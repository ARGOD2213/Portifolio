import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'Chintala Mahindra — Java Backend Engineer',description:'Java Backend Engineer specializing in Spring Boot, microservices, enterprise backend systems and practical AI application integration.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}