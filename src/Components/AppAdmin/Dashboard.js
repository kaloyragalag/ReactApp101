import { Card, CardContent, Typography } from '@material-ui/core'
import { Title } from 'ra-ui-materialui'
import React from 'react'

const Dashboard = () => {
    return (        
    <Card>
        <Title title="React 101" />
        <CardContent>
            <Typography variant="h5">This is a collection of React Test Projects by Karl Galagar.</Typography>
        </CardContent>
    </Card>
    )
}

export default Dashboard
