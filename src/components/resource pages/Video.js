import React from 'react'
import NotFound from '../NotFound'

import banner10 from '../../assets/banners/5 - 10 yrs videos.png'
import banner13 from '../../assets/banners/11 - 13 yrs video.png'
import banner18 from '../../assets/banners/14 - 18 yrs video.png'

function Video({ age }) {
    if (age === 10)
        return <Under10 />
    if (age === 13)
        return <Under13 />
    if (age === 18)
        return <Under18 />
    return <NotFound />
}

function Under10() {
    return (
        <>
            <img className="mb-3" src={banner10} alt="main banner funedu" style={{
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
                    }}>TEDx Talks</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=9fLlkOMrMq4" className="list-group-item list-group-item-action">The power of reading</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ICmok9ElvXI" className="list-group-item list-group-item-action">Friends = Happiness</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=JLYOUGo0ml4" className="list-group-item list-group-item-action">Lemons to lemonade</a>
                    </div>
                    <br /><br />
                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Poems</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=lI2wHDsnk0Q" className="list-group-item list-group-item-action">Top 10 nursery rhymes</a>
                        <a target="_blank" rel="noreferrer" href="https://youtu.be/Qz9SjKjxvcY" className="list-group-item list-group-item-action">Kid Songs</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=-kzefBmHSU8" className="list-group-item list-group-item-action">Ba ba black sheep and more</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=yCjJyiqpAuU" className="list-group-item list-group-item-action">Twinkle Twinkle Little Star</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=RLMJmJ_IdnQ" className="list-group-item list-group-item-action">Jhonny Jhonny Yes Papa</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=tWe93wO0VmE" className="list-group-item list-group-item-action">Clap Your Hands</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=tWe93wO0VmE" className="list-group-item list-group-item-action">Rain Rain Go Away</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=s7pcWnlwcjA" className="list-group-item list-group-item-action">Going to the forest</a>
                    </div>
                    <br /><br />
                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>A-Z alphabets</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=vwAhdsodcmg" className="list-group-item list-group-item-action">Vocabulary words with pictures</a>
                    </div>
                    <br /><br />
                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Maths !</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=x6D51-pz2A4" className="list-group-item list-group-item-action">Counting + Fruit names</a>
                        <a target="_blank" rel="noreferrer" href="https://youtu.be/Ml-L0RdGOb0" className="list-group-item list-group-item-action">1-20 multiplication tables</a>
                    </div>
                </div>
            </div>
        </>
    )
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
                    }}>TEDx Talks</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Na9g6raGwio" className="list-group-item list-group-item-action">Be whoever you want at any age</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=wRpRtlHNmGI" className="list-group-item list-group-item-action">Experiences of 12 yr old author</a>
                    </div>
                    <br /><br />
                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Bullying/Cyberbullying</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.parents.com/kids/health/5-real-world-issues-that-worry-young-kids/#jumpstart_player_1"
                            className="list-group-item list-group-item-action">School issues</a>
                    </div>
                    <br /><br />
                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Eriksonian Stages</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.scholastic.com/parents/family-life/social-emotional-learning/development-milestones/social-development-11-13-year-olds.html" className="list-group-item list-group-item-action">Social development in pre teens</a>
                    </div>
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
                    }}>TEDx Talks</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=sB34sRehUvU" className="list-group-item list-group-item-action"> Behind yourself </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Z2jEmN3blnE" className="list-group-item list-group-item-action"> Things I wish I knew before I was 18 </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=FhG-VoRtkKY " className="list-group-item list-group-item-action"> Teen stress from teen perspective </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=imCBztvKgus " className="list-group-item list-group-item-action"> Why you think you are ugly </a>
                    </div>
                    <br /><br />
                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Sexting</h5>
                    <div className="list-group">
                        <a target="_blank" rel="noreferrer" href="https://www.moms.com/topics-sensitive-teens-conversation/"
                            className="list-group-item list-group-item-action">Sensitive Topics for your teen</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video
