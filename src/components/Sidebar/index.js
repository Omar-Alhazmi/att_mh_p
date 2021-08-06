import React from 'react';
import * as SidebarElements from './SidebarElements';
// import { leadTeam,newTeam } from '../helperMethods';

const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarElements.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarElements.Icon onClick={toggle}>
         <SidebarElements.CloseIcon />
      </SidebarElements.Icon>
      <SidebarElements.SidebarWrapper>
         <SidebarElements.SidebarMenu>
         </SidebarElements.SidebarMenu>
         <SidebarElements.SideBtnWrap>
         </SidebarElements.SideBtnWrap>
      </SidebarElements.SidebarWrapper>
   </SidebarElements.SidebarContainer>
   )
}
export default Sidebar

