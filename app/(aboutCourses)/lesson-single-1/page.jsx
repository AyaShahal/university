


import Descriptions from '@/components/aboutCourses/lesson/Descriptions'
import LessonItems from '@/components/aboutCourses/lesson/LessonItems'
import Reviews from '@/components/aboutCourses/lesson/Reviews'
import Video from '@/components/aboutCourses/lesson/Video'
import Preloader from '@/components/common/Preloader'
import React from 'react'

export const metadata = {
  title: 'Lesson-single-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Paris International University is located in Paris, the capital city of France. Founded in 1989, the University offers over 36-Majors programs to students from over 100 countries. Our university is distinguished by an outstanding hands-on learning experience spanning the classroom, campus, and a wide variety of work environments.',

}

export default function page() {
  return (
    <div  className="main-content  " >
      <Preloader/>
        <div  className="content-wrapper  js-content-wrapper overflow-hidden">
            <LessonItems/>
            <section  className="layout-pt-lg layout-pb-lg lg:pt-40">
        <div  className="container">
          <div  className="row justify-end">
            <div  className="col-xxl-8 col-xl-7 col-lg-8">
              <Video/>

              <Descriptions/>
              <Reviews/>


                </div>
                </div>
                </div>
                </section>
        </div>
    </div>
  )
}
