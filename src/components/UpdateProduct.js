import React, { useState } from 'react'
import { useStateValue } from '../context-api/StateProvider'

const UpdateProduct = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [profitPercentage, setProfitPercentage] = useState('')
  const [category, setCategory] = useState('RAM')

  // pulling basket/products info from the reducer by calling the data layer/ state provider
  const [{ basket }, dispatch] = useStateValue()

  const handleSubmit = e => {
    e.preventDefault()

    if (!name || !price || !profitPercentage) {
      alert('Fill Empty Fields')
    } else {
      console.log('id-select', id)
      console.log('basket length', basket.length)

      // updating product info and handling cases
      if (basket.length === 1) {
        basket[0].id = id
        basket[0].name = name
        basket[0].price = price
        basket[0].profitPercentage = profitPercentage
        basket[0].category = category
      } else {
        const index = basket.findIndex(item => item.id === id)

        basket[index].id = id
        basket[index].name = name
        basket[index].price = price
        basket[index].profitPercentage = profitPercentage
        basket[index].category = category
      }

      console.log(basket)
      alert('Product Updated Successfully')
    }
  }

  return (
    <div>
      {basket.length ? (
        <form onSubmit={handleSubmit}>
          Select ID to Update:
          <select value={id} onChange={e => setId(e.target.value)}>
            {basket.map(product => (
              <option value={product.id} key={product.id}>
                {product.id}
              </option>
            ))}
          </select>
          Update Product Name:
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          Update Product Price:
          <input
            type='number'
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          Update Product Profit-Percentage:
          <input
            type='number'
            value={profitPercentage}
            onChange={e => setProfitPercentage(e.target.value)}
          />
          Update Product Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value='RAM'>RAM</option>
            <option value='Motherboard'>Motherboard</option>
            <option value='Graphics Card'>Graphics Card</option>
          </select>
          <input type='submit' value='Submit' />
        </form>
      ) : (
        <h2>There is no Product to Update</h2>
      )}
    </div>
  )
}

export default UpdateProduct
