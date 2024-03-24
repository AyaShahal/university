




import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'

import CourseDetailsTwo from '@/components/courseSingle/CourseDetailsTwo'
import CourseSlider from '@/components/courseSingle/CourseSlider'
import FooterOne from '@/components/layout/footers/FooterOne'

import Header from '@/components/layout/headers/Header'
import React from 'react'


export const metadata = {
  title: 'Couese-single-2 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Paris International University is located in Paris, the capital city of France. Founded in 1989, the University offers over 36-Majors programs to students from over 100 countries. Our university is distinguished by an outstanding hands-on learning experience spanning the classroom, campus, and a wide variety of work environments.',
  
}

export default function page({ params }) {
  return (
    <div  className="main-content  ">
      <Preloader/>
        <Header/>
        <div  className="content-wrapper  js-content-wrapper ">
            <PageLinks dark={true} />
            <CourseDetailsTwo id={params.id} />
            <CourseSlider/>
            <FooterOne/>
        </div>


    </div>
  )
}
