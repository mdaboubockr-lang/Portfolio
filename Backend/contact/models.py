from django.db import models



class Contact(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField(max_length=180)
    description = models.TextField()

    def __str__(self):
        return self.name