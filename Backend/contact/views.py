from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from contact.serializer import contactserializer
from contact.models import Contact


class ContactDetail(APIView):
    def post(self, request):
        serialzier = contactserializer(data=request.data)
        if serialzier.is_valid():
            serialzier.save()
            return Response(serialzier.data, status=status.HTTP_201_CREATED)
        return Response(serialzier.errors, status=status.HTTP_400_BAD_REQUEST)