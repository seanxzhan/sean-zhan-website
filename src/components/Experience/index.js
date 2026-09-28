import React from 'react';
import Pixar from '../../images/pixar.jpg';
// import BVC from '../../images/bvc.jpg';
import Brown from '../../images/brown.png';
import MIT from '../../images/mit.png';
import Roblox from '../../images/roblox.jpg'
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
          <ServicesIcon src={Roblox} />
          <ServicesH2 color='#2c3e4a'>Roblox</ServicesH2>
          <ServicesH3 color='#2c3e4a'>Applied Scientist Intern '26</ServicesH3>
          <ServicesH3 color='#2c3e4a'>Research Intern '25</ServicesH3>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={MIT} />
          <ServicesH2 color='#2c3e4a'>Massachusetts Institute of Technology</ServicesH2>
          <ServicesH3 color='#2c3e4a'>Ph.D. Student</ServicesH3>
          {/* <ServicesP color='#2c3e4a'>
            Graphics research in Algorithmic Design Group.
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Pixar} />
          <ServicesH2 color='#2c3e4a'>Pixar Animation Studios</ServicesH2>
          <ServicesH3 color='#2c3e4a'>Research Intern '22</ServicesH3>
          {/* <ServicesP color='#2c3e4a'>
            Worked on neural skinning to predict corrective shapes for character
            rigging. 
            Outperformed linear blend skinning by an 80% increase in
            accuracy.
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Brown} />
          <ServicesH2 color='#2c3e4a'>Brown University</ServicesH2>
          <ServicesH3 color='#2c3e4a'>Undergrad RA '20-'23</ServicesH3>
          {/* <ServicesP color='#2c3e4a'>
            <span style={{ fontWeight: 'bold' }}>ShapeCrafter </span>
            recursively modifies 3D shape distributions given text inputs.
          </ServicesP>
          <ServicesP color='#2c3e4a'>
            <span style={{ fontWeight: 'bold' }}>CharacterMixer </span>
            interpolates characters during animation sequences.
          </ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
      </ExpWrapper>
    </ServicesContainer>
  );
};

export default Services;
