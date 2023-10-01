const whatWeDos = [
  {
    icon: "/image/we-do/1.png",
    title: "Recruiting",
    paragraph:
      "Accurate Placement has been recruiting since 1996. We deliver bright, intelligent candidates to our client companies. We offer two pricing models to choose from which will allow you to choose a custom-designed structure that works best for you. Please call today to inquire about how we can develop a plan for your next hire!",
  },
  {
    icon: "/image/we-do/2.png",
    title: "Temporary Staffing",
    paragraph:
      "We have been a preferred vendor for hundreds of companies and have developed a state-of-the art screening system that assures only the best temps for your company. This option covers both immediate and long-term needs, whether that is one day or one year.",
  },
  {
    icon: "/image/we-do/3.png",
    title: "Temp-to-Hire",
    paragraph:
      "This option gives you the opportunity to make an evaluation first-hand before making the final hiring decision. Additionally, employees starting as Temporary employees can be converted to Temp to Hire.",
  },
  {
    icon: "/image/we-do/4.png",
    title: "Consulting",
    paragraph:
      "This is an hourly service to provide consulting for recruiting, screening, testing, interviewing, hiring, onboarding, job descriptions, job posting, payroll, employee documentation, employee relations, and terminations.",
  },
  {
    icon: "/image/we-do/5.png",
    title: "Testing",
    paragraph:
      "Positions us as the “employer of record” while you and the candidate you recruited determine your long-range compatibility. We offer direct deposit to employees and weekly paychecks.",
  },
  {
    icon: "/image/we-do/6.png",
    title: "Payrolling Services",
    paragraph:
      "We offer online testing services or proctored testing which are done in our office. You can choose from hundreds of assessments for both Skills and Behavioral. This gives you another tool in which to determine a candidate’s suitability for your job.",
  },
];
const container = document.getElementById("whatWeDoContainer");

whatWeDos.forEach((weDo) => {
  const div = document.createElement("div");
  div.className =
    "p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";

  const img = document.createElement("img");
  img.src = weDo.icon;
  img.alt = "";
  img.className = "w-10";
  div.appendChild(img);

  const h5 = document.createElement("h5");
  h5.className =
    "my-5 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white";
  h5.textContent = weDo.title;
  div.appendChild(h5);

  const p = document.createElement("p");
  p.className = "mb-3 font-normal text-gray-500 dark:text-gray-400";
  p.textContent = weDo.paragraph;
  div.appendChild(p);

  container.appendChild(div);
});

// Category
const categories = [
  {
    icon: "/image/category/1.png",
    category: "Customer service",
  },
  {
    icon: "/image/category/2.png",
    category: "Data Entry and Administrative",
  },
  {
    icon: "/image/category/3.png",
    category: "Writing and Content Creation",
  },
  {
    icon: "/image/category/4.png",
    category: "Design and Creative",
  },
  {
    icon: "/image/category/5.png",
    category: "Programming and Development",
  },
  {
    icon: "/image/category/6.png",
    category: "Marketing and Social Media",
  },
  {
    icon: "/image/category/7.png",
    category: "Education and Teaching",
  },
  {
    icon: "/image/category/8.png",
    category: "Sales and Business Development",
  },
  {
    icon: "/image/category/9.png",
    category: "Healthcare and Wellness",
  },
  {
    icon: "/image/category/10.png",
    category: "Translation and Language Services",
  },
  {
    icon: "/image/category/7.png",
    category: "Finance and Accounting",
  },
  {
    icon: "/image/category/12.png",
    category: "Project Management",
  },
  {
    icon: "/image/category/13.png",
    category: "Human Resources",
  },
  {
    icon: "/image/category/14.png",
    category: "Research and Analysis",
  },
  {
    icon: "/image/category/15.png",
    category: "Legal and Paralegal",
  },
];

const jobCategory = document.getElementById("jobCategoryContainer");

categories.forEach((category) => {
  const outerDiv = document.createElement("div");

  const innerDiv = document.createElement("div");
  innerDiv.className =
    "hover:shadow-md px-5 py-4 border border-[#008000] rounded-md h-[120px]";

  const img = document.createElement("img");
  img.src = category.icon;
  img.alt = "";
  img.height = 24;
  img.width = 24;
  innerDiv.appendChild(img);

  const h5 = document.createElement("h5");
  h5.className = "font-bold mt-2";
  h5.textContent = category.category;
  innerDiv.appendChild(h5);

  outerDiv.appendChild(innerDiv);
  jobCategory.appendChild(outerDiv);
});

// Available jobs

const availableJobs = [
  {
    title: "Customer Service",
    type: "Remote, hybrid",
    description: [
      "Remote Customer Service Representative",
      "Virtual Call Center Agent",
      "Remote Support Specialist",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Data Entry and Administrative",
    type: "Remote, hybrid",
    description: [
      "Remote Data Entry Clerk",
      "Virtual Administrative Assistant",
      "Remote Data Analyst",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Writing and Content Creation",
    type: "Remote, hybrid",
    description: [
      "Remote Content Writer",
      "Virtual Copywriter",
      "Remote Blog Writer",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Design and Creative",
    type: "Remote, hybrid",
    description: [
      "Remote Graphic Designer",
      "Virtual Illustrator",
      "Remote UX/UI Designer",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Programming and Development",
    type: "Remote, hybrid",
    description: [
      "Remote Full Stack Engineer",
      "Virtual Front-End Developer",
      "Remote Software Developer",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Marketing and Social Media",
    type: "Remote, hybrid",
    description: [
      "Remote Digital Marketer",
      "Virtual Social Media Manager",
      "Remote SEO Specialist",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Education and Teaching",
    type: "Remote, hybrid",
    description: [
      "Remote Online Tutor",
      "Virtual ESL Teacher",
      "Remote Course Developer",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Sales and Business Development",
    type: "Remote, hybrid",
    description: [
      "Remote Sales Representative",
      "Virtual Business Development Manager",
      "Remote Account Executive",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Healthcare and Wellness",
    type: "Remote, hybrid",
    description: [
      "Remote Telehealth Nurse",
      "Virtual Health Coach",
      "Remote Medical Transcriptionist",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Translation and Language Services",
    type: "Remote, hybrid",
    description: [
      "Remote Translator",
      "Virtual Interpreter",
      "Remote Language Tutor",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Finance and Accounting",
    type: "Remote, hybrid",
    description: [
      "Remote Bookkeeper",
      "Virtual Financial Analyst",
      "Remote Tax Preparer",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Project Management",
    type: "Remote, hybrid",
    description: [
      "Remote Project Manager",
      "Virtual Scrum Master",
      "Remote Product Owner",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Human Resources",
    type: "Remote, hybrid",
    description: [
      "Remote HR Coordinator",
      "Virtual Talent Acquisition Specialist",
      "Remote HR Consultant",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Research and Analysis",
    type: "Remote, hybrid",
    description: [
      "Remote Market Researcher",
      "Virtual Data Analyst",
      "Remote Research Assistant",
      "Salary : $25 - $35",
    ],
  },
  {
    title: "Legal and Paralegal",
    type: "Remote, hybrid",
    description: [
      "Remote Legal Researcher",
      "Virtual Paralegal",
      "Remote Contract Reviewer",
      "Salary : $25 - $35",
    ],
  },
];

const availableJobsContainer = document.getElementById(
  "availableJobsContainer"
);

availableJobs.forEach((job) => {
  const outerDiv = document.createElement("div");

  const innerDiv = document.createElement("div");
  innerDiv.className =
    "px-6 py-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";

  const titleLink = document.createElement("a");
  titleLink.href = "#";
  const h5 = document.createElement("h5");
  h5.className = "mb-0 font-bold tracking-tight text-gray-900 dark:text-white";
  h5.textContent = job.title;
  titleLink.appendChild(h5);
  innerDiv.appendChild(titleLink);

  const typeP = document.createElement("p");
  typeP.className = "text-gray-500 text-sm";
  typeP.textContent = job.type;
  innerDiv.appendChild(typeP);

  const ul = document.createElement("ul");
  ul.className = "list-disc list-inside pl-5 mt-2 space-y-1";
  job.description.forEach((des) => {
    const li = document.createElement("li");
    li.className = "text-gray-600";
    li.textContent = des;
    ul.appendChild(li);
  });
  innerDiv.appendChild(ul);

  const applyLink = document.createElement("a");
  applyLink.href = "http://careers.telujnternational.com/apply.php";
  applyLink.target = "__blank";
  applyLink.className =
    "font-semibold inline-flex items-center px-3 py-2 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4";

  const applyText = document.createTextNode("Apply now");
  applyLink.appendChild(applyText);

  const img = document.createElement("img");
  img.className = "w-3.5 h-3.5 ml-2";
  img.alt = "Arrow Icon";
  img.src = "/image/arrow-right.svg"; // Replace with the actual path to your arrow icon image
  applyLink.appendChild(img);

  innerDiv.appendChild(applyLink);
  outerDiv.appendChild(innerDiv);
  availableJobsContainer.appendChild(outerDiv);
});

// Review
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
});
var swiper = new Swiper(".tabletSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
});
var swiper = new Swiper(".mobileSwipter", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
});
