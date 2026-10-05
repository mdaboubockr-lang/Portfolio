from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from HomePage.serializer import SerializerHome, SerializerAboutMe
from HomePage.models import Home, AboutMe

class HomesDetail(APIView):
    def get(self, request):
        home = Home.objects.all()
        serializer = SerializerHome(home, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class AboutMeDetail(APIView):
    def get(self, request):
        about_me = AboutMe.objects.all()
        serializer = SerializerAboutMe(about_me, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)