import React from 'react'

export default function VideoComponent() {
    return (
        <div>
            <video
                src=" https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_4_Drone_Website_1080_P_8b7a57a59a.mp4"
                autoPlay 
               controls
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
}