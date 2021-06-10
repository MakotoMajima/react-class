import React, { VFC } from "react"
import { Row, Col, Navbar } from "react-bootstrap"

import { SearchQueryForm } from "src/Components/SearchQueryForm"
import { FullStudyDataContainer } from "src/Components/FullStudyContainer"
import { StudyFieldsContainer } from "src/Components/StudyFieldsContainer"

type ClinicalDataPageProps = {

}

export const ClinicalDataPage: VFC<ClinicalDataPageProps> = () => {
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
          <FullStudyDataContainer />
        </Col>
        <Col>
          <StudyFieldsContainer containerTitle="Study Fields" />
        </Col>
      </Row>
    </>
  )
}
