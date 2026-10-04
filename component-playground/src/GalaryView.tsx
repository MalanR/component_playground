import Box from '@mui/material/Box';
import  BasicChip  from "./components/chips"
import basicSwitch from "./components/switches"
import BasicLinear from "./components/linearProgress"
import { Stack } from '@mui/material';


export function GalaryView(){
    return (
        <Stack direction="row"  spacing={2}>
                <Box>
                    {BasicChip}
                </Box>
                <Box>
                    {basicSwitch}
                </Box>
                <Box>
                    <BasicLinear />
                </Box>
                <Box>
                    {BasicChip}
                </Box>
        </Stack>
    )
}

export default GalaryView;