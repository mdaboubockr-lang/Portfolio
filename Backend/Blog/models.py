from django.db import models

class Blog_of(models.Model):
    title = models.CharField(max_length=280)
    blog_description = models.TextField()

    def __str__(self):
        return self.title

class BlogImg(models.Model):
    blog = models.ForeignKey(Blog_of, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='blog_img/')

    def __str__(self):
        return f"Image for {self.blog.title}"

