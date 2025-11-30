# portfolio_site/main/tests.py

# AI used here to assist learning (Test syntax, correct practices, etc.) and correcting errors.

from django.test import TestCase
from .models import Skill, Project, ProjectImage
from django.utils.text import slugify

# Create your tests here.

class SkillModelTest(TestCase):
    def setUp(self):
        self.skill = Skill.objects.create(name="Python", level=80)

    def test_skill_creation(self):
        """Test that a skill is correctly created."""
        self.assertEqual(self.skill.name, "Python")
        self.assertEqual(self.skill.level, 80)

    def test_skill_str(self):
        """Test the string representation of the Skill model."""
        self.assertEqual(str(self.skill), "Python")


class ProjectModelTest(TestCase):
    def setUp(self):
        self.project = Project.objects.create(
            title="Portfolio Site",
            slug=slugify("Portfolio Site"),
            short_desc="A personal portfolio website",
            long_desc="This is a detailed description of the portfolio website project.",
            tech_stack="Python,Django,HTML,CSS,JavaScript",
            tags="web,portfolio",
        )

    def test_project_creation(self):
        """Test that a project is correctly created."""
        self.assertEqual(self.project.title, "Portfolio Site")
        self.assertIn("Django", self.project.tech_stack)
        self.assertIn("portfolio", self.project.tags)

    def test_project_str(self):
        """Test the string representation of the Project model."""
        self.assertEqual(str(self.project), "Portfolio Site")


class ProjectImageModelTest(TestCase):
    def setUp(self):
        self.project = Project.objects.create(
            title="Test Project",
            slug=slugify("Test Project"),
            short_desc="Short desc",
            long_desc="Long desc"
        )
        self.image = ProjectImage.objects.create(
            project=self.project,
            image="projects/test.jpg",
            caption="Test caption"
        )

    def test_project_image_creation(self):
        """Test that a project image is correctly linked to a project."""
        self.assertEqual(self.image.project, self.project)
        self.assertEqual(self.image.caption, "Test caption")
        self.assertEqual(str(self.image.project), "Test Project")