from django.db import models
from django.core.validators import RegexValidator

# Create your models here.

class Contact(models.Model):
    first_name  = models.CharField(max_length=255)
    last_name   = models.CharField(max_length=255)
    phone_number = models.CharField(
        max_length=10,
        validators=[
            RegexValidator(
                regex=r'^\d{10}$',  # only digits, exactly 10
                message="Phone number must be exactly 10 digits."
            )
        ],
    )
    message     = models.CharField(max_length=1024)
    created_at  = models.DateField(auto_now_add=True)
    updated_at  = models.DateField(auto_now=True)
    
    def __str__(self):
        
        # Show something meaningful in Django Admin
        return f"{self.first_name} {self.last_name} - {self.phone_number}"