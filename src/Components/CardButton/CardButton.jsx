import React from "react";
import {Button} from '@mui/material';
import axios from 'axios';

const cardButton = () =>{

    const handleClick = async () => {
        try {
          const response = await axios.post('http://localhost:5000/saludo');
          console.log(response.data.mensaje);
        } catch (error) {
          console.error('Error al enviar la solicitud:', error);
        }
      };


    return(
        <>
        <h1>Cat Machine</h1>
        <Button variant="contained" onClick={handleClick}>
        Encender maquina
        </Button>
        </>
    );
}
export default cardButton