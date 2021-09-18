import React from 'react'
import { Link } from 'react-router-dom'
import banner13 from '../../assets/banners/11 - 13 yrs E- Books.png'
import banner18 from '../../assets/banners/14 - 18 yrs E- Books.png'
import NotFound from '../NotFound'


function Books({ age }) {
    if (age === 13)
        return <Under13 />
    if (age === 18)
        return <Under18 />
    return <NotFound />
}

function Under13() {
    return (
        <>
            <img className="mb-3" src={banner13} alt="main banner funedu" style={{
                width: "99.2vw",
                height: "84vh",
                objectFit: "cover",
                borderBottom: "1px solid red",
                borderBottomLeftRadius: "4%",
                borderBottomRightRadius: "4%",
                boxShadow: "0 6px 12px 2px rgba(255,0,0,0.12)"
            }} />

            <div className="card container-md text-center d-flex align-items-center" style={{
                margin: "0 auto",
                border: "1px solid whitesmoke",
                backgroundColor: "white",
                boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
            }}>
                <div className="card-body">
                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Autobiography</h5>
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action">All Men Are Brothers</Link>
                        <Link to="#" className="list-group-item list-group-item-action">An Indian Pilgrim by S.C. Bose</Link>
                        <Link to="#" className="list-group-item list-group-item-action">MK Gandhi</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Indian Women Biographies</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Ignited Minds by Dr. Kalam</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Wings of Fire by Dr. Kalam</Link>
                    </div>
                    <br /><br />
                    {/* --------------------------------------------------------------------- */}

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Connective Books</h5>
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action">First Time Mom</Link>
                        <Link to="#" className="list-group-item list-group-item-action">My Dad</Link>
                        <Link to="#" className="list-group-item list-group-item-action">My Mom is different</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Rich Dad Poor Dad</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Sri Aurobindo- The Mother</Link>
                    </div>
                    <br /><br />
                    {/* --------------------------------------------------------------------- */}

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Personal Development</h5>
                    <div className="list-group">
                        <div className="container" style={{ marginBottom: "3rem" }}>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading1'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse1' aria-expanded="false" aria-controls='collapse1'>
                                            Leadership
                                        </button>
                                    </h2>
                                    <div id='collapse1' className="accordion-collapse collapse" aria-labelledby='heading1' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">Academy Leadership 7 crucial skills
                                                </Link>
                                                <Link to="#" className="list-group-item list-group-item-action">ILA Become a better leader</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Leading From Within</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Successful leadership</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Women Leadership</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading2'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse2' aria-expanded="false" aria-controls='collapse2'>
                                            Life Changing Books
                                        </button>
                                    </h2>
                                    <div id='collapse2' className="accordion-collapse collapse" aria-labelledby='heading2' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">Change your story change your life
                                                </Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The light that failed</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The Buddha and his teachings</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The Game of Life How to play it</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Time Management</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">War and peace</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading3'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse3' aria-expanded="false" aria-controls='collapse3'>
                                            Personality
                                        </button>
                                    </h2>
                                    <div id='collapse3' className="accordion-collapse collapse" aria-labelledby='heading3' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">92 Life Lessons</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Happiness is a habit</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">How to get more from life</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The science of self affirmations</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading4'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse4' aria-expanded="false" aria-controls='collapse4'>
                                            Spirituality
                                        </button>
                                    </h2>
                                    <div id='collapse4' className="accordion-collapse collapse" aria-labelledby='heading4' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">Discource on the Gita</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Gita according to Gandhi</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Message of the Gita</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">My religion</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Pathway to God</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Truth is God</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>
        </>
    )
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
            <div className="card container-md text-center d-flex align-items-center" style={{
                margin: "0 auto",
                border: "1px solid whitesmoke",
                backgroundColor: "white",
                boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
            }}>
                <div className="card-body">
                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Autobiography</h5>
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action">All Men Are Brothers</Link>
                        <Link to="#" className="list-group-item list-group-item-action">An Indian Pilgrim by S.C. Bose</Link>
                        <Link to="#" className="list-group-item list-group-item-action">MK Gandhi</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Indian Women Biographies</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Ignited Minds by Dr. Kalam</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Wings of Fire by Dr. Kalam</Link>
                    </div>
                    <br /><br />
                    {/* --------------------------------------------------------------------- */}

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Connective Books</h5>
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action">First Time Mom</Link>
                        <Link to="#" className="list-group-item list-group-item-action">My Dad</Link>
                        <Link to="#" className="list-group-item list-group-item-action">My Mom is different</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Rich Dad Poor Dad</Link>
                        <Link to="#" className="list-group-item list-group-item-action">Sri Aurobindo- The Mother</Link>
                    </div>
                    <br /><br />
                    {/* --------------------------------------------------------------------- */}

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Personal Development</h5>
                    <div className="list-group">
                        <div className="container" style={{ marginBottom: "3rem" }}>
                            <div className="accordion w-100" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading1'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse1' aria-expanded="false" aria-controls='collapse1'>
                                            Leadership
                                        </button>
                                    </h2>
                                    <div id='collapse1' className="accordion-collapse collapse" aria-labelledby='heading1' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">Academy Leadership 7 crucial skills
                                                </Link>
                                                <Link to="#" className="list-group-item list-group-item-action">ILA Become a better leader</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Leading From Within</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Successful leadership</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Women Leadership</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading2'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse2' aria-expanded="false" aria-controls='collapse2'>
                                            Life Changing Books
                                        </button>
                                    </h2>
                                    <div id='collapse2' className="accordion-collapse collapse" aria-labelledby='heading2' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">Change your story change your life
                                                </Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The light that failed</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The Buddha and his teachings</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The Game of Life How to play it</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Time Management</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">War and peace</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading3'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse3' aria-expanded="false" aria-controls='collapse3'>
                                            Personality
                                        </button>
                                    </h2>
                                    <div id='collapse3' className="accordion-collapse collapse" aria-labelledby='heading3' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">Go motivate yourself</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">92 Life Lessons</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">5 key ingredients of motivation</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Happiness is a habit</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">How to get more from life</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The science of self affirmations</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading4'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse4' aria-expanded="false" aria-controls='collapse4'>
                                            Spirituality
                                        </button>
                                    </h2>
                                    <div id='collapse4' className="accordion-collapse collapse" aria-labelledby='heading4' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">Discource on the Gita</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Gita according to Gandhi</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Message of the Gita</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">My religion</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Pathway to God</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">Truth is God</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='heading5'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#collapse5' aria-expanded="false" aria-controls='collapse5'>
                                            Others
                                        </button>
                                    </h2>
                                    <div id='collapse5' className="accordion-collapse collapse" aria-labelledby='heading5' data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group">
                                                <Link to="#" className="list-group-item list-group-item-action">Physics of the Future</Link>
                                                <Link to="#" className="list-group-item list-group-item-action">The Fututre of the Humanity</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                </div>

            </div>
        </>
    )
}

export default Books
