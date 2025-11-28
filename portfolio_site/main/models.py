# portfolio_site/main/models.py

from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=50)
    level = models.IntegerField(default=0)  

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    short_desc = models.CharField(max_length=300)
    long_desc = models.TextField()
    tech_stack = models.CharField(max_length=300, blank=True)
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    tags = models.CharField(max_length=200, blank=True)  # simple CSV tags
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='projects/')
    caption = models.CharField(max_length=200, blank=True)

