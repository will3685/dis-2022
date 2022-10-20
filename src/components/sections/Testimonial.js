import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
// import section 
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  pushLeft,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );


  const sectionHeader = {
    title: 'Nossa Equipe',
    paragraph: 'No time do Instituto, constam profissionais qualificados para o debate e prática em diversidade, reunindo pessoas que vivenciam diretamente questões de raça, gênero e do âmbito LGBTQIAP+. Multidisciplinar, nosso time tem experiência na educação para a diversidade, inclusão, acessibilidade, Direito, gestão, marketing, comunicação, entre outras competências. Conheça-nos:'
  };


  return (
    <section
    {...props}
    className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className='text-color-personal-first'>FLEURY<span className="text-color-personal-third"> JOHNSON</span>
                </h3>
                <p className="m-0">
                Head Global de saúde do Nubank. Indicado ao prêmio Faz Diferença do Jornal Globo 2019 na categoria Sociedade e Diversidade. É médico e professor convidado pela UFRJ, UFF e na West Indies University (Trinidade e Tobago). Especialista em Clínica Médica pelo Hospital Pasteur no RJ, Mestre em ciências médicas pela Universidade de Lisboa. Cursando MBA em gestão de saúde pela PUC/RS e MBA executivo em gestão de negócios pelo IBMEC.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/6.png')}
                  alt="Features split 01"
                  width={300}
                  height={240} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <h3 className='text-color-personal-first'>BÁRBARA<span className="text-color-personal-third"> AZEVEDO</span>
                </h3>
                <p className="m-0">
                É especialista em Acessibilidade pela UFRJ - Centro de Ciências da Saúde, com MBA em gestão, empreendedorismo e marketing pela PUC/RS - Escola de Negócios. Produtora executiva pelo IFRJ - Instituto Federal do Rio de Janeiro, atuou na gestão e criação de projetos sociais 2011, através do setor privado e público. Em 2019 fundou o projeto Faz Acessível, na área de diversidade, comportamento e consumo. É consultora em D&I e atualmente diretora de comunicação e consultora no Instituto GUETTO, de equidade racial.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/2.png')}
                  alt="Features split 01"
                  width={300}
                  height={240} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <h3 className='text-color-personal-first'>ALABE<span className="text-color-personal-third"> NUNJARA</span>
                </h3>
                <p className="m-0">
                Graduado em Relações Internacionais na UFRJ - Universidade Federal do Rio de Janeiro. Atuou no Centro de Informações da ONU-RIO e na Anistia Internacional, foi Assessor Comercial da Missão Econômica da Embaixada da França e Gerente Local da Brazil Link. Faz parte da Rede de Líderes da Fundação Lemann e tem prestado serviços de consultoria para organizações da sociedade civil sobre projetos e meios de implementação de diversidade racial e da agenda ESG no setor corporativo.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/5.png')}
                  alt="Features split 01"
                  width={300}
                  height={240} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
              <h3 className='text-color-personal-first'>DANILO<span className="text-color-personal-third"> PONTES</span>
                </h3>
                <p className="m-0">
                Advogado e pós-graduando pela Universidade Cândido Mendes em Direito do Trabalho com ênfase em Práticas Colaborativas. É Assessor Jurídico no Grupo Diversidade Niterói, primeira OSC LGBTQIAP+ do município de Niterói, RJ. Vice-Presidente na Comissão Nacional de Direitos Humanos na Associação Brasileira de Advogados (ABA). Membro da Comissão Estadual de Direitos Humanos da Ordem dos Advogados do Brasil no Rio de Janeiro. Atualmente, é sócio e advogado no Escritório Lenice & Pontes Advogados e voluntário em iniciativas de desenvolvimento social e sustentável.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/3.png')}
                  alt="Features split 01"
                  width={300}
                  height={240} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;