import axios from "axios"



import { useStuid } from './context';
import Studentdetails from "./studentdetails";

export default function Master(){
    
   

    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};
     

        axios.post('http://localhost:3006/addmaster',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert('Errror');
                window.location.href="./master";
            }
            else if(response.data.status === 'Registered'){
                alert('Successfully Registered');
                window.location.href="./master";
                
          
            }
            else{
                alert('Contact Admin');
                window.location.href="./master";
            }
        })
        .catch(function(error){
            alert('Err');
            window.location.href="./";
        })

    }
   
    return(
        <>
      <div className="container">
        <div className="row table-responsive">
           <form onSubmit={handlesubmit}>

                <table className="table table-bordered">
                    <tbody >
                        <tr>
                            <td>
                                <label>user id</label>
                            </td>
                            <td>
                                <input type="text" name="id"/>
                            </td>
                        </tr>
                        <tr>
                            <td><button type="submit">SUBMIT</button></td>
                        </tr>

                    </tbody>

                </table>

         

           </form>
         
        </div>

      </div>
        
        
        
        
        </>
    )
}