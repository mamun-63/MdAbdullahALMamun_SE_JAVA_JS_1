import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useStateValue } from '../context-api/StateProvider'
import Product from './Product'

const Stats = () => {
  const [{ basket }, dispatch] = useStateValue()

  // sort function takes an callback function that returns 1/-1/0, now depending upon the return value, its being sorted
  // sorted Highest to Lowest here
  basket.sort(function (a, b) {
    return b.profitPercentage - a.profitPercentage
  })

  console.log('basket sorted desc -> ', basket)

  return (
    <>
      <h2>Top 5 Most Profitable Product</h2>
      <Row>
        {/* array 'slice' to limit the map function and passing 'isStats' in Product components to disable the Remove button */}
        {basket.slice(0, 5).map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={product.id} isStats />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Stats
