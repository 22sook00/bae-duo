import React, { useState } from 'react'
import * as Styled from '@/src/components/units/stepper/Stepper.styles'
import StoreIcon from '@mui/icons-material/Storefront'
import SettingsIcon from '@mui/icons-material/Settings'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { color } from '@/src/commons/styles/color'

interface StepBarProps {
  step: number
  onChangeCurStep: any
}

const StepBar = ({ step, onChangeCurStep }: StepBarProps) => {
  // const [curStep, setCurStep] = useState(1)

  return (
    <Styled.StepBar>
      <Styled.StepItem isActive={step === 1 ? true : false} cursor="pointer" onClick={() => onChangeCurStep(1)}>
        {step <= 1 ? <StoreIcon /> : <Styled.CheckIcon />}
        <span>1. 브랜드 설정</span>
      </Styled.StepItem>
      <Styled.RightArrowIcon />
      <Styled.StepItem isActive={step === 2 ? true : false}>
        {step <= 2 ? <SettingsIcon /> : <Styled.CheckIcon />}

        <span>2. 추가 설정</span>
      </Styled.StepItem>
      <Styled.RightArrowIcon />
      <Styled.StepItem isActive={step === 3 ? true : false}>
        {step <= 3 ? <PlaylistAddCheckIcon /> : <Styled.CheckIcon />}
        <span>3. 설정 확인</span>
      </Styled.StepItem>
      <Styled.RightArrowIcon />
      <Styled.StepItem isActive={step === 4 ? true : false}>
        {step <= 4 ? <RestaurantIcon sx={{ width: '16px !important' }} /> : <Styled.CheckIcon />}

        <span>4. 생성 완료</span>
      </Styled.StepItem>
    </Styled.StepBar>
  )
}

export default StepBar
