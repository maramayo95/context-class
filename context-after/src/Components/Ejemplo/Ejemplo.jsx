import React from 'react'
import { Button , Card  } from 'react-bootstrap';
const Ejemplo = () => {
  return (
    <div>
        <Button variant="info" onClick={() => console.log("Info")}>
            Info
        </Button>

    </div>
  )
}

export default Ejemplo