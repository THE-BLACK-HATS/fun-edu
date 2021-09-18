import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import main_banner from '../assets/banners/main page.png'
function Home() {
    /* stateful vars */
    const [name, setName] = useState("") // name input
    const [ageOption, setAgeOption] = useState("") // age input
    const [option, setOption] = useState("") // parent/child option input
    const [nameLabel, setNameLabel] = useState("Name:")
    const [agelabel, setAgeLabel] = useState("Age:")

    // to move to a new route
    const history = useHistory()

    /* Active elements' shadow style */
    const formStyle = {
        maxWidth: "100%",
        border: "1px solid whitesmoke",
        backgroundColor: "white",
        boxShadow: "0 6px 12px rgba(154,160,185,.1), 0 12px 24px rgba(166,173,201,.4)"
    }
    /* Disabled elements' shadow style */
    const disabledFormStyle = {
        maxWidth: "100%",
        border: "none",
        boxShadow: "0 6px 12px rgba(154,160,185,.2)"
    }

    /* Update fields if user is a Parent/Child */
    useEffect(() => {
        switch (option) {
            case "child":
                setNameLabel("Enter your name:")
                setAgeLabel("Enter you age:")
                break
            case "parent":
                setNameLabel("Enter your child's name:")
                setAgeLabel("Enter your child's age:")
                break
            default:
                setNameLabel("Name:")
                setAgeLabel("Age:")
        }
    }, [option])

    return (
        <>
            {/* Banner */}
            <img className="mb-3" src={main_banner} alt="main banner funedu" style={{
                width: "99.2vw",
                height: "75vh",
                objectFit: "cover",
                borderBottom: "1px solid red",
                borderBottomLeftRadius: "4%",
                borderBottomRightRadius: "4%",
                boxShadow: "0 6px 12px 2px rgba(255,0,0,0.12)"
            }} />


            {/* Main Card (form fields) */}
            <div className="container my-3">
                <div className="card" style={{
                    width: "84%",
                    margin: "0 auto",
                    border: "1px solid whitesmoke",
                    backgroundColor: "white",
                    boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
                }}>
                    <div className="card-body">


                        {/* Parent/Child field */}
                        <label htmlFor="parent_child"><h5 className="card-title">Are you a parent or child?</h5></label>
                        <br />
                        <select className="custom-select my-2 mb-3" name="parent_child" id="parent_child"
                            value={option} onChange={(elem) => {
                                setOption(elem.target.value)
                            }}
                            style={formStyle}>
                            <option value=""></option>
                            <option value="child">Child</option>
                            <option value="parent">Parent</option>
                        </select>
                        <br />

                        {/* Name input */}
                        <label htmlFor="name_field"><h5 className="card-title mt-3">{nameLabel}</h5></label>
                        <br />
                        {
                            option === "" ?
                                <input name="name-field my-2 mb-3" value={name}
                                    style={{ ...disabledFormStyle, width: "6rem" }} readOnly autoComplete="false" /> :
                                <input name="name-field my-2 mb-3" value={name} autoComplete="false" onChange={(elem) => {
                                    setName(elem.target.value)
                                }}
                                    style={{ ...formStyle, width: "21rem" }} />
                        }
                        <br />

                        {/* Age field */}
                        <label htmlFor="age_field"><h5 className="card-title mt-3">{agelabel}</h5></label>
                        <br />
                        {
                            option === "" ?
                                <select className="custom-select my-2 mb-3" name="age_field"
                                    style={{ ...disabledFormStyle, width: "2rem", backgroundColor: "white" }} disabled></select> :
                                <select className="custom-select my-2 mb-3" name="age_field" id="parent_child"
                                    value={ageOption} onChange={(elem) => {
                                        setAgeOption(elem.target.value)
                                    }}
                                    style={formStyle}>
                                    <option value=""></option>
                                    <option value="10">5-10</option>
                                    <option value="13">11-13</option>
                                    <option value="18">14-18</option>
                                </select>
                        }
                        <br />
                    </div>
                    {
                        (option === "" || name === "" || ageOption === "") ?
                            <button type="button" className="btn btn-light"
                                style={{
                                    width: "48%",
                                    margin: "0 auto",
                                    border: "1px solid whitesmoke",
                                    boxShadow: "0 6px 12px rgba(154,160,185,.2)",
                                    cursor: "not-allowed !important" // no use
                                }} disabled>Let's Go!</button> :
                            <button type="button" className="btn btn-light"
                                style={{
                                    width: "48%",
                                    margin: "0 auto",
                                    border: "1px solid whitesmoke",
                                    boxShadow: "0 6px 12px rgba(154,160,185,.2)"
                                }}
                                onClick={() => {
                                    /* MOVE TO A NEW ROUTE */
                                    switch (ageOption) {
                                        case "10":
                                            history.push("/fun-edu/fiveToTen")
                                            break
                                        case "13":
                                            history.push("/fun-edu/elevenToThirteen")
                                            break
                                        case "18":
                                            history.push("/fun-edu/fourteenToEighteen")
                                            break
                                        default: // just remove warnings
                                            // do nothing we have already made sure this won't occur
                                    }
                                }}>Let's Go!</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Home
