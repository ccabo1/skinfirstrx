import Link from 'next/link'
import s from 'styled-components'

import {
  Row,
  Col,
  Title,
  Preheading,
  Text,
  Btn,
  Section,
  ColSpace,
} from '../../components'
import { LILAC } from '../../constants/colors'

const Placeholder = s.div`
  width: 100%;
  height: 60vh;
  background: ${LILAC};
`

export default () => (
  <Section>
    <Row>
      <Col>
        <Placeholder />
      </Col>

      <ColSpace />

      <Col>
        <Preheading>Free Consultation</Preheading>

        <Title>
          Leave your fears behind with a free consultation
        </Title>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu leo ut est imperdiet tristique. In vulputate vel enim a suscipit. Aenean eleifend egestas venenatis. Maecenas imperdiet dui quam, at condimentum ante vehicula suscipit.
        </Text>

        <Btn>
          Get Started
        </Btn>

        <Link href="/">
          <a>
            Learn More
          </a>
        </Link>
      </Col>
    </Row>
  </Section>
)