import React from 'react';
// import section 
import FeaturesTiles from '../components/sections/FeaturesTiles';

const data = [
  {
    image: require('../assets/images/time-foto.png'),
    title1: "Sobre o instituto",
    title2: "SOBRE NÓS",
    text1: "Somos o Instituto DIS (Diversidade e Inclusão na Saúde), idealizado e liderado por Dr. Fleury Johnson, médico formado pela UFRJ, especialista em clínica médica, professor, pesquisador e referência em saúde da população negra. ",
    text2: "O DIS é uma organização sem fins lucrativos que visa promover e ensinar melhores práticas na saúde privada e pública no que tange ao atendimento à população negra, entregando soluções baseadas em dados, demandas coletivas, subjetivas e interseccionais.",
    text3: "Nossa missão é compartilhar conhecimento de impacto para a experiência do paciente e dos colaboradores, promovendo gestão e atendimento com equidade, auxiliando na redução dos índices desfavoráveis historicamente vivenciados por essa população.",
    text4: "O Instituto DIS é uma organização intrinsecamente comprometida com uma saúde mais diversa e inclusiva."
  }
]

const About = () => {
  return(
    <>
      <FeaturesTiles 
        className="illustration-section-02"
        image={data[0].image}
        title1={data[0].title1}
        title2={data[0].title2}
        text1={data[0].text1}
        text2={data[0].text2}
        text3={data[0].text3}
        text4={data[0].text4}
      />
    </>
  )
}

export default About;
