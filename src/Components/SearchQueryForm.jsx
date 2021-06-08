import React from 'react'
import { Button, Col, Form } from "react-bootstrap"

import { useClinicalDataContext } from "src/Contexts/ClinicalDataContext"

const useSearchQueryForm = (props) => {
  const { dispatch } = useClinicalDataContext()
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const input = form[0]
    dispatch({ type: "SET_QUERY", query: input.value })
  }

  return { handleSubmit }
}

export function SearchQueryForm({ onSubmit }) {
  const { handleSubmit } = useSearchQueryForm({ onSubmit })

  return (
    <Form
      style={{ margin: "8px" }}
      onSubmit={handleSubmit}
    >
      <Form.Row>
        <Col>
          <Form.Control
            placeholder="Search..."
          />
        </Col>
        <Button type="submit"> Search</Button>

      </Form.Row>
    </Form>

  )
}
