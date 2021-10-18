from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from jobs import views

router = routers.DefaultRouter()
router.register('jobs', views.JobsView, 'jobs')
router.register('skills', views.SkillsView, 'skills')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('frontend.urls')),
]
