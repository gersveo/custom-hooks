import { useState } from 'react'

export const useCounter = ( initialState = 1 ) => {
  const [counter, SetCounter] = useState(initialState);

  const increment = ( factor = 1 ) => {
    SetCounter( counter + factor );
  }

  const decrement = ( factor = 1 ) => {
    SetCounter( counter - factor );
  }

  const reset = () => SetCounter( initialState );

  return { counter, increment, decrement, reset };
}
