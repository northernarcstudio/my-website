from django.shortcuts import render, redirect
from django.http import HttpResponse
from contact.forms import ContactForm

def home(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Thank you! Your message has been received.")
        else:
            pass
    else:
        form = ContactForm()

    context = {"form": form}
    return render(request, "index.html", context)


def demo_homestay_index(request):
    return render(request, "demo/homestay/index.html")
