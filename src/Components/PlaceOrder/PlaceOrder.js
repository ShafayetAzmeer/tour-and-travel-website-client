import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {

    const { spotId } = useParams();
    const [placeOrder, setPlaceOrder] = useState({});
    const {user} = useAuth();

    useEffect(() => {
        fetch(`https://damp-lowlands-43379.herokuapp.com/spotDetail/${spotId}`)
          .then((res) => res.json())
          .then((data) => setPlaceOrder(data));
      }, []);
  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
       data.email = user.email;
       data.status = "Order Pending";

       fetch("https://damp-lowlands-43379.herokuapp.com/confirmOrder", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => 
            {
                if (result.insertedId){
                    alert("Order has confirmed")
                    reset();
                }
            });
      };

    return (
        <Container>
        <h1 className="text-primary mt-3 mb-3 fw-bold">Place Your Order</h1>

        <hr className="text-primary fw-bolder fs-3 mb-4"/>

        <hr className="text-primary fw-bolder fs-3 mb-4"/>

        <div className="booking-container">
            <div className="row container">
            <div className="col-md-6">
            {placeOrder?.name &&
                <h2 className="mb-4 text-primary">Selected Tour</h2>}
            <Row xs={1} md={1} className="g-4 gs-5">
            <Col>
                { placeOrder?.name &&
                    <Card>
                    <Card.Img variant="top" className="h-50 p-3" src={placeOrder?.image} />
                        <Card.Body>
                        <Card.Title className="fs-3 fw-bold pb-2 text-primary">{placeOrder?.name}</Card.Title>
                        <Card.Text>
                            <p className="fs-5"> {placeOrder?.description}</p>

                            <h4 className="text-success fw-bold"> Cost: {placeOrder?.price} $</h4>

                        </Card.Text>
                    </Card.Body>
                </Card>}
            </Col>
            </Row> 
            
            </div>

            <div className="col-md-6">
                <h2 className="mb-4 text-primary">Please Fill The Form</h2>
            
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("userName", { required: true })}
                    defaultValue={user?.displayName}
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("image", { required: true })}
                    defaultValue={placeOrder?.image}
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("name",  { required: true })}
                    placeholder="Name of Tour"
                    // defaultValue={placeOrder?.name}
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("date")}
                    placeholder="Tour date"
                    type="date"
                    className="p-2 m-2 w-100"
                />
                <br />
                <input
                    {...register("address")}
                    placeholder="Address"
                    className="p-2 m-2 w-100"
                />
                <br />

                <input
                    {...register("price", { required: true })}
                    placeholder="Price"
                    // defaultValue={placeOrder?.price}
                    className="p-2 m-2 w-100"
                />
                <br />
                
                
                <select {...register("model",  { required: true })} className="p-2 m-2 w-100">
                    {/* <option value={placeOrder?.model}>{placeOrder?.model}</option> */}
                    <option value="premium">premium</option>
                    <option value="business">business</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    type="submit"
                    value="Confirm Order"
                    className="btn btn-primary mt-3 w-50"
                />
                </form>
            </div>
            </div>
        </div>
        </Container>
    );
};

export default PlaceOrder;