import React from 'react'
import axios from 'axios'

const uploadURL = 'https://api.cloudinary.com/v1_1/dy7eycl8m/image/upload' // get this info from cloudinary
const uploadPreset = 'uke1baj3' // get this info from cloudinary. Presets of what to do with image like cropping

class ImageUpload extends React.Component {
  state = {
    image: null
  }

handleUpload = async (e) => {
  console.log(e.target.files[0])
  const data = new FormData() //formdata use this class for sending images
  data.append('file', e.target.files[0]) //attach the file to it once uploaded
  data.append('upload_preset', uploadPreset) //attach preset field as a property
  const res = await axios.post(uploadURL, data) // send to cloudinary to save and they will respond with a url to view the image (post cropped/edited from the presets)
  // console.log(res.data)
  this.setState({
    image: res.data.url
  }, () => {
    this.props.onChange({ target: { name: 'image', value: 'INSERT STATE VALUE HERE' } }) // setState has a callback function which calls onChange and sends the values/name of the image. Best way to look at it is creating our own event object to be passed to the onChange prop in the parent (App.js) component
  })
  
}

render(){
  return (
    <>
      {
        this.state.image ? 
          <div>
            <img src={this.state.image} alt='image' />
          </div> :
          <> 
            <label className='label'>Upload Image</label>
            <input className='input' type='file' onChange={this.handleUpload} />
          </>
      }
        
    </>
  )
}
}

export default ImageUpload