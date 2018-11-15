import s from 'styled-components'

import {
  Preheading,
  Container,
  Section,
  Title,
  Text,
  Btn,
} from '../../components'
import { SEAFOAM } from '../../constants/colors'

const HeroWrapper = s.div`
  background: ${SEAFOAM};
`

export default () => (
  <HeroWrapper>
    <Container>
      <Section>
        <Preheading>
          Skin First RX
        </Preheading>

        <Title>
          Own your skin, not the other way around
        </Title>
        <Text>
          Personalized, state-of-the-art skin treatment plans curated by professionals
        </Text>
        <Btn>
          Get started
        </Btn>
      </Section>
    </Container>
  </HeroWrapper>
)