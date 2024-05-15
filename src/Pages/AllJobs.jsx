import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {  useQuery} from "@tanstack/react-query";



const AllJobs = () => {
    // const jobs = useLoaderData();
    const [search, setSearch] = useState()
    // const [searchText, setSearchText] = useState()
    // const queryClient = useQueryClient()
    const {user } = useContext(AuthContext)
    

    const {data: jobs = [],  isLoading, refetch
    } = useQuery({
      queryKey: ['jobs'],
      queryFn: async () =>{
        console.log(search);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/postedJobs?search=${search}`);
        return res.json()
      }
    })
    

    if (isLoading) return <p className="text-center text-red-600 text-3xl font-bold">Data is still loading </p>

    const handleButton = () =>{
      if (!user) {
          toast.error('To go to the single details page, LogIn first')
      }
  }
  const handleSearch = (e) => {
    e.preventDefault()
    // const text = e.target.search.value;
    // setSearch(text)
    // queryClient.invalidateQueries({queryKey:['jobs']})
    refetch()
  }
  console.log(search);
    return (
        <div className="m-6">
        <h2 className=' text-lg font-bold text-violet-600 text-center'>All Jobs</h2>
        <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearch(e.target.value)}
                value={search}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
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
                      className='px-4 py-3.5 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      <span>Posting date</span>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-bold  text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Price Range</span>
                      </button>
                    </th>

                    
                   
                   

                    <th className='px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500'>
                      Details 
                    </th>
                  </tr>
                </thead>
                <tbody className=' bg-white divide-y divide-gray-200 '>
                {jobs.map(job => (
                    <tr key={job._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {job.job_title}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(job.job_posting_date).toLocaleDateString()}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(job.application_deadline).toLocaleDateString()}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        ${job.min_price}-${job.max_price}
                      </td>
                     
                     
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <Link to={`/job/${job._id}` }><button onClick={handleButton} className="btn">details </button></Link>
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

export default AllJobs;