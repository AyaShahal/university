

import Preloader from '@/components/common/Preloader'
import DashboardOne from '@/components/dashboard/DashboardOne'
import Sidebar from '@/components/dashboard/Sidebar'
import Calender from '@/components/dashboard/calendar/Calender'
import HeaderDashboard from '@/components/layout/headers/HeaderDashboard'
import React from 'react'
export const metadata = {
  title: 'Dashboard-calendar || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Paris International University is located in Paris, the capital city of France. Founded in 1989, the University offers over 36-Majors programs to students from over 100 countries. Our university is distinguished by an outstanding hands-on learning experience spanning the classroom, campus, and a wide variety of work environments.',
  
}
export default function page() {
  return (
    <div  className="barba-container" data-barba="container">
        <main  className="main-content">
        <Preloader/>
            <HeaderDashboard/>
            <div  className="content-wrapper js-content-wrapper overflow-hidden">
              <div id='dashboardOpenClose'  className="dashboard -home-9 js-dashboard-home-9">
                <div  className="dashboard__sidebar scroll-bar-1">
                    <Sidebar/>

                </div>
                <Calender/>
              </div>
          </div>
        </main>
    </div>
  )
}
