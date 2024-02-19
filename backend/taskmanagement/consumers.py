# consumers.py

from channels.generic.websocket import AsyncWebsocketConsumer

class TaskConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print('yes connect')
        await self.accept()

    async def disconnect(self, close_code):
        print('disconnect')
        pass

    async def receive(self, text_data):
        print('received')
        pass
