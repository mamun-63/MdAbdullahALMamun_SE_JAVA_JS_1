export const initialState = {
  // initial state of basket
  basket: [
    {
      id: '1',
      name: 'ASRock A320M-HDV',
      price: 89.99,
      profitPercentage: 130,
      category: 'Motherboard',
    },
    {
      id: '2',
      name: 'AMD DDR4',
      price: 29.99,
      profitPercentage: 98,
      category: 'RAM',
    },
  ],
}

// creating reducer
const reducer = (state, action) => {
  switch (action.type) {
    // listening actions

    default:
      return state
  }
}

export default reducer
