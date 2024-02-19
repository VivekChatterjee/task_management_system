from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(View):
    def post(self, request):
        data=json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'message': 'Invalid credentials'}, status=401)

class LogoutView(View):
    def get(self, request):
        logout(request)
        return JsonResponse({'message': 'Logout successful'}, status=200)

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(View):
    def post(self, request):
        data=json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if not username or not password:
            return JsonResponse({'message': 'Username and password are required'}, status=400)
        if User.objects.filter(username=username).exists():
            return JsonResponse({'message': 'Username already exists'}, status=409)
        User.objects.create_user(username=username, password=password)
        return JsonResponse({'message': 'User registered successfully'}, status=201)
