import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Recruit = () => {
  const { recruit } = useContext(PortfolioContext);
  const { img, imgTwo, paragraphOne, paragraphTwo, paragraphThree, resume1, resume2, resume3 } =
    recruit;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="recruit">
      <Container>
        <Title title="Recruitment" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                {resume1 && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume1}
                    >
                      Hustler GO !
                    </a>
                  </span>
                )}
                <hr />
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                {resume2 && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume2}
                    >
                      Hipster GO !
                    </a>
                  </span>
                )}
                <hr />
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume3 && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume3}
                    >
                      Hacker GO !
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
        <br />
        <br />
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className='recruit_bound'>
            <div className='recruit_item'>
              <div>
                <div className='recruit_text'>서류접수</div>
                <div className='recruit_date'>2022.02.21 ~ 03.11</div>
              </div>
            </div>
            <div className='recruit_item'>
              <div>
                <div className='recruit_text'>서류 합격 발표</div>
                <div className='recruit_date'>2022.03.12</div>
              </div>
            </div>
            <div className='recruit_item'>
              <div>
                <div className='recruit_text'>면접</div>
                <div className='recruit_date'>2022.03.14 ~ 03.17</div>
              </div>
            </div>
            <div className='recruit_item'>
              <div>
                <div className='recruit_text'>최종 합격 발표</div>
                <div className='recruit_date'>2022.03.18</div>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Recruit;
