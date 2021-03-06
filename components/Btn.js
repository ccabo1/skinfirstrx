import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'
import Link from 'next/link'

import { BLUE, WHITE, DARK_BLUE } from '../constants/colors'

const styles = `
  background: ${BLUE};
  padding: 18px 24px;
  border-radius: 6px;
  color: ${WHITE} !important;
  display: inline-block;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  font-weight: bold;
  transition: all 0.2s ease;

  :hover,
  :focus,
  :active {
    background: ${DARK_BLUE};
    color: ${WHITE} !important;
  }
`

const BtnWrapper = s.a`${styles}`

const BtnInput = s.input`
  ${styles}

  ${({ disabled }) => disabled && (`
    opacity: 0.75;
    cursor: not-allowed;

    :hover,
    :focus,
    :active {
      background: ${BLUE};
      color: ${WHITE};
    }
  `)}
`

export const Btn = ({ // eslint-disable-line
  href = '',
  children,
  isInput = false,
  handleClick = () => {},
  disabled = false,
}) => {
  if (href) {
    return (
      <Link href={href}>
        <BtnWrapper>
          {children}
        </BtnWrapper>
      </Link>
    )
  }

  if (isInput) {
    return (
      <BtnInput
        disabled={disabled}
        type="submit"
        value={children}
      />
    )
  }

  return (
    <BtnWrapper onClick={handleClick}>
      {children}
    </BtnWrapper>
  )
}

Btn.defaultProps = {
  href: '',
  children: null,
  isInput: false,
  handleClick: null,
  disabled: false,
}

Btn.propTypes = {
  href: PropTypes.string,
  isInput: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  handleClick: PropTypes.func,
}
