import React, { useEffect, useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useHttpClient } from '../hooks/http-hook';
import LoadingSpinner from '../components/Loading/Loading';
import MoveTop from '../components/MoveTop/MoveTop';
import Card from '../components/Card/Card';
import Button from '../components/Form/Button';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';


const Humains = () => {

  const styles = {
    backgroundColor: '#FFFFFF',

 }

  const [userData, setUserData] = useState({name:'',email:'',gender:''});
  const [usersList, setUsers]= useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  


 const handlePreview = async event =>{
  event.preventDefault();
  console.log(event.target.id)
  const user = usersList.filter(user => user.id == event.target.id);
  console.log(user)
  setUserData({name:user[0].name,email:user[0].email,gender:user[0].gender});


 }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          `https://gorest.co.in/public-api/users`
        );
        console.log(responseData.data);
         responseData.data.map((user) => {( setUsers(U => [...U,
          {
          id: user.id,
          name: user.name,
          email: user.email,
          gender: user.gender,
          status: user.status
          }])
          )
        }
          );
          localStorage.setItem(
            'users',  JSON.stringify(responseData.data));
      } catch (err) {
        toast.error(`${err} ! please tray again`);
        clearError();
      }

    };
    fetchUsers();
  }, [sendRequest]);

  
  const showUsersItems = () => (
    <table className="table rounded" style={styles} >
      <thead>
        <tr>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
        </tr>
      </thead>
      <tbody>
      {usersList.map((u) => (
      <tr>
        <td><a className="ml-3 pointer" onClick={handlePreview} id={u.id}>{u.name}</a></td>
        <td>{u.email}</td>
      </tr>))}
    </tbody>
    </table>
  );

  return (
    <>
        {isLoading && <LoadingSpinner/>}
        {/* Banner Section */}
        <ToastContainer/>
        {/* Page Banner section  */}
        {/* <BannerTwo pageTitle="Humains" title="Assets" /> */}
        {/* Content  */}
        <section >
          <div className="container">
                <div className="row">
                  <div className="page-content">
                    {/* Breadcrumb section */}
                    <Breadcrumb/>
                  </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-3">
                      {/* users Section  */}
                      {showUsersItems()}

                    </div>
                    
                  <Card className="col-lg-6 col-md-12 mt-3" style={{height:'200px'}}>
                  <div>
                    <div>
                    <label>{` NAME   :   ${userData.name}`}</label>
                    </div>
                    <div>
                    <label>{`EMAIL  :  ${userData.email}`}</label>
                    </div>
                    <div>
                    <label>{` GENDER   :   ${userData.gender}`}</label>
                    </div>
                  </div>
                  <div className="row">
                  <div class="col-lg-6 col-md-12 mt-3">
                  <Button type="submit" disabled={false}>
                    DELETE
                  </Button>
                  </div>
                  <div class="col-lg-6 col-md-12 mt-3">
                  <Button type="submit" disabled={false} inverse={true}>
                    EDIT
                  </Button>
                  </div>
                  </div>
                  </Card>
                </div>
          </div>
            {/* Move to top Section  */}
            <MoveTop/>

        </section>

    </>
  );


};




  export default Humains;