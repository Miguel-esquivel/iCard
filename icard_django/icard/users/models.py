from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    # You can add additional fields here if needed
    
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

# Create your models here.


