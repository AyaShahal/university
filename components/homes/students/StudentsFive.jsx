import React from "react";
import Image from "next/image";
import { students } from "@/data/students";


export default function StudentsFive() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row y-gap-15 justify-between items-end">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Our Team</h2>
              <p className="sectionTitle__text ">
              Educating Minds, Building Connections.



              </p>
            </div>
          </div>
        </div>
        <div className="row y-gap-30 pt-60 lg:pt-40">
          {students.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div
                className="teamCard -type-2 bg-white"
                data-aos="fade-right"
                data-aos-duration={(i + 1) * 400}
              >
                <div className="teamCard__content">
                  <div className="teamCard__img">
                    <Image
                      width={90}
                      height={90}
                      src={elm.imgSrc}
                      alt="image"
                    />
                  </div>

                  <h4 className="teamCard__title text-17 lh-15 fw-500 mt-12">
                    {elm.name}
                  </h4>
                  <div className="teamCard__subtitle text-14 lh-1 mt-5">
                    {elm.title}
                  </div>


                  <div className="teamCard__button mt-20">
                    <a
                      href={elm.link}
                      className="button -icon -outline-purple-1 -rounded text-purple-1"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
