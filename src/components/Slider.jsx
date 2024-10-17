import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

import viceCity from '../images/gta_vice_city.jpg'

export default function Slider() {
  return (
    <Carousel>
        <Carousel.Item style={{'height': '92vh'}}>
            <img
                className="d-block w-100 h-100" 
                src={viceCity}
                alt=" Photo of GTA Vice city"
            />
            <Carousel.Caption>
                <h3>GTA Vice City</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi eveniet doloremque iste possimus omnis aliquam, adipisci obcaecati facere quaerat assumenda accusantium deleniti voluptates? Debitis aspernatur nostrum hic magnam provident enim.
                    Quo enim earum dolorum beatae est exercitationem perferendis maxime nesciunt tenetur rerum minus ex nemo commodi suscipit placeat tempora, quidem accusamus fuga quod excepturi quaerat nostrum incidunt expedita! Temporibus, vero!
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '92vh'}}>
            <img
                className="d-block w-100 h-100" 
                src={viceCity}
                alt=" Photo of GTA Vice city"
            />
            <Carousel.Caption>
                <h3>GTA Vice City</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi eveniet doloremque iste possimus omnis aliquam, adipisci obcaecati facere quaerat assumenda accusantium deleniti voluptates? Debitis aspernatur nostrum hic magnam provident enim.
                    Quo enim earum dolorum beatae est exercitationem perferendis maxime nesciunt tenetur rerum minus ex nemo commodi suscipit placeat tempora, quidem accusamus fuga quod excepturi quaerat nostrum incidunt expedita! Temporibus, vero!
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '92vh'}}>
            <img
                className="d-block w-100 h-100" 
                src={viceCity}
                alt=" Photo of GTA Vice city"
            />
            <Carousel.Caption>
                <h3>GTA Vice City</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi eveniet doloremque iste possimus omnis aliquam, adipisci obcaecati facere quaerat assumenda accusantium deleniti voluptates? Debitis aspernatur nostrum hic magnam provident enim.
                    Quo enim earum dolorum beatae est exercitationem perferendis maxime nesciunt tenetur rerum minus ex nemo commodi suscipit placeat tempora, quidem accusamus fuga quod excepturi quaerat nostrum incidunt expedita! Temporibus, vero!
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
