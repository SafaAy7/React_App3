import React, { useEffect } from 'react';

const DynamicText = () => {
        let array = ["SHOPPING","Magic 3D", "CAFEE","ARTISANA"];
        let mordIndex = 0;
        let letterIndex = 0;

    useEffect(() => {
        

        const target = document.getElementById("text-target");

        const createLetter = () => {
            const letter = document.createElement("span");    
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation = "anim 5s ease forwards";
            letter.textContent = array[mordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();

            }, 2000);

        };
        const loop = () => {    
            setTimeout(() => {
                if (mordIndex >= array.length) {
                    mordIndex = 0;
                    letterIndex = 0;
                    loop();
                } else if (letterIndex < array[mordIndex].length){
                    createLetter();
                    letterIndex++;
                    loop();

                } else {
                    letterIndex = 0;
                    mordIndex++;
                    setTimeout(() => {
                        loop();

                    }, 2000);
                }
            }, 80);
        };
        loop();
    }, []);

    return (
        <span className='dynamic-text'>
            <span className='simply'>WELCOME</span>
            <span id='text-target'></span>
        </span>
    )
    }

export default DynamicText;