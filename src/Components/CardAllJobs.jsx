import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";


const CardAllJobs = ({jb}) => {

    const {user } = useContext(AuthContext)
    const { job_title,
         job_posting_date, application_deadline, 
        min_price, max_price, _id,  } = jb;

        const handleButton = () =>{
            if (!user) {
                toast.success('To go to the single details page, LogIn first')
            }
        }
    return (
        <div>
			<Fade>

            <div className="overflow-x-auto">
  <table className="table table-xs">
    
    <tbody>
      <tr className="flex justify-between">
       
        <td>{job_title}</td> 
        <td> {new Date(job_posting_date).toLocaleDateString()} </td> 
        
        <td>{new Date(application_deadline).toLocaleDateString()}</td> 
        <td> Salary : Minimum:{min_price}$ - Maximum:{max_price}$ </td> 
        <td><Link to={`/job/${_id}` }><button onClick={handleButton} className="btn">details </button></Link></td>
      </tr>
      
    </tbody> 
    
  </table>
</div>


     
            </Fade>
        </div>
    );
};

export default CardAllJobs;