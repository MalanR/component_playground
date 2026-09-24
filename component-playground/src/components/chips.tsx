import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';

function BasicChip(){
    return(
        <Box>
            <Chip variant='outlined' color='success' size='small' label="chipy"></Chip>
        </Box>
    )
};

export default BasicChip()