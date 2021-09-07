import React from 'react'
import GoogleMapTiles from './components/GoogleMapTiles'

interface Props {
    
}

export const MapDisplay = (props: Props) => {
    return (
        <div>
            <GoogleMapTiles/>
        </div>
    )
}
