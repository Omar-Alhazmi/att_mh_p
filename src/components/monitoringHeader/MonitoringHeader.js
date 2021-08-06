import {useState} from 'react'
import SmallScreen from './menuHandle/SmallScreenBar';
import LargeScreen from './menuHandle/LargeScreenBar';
function MonitoringHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
return (
    <>
       <SmallScreen isOpen={isOpen} toggle={toggle}/>
       <LargeScreen toggle={toggle}/>
    </>

  );
}

export default MonitoringHeader;
