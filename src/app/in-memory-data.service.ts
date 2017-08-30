import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const experiences = [
            { id: 111, name: 'Angular', description: 'Frontend JavaScript Framework', type: 'Framework', iconPath: '' },
            { id: 112, name: 'React', description: 'Frontend JavaScript Framework', type: 'Framework', iconPath: '' },
            { id: 113, name: 'Vue.js', description: 'Frontend JavaScript Framework', type: 'Framework', iconPath: '' },
            {
                id: 114, name: 'C#',
                description: `C# (pronounced "C sharp") is a programming language that is designed for building a variety of 
                              applications that run on the .NET Framework. C# is simple, powerful, type-safe, and object-oriented.`,
                type: 'Programming language',
                iconPath: ''
            },
            {
                id: 115,
                name: 'Visual Studio Code',
                description: `Visual Studio Code is a code editor redefined and optimized 
                              for building and debugging modern web and cloud applications.`,
                type: 'Code editor',
                iconPath: ''
            },
        ];
        return { experiences };
    }
}