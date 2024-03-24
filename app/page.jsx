// import HomeOne from "@/components/homes/home";
import  Header  from "../components/layout/headers/Header";

// import MobileMenu from "@/components/layout/component/MobileMenu";

import HomeHero from "../components/homes/heros/HomeHero";
import HeroTwo from "../components/homes/heros/HeroTwo";

import Brands from "../components/common/Brands";
import Categories from "../components/homes/categories/Categories";
import Courses from "../components/homes/courses/Courses";
import TestimonialsOne from "../components/common/TestimonialsOne";
import FeaturesOne from "../components/homes/features/FeaturesOne";
import WhyCourse from "../components/homes/WhyCourse";
import Instructors from "../components/common/Instructors";
import GetApp from "../components/homes/getApp/GetApp";
import Blog from "../components/homes/blogs/Blog";
import Join from "../components/homes/join/Join";
import FooterOne from "../components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import FindLearningPath from "@/components/homes/FindLearningPath";
export const metadata = {
  title: 'Paris International university',
  description:
    'Paris International University is located in Paris, the capital city of France. Founded in 1989, the University offers over 36-Majors programs to students from over 100 countries. Our university is distinguished by an outstanding hands-on learning experience spanning the classroom, campus, and a wide variety of work environments.',

}

export default function HomePage() {
  return (

    <>
    <Preloader/>
    <Header/>

    <div className="content-wrapper  js-content-wrapper overflow-hidden">

      <HomeHero />
      <Brands/>
      <TestimonialsOne/>

      <Categories />
      <WhyCourse/>
      <FindLearningPath/>
      <Instructors/>
      <Join/>
      <FooterOne/>
    </div>
  </>
  );
}
