from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser
from django.contrib.auth.hashers import make_password

from users.models import User
from users.api.serializers import UserSerializer

class UserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]  
    serializer_class = UserSerializer
    queryset = User.objects.all()

    # Sobrescribimos el método create para hashear la contraseña antes de guardar el usuario

    def create(self, request, *args, **kwargs):
        password = request.data.get('password')
        if password:
            request.data['password'] = make_password(password)
        return super().create(request, *args, **kwargs)
    
    # Sobrescribimos el método partial_update para hashear la contraseña antes de actualizar el usuario

    def partial_update(self, request, *args, **kwargs):
        password = request.data['password']
        if password:
            request.data['password'] = make_password(password)
        else:
            request.data['password'] = request.user.password # Eliminar el campo password si no se proporciona una nueva contraseña
        return super().update(request, *args, **kwargs)
    