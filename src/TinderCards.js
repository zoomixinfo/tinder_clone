import React from 'react'
import { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import { useEffect } from 'react'
import database from './firebase'

function TinderCards() {
    const [people, setPeople]=useState([])
    useEffect(()=>{
        database.collection("people").onSnapshot(snapshot =>(
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    },[people])
    return (
        <div className="tinderCards">
            <div className="tinderCard__cardContainer">
            {
                people.map((person) => (
                    <TinderCard className="swipe" key={person.name}>
                    <div style={{backgroundImage:`url(${person.url})`}}
                    className="card"
                    >
                    <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                ))
            }
            </div>
        </div>
    )
}

export default TinderCards
