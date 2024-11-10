import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    const services = [
        { id: 'some-post', name: 'Engagement on Your SoMe Post', price: 3 },
        { id: 'youtube-shoutout', name: 'YouTube Video Shoutout', price: 200 },
        { id: 'conversation-15min', name: 'Conversation 15min', price: 300 },
        { id: 'conversation-30min', name: 'Conversation 30min', price: 500 },
    ];

    return (
        <div className='main-page'>
            <h1 className='page-title'>MICRO SERVICES</h1>
            <div className='service-list'>
                {services.map(service => (
                    <div key={service.id} className='service-item'>
                        <span className='service-name'>{service.name} </span>
                        <div className='service-price-buy'>
                            <span className='service-price'>
                                ${service.price}{' '}
                            </span>
                            <Link
                                to={`/service/${service.id}`}
                                className='buy-button'
                            >
                                Buy
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
