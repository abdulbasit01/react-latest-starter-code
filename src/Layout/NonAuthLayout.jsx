import React from 'react'
import * as Layout from '../UI'
const NonAuthLayout = ({ children }) => {
  return (
    <>
      <Layout.Header />
      {children}
      <Layout.Footer />
    </>
  )
}

export default NonAuthLayout