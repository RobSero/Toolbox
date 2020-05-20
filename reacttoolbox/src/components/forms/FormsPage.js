import React from 'react'
import IconLabelButtons from './IconLabelButtons'
import CheckboxLabels from './CheckboxLabels'
import FloatingActionButtons from './FloatingActionButtons'
import RadioButtonsGroup from './RadioButtonsGroup'
import SimpleSelect from './SimpleSelect'
import CustomizerSlider from './CustomizedSlider'
import InputSlider from './InputSlider'
import SwitchLabels from './SwitchLabels'
import ValidationTextFields from './ValidationTextFields'
import BulmaForm from './BulmaForm'

class FormPage extends React.Component {
  state = {

  }


  render(){
    return (
      <>
      <IconLabelButtons />
      <CheckboxLabels />
      <FloatingActionButtons />
      <RadioButtonsGroup />
      <SimpleSelect />
      <CustomizerSlider />
      <InputSlider />
      <SwitchLabels />
      <ValidationTextFields />
      <BulmaForm />
      </>
    )
  }
}

export default FormPage