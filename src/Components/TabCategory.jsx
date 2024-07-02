/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

// eslint-disable-next-line react/prop-types
const TabCategory = ({jobs}) => {
  console.log('jobssss data ',jobs);
    return (
        <div className='m-10'>

          {/* <p>   TAbbbbb </p> */}
          <Tabs>
    <div className='flex items-center justify-center text-black font-bold text-xl bg-slate-300'>
    <TabList className={'bg-slate-300'}>
      <Tab>On-Site</Tab>
      <Tab>Remote</Tab>
      <Tab>Hybrid</Tab>
      <Tab>Part-Time</Tab>
    </TabList>
    </div>
    <TabPanel>
      
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          jobs?.filter(j=> j.job_type==='On-Site'
          )?.map(job =>(
            <JobCard key={job._id} job={job} />
          ))
        }
        </div>
        
         
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          jobs?.filter(j=> j.job_type==='Remote'
          )?.map(job =>(
            <JobCard key={job._id} job={job} />
          ))
        }
        </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          jobs?.filter(j=> j.job_type==='Hybrid'
          )?.map(job =>(
            <JobCard key={job._id} job={job} />
          ))
        }
        </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          jobs?.filter(j=> j.job_type==='Part-Time'
          )?.map(job =>(
            <JobCard key={job._id} job={job} />
          ))
        }
        </div>
    </TabPanel>
    
       </Tabs>
        </div>
    );
};

export default TabCategory;