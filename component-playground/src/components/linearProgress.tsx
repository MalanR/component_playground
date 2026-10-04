import Box from '@mui/material/Box';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Stack, Typography, LinearProgress } from '@mui/material';

const TopItem = styled(Paper)(({ theme }) => ({
     backgroundColor: '#f0f0f08f',
    ...theme.typography.body2,
    padding:  "1.7rem 1rem",
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

type ProgressProps = {
value: number;
onChange: (value: number) => void;
};

function Progress({value, onChange}: ProgressProps){
    return(
        <div>
            <input 
                id='userProgress' 
                type="number" 
                min={0}
                max={100}
                value={value}
                onChange={(e) =>{
                    const newValue = Math.min(100, Math.max(0, Number(e.target.value)));
                    onChange(newValue)
                }}
            />
        </div>
    );
}

function BasicLinear() {
    const [progress, setProgress] = useState(0)
    return(
         <Box sx={{maxWidth: "10rem"}}>
            <Progress value={progress} onChange={setProgress} />
            <Stack direction={'column'}>
                <TopItem>
                    <LinearProgress color='primary' variant='buffer' value={progress}></LinearProgress>
                </TopItem>
                <BottomItem>
                    <Typography variant='subtitle1'>
                        The Progress Bar
                    </Typography>
                    <Typography variant='caption'>Obviously used to show progress</Typography>
                </BottomItem>
            </Stack>
        </Box>
    )    
}

export default BasicLinear