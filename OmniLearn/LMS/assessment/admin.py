from django.contrib import admin
from assessment.models import userAssements
# Register your models here.

class userAssmentList(admin.ModelAdmin):
    list_display = ('CreateBy','CreateDate')

admin.site.register(userAssements,userAssmentList)
