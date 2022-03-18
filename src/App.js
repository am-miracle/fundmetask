import { Footer, Navbar } from './components';
import Landing from './assets/landing.svg';

function App() {
  
  return (
    <div className="">
      <Navbar />
        <main className='container flex flex-col justify-center items-center lg:flex-row-reverse lg:h-full lg:w-full lg:justify-around py-10'>
          <figure className='w-full h-full lg:w-2/5 lg:h-2/5 mb-4'>
            <img src={Landing} alt='landing' />
          </figure>
          <div className="">
            <div className='leading-10 text-center lg:text-left'>
              <h1 className="text-2xl lg:text-4xl">
                <p>Make things simple &</p>
                <p><strong>Transaction</strong> clear</p>
              </h1>
              <p className="text-sm lg:text-xl my-4">A new way for requesting funding <br/>from friends and the public.</p>
              <button data-modal-toggle="authentication-modal" type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create a request</button>
            </div>
            {/* <!-- Main modal --> */}
            <div id="authentication-modal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-end p-2">
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <form className="px-6 pb-4 space-y-2 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                          <div>
                            <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Fund Request Form</h3>
                            <p className="text-sm text-gray-500 dark:text-white">Only one more step to get started, fill the form below!</p>
                          </div>
                          <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" required />
                          </div>
                          <div>
                            <label for="fund-request" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fund Request</label>
                            <input type="text" name="fund-request" id="fund-request" placeholder="Enter title of fund request" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                          </div>
                          <div>
                            <label for="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Amount</label>
                            <input type="number" name="number" id="number" placeholder="Enter amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                          </div>
                          <div>
                            <label for="fund-desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fund Description</label>
                            <textarea name="fund-desc" id="fund-desc" placeholder="Enter title of fund request" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required ></textarea>
                          </div>
                          <div className="mb-2">
                            <label for="my-file" className="block mb-2 text-xs text-gray-500 dark:text-gray-300">Upload fund request image/proof</label>
                            <input type="file" id="my-file" name="my-file" className="block text-xs text-gray-900 dark:text-gray-300" />
                          </div>
                          <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div> 
          </div>
        </main>
      <Footer />
    </div>
  );
}

export default App;
