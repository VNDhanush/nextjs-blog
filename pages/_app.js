import { SP } from "next/dist/next-server/lib/utils";

import '../styles/global.css'
export default function App({Component, pageProps}){
    return<Component {...pageProps} />
}