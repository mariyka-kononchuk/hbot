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
import { Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from './components/Footer'
// import Banner from "./components/Banner/Banner";

function App() {
    return (
        <div className='main'>
            <Routes>
                <Route path="/" element={<Header />}>
                {/* <Route path="subtask1/:parameter" element={<Subtask1 />} />
                <Route path="subtask2/*" element={<Subtask2 />} />
                <Route path="subtask3" element={<Subtask3 />} />
                <Route path="subtask4" element={<Subtask4/>} /> */}
                </Route >
            </Routes>
        </div>
    );
}

export default App;
