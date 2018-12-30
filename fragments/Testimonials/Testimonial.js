import s from 'styled-components'

import { Text, Col, Row } from '../../components'
import { WHITE, BORDER } from '../../constants/colors'
import Stars from './Stars'

const Testimonial = s.div`
  background: ${WHITE};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid ${BORDER};
  box-shadow: 0 2px 4px ${BORDER};
`

const Profile = s.div`
  background-image: url(${({ image }) => image});
  width: 4.5rem;
  height: 4.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`

export default ({ name, stars, text, image }) => (
  <Testimonial key={`review-${name}`}>
    <Row>
      {image && (
        <Col width="6rem">
          <Profile image={image} />
        </Col>
      )}
      <Col>
        <Text marginTop="0.5rem" marginBottom="0.25rem"><strong>{name}</strong></Text>
        <Text marginTop="0"><Stars stars={stars} /> {stars}/5</Text>
      </Col>
    </Row>

    <Text>"{text}"</Text>
  </Testimonial>
)