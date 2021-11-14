import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';


const MyOrders = () => {

    const {user, logOut} = useAuth();

    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:7000/myOrders/${user.email}`)
          .then((response) => response.json())
          .then((data) => setMyOrders(data));
      }, [control]);

      const handleDelete = (id) => {

        const proceed = window.confirm('Are you sure, you want to cancel the order');

        if (proceed){
          fetch(`http://localhost:7000/deleteOrder/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                alert('Order will be canceled');
                setControl(!control);
              }
            });
        }
       
      };

    return (
        <div>
        <h1 className="text-primary mt-5 mb-5 fw-bold">My orders </h1>
        <div className="services">
          <div className="row container">
            {myOrders?.map((pd) => (
              <div className="col-md-4 mb-5">
                <div className="service border border rounded p-3">
                  <div className="services-img ">
                    <img className="w-100 rounded" src={pd?.image} alt="" />
                  </div>

                  <h2 className="mb-3 mt-3 text-primary">{pd?.name}</h2>
                  <h3 className="text-warning">Class : {pd?.model}</h3>
                  <p>{pd?.description}</p>
                  <h4 className="text-success mb-3"> Cost :{pd?.price}$</h4>

                  <button
                    onClick={() => handleDelete(pd?._id)}
                    className="btn btn-danger"
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MyOrders;