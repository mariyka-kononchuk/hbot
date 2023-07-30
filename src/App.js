//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from './components/Footer'
// import Banner from "./components/Banner/Banner";

function App() {
    return (
        <div className='main'>
       
                <Header />
                {/* <Banner />
                <Content />
                <Footer /> */}
   
        </div>
    );
}

export default App;
