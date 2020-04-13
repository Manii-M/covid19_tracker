import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'

const GridComponent = ({props:{data,name,lastUpdate}}) => {
   if(!data){
       return '....Loading';
   }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>{name}}</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={data.value}
                                duration={2.5}
                                separator=','>
                            </CountUp>
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2' >number of cases {name} of covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}
export default GridComponent;