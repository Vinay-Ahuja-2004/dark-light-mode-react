import {useState} from 'react';
function App(){
  const [mode,changemode]=useState(false);
  function visible(){
    changemode(!mode)
  }
  let bgcolor;
  let textcolor;
  if(mode) {
    bgcolor="black";
    textcolor="white";
  }
  else {
    bgcolor="white";
    textcolor="black";
  }
  
  return (
    <>
    <div
    style={{
      backgroundColor : bgcolor,
      color: textcolor,
      height: "100vh",
      textAlign:"center",
      paddingTop:"100px"
    }}  
    >
      <h1>
      {mode ? "dark mode":"light mode"}
      </h1>
      <button onClick={visible}>Switch to {mode ? "light mode" : "dark mode "}</button>
    </div>
    </>
  )
}
export default App;