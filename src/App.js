import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './component/Aboutus/About';
import Footer from './component/Footer/Footer';
import Landing from './component/Landing/Landing';
import Members from './component/Members/Members';
import Invester from './component/Members/Invester';
import Founder from './component/Members/Founder';
import Partner from './component/Members/Partner';
import Navbar from './component/Navbar/Navbar';
import MainEvent from './component/Events/MainEvent';
import ProposalDetail from './component/Members/ProposalDetail';



export const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element ={<Landing/>}/>
        <Route exact path="/members" element ={<Members/>} />
        <Route exact path="/invester" element ={<Invester/>} />
        <Route exact path="/founder" element ={<Founder/>} />
        <Route exact path="/partner" element ={<Partner/>} />
        <Route exact path="/proposaldetail" element ={<ProposalDetail/>} />
        <Route exact path="/mainevent" element ={<MainEvent/>} />
        <Route exact path="/about" element ={<About/>} />
     </Routes>
     <Footer/>
  </Router>

  )
}

export default App;
