import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

import Card from './partials/Card';

const data = [ 
  
  {
    title: 'Fleury Johnson ', 
    subtitle: 'Liderança Médica Inclusiva e Palestrante', 
    description: 'Head Global de saúde do Nubank. Indicado ao prêmio Faz Diferença do Jornal Globo na categoria Sociedade e Diversidade.\nÉ médico e professor convidado na UFRJ e na UFF, especialista em Clínica Médica pelo Hospital Pasteur no RJ, cursando MBA em gestão de saúde pela PUC/RS e MBA executivo em gestão de negócios pelo IBMEC. Também é Pós graduando em Psicologia do Trabalho e Organizacional...',
    image: require("../../assets/images/office.jpg")
  }, 
  {
    title: 'Bárbara Azevedo', 
    subtitle: 'Especialista em Inclusão e Palestrante', 
    description: 'É especialista em Acessibilidade pela UFRJ - Universidade Federal do Rio de Janeiro, com MBA em gestão, empreendedorismo e marketing pela PUC/RS - Escola de Negócios. Pesquisa e acompanha o campo do Ux Writing e design de serviços. Graduada em produção cultural executiva pela IFRJ - Instituto Federal do Rio de Janeiro, atuou no setor sociocultural com comunicação, criação, programação e gestão de projetos desde 2011, através do setor privado, público e de forma autônoma...',
    // image: require("../../assets/images/features-split-image-04.png") 
  },
  {
    title: 'Alabe Nunjara', 
    subtitle: 'Relações Públicas e Palestrante',
    description: 'Graduado em Relações Internacionais na UFRJ - Universidade Federal do Rio de Janeiro, passou para o mestrado em Ciência Política na UNIRIO - Universidade Federal do Estado do Rio de Janeiro - e mestrado em Relações Internacionais na UFBA - Universidade Federal da Bahia. Liderou o movimento de ações afirmativas a nível nacional e foi coordenador nacional executivo do Movimento de Casas de Estudantes e Assistência Estudantil...',
    image: require("../../assets/images/office.jpg")
  },
  {
    title: 'Danilo Pontes ',
    subtitle: 'Advogado e Palestrante em Direito LGBTQIAP+ e Raça',
    description: 'Pós-graduando pela Universidade Cândido Mendes em Direito do Trabalho com ênfase em Práticas Colaborativas. Graduado em Direito pela mesma Universidade. Atualmente, é sócio e advogado no Escritório Lenice & Pontes Advogados com experiência nas áreas de Direito Tributário, Direito do Trabalho, Direito Previdenciário, Direito Empresarial e Mediação.É Assessor Jurídico no Grupo Diversidade Niterói, primeira OSC LGBTQIAP+ do município de Niterói, sito no estado do Rio de Janeiro...',
    // image: require("../../assets/images/features-split-image-04.png")
  }
]; 

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const card = data.map( (item ) => {
    return (
      <Card
        key={item.title} 
        title={item.title} 
        subtitle={item.subtitle}
        description={item.description}
        image={item.image}
      />
    )
  });

  const sectionHeader = {
    title: 'Sobre nós',
    paragraph: 'No time do Instituto, constam profissionais qualificados para o debate e prática em diversidade, reunindo pessoas que, para além de negras, vivenciam diretamente questões de gênero e do âmbito LGBTQIAP+. Multidisciplinar, nosso time tem experiência na educação para a diversidade, inclusão, acessibilidade, Direito, gestão, marketing, comunicação, entre outras competências'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
         <SectionHeader data={sectionHeader} className="center-content" /> 
          <div className={splitClasses}>
            {card}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;