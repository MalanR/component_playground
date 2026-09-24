import Chip from '@mui/material/Chip';
import { Box, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const TopItem = styled(Paper)(({ theme }) => ({
     backgroundColor: '#f0f0f08f',
    ...theme.typography.body2,
    padding: "1rem",
    alignItems: 'center',
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0"
}));

const BottomItem = styled(Paper)(({ theme}) => ({
    backroundColor: "#ffffff",
    ...theme.typography.body2,
    py: "1rem",
    alignItems: 'center',
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem"
})); 


function BasicChip(){
    return(
        <Box sx={{maxWidth: "10rem"}}>
            <Stack direction={'column'}>
                <TopItem>
                    <Chip variant='outlined' color='primary' size='small' label="chipy"></Chip>
                </TopItem>
                <BottomItem>
                    <Typography variant='subtitle1'>
                        The Chip
                    </Typography>
                    <Typography variant='caption'>A usefull little tag to indicate anything</Typography>
                </BottomItem>
            </Stack>
        </Box>
    )
};

export default BasicChip()