

import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'

import Grades from '@/components/dashboard/Grades3'
import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
export const metadata = {
  title: 'School of Business',
  description:
    '',

}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>
        <Header/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
            <PageLinks/>
            <Grades/>
            <FooterOne/>
        </div>
    </div>
  )
}
