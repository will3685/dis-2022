import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';


const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      
        <Link to="/">
          <Image
            src={require('../../../assets/images/logo-svg.svg').default}
            alt="Open"
            width={140}
            height={140} />
        </Link>
      
    </div>
  );
}

export default Logo;