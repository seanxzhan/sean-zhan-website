import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img
} from './AboutElements';
import { AboutMe } from './Data';

const Intro = ({
  imgStart,
  headline,
  description,
  description2,
  img,
  alt,
  id,
  primary
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading color='#304856'>{headline}</Heading>
                <Subtitle color='#304856'>{description}</Subtitle>
                <Subtitle color='#304856'>{description2}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

const InfoSection = () => {
  return (
    <Intro {...AboutMe}/>
  )
}

export default InfoSection;
