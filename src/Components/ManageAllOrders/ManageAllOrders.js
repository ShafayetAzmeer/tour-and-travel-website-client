import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageAllOrders = () => {

    const [manageAllOrders, setManageAllOrders] = useState([]);
    const [controlDelete, setControlDelete] = useState(false);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    useEffect(()=> {
        fetch('http://localhost:7000/manageAllOrders')
            .then(res => res.json())
            .then(data => setManageAllOrders(data));
      }, [controlDelete])  

      const handleDeleteManageOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel the order');
        if(proceed){
            fetch(`http://localhost:7000/deleteManageOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                alert('Order has canceled successfully');
                setControlDelete(!controlDelete);
            }
          });
        }
      };

      const handleUpdate = (id) => {
        fetch(`http://localhost:7000/updateStatus/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ status })
        })
        .then((res) => res.json())
        .then((result) => 
            {
                if (result.modifiedCount){
                    alert("Order has approved")
                }
            });
      };

    return (
        <Container id="services">
            <div className="Container Fluid">
                <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Manage All Orders</h2>
                <Row xs={1} md={2} className="g-4 gs-4">
                    {
                        manageAllOrders.map(manageAllOrder =>(

                        <Col>
                            <Card>
                                <Card.Img variant="top" className="h-50" src={manageAllOrder?.image} />
                                    <Card.Body>
                                    <Card.Title className="fs-3 fw-bold pb-2">{manageAllOrder?.name}</Card.Title>
                                    <Card.Text>
                                        <p className="fs-5"><span className="fs-4 fw-bold">Ordered By :</span> {manageAllOrder?.userName}</p>
                                    <p className="fs-5 pb-3"> <span className="fs-4 fw-bold">Email : </span> {manageAllOrder?.email}</p>

                                    <div className="d-flex align-items-center justify-content-evenly mb-3">

                                    <input
                                        onChange={handleStatus}
                                        type="text"
                                        defaultValue={manageAllOrder?.status}
                                    />

                                        <button
                                            onClick={() => handleDeleteManageOrder(manageAllOrder?._id)}
                                            className="btn btn-danger"
                                        >
                                            Cancel Order
                                        </button>

                                        <button onClick={() => handleUpdate(manageAllOrder?._id)}
                                        className="btn btn-success"
                                        >
                                            Update
                                        </button>
                                    </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        )  

                       )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default ManageAllOrders;