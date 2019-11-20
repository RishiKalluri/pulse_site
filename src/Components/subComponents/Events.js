import React, { Component } from 'react'


var lorem_ipsum = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."
var big_para =
  <p>
      {lorem_ipsum}
      {lorem_ipsum}
      {lorem_ipsum}
      {lorem_ipsum}
      {lorem_ipsum}
      {lorem_ipsum}
  </p>

class Events extends Component {
  render() {
    return(
      <div>
        <h3>Monday</h3>
        {big_para}
        {big_para}
        <h3>Tuesday</h3>
        {big_para}
        {big_para}
        <h3>Wednesday</h3>
        {big_para}
        {big_para}
        <h3>Thursday</h3>
        {big_para}
        {big_para}
        <h3>Friday</h3>
        {big_para}
        {big_para}
        <h3>Saturday</h3>
        {big_para}
        {big_para}
      </div>
    )
  }

}
export default Events