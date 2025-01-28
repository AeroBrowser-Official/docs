import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'

import '../style.css'
import '../styles.css'
import '../globals.css'
import '../styles/globals.css'



export default function Nextra({ Component,  pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}