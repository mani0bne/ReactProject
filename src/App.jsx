//Functional Component
// function App() {

//   return (
//     <>
//       <div>
//       <h2>Welcome to Functional Component</h2>
//       </div>
//       <Test/>
//     </>
//   )
// }


// function Test(){
//   return(
//     <>
//     <div>
//       <h2>This is the Test component</h2>
//     </div>
//     </>
//   )
// }

//This is the Class Component
// import { Component } from "react";

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <h2>This is the class component </h2>
//       </div>
//     )
//   }
// }
//export default app;

// import './App.css'
// function App(){ 
//   return(
//     <div>
//       <h2>This is an example of JSX</h2>
//       <h3 style={{color:'red'}}>This is the inline css</h3>
//       <button type="button" class="btn btn-primary">Primary</button>
//     </div>
//   )
// }
// export default App

// import Login from "./Login"
// import Signup from "./Signup"
// import About from "./About"
// function App(){ 
//   return(
//     <>
//       <Login />
//       <Signup/>
//       <About/>
//     </>
//   )
// }
// export default App;

// import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
// import Login from "./Login"
// import Signup from "./Signup"
// import About from "./About"

// function Header(){
//   return(
//     <ul>
//       <li><Link to = "/">Login</Link></li>
//       <li><Link to= "/Signup">Signup</Link></li>
//       <li><Link to = "/About">About</Link></li>
//     </ul>
//   )
// }


// function App(){
//   return(
//     <>
    
//     <BrowserRouter>
//     <Header/>
//     <Routes>
//     <Route path="/" element={<Login/>}/>
//     <Route path="/Signup" element={<Signup/>}/>
//     <Route path = "/About" element={<About/>}/>
//     <Route/>
//     <Route/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App;

function App(){
  return(
    <div>
    <img src={"img.jpg"} height={200} width={200}/>
    <br/>
    <br/>
    <img src={"src/assets/img.jpg"} height={200} width={200}/>
    <br />
    <img src="https://yt3.ggpht.com/ytc/AKedOLSUTmuXysocNOrXD86JiszqCXePK12O9GTWfr-Z=s900-c-k-c0x00ffffff-no-rj" alt="cduimg" height={200} width={200} />
    </div>
  )
}

export default App;