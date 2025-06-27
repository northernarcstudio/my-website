from django.shortcuts import render

from django.http import HttpResponse

def home(request):
    return render(request, 'index.html')

def demo_homestay_index(request):
    return render(request, 'demo/homestay/index.html')
