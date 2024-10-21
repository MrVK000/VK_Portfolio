import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VK';
  homeGreetingPara = "Hii, It's Me";
  homeNamePara = "Vaikundamuthu";
  homeRolePara = "And I'm a ";
  role = "Frontend Developer";
  homeIntroPara = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo beatae ratione magni libero, est quaerat illo enim voluptates ullam quasi minima";

  navOptions = [
    {
      label: "Home",
      url: "#home",
    },
    {
      label: "About",
      url: "#about",
    },
    {
      label: "Skills",
      url: "#skills",
    },
    {
      label: "Services",
      url: "#services",
    },
    {
      label: "Portfolio",
      url: "#portfolios",
    },
    {
      label: "Contact",
      url: "#contacts",
    },
  ];


  socialLinks = [
    {
      label: "Instagram",
      icon: "fa-brands fa-instagram",
      link: "",
      description:"I'm very active in insta, So you can ping me there",
    },
    {
      label: "Twitter",
      icon: "fa-brands fa-twitter",
      link: "",
      description:"You can also reach me at twitter",
    },
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      link:"",
      description: "I'll check my LinkedIn everyday",
    },
    {
      label: "Call",
      icon: "fa-solid fa-phone",
      link: "",
      description:"Keep in touch with me in What's App",
    },
    {
      label: "Mail",
      icon: "fa-solid fa-envelope",
      link: "",
      description:"You can mail me anytime, I'll be available anytime!",
    },
  ];

  skillsList = [
    {
      label: "HTML",
      proficiency: 75,
    },
    {
      label: "CSS",
      proficiency: 70,
    },
    {
      label: "JavaScript & Typescript",
      proficiency: 80,
    },
    {
      label: "Angular",
      proficiency: 85,
    },
    {
      label: "NodeJs",
      proficiency: 60,
    },
  ];


  about = "About ";
  me = "Me";


  readMore = "Read More";




  aboutIntroPara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi impedit, vitae, unde fuga tenetur dolorum iure mollitia est fugiat alias vero aperiam cum, at repudiandae officia maxime non. Illo cum, necessitatibus quia nam dicta consequatur dolore nemo laborum quos rem ipsum. Minima, ex blanditiis? Ea, commodi! Totam nulla sequi dolore.";


  codingSkills = "Coding Skills";
  my = "My ";
  skills = "Skills";




  servicesLists = [
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi impedit, vitae, unde fuga tenetur dolorum iure mollitia est fugiat alias vero aperiam cum, at repudiandae officia maxime non. Illo cum, necessitatibus quia nam dicta consequatur dolore nemo laborum quos rem ipsum. Minima, ex blanditiis? Ea, commodi! Totam nulla sequi dolore.",
    },
    {
      icon: "fa-solid fa-bug",
      title: "Bug Fixing",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi impedit, vitae, unde fuga tenetur dolorum iure mollitia est fugiat alias vero aperiam cum, at repudiandae officia maxime non. Illo cum, necessitatibus quia nam dicta consequatur dolore nemo laborum quos rem ipsum. Minima, ex blanditiis? Ea, commodi! Totam nulla sequi dolore.",
    },
    {
      icon: "fa-solid fa-palette",
      title: "Web Designing",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi impedit, vitae, unde fuga tenetur dolorum iure mollitia est fugiat alias vero aperiam cum, at repudiandae officia maxime non. Illo cum, necessitatibus quia nam dicta consequatur dolore nemo laborum quos rem ipsum. Minima, ex blanditiis? Ea, commodi! Totam nulla sequi dolore.",
    },
  ];



  services = "Services";


  latest = "Latest ";
  projects = "Projects";

  projectsList = [
    {
      title: "Employee Management System",
      background: "../assets/images/Recoil.avif",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloremque odit! Assumenda ut quibusdam, dolor, rem modi maxime illo hic autem nisi, sunt sed saepe sapiente quia consequuntur facilis nihil.",
    },
    {
      title: "Theme Park Ticket booking system",
      background: "../assets/images/Recoil.avif",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloremque odit! Assumenda ut quibusdam, dolor, rem modi maxime illo hic autem nisi, sunt sed saepe sapiente quia consequuntur facilis nihil.",
    },
  ];


  contact = "Contact ";


  isVisible: boolean = false;;


  UiColor = "#ffa500";


  windowReload() {
    window.location.reload();
  }


  @HostListener('window:scroll') onWindowScroll() {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.isVisible = yOffset > 300; // Show button after 300px scroll
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



}
