import styled from 'styled-components'
export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  /* min-height: 100vh; */
  z-index:100;
`

export const Modal = styled.div`
 position: fixed;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: rgba(31,32,41,.75);
  pointer-events: none;
  pointer-events: auto;
    opacity: 1;
    transition: all 300ms ease-in-out;
`
export const ModalWrap  = styled.div`
position: relative;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 20px;
  background-color: #fff;
    -ms-flex-item-align: center;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(199,175,189,.25);
  transform: scale(0.6);
  opacity: 1;
    transform: scale(1);
    transition: opacity 250ms 500ms ease, transform 350ms 500ms ease;
    padding: 3%;
  @media screen and (max-width: 500px) {
		width: calc(100% - 40px);
		padding-bottom: 15px;
	}
`