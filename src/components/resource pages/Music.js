import React from 'react'
import NotFound from '../NotFound'
import ReactAudioPlayer from 'react-audio-player'

import banner10 from '../../assets/banners/5 - 10 yrs - music.png'
import banner13 from '../../assets/banners/11 - 13 yrs music.png'
import banner18 from '../../assets/banners/14 - 18 yrs music.png'

import mindfullness1 from '../../assets/res/5 - 10/MUSIC/MEDITATION/Mindfulness Meditation for Kids _ BREATHING EXERCISE _ Guided Meditation for Children.mp3'
import mindfullness2 from '../../assets/res/5 - 10/MUSIC/MEDITATION/Rainbow Relaxation - Mindfulness for Children.mp3'
import peace from '../../assets/res/5 - 10/MUSIC/PEACE/Sing Peace Around the World with lyrics.mp3'
import fingerfamily from '../../assets/res/5 - 10/MUSIC/STUDY/Finger Family Song - Children Song with Lyrics - Nursery Rhymes _ Kids Academy.mp3'
import fiveocean from '../../assets/res/5 - 10/MUSIC/STUDY/Five Oceans Song.mp3'
import sevencontinents from '../../assets/res/5 - 10/MUSIC/STUDY/Seven Continents Song.mp3'
import planetsong from '../../assets/res/5 - 10/MUSIC/STUDY/The Planet Song for Kids.mp3'
import clapclap from '../../assets/res/5 - 10/MUSIC/STUDY/Two Little Hands To Clap Clap Clap Rhyme With Lyrics I English Kids Songs _ Learning Videos For Kids.mp3'

import fiveMinMed from '../../assets/res/MUSIC 11-18/MEDITATION/5 minute meditation music for positive energy,relax,meditation music for positive energy 5 minutes.mp3'
import fifteenMinMed from '../../assets/res/MUSIC 11-18/MEDITATION/15 Min. Meditation Music for Positive Energy - Buddhist Meditation Music l Relax Mind Body.mp3'
import short3MinMed from '../../assets/res/MUSIC 11-18/MEDITATION/Short Meditation Music - 3 Minute Relaxation, Calming.mp3'
import short5MinMed from '../../assets/res/MUSIC 11-18/MEDITATION/short meditation music for positive energy,5 minute healing music,5 minute reiki music,relax.mp3'

import aashayein from '../../assets/res/MUSIC 11-18/MOTIVATION/Aashayein.mp3'
import besabriyaan from '../../assets/res/MUSIC 11-18/MOTIVATION/Besabriyaan.mp3'
import karHarMaidanFateh from '../../assets/res/MUSIC 11-18/MOTIVATION/KAR HAR MAIDAAN FATEH.mp3'
import physicswallah from '../../assets/res/MUSIC 11-18/MOTIVATION/Physicswallah Motivation Quotes.mp3'
import shaabaashiyaan from '../../assets/res/MUSIC 11-18/MOTIVATION/Shaabaashiyaan.mp3'

import aewatan from '../../assets/res/MUSIC 11-18/PATRIOTISM/Ae Watan.mp3'
import jaiho from '../../assets/res/MUSIC 11-18/PATRIOTISM/Jai ho.mp3'
import rangdebasanti from '../../assets/res/MUSIC 11-18/PATRIOTISM/Rang De Basanti.mp3'
import terimitti from '../../assets/res/MUSIC 11-18/PATRIOTISM/Teri Mitti female.mp3'
import tharevaaste from '../../assets/res/MUSIC 11-18/PATRIOTISM/Thare Vaaste.mp3'


function Music({ age }) {
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
                    }}>Concentration and relaxation</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Mindfullness Meditation: </span>
                            <ReactAudioPlayer src={mindfullness1} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Rainbow Relaxation: </span>
                            <ReactAudioPlayer src={mindfullness2} controls controlsList={"nodownload"} />
                        </a>
                    </div>

                    <br /><br />

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Peace and Joy</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Peace Around the World: </span>
                            <ReactAudioPlayer src={peace} controls controlsList={"nodownload"} />
                        </a>
                    </div>

                    <br /><br />

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Study time !</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Finger Family: </span>
                            <ReactAudioPlayer src={fingerfamily} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Five Oceans: </span>
                            <ReactAudioPlayer src={fiveocean} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Seven Continents: </span>
                            <ReactAudioPlayer src={sevencontinents} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> The Planet Song: </span>
                            <ReactAudioPlayer src={planetsong} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Clap clap clap: </span>
                            <ReactAudioPlayer src={clapclap} controls controlsList={"nodownload"} />
                        </a>
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
                    }}>Meditation and Healing</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> 5 minutes Meditation: </span>
                            <ReactAudioPlayer src={fiveMinMed} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> 15 minutes Meditation: </span>
                            <ReactAudioPlayer src={fifteenMinMed} controls controlsList={"nodownload"} />
                        </a>
                    </div>

                    <br /><br />

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Motivation</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Aashayein: </span>
                            <ReactAudioPlayer src={aashayein} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Besabriyaan: </span>
                            <ReactAudioPlayer src={besabriyaan} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Kar Har Maidaan Fateh: </span>
                            <ReactAudioPlayer src={karHarMaidanFateh} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Shaabaashiyaan: </span>
                            <ReactAudioPlayer src={shaabaashiyaan} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> PhysicsWallah quotes: </span>
                            <ReactAudioPlayer src={physicswallah} controls controlsList={"nodownload"} />
                        </a>
                    </div>

                    <br /><br />

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Desh Bhakti</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Ae Watan: </span>
                            <ReactAudioPlayer src={aewatan} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Jai Ho: </span>
                            <ReactAudioPlayer src={jaiho} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Rang De Basanti: </span>
                            <ReactAudioPlayer src={rangdebasanti} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Teri Mitti (female): </span>
                            <ReactAudioPlayer src={terimitti} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Thare Vaaste: </span>
                            <ReactAudioPlayer src={tharevaaste} controls controlsList={"nodownload"} />
                        </a>
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
                    }}>Meditation and Healing</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> 3 minutes Ralxation: </span>
                            <ReactAudioPlayer src={short3MinMed} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> 5 minutes healing: </span>
                            <ReactAudioPlayer src={short5MinMed} controls controlsList={"nodownload"} />
                        </a>
                    </div>

                    <br /><br />

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Motivation</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Aashayein: </span>
                            <ReactAudioPlayer src={aashayein} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Besabriyaan: </span>
                            <ReactAudioPlayer src={besabriyaan} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Kar Har Maidaan Fateh: </span>
                            <ReactAudioPlayer src={karHarMaidanFateh} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Shaabaashiyaan: </span>
                            <ReactAudioPlayer src={shaabaashiyaan} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> PhysicsWallah quotes: </span>
                            <ReactAudioPlayer src={physicswallah} controls controlsList={"nodownload"} />
                        </a>
                    </div>

                    <br /><br />

                    <h5 className="card-title" style={{
                        margin: "0 auto", maxWidth: "96vw", width: "32rem", textAlign: "center", borderBottom: "2px solid black"
                    }}>Desh Bhakti</h5>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Ae Watan: </span>
                            <ReactAudioPlayer src={aewatan} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Jai Ho: </span>
                            <ReactAudioPlayer src={jaiho} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Rang De Basanti: </span>
                            <ReactAudioPlayer src={rangdebasanti} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Teri Mitti (female): </span>
                            <ReactAudioPlayer src={terimitti} controls controlsList={"nodownload"} />
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex flex-wrap align-items-center justify-content-between">
                            <span> Thare Vaaste: </span>
                            <ReactAudioPlayer src={tharevaaste} controls controlsList={"nodownload"} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Music
