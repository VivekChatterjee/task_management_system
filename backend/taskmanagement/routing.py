
from django.urls import path
from .consumers import TaskConsumer

websocket_urlpatterns = [
    path('', TaskConsumer.as_asgi()),
]
