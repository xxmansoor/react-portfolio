import React, { useState } from 'react';

const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [subj,setSubj] = useState('');
  const [mesg,setMesg] = useState('');

  const submmit = (e)=>{
   e.preventDefault()
   console.log(name,email,subj,mesg);
   
  }
  return (
    <section className="px-4 py-10 bg-gray-100">
      <div className="bg-white max-w-6xl mx-auto rounded-xl shadow-xl p-6">
        <div className="text-center mb-8">
          <p className="text-2xl text-gray-600">Contact</p>
          <h1 className="text-4xl font-bold text-gray-800">Get in Touch with Me!</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Contact Info */}
          <div className="w-full md:w-1/2 bg-white rounded-xl border p-6 space-y-6">
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-location-dot text-red-500 text-2xl mt-1"></i>
              <div>
                <h2 className="text-lg font-semibold">Location</h2>
                <p className="text-gray-600">Peshawar, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="fa-solid fa-phone text-green-500 text-2xl mt-1"></i>
              <div>
                <h2 className="text-lg font-semibold">Contact Number</h2>
                <p className="text-gray-600">+92 334 8525661</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="fa-solid fa-envelope text-red-500 text-2xl mt-1"></i>
              <div>
                <h2 className="text-lg font-semibold">Email</h2>
                <p className="text-gray-600">mansoorkhaksar22@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="w-full md:w-1/2 bg-white rounded-xl border p-6">
            <form onSubmit={submmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  className="bg-gray-200 w-full h-12 px-4 border rounded-xl"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <input
                  className="bg-gray-200 w-full h-12 px-4 border rounded-xl"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                   value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  className="bg-gray-200 w-full h-12 px-4 border rounded-xl"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Your subject"
                   value={subj}
                  onChange={(e)=>setSubj(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="bg-gray-200 w-full h-32 px-4 py-2 border rounded-xl resize-none"
                  name="message"
                  id="message"
                  placeholder="Write your message"
                   value={mesg}
                  onChange={(e)=>setMesg(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#03543d] text-white px-6 py-3 rounded-xl hover:bg-black transition duration-300"
              >
                Send me message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
