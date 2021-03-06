# Box

### Properties

Property            | Type         | Description
:------------------ | :-----------:| :----------
background          | string       | Sets the background color of a component.
height              | number       | Sets the height of a component.
hidden              | bool         | Sets the visibility of a component.
horizontalAlignment | string       | Sets the horizontal alignment of the component's content<br/>__Property value__ _"left"_, _"center"_, _"right"_
label               | string       | Adds a label to the box.
margin              | string       | Sets the outer margin of a component.<br/>__E.G.__ _"30px 20px"_
padding             | string       | Sets the padding inside a component.<br/>__E.G.__ _"30px 20px"_
verticalAlignment   | string       | Sets the vertical alignment of the component's content.<br/>__Property value__ _"top"_, _"center"_, _"bottom"_
width               | number       | Sets the width of a component.

### Examples

```jsx
import React, { Component } from 'react';
import { Box, Text } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <Box label="Box" padding="10px 30px">
        <Text>Some text...</Text>
      </Box>
    );
  }
}
```
