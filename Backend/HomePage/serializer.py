from HomePage.models import Home, AboutMe
from rest_framework.serializers import ModelSerializer


class SerializerHome(ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'

class SerializerAboutMe(ModelSerializer):
    class Meta:
        model = AboutMe
        fields = '__all__'