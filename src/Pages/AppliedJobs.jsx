
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { Tabs } from "react-tabs";
import { useEffect, useRef, useState } from "react";
//react to pdf
import html2canvas from "html2canvas";
import jsPDF from "jspdf";



const AppliedJobs = () => {
    const { user } = useAuth()
    const [filter, setFilter] = useState('')

    const pdfRef = useRef();

    const downloadPDF = () =>{
      const input = pdfRef.current;
      html2canvas(input).then((canvas) =>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true );
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

        const imgX = (pdfWidth - imgWidth * ratio) / 2;

        const imgY = 30;

        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('invoice.pdf');
      });
    }
    // const [applies, setApplies ] =useState([])

const {data: applies = [],  isLoading, refetch
 } = useQuery({
    queryFn: () =>  getData(),
    queryKey: ('applies', user?.email),
} 
// [filter]
)
console.log(applies);

    // useEffect(() => {
    //     getData()
    //   }, [user])
    
      const getData = async () => {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/getMyAppliedJobs/${user?.email}?filter=${filter}`
        //  
        )
       return data
        
      }
      useEffect(()=>{
        refetch()
      },[filter, refetch])
      if (isLoading) return <p className="text-center text-red-600 text-3xl font-bold">Data is still loading </p>
// console.log(applies);
    return (
        <div className="m-6">
        <h2 className=' text-lg font-bold text-violet-600 text-center'>I have Applied in <span className='px-3 py-1 text-xs text-amber-400 bg-lime-700 rounded-full '>
          {applies.length} 
        </span>  Jobs </h2>
        <div>
            <select
              onChange={e => {
                setFilter(e.target.value)
            refetch()
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='On-Site'>On-Site</option>
                <option value='Remote'>Remote</option>
                <option value='Hybrid'>Hybrid</option>
                <option value='Part-Time'>Part-Time</option>
            </select>
          </div>
           <Tabs>
           <div className='flex flex-col mt-6 mb-6' ref={pdfRef}>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className=' bg-green-400'>
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
          <div className="row text-center mt-5">
          <button className="btn btn-primary" onClick={downloadPDF}>Download Pdf </button>
          </div>
           </Tabs>

                

        </div>
    );
};

export default AppliedJobs;