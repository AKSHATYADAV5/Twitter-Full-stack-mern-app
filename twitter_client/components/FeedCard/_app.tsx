import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app'
import {Inter} from "next/font/google";

const inter=Inter({subsets:["latin"]});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <GoogleOAuthProvider clientId="488514425146-ndnv901jseftts1akhk34do6dv150e6c.apps.googleusercontent.com">
             <Component {...pageProps} />
             </GoogleOAuthProvider>
        </div>
    );
}