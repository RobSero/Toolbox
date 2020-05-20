import React from 'react'
import LoadingSpinners1 from './LoadingSpinners1'
import LoadingAccepts from './LoadingAccepts'
import LoadingBar from './LoadingBar'
import SimpleBadge from './Badges'
import Chips from './Chips'
import SimpleTooltips from './SimpleTooltips'
import CustomSeperator from './Breadcrumbs1'
import ActiveLastBreadcrumb from './Breadcrumbs2'


class AdditionalsPage extends React.Component {
  state = {

  }


  render(){
    return (
      <>
      <LoadingSpinners1 />
      <LoadingAccepts />
      <LoadingBar />
      <SimpleBadge />
      <Chips />
      <SimpleTooltips />
      <CustomSeperator />
      <ActiveLastBreadcrumb />
      </>
    )
  }
}

export default AdditionalsPage