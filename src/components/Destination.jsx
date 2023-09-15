import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/5.jpg';
import img4 from '../assets/8.jpg';
import DestinationData from './DestinationData';

import './DestinationStyles.css';

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity tp see a lot, within a time frame</p>

            <DestinationData
                className='first-des'
                heading='Taal Volcano, Batangas'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quis dolore consequuntur possimus, nesciunt cupiditate at odit molestias minus, modi obcaecati quas laudantium. Doloribus tempore, ipsam earum alias quae modi veritatis, nobis eum eveniet consequatur pariatur provident! Iusto ex ratione exercitationem et sed sequi molestias in odio numquam! Distinctio, est?'
                img1={img1}
                img2={img2}
            />

            <DestinationData
                className='first-des-reverse'
                heading='Mt. Daguldul, Batangas'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quis dolore consequuntur possimus, nesciunt cupiditate at odit molestias minus, modi obcaecati quas laudantium. Doloribus tempore, ipsam earum alias quae modi veritatis, nobis eum eveniet consequatur pariatur provident! Iusto ex ratione exercitationem et sed sequi molestias in odio numquam! Distinctio, est?'
                img1={img3}
                img2={img4}
            />
        </div>
    );
};

export default Destination