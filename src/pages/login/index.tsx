import React  from 'react'
import { useRouter } from 'next/router'

import S from './styles'
import Input from '@/components/Input'

const login = () => {

  const router = useRouter()

  return (
    <S.Wrapper>
      <S.Main>
        <S.Header>
          <h1>Timer</h1>
          <p>Seja o senhor do seu próprio tempo</p>
        </S.Header>
        <S.Form>
          <Input/>
        </S.Form>
      </S.Main>
    </S.Wrapper>
  )
}

export default login