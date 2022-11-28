import React from 'react';
import { 
  InfoContainer,
  InfoWrapper,
  PubsContainer,
  PubsRow,
  PubsImgWrapper,
  PubsImg,
  PubsDescription,
  PubsTitle,
  PubsAuthor,
  PubsText,
  PubsLine,
  PubH1
} from './PubsElements';
import ShapeCrafter from '../../images/pubs/shapecrafter.jpg'

const Publications = ({
  title,
  arxivLink,
  projectLink,
  authors,
  venue,
  img,
  alt
}) => {
  const authorList = Object.entries(authors).map(
    ([ key, value ]) => {
      return value == '' ? (<PubsText>{key}</PubsText>) : (<PubsAuthor href={value} target='_blank'>{key}</PubsAuthor>)
    }
  );
  const authorsLine = authorList.reduce((prev, curr) => [prev, ', ', curr]);

  return (
    <>
      <InfoContainer id='publications'>
        <InfoWrapper>
          <PubH1>Publications</PubH1>
          <PubsContainer>
            <PubsRow>
              <PubsImgWrapper>
                <PubsImg src={ShapeCrafter} />
              </PubsImgWrapper>
              <PubsDescription>
                <PubsTitle href={arxivLink} target='_blank'>
                  {title}
                </PubsTitle>
                <PubsLine>
                  {authorsLine}
                </PubsLine>
                <PubsLine style={{ fontStyle: 'italic' }}>
                  {venue}
                </PubsLine>
                <PubsLine>
                <PubsAuthor href={projectLink} target='_blank'>
                  project page
                </PubsAuthor>
                </PubsLine>
              </PubsDescription>
            </PubsRow>
            <PubsRow>
              <PubsDescription>
                <PubsLine>
                  More to come!
                </PubsLine>
              </PubsDescription>
            </PubsRow>
          </PubsContainer>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Publications;