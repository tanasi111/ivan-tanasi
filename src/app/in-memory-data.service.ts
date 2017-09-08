import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const experiences = [
            {
                id: 111, name: 'Angular', description: 'Frontend JavaScript Framework', type: 'JavaScript Framework',
                iconPath: './assets/img/ico/angular.ico'
            },
            {
                id: 112, name: 'React', description: 'Frontend JavaScript Framework', type: 'JavaScript Framework',
                iconPath: './assets/img/ico/react.png'
            },
            {
                id: 113, name: 'Vue.js', description: 'Frontend JavaScript Framework', type: 'JavaScript Framework',
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
                description: `Notepad++`,
                type: 'Code editor',
                iconPath: './assets/img/ico/notepad++.jpg'
            },
            {
                id: 117,
                name: 'Visual Studio',
                description: `Visual Studio`,
                type: 'IDE',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 118,
                name: 'TFS',
                description: `TFS`,
                type: 'Source control',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 119,
                name: 'Git',
                description: `Git`,
                type: 'Source control',
                iconPath: './assets/img/ico/git.ico'
            },
            {
                id: 120,
                name: 'Windows',
                description: `Windows`,
                type: 'OS',
                iconPath: './assets/img/ico/windows.png'
            },
            {
                id: 121,
                name: 'Linux',
                description: `Linux`,
                type: 'OS',
                iconPath: './assets/img/ico/linux.png'
            },
            {
                id: 122,
                name: 'ASP.NET Web Forms',
                description: `ASP.NET Web Forms`,
                type: 'Web framework',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 123,
                name: 'ASP.NET MVC',
                description: `ASP.NET MVC`,
                type: 'Web framework',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 124,
                name: 'Windows mobile 6.0',
                description: `Windows mobile 6.0`,
                type: 'Framework',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 125,
                name: 'Windows Forms',
                description: `Windows Forms`,
                type: 'Framework',
                iconPath: './assets/img/ico/visualstudio.jpg'
            },
            {
                id: 125,
                name: 'Android',
                description: `Android`,
                type: 'Framework',
                iconPath: './assets/img/ico/android.png'
            },
            {
                id: 125,
                name: 'Java',
                description: `Java`,
                type: 'Programming language',
                iconPath: './assets/img/ico/java.png'
            },
            {
                id: 125,
                name: 'Ruby on Rails',
                description: `Ruby on Rails`,
                type: 'Web framework',
                iconPath: './assets/img/ico/rails.jpg'
            },
            {
                id: 125,
                name: 'Angular CLI',
                description: `Angular CLI`,
                type: 'Tool',
                iconPath: './assets/img/ico/npm.jpg'
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