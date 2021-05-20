import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import  Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'


const Container = styled.main `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    
`

function Home() {
    useEffect(() => {
       db.collection("movies").onSnapshot((snapshot) => {
            let tempMoves = snapshot.docs.map((doc) => {
                
                return{ id: doc.id, ...doc.data }
            })
            console.log(tempMoves)
       })
    }, [])

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home
