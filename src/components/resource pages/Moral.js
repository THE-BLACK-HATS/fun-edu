import React from 'react'

// import banner13 from '../../assets/banners/11 - 13 yrs Moral Support.png'
// import banner18 from '../../assets/banners/14 - 18 yrs Moral Support.png'

function Moral({ age }) {
    if (age === 10)
        return <Under10 />
    if (age === 13)
        return <Under13 />
    if (age === 18)
        return <Under18 />
    return null
}

function Under10() {

}
function Under13() {

}
function Under18() {

}

export default Moral
