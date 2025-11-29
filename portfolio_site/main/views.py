# portfolio_site/main/views.py

from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):
    projects = Project.objects.all()  # get all projects from database
    return render(request, "main/home.html", {  # This will render the home.html page
        "projects": projects,  # send data to template
    })