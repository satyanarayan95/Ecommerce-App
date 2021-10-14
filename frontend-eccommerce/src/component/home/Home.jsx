import React from 'react'
import {Box,makeStyles} from '@material-ui/core'

import Navbar from './Navbar'
import Banner from './Banner'
import MidSection from './MidSection';
import Slide from './Slide';
import { dealData } from "../../constant/data";

const useStyle = makeStyles({
    component: {
        padding:10,
        background: "#F2F2F2"
    }
})

function Home() {
    const styles = useStyle()
    return (
        <>
            <Navbar />
            <Box className={styles.component} >
                <Banner />
                <Slide
                    data={dealData} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <MidSection />
                <Slide
                    data={dealData} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={dealData} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={dealData} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Home
