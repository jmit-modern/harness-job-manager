from rest_framework import serializers
from .models import Job, Skill


class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('id', 'title', 'description', 'skills')
        depth = 1


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill,
        fields = ('id', 'name')
