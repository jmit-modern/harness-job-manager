from django.shortcuts import render
from django.db.models import Count
from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import JobsSerializer, SkillSerializer
from .models import Job, Skill


class JobsView(viewsets.ModelViewSet):
    serializer_class = JobsSerializer

    def get_queryset(self):
        jobs = Job.objects.all()
        return jobs

    def create(self, request, *args, **kwargs):
        data = request.data

        new_job = Job.objects.create(
            title=data["title"], description=data["description"])
        new_job.save()

        for skill in data["skills"]:
            try:
                skill_obj = Skill.objects.get(name=skill["name"])
            except Skill.DoesNotExist:
                skill_obj = Skill.objects.create(name=skill["name"])
                skill_obj.save()
            new_job.skills.add(skill_obj)

        serilaizer = JobsSerializer(new_job)

        return Response(serilaizer.data)

    @action(detail=False, methods=['GET'], name='usedSkills')
    def used_skills(self, request, *args, **kwargs):
        used_skills = Job.objects.values('skills'
                                         ).annotate(count=Count('id')).order_by('-count')

        top_skills = []
        for used_skill in used_skills:
            skill = Skill.objects.get(id=used_skill["skills"])
            top_skills.append(
                {"name": skill.name, "count": used_skill["count"]})

        return Response(top_skills)


class SkillsView(viewsets.ModelViewSet):
    serializer_class = SkillSerializer

    def get_queryset(self):
        skills = Skill.objects.all()
        return skills
