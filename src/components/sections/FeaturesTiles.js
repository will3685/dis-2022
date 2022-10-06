import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

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
  invertDesktop,
  invertMobile,
  alignTop,
  imageFill,
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
        <div className={splitClasses}>
          <div className="split-item">
            <div className = 'split-item-content'>
              <div className={
                classNames(
                  'center-content-mobile reveal-from-bottom',
                  // split-item-image
                  imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                <h3>{props.title2}</h3>
                <Image
                  src={props.image}
                  alt="Team image"
                  width={480}
                  height={320} />
              </div> 
            </div>
            <div>
              <h3>{props.title1}</h3>
              <p>{props.text1} </p>
              <p>{props.text2}</p>
              <p>{props.text3}</p>
              <p>{props.text4}</p>
            </div> 
          </div>
        </div>
      </div>
    </section>

  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
