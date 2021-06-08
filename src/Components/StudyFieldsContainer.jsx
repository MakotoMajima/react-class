import { useState, useEffect } from 'react'
import axios from "axios"

import { Badge, Card } from "react-bootstrap"
import { useClinicalDataContext } from "src/Contexts/ClinicalDataContext"

const useStudyFieldsContainer = (query) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (!query) return

    const params = { expr: query, min_rnk: 1, fields: "NCTId,BriefTitle,BriefSummary,Keyword", fmt: "json" }
    axios.get(`https://clinicaltrials.gov/api/query/study_fields`, { params })
      .then(({ data }) => setData(data.StudyFieldsResponse.StudyFields))
  }, [query])


  return {
    data
  }
}

export function StudyFieldsContainer() {
  const { state, dispatch } = useClinicalDataContext()
  const { query, selectedId } = state
  const { data } = useStudyFieldsContainer(query)

  const handleSelect = (clickId) => {
    console.log("handleselect")
    dispatch({ type: "SET_SELECTED_ID", selectedId: clickId })
  }

  return (
    <>
      <h2>Study Fields</h2>
      {data.map(studyData => {
        const title = studyData.BriefTitle
        return <div key={title}>
          <Card style={{ margin: "8px" }} border="primary">
            <Card.Title
              style={{
                margin: "0",
                padding: "0 8px",
                cursor: "pointer",
                backgroundColor: studyData.NCTId[0] === selectedId ? "#20c997" : null
              }}
              onClick={() => handleSelect(studyData.NCTId[0]) }
            >
              {title}
            </Card.Title>
            <Card.Body>
              <Card.Text>
                {studyData.BriefSummary}
              </Card.Text>
              <p>
                {studyData.Keyword.map(
                  keyword => <Badge key={keyword} pill variant="success" style={{ marginRight: "8px" }}>{keyword}</Badge>
                )}
              </p>
            </Card.Body>

          </Card>

          <br />
        </div>
      })}
    </>
  )
}
