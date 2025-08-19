from django.contrib import admin
from .models import Contact

# Register your models here.
from django.contrib import admin
from contact.models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("first_name", "phone_number", "created_at")
    list_filter = ("created_at",)
    search_fields = ("first_name", "last_name", "phone_number", "message")
    ordering = ("-created_at",)

    # Optional: make timestamps read-only in detail view
    readonly_fields = ("created_at", "updated_at")
