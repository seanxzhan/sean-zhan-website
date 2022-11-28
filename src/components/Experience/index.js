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
  ServicesP
} from './ExpElements';

const Services = () => {
  return (
    <ServicesContainer id='experience'>
      <ServicesH1>Experience</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Pixar} />
          <ServicesH2>Pixar Animation Studios</ServicesH2>
          <ServicesH3>Research Intern '22</ServicesH3>
          <ServicesP>
            Worked on neural skinning to predict corrective shapes for character
            rigging. Outperformed linear blend skinning by an 80% increase in
            accuracy.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={BVC} />
          <ServicesH2>Brown Visual Computing</ServicesH2>
          <ServicesH3>Research Assistant '20 - '22</ServicesH3>
          <ServicesP>
            <span style={{ fontWeight: 'bold' }}>CharacterMixer </span>
            interpolates between characters of different mesh and skeleton topology.
          </ServicesP>
          <ServicesP>
            <span style={{ fontWeight: 'bold' }}>ShapeCrafter </span>
            recursively modifies 3D shapes given text inputs.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
