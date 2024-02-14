# QuickTailor - Resume Rewriter

## Overview
QuickTailor streamlines the job application process by tailoring your resume to match specific job postings.
Our platform facilitates the customization of resumes, enabling users to quickly highlight their qualifications
that match the criteria of their desired job posting.

## Features
- **Resume Creation**: Users can craft a master resume, not limited to one page.
- **Application Tracker**: Track applications that you created a tailored resume for.

## Technology Stack
- **Frontend**: 
  - Developed using [Vue.js](https://vuejs.org/).
  - [Shadcn for Vue](https://www.shadcn-vue.com/) to speed up the development process with UI components.
  - Built with [Vite](https://vitejs.dev/) for fast and efficient frontend tooling.
- **Backend**: 
  - Employs [Django](https://www.djangoproject.com/).
  - Utilizes [RabbitMQ](https://rabbitmq.com/) to distribute tailoring requests among several microservice instances, keeping our application speedy as it scales.
  - Stores data in a [PostgreSQL](https://www.postgresql.org/) database hosted with AWS RDS.
  
