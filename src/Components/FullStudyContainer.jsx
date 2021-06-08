import { useState, useEffect } from "react"
import axios from "axios"
import { Badge, Card } from "react-bootstrap"

import { useClinicalDataContext } from "src/Contexts/ClinicalDataContext"

const useFullStudyDataContainer = () => {
  const { state } = useClinicalDataContext()
  const { query, selectedId } = state

  const [clinicalData, setClinicalData] = useState([])

  useEffect(() => {
    if (!query) return
    const expr = selectedId ?? query
    const params = { expr, min_rnk: 1, fmt: "json" }
    axios.get(`https://clinicaltrials.gov/api/query/full_studies`, { params })
      .then(({ data }) => setClinicalData(data.FullStudiesResponse.FullStudies))

  }, [query, selectedId])

  return { clinicalData }
}


export const FullStudyDataContainer = ({ selectedId }) => {
  const { clinicalData } = useFullStudyDataContainer({ selectedId })
  if (!clinicalData) return null
  return (
    <>
      <h2>Full Studies</h2>
      {clinicalData.map(studyData => {
        const title = studyData.Study.ProtocolSection.IdentificationModule.BriefTitle
        const summary = studyData.Study.ProtocolSection.DescriptionModule.BriefSummary
        const description = studyData.Study.ProtocolSection.DescriptionModule.DetailedDescription
        const keywords = studyData.Study?.ProtocolSection?.ConditionsModule?.KeywordList?.Keyword

        return <div key={title}>
          <Card style={{ margin: "8px" }} border="primary">
            <Card.Title style={{ margin: "0", padding: "0 8px" }}>
              {title}
            </Card.Title>
            <Card.Body>
              <h6>
                {summary}
              </h6>
              <Card.Text>
                {description}
              </Card.Text>
              <p>
                {keywords.map(
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

