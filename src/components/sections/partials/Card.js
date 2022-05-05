import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const Card = ({
  imageFill, 
  ...props}) => {

  const title = props.title
  const subtitle = props.subtitle
  const description = props.description
  const image = props.image

  return (
    <>
      <div className="split-item">
        <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
          <h3 className="mt-0 mb-12">
              {title}
          </h3>
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
              {subtitle}
        </div>
          <p className="m-0 inline-block">
            {description}
          </p>
        </div>
        <div className={
          classNames(
            'split-item-image center-content-mobile reveal-from-bottom',
             imageFill && 'split-item-image-fill'
          )}
          data-reveal-container=".split-item">
          <Image
          src={image}
          alt="Features split 03"
          width={528}
          height={396} />
        </div>      
      </div>
    </>
  );
}

export default Card;
