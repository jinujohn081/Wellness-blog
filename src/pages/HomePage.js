import React from 'react'

import { useQuery, gql } from '@apollo/client'
import { Row, Container } from 'react-bootstrap'
import HeroSection from './components/HeroSection'
import PostGrid from './components/PostGrid'

const PORTFOLIOS = gql`
  query GetPortfolios {
    portfolios {
      data {
        id
        attributes {
          title
          description
          slug
          image {
            data {
              attributes {
                formats
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = () => {
  const { loading, error, data } = useQuery(PORTFOLIOS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <>
      <Container>
        <HeroSection />
        <Row>
          {data.portfolios.data.map((item) => (
            <PostGrid item={item} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default HomePage
