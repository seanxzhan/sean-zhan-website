import styled from 'styled-components';

export const ServicesContainer = styled.div`
  // height: 800px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  background: #304856;
  margin-top: -80px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }

  // @media screen and (max-width: 768px) {
  //   height: 1100px;
  // }

  // @media screen and (max-width: 480px) {
  //   height: 1300px;
  // }
`;

export const ExpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-height: 700px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    padding-bottom: 50px;
  }
`;

export const ServicesCard = styled.div`
  background: #ecede7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 15px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 64px;
  // background: red;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 30px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ServicesH3 = styled.h2`
  font-size: 1.15rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
