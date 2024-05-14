/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const JobCard = ({job}) => {
    const {user} = useContext(AuthContext)

    const {job_type, job_title,
        posted_by, job_posting_date, application_deadline, 
        min_price, max_price, job_applicants, _id
               
    } = job;

    const handleButton = () =>{
        if (!user) {
            toast.error('To go to the single details page, LogIn first')
        }
    }



    return (
      <div className='w-full max-w-sm px-4 py-3 bg-lime-100 rounded-md shadow-md hover:scale-[1.05] transition-all'>
        <div className='flex items-center justify-between'>
          

          <span className='px-3 py-1 text-[12px] text-yellow-500 uppercase bg-slate-600 rounded-md '>
            {job_type}
          </span>

          <span className='text-xs font-light text-gray-800 '>
            
            <p>Posting Date: <span className="text-lime-600 ">{new Date(job_posting_date).toLocaleDateString()}</span></p>
            <p>Deadline: <span className="text-red-400">{new Date(application_deadline).toLocaleDateString()}</span></p>
          </span>
        </div>
  
        <div>
          <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
            {job_title}
          </h1>
  
          <p className='mt-2 text-sm text-gray-600 '>
            <span className="text-red-400 font-bold text-xl">Posted by: </span> 
            <span className=" text-xl font-bold"> {posted_by}</span>
          </p>
          <p className='mt-2 text-sm font-bold text-gray-600 '>
            Salary : Minimum:{min_price}$ - Maximum:{max_price}$
          </p>
          <div className='flex items-center justify-between'>

          <p className='mt-2 text-sm font-bold text-gray-600 '>
            Applicants Number: {job_applicants}
          </p>

         <Link to={`/job/${_id}` } className="">
         <button className="btn" onClick={handleButton}> View Details</button>
         
         </Link>

          </div>
          
        </div>
      </div>
    )
  }
  
  export default JobCard