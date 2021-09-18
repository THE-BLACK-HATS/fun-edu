import React from 'react'
import NotFound from '../NotFound'

import banner18 from '../../assets/banners/14 - 18 yrs career track.png'
import careerPaths from '../../assets/res/what to do after 10th.png'

function Career({ age }) {
    if (age === 18)
        return <Under18 />
    return <NotFound />
}

function Under18() {
    return (
        <>
            <img className="mb-3" src={banner18} alt="main banner funedu" style={{
                width: "99.2vw",
                height: "84vh",
                objectFit: "cover",
                borderBottom: "1px solid red",
                borderBottomLeftRadius: "4%",
                borderBottomRightRadius: "4%",
                boxShadow: "0 6px 12px 2px rgba(255,0,0,0.12)"
            }} />
            <div className="container-fluid my-3 container-md text-center d-flex align-items-center">
                <img src={careerPaths} className="card container-md" alt="career paths"
                style={{
                    margin: "0 auto",
                    maxWidth: "1258px",
                    border: "1px solid whitesmoke",
                    backgroundColor: "white",
                    boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
                }}>
                </img>
            </div>
        </>
    )
}

export default Career
