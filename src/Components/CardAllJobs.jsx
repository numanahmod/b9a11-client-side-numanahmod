import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const CardAllJobs = ({jb}) => {

    const {job_type, job_title,
        posted_by, job_posting_date, application_deadline, 
        salary_range, job_applicants, _id, image_url
               
    } = jb;
    return (
        <div>
			<Fade>

            <div className="overflow-x-auto">
  <table className="table table-xs">
    
    <tbody>
      <tr className="flex justify-between">
       
        <td>{job_title}</td> 
        <td> {job_posting_date} </td> 
        
        <td>{application_deadline}</td> 
        <td> {salary_range} </td> 
        <td><Link to={`/job/${_id}` }><button className="btn">details </button></Link></td>
      </tr>
      
    </tbody> 
    
  </table>
</div>


     
            </Fade>
        </div>
    );
};

export default CardAllJobs;