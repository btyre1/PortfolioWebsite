# portfolio_site/main/models.py

from django.db import models

# ===== SKILL MODEL ===== (AI generated comment)
class Skill(models.Model):
    # Name of the skill (e.g., Python, Django)
    name = models.CharField(max_length=50)
    # Skill proficiency level (0-100), default 0
    level = models.IntegerField(default=0)  

    def __str__(self):
        # String representation of the skill
        return self.name


# ===== PROJECT MODEL ===== (AI generated comment)
class Project(models.Model):
    # Project title
    title = models.CharField(max_length=200)
    # URL-friendly unique identifier for the project
    slug = models.SlugField(unique=True)
    # Short description for listing pages
    short_desc = models.CharField(max_length=300)
    # Detailed description for project detail page
    long_desc = models.TextField()
    # Comma-separated list of technologies used
    tech_stack = models.CharField(max_length=300, blank=True)
    # Thumbnail image for project card
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)
    # Optional GitHub or external project URL
    github_url = models.URLField(blank=True, null=True)
    # Comma-separated tags for filtering/searching
    tags = models.CharField(max_length=200, blank=True)
    # Timestamp when the project was created
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        # String representation of the project
        return self.title


# ===== PROJECT IMAGE MODEL ===== (AI generated comment)
class ProjectImage(models.Model):
    # Link image to a project
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    # Image file
    image = models.ImageField(upload_to='projects/')
    # Optional caption for the image
    caption = models.CharField(max_length=200, blank=True)