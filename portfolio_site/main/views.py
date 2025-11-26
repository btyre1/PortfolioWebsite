from django.shortcuts import render, HttpResponse

# Create your views here.


def home(request):    # Tutorial view function
    return HttpResponse("hello world")