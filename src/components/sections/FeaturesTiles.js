import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Features from './partials/Features';

const data = [
  {
    src: require('../../assets/images/feature-tile-icon-01.svg'),
    title: "Palestras",
    subtitle: "Com carga horária flexível, ministramos diferentes instruções temáticas, rodas de conversa e debates sobre práticas inclusivas na saúde, compartilhando estudos e práticas que permeiam temas como especificidades de saúde para a população negra, LGBTQIAP+ e seus atravessamentos."
  },
  {
    src: require('../../assets/images/feature-tile-icon-02.svg'),
    title: "Treinamento",
    subtitle: "(Para gestores de saúde e profissionais de saúde) - Solução pensada para organizações e empresas de saúde que buscam uma imersão completa no contexto de saúde para a diversidade. Com carga horária média de 12h, distribuídas em acordo com a instituição solicitante, o treinamento conta com abordagens desenhadas tanto para líderes e gestores, quanto para demais profissionais envolvidos. "
  },
  {
    src: require('../../assets/images/feature-tile-icon-03.svg'),
    title: "Consultoria",
    subtitle: "Disponível para organizações de diversos fins, empresas e projetos que precisam de estratégias de melhoria e cuidado em saúde mental e física dos colaboradores de grupos minorizados (negres, LGBTQIAP+ ) e consultoria para transformar ambientes e espaços físicos   de trabalhos e hospitais em ambientes mais inclusivos."
  },
  {
    src: require('../../assets/images/feature-tile-icon-04.svg'),
    title: "Selo de Diversidade e Inclusão para hospitais e empresas de Saúde",
    subtitle: "Para empresas que se comprometem em oferecer atendimento de qualidade, baseado em equidade e diversidade para seus pacientes, investindo em educação continuada de seus profissionais. O selo tem validade de 18 meses."
  }

];

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner ',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Instituto de Diversidade e Inclusão na Saúde',
    paragraph: 'O DIS é uma organização sem fins lucrativos que visa promover e ensinar melhores práticas na saúde privada e pública no que tange ao atendimento à população negra, historicamente vulnerabilizada e subrepresentada.'
  };

  const feature = data.map(item => {
    return (
      <Features 
        key={item.title}
        src={item.src}
        title={item.title}
        subtitle={item.subtitle}
      />
    )
  })

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {feature}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;