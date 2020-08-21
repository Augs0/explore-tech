codingJobs = [
    {
        "role": "Frontend Developer",
        "desc": "description",
        "skills": "Some skills you might like to explore for frontend development are HTML, CSS, Javascript, React.js, Vue.js, Angular.js, Bootstrap"
    },
    {
        "role": "Backend Developer",
        "desc": "description",
        "skills": "Some skills you might like to explore for backend development are Node.js, MySQL/SQL, PHP, Python"
    },
    {
        "role": "Mobile app developer",
        "desc": "description",
        "skills": ""
    }
]

creativeJobs = [
    {
        "role": "UI designer",
        "desc": "description",
        "skills": ""
    },
    {
        "role": "UX designer",
        "desc": "description",
        "skills": ""
    }
]

safetyJobs = [
    {
        "role": "Cyber-security analyst",
        "desc": "description",
        "skills": ""
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