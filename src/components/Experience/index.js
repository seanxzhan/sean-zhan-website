import React from 'react';
import Pixar from '../../images/pixar.jpg';
import BVC from '../../images/bvc.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesH3,
  ServicesP,
  ExpWrapper
} from './ExpElements';

const Services = () => {
  return (
    <ServicesContainer id='experience'>
      <ExpWrapper>
      <ServicesH1>Experience</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Pixar} />
          <ServicesH2 color='#304856'>Pixar Animation Studios</ServicesH2>
          <ServicesH3 color='#304856'>Research Intern '22</ServicesH3>
          <ServicesP color='#304856'>
            Worked on neural skinning to predict corrective shapes for character
            rigging. Outperformed linear blend skinning by an 80% increase in
            accuracy.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={BVC} />
          <ServicesH2 color='#304856'>Brown Visual Computing</ServicesH2>
          <ServicesH3 color='#304856'>Research Assistant '20 - '22</ServicesH3>
          <ServicesP color='#304856'>
            <span style={{ fontWeight: 'bold' }}>ShapeCrafter </span>
            recursively modifies 3D shapes given text inputs.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      </ExpWrapper>
    </ServicesContainer>
  );
};

export default Services;
