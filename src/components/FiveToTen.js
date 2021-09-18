import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import qna_banner from '../assets/banners/qna page.png'
import result_banner from '../assets/banners/response page.png'

// 5-10 years
import music5_10 from '../assets/logo/5-10 yr music.jpg'
import video5_10 from '../assets/logo/5-10 YRS VIDEO.jpg'

let score = 0
/* made this a global variable because:
 * everytime react updates state to display next question and options, the function (component) will rerender,
 * and I simply didn't want to make score a satteful property
 */
// similarly I didn't want these variables to be deleted & created again and again
const question = [
    'What you mostly like to do, Study or Play',
    'What kind of books you love to read',
    'What you mostly prefer, Music or Video',
    'How much time you spend with your Mom and Dad',
    'Do you know about spirituality and Meditation'
]
const option1 = [
    'More Study, Less Play',
    'Autobiographies',
    'Videos > Music',
    'As much as possible',
    'Yes, I know'
]
const option2 = [
    'More play, less study',
    'Comic and Story Books',
    'Music > Videos',
    'Everyday some hours',
    'No, I want to know and attain it']
const option3 = [
    'Both Equally',
    'Not interested in reading',
    'Neither music and videos',
    'Not that much',
    'I would prefer movies instead'
]
function FiveToTen() {
    const [index, setIndex] = useState(0);
    return (
        <>
            {/* QnA Banner */
                index < 5 ?
                    <img className="mb-3" src={qna_banner} alt="main banner funedu" style={{
                        width: "99.2vw",
                        height: "72vh",
                        objectFit: "cover",
                        borderBottom: "1px solid red",
                        borderBottomLeftRadius: "4%",
                        borderBottomRightRadius: "4%",
                        boxShadow: "0 6px 12px 2px rgba(255,0,0,0.12)"
                    }} /> :
                    <img className="mb-3" src={result_banner} alt="main banner funedu" style={{
                        width: "99.2vw",
                        height: "84vh",
                        objectFit: "cover",
                        borderBottom: "1px solid red",
                        borderBottomLeftRadius: "4%",
                        borderBottomRightRadius: "4%",
                        boxShadow: "0 6px 12px 2px rgba(255,0,0,0.12)"
                    }} />
            }

            {/* Question and answer template */}
            <div className="container-fluid my-3">
                {
                    index < 5 /* 6th question doesn't exist */ ?
                        <div className="card container-md" style={{
                            margin: "0 auto",
                            border: "1px solid whitesmoke",
                            backgroundColor: "white",
                            boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
                        }}>
                            <div className="card-body">
                                <h5 className="card-title mb-3">Q.{index + 1}) {question[index]}?</h5>
                                <input className="form-check-input mx-2" type="radio" name={`question${index}`} id="option1" />
                                <label className="form-check-label mx-2" htmlFor="option1">
                                    {option1[index]}
                                </label>
                                <br />
                                <input className="form-check-input mx-2" type="radio" name={`question${index}`} id="option2" />
                                <label className="form-check-label mx-2" htmlFor="option2">
                                    {option2[index]}
                                </label>
                                <br />
                                <input className="form-check-input mx-2" type="radio" name={`question${index}`} id="option3" />
                                <label className="form-check-label mx-2" htmlFor="option3">
                                    {option3[index]}
                                </label>
                                <br />
                            </div>
                            {
                                index === 4 ? <button className="btn btn-light"
                                    style={{
                                        width: "48%",
                                        margin: "0 auto",
                                        marginTop: "1em",
                                        border: "1px solid whitesmoke",
                                        boxShadow: "0 6px 12px rgba(154,160,185,.2)"
                                    }}
                                    onClick={() => {
                                        const radioInputs = document.getElementsByTagName("input");
                                        // semicolon is important, else Babel will misinterpret(like we do in promise .then and .)
                                        // and we will get an error
                                        (radioInputs[0].checked && (score = score + 3)) ||
                                            (radioInputs[1].checked && (score = score + 2)) ||
                                            (radioInputs[2].checked && (score = score + 1)) /* just found short circuiting better than
                                                ternary operators which would require to write an else condition at the end too, and I simply
                                                didn't want to do that... Also if you write 'score' as else part  or even 'null'
                                                (to leave else part blank) you will get an error "expected an assignment 
                                                or function call and instead saw an expression"
                                                so use 'score = score' (again gives a warning "variable assign to itself") as else part */
                                        setIndex(index + 1)
                                    }}>Submit</button> :
                                    <button className="btn btn-light"
                                        style={{
                                            width: "48%",
                                            margin: "0 auto",
                                            marginTop: "1em",
                                            border: "1px solid whitesmoke",
                                            boxShadow: "0 6px 12px rgba(154,160,185,.2)"
                                        }}
                                        onClick={() => {
                                            const radioInputs = document.getElementsByTagName("input");
                                            (radioInputs[0].checked && (score = score + 3)) ||
                                                (radioInputs[1].checked && (score = score + 2)) ||
                                                (radioInputs[2].checked && (score = score + 1))
                                            setIndex(index + 1)
                                        }}>Next</button>
                            }
                        </div> : // by now we have our score
                        <ResultsComponent />
                }
            </div>
        </>
    )
}

function ResultsComponent() {
    return (
        <div className="card container-md" style={{
            margin: "0 auto",
            border: "1px solid whitesmoke",
            backgroundColor: "white",
            boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
        }}>
            <div className="card-body">
                <h5 className="card-title" style={{
                    width: "94px", textAlign: "center", borderBottom: "2px solid black"
                }}>Results</h5>
                <p className="card-text">
                    {
                        score > 10 ? 'You are in the safer side, no issues but to boost up and avoid negatives, inculcate the inner positive charge, here we come up with the healthy supplements, go and have them before anyone else grabs it down.' :
                            score > 5 ? 'You are in a state of cross-over where a minute wrong step may drop you on the other side, so before anything happens wrong just try to focus and be on it. Believe in yourself and try not to keep shut and overcome your fear. Let’s take a stand to get your smile worth memorable today.' :
                                'Somehow you are disturbed within. You need to have sometime peace hours, meditate, and believe in yourself. You can deal with it, the solutions are there down below, we promise you to get your smile and make today worth remembering.'
                    }
                </p>


                <br /><br />


                <div className="container-fluid d-flex flex-sm-column flex-md-column flex-lg-row flex-wrap align-items-center justify-content-center">


                    <div className="card m-2 mb-3" style={{maxWidth: "420px"}}>
                        <div className="d-flex flex-wrap flex-sm-column flex-md-row flex-lg-row">
                            <div className="col-md-4" style={{overflow: 'hidden'}}>
                                <img src={music5_10} className="img-fluid rounded-start" alt="logo" 
                                style={{
                                    transform: "scale(2.4)"
                                }}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Music</h5>
                                    <p className="card-text">Specially selected tunes for little ones.</p>
                                    <Link className="card-text text-danger d-block text-end" to="fiveToTen/music">
                                        <small>Listen !</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 mb-3" style={{maxWidth: "420px"}}>
                        <div className="d-flex flex-wrap flex-sm-column flex-md-row flex-lg-row">
                            <div className="col-md-4" style={{overflow: 'hidden'}}>
                                <img src={video5_10} className="img-fluid rounded-start" alt="logo" 
                                style={{
                                    transform: "scale(2.4)"
                                }}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Videos</h5>
                                    <p className="card-text">Thoughtfully picked videos for toddlers.</p>
                                    <Link className="card-text text-danger d-block text-end" to="fiveToTen/video">
                                        <small>Watch !</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default FiveToTen
