import React, { VFC } from 'react'
import { Button, Col, Form } from "react-bootstrap"

import { useClinicalDataContext } from "src/Contexts/ClinicalDataContext"

const useSearchQueryForm = () => {
  const { dispatch } = useClinicalDataContext()
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const form = event.target as any as HTMLInputElement[]
    const input = form[0]

    dispatch({ type: "SET_QUERY", query: input.value })
  }

  return { handleSubmit }
}

type SearchQueryFormProps = {

}

export const SearchQueryForm: VFC<SearchQueryFormProps> = () => {
  const { handleSubmit } = useSearchQueryForm()

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
