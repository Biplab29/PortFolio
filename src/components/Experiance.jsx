import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.png"
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import spring from "../../public/springBoot.png"
function Experiance() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: css,
            name: "Css"
        },
        {
            id: 3,
            logo: java,
            name: "Java"
        },
        {
            id: 4,
            logo: oracle,
            name: "Oracle"
        },
        {
            id: 5,
            logo: spring,
            name: "Spring Boot"
        },
        {
            id: 6,
            logo: javascript,
            name: "JavaScript"
        }
    ]

    return (
        <div name="Expriance" 
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16" >
            <div>
                <h1 className="text-3xl font-bold mb-5" > Experiance </h1>
                <p className="">
                    I have Work on this Technology
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className="flex flex-col items-center justify-center border-[2px] rounded-full p-1 cursor-pointer md:w-[200px] md:h-[200px] hover:scale-110 duration-300" key={id}>
                                <img src={logo}
                                    className="w-[150px] rounded-full"
                                    alt="" 
                                />
                                <div>
                                    <div className=""> {name}</div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Experiance;