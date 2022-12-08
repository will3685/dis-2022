import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
        <div className="hero-content">
            <h2 className="mt-0 mb-16 reveal-from-bottom text-color-personal-first" data-reveal-delay="200">
            Nosso site estará em breve no ar, mas você já pode nos enviar um e-mail se quiser: contato@institutodis.com.br \n Até já! Dr. Fleury Johnson e time DIS
        {/* <span className='text-color-personal-second'> inclusiva</span> */}
            </h2>
            <div className="container-xs">
              {/* <p className="m-0 mb-32 reveal-from-bottom text-color-personal-third" data-reveal-delay="400">
                A DIVERSIDADE E INCLUSÃO NA SAÚDE
              </p> */}
            
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

