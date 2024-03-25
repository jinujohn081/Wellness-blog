import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { Row, Badge, Card, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const PORTFOLIO = gql`
  query Getportfolios($slug: String!) {
    portfolios(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          description
          date
          slug
          image {
            data {
              attributes {
                url
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

const SinglePage = () => {
  const { slug } = useParams()
  const { loading, data, error } = useQuery(PORTFOLIO, {
    variables: { slug: slug },
  })
  if (loading) return <div>Loading....</div>
  if (error) return <div>Error....</div>
  return (
    <>
      <Container>
        <h1>{data.portfolios.data[0].attributes.title}</h1>
        <p>
          {data.portfolios.data[0].attributes.date} | <span>Fahim jaffir</span>
        </p>
        <span>
          {data.portfolios.data[0].attributes.tags.data.map((tag) => (
            <Link to={`/tag/${tag.attributes.slug}`}>
              <Badge
                bg='none'
                className='bg-quaternary-color text-primary-color'
                key={tag.attributes.slug}
              >
                #{tag.attributes.name}
              </Badge>
            </Link>
          ))}
        </span>

        <Row className='post-detail rounded top shadow pt-3 bg-quaternary-color'>
          <Col>
            {
              <Link to={`/portfolio/${data.portfolios.data[0].id}`}>
                <Card.Img
                  src={`${process.env.REACT_APP_ADMIN_BASE_URL}${data.portfolios.data[0].attributes.image.data.attributes.url}`}
                />
              </Link>
            }
            <ReactMarkdown>
              {data.portfolios.data[0].attributes.description}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SinglePage
