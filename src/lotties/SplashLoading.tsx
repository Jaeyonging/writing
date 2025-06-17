import React from 'react'
import animationData from './splash.json'
import Lottie from 'lottie-react';

const SplashLoading = () => {
    return (
        <div className="fixed inset-0 bg-[#00000082] flex items-center justify-center z-50">
            <Lottie animationData={animationData} height={100} width={100} />
        </div>
    )
}

export default SplashLoading
