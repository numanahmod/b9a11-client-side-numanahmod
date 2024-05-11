import { useLoaderData } from "react-router-dom";
import CardAllJobs from "../Components/CardAllJobs";


const AllJobs = () => {
    const jobs = useLoaderData();
    return (
        <div>
           
            <div className=' gap-8 m-12 bg-white p-8'>
                <table className="table table-xs">
                <thead>
      <tr>
 
        <th>Title </th> 
        <th className="pl-64">Posting date</th> 
        <th className="pr-32">Deadline </th> 
        <th className="pr-44">Salary</th> 
        
      </tr>
    </thead> 
                </table>
                {
                  jobs.map( jb => <CardAllJobs key={jb._id} jb ={jb}>

                  </CardAllJobs>)
                }
                </div>
        </div>
    );
};

export default AllJobs;