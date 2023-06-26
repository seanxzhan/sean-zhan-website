import styled from 'styled-components';

export const InfoContainer = styled.div`
  background-color: #ecede7;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const InfoWrapper = styled.div`
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

export const PubsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
`;

export const PubsRow = styled.div`
  // background-color: #d4ac2a;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 8%;
  padding-right: 8%;
  // background-color: orange;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    // background: red;
  }
`;

export const PubsImgWrapper = styled.div`
  align-items: center;
  // background-color: yellow;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    // margin-top: 15px;
    margin-bottom: 10px;
    // background: red;
  }
`

export const PubsImg = styled.img`
  height: 100px;
  width: 160px;

  @media screen and (max-width: 768px) {
    // height: 150px;
    // width: 240px;
    height: 10rem;
    width: 16rem;
    // max-width: 100%;
    // height: auto;
  }
`;

export const PubsDescription = styled.div`
  // background-color: red;
  // display: grid;
  // flex-direction: row;
  // justify-content: flex-start;
  padding-top: 0.1rem;
  padding-bottom: 1rem;
  // background-color: red;
`;

export const PubsTitle = styled.a`
  font-size: 1.15rem;
  margin-left: 1rem;
  text-decoration: none;
  color: #117bb8;
  display: block;
  padding-bottom: 0.3rem;

  &:hover {
    color: #758c9b;
  }

  // @media screen and (max-width: 480px) {
  //   font-size: 1em;
  // }
`;

export const PubsAuthor = styled.a`
  font-size: 1rem;
  // margin-left: 1rem;
  text-decoration: none;
  color: #117bb8;

  &:hover {
    color: #758c9b;
  }

  // @media screen and (max-width: 480px) {
  //   font-size: 0.9em;
  // }
`;

export const PubsText = styled.a`
  color: #304856;

  // @media screen and (max-width: 480px) {
  //   font-size: 0.9em;
  // }
`

export const PubsLine = styled.div`
  font-size: 1rem;
  margin-left: 1rem;
  display: block;
  color: #304856;
  padding-bottom: 0.3rem;

  // @media screen and (max-width: 480px) {
  //   font-size: 0.9em;
  // }
`;

export const PubH1 = styled.h1`
  font-size: 2.5rem;
  color: #304856;
  margin-top: 3.5rem;
  margin-bottom: 3.2rem;
  // background-color: red;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
    margin-top: 3.05rem;
  }
`;
