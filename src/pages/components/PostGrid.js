import React from 'react'
import { Col, Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostGrid = ({ item }) => {
  return (
    <Col key={item.id} md={4} className='mb-5 shadow'>
      <Card class='card-img '>
        <Card.Img
          src={`${process.env.REACT_APP_ADMIN_BASE_URL}${item.attributes.image.data.attributes.formats.thumbnail.url}`}
        />
        <Card.Body className='p-3'>
          <Card.Title className='mb-3'>{item.attributes.title}</Card.Title>
          <span>
            {item.attributes.tags.data.map((tag) => (
              <Link
                to={`/tag/${tag.attributes.slug}`}
                key={tag.attributes.slug}
              >
                <Badge className='bg-primary-color'>
                  #{tag.attributes.name}
                </Badge>
              </Link>
            ))}
          </span>
          <Card.Subtitle className='mb-3 mt-3'>
            {item.attributes.description.substring(0, 120)}....
            <Card.Link as={Link} to={`/portfolio/${item.attributes.slug}`}>
              Read more
            </Card.Link>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PostGrid
