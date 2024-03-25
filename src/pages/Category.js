import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Row, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PostGrid from './components/PostGrid'
const CATEGORIES = gql`
  query GetCategories($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
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

const Category = () => {
  const { slug } = useParams()
  const { loading, data, error } = useQuery(CATEGORIES, {
    variables: { slug: slug },
  })

  if (loading) return <div>Loading....</div>
  if (error) return <div>Error.....</div>
  return (
    <Container>
      <h1>
        {data.categories.data[0].attributes.name}-{' '}
        {data.categories.data[0].attributes.portfolios.data.length}
      </h1>
      <Row>
        {data.categories.data[0].attributes.portfolios.data.map((item) => (
          <PostGrid item={item} />
        ))}
      </Row>
    </Container>
  )
}

export default Category
