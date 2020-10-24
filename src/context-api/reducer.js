export const initialState = {
  // initial state of basket, using some dummy data to show
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
    {
      id: '3',
      name: 'Gigabyte',
      price: 89.49,
      profitPercentage: 180,
      category: 'Motherboard',
    },
    {
      id: '4',
      name: 'AMD DDR4',
      price: 290.0,
      profitPercentage: 38,
      category: 'Graphics Card',
    },
    {
      id: '5',
      name: 'AMD DDR4',
      price: 50.99,
      profitPercentage: 70,
      category: 'Graphics Card',
    },
    {
      id: '6',
      name: 'AMD DDR4',
      price: 130.0,
      profitPercentage: 98,
      category: 'Motherboard',
    },
    {
      id: '7',
      name: 'AMD DDR4',
      price: 399.9,
      profitPercentage: 120,
      category: 'Graphics Card',
    },
  ],
}

// creating reducer
const reducer = (state, action) => {
  console.log(action) // figure out what action reducer is listening

  switch (action.type) {
    // listening actions

    case 'REMOVE_FROM_BASKET':
      console.log('removing id is ', action.id)

      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      )
      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket,
      }

    default:
      return state
  }
}

export default reducer
