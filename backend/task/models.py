from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    name=models.CharField(max_length=50)
    status=models.CharField(max_length=50, default='Pending')
    description=models.CharField(max_length=100, default='', null=True)
    created_by=models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')
    
