from django.db import models

# Create your models here.


class Skill(models.Model):
    name = models.CharField(max_length=120)

    def _str_(self):
        return self.name


class Job(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    skills = models.ManyToManyField(Skill, related_name="casting")

    def _str_(self):
        return self.title
