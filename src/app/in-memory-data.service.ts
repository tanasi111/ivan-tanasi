import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const experiences = [
            {
                id: 111, name: 'Angular', description: 'Angular is a platform that makes it easy to build applications with the web',
                type: 'JavaScript Framework',
                iconPath: './assets/img/ico/angular.png'
            },
            {
                id: 112, name: 'React', description: 'JavaScript library for building user interfaces', type: 'JavaScript Framework',
                iconPath: './assets/img/ico/react.png'
            },
            {
                id: 113, name: 'Vue.js', description: 'Vue is a progressive framework for building user interfaces', type: 'JavaScript Framework',
                iconPath: './assets/img/ico/vuejs.png'
            },
            {
                id: 114, name: 'C#',
                description: `C# (pronounced "C sharp") is a programming language that is designed for building a variety of 
                              applications that run on the .NET Framework. C# is simple, powerful, type-safe, and object-oriented.`,
                type: 'Programming language',
                iconPath: './assets/img/ico/csharp.jpg'
            },
            {
                id: 115,
                name: 'Visual Studio Code',
                description: `Visual Studio Code is a code editor redefined and optimized 
                              for building and debugging modern web and cloud applications.`,
                type: 'Code editor',
                iconPath: './assets/img/ico/vscode.jpg'
            },
            {
                id: 116,
                name: 'Notepad++',
                description: `Notepad++ is a free source code editor and Notepad replacement that supports several languages`,
                type: 'Code editor',
                iconPath: './assets/img/ico/notepad++.jpg'
            },
            {
                id: 117,
                name: 'Visual Studio',
                description: `Fully-featured integrated development environment (IDE)
                              for Android, iOS, Windows, web, and cloud`,
                type: 'IDE',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 118,
                name: 'Team Foundation Server',
                description: `Team Foundation Server (commonly abbreviated to TFS) is a Microsoft product that provides source code management 
                              (either with Team Foundation Version Control or Git)`,
                type: 'Source control',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 119,
                name: 'Git',
                description: `Git is a free and open source distributed version control system designed to handle everything from small to 
                              very large projects with speed and efficiency`,
                type: 'Source control',
                iconPath: './assets/img/ico/git.ico'
            },
            {
                id: 120,
                name: 'Windows',
                description: `Microsoft Windows, or simply Windows, is a metafamily of graphical operating systems developed, marketed, 
                              and sold by Microsoft`,
                type: 'OS',
                iconPath: './assets/img/ico/windows.png'
            },
            {
                id: 121,
                name: 'Linux',
                description: `Linux is a Unix-like computer operating system assembled under the model of free and open-source software 
                              development and distribution`,
                type: 'OS',
                iconPath: './assets/img/ico/linux.png'
            },
            {
                id: 122,
                name: 'ASP.NET Web Forms',
                description: `ASP.NET Web Forms`,
                type: 'ASP.NET Web Forms lets you build dynamic websites using a familiar drag-and-drop, event-driven model',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 123,
                name: 'ASP.NET MVC',
                description: `ASP.NET MVC gives you a powerful, patterns-based way to build dynamic websites that enables a clean separation 
                              of concerns and that gives you full control over markup for enjoyable, agile development`,
                type: 'Web framework',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 124,
                name: 'Windows Mobile',
                description: `Windows Mobile is a family of mobile operating systems developed by Microsoft for smartphones and Pocket PCs`,
                type: 'Framework',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 125,
                name: 'Windows Forms',
                description: `Windows Forms (WinForms) is a graphical (GUI) class library included as a part of Microsoft .NET Framework, 
                              providing a platform to write rich client applications for desktop, laptop, and tablet PCs`,
                type: 'Framework',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 125,
                name: 'Android',
                description: `Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for 
                              touchscreen mobile devices such as smartphones and tablets`,
                type: 'Framework',
                iconPath: './assets/img/ico/android.png'
            },
            {
                id: 125,
                name: 'Java',
                description: `Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, 
                              and specifically designed to have as few implementation dependencies as possible`,
                type: 'Programming language',
                iconPath: './assets/img/ico/java.png'
            },
            {
                id: 125,
                name: 'Ruby on Rails',
                description: `A web-application framework that includes everything needed to create database-backed web applications 
                              according to the Model-View-Controller (MVC)`,
                type: 'Web framework',
                iconPath: './assets/img/ico/rails.jpg'
            },
            {
                id: 125,
                name: 'Angular CLI',
                description: `A command line interface for Angular`,
                type: 'Tool',
                iconPath: './assets/img/ico/angular.png'
            }
        ];
        const types = [
            {
                id: 111,
                value: 'Framework'
            },
            {
                id: 112,
                value: 'Web framework'
            }
        ];
        return { experiences, types };
    }
}