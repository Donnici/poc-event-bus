import type { NextPage } from 'next'
import { useCallback, useMemo } from 'react'

import { useStore, useDispatch, useSelector } from 'react-redux';

import debounce from 'lodash.debounce';

import EventManager from '../events/EventManager'
import {showAutocompleteBox} from '../stateManager/autocomplete';

const Home: NextPage = () => {
  const state = useSelector((state: any) => state.autocomplete)
  const store = useStore();
  
  const searchChange = useCallback(
    (event) => {
      const { value } = event.target;
      EventManager.emitEvent('search.product.change', { value, showProduct })
    },
    [],
  )

    const showProduct = () => {
      store.dispatch(showAutocompleteBox({
        showAutocomplete: true
      }))
    }

  const handleChange = useMemo(
    () => debounce(searchChange, 800)
  , [searchChange]);
console.log(state);

  return (
    <>
    <h1>Olá mundo!</h1>
    <input type="text" onChange={handleChange}/>
    {state.showAutocomplete && (
      <h2>{state.products[0].name}</h2>
    )}
    </>
  )
}

export default Home
