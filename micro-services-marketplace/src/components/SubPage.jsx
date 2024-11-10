import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SubPage = () => {
    const { id } = useParams();

    return (
        <div className='sub-page' style={{ textAlign: 'center' }}>
            <Link to='/' className='back-button' style={{ fontSize: '1.5rem' }}>
                Back to Services
            </Link>

            {id === 'youtube' && (
                <>
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            margin: '2rem 0',
                        }}
                    >
                        YouTube Video Shoutout
                    </h1>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            maxWidth: '800px',
                            margin: '0 auto',
                            padding: '0 1rem',
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                }}
                            >
                                Provide your email address:
                            </p>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    fontSize: '1.2rem',
                                    borderRadius: '4px',
                                    border: '1px solid #fff',
                                    background: 'transparent',
                                    color: 'white',
                                }}
                            />
                        </div>
                    </div>
                </>
            )}

            <div className='booking-options'>
                <button className='book-button'>Book on Calendry</button>
                <button className='pay-button'>Pay with Stripe</button>
            </div>

            <p className='payment-info'>
                The Payment will be set on hold until the conversation is
                confirmed by the provider. No response will automatically Return
                your money.
            </p>
        </div>
    );
};

export default SubPage;
