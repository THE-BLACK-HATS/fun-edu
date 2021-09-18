import React from 'react'
import NotFound from '../NotFound'

import banner18 from '../../assets/banners/14 - 18 yrs career track.png'

function Career({ age }) {
    if (age === 18)
        return <Under18 />
    return <NotFound />
}

function Under18() {

}

export default Career
