import React from 'react'

const Footer = () => {
  return (
  //  <footer className="bg-white w-295 h-50 rounded-xl m-6 ml-5 drop-shadow-xl p-4">
  //       <div className="flex p-4">
  //        <h1 className="mt-15 font-bold">Copyright @2025, Mansoor All Rights Reserved.</h1>
  //        <h2 className="ml-110 mt-15 font-bold">Crafted with ❤️ Mansoor</h2>
  //       </div>
  //      </footer>
<footer className="bg-white w-full max-w-6xl mx-auto rounded-xl m-6 drop-shadow-xl p-6">
  <div className="flex flex-col md:flex-row justify-between items-center text-center">
    <h1 className="text-sm md:text-base font-semibold text-gray-700 mb-2 md:mb-0">
      © 2025 Muhammad Mansoor — All Rights Reserved.
    </h1>
    <h2 className="text-sm md:text-base font-semibold text-gray-700">
      Crafted with ❤️ by <span className="text-green-700 font-bold">Mansoor</span>
    </h2>
  </div>
</footer>


  )
}

export default Footer
