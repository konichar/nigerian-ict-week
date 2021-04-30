import { Box, Container } from '@material-ui/core'
import "../../node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react';
import logo from "./logo1.png"

const Front = () => {
    return(
        <Container>
        <Box>
            <Player
            fluid
             poster={logo}
             >
                 <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>   
        </Box>
        </Container>

    )
}

export default Front