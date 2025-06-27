from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('homestay-demo', views.demo_homestay_index, name='demo.homestay.index'),
]