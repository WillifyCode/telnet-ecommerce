from django.contrib import admin
from .models import Product, Category, Order, OrderItem

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'in_stock', 'created_at', 'updated_at']
    list_filter = ['in_stock', 'created_at', 'updated_at']
    list_editable = ['price', 'in_stock']

admin.site.register(Product, ProductAdmin)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(OrderItem)