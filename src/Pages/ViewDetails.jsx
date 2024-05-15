import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from "sweetalert2";


const ViewDetails = () => {
        const job = useLoaderData();
        const [applyDate, setApplyDate] = useState(new Date())

       

        const {job_type, job_title,
            posted_by,  
            min_price, max_price, job_applicants, description, image_url, _id, buyer_email, 
             application_deadline,
             } = job;

            const {user } = useContext(AuthContext);


    const handleSubmit = async e =>{
        e.preventDefault();

        if(user?.email === buyer_email) return toast.error('You can not apply')
        
        const form = e.target;
        const jobId = _id
        const category = job_type;
       const job_t =job_title; 
        const applyDated = applyDate;
        const deadline = application_deadline;
        const email = user?.email;
        const username = user?.displayName
        const status = 'pending';
        const  resume = form.resumeLink.value;
        const applyForm = {jobId, email, status, username,resume, applyDated, deadline, category, job_t, job_applicants: 0, }
        console.table(applyForm);
        if(application_deadline < applyDate) return toast.error('Date is over')
        try {
          const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/appliedJobs`, applyForm)
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Applied successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              e.target.reset()
            
        }
        } catch (err) {
          toast.error(err.response.data)
          e.target.reset()
        }
        document.getElementById('my_modal_5').close()
    }

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
          Salary : Minimum:{min_price}$ - Maximum:{max_price}$
          </p>
          <div className='flex items-center justify-between'>

          <p className='mt-2 text-sm font-bold text-gray-600 '>
            Applicants Number: {job_applicants}
          </p>

         

          </div>
          
        </div>

                
                <div className="mt-6">
                   <Link onClick={()=>document.getElementById('my_modal_5').showModal()} className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"> Apply </Link>
                   <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <form onSubmit={handleSubmit}> 
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <p className="text-center text-2xl font-bold">Apply Form </p>
       <div className="grid gap-2">
       <label htmlFor="">User name </label>
        <input type="text" name="username" id="" 
        className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" disabled defaultValue={user?.displayName} />
       </div>
       <div className="grid gap-2">
       <label htmlFor="">User Email </label>
        <input type="email" name="email" id="" 
        className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" disabled defaultValue={user?.email} />
       </div>
       <div className="grid gap-2">
       <label htmlFor=""> Resume Link  </label>
        <input type="text" name="resumeLink" id="" placeholder="Your resume link" 
        className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
       </div>
       <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Apply date </label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md'
                selected={applyDate}
                onChange={date => setApplyDate(date)}
                disabled
              />
            </div>

       
       <div className="modal-action">
      <button   method="dialog">
        {/* if there is a button in div, it will close the modal */}
        <input type="submit" value="Apply" className="btn bg-orange-500"/>
      </button>
    </div>
    </form>
    
  </div>
</dialog>
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