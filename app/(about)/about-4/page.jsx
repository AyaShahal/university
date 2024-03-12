



import StudentsFive from '@/components/homes/students/StudentsFive'
import About from '@/components/about/About'
import BecomeInstactor from '@/components/common/BecomeInstactor'

import Brands from '@/components/common/Brands'
import PageLinks from '@/components/common/PageLinks'
import StepsOne from '@/components/common/StepsOne'

import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
import Testimonials from '../../../components/common/Testimonials'
import LearningJourney from '@/components/common/LearningJourney'
import LearningPathSix from '@/components/common/LearningPathSix'
import Preloader from '@/components/common/Preloader'
import Image from "next/image";

export const metadata = {
    title: 'About',
    description:
        '',

}

export default function page() {
    return (
        <div className="main-content  ">
            <Preloader/>

            <Header/>
            <div className="content-wrapper js-content-wrapper overflow-hidden">

                <>
                    <section className="page-header -type-1">
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-center text-center">
                                    <div className="col-auto">



                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-md layout-pb-lg">
    <div className="container">
        <div className="row y-gap-50 justify-between items-center">

            <div className="col-lg-6">
                <div>
                <img
    width="100%"
    height={400}
    src="/assets/img/home-2/students/2.jpeg"
    alt="image"
/>

                </div>
            </div>

            <div className="col-lg-6">
                <div>
                    <h2 className="text-30 lh-16">
                        Open Letter for President: Xavier Nieberding
                    </h2>
                    <p className="text-dark-1 mt-30">
                        I have the great privilege of greeting you as president and professor of Paris International University. In both capacities, I salute you for intellectual endeavor of the highest order—in the classroom, laboratory, and beyond—mentoring and advising graduate and undergraduate students. In all this and more, you internalize our collective interest as part of your own interests and thereby embrace the notion of a common enterprise university. For the inescapable challenge of stating, debating, and renewing the purpose of such a university demands that all faculty act as true partners, each contributing to the university's self-definition as it emerges over time.<br/>

                        At the core of every great institution of learning is its faculty. And you join us at an exciting time in the University’s long and distinguished history. We are at a threshold moment, for we have chosen to transform our institution from one of the leading research universities in the world into an institution that will establish a new level of educational excellence. You are at the core of that effort, and we will not compromise in our ability to secure the best possible talent to join you as we build an institution of unique stature.
                        President: Xavier Nieberding
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

                </>
                <FooterOne/>
            </div>

        </div>
    )
}

