import s from 'styled-components'

import {
  Preheading,
  Container,
  Section,
  Title,
  Text,
  Btn,
  Row,
  Col,
} from '../../components'
import { SEAFOAM } from '../../constants/colors'

const HeroWrapper = s.div`
  background: ${SEAFOAM};
`

export default () => (
  <HeroWrapper>
    <Container>
      <Section>
        <Row>
          <Col>
            <Preheading>
              Skin First RX
            </Preheading>

            <Title>
              Own your skin, not the other way around
            </Title>
            <Text>
              Personalized, state-of-the-art skin treatment plans curated by skincare professionals
            </Text>
            <Btn>
              Get Started
            </Btn>
          </Col>
          <Col />
        </Row>
      </Section>
    </Container>
  </HeroWrapper>
)
