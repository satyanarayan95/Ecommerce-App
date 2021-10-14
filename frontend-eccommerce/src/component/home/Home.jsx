import React from 'react'
import {Box,makeStyles} from '@material-ui/core'

import Navbar from './Navbar'
import Banner from './Banner'

const useStyle = makeStyles({
    component: {
        padding:10,
        background: "#F2F2F2"
    }
})

function Home() {
    const styles = useStyle()
    return (
        <div>
            <Navbar />
            <Box className={styles.component} >
                <Banner />
            </Box>
        </div>
    )
}

export default Home
