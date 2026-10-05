from Blog.models import Blog_of, BlogImg
from rest_framework import serializers



class BlogImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogImg
        fields = ['id', 'image']

class BlogSerializer(serializers.ModelSerializer):
    images = BlogImgSerializer(many=True, read_only=True)

    class Meta:
        model = Blog_of
        fields = ['id', 'title', 'blog_description', 'images']