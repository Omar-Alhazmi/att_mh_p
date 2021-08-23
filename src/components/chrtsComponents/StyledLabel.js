import styled from 'styled-components'

export const LabelContainer = styled.div`
@media (min-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
}

`
export const LabelCard = styled.div`
  border-top: 3px solid ${({greenLine,orangeLine,blueLine}) => (greenLine ? '#45d3d3' : 
                                                    orangeLine ? '#fcaf4a' : blueLine ? "#549ef2"
                                                    :'#0000')};
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
    padding: 30px;
    margin: 20px; 
    text-align: center;
        height: 133px;
        width: 254px;
    color:${({white}) => (white ? '#ffff' : '#0000')};
    background-color:${({green,read}) => (green ? '#00968857' : read ? '#f27173 ':'#0000')};
    &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
@media (max-width: 450px) {
        height: 200px;
        margin: 57px;
}
@media (max-width: 387px) {
    margin: 23px;
}
@media (max-width: 300px){
    width: none;
}

`
export const CardHeadLine = styled.h2`
    color:${({white}) => (white ? '#ffff' : '#0000')};
        font-weight: 600;
        font-size: 1.7rem;
        line-height: none!important;
            margin: auto;
@media (max-width:1024px) {
        line-height: none;
            margin: auto;}

`
export const TableContainer = styled.div`
   justify-content:center;
   align-items:center;
    width: 69%;
    margin: auto;
    margin-top: 59px;
    margin-bottom: 58px;
    position: relative;
  max-height:  300px;
  overflow: scroll;
  box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
@media (max-width: 702px){
    width: 100%; 
}
`
export const ChartContainer = styled.div`
    display: flex;
      align-items: center;
      justify-content: center;
      align-content: space-around;
      flex-wrap: wrap;
      box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );

      @media screen and (max-width: 600px) {
      display: grid;
      border:none;
      }
`


