import React from 'react'

const MiddleWeare = ({ component: Component, layout: Layout, path, ...rest }) => {
  return (
    <Layout>
      <Component path={path} {...rest} />
    </Layout>
  )
}

export default MiddleWeare