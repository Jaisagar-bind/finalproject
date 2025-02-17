import React from 'react'

const Addjobform = () => {
  return (
    <div class="relative">

      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Fill in the form
        </h2>

        <form>
          <div class="mt-6 grid gap-4 lg:gap-6">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label for="hs-firstname-hire-us-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">First Name</label>
                <input type="text" name="hs-firstname-hire-us-1" id="hs-firstname-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-lastname-hire-us-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
                <input type="text" name="hs-lastname-hire-us-1" id="hs-lastname-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>
            </div>


            <div>
              <label for="hs-work-email-hire-us-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Work Email</label>
              <input type="email" name="hs-work-email-hire-us-1" id="hs-work-email-hire-us-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
            </div>

          
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label for="hs-company-hire-us-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Company</label>
                <input type="text" name="hs-company-hire-us-1" id="hs-company-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>

              <div>
                <label for="hs-company-website-hire-us-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Company Website</label>
                <input type="text" name="hs-company-website-hire-us-1" id="hs-company-website-hire-us-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></input>
              </div>
            </div>
         

            <div>
              <label for="hs-about-hire-us-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Details</label>
              <textarea id="hs-about-hire-us-1" name="hs-about-hire-us-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></textarea>
            </div>
          </div>
         

         
          <div class="mt-3 flex">
            <div class="flex">
              <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"></input>
            </div>
            <div class="ms-3">
              <label for="remember-me" class="text-sm text-gray-600 dark:text-gray-400">By submitting this form I have read and acknowledged the <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">Privacy policy</a></label>
            </div>
          </div>
          

          <div class="mt-6 grid">
            <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Send inquiry</button>
          </div>
        </form>

        <div class="mt-3 text-center">
          <p class="text-sm text-gray-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </div>
    
    </div>
  )
}

export default Addjobform