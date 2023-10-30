import React from 'react'
import Card from 'react-bootstrap/Card';

function RestCard({restauarnt}) {
  return (
    <Card className='shadow'>
      <Card.Img style={{height:'250px'}} className='rounded p-2' variant="top" src={restauarnt.photograph} />
      <Card.Body>
        <Card.Title>{restauarnt.name}</Card.Title>
        <Card.Text>
         <p>Cuisine : {restauarnt.cuisine_type}</p>
         <p>{restauarnt.neighborhood}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RestCard