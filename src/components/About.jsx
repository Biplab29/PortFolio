import React from 'react';

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p className="mb-6">
        To start my career as a technical person in the software field by using my
        technical knowledge and skills in a learning environment for
        the better growth of the organization.
      </p>

      {/* Education Section */}
      <section className="mb-10">
        <h2 className="text-green-500 font-semibold text-xl mb-4">
          Education & Training
        </h2>
        <div className="space-y-3">
          <div>
            <strong>2024 : MCA</strong>
            <p>RCC Institute of Information Technology (MAKAUT)</p>
          </div>
          <div>
            <strong>2022 : BCA</strong>
            <p>Silda Chandra Shekar College (Vidyasagar University)</p>
          </div>
          <div>
            <strong>2019 : HS</strong>
            <p>Jhargram Nanibala Vidyalaya (WBCHSE)</p>
          </div>
          <div>
            <strong>2017 : Madhyamik</strong>
            <p>Jhargram Nanibala Vidyalaya (WBBSE)</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-green-500 font-semibold text-xl mb-2">
          Skills & Expertise
        </h2>
        <p>
          <strong>
            C, Java, JavaScript, React, NodeJS, ExpressJS, MongoDB, SQL
          </strong>
        </p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-green-500 font-semibold text-xl mb-2">
          Professional Experience
        </h2>
        <p>Full Stack Developer</p>
      </section>

      {/* Internship */}
      <section className="mb-10">
        <h2 className="text-green-500 font-semibold text-xl mb-2">
          Summer Internship
        </h2>
        <div className="space-y-2">
          <div>
            <strong>2024:</strong> Oracle DBA with Basics of AWS<br />
            From VUCS Private Limited
          </div>
          <div>
            <strong>2023:</strong> Cloud Computing (MeitY)
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-green-500 font-semibold text-xl mb-4">Projects</h2>

        {/* Project 1 */}
        <div className="mb-8">
          <strong>1) E-Jewellery Shop – Full Stack MERN Project</strong>
          <br />
          <b>Language of Implementation:</b> React.js, TailwindCSS & Bootstrap, Node.js, Express.js, MongoDB
          <p>Live Link: <a href="https://e-jewellery-shop.onrender.com" className="text-blue-500 underline">e-jewellery-shop.onrender.com</a></p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
            <li>Developed a responsive and dynamic frontend using React.js with TailwindCSS & Bootstrap for mobile-friendly UI.</li>
            <li>Used React Router for smooth SPA navigation (login, product, cart, admin routes).</li>
            <li>Connected frontend and backend using Axios for all CRUD and auth requests.</li>
            <li>Backend built with Express.js, RESTful APIs for product management, users, and cart.</li>
            <li>MongoDB + Mongoose for structured, fast, schema-based storage.</li>
            <li>JWT auth with cookies for secure protected routes and session handling.</li>
            <li>Image uploads using Multer for jewellery images.</li>
            <li>Enhanced user experience with loading states and structured error handling.</li>
          </ul>
        </div>
{/* Project 2 */}
<div className="mb-8">
  <strong>2) AirBnb - Full Stack Project </strong>
  <br />
  <b>Language of Implementation:</b> HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, MongoDB
  <p>Live Link: <a href="https://airbnb-mern-project-usm2.onrender.com" className="text-blue-500 underline">airbnb-mern-project-usm2.onrender.com</a></p>
  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
    <li>Created responsive UI with HTML, CSS, and Bootstrap.</li>
    <li>Developed server-rendered dynamic web pages using EJS, enabling personalized and data-driven UI components like listing cards, booking details, and user dashboards.</li>
    <li>Designed the backend using Express.js with REST APIs for property CRUD operations, user authentication.</li>
    <li>Utilized Cloudinary for secure and efficient image upload, transformation, and hosting of property pictures.</li>
    <li>Integrated Mapbox API to provide location-based search and display properties on an interactive map with custom markers.</li>
    <li>Implemented secure user authentication (signup/login) and session management using cookies or tokens.</li>
    <li>Modularized code using MVC architecture to separate concerns and enhance scalability and maintainability.</li>
    <li>Optimized performance and dev speed through modular code and Bootstrap UI.</li>
  </ul>
</div>

{/* Project 3 */}
<div className="mb-8">
  <strong>3) MERN-Authentication </strong>
  <br />
  <b>Language of Implementation:</b> React.js, JavaScript, Node.js, Express.js, MongoDB
  <p>Live Link: <a href="https://auth-frontend-pszo.onrender.com" className="text-blue-500 underline">auth-frontend-pszo.onrender.com</a></p>
  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
    <li>Created responsive UI with HTML, CSS, and Bootstrap.</li>
    <li>Developed server-rendered dynamic web pages using EJS, enabling personalized and data-driven UI components like listing cards, booking details, and user dashboards.</li>
    <li>Designed the backend using Express.js with REST APIs for property CRUD operations, user authentication.</li>
    <li>Utilized Cloudinary for secure and efficient image upload, transformation, and hosting of property pictures.</li>
    <li>Integrated Mapbox API to provide location-based search and display properties on an interactive map with custom markers.</li>
    <li>Implemented secure user authentication (signup/login) and session management using cookies or tokens.</li>
    <li>Integrated OTP verification via <strong>Nodemailer</strong> for email-based verification and <strong>Twilio</strong> for SMS-based phone verification to enhance account security.</li>
    <li>Modularized code using MVC architecture to separate concerns and enhance scalability and maintainability.</li>
    <li>Optimized performance and dev speed through modular code and Bootstrap UI.</li>
  </ul>
</div>
       {/* Project 4 */}
<div className="mb-8">
  <strong>4) Online Hospital Bed Availability System</strong>
  <br />
  <b>Language of Implementation:</b> HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, MongoDB
  <p>Live Link: <a href="https://majorproject-hgoh.onrender.com/" className="text-blue-500 underline">majorproject-hgoh.onrender.com</a></p>
  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
    <li>Created responsive UI with HTML, CSS, and Bootstrap.</li>
    <li>Implemented interactive frontend using JavaScript and jQuery.</li>
    <li>Structured backend with Node.js + Express, handling real-time data with MongoDB.</li>
    <li>Optimized performance and dev speed through modular code and Bootstrap UI.</li>
  </ul>
</div>

      </section>
    </div>
  );
}

export default About;
