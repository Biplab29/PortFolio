import React from 'react';
import html from "../../public/html.png";
import css from "../../public/css.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/springBoot.png";

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: css,
            name: "CSS"
        },
        {
            id: 3,
            logo: java,
            name: "Java"
        },
        {
            id: 4,
            logo: javascript,
            name: "JavaScript"
        },
    ];

    return (
        <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <p>I have worked on these technologies:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 my-3">
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className="flex flex-col items-center justify-center border-2 rounded-full p-4 cursor-pointer hover:scale-110 duration-300" key={id}>
                                <img src={logo} className="w-[150px] h-[150px] rounded-full" alt={name} />
                                <p className="mt-2 text-center">{name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Experience;
