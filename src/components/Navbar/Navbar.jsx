import React from 'react';;

const Navbar = () => {

  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-md">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" class="">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SendFunds</span>
            </a>
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Connect wallet</button>
        </div>
    </nav>
  )
}

export default Navbar