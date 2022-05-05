import React from 'react';
import Image from '../../elements/Image';

const Features = (props) => {
  const src = props.src
  const title = props.title
  const subtitle = props.subtitle
  return (
    <>
      <div className="tiles-item reveal-from-bottom">
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Image
                src={src}
                alt="Features tile icon 01"
                width={64}
                height={64} />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">
              {title}
            </h4>
            <p className="m-0 text-sm inline-block">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features;