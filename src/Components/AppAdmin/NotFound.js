import { Card, CardContent, Typography } from '@material-ui/core'
import { Title } from 'ra-ui-materialui'
import React from 'react'

const NotFound = () => {
    return ( 
    <Card>
        <Title title="Not Found" />
        <CardContent>
            <Typography variant="h5">404: Page not found</Typography>
        </CardContent>
    </Card>
    )
}

export default NotFound
