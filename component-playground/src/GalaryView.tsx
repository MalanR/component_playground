import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { Switch, Typography, LinearProgress, Divider, Table, TableHead, TableRow, TableCell } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
    height: '6rem',
    borderRadius: "1rem"

}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function GalaryView() {
    return (
        <Box sx={{ padding: "1.25rem"}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={3}>
                    <Item>
                        <Box sx={{alignItems: 'center',  padding: '0.5rem'}}>
                            <Chip variant="filled" color='primary' label="Chips"></Chip>
                        </Box>
                        <Divider />
                        <Box sx={{alignItems: 'center'}}>
                            <Typography variant="body2">This is a stock standard MUI Chip, filled, with color set to primary</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid size={3}>
                    <Item>
                         <Box sx={{alignItems: 'center', padding: '0.5rem'}}>
                            <Switch color='primary'></Switch>
                        </Box>
                        <Divider />
                        <Box sx={{alignItems: 'center'}}>
                            <Typography variant="body2">This is a stock standard MUI Switch, with color set to primary</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid size={3}>
                    <Item>
                          <Box sx={{alignItems: 'center', padding: '0.5rem'}}>
                            <LinearProgress variant="determinate" value={55} color='primary'></LinearProgress>
                        </Box>
                        <Divider />
                        <Box sx={{alignItems: 'center'}}>
                            <Typography variant="body2">This is a stock standard MUI Linear Progress, with color set to primary</Typography>
                        </Box>
                    </Item>
                </Grid>
                <Grid size={3}>
                    <Item>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Xcell Sheet</TableCell>
                                    <TableCell>Cell X</TableCell>
                                    <TableCell>Cell Y</TableCell>
                                    <TableCell>Cell Z</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </Item>
                </Grid>
                <Grid size={3}>
                    <Item> Fifth Gird Item 😶‍🌫️</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default GalaryView;