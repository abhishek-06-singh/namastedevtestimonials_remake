import React from "react";
import ClipPathOne from "./clipPaths/ClipPathOne";
import ClipPathTwo from "./clipPaths/ClipPathTwo";

const featuredTestimonial = {
  body: "Special thanks to Akshay Saini for the 'Namaste React' course, his teaching style, particularly in the explanation of challenging topics like Redux, lifecycle methods and context API, was outstanding. His ability to simplify these intricate topics while maintaining enthusiasm made the learning journey both enlightening and enjoyable.",
  author: {
    name: "Anand Gadagin",
    handle: "Jr Software Engineer",
    company: "Cognizant",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
  },
};
const testimonials = [
  [
    [
      {
        body: "Akshay’s way of creating curiosity in all of us and always being super active motivates me a lot. I’ve never attended this level of in-depth React.js teaching. I appreciate him a lot for his behavior and teaching methods.",
        author: {
          name: "Ajay Pathak",
          handle: "Frontend Engineer",
          company: "UniBlox",
          imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        },
      },

      {
        body: "I have been working with React for 2 years but the way Akshay teaches in the classes is totally from ground up. It helped me know about every line that I write in the react app now.",
        author: {
          name: "Pujarini Jena",
          handle: "Frontend Developer",
          company: "Unacademy",
          imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
        },
      },
      {
        body: "Highly recommended to every one. Life changing course especially for beginners.",
        author: {
          name: "Hassam Saeed",
          handle: "Technical Project Manager",
          company: "Devaxon",
          imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
        },
      },
      {
        body: "Great course help me to understand frontend in depth. The explanation of React Library was in detail.",
        author: {
          name: "Rabindra Mahato",
          handle: "Software Engineer",
          company: "Mphasis",
          imageUrl: "https://randomuser.me/api/portraits/men/14.jpg",
        },
      },
    ],
    [
      {
        body: "Since my undergraduate days, I have been a fan of Akshay Sir. I've learned everything I know about programming, including Javascript, through Namaste JavaScript. I joined Namaste React live classes and I found it to be far more engaging than many other courses on React or development.",
        author: {
          name: "Shivam Pandey",
          handle: "Software Developer",
          company: "Körber Supply Chain",
          imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        },
      },
      {
        body: "The way the course blends the intricacies of React with the whole Namaste philosophy is just genius. It's like coding with a dash of mindfulness, and I can't get enough of it. The modules are so well-crafted, and each lesson feels like a step closer to enlightenment in the world of web development.",
        author: {
          name: "Saurabh Singh",
          handle: "Software Engineer",
          company: "Cognizant",
          imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
        },
      },
      {
        body: "The course seamlessly blended engaging theoretical concepts with hands-on practical exercises, providing a comprehensive understanding of React. What sets it apart is the inclusion of real-world industrial use cases, allowing me to apply my knowledge immediately.",
        author: {
          name: "Jahangir Khan",
          handle: "Technical Lead",
          company: "TATA Consultancy Services",
          imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Namaste React sessions not only helped me to upskill my React knowledge, but gave me the leg up that I needed the most in my career. From the first day of the class all the sessions are very interactive. The thing I loved the most about this program is the support we received from the team.",
        author: {
          name: "Meenakshi Pandey",
          handle: "Senior Software Developer",
          company: "Siemens Healthineers",
          imageUrl: "https://randomuser.me/api/portraits/women/13.jpg",
        },
      },
      {
        body: "This course is brilliant not only for the interview preparation but also to enhance our knowledge on react and behind the scene how react works. Great quality content and no online course can even come closer to Akshay Saini namaste react.",
        author: {
          name: "Shaquib Ahmad Khan",
          handle: "Frontend Developer",
          company: "Persistent systems",
          imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
        },
      },
      {
        body: "Namaste React has been pivotal in transforming my React proficiency. The platform's comprehensive resources and insightful tutorials formed a robust foundation for my React journey. Thanks to its guidance and practical insights, I not only mastered React but confidently aced my interviews.",
        author: {
          name: "Shivam Govind Rao",
          handle: "SDE 1 (Frontend)",
          company: "Oriserve",
          imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
        },
      },
    ],
    [
      {
        body: "After understanding JavaScript concepts from Namaste JavaScript playlist, I was looking for resources to learn React. Before I tried learning from Udemy courses and YouTube videos but then lost motivation mid-way. But this Namaste React is exactly what I was looking for.",
        author: {
          name: "Nikita Jit",
          handle: "Software Engineer",
          company: "Accenture",
          imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        },
      },
      // More testimonials..
      {
        body: "I am very grateful to Akshay for sharing his knowledge through Namaste JS and Namaste React. His way of explaining the concepts was very well, he not only delivered the concept but also the confidence and enthusiasm to learn anything in the world of Development ❤️.",
        author: {
          name: "Nikhil Kumar",
          handle: "Associate Software Engineer",
          company: "BlueYonder",
          imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
        },
      },
      {
        body: "Software Career starter pack.",
        author: {
          name: "Thota Ritikesh",
          handle: "Junior Software Engineer",
          company: "Phoenix American",
          imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
        },
      },
      {
        body: "There were 2 technical interviews in the hiring process, I answered almost every question because of the Namaste javascript and Namaste react course, Purchasing Namaste React in June was one of my best investments.",
        author: {
          name: "Hemshu Shivhare",
          handle: "Associate Software Engineer",
          company: "Impledge technologies",
          imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NamasteDevTestimonials = () => {
  return (
    <div className="relative isolate bg-neutral-900 pb-32 pt-24 sm:pt-32">
      <ClipPathOne />

      <ClipPathTwo />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-xl font-semibold leading-8 tracking-tight text-amber-400">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            What Our Students Say About Us
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-300 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-indigo-300/15 sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1 text-gray-200">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p className="text-gray-200">{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-300">{`${featuredTestimonial.author.handle}`}</div>
                <div className="text-amber-400">{`${featuredTestimonial.author.company}`}</div>
              </div>
              <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-indigo-200/15 p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-200">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-400">{`${testimonial.author.handle}`}</div>
                          <div className="text-amber-400">{`${testimonial.author.company}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NamasteDevTestimonials;
