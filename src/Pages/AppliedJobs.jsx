import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";


const AppliedJobs = () => {
    const { user } = useContext(AuthContext)

    const [applies, setApplies ] =useState([])

    useEffect(() => {
        getData()
      }, [user])
    
      const getData = async () => {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/getMyAppliedJobs/${user?.email}`
        )
        console.log(data);
        setApplies(data)
      }
console.log(applies);
    return (
        <div className="m-6">
        <h2 className=' text-lg font-bold text-violet-600 text-center'>My Applied Jobs <span className='px-3 py-1 text-xs text-amber-400 bg-black rounded-full '>
          {applies.length} Job
        </span> </h2>
            <div className='flex flex-col mt-6 mb-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className=' bg-emerald-200'>
                  <tr className=''>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500'
                    >
                      Category 
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      <span>Applying date</span>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      <span>Applicant Name</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      
                        <span>Email</span>
                     
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      
                        <span>Resume </span>
                      
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      <span>Status </span>
                    </th>
                   
                   

                    
                  </tr>
                </thead>
                <tbody className=' bg-white divide-y divide-gray-200 '>
                {applies.map(job => (
                    <tr key={job._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.job_t}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.category}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(job.applyDated).toLocaleDateString()}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.username}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.email}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                     
                    <Link to={job.resume} className=" text-sky-500 tooltip" data-tip="Click me to see the resume">resume</Link>
                        
                      </td>

                      
                      
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.status}
                      </td>
                     
                     
                      
                      
                    </tr>
               ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AppliedJobs;