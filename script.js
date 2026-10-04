// ==========================================
// WHAT SHOULD I DO NOW?
// SMART ACTIVITY GENERATOR
// ==========================================


// ==========================================
// MISSION DATABASE
// ==========================================

const missions = [

    // ==============================
    // CAREER
    // ==============================

    {
        title: "Solve 2 Coding Problems",
        description:
            "Pick two beginner or medium-level coding problems and solve them without looking at the solution first.",
        category: "Career",
        goal: "Career",
        time: 20,
        energy: "Medium",
        location: ["Home", "College", "Anywhere"],
        reason:
            "Small coding practice sessions build consistency and improve problem-solving skills."
    },

    {
        title: "Learn One New Technology Concept",
        description:
            "Choose one concept from Cloud, Full Stack, AI or DevOps and spend this session understanding its basics.",
        category: "Career",
        goal: "Career",
        time: 30,
        energy: "Medium",
        location: ["Home", "College", "Anywhere"],
        reason:
            "Learning one focused concept is easier to complete than trying to study an entire technology at once."
    },

    {
        title: "Improve Your GitHub Profile",
        description:
            "Open one of your projects, improve its README, add screenshots or clean up the project description.",
        category: "Career",
        goal: "Career",
        time: 20,
        energy: "Low",
        location: ["Home", "College", "Anywhere"],
        reason:
            "A cleaner GitHub profile makes your projects easier for recruiters and teammates to understand."
    },

    {
        title: "Build One Small Feature",
        description:
            "Open one of your existing projects and add one useful feature instead of starting another project.",
        category: "Career",
        goal: "Career",
        time: 60,
        energy: "High",
        location: ["Home", "College"],
        reason:
            "Finishing and improving existing projects can be more valuable than constantly starting new ones."
    },

    {
        title: "Write Your Career Goals",
        description:
            "Write down three technical skills you want to improve and one project you want to complete next.",
        category: "Career",
        goal: "Career",
        time: 10,
        energy: "Low",
        location: ["Home", "College", "Anywhere"],
        reason:
            "A clear next target makes it easier to decide what to work on."
    },


    // ==============================
    // STUDY
    // ==============================

    {
        title: "Review One Topic",
        description:
            "Choose one topic from your current syllabus and revise only its important definitions, concepts and examples.",
        category: "Study",
        goal: "Study",
        time: 20,
        energy: "Low",
        location: ["Home", "College", "Anywhere"],
        reason:
            "Focused revision helps you make progress even when you don't have much energy."
    },

    {
        title: "Create a One-Page Revision Sheet",
        description:
            "Take one difficult topic and summarize its main points, formulas and diagrams on one page.",
        category: "Study",
        goal: "Study",
        time: 30,
        energy: "Medium",
        location: ["Home", "College"],
        reason:
            "Summarizing forces you to identify the most important information."
    },

    {
        title: "Practice 5 Questions",
        description:
            "Pick five questions from a subject you are currently studying and try to answer them without notes.",
        category: "Study",
        goal: "Study",
        time: 30,
        energy: "Medium",
        location: ["Home", "College", "Anywhere"],
        reason:
            "Active practice shows what you actually remember instead of just rereading notes."
    },

    {
        title: "Teach a Topic to Yourself",
        description:
            "Explain one topic aloud as if you were teaching it to another student.",
        category: "Study",
        goal: "Study",
        time: 20,
        energy: "Medium",
        location: ["Home", "College"],
        reason:
            "If you can explain a topic simply, you probably understand it well."
    },


    // ==============================
    // HEALTH
    // ==============================

    {
        title: "Take a Short Walk",
        description:
            "Take a relaxed walk and avoid your phone for the entire walk.",
        category: "Health",
        goal: "Health",
        time: 20,
        energy: "Low",
        location: ["Home", "College", "Anywhere"],
        reason:
            "A short walk can give you a break from sitting and screen time."
    },

    {
        title: "Do a Quick Workout",
        description:
            "Complete a simple full-body workout using squats, lunges, push-ups and stretching.",
        category: "Health",
        goal: "Health",
        time: 20,
        energy: "High",
        location: ["Home", "College"],
        reason:
            "A short workout is easier to start than planning a long exercise session."
    },

    {
        title: "Stretch and Reset",
        description:
            "Spend a few minutes stretching your neck, shoulders, back and legs.",
        category: "Health",
        goal: "Health",
        time: 10,
        energy: "Low",
        location: ["Home", "College", "Anywhere"],
        reason:
            "Stretching is a simple way to reset after sitting or studying."
    },


    // ==============================
    // RELAX
    // ==============================

    {
        title: "Take a Screen Break",
        description:
            "Put your phone away and spend the next few minutes doing absolutely nothing digital.",
        category: "Relax",
        goal: "Relax",
        time: 10,
        energy: "Low",
        location: ["Home", "College", "Anywhere"],
        reason:
            "Sometimes the best activity is giving your brain a short break."
    },

    {
        title: "Listen to Your Favorite Music",
        description:
            "Put on a few songs you enjoy and simply relax without multitasking.",
        category: "Relax",
        goal: "Relax",
        time: 20,
        energy: "Low",
        location: ["Home", "College", "Anywhere"],
        reason:
            "A short intentional break can help you return to your tasks with a clearer mind."
    },

    {
        title: "Clean Your Workspace",
        description:
            "Clear unnecessary items from your desk and organize the things you use regularly.",
        category: "Relax",
        goal: "Relax",
        time: 20,
        energy: "Medium",
        location: ["Home", "College"],
        reason:
            "A cleaner environment can make it easier to focus afterward."
    },


    // ==============================
    // CREATIVE
    // ==============================

    {
        title: "Design a Mini Website",
        description:
            "Create a simple landing page for any imaginary product, event or startup.",
        category: "Creative",
        goal: "Creative",
        time: 30,
        energy: "High",
        location: ["Home", "College"],
        reason:
            "Small creative projects improve both imagination and practical skills."
    },

    {
        title: "Write Down 10 Ideas",
        description:
            "Write ten ideas for apps, websites, businesses or hackathon projects. Don't judge them yet.",
        category: "Creative",
        goal: "Creative",
        time: 20,
        energy: "Medium",
        location: ["Home", "College", "Anywhere"],
        reason:
            "Generating many ideas helps you discover interesting ones you may not normally consider."
    },

    {
        title: "Create Something From Scratch",
        description:
            "Draw, design, write, code or create something small without following a tutorial.",
        category: "Creative",
        goal: "Creative",
        time: 30,
        energy: "High",
        location: ["Home", "College"],
        reason:
            "Creating without a tutorial helps develop independent thinking."
    }

];


// ==========================================
// USER PREFERENCES
// ==========================================

let selectedTime = 10;

let selectedEnergy = "Low";

let selectedGoal = "Career";

let selectedLocation = "Home";

let currentMission = null;


// ==========================================
// HISTORY
// ==========================================

let missionHistory =
    JSON.parse(
        localStorage.getItem(
            "nowDoHistory"
        )
    ) || [];


// ==========================================
// ELEMENTS
// ==========================================

const generateBtn =
    document.getElementById(
        "generateBtn"
    );

const anotherBtn =
    document.getElementById(
        "anotherBtn"
    );

const completeBtn =
    document.getElementById(
        "completeBtn"
    );

const favoriteBtn =
    document.getElementById(
        "favoriteBtn"
    );

const missionCard =
    document.getElementById(
        "missionCard"
    );

const emptyMission =
    document.getElementById(
        "emptyMission"
    );

const historyContainer =
    document.getElementById(
        "historyContainer"
    );

const clearHistoryBtn =
    document.getElementById(
        "clearHistoryBtn"
    );


// ==========================================
// OPTION BUTTONS
// ==========================================

const timeOptions =
    document.querySelectorAll(
        ".time-option"
    );

const energyOptions =
    document.querySelectorAll(
        ".energy-option"
    );

const goalOptions =
    document.querySelectorAll(
        ".goal-option"
    );

const locationOptions =
    document.querySelectorAll(
        ".location-option"
    );


// ==========================================
// TIME SELECTION
// ==========================================

timeOptions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                timeOptions.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                selectedTime =
                    Number(
                        button.dataset.value
                    );

            }
        );

    }
);


// ==========================================
// ENERGY SELECTION
// ==========================================

energyOptions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                energyOptions.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                selectedEnergy =
                    button.dataset.value;

            }
        );

    }
);


// ==========================================
// GOAL SELECTION
// ==========================================

goalOptions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                goalOptions.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                selectedGoal =
                    button.dataset.value;

            }
        );

    }
);


// ==========================================
// LOCATION SELECTION
// ==========================================

locationOptions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                locationOptions.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                selectedLocation =
                    button.dataset.value;

            }
        );

    }
);


// ==========================================
// GENERATE MISSION
// ==========================================

generateBtn.addEventListener(
    "click",
    function () {

        generateMission(false);

    }
);


// ==========================================
// ANOTHER MISSION
// ==========================================

anotherBtn.addEventListener(
    "click",
    function () {

        generateMission(true);

    }
);


// ==========================================
// GENERATE FUNCTION
// ==========================================

function generateMission(another) {

    let suitableMissions =
        missions.filter(
            function (mission) {

                const timeMatch =
                    selectedTime >=
                    mission.time;

                const energyMatch =
                    mission.energy ===
                    selectedEnergy ||
                    selectedEnergy === "High";

                const goalMatch =
                    mission.goal ===
                    selectedGoal;

                const locationMatch =
                    mission.location.includes(
                        selectedLocation
                    );

                return (
                    timeMatch &&
                    energyMatch &&
                    goalMatch &&
                    locationMatch
                );

            }
        );


    // If no exact match,
    // relax the energy requirement.

    if (
        suitableMissions.length === 0
    ) {

        suitableMissions =
            missions.filter(
                function (mission) {

                    return (
                        selectedTime >=
                            mission.time &&
                        mission.goal ===
                            selectedGoal &&
                        mission.location.includes(
                            selectedLocation
                        )
                    );

                }
            );

    }


    // If still no match,
    // use goal-only matching.

    if (
        suitableMissions.length === 0
    ) {

        suitableMissions =
            missions.filter(
                function (mission) {

                    return (
                        mission.goal ===
                        selectedGoal
                    );

                }
            );

    }


    // Final fallback.

    if (
        suitableMissions.length === 0
    ) {

        suitableMissions =
            missions;

    }


    // Avoid showing the same
    // mission when possible.

    if (
        another &&
        suitableMissions.length > 1 &&
        currentMission
    ) {

        const differentMissions =
            suitableMissions.filter(
                function (mission) {

                    return (
                        mission.title !==
                        currentMission.title
                    );

                }
            );


        if (
            differentMissions.length > 0
        ) {

            suitableMissions =
                differentMissions;

        }

    }


    const randomIndex =
        Math.floor(
            Math.random() *
            suitableMissions.length
        );


    currentMission =
        suitableMissions[
            randomIndex
        ];


    displayMission(
        currentMission
    );


    saveGeneratedMission(
        currentMission
    );


    updateStats();

}


// ==========================================
// DISPLAY MISSION
// ==========================================

function displayMission(mission) {

    document.getElementById(
        "missionCategory"
    ).innerText =
        mission.category.toUpperCase();


    document.getElementById(
        "missionTime"
    ).innerText =
        mission.time + " MIN";


    document.getElementById(
        "missionTitle"
    ).innerText =
        mission.title;


    document.getElementById(
        "missionDescription"
    ).innerText =
        mission.description;


    document.getElementById(
        "detailTime"
    ).innerText =
        mission.time + " minutes";


    document.getElementById(
        "detailEnergy"
    ).innerText =
        selectedEnergy;


    document.getElementById(
        "detailGoal"
    ).innerText =
        selectedGoal;


    document.getElementById(
        "missionReason"
    ).innerText =
        mission.reason;


    missionCard.classList.remove(
        "hidden"
    );

    emptyMission.classList.add(
        "hidden"
    );


    favoriteBtn.innerText =
        "Add to Favorites";

}


// ==========================================
// SAVE GENERATED MISSION
// ==========================================

function saveGeneratedMission(
    mission
) {

    const item = {

        id: Date.now(),

        title: mission.title,

        category: mission.category,

        time: mission.time,

        completed: false,

        favorite: false,

        date:
            new Date().toLocaleDateString(
                "en-IN"
            )

    };


    missionHistory.unshift(
        item
    );


    if (
        missionHistory.length > 20
    ) {

        missionHistory =
            missionHistory.slice(
                0,
                20
            );

    }


    saveHistory();

    displayHistory();

}


// ==========================================
// COMPLETE CURRENT MISSION
// ==========================================

completeBtn.addEventListener(
    "click",
    function () {

        if (!currentMission) {
            return;
        }


        const item =
            missionHistory.find(
                function (historyItem) {

                    return (
                        historyItem.title ===
                        currentMission.title
                    );

                }
            );


        if (!item) {
            return;
        }


        item.completed = true;


        saveHistory();

        displayHistory();

        updateStats();


        completeBtn.innerText =
            "Completed ✓";


        completeBtn.disabled =
            true;


        alert(
            "Mission completed! Great job."
        );

    }
);


// ==========================================
// FAVORITE CURRENT MISSION
// ==========================================

favoriteBtn.addEventListener(
    "click",
    function () {

        if (!currentMission) {
            return;
        }


        const item =
            missionHistory.find(
                function (historyItem) {

                    return (
                        historyItem.title ===
                        currentMission.title
                    );

                }
            );


        if (!item) {
            return;
        }


        item.favorite =
            !item.favorite;


        if (item.favorite) {

            favoriteBtn.innerText =
                "Added to Favorites ✓";

        }

        else {

            favoriteBtn.innerText =
                "Add to Favorites";

        }


        saveHistory();

        displayHistory();

        updateStats();

    }
);


// ==========================================
// SAVE HISTORY
// ==========================================

function saveHistory() {

    localStorage.setItem(
        "nowDoHistory",
        JSON.stringify(
            missionHistory
        )
    );

}


// ==========================================
// DISPLAY HISTORY
// ==========================================

function displayHistory() {

    historyContainer.innerHTML =
        "";


    if (
        missionHistory.length === 0
    ) {

        historyContainer.innerHTML = `

            <div class="history-empty">

                No missions generated yet.

            </div>

        `;

        return;

    }


    missionHistory.forEach(
        function (item) {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "history-item";


            let statusText;

            let statusClass;


            if (item.completed) {

                statusText =
                    "Completed";

                statusClass =
                    "";

            }

            else if (item.favorite) {

                statusText =
                    "Favorite";

                statusClass =
                    "favorite";

            }

            else {

                statusText =
                    "Generated";

                statusClass =
                    "";

            }


            element.innerHTML = `

                <div class="history-info">

                    <h4>
                        ${escapeHTML(
                            item.title
                        )}
                    </h4>

                    <p>
                        ${escapeHTML(
                            item.category
                        )}
                        •
                        ${item.time} minutes
                        •
                        ${item.date}
                    </p>

                </div>


                <span
                    class="history-status ${statusClass}"
                >
                    ${statusText}
                </span>

            `;


            historyContainer.appendChild(
                element
            );

        }
    );

}


// ==========================================
// CLEAR HISTORY
// ==========================================

clearHistoryBtn.addEventListener(
    "click",
    function () {

        if (
            missionHistory.length === 0
        ) {

            alert(
                "There is no mission history to clear."
            );

            return;

        }


        const confirmClear =
            confirm(
                "Clear all mission history?"
            );


        if (!confirmClear) {
            return;
        }


        missionHistory = [];


        saveHistory();

        displayHistory();

        updateStats();

    }
);


// ==========================================
// UPDATE STATS
// ==========================================

function updateStats() {

    const total =
        missionHistory.length;


    const completed =
        missionHistory.filter(
            item =>
                item.completed
        ).length;


    const favorites =
        missionHistory.filter(
            item =>
                item.favorite
        ).length;


    document.getElementById(
        "totalMissions"
    ).innerText =
        total;


    document.getElementById(
        "completedMissions"
    ).innerText =
        completed;


    document.getElementById(
        "favoriteMissions"
    ).innerText =
        favorites;

}


// ==========================================
// HTML SECURITY
// ==========================================

function escapeHTML(text) {

    return text
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


// ==========================================
// INITIAL LOAD
// ==========================================

displayHistory();

updateStats();  