import token from '/tkn.webp';
//motion 
import {motion} from 'framer-motion'
//variants 
import {fadeIn} from '../variants'

const Blogs = () => {
  return (
    <div
    
    className=" m-8">
      

      <section className="bg-white dark:bg-gray-900">
    <motion.div
    variants={fadeIn('up', 0.2)}
    initial= 'hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.7}} className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
           

             <h1 className="max-w-lg mt-2 text-2xl font-semibold leading-tight text-gray-800 dark:text-white mb-4">
               What do you want to know about token?
                 </h1>
                <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={token} alt=""/>

                <div>
                   

                    <div className="flex items-center mt-6">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>
                    <div>
                      <p className='text-center text-2xl font-bold'> Code Explanation</p>
                      <p className='text-center text-xl font-bold'> At first I have started working in this website with home page. <br /> I completed at first navbar. Then I have worked for footer. <br /> After completing footer and navbar for all page except 404 page, <br /> I have gone to do the authentication log in and registration page in firebase. <br /> Then I have done remaining work of  home page. <br />Then serially I have completed ViewDetails page, all jobs page, <br /> my applied jobs my added posts page and this blog page.</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
  What is an access token and refresh token?
  </div>
  <div className="collapse-content"> 
    <p> A careful balance between security and user experience is essential for authentication and authorization. A user may become irritated if protocols are overly strict. On the other hand, a security breach is imminent if permission systems are too loose.

Access and refresh tokens provide a solution that meets both requirements.

An access token (from an authorization server) allows temporary access to restricted resources such as APIs or websites. 

Generally, access tokens are valid for only a few minutes or hours, depending on the setting to safeguard the resource server. They also include security features like signatures.

Any user with an access token is automatically authenticated, regardless of whether they are genuine or malicious.

In OAuth 2.0 authorization frameworks, refresh tokens allow developers to manage users’ sessions across native, web-based, and single-page apps.

Additionally, they allow users to log in and stay connected without providing their passwords for long periods. Further, they add a layer of security for sensitive data, improving the user experience.

Refresh tokens can last from a few days to a few months.

Refresh tokens by themselves don’t grant the user any access. To avoid needless re-authentication, they prolong the duration of the session.
 </p>
  </div>
</div>
                    

                   
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700"/>

                <motion.div
    variants={fadeIn('up', 0.2)}
    initial= 'hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.7}} tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
  How do they work and where should
we store them on the client side?
  </div>
  <div className="collapse-content"> 
    <p>As for where to store them on the client side:
<br />
Access Token: Access tokens should be stored securely on the client side, typically in memory or in a secure storage mechanism such as browser cookies with appropriate security measures (e.g., HttpOnly and Secure flags for cookies in web applications).
<br />
Refresh Token: Refresh tokens should be stored securely on the client side as well, but they require even more stringent security measures since they have a longer lifespan. They should never be exposed to client-side code and are usually stored in a secure storage mechanism such as browser's local storage or secure HTTP cookies with HttpOnly and Secure flags.</p>
  </div>
</motion.div>

                <hr className="my-6 border-gray-200 dark:border-gray-700"/>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
  What is express js?
  </div>
  <div className="collapse-content"> 
    <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
<br />
Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. </p>
  </div>
</div>

                <hr className="my-6 border-gray-200 dark:border-gray-700"/>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
  What is Nest JS?
  </div>
  <div className="collapse-content"> 
    <p>Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
        <br />
        Nest.js is a server-side Node.js framework that’s great for building highly testable and maintainable backend applications. You can create countless types of applications with Node.js; you’re only limited by your applications’ features.
<br />
Since the framework leverages TypeScript, Nest.js is especially popular with teams seeking to leverage TypeScript’s type-checking power. What’s more, it’s simple to learn and master, with a powerful CLI to boost productivity and ease of development. This powerful CLI makes it a breeze to jump-start any server-side project and see it to completion.
    </p>
  </div>
</div>
            </div>
        </div>
    </motion.div>
</section>
      
    </div>
  );
};

export default Blogs;
