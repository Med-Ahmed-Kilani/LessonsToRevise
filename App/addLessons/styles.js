import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputs:{
    backgroundColor:"red",
    alignItems:'center',
    justifyContent:'center',
    marginTop:'10%',
    flex:1,
  },
  dateCard:{
    height:50,
    width:200,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  date:{
    height:30,
    width: 'auto',
    flexDirection:'row',
    backgroundColor:'white',
    alignItems: 'center',
    paddingHorizontal:4,
    justifyContent:'flex-end'
  },
  dateInput:{
    height:30,
    borderWidth:1,
    borderColor:'black',
    paddingVertical:3,
    marginHorizontal:3,
  }

});