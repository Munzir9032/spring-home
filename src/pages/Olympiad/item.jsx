import React from 'react'
import data from "./content_file.js";
import "./item.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap"

export default function item() {
    return (
        <div className="itemsContainer">

            {data.map((p) => (
                <Card style={{ width: '15rem' }} className="itemContainer">
                    <Card.Img className="itemImg" variant="top" src={p.img} />
                    <Card.Body className="itemContent">
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Text>
                            {p.content}
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}


        </div>
    )
}
