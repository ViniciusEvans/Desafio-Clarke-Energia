import AuthContext from "./useContext";
 function GlobalAuthContext(props) {
  return ( 
  <AuthContext.Provider value={props.value}>{props.children}</AuthContext.Provider>
   )
}

export default GlobalAuthContext;