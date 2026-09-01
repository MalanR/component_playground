import { Stack,Tab,Tabs,TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export function Header() {
    return(
        <Box sx={{ margin: 2, justifyContent: 'space-between', alignItems: 'flex-end', display: 'flex', borderBottom: "1px solid lightgray", paddingBottom: 2}}>
            <Stack direction="column" spacing={2} sx={{ display:"flex", alignItems: "baseline" }}>
                <Typography variant="h6" align="left" sx={{ fontWeight: '600' }}>Components</Typography>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <SearchIcon sx={{ mr: "1rem", color: "lightgray"}}/>
                            ),
                            placeholder: 'Search Components',
                        }
                    }}
                    sx={{'& .MuiOutlinedInput-root': { borderRadius: '2rem', borderColor: "lightgrey" }, width: 250}}
                />
            </Stack>
            <Tabs 
                sx={{ 
                    border: "1px solid lightgray", 
                    borderRadius: "1rem", 
                    '& .MuiTabs-indicator': {
                        display: 'none'
                    },
                    '& .MuiTab-root': {
                        fontSize: '0.8rem',
                        textTransform: 'none',
                        maxHeight: '1rem',
                        py: 0,
                    },
                    '& .Mui-selected' : {
                        backgroundColor: 'primary.main',
                        color: 'white'
                    }
                }}>
                <Tab label="All" />
                <Tab label="UI" />
                <Tab label="Data Display"/>
                <Tab label="Feedback" />
                <Tab label="Navigation" />
            </Tabs>
        </Box>
    )
}

export default Header;