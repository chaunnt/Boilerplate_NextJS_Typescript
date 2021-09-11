import React from 'react'
import Header from '../widgets/header'
import Footer from '../widgets/footer'

export default function DefaultLayout(props: any) {
  return (
    <>
      <Header />

      <main>
        {props.children}
      </main>
      
      <Footer />
    </>
  )
}
