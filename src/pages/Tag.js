import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Row, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PostGrid from './components/PostGrid'
const TAGS = gql`
  query GetTags($slug: String!) {
    tags(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          slug
          portfolios {
            data {
              id
              attributes {
                title
                description
                date
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
      }
    }
  }
`

const Tag = () => {
  const { slug } = useParams()
  const { loading, data, error } = useQuery(TAGS, {
    variables: { slug: slug },
  })
  console.log('This tag', data)

  if (loading) return <div>Loading....</div>
  if (error) return <div>Error.....</div>
  return (
    <Container>
      <h1>
        {data.tags.data[0].attributes.name}-{' '}
        {data.tags.data[0].attributes.portfolios.data.length}
      </h1>
      <Row>
        {data.tags.data[0].attributes.portfolios.data.map((item) => (
          <PostGrid item={item} />
        ))}
      </Row>
    </Container>
  )
}

export default Tag
