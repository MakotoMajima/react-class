import React, { useState } from "react"
import { Row, Col, Navbar } from "react-bootstrap"

import { SearchQueryForm } from "src/Components/SearchQueryForm"
import { FullStudyDataContainer } from "src/Components/FullStudyContainer"
import { StudyFieldsContainer } from "src/Components/StudyFieldsContainer"

const useClinicalDataPage = () => {
  const [selectedId, setSelectedId] = useState(null)

  const selectStudy = (studyId) => setSelectedId(studyId)
  return {
    selectedId, selectStudy
  }
}

export const ClinicalDataPage = (props) => {
  const { selectedId, selectStudy } = useClinicalDataPage()
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          Awesome APP
        </Navbar.Brand>
      </Navbar>
      <SearchQueryForm />
      <Row>
        <Col>
          <FullStudyDataContainer
            selectedId={selectedId}
          />
        </Col>
        <Col>
          <StudyFieldsContainer
            selectedId={selectedId}
            onSelect={selectStudy}
          />
        </Col>
      </Row>
    </>
  )
}
