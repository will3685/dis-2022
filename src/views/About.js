import React from 'react';
// import section 
import FeaturesTiles from '../components/sections/FeaturesTiles';

const data = [
  {
    image: require('../assets/images/office.jpg'),
    title1: "Sobre o instituto",
    title2: "SOBRE NÓS",
    text1: "Somos o instituto DIS, idealizado e liderado por Dr. Fleury Johnson, médico formado pela UFRJ, especialista em clínica médica, professor, pesquisador e especialista em saúde de população negra.",
    text2: "O DIS é uma organização sem fins lucrativos que visa promover e ensinar melhores práticas na saúde privada e pública no que tange ao atendimento à população negra historicamente vulnerabilizada e subrepresentada.",
    text3: "Nosso trabalho contempla a comunidade negra, considerando também as especifidades que resultam de viver múltiplas opressões, como por exemplo, ser uma pessoa negra e pertencer também à comunidade LGBTQIAP+, ser mulher, ser uma pessoa gorda, ser uma pessoa 60+, ser uma pessoa com deficiência (PcD), entre outros.",
    text4: "Nossa missão é de compartilhar conhecimento de impacto para a experiência do paciente e dos colaborados, promovendo atendimento com equidade e auxiliando na redução dos índices desfavoráveis no âmbito da saude."
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
