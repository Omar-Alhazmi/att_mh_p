import styled from 'styled-components'

export const LabelContainer = styled.div`
@media (min-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
}

`

export const LabelCard = styled.div`
  border-top: 3px solid hsl(180, 62%, 55%);
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
    padding: 30px;
    margin: 20px; 
    text-align: center;
        height: 133px;
        width: 254px;
    color:${({white}) => (white ? '#ffff' : '#0000')};
    background-color:${({greenOrYll}) => (greenOrYll ? '#00968857' : '#0000')};
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
`


