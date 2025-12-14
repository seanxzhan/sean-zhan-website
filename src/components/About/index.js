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
  LastSubtitle,
  ImgWrap,
  Img,
  NewsWrapper,
  NewsColumn,
  NewsHeading,
  NewsRow,
  NewsDate,
  NewsDesc,
  NewsLink
} from './AboutElements';
import { AboutMe } from './Data';
import Resume from '../../pdfs/resume.pdf';
// import { Link } from "react-router-dom";

const Intro = ({
  imgStart,
  img,
  alt,
  id,
  primary
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading color='#304856'>Hi! I'm Xiao Sean Zhan.</Heading>
                <Subtitle color='#304856'>
                  I'm a third year PhD student at MIT CSAIL, where I'm fortunate to be advised by <NewsLink href='https://people.csail.mit.edu/mina/' target='_blank'>Mina</NewsLink>. My research focuses on using machine learning techniques to understand, generate, and manipulate 3D shapes. I'm currently supported by the MathWorks Engineering Fellowship.
                </Subtitle>
                <Subtitle color='#304856'>
                  I previously obtained my Sc.B. from Brown University, where I conducted research under the guidance of <NewsLink href='https://dritchie.github.io/' target='_blank'>Daniel</NewsLink> and <NewsLink href='https://cs.brown.edu/people/ssrinath/' target='_blank'>Srinath</NewsLink>.
                </Subtitle>
                <Subtitle color='#304856'>
                  In my free time, I play ultimate frisbee and snowboard, ride (and sometimes build) bikes, and make <NewsLink href="https://www.instagram.com/sean.takes.shots/" target='_blank'>film photographs</NewsLink>.
                </Subtitle>
                <LastSubtitle color='#304856'>
                  <NewsLink href="https://scholar.google.com/citations?user=gG5iL0QAAAAJ&hl=en" target='_blank'>Google Scholar</NewsLink> | <NewsLink href={Resume} target='_blank'>CV</NewsLink>
                  {/* | <Link to='/projects' className='NewsLink'>Past Projects</Link> */}
                </LastSubtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        {/* <NewsWrapper>
          <NewsColumn>
            <NewsHeading color='#304856'>Recent News</NewsHeading>
            <NewsRow color='#304856'>
              <NewsDate>February 2024</NewsDate>
              <NewsDesc>My first first-author paper CharacterMixer was accepted to Eurographics 2024!</NewsDesc>
            </NewsRow>
            <NewsRow color='#304856'>
              <NewsDate>May 2023</NewsDate>
              <NewsDesc>I graduated with honors from Brown University.</NewsDesc>
            </NewsRow>
            <NewsRow color='#304856'>
              <NewsDate>May 2023</NewsDate>
              <NewsDesc>I was awarded the Senior Prize by the Brown CS Department.</NewsDesc>
            </NewsRow>
            <NewsRow color='#304856'>
              <NewsDate>May 2023</NewsDate>
              <NewsDesc>I won 2nd place at the Brown CS Undergraduate Symposium out of 19 projects.</NewsDesc>
            </NewsRow>
            <NewsRow color='#304856'>
              <NewsDate>October 2022</NewsDate>
              <NewsDesc>My first paper on <NewsLink href='https://ivl.cs.brown.edu/#/projects/shapecrafter' target='_blank'>recursively generating 3D shapes from text</NewsLink> was accepted to NeurIPS 2022.</NewsDesc>
            </NewsRow>
          </NewsColumn>
        </NewsWrapper> */}
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
