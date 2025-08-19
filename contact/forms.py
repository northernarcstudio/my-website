from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ["first_name", "last_name", "phone_number", "message"]
        widgets = {
            "first_name": forms.TextInput(attrs={
                "class": "p-3 border-b border-white/50 hover:border-white hover:placeholder:text-white transition w-full",
                "placeholder": "First Name"
            }),
            "last_name": forms.TextInput(attrs={
                "class": "p-3 border-b border-white/50 hover:border-white hover:placeholder:text-white transition w-full",
                "placeholder": "Last Name"
            }),
            "phone_number": forms.TextInput(attrs={
                "class": "p-3 border-b border-white/50 hover:border-white hover:placeholder:text-white transition w-full",
                "placeholder": "Phone No."
            }),
            "message": forms.Textarea(attrs={
                "class": "p-3 border-b border-white/50 hover:border-white hover:placeholder:text-white transition w-full",
                "placeholder": "Message",
                "rows": 4,
            }),
        }
