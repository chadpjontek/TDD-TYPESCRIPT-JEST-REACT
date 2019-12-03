import React from 'react'
import ReactDOM from 'react-dom'
import { render, getByAltText } from '@testing-library/react'
import Card from '.'
import logo from '../../logo.svg';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Card Title='Title' Body='Body' />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders JSX in body', () => {
  const { getByText } = render(<Card Title='Title' Body={<div>some JSX code</div>} />)
  expect(getByText('some JSX code')).toBeInTheDocument()
})

it('renders image', () => {
  const { getByAltText } = render(<Card Title='Title' Image={logo} Alt='some img' Body='Body' />)
  expect(getByAltText('some img')).toBeInTheDocument()
})