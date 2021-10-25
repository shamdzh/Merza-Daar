import React, { Component } from 'react'

export default class Wrapper extends Component {
   render() {
      return (
         <div className='wrapper'>
            <div className="wrapper__inner">
               <div className="wrapper__left"></div>
               <div className="wrapper__right"></div>
            </div>
         </div>
      )
   }
}
