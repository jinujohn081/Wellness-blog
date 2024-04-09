import React from 'react'
import { Row, Col } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <>
      <Row className='align-items-center g-lg-5 py-5'>
        <Col>
          <div className='jumbotron jumbotron-fluid'>
            <h1 className='display-4'>
              <span className='bg-tertiary-color text-primary-color'>
                Health
              </span>{' '}
              <span className='text-tertiary-color'> and happiness</span>
            </h1>
            <p className='lead'>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default HeroSection
