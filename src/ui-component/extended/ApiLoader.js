import { Box, CircularProgress, Fade, styled } from '@mui/material'
import React from 'react'

const Loaddiv = styled('div')({
    backgroundColor: '#0000009c',
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
})

function ApiLoader({ loading }) {
    return (
        <Box>
            <Fade
                in={loading}
                style={{
                    transitionDelay: loading ? '500ms' : '0ms',
                }}
                unmountOnExit
            >
                <Loaddiv>
                    <CircularProgress color='secondary' />
                </Loaddiv>
            </Fade>
        </Box>
    )
}

export default ApiLoader
