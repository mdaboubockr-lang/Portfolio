from django.db import models



class Project(models.Model):
    project_name = models.CharField(max_length=280)
    project_screen_shot = models.ImageField(upload_to='project')
    github_link = models.CharField(max_length=400)


    def __str__(self):
        return self.project_name