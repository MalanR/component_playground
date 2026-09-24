import Box from '@mui/material/Box';
import  BasicChip  from "./components/chips"
import MyForm from './components/tanstackForm'


type GalaryViewProps = {
    selectedTab: string
}

export function GalaryView({ selectedTab }: GalaryViewProps) {
    return (
        <Box sx={{ padding: "1.25rem"}}>
            {selectedTab === 'Form' ? <MyForm /> : 
            <Box>
                {BasicChip}
            </Box>}
        </Box>
    )
}

export default GalaryView;