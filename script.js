codingJobs = [
    {
        "role": "Frontend Developer",
        "desc": "Frontend development deals with parts of a site or application that the user interacts with. There is often a misconception that frontend developers are effectively designers, but this is not strictly true. Sometimes frontend developers do deal with design, but often they are responsible for implementing designs built by others.",
        "skills": "Some skills you might like to explore for frontend development are HTML, CSS (potentially preprocessors like SASS), Javascript, frameworks like React, Vue, and Angular, CSS frameworks e.g. Bootstrap, Tailwind, as well as skills helpful across development like version control (e.g. Git) and toolkits like Gulp, Parcel, Webpack, etc. Frontend developers should also aim to be mindful of responsive / mobile-first design as well as accessibility, as these are part of the user's experience in interacting with the site or app."
    },
    {
        "role": "Backend Developer",
        "desc": "Backend development handles parts of the site or application that users do not see. This includes things like writing the code that actually makes different parts of the site work and interact with one another, servers, databases, and security.",
        "skills": "Some skills you might like to explore for backend development are server-side languages like PHP, Python, Ruby, Ruby On Rails, Java, Javascript, server management like Node.js, database languages like MySQL and MongoDB, and, potentially, hosting server skills like AWS. It depends on what kind of work you're nterested in! It can also be helpful to have a good understanding of frontend skills like HTML and CSS, and of course skills like version control are incredibly useful."
    },
    {
        "role": "Fullstack Developer",
        "desc": "Fullstack development combines both frontend development and backend development. You may use both to a similar degree or potentially use more of one skillset than the other. This can vary from project to project or sector to sector.",
        "skills": "Basically, you are looking to have a mix of skills combining what has been outlined in frontend and backend developemnt. What skills you choose to focus on depends on your interests and goals."
    },
    {
        "role": "Mobile app developer",
        "desc": "As the name suggests, mobile app development focuses on creating applications for mobile devices. Developers may focus on Apple/iOS or Android development, and technical skills vary between these two.",
        "skills": "iOS developers often use Objective-C or Swift, with Swift being the more modern of the two. Android developers often use Java. That being said, React Native is a growing area of development which involves Javascript/React. Kotlin is also another option. Knowing other programming languages is also beneficial."
    }
]

creativeJobs = [
    {
        "role": "UI/UX designer",
        "desc": "You may see UI designer or UX designer listed separately or sometimes the two are combined. UI stands for 'user interface' whereas UX stands for 'user experience'. The two often overlap and effectively what this field of work involves is designing sites and apps by creating mockups to be researched and tested, taking into account the journey the user goes on when using the platform and whether it's a good and intutitve experience for them. They may also be in charge of coming up with styling guides for developers to follow (e.g. fonts, colours, etc.).",
        "skills": "Sketch or other wireframing tools like Adobe XD or Figma, Photoshop, Writing and research skills"
    }
]

safetyJobs = [
    {
        "role": "Cyber-security analyst/technician",
        "desc": "Cyber-security is a growing and in-demand part of technology that handles the security of sites, apps, databases, etc. Working in cyber-security, you're trying to keep something safe, as well as being prepared in dealing with any kind of hack or attack. Cyber-security technicians and analysts often are involved in ethical hacking, that is trying to purposefully break into systems and platforms to test how secure they are and to fix any potential problems that could lead to damage.",
        "skills": "There are a number of certificates that may help you progress in cyber-security, such as CISSP. Languages often linked to this line of work include Python, Jvascript, SQL, PHP, C, C++ and Assembly, however, you should be familiar with what the project or your company calls for. You may want to look into Virtual Machines, effectively computers inside computers, which cyber-security technicians use for activities like examining malware and testing across operating systems."
    }
]


businessJobs = [
    {
        "role": "Business intelligence analyst",
        "desc": "description",
        "skills": ""
    },
    {
        "role": "Consultant",
        "desc": "description",
        "skills": ""
    }
]

dataJobs = [
    {
        "role": "Data scientist",
        "desc": "description",
        "skills": ""
    }
]

otherJobs = [
    {
        "role": "QA tester",
        "desc": "description",
        "skills": ""
    },
    {
        "role": "DevOps Engineer",
        "desc": "description",
        "skills": ""
    }
]


const questionContent = document.querySelector('.buttons-menu');
const suggestionsBox = document.querySelector('.suggestions');

const codeBtn = document.getElementById('coding-btn');
codeBtn.addEventListener('click', () => {
    showCodingJobs();
})

const creativeBtn = document.getElementById('creative-btn');
creativeBtn.addEventListener('click', () => {
    showCreativeJobs();
})

const safetyBtn = document.getElementById('safety-btn');
safetyBtn.addEventListener('click', () => {
    showSafetyJobs();
})

const businessBtn = document.getElementById('business-btn');
businessBtn.addEventListener('click', () => {
    showBusinessJobs();
})

const dataBtn = document.getElementById('data-btn');
dataBtn.addEventListener('click', () => {
    showDataJobs();
})

const somethingBtn = document.getElementById('something-btn');
somethingBtn.addEventListener('click', () => {
    showOtherJobs();
})

function showCodingJobs() {
    suggestionsBox.innerHTML = ''
    codingJobs.forEach(function (job) {
        const { role, desc, skills } = job
        suggestionsBox.innerHTML += `
        <div class ="card">
        <p class="highlight">Role:</p>
        <p>${role}</p>
        <p class="highlight">Description:</p>
        <p>${desc}</p>
        <p class="highlight">Common skills used:</p>
        <p>${skills}</p>
        </div>
        `
    })
}

function showCreativeJobs() {
    suggestionsBox.innerHTML = ''
    creativeJobs.forEach(function (job) {
        const { role, desc, skills } = job
        suggestionsBox.innerHTML += `
        <div class ="card">
        <p class="highlight">Role:</p>
        <p>${role}</p>
        <p class="highlight">Description:</p>
        <p>${desc}</p>
        <p class="highlight">Common skills used:</p>
        <p>${skills}</p>
        </div>
        `
    })
}

function showSafetyJobs() {
    suggestionsBox.innerHTML = ''
    safetyJobs.forEach(function (job) {
        const { role, desc, skills } = job
        suggestionsBox.innerHTML += `
        <div class ="card">
        <p class="highlight">Role:</p>
        <p>${role}</p>
        <p class="highlight">Description:</p>
        <p>${desc}</p>
        <p class="highlight">Common skills used:</p>
        <p>${skills}</p>
        </div>
        `
    })
}

function showBusinessJobs() {
    suggestionsBox.innerHTML = ''
    businessJobs.forEach(function (job) {
        const { role, desc, skills } = job
        suggestionsBox.innerHTML += `
        <div class ="card">
        <p class="highlight">Role:</p>
        <p>${role}</p>
        <p class="highlight">Description:</p>
        <p>${desc}</p>
        <p class="highlight">Common skills used:</p>
        <p>${skills}</p>
        </div>
        `
    })
}

function showDataJobs() {
    suggestionsBox.innerHTML = ''
    dataJobs.forEach(function (job) {
        const { role, desc, skills } = job
        suggestionsBox.innerHTML += `
        <div class ="card">
        <p class="highlight">Role:</p>
        <p>${role}</p>
        <p class="highlight">Description:</p>
        <p>${desc}</p>
        <p class="highlight">Common skills used:</p>
        <p>${skills}</p>
        </div>
        `
    })
}

function showOtherJobs() {
    suggestionsBox.innerHTML = ''
    otherJobs.forEach(function (job) {
        const { role, desc, skills } = job
        suggestionsBox.innerHTML += `
        <div class ="card">
        <p class="highlight">Role:</p>
        <p>${role}</p>
        <p class="highlight">Description:</p>
        <p>${desc}</p>
        <p class="highlight">Common skills used:</p>
        <p>${skills}</p>
        </div>
        `
    })
}