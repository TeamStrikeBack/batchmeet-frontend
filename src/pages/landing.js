import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Image1 from '../img/img1.jpg'
import Image2 from '../img/img2.jpg'


function Item(props)
{
    return (
        <Paper style={{marginTop:"0px",height:"80vh", bacgroundColor:"black",backgroundImage: `url(${props.item.img})`}}>
            <h2>{props.item.name}</h2>        

            <Button className="CheckButton" >
                Check it out!
            </Button>
        </Paper>
    )
}
export default function landing(props) {
  
    var items = [
      {
          name: "Random Name #1",
         
          img:Image1
          
      },
      {
          name: "Random Name #2",
         
          img:Image2
          
      }
  ]

  return (
      <Carousel sx={{mt:0}}>
          {
              items.map( (item, i) => <Item key={i} item={item} /> )
          }
      </Carousel>
  )
  
}
