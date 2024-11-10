import React from 'react';
import { Link } from 'react-router-dom';

const YouTubeShoutoutPage = () => {
    return (
        <div className='sub-page'>
            <Link to='/' className='back-button'>
                Back to service
            </Link>
            <h2>YouTube Shoutout</h2>

            <div className='input-container'>
                <div className='input-group'>
                    <p>Provide your email address:</p>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='email-input'
                    />
                </div>

                <div className='input-group'>
                    <p>Provide the link to your YouTube Shoutout:</p>
                    <textarea
                        placeholder='Enter shoutout details'
                        className='shoutout-input'
                    ></textarea>
                </div>
            </div>

            <button className='pay-button'>Pay $100 with Stripe</button>
            <p className='payment-info'>
                Payment will be held until the shoutout is confirmed.
            </p>
        </div>
    );
};

export default YouTubeShoutoutPage;
