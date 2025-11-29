# portfolio_site/main/views.py

from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):    
    # This will render the home.html page
    return render(request, "main/home.html")