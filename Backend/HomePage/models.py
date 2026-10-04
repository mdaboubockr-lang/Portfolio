from django.db import models
from Blog.models import Blog_of
from projects.models import Project


class AboutMe(models.Model):
    about_myself = models.TextField()
    education = models.CharField(max_length=300)
    skills = models.CharField(max_length=255)
    my_stack = models.TextField()

    def __str__(self):
        return f"About Me - {self.education}"


class Home(models.Model):
    title_description = models.TextField()
    main_description = models.TextField()
    portfolio_img = models.ImageField(upload_to='portfolio')
    about_me = models.ForeignKey(AboutMe, on_delete=models.CASCADE)
    
    project = models.ForeignKey(to=Project, on_delete=models.CASCADE)
    Blog = models.ForeignKey(to=Blog_of, on_delete=models.CASCADE)

    def __str__(self):
        return self.title_description[:50] 
