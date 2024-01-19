import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import Side from './Side';
import { Link } from 'react-router-dom';
import Sidebar from '../component/sidebar';
import './read.css'
import { useEffect,useState } from 'react';
import { getStuid, incrementStuid } from './context';
// import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { updateStudentId } from './reducer';
import { useStuid } from './context';
export default function Studentdetails({ stuid }){
 
  
 


    const handlesubmit = (event) => {
        event.preventDefault();
      
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3006/Entryform',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert('Errror');
                window.location.href="./addstudent";
            }
            else if(response.data.status === 'Registered'){
             
                alert('Successfully Registered');
              
                window.location.href="./addstudent";
              
           
            }
            else{
                alert('Contact Admin');
                window.location.href="./addstudent";
            }
        })
        .catch(function(error){
            alert('Err');
            window.location.href="./";
        })
        

    }

  
    return(
        <>
                <div className="container-fluid">
       
       <div className="row">
      
       <div className="col-lg-2  "><Sidebar/> </div>
       <div className="col-lg-10    bg-light shadow rounded ">

      <div className=' row text-center font-weight-bold'>
        <div><h3>STUDENT DETAILS</h3></div>
        </div>
    

        <div className="row mt-4">
  <div className='col-lg-2'>&nbsp;</div>

  <div className='col-lg-4 bg-light shadow'>
  {/* <Link className="one" to="/Add Leads" style={{ textDecoration: 'none' }}> */}
    <div className="row text-center justify-content-center align-items-center">
      <div className="col-lg-4 " id='add'>
        <i  className="fa-solid fa-users p-4 fa-3x" ></i>
        
      </div>
      <div className="col-lg-8">
        <h4 className="ps text-dark ">Customer Form</h4>
      </div>
    </div>
    {/* </Link> */}
  </div>

  <div className='col-lg-1'>&nbsp;</div>

  <div className='col-lg-4 bg-light shadow'>
  <Link className="one" to="/Add Leads" style={{ textDecoration: 'none' }}>
    <div className="row text-center justify-content-center align-items-center">
      <div className="col-lg-4 " id='view'>
        <i  className="fa-solid fa-users p-4 fa-3x " ></i>
        
      </div>
      <div className="col-lg-8">
        <h4 className="ps text-dark ">Customer List</h4>
      </div>
    </div>
    </Link>
  </div>



  <div className='col-lg-1'>&nbsp;</div>
</div>


    
       <div className='row '>

           <form onSubmit={handlesubmit}>
           
              
                  
                    
                           <h4  className="text-center mt-3">STUDENT ENTRY FORM</h4>
                      
                  
                  
                           <input type="text" name="stuid" value={stuid}  id="name" className="form-control custom-bg" />
                       
                            
                   <div className="col-lg-12 mt-4">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">student Name:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="studentname" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2 ">
        <label htmlFor="name" >last Name:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="lastname" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>
  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">father Name:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="name" id="fathername" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">mother Name:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="mothername" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Date of birth:</label>
      </div>
      <div className="col-lg-9">
        <input type="date" name="dob" id="name"  />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Email:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="email" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">phonenumber:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="number" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Address:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="address" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Designation:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="designation" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Date of joining:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="doj" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

                      
                      
  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Qualification:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="qualification" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">CGPA </label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="cgpa" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Passed out:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="passout" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Total amount:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="totalamount" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Paid amount:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="paidamount" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Remaining amount:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="remainingamount" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Photo:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="photo" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

  <div className="col-lg-12 mt-3">
    <div className="row"><div className='col-lg-1'></div>
      <div className="col-lg-2">
        <label htmlFor="name">Certification:</label>
      </div>
      <div className="col-lg-9">
        <input type="text" name="certification" id="name" className="form-control custom-bg" />
      </div>
    </div>
  </div>

                      

                       
                    
                      
                               <button type="submit" name="data_submit" id="data_submit"
                               value="submit" className="btn btn-primary bg-dark mt-3">
                                   Register
                               </button>
                           
                      
                   
        

             
          

           </form>
       </div>
       </div>
       {/* <div className="col-lg-1">&nbsp;</div> */}
       </div>
   </div>
         

        </>
    )
}