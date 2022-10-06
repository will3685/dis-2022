import React from 'react';
// import section 
import ContatoSection from '../components/sections/ContatoSection';

  const data = [
    {
      link1: 'https://www.linkedin.com/company/institutodis/'
    }
  ]

const Contato = (
) => {

  return (
   <>
    <ContatoSection 
      link1 = {data[0].link1}
    />
   </>
  )
}

export default Contato;
