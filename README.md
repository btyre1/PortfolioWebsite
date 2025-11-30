# Overview

This project is a personal portfolio web application built to showcase my projects, skills, and experience as a software engineer. The goal of this project was to strengthen my full-stack development skills, particularly in building dynamic, data-driven web applications using Django and modern web technologies.

The web app is a multi-page portfolio site that includes a homepage, a projects page, detailed project pages, and a skills page. Each page dynamically loads content from the Django backend, allowing for easy updates and scalability.

To run the project locally:

1. Clone the repository to your computer.
2. Install the required dependencies using `pip install -r requirements.txt`.
3. Run the development server using `python manage.py runserver`.
4. Open your web browser and navigate to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to view the homepage.

The purpose of building this portfolio was to practice implementing CRUD functionality, template rendering, responsive design, and modern UI features such as interactive galleries, while also creating a professional showcase for my work.

# Web Pages

- **Home Page:** Introduces me, provides a welcome message, and links to the projects page. This page is mostly static but can be easily updated with new introductions.
- **Projects Page:** Displays all projects in a card grid. Each card contains the project title, short description, and a link to the detailed project page.
- **Project Detail Page:** Shows all information about a specific project including title, long description, thumbnail, gallery images, technologies used, and tags. Content is dynamically loaded based on the selected project.
- **Skills Page:** Lists my skills with visual skill bars indicating proficiency. Data is dynamically loaded from the database.
- **Navigation:** Each page includes a top navigation bar allowing smooth transitions between pages. Buttons and links guide the user through the site in a user-friendly way.

# Development Environment

- **Tools Used:** Visual Studio Code, Git, GitHub, SQLite, and the Django development server.
- **Programming Language:** Python (for the backend), HTML, CSS, and JavaScript.
- **Libraries:** Django 5.2

# Useful Websites

* [Django Documentation](https://docs.djangoproject.com/en/5.2/)
* [Django Tutortial](https://www.tutorialspoint.com/django/index.htm)
* [YouTube Tutorial](https://www.youtube.com/watch?v=nGIg40xs9e4)
* [YouTube Django Concepts](https://www.youtube.com/watch?v=0sMtoedWaf0)
* [Build a Portfolio App](https://realpython.com/get-started-with-django-1/)
* [Stack Overflow](https://stackoverflow.com/)

# Future Work

* Add a contact form with email integration
* Add a contact, experience, achievements, and education page
* Add more information about me 
* Improve accessibility
* Add animations and interactive elements to enhance user experience