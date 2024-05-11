import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {
        const job = useLoaderData();
        const {job_type, job_title,
            posted_by,  
            salary_range, job_applicants, description, image_url } = job;

    return (
        <header className="bg-white dark:bg-gray-900">
    

    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            
            <div className="max-w-lg lg:mx-12 lg:order-2">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">{job_type}</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300"><span className="text-black font-bold">Description:</span> {description
}</p>

                <div>
          <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
            {job_title}
          </h1>
  
          <p className='mt-2 text-sm text-gray-600 '>
            <span className="text-red-400 font-bold text-xl">Posted by: </span> 
            <span className=" text-xl font-bold"> {posted_by}</span>
          </p>
          <p className='mt-2 text-sm font-bold text-gray-600 '>
            Range: {salary_range}
          </p>
          <div className='flex items-center justify-between'>

          <p className='mt-2 text-sm font-bold text-gray-600 '>
            Applicants Number: {job_applicants}
          </p>

         

          </div>
          
        </div>

                
                <div className="mt-6">
                   <Link to={`/apply`} className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"> Apply </Link>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src={image_url} alt="apple watch photo"/>
        </div>
    </div>
</header>
    );
};

export default ViewDetails;