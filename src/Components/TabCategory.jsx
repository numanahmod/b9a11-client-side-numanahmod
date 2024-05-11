import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategory = ({jobs}) => {
    return (
        <div className='m-10'>
          <Tabs>
    <div className='flex items-center justify-center text-black font-bold text-xl'>
    <TabList>
      <Tab>On-Site Job</Tab>
      <Tab>Remote Job </Tab>
      <Tab>Hybrid</Tab>
      <Tab>Part-Time</Tab>
    </TabList>
    </div>
    <TabPanel>
      
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          jobs.filter(j=> j.job_type==='On-Site Job'
          ).map(job =>(
            <JobCard key={job._id} job={job} />
          ))
        }
        </div>
        
         
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          jobs.filter(j=> j.job_type==='Remote Job'
          ).map(job =>(
            <JobCard key={job._id} job={job} />
          ))
        }
        </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          jobs.filter(j=> j.job_type==='Hybrid'
          ).map(job =>(
            <JobCard key={job._id} job={job} />
          ))
        }
        </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
          jobs.filter(j=> j.job_type==='Part-Time'
          ).map(job =>(
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