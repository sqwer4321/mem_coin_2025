import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Cart from '../components/Cart/Cart'
import Text from '../components/Text/Text'
import Info from '../components/Info/Info'
import Telegram from '../components/Telegram/Telegram'
import Footer from '../components/Footer/Footer'
import News from '../components/News/News'
import Container from '../components/Container/Container'
import Contest from '../components/Contest/Contest'

export default function HomePage() {

  return (
    <>
        <Header />
        <Banner id="banner" />
        <Cart id="cart" />
        <Contest id="contest" />
        <Text id="text" />
        <Container id="container" />
        <News id="news" />
        <Info id="info" />
        <Telegram id="telegram" />
        <Footer id="footer" />
    </>
  )
}
