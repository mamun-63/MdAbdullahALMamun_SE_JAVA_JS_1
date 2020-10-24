import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useStateValue } from '../context-api/StateProvider'

const AddProduct = ({ isUpdate }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [profitPercentage, setProfitPercentage] = useState('')
  const [category, setCategory] = useState('RAM')

  // pulling basket/products info from the reducer by calling the data layer/ state provider
  const [{ basket }, dispatch] = useStateValue()

  const handleSubmit = e => {
    e.preventDefault() // prevent loading page

    if (!name || !price || !profitPercentage) {
      alert('Fill Empty Fields')
    } else if (isUpdate) {
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
    } else {
      let newProduct = {
        id: uuidv4(), // randomly assign a id
        name: name,
        price: price,
        profitPercentage: profitPercentage,
        category: category,
      }
      console.log(newProduct)
      // pushing new added product to the basket in reducer
      basket.push(newProduct)
      console.log('Products Array >', basket)
      alert('Product Added Successfully')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isUpdate && (
          <>
            Select ID to Update:
            <select value={id} onChange={e => setId(e.target.value)}>
              {basket.map(product => (
                <option value={product.id} key={product.id}>
                  {product.id}
                </option>
              ))}
            </select>
          </>
        )}
        Product Name:
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        Product Price:
        <input
          type='number'
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        Product Profit-Percentage:
        <input
          type='number'
          value={profitPercentage}
          onChange={e => setProfitPercentage(e.target.value)}
        />
        Product Category:
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value='RAM'>RAM</option>
          <option value='Motherboard'>Motherboard</option>
          <option value='Graphics Card'>Graphics Card</option>
        </select>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default AddProduct
