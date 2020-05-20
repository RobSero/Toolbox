import React from 'react'
import Select from 'react-select'


class MultiSelect extends React.Component {

  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  handleMultiChange = (e) => {
    const values = e ? e.map(item => item.value) : []
    console.log(values)
  }

render(){
  return(
<div className="field">
  <label className="label">Your Breakfast Order</label>
  <div className="control">
    <Select 
      isMulti
      name="colors"
      options={this.options}
      className="basic-multi-select"
      onChange = {this.handleMultiChange} />
  </div>
</div>
  )
}
}

export default MultiSelect
