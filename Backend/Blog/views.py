from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Blog.serializer import BlogImgSerializer, BlogSerializer
from Blog.models import Blog_of



class BlogListView(APIView):
    def get(self, request):
        blogs = Blog_of.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    