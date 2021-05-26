from django.db import models
from django.urls import reverse
from django import forms
from django.contrib.auth.models import User
# Create your models here.

class userAssements(models.Model):
    A1 = models.PositiveIntegerField()
    E1 = models.PositiveIntegerField()
    P1 = models.PositiveIntegerField()
    N1 = models.PositiveIntegerField()
    A2 = models.PositiveIntegerField()
    H1 = models.PositiveIntegerField()
    M1 = models.PositiveIntegerField()

    R1 = models.PositiveIntegerField()
    M2 = models.PositiveIntegerField()
    E2 = models.PositiveIntegerField()
    Lon = models.PositiveIntegerField()
    H2 = models.PositiveIntegerField()
    P2 = models.PositiveIntegerField()
    N2 = models.PositiveIntegerField()

    A3 = models.PositiveIntegerField()
    N3 = models.PositiveIntegerField()
    E3 = models.PositiveIntegerField()
    H3 = models.PositiveIntegerField()
    R2 = models.PositiveIntegerField()
    M3 = models.PositiveIntegerField()
    R3 = models.PositiveIntegerField()
    P3 = models.PositiveIntegerField()
    hap = models.PositiveIntegerField()

    Q1 = models.CharField(blank=True,max_length=200)
    Q2 = models.CharField(blank=True,max_length=200)
    Q3 = models.CharField(blank=True,max_length=200)
    Q4 = models.CharField(blank=True,max_length=200)
    Q5 = models.CharField(blank=True,max_length=200)
    Q6 = models.CharField(blank=True,max_length=200)
    Q7 = models.CharField(blank=True,max_length=200)
    Q8 = models.CharField(blank=True,max_length=200)
    Q9 = models.CharField(blank=True,max_length=200)
    Q10 = models.CharField(blank=True,max_length=200)
    Q11 = models.CharField(blank=True,max_length=200)
    Q12 = models.CharField(blank=True,max_length=200)

    going_beyond_stress = models.BooleanField(default=False)
    finding_sustained_happiness = models.BooleanField(default=False)
    mental_emotional_wellness = models.BooleanField(default=False)
    positive_parenting = models.BooleanField(default=False)
    healthy_relationship = models.BooleanField(default=False)
    accelerated_professional_growth = models.BooleanField(default=False)
    healthy_lifestyle = models.BooleanField(default=False)

    created_date = models.DateTimeField(auto_now=True,blank=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.pk)+" : "+self.user.first_name+" : "+str(self.created_date)

    def get_absolute_url(self):
        return reverse('assessment:result',kwargs={'pk':self.pk})
