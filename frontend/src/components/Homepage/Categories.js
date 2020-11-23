import React from 'react';
import './A-Style.css'
const Category = require('../../category.json')

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    console.log(Category[0].Name)
    return (
      <>
        <div className="d-flex flex-wrap justify-content-around catdiv"  >
          {
            Category.slice(0, 4).map((item, i) =>
              <div style={{ 'text-align': 'center' }} key={i} > <img src={item.Image} style={{ marginTop: "45px", 'cursor': 'pointer' }} alt="" className="imgstyle"
                onClick={() => { }}></img> <p>{item.Name} </p>
              </div>)}
        </div>

        <div className="d-flex flex-wrap justify-content-around catdiv" style={{
          "marginBottom": '50px', marginTop: "18px"
        }}  >
          {
            Category.slice(4, 8).map((item, i) =>
              <div style={{ 'text-align': 'center' }} key={i} > <img src={item.Image} style={{ 'cursor': 'pointer' }} alt="" className="imgstyle"
                onClick={() => { }}></img> <p>{item.Name} </p>
              </div>)}
        </div>

      </>
    )
  }
}

export default Categories
