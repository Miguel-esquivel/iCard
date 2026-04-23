
#from django.urls import path
from rest_framework.routers import DefaultRouter
from users.api.views import UserApiViewSet
#from users.api.router import router_users

router_user = DefaultRouter()

router_user.register(
    prefix='users', basename='users', viewset=UserApiViewSet
    )