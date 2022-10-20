import React from 'react';
import Image from '../../elements/Image';

const TestimonialSection = (props) => {
  return (
    <>
      <div className="tiles-item reveal-from-right" data-reveal-delay="200">
        <div className="tiles-item-inner">
          <div>
            <h3 className='text-color-personal-first'>{props.name1} <span className="text-color-personal-third"> 
                  {props.name2}</span>
            </h3>
            <p className="text-sm mb-0">— {props.description}</p>
          </div>
          <div>
            <Image 
              src={props.image}
              alt="Team image"
              width={200}
              height={200}
              />
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialSection;
