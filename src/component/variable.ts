import React, { Component } from 'react'
import axios from 'axios';



export default class variable extends Component {
 private static serverUrl:string="https://stormy-brook-52450.herokuapp.com/Managefood";
public static getAllUsers(){
  let dataUrl:string='${this.serverUrl}/image';
  return axios.get(dataUrl);}

}
//export const print=


export interface image{
  price:number;
  foodcode:number;
  foodname:string;
  image:string;
 // rang:any[]
}

export interface pictures{
  id:number;
      Foodcode:number;
      FoodName:string;
  title:string;
  price:string;
  image:string;

}
  export const minbutt=[{
    id:1,
    image:require("../image/images13.jpg"),
    title:"heels",
         rating:4.8},
    {
    id:2,
    image:require("../image/images1.jpg"),
    title:"sneaker",
        rating:4.8},
  {
    id:3,
    image:require("../image/images10.jpg"),
    title:"Sandle",
        rating:4.8
  },{
    id:4,
    image:require("../image/images13.jpg"),
    title:"heels",
          rating:4.8},
    {
    id:5,
    image:require("../image/images1.jpg"),
    title:"sneaker",
        rating:4.8},
  {
    id:6,
    image:require("../image/images10.jpg"),
    title:"Sandle",
        rating:4.8
  }]


  export const heels=[{
    id:1,image:require("../image/images13.jpg")
  },{
    id:2,image:require("../image/images1.jpg")
  },{
    id:3,image:require("../image/images10.jpg")
  }]


  export const firstslide=[{
    id:1,image:require("../image/downloadb.png")
  },{
    id:2,image:require("../image/downloadnm.jpeg")
  },{
    id:3,image:require("../image/downloadnm.jpeg")
  }]
export const sneakers=[{
  id:1,image:require("../image/images13.jpg")
},{
  id:2,image:require("../image/images13.jpg")
},{
  id:3,image:require("../image/images13.jpg")
}]

export const sandles=[{
  id:1,image:require("../image/images12.jpg")
},{
  id:2,image:require("../image/images12.jpg")
},{
  id:3,image:require("../image/images12.jpg")
}]
