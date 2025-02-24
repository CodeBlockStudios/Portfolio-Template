import React from 'react'
import Resume from '../resume.pdf'    // Will need to edit resume link or name

function resumeClick() {
  var resumeDisplay = window.open(Resume, "_blank")
  setTimeout(function () {
    resumeDisplay.document.title = "Resume"
  }, 100)
}

const Mainpage = () => {
  return (
    <div name="Home" className='w-full h-screen bg-primarycolor'>
      <div className='mx-auto px-8 flex flex-col justify-center h-full'>
        <p class='hook'>Hello, my name is</p>
        <h2 className='text-fontprimary font-bold text-5xl text-right px-3 sm:text-center'>Full Name</h2>
        <h3 className='text-fontsecondary font-bold text-3xl text-right px-3 pt-4 sm:text-center'>Occupation/Major</h3>
        <p className='text-fontbody font-medium text-2xl px-3 py-8 sm:text-center sm:px-24 lg:px-72'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam provident, illo magnam nemo ea, quo iure,
          cumque consequuntur eaque esse architecto iusto vitae in harum! Totam sint soluta necessitatibus!</p>
        <div className='flex items-center justify-center'>
          <button type="submit" onClick={resumeClick}
            className='border-4 border-buttoncolor rounded py-3 px-12 duration-100 text-fontaccent text-3xl font-medium hover:bg-buttoncolor hover:text-fontprimary'>
            VIEW RESUME
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mainpage