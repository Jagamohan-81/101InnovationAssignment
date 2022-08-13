import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Foodlist/Foodlist.css'
import data from '../OFF_subset17.json'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import SearchIcon from '@mui/icons-material/Search';
import icn from '../icon.png'
import { Link } from 'react-router-dom'


function Foodlist() {
  const [fooddata, setfoodData] = useState(data)
  const [sortData, setSortData] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [sortValue,setSortValue]=useState('')
  const SortBy =(e)=>{
    if(e.target.value=='dsc'){
      const sorted=sortData.sort((a,b)=>{
        return b.fat_100g - a.fat_100g
      })
      setfoodData(sorted)
      console.log(sorted)
    }else{
      const sorted=sortData.sort((a,b)=>{
        return a.fat_100g - b.fat_100g
      })
      setfoodData(sorted)
      console.log(sorted)

    }
    setSortValue(e.target.value)

  }
  const FilterData =(e)=>{
    if(e.target.value=='box'){
      const filtered=filterData.filter((e)=> e.packaging.includes('box'))
      setfoodData(filtered)

    }else if(e.target.value=='carton'){
      const filtered=filterData.filter((e)=> e.packaging.includes('carton'))
      setfoodData(filtered)

    }else if(e.target.value=='plastic'){
      const filtered=filterData.filter((e)=> e.packaging.includes('bouteille'))
      setfoodData(filtered)

    }else{
      setfoodData(data)
    }
  }



  // useEffect(() => {
  //     axios("http://localhost:3004/foodlist", {
  //         method: "get"
  //     })
  //         .then((res) => {
  //             setfoodData(res.data)
  //         })
  //         .catch((err) => {
  //             console.log(err)
  //         })
  //}, [])
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Paper>
      <div className='main'>
        <div className='center'>
          The FoodList

        </div>
        <div>

          <SearchIcon />
          <FormatAlignJustifyIcon />
        </div>
      </div>
      <div className='flex btn' >
        <button style={{ backgroundColor: 'white', color: 'blue' }}>Foodlist</button>
        <button >
          Fevorites
        </button>

      </div>
      <Grid container >
        <Grid item xs={6} flex>
          <div className='sortFilter'>Sort  By Fat Value</div>
          <div>
          <select onChange={(e)=>{SortBy(e)}}
          style={{width:''}} value={sortValue} name="sort" id="sort">
            <option value="asc">asc</option>
            <option value="dsc">dsc</option>
          </select>
          </div>
        </Grid>
        <Grid item xs={6}>
        <div className='sortFilter'>Filter By Packing Material</div>
          <div>
          <select  onChange={(e)=>{FilterData(e)}} style={{width:''}} name="sort" id="sort">
            <option value="default">Default</option>
            <option value="box">box</option>
            <option value="carton">carton</option>
            <option value="plastic">plastic</option>
          </select>
          </div>
        </Grid>
        
      </Grid>
      <h3>FoodList</h3>

      <div className='foodlist'>
        {
          fooddata.map((e) => {
            return (
              <>
                <Paper
                  sx={{
                    p: 2,
                    margin: '4px',
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: '#a1c399'

                  }}
                  key={e.code}
                >
                  <Link to={`/${e.code}`}>
                    <Grid container spacing={1} key={e.code}>
                      <Grid item key={e.code}>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                          <Img alt="complex" src={icn} />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" >
                          <Grid item xs style={{ fontSize: '12px' }}>
                            <Typography style={{ fontSize: '12px' }} pt={2.5} gutterBottom variant="subtitle1" component="div">
                              {e.generic_name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              Energy/100g : {e.energy_100g} 
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                            ID:{e.code}
                          </Typography> */}
                          </Grid>
                          <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                              {e.quantity}
                            </Typography>
                          </Grid>
                        </Grid>

                      </Grid>
                    </Grid>
                  </Link>
                </Paper>
                <hr />
              </>
            )
          })
        }




      </div>


    </Paper>
  )
}

export default Foodlist