import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () => {


        const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm();
      
        const onSubmit = (data) => {
        fetch("http://localhost:7000/addNewService", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
      }) 
        .then((res) => res.json())
        .then((result) => {
          if(result.insertedId){
            alert('Service has added')
            reset();
          }
          });
        };
      

    return (
        <div>
        <div>
          <h1 className="mt-5 text-center text-primary fw-bold">Add A New Service</h1>
          <div className="login-box w-25 m-auto mt-5">
            <div className="event-box border border d-flex justify-content-center align-items-center">
              <div className="login-form px-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className="p-2 w-100 mt-4"
                  />
                  <br />
                  <input
                    {...register("date")}
                    type="date"
                    className="p-2 mt-3 mb-3  w-100"
                  />
                  <br />
                  <input
                    {...register("description")}
                    placeholder="Description"
                    className="p-2 w-100"
                  />
                  <br />
  
                  <input
                    {...register("image", { required: true })}
                    placeholder="Image Link"
                    className="p-2 mt-3 mb-3 w-100"
                  />
                  <br />

                  <input
                    {...register("price", { required: true })}
                    placeholder="Cost"
                    type="number"
                    className="p-2 w-100"
                  />
                  <br />
                  <select {...register("model")} className="p-2 mt-3 mb-3 w-100">
                    <option value="premium">premium</option>
                    <option value="classic">classic</option>
                    <option value="business">business</option>
                  </select>
                  <br />
  
                  {errors.exampleRequired && <span>This field is required</span>}
  
                  <input
                    type="submit"
                    value="Add"
                    className="btn btn-primary w-50 mb-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddNewService;