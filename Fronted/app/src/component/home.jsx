import React from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./main.module.css"
import { useNavigate } from "react-router-dom";
import {Input, Button } from "@chakra-ui/react";


export const Home = () => {
    const [jobsData, setJobsData] = useState([]);
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        getData();
        handleClick()
    }, [])
    const getData = () => {
        axios.get("https://jobsforbakckend.herokuapp.com/jobs").then(({ data }) => {
            setJobsData(data)
        })

    }
    const handleClick = () => {
        let q = input
        axios.get(`https://jobsforbakckend.herokuapp.com/jobs/search/${q}`).then(({ data }) => {
            setJobsData(data)
        })
    }
    const handlePass = (id) => {
        navigate(`/desc/${id}`)
    }

    return <div style={{marginTop:"30px"}}>
                <Input w="200px" style={{ marginRight: "10px" }} placeholder='Search' size='md' onChange={(e) => setInput(e.target.value)} />
                <Button onClick={handleClick}>Search</Button>
                <div className={styles.job_card}>
                    {jobsData.map((el) => {
                        return <div onClick={() => handlePass(el._id)}>
                            <img src={el.imgUrl} />
                            <p>{el.companyName}</p>
                            <h3>{el.role}</h3>
                            <p>{el.postDate}</p>
                            <p>{el.position}</p>
                            <div className={styles.full_stack}>
                                <p>{el.location}</p>
                                <p>{el.type}</p>
                            </div>
                            <p>{el.salary}</p>

                        </div>
                    })}


                
                </div>
    </div>
}