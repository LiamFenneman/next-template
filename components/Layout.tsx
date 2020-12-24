import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>next-template</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <header className='p-16 w-full text-center'>
        <h1 className='text-3xl font-black font-mono uppercase'>
          next-template
        </h1>
      </header>

      <main>{children}</main>

      <footer className='p-8 w-full text-center'>
        <p>
          Made by Liam Fenneman. View template on{' '}
          <a
            href='https://github.com/LiamFenneman/next-template'
            target='_blank'
            className='font-semibold underline text-blue-600 hover:text-gray-900'
          >
            GitHub
          </a>
        </p>
      </footer>
    </>
  )
}

export default Layout
