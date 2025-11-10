import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Amazon Product Advertising API NestJs SDK',
      description:
        `This package provides a simple way to integrate Amazon's Product Advertising API 5.0 with your NestJS application. It includes a service and module that handles authentication, request signing, and API interactions with Amazon's Product Advertising platform.`,
      repoUrl: 'https://github.com/appasahebnage/nest-paapi-5',
      demoUrl: 'https://www.npmjs.com/package/nest-paapi-5?activeTab=readme',
      techStack: ['NestJs', 'TypeScript', 'JavasScript'],
      image: 'npm-package-sreenshot.png',
    },
    {
      name: 'Prisma to Zod Schema Generator',
      description:
        `Built a code generator to convert Prisma schema definitions into Zod validation schemas for CRUD operations in NestJS. Supports field-level decorators (@create, @update) and ensures tight sync between models and validation logic, minimizing manual effort.`,
      repoUrl: 'https://github.com/appasahebnage/prisma-zod-nest-gen',
      demoUrl: 'https://github.com/appasahebnage/prisma-zod-nest-gen',
      techStack: ['NestJs', 'TypeScript', 'Prisma', 'Zod'],
    },
    {
      name: 'NestJS Starter with JWT Authentication',
      description:
        `Created a production-ready NestJS boilerplate with JWT-based authentication. Includes role-based access control, modular structure, and security best practices for quick backend project bootstrapping.`,
      repoUrl: 'https://github.com/appasahebnage/nestjs-starter-with-jwt',
      demoUrl: 'https://github.com/appasahebnage/nestjs-starter-with-jwt',
      techStack: ['NestJs', 'TypeScript', 'JWT', 'Authentication'],
    },
  ];
}
