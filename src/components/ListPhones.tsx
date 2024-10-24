import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaMobile, FaAmazonPay } from 'react-icons/fa';

interface Phone {
  id: number
  brand: string
  model: string
  price: number
  features: Features
}

interface Features {
  storage: string
  camera: string
  battery: string
}

export function ListPhones() {
  const [phones] = useState(useLoaderData() as Phone[]);
  return (
    <>
      <Helmet>
        <title>Phones</title>
        <link rel="canonical" href="/phones" />
      </Helmet>
      {phones.map((phone, index) => {
        return (
          <Card key={index} style={{ width: '18rem', padding: '20px' }}>
            <FaMobile />
            <Card.Body>
              <Card.Title>{phone.brand} {phone.model}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{phone.features.battery}</ListGroup.Item>
              <ListGroup.Item>{phone.features.camera}</ListGroup.Item>
              <ListGroup.Item>{phone.features.storage}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Subtitle><b>{phone.price}$</b></Card.Subtitle>
            </Card.Body>
            <FaAmazonPay />
          </Card>
        )
      })}
    </>
  )
}