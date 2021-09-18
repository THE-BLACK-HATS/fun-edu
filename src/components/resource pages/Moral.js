import React from 'react'

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
