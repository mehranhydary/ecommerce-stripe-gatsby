import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  let stripe =
  useEffect(() => {
    stripe = window.Stripe('TEST_STRIPE_ACCOUNT');
  })
  const redirectToCheckout = async () => {
    console.log('clicked')
    const { error } =  await stripe.redirectToCheckout({
      items: [{sku: 'SKU_ID', quantity: 1}],
      successUrl: 'https://twitter.com/mehranhydary/',
      cancelUrl: 'https://linkedin.com/in/mehranhydary',
    })
    console.warn(error)
  }
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button
      style={{backgroundColor:'#6772E5', color:'#FFF',padding:'8px 12px', border: '0', borderRadius:'4px',fontSize:'1em'}}
      id="checkout-button-SKU_ID"
      role="link"
      onClick={redirectToCheckout}
    >
      PAY
    </button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export default IndexPage
