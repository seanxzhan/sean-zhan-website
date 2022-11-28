import React from 'react';
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-3.svg';
// import Icon3 from '../../images/svg-5.svg';
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
          <ServicesH3>Research Intern</ServicesH3>
          <ServicesP>
            Worked on neural skinning to predict corrective shapes for character
            rigging. Outperformed linear blend skinning by an 80% increase in
            accuracy.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={BVC} />
          <ServicesH2>Brown Visual Computing</ServicesH2>
          <ServicesH3>Research Assistant</ServicesH3>
          <ServicesP>
            <span style={{ fontWeight: 'bold' }}>CharacterMixer</span>:
            Interpolates between characters of different mesh and skeleton topology.
          </ServicesP>
          <ServicesP>
            <span style={{ fontWeight: 'bold' }}>ShapeCrafter</span>:
            Recursively modifies 3D shapes given text inputs.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
