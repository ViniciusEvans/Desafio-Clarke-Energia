import { createContext, useContext } from "react";

function GlobalContext(props) {
  const Context = createContext({});
  return ( 
  <Context.Provider value={props.value}>{props.children}</Context.Provider>
   )
}

export default GlobalContext;