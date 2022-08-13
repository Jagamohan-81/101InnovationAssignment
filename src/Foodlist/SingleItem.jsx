import React,{useState,useEffect} from 'react'
import data from '../OFF_subset17.json'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import icn from '../icon.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useParams} from 'react-router-dom'

function SingleItem() {
    // const e = data[0]
    
    const [items, setItem] = useState(data)
    const [store, setStore] = useState({})
    const { code } = useParams()
    const DaTa = Object.keys(store);
    const Data=DaTa.filter((e)=>{return e!='url'})
    let singleProduct;
    useEffect(() => {
        filtering(items, code)
    }, [singleProduct])
    function filtering(items, code) {
        singleProduct = items.find(e => e.code == code)
        setStore(singleProduct)
    }


    return (
        <>
            <Grid p={2} style={{ height: '50px', backgroundColor: '#a1c399' }}>Foodlist</Grid>
            <Paper >
                <Grid mb={2} mt={1} container spacing={1} >
                    <Grid item >
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <img alt="complex" src={icn} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" >
                            <Grid item xs style={{ fontSize: '12px' }}>
                                <Typography style={{ fontSize: '12px' }} pt={2.5} gutterBottom variant="subtitle1" component="div">
                                    {store.generic_name}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {store.product_name}
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>



            </Paper>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{fontWeight:'bold'}}>Name</TableCell>
                            <TableCell align="right" style={{fontWeight:'bold'}}>Value</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            Data.map((elm) => {

                                return (
                                    <TableRow>
                                        <TableCell>{elm}</TableCell>
                                        <TableCell align="right">{store[elm]}</TableCell>

                                    </TableRow>

                                )
                            })
                        }

                    </TableBody>

                </Table>
            </TableContainer>
        </>
    )
}


/*
 <TableRow>
                            <TableCell>Container</TableCell>
                            <TableCell align="right">{e.packaging}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Serving Size</TableCell>
                            <TableCell align="right">{e.serving_size}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Energy</TableCell>
                            <TableCell align="right">{e.energy_100g}</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Fat</TableCell>
                            <TableCell align="right">{e.fat_100g}</TableCell>

                        </TableRow>
*/
export default SingleItem