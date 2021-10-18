from django.contrib import admin
from .models import Job, Skill
# Register your models here.


class JobsAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')


class SkillsAdmin(admin.ModelAdmin):
    'name'


admin.site.register(Job, JobsAdmin)
admin.site.register(Skill, SkillsAdmin)
