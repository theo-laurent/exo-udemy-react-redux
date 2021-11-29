import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const [cartData, setCartData] = useState(0);

  const { cart, count } = useSelector((state) => ({
    ...state.AddCartReducer,
    ...state.CounterReducer,
  }));

  const dispatch = useDispatch();

  const funcDecr = () => {
    dispatch({
      type: "DECR",
    });
  };

  const funcIncr = () => {
    dispatch({
      type: "INCR",
    });
  };

  const addToCardFunc = () => {
    dispatch({ type: "ADDCART", payload: cartData });
  };

  return (
    <div>
      <h1>Votre panier{cart}</h1>
      <h2>Le compteur {count}</h2>

      <button onClick={funcDecr}>-1</button>
      <button onClick={funcIncr}>+1</button>
      <input
        type="number"
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
      />
      <button onClick={addToCardFunc}>Ajouter au panier</button>
    </div>
  );
}
