import React, { useEffect, useState } from "react";
import avatar from "../img/user-male.png";
import Skeleton from 'react-loading-skeleton';


const Card = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
    console.log(data);
    return data;
  };

  return (
    <>
      <div className="container">
        <div className="row mt-2 pt-3">
          {user.length > 0 ? (
            user.map((val, ind) => {
              return (
                <div
                  key={ind}
                  className="col-10col-sm-12 col-md-6 col-lg-4 col-xl-4 my-1"
                >
                  <div class="card my-card">
                    <div class="card-body responsive">
                      <div className="d-flex flex-column justify-content-center align-items-center text-center">
                        <div className="avatar mb-3">
                          <img
                            className="avatar-img img-fluid"
                            src={avatar}
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <div className="mb-4 stripe">
                            <h4>{val.name}</h4>
                          </div>
                          <div className='d-flex flex-column justify-content-center align-items-center'>
                            <p className="details mb-0">Email:{val.email}</p>
                            <p className="details mb-0">Phone:{val.phone}</p>
                            <p className="details mb-0">
                              City:{val.address.city}
                            </p>
                            <p className="details mb-0">
                              Company Name:{val.company.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
             <Skeleton count={15} height={100}/>
            
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
