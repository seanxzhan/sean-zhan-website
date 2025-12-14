const pub1 = {
  title: 'ShapeCrafter: A Recursive Text-Conditioned 3D Shape Generation Model',
  arxivLink: 'https://arxiv.org/abs/2207.09446',
  projectLink: 'https://ivl.cs.brown.edu/research/shapecrafter.html',
  authors: {
    'Rao Fu': 'https://freddierao.github.io/',
    'Xiao Zhan': 'https://seanzhan.com/',
    'Yiwen Chen': '',
    'Daniel Ritchie': 'https://dritchie.github.io/',
    'Srinath Sridhar': 'https://cs.brown.edu/people/ssrinath/'
  },
  venue: 'NeurIPS 2022',
  img: require('../../images/pubs/shapecrafter.jpg'),
  alt: 'shapecrafter',
};

const pub2 = {
  title: 'CharacterMixer: Rig-Aware Interpolation of 3D Characters',
  arxivLink: 'https://arxiv.org/abs/2402.15580',
  projectLink: 'https://seanxzhan.github.io/projects/CharacterMixer.html',
  authors: {
    'Xiao Zhan': 'https://seanzhan.com/',
    'Rao Fu': 'https://freddierao.github.io/',
    'Daniel Ritchie': 'https://dritchie.github.io/',
  },
  venue: 'Eurographics 2024',
  img: require('../../images/pubs/charactermixer.jpg'),
  alt: 'charactermixer',
};

const pub3 = {
  title: 'PhysiOpt: Physics-Driven Shape Optimization for 3D Generative Models',
  arxivLink: 'https://dl.acm.org/doi/abs/10.1145/3757377.3763884',
  projectLink: 'https://physiopt.github.io/',
  authors: {
    'Xiao Zhan*': 'https://seanzhan.com/',
    'Clément Jambon*': 'https://clementjambon.github.io/',
    'Evan Thompson': 'https://evanthompson.site/about',
    'Kenney Ng': 'https://research.ibm.com/people/kenney-ng',
    'Mina Konaković Luković': 'https://people.csail.mit.edu/mina/',
    '*equal contribution': '',
  },
  venue: 'SIGGRAPH ASIA 2025',
  img: require('../../images/pubs/physiopt.jpg'),
  alt: 'physiopt',
}

const Pubs = [ pub3, pub2, pub1 ];
module.exports = Pubs;