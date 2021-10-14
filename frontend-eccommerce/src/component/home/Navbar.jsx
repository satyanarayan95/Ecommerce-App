import React from 'react'
import {navData} from "../../constant/data"
import {Box,Typography,makeStyles} from "@material-ui/core"

const useStyle = makeStyles({
    component:{
        display: 'flex',
        margin:'55px 130px',
        justifyContent:'space-between'
    },
    container:{
        textAlign:'center',
    },
    image: {
        width:'64'
    },
    text:{
        fontSize:14,
        fontWeight:600,
    }
})

export default function Navbar() {
    const styles =useStyle();
    return (
        <Box className={styles.component}>
            {
                navData.map(data=>(
                    <Box className={styles.container}>
                        <img src={data.url} alt="" className={styles.image} />
                        <Typography className={styles.text}>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}
