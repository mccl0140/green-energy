//create resources
const resources = [
    {
        heading: "Solar Power",
        path: "./images/solar.jpg",
        body: "The most prevalent type of renewable energy, solar power is typically produced using photovoltaic cells, which capture sunlight and turn it into electricity. Solar energy is also used to heat buildings and water, provide natural lighting and cook food. Solar technologies have become inexpensive enough to power everything from small hand-held gadgets to entire neighborhoods."
    },
    {
        heading: "Hydro Power",
        path: "./images/dam.jpg",
        body: "Also called hydroelectric power, hydropower is generated by the Earth's water cycle, including evaporation, rainfall, tides and the force of water running through a dam. Hydropower depends on high precipitation levels to produce significant amounts of energy."
    },
    {
        heading: "Wind Power",
        path: "./images/wind.jpg",
        body: "Air flow on the earth's surface can be used to push turbines, with stronger winds producing more energy. High-altitude sites and areas just offshore tend to provide the best conditions for capturing the strongest winds. According to a 2009 study, a network of land-based, 2.5-megawatt wind turbines in rural areas operating at just 20% of their rated capacity could supply 40 times the current worldwide consumption of energy."
    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

currentContent.innerHTML = `<article>
                            <h3>${resources[0].heading}</h3>
                            <img src="${resources[0].path}">
                            <p>${resources[0].body}</p>
                            </article>`;

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    console.log(ev.target.textContent);
    /*console.log("content loader works");*/

    let eventTarget = ev.target.textContent;
    // console.log(eventTarget);

    if (eventTarget === "Tip 1") {
        currentContent.innerHTML = `<article>
                                    <h3>${resources[0].heading}</h3>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>`;
    } else if (eventTarget === "Tip 2") {
        currentContent.innerHTML = `<article>
                                    <h3>${resources[1].heading}</h3>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>
                                    </article`;
    } else {
        currentContent.innerHTML = `<article>
                                    <h3>${resources[2].heading}</h3>
                                    <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>
                                    </article>`;
    }

    //move id to the current button
    //ev.target.id = "active";
    for (let btn of btns) {
        if (btn.id) {
            btn.removeAttribute("id");
        }
    }

    ev.target.id = "active";
}

/* REGISTERING EVENT CONTENT */
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);
btns[3].addEventListener("click", contentLoader);