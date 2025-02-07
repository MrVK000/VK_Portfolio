import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { contactDetails } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  title = 'VK';
  homeGreetingPara = "Hii, It's Me";
  homeNamePara = "Vaikundamuthu";
  homeRolePara = "And I'm a ";
  role = "Full-Stack Developer";
  homeIntroPara = `Hey there! I'm a full-stack developer and having experience in <b>Angular</b> and <b>Spring Boot</b>. I can build a user friendly web application and scalable backend application. I can help you to convert your ideas into reality!`;

  about = "About ";
  me = "Me";

  readMore = "Read More";

  aboutIntroPara = `Hi! I'm a <b>Full-Stack Developer</b>, specializing in <b>Angular</b> and <b>Spring Boot</b>. I enjoy building scalable web applications, crafting user-friendly interfaces, and building APIs.
  Check out my projects and feel free to connect!`;

  aboutIntroModalContent = `I'm a <b>Full-Stack Developer</b> with 2 years of experience, expertize in <b>Angular for frontend</b> and <b>Spring Boot for backend</b>. I have a deep passion for building <b>scalable, high-performance web applications</b> that offer seamless user experiences, creating user-friendly application, and optimizing backend performance.<br><br>
  <span></span>I enjoy working on both <b>frontend and backend</b>, ensuring that applications are not only visually appealing but also optimized, secure, and efficient. From crafting sleek UI designs to developing RESTful APIs and managing databases, I thrive on solving complex challenges with clean and maintainable code.<br>
  `;

  // <b>My Expertise</b><br>
  // <b>• Frontend Development</b>: I build <b>interactive and responsive</b> web applications using Angular. I have experience in <b>TypeScript, HTML, CSS,Bootstrap, Angular Material, Primeflex, and PrimeNG</b>. I focus on <b>user experience (UX)</b>, <b>accessibility</b>, and <b>performance optimization</b> to create engaging digital experiences.<br>
  // <b>• Backend Development</b>: I develop robust backend systems using <b>Spring Boot</b> and <b>Java</b>, designing REST APIs, handling authentication, and managing databases like <b>PostgreSQL</b> and MongoDB. I ensure my backends are scalable, efficient, and secure.<br>
  // <b>• Bug Fixing & Optimization</b>: <b>Debugging</b> and <b>optimizing applications</b> is one of my strong suits. I analyze performance issues, fix UI/UX glitches, and enhance security measures to ensure applications run smoothly.<br>

  codingSkills = "Coding Skills";
  my = "My ";
  skills = "Skills";



  services = "Services";

  latest = "Latest ";
  projects = "Projects";

  contact = "Contact ";

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
      link: "https://www.instagram.com/just_call_me_mr.vk/?igsh=azBweTJka3hqZGpt",
      description: "I'm very active in insta, So you can ping me there",
    },
    {
      label: "Twitter",
      icon: "fa-brands fa-twitter",
      link: "https://x.com/i/flow/login?redirect_after_login=%2FVaikundamu66901",
      description: "You can also reach me at twitter",
    },
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFvVHFMDfj65wAAAZLUzShgWr6O9eimCKVJg-LF4bGE4GWZA7So0CqzvZxcE4kazO4eCBL8UIbC0JWoLm9XVxxBCjGUEfLfq_myoMUIX4iIbNAYtyUZW-8Fnoq4jwgYFZmGcbM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvaikundamuthu-n-7aa019248%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app",
      description: "I'll check my LinkedIn everyday",
    },
    // {
    //   label: "Call",
    //   icon: "fa-brands fa-whatsapp",
    //   link: "7010847086",
    //   description:"Keep in touch with me in What's App",
    // },
    {
      label: "Mail",
      icon: "fa-solid fa-envelope",
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('vaikundamuthu1430@gmail.com')}&su=${encodeURIComponent("")}&body=${encodeURIComponent("")}`,
      description: "You can mail me anytime, I'll be available anytime!",
    },
  ];

  skillsList = [
    {
      label: "Angular",
      proficiency: 90,
    },
    {
      label: "Spring Boot",
      proficiency: 85,
    },
    {
      label: "JavaScript & Typescript",
      proficiency: 85,
    },
    {
      label: "Java",
      proficiency: 80,
    },
    {
      label: "AWS",
      proficiency: 50,
    },
  ];

  servicesLists = [
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      dialogTitle: "Frontend Development",
      dialogContent: `I build <b>interactive and responsive</b> web applications using Angular. I have experience in <b>TypeScript, HTML, CSS,Bootstrap, Angular Material, Primeflex, and PrimeNG</b>. I focus on <b>user experience (UX)</b>, <b>accessibility</b>, and <b>performance optimization</b> to create engaging digital experiences.`,
      description: `I build <b>responsive</b>, <b>high-performance</b> web applications using <b>Angular</b>. Whether you need a sleek website or a complex web app, I ensure a seamless user experience across all devices.`,
    },
    {
      icon: "fa-solid fa-database",
      title: "Backend Development",
      dialogTitle: "Backend Development",
      dialogContent: `I develop <b>robust</b> and <b>secure</b> backend systems using <b>Spring Boot</b>, <b>Java</b> and <b>Node.js</b>, designing REST APIs, handling authentication, authorization, and managing databases like <b>PostgreSQL</b> and <b>MongoDB</b>. I ensure my backends are scalable, efficient, and secure. Also I'm having experience with <b>AWS</b>, for managing the media content.`,
      description: `With <b>Spring Boot</b>, I develop robust, scalable, and secure backend systems. From RESTful APIs to database management with <b>PostgreSQL</b> and <b>MongoDB</b>, I create efficient solutions tailored to your needs.`,
    },
    {
      icon: "fa-solid fa-bug",
      title: "Bug Fixing & Optimization",
      dialogTitle: "Bug Fixing & Optimization",
      dialogContent: `<b>Debugging</b> and <b>optimizing applications</b> is one of my strong suits. I analyze performance issues, fix UI/UX glitches, and enhance security measures to ensure applications run smoothly. I can debug and fix the bug for both frontend and backend. So you can reach me out for that too. No issue is too big or too small, I ensure your app runs smoothly.`,
      description: `Have a bug slowing you down? I specialize in <b>Debugging</b> and <b>Optimizing</b> applications to improve performance, security, and usability.`,
    },
  ];

  projectsList = [
    {
      title: "Employee Management System",
      background: "../assets/images/project1.jpeg",
      dialogTitle: "Employee Management System",
      dialogContent: `<b>Description</b>: The Employee Management System Project is mainly for the <b>organizational purpose</b> to manage their employee's <b>Leaves</b>, <b>Attendence</b>, <b>Personel Profile</b>.<br><br>
      <b>Tech Stack</b>: Angular, Node.js, PostgreSQL.<br><br>
        <b>Features</b>:<br>
          ✅ Role Based Access Control<br>
          ✅ User Payrole management<br>
      `,
      stacks: `<b>Angular</b> for frontend and <b>Node.js</b> for backend`,
      link: "",
    },
    {
      title: "Theme Park Ticket Booking System",
      background: "../assets/images/project1.jpeg",
      dialogTitle: "Theme Park Ticket Booking System",
      dialogContent: `<b>Description</b>: The Park Ticket Booking System project is for amusement parks with <b>real-time availability</b> and make <b>secure payment integration</b>.<br><br>
      <b>Tech Stack</b>: Angular, Spring Boot, PostgreSQL, RainforestPay API.<br><br>
        <b>Features</b>:<br>
          ✅ Customized Push Notification<br>
          ✅ Dynamic pricing & booking confirmation<br>
          ✅ Payment gateway integration<br>
      `,
      link: "https://wonderla-fe.vercel.app/",
    },
    // {
    //   title: "Employee Management System",
    //   background: "../assets/images/project2.jpeg",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloremque odit! Assumenda ut quibusdam, dolor, rem modi maxime illo hic autem nisi, sunt sed saepe sapiente quia consequuntur facilis nihil.",
    // },
    // {
    //   title: "Theme Park Ticket booking system",
    //   background: "../assets/images/project4.jpeg",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloremque odit! Assumenda ut quibusdam, dolor, rem modi maxime illo hic autem nisi, sunt sed saepe sapiente quia consequuntur facilis nihil.",
    // },
  ];

  speedDialOptions: MenuItem[] = [
    {
      icon: 'pi pi-pencil',
      command: () => {
        this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
      }
    },
    {
      icon: 'pi pi-refresh',
      command: () => {
        this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
      }
    },
    {
      icon: 'pi pi-trash',
      command: () => {
        this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
      }
    },
    {
      icon: 'pi pi-upload',
      routerLink: ['/fileupload']
    },
    {
      icon: 'pi pi-external-link',
      target: '_blank',
      url: 'http://angular.io'
    }
  ];

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  })

  subs!: Subscription;

  showDialog: boolean = false;
  dialogContent: string = "";
  dialogTitle: string = "";
  isLinkAvailable: boolean = false;
  linkIndex: number = 0;
  isLoading: boolean = false;

  UiColor = "red";

  constructor(private api: ApiService, private messageService: MessageService) { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--primary-color', '#ffa500');
    // this.messageService.add({ severity: 'info', detail: `Sending message`});
    setTimeout(() => {
    }, 20000);
    setTimeout(() => {
      this.isLoading = !false
    }, 2000);
  }

  windowReload(): void {
    window.location.reload();
  }

  openLink(data: any, i: number): void {
    window.open(data[i].link, '_blank');
  }

  changeTheme(): void {
    console.log(">>>>");
  }

  showTheDialog(title: string, data: any, i: number, isLinkAvailable: boolean): void {
    this.showDialog = true;
    // console.log(data, i);
    if (Array.isArray(data)) {
      this.dialogTitle = data[i]?.dialogTitle;
      this.dialogContent = data[i]?.dialogContent;
      this.isLinkAvailable = isLinkAvailable;
      this.linkIndex = i;
    }
    else {
      this.dialogTitle = title;
      this.dialogContent = data;
      this.isLinkAvailable = isLinkAvailable;
    }
  }

  getControl(controlName: string): AbstractControl<any, any> | null {
    return this.form.get(controlName);
  }

  onFormSubmit(): void {
    if (this.form.valid) {
      this.messageService.add({ severity: 'info', detail: `Sending message` });
      this.isLoading = true;
      const payload: contactDetails = {
        name: (this.form?.value?.name)?.trim().length ? (this.form.value.name).trim() : "",
        mobileNumber: (this.form?.value?.mobileNumber)?.trim().length ? (this.form.value.mobileNumber).trim() : "",
        emailAddress: (this.form?.value?.emailAddress)?.trim().length ? (this.form.value.emailAddress).trim() : "",
        subject: (this.form?.value?.subject)?.trim().length ? (this.form.value.subject).trim() : "",
        message: (this.form?.value?.message)?.trim().length ? (this.form.value.message).trim() : ""
      };
      this.subs = this.api.sendContactDetails(payload).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.form.reset();
          // console.log(">>> res", res);
          this.messageService.add({ severity: 'success', detail: `I've got your details, will reach you out shortly` });
        },
        error: (e: any) => {
          this.isLoading = false;
          console.log("Error log >>>", e);
          this.messageService.add({ severity: 'error', detail: 'Something went wrong' });
        },
      });
    } else {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
    }
    // console.log(">>> form", this.form.value);
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
