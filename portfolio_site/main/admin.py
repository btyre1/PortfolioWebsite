# portfolio_site/main/admin.py

from django.contrib import admin
from .models import Project, ProjectImage, Skill

# Register your models here.
admin.site.register(Project)
admin.site.register(ProjectImage)
admin.site.register(Skill)
