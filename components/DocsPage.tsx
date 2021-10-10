import Link from 'next/link'
import { styled } from '../stitches.config'

import Box from './layout/Box'
import { documentRoutes } from '../lib/documentRoutes'

type Props = {
  children: React.ReactNode
}

const SIDE_BAR_WIDTH = '240px'

const Sidebar = styled('div', {
  position: 'fixed',
  top: '$7',
  left: 0,
  bottom: 0,
  width: SIDE_BAR_WIDTH,
  borderRight: '1px solid black',
})

export default function DocsPage(props: Props) {
  return (
    <Box css={{ paddingLeft: SIDE_BAR_WIDTH }}>
      <Sidebar>
        {documentRoutes.map((menu) => (
          <Box key={menu.label}>
            <h3>{menu.label}</h3>
            {menu.pages.map((page) => (
              <Box
                key={page.slug}
                css={{
                  a: {
                    display: 'block',
                    padding: '$1 $2 ',
                    textDecoration: 'none',
                  },
                }}
              >
                <Link href={'/' + page.slug} passHref>
                  {page.title}
                </Link>
              </Box>
            ))}
          </Box>
        ))}
      </Sidebar>
      <Box css={{ padding: '$5 $4', maxWidth: '800px' }}>{props.children}</Box>
    </Box>
  )
}
