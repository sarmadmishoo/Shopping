import React ,{Component} from 'react';
import { Carousel } from 'antd';
import './Slide.css'
import 'antd/dist/antd.css'; 
class Slide extends Component {
    render(){
        return(
            <Carousel effect="fade" autoplay>
            <div>
              <h3> Slide 1</h3>
            </div>
            <div>
              <h3>Slide  2</h3>
            </div>
            <div>
              <h3>Slide  3</h3>
            </div>
            <div>
              <h3>Slide  4</h3>
            </div>
          </Carousel>

        )
    }
}
export default Slide;