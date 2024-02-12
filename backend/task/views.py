from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer
from django.db.models import Q

class TaskList(APIView):
    def get(self, request):
        data=request.data
        tasks = Task.objects.filter(Q(name=data.get('name')) |
                                   Q(id=data.get('id')) |
                                   Q(created_by=data.get('created_by')))
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request):
        print('HELLO')
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
