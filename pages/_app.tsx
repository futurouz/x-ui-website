import { globalCss } from '@stitches/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Box from '../components/layout/Box'
import DocsPage from '../components/DocsPage'

const resetCSS = globalCss({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section':
    {
      display: 'block',
    },
  '*[hidden]': {
    display: 'none',
  },
  body: {
    lineHeight: '1',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
    // @ts-ignore
    content: 'none',
  },
  table: {
    borderSpacing: '0',
  },
})

const globalCSS = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  resetCSS()
  globalCSS()

  const router = useRouter()
  const isDocs = router.pathname.includes('/docs')

  return (
    <>
      <Box css={{ position: 'fixed', top: '0', left: '0', width: '100%' }}>
        <Header />
      </Box>
      <Box css={{ paddingTop: '$7' }}>
        {isDocs ? (
          <DocsPage>
            <Component {...pageProps} />
          </DocsPage>
        ) : (
          <Component {...pageProps} />
        )}
      </Box>
    </>
  )
}
export default MyApp
