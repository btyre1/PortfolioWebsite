from django.urls import path
from . import views  # lets me connect URLs to my view functions

urlpatterns = [
    path("", views.home, name="home"), # This connects the homepage URL to the home view
]