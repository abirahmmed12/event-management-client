import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [typedText, setTypedText] = useState('');
    const textToType = 'Perfect Weddings Made Easy!';
    const additionalText = 'Plan your dream wedding with us';

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const typeText = () => {
            if (currentIndex < textToType.length) {
                currentText += textToType[currentIndex];
                setTypedText(currentText);
                currentIndex++;
                setTimeout(typeText, 100);
            }
        };

        typeText();
    }, []);

    return (
        <div  data-aos="fade-up"
        data-aos-duration="3000" style={{ position: 'relative' }}>
            <img className='lg:h-[700px] bg-cover'
                src="https://i.ibb.co/hR3Nqg0/a78c9253-508d-493c-a7a8-6b2068e27f4b-sc-1016.webp"
                alt=""
                style={{ width: '100%' }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '20px',
                    borderRadius: '5px',
                    textAlign: 'center',
                    
                    
                }}
            >
                <h1 className='lg:text-6xl text-2xl' >{typedText}</h1>
                
            </div>
        </div>
    );
};

export default Banner;
