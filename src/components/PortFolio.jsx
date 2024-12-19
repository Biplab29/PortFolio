import React from 'react'
import java from "../../public/java.png"
import c from "../../public/c.png"
import sql from "../../public/sql.jpg"
import javascript from "../../public/javascript.png"
import mongoDB from "../../public/mongodb.png"
import express from "../../public/express.png"
import react from "../../public/react.png"
import nodejs from "../../public/node.png"
function PortFolio() {
    const cardItem = [
      {
        id: 1,
        logo: c,
        name:"C"
      },
      {
        id:2,
        logo:java,
        name:"Java"
      },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id: 4,
            logo: react,
            name: "ReactJS"
        },
        {
            id: 5,
            logo: nodejs,
            name: "NodeJS"
        },
        {
            id: 6,
            logo: express,
            name: "Express"
        },
        {
            id: 7,
            logo: mongoDB,
            name: "MongoDB"
        },
        {
            id: 8,
            logo: sql,
            name: "SQL"
            
        }
        
    ]

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-30 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
          {
            cardItem.map(({ id, logo, name }) => (
              <div key={id} className="text-center p-2 cursor-pointer hover:scale-110 duration-300">
                <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto" alt={name} />
                <div>
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700">I have some knowledge in {name}.</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
