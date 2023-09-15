import './TripStyles.css';
import TripData from './TripData';

import Trip1 from '../assets/5.jpg';
import Trip2 from '../assets/6.jpg';
import Trip3 from '../assets/8.jpg';

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>YOu can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData
                    image={Trip1}
                    heading='Trip in Indonesia'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic iure dicta voluptate a! Velit, quo ipsam! Quis, ratione soluta!'
                />

                <TripData
                    image={Trip2}
                    heading='Trip in Afghanistan'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic iure dicta voluptate a! Velit, quo ipsam! Quis, ratione soluta!'
                />

                <TripData
                    image={Trip1}
                    heading='Trip in France'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic iure dicta voluptate a! Velit, quo ipsam! Quis, ratione soluta!'
                />
            </div>
            
        </div>
    )
}

export default Trip;