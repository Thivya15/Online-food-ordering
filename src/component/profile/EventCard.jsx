import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:300}}>
            <CardMedia 
            sx={{height:345}}
            image='https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <CardContent>
                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500'>May 26, 2025 12.00 AM</p>
                    <p className='text-sm text-red-500'>May 27, 2025 12.00 AM</p>
                </div>
            </CardContent>
            {false && <CardActions>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
