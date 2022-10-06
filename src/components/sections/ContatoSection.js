import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';

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
  invertDesktop,
  invertMobile,
  alignTop,
  imageFill,
  pushLeft,
  ...props
) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
    {...props}
    className={outerClasses}
  >
    <div className="container">
      <p>{props.link1}</p>
    </div>
   
  </section>
  )
}

ContatoSection.propTypes = propTypes;
ContatoSection.defaultProps = defaultProps;

export default ContatoSection;