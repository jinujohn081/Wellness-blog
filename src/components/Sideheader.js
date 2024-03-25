import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'
import { LinkContainer } from 'react-router-bootstrap'
import { GiHamburgerMenu } from 'react-icons/gi'

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`

const Sideheader = () => {
  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) return <p>Loading.... </p>
  if (error) return <p>Error....</p>
  return (
    <Navbar className='py:3 ' sticky='top' collapseOnSelect='lg'>
      <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
      <Navbar.Collapse
        className='justify-content-end'
        id='responsive-navbar-nav'
      >
        <GiHamburgerMenu class='menu-mobile' />

        <Nav>
          {data.categories.data.map((item) => (
            <LinkContainer
              key={item.id}
              to={`/category/${item.attributes.slug}`}
            >
              <Nav.Link>{item.attributes.name}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Sideheader
