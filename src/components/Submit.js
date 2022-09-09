
 import { Box, Table, TableBody, TableCell ,TableHead} from '@mui/material';
import React from 'react'
import Login from './Login';


const Submit = (props) => {
    
  // function changeState(e){
  //   onhandleSubmit(e);
  // }
  return (
    <Table >
{/* <h1>
Submit page</h1> */}

<TableBody>
              
                    <TableCell> {props.name}</TableCell>
                    <TableCell>{props.birthday}</TableCell>
                    <TableCell>{props.email}</TableCell>
              </TableBody>
        
 
    </Table>
   
  )
}

export default Submit;