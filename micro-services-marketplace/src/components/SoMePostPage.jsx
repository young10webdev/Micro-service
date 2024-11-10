import React from 'react';
import { Link } from 'react-router-dom';

const SoMePostPage = () => {
    return (
        <div className='sub-page'>
            <Link to='/' className='back-button'>
                Back to Services
            </Link>
            <h2>Engagement on Your SoMe Post</h2>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <div>
                    <p>Provide the link to your social media post:</p>
                    <input
                        type='text'
                        placeholder='Enter post URL'
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>

                <div>
                    <p>Enter your instructions:</p>
                    <textarea
                        placeholder='Enter engagement instructions '
                        style={{
                            width: '100%',
                            height: '100px',
                            padding: '0.5rem',
                            resize: 'vertical',
                        }}
                    />
                </div>

                <button className='pay-button'>Pay $3 with Stripe</button>

                <p className='payment-info'>
                    Payment will be processed immediately. We'll engage...
                </p>
            </div>
        </div>
    );
};

export default SoMePostPage;
