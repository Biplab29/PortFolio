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
        <div name="Portfolio"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10" >
            <div>
                <h1 className="text-3xl font-bold mb-5" >  Skills </h1>
                {/* <span className="underline font-semibold"> Featured Projects </span> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                                <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
                                <div>
                                    <div className="px-2 font-bold text-xl mb-2"> {name}</div>
                                    <p className="px-2 text-gray-700"> I have some knowledge
                                    </p>
                                </div>
                                {/* <div className=" px-6 py-4 space-x-4 justyfy-around">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"> Video </button>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"> Source Code</button>
                                </div> */}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PortFolio