import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import * as MainHeader from '../../heder/MainHeaderStyle'
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../../image/logo.ico'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../MH_home";
import {leadTeam,newTeam,haveTeam } from '../../helperMethods';

const LargeScreenBar = ({ toggle }) => {
  const [scrollNav, setScroll] = useState(false);
  const navOnChange = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', navOnChange);
  }, []);
  const toggleHandler = () => {
    scroll.scrollToTop();
  };
  const [title, setTitle] = useState("");
  
  const [memberNave, setMemberNave] = useState("عرض الفريق");
  useEffect(() => {
    if (!leadTeam() && ! newTeam()) {
      setTitle("انشاء فريق")
    } else { setTitle(" اعدادات الفريق") }
  }, []);
useEffect(()=>{
if (!haveTeam()) {
  setMemberNave("  التسجيل في فريق  ")
}}, []);
  return (
    <>
      <Router>
        <IconContext.Provider value={{ color: '#fff' }}>
          <MainHeader.Nav scrollNav={scrollNav}>
            <MainHeader.NavContainer >
              <MainHeader.NavLogo to='/' onClick={toggleHandler}><MainHeader.Image scrollNav={scrollNav} duration={500} src={logo} alt="" /> </MainHeader.NavLogo>
              <MainHeader.ResponsiveIcon onClick={toggle}>
                <FaBars />
              </MainHeader.ResponsiveIcon>
            </MainHeader.NavContainer>
          </MainHeader.Nav>
        </IconContext.Provider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default LargeScreenBar