import styled from 'styled-components';

export const InfoContainer = styled.div`
  background-color: #ecede7;
  border-bottom: 1px solid black;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    margin-bottom: -40px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 550px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  // padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */
  
  // background-color: #ffffff;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const NewsWrapper = styled.div`
  z-index: 1;
  min-height: 200px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  // background-color: orange;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    min-height: 300px;
  }
`;

export const NewsColumn = styled.div`
  margin-left: 50px;
  // margin-top: -30px;

  @media screen and (max-width: 768px) {
    // margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 0px;
    padding: 0 15px;
  }
`;

export const Column1 = styled.div`
  // margin-bottom: 15px;
  // padding: 0 15px;
  padding-right: 15px;
  grid-area: col1;

  // background-color: red;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
    margin-bottom: 30px;
    margin-top: -20px;
  }
`;

export const Column2 = styled.div`
  // margin-top: -30px;
  // margin-bottom: 15px;
  // padding: 0 15px;
  grid-area: col2;

  // background-color: yellow;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;
`;

export const Heading = styled.h1`
  margin-bottom: 30px;
  // font-size: 36px;
  font-size: 2.5rem;
  line-height: 1.1;
  color: ${({ color }) => ( color )};

  @media screen and (max-width: 768px) {
    // font-size: 32px;
    font-size: 1.75rem;
  }
`;

export const NewsHeading = styled.h1`
  margin-bottom: 20px;
  // font-size: 32px;
  // font-size: 2.5rem;
  font-size: 1.3rem;
  color: ${({ color }) => ( color )};

  @media screen and (max-width: 768px) {
    // font-size: 24px;
    // font-size: 1.2em;
    // font-size: 1.5rem;
  }
`;

export const NewsRow = styled.div`
  font-size: 1.15rem;
  // line-height: 24px;
  color: ${({ color }) => ( color )};
`;

export const NewsDate = styled.p`
  width: 20%;
  float: left;
  margin-bottom: 5px;
  font-weight: bold;
  // background-color: yellow;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 0px;
  }
`

export const NewsDesc = styled.p`
  width: 80%;
  float: right;
  margin-bottom: 5px;
  // background-color: orange;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const NewsLink = styled.a`
  color: #117bb8;
  text-decoration: none;

  &:hover {
    color: #758c9b;
  }
`

export const Subtitle = styled.p`
  // max-width: 440px;
  margin-bottom: 30px;
  font-size: 1.15rem;
  line-height: 24px;
  color: ${({ color }) => ( color )};
`;

export const LastSubtitle = styled.p`
  // max-width: 440px;
  // margin-bottom: 30px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ color }) => ( color )};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  display: flex;
  // justify-content: center;

  @media screen and (max-width: 768px) {
    // max-width: 450px;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 80%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 50px;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
