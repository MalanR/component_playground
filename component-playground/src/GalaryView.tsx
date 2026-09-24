import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import  BasicChip  from "./components/chips"


export function GalaryView() {
    return (
        <Box sx={{ padding: "1.25rem"}}>
            <Box>
                <BasicChip />
            </Box>
        </Box>
    )
}

export default GalaryView;