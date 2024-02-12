from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from .serializers import UserSerializer, LoginSerializer

class RegisterAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(ObtainAuthToken):
    serializer_class = LoginSerializer
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        # import ipdb; ipdb.set_trace()
        user = serializer.validated_data
        
        # token, created = Token.objects.get_or_create(user=user)
        return Response({'token': 'working'})

class LogoutAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            # Retrieve the user's token
            token = Token.objects.get(user=request.user)
            # Delete the token to log out the user
            token.delete()
            return Response({"success": "User logged out successfully"}, status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            # If the token doesn't exist, it's as if the user is already logged out
            return Response({"error": "User is already logged out"}, status=status.HTTP_400_BAD_REQUEST)