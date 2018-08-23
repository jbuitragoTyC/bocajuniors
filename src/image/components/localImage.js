import React, { Component } from 'react'

import {
  Image,
  Dimensions
} from 'react-native'


const LocalImage = ({source, originalWidth, originalHeight}) => {
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16);
  const imageWidth = dimensions.width;
  return (
    <Image source={source} style={{ height: imageHeight, width: imageWidth }}/>
  )
}

export default LocalImage
