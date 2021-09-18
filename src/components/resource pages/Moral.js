import React from 'react'
import NotFound from '../NotFound'

// import banner13 from '../../assets/banners/11 - 13 yrs Moral Support.png'
// import banner18 from '../../assets/banners/14 - 18 yrs Moral Support.png'

function Moral({ age }) {
    if (age === 13)
        return <Under13 />
    if (age === 18)
        return <Under18 />
    return <NotFound />
}

function Under13() {

}
function Under18() {

}

export default Moral
