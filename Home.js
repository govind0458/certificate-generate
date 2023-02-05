import React, { useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { Getdata, save } from '../services/Apiconnection';

export default function Home() {

    const [detail, setDetail] = useState({})
    const [Count, SetCount] = useState()
    const [ak, setak] = useState(false)
    const [xxx, setxxx] = useState(false)

    const HandleChange = (e) => {

        setDetail({ ...detail, [e.target.name]: e.target.value });
        console.log(detail);
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        let resp = await save(detail)
        console.log(resp);
        let y = await Getdata()
        SetCount(y.data)

        console.log(y);
        setak(true)

    }


    const print = () => {
        window.print()
        setxxx(true)
    }


    return (
        <div>

            {!ak ?

                (
                    <Container className='mt-3'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name :</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter name" onChange={HandleChange} />

                            </Form.Group>

                            <div className='text-center mt-4'>

                                <Button variant="primary" type="submit" onClick={HandleSubmit}>
                                    Generate Certificate
                                </Button>
                            </div>

                        </Form>

                    </Container>
                )



                :


                (
                    <Container>
                        <div className="border border-3 border-primary mx-5 my-5 bg-primary">
                            <div className="text-center">
                                <h1>
                                    <span className="text-light"> certificate </span>
                                    <span className="text-danger"> of </span>
                                    <span className="text-success">Participation</span>
                                </h1>
                                <p className='text-light text-center'>Registration No. -
                                    <span> {`00000${Count}`}</span>
                                </p>
                                <hr className="text-center" />
                                <p>Ministry of Defence, Ministry of Education and MYGow congratulate</p>
                                <h2>{detail.name}</h2>
                                <p>
                                    .....................................................................................
                                </p>
                                <p>for participating in the patriotic Quiz on</p>
                                <p>
                                    <b>Republic Day 2023 in the Month of january 2023.</b>
                                </p>
                                <p>We appreciate your time and enthusiasm! keep Particepating</p>
                                <p className="mx-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                                    provident cumque earum, suscipit eligendi atque dignissimos cum odit eaque
                                    quae facere, iste totam, architecto in vero quis ad porro tempore fuga
                                    numquam alias! Veniam earum natus consectetur temporibus voluptatibus sed
                                    beatae soluta odio velit eaque, a doloribus maxime repellat. Accusamus
                                    perspiciatis minima voluptatibus ipsa pariatur natus doloribus, eius
                                    repudiandae ex reprehenderit, consectetur consequatur ad laborum aliquam,
                                    delectus numquam alias aspernatur voluptatum? Minima architecto ut quo
                                    beatae dicta sunt ad, quaerat porro saepe error facilis sed nobis
                                    consectetur, impedit dolore ratione exercitationem aspernatur ipsa animi
                                    rerum corporis numquam maiores officia. Ex.
                                </p>
                                <div className="mx-3">
                                    <h5 align="right" className="mx-5 my-3">
                                        Prof. Srivastava Srivastava,
                                        <br />
                                        I/C Director, NCERT
                                    </h5>
                                </div>


                                {!xxx ?
                                    <div align="center my--3">
                                        <button className="btn btn-light" onClick={print}> Print </button>
                                    </div>
                                    :
                                    null}
                            </div>
                        </div>




                    </Container>
                )





            }


        </div>
    )
}
