import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Category from './pages/Category'
import Tag from './pages/Tag'
import SinglePage from './pages/SinglePage'
import { ApolloProvider } from '@apollo/client'
import client from './utils/apolloClient'
import Sideheader from './components/Sideheader'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <body
            style={{
              background:
                'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
              minHeight: '100vh',
              width: '100%',
            }}
          >
            <Sideheader />
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/category/:slug' element={<Category />} />
              <Route path='/tag/:slug' element={<Tag />} />
              <Route path='/portfolio/:slug' element={<SinglePage />} />
            </Routes>
          </body>
        </ApolloProvider>
      </BrowserRouter>
    </>
  )
}

export default App
