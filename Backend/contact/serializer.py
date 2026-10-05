from contact.models import Contact
from rest_framework import serializers

class contactserializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'