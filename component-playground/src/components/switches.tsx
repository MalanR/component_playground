import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Switch, Typography,Stack } from '@mui/material';

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

function BasicSwith(){
    return(
        <Box sx={{maxWidth: "10rem"}}>
            <Stack direction={'column'}>
                <TopItem>
                    <Switch color='primary' size='small'></Switch>
                </TopItem>
                <BottomItem>
                    <Typography variant='subtitle1'>
                        The Switch
                    </Typography>
                    <Typography variant='caption'>A usefull little tool to visualize booleans</Typography>
                </BottomItem>
            </Stack>
        </Box>
    )
};

export default BasicSwith()