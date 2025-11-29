# portfolio_site/main/views.py

from django.shortcuts import render, HttpResponse
from .models import Project   # Forgot to add this import for Project model, which caused error

# Create your views here.

def home(request):
    projects = Project.objects.all()  # get all projects from database
    return render(request, "main/home.html", {  # This will render the home.html page
        "projects": projects,  # send data to template
    })

def project_detail(request, slug): # view function for project detail page
    project = Project.objects.get(slug=slug)
    return render(request, "main/project_detail.html", {
        "project": project
    })
