import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Features from './partials/Features';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}



const ContatoSection = (
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft
) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    ' section-inner illustration-section-03',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Entre em contato conosco'
  };

  const data = [
    {
      src: "",
      title: "LinkedIn",
      icon: ""
    },
    {
      src: "https://instagram.com/institutodis?igshid=YmMyMTA2M2Y=",
      title: "Instagram",
      icon: ""
    },
    {
      src: "contato@institutodis.com",
      title: "Email",
      icon: ""
    }
  ]

  const feature = data.map( item => {
    return (
      <Features
        key={item.title}
        title={item.title}
      />
    )
  })

  return (
    <section
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
  )
}

ContatoSection.propTypes = propTypes;
ContatoSection.defaultProps = defaultProps;

export default ContatoSection;