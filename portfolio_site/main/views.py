# portfolio_site/main/views.py

from django.shortcuts import render, HttpResponse, get_object_or_404   # get_object_or_404 helps to handle 404 errors gracefully
from .models import Project, Skill   # Forgot to add this import for Project model, which caused error

# Create your views here.

def home(request):
    projects = Project.objects.all()  # get all projects from database
    return render(request, "main/home.html", {  # This will render the home.html page
        "projects": projects,  # send data to template
    })

def project_detail(request, slug): # view function for project detail page
    project = get_object_or_404(Project, slug=slug)
    tech_list = project.tech_stack.split(",")
    tag_list = project.tags.split(",") if project.tags else []
    return render(request, "main/project_detail.html", {"project": project, "tech_list": tech_list, "tag_list": tag_list})

def skills_view(request): # view function for skills page
    skills = Skill.objects.all()  # fetch all skills
    return render(request, "main/skills.html", {"skills": skills})

def project_list(request): # view function for project list page
    projects = Project.objects.all()
    return render(request, "main/project_list.html", {"projects": projects})