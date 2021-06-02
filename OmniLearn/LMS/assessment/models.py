from django.db import models
from django.urls import reverse
from django import forms
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class userAssements(models.Model):
    A1 = models.PositiveIntegerField(default=0,verbose_name="1. How often do you feel you are making progress towards accomplishing your goals? (0 - never, 5 - always)")
    E1 = models.PositiveIntegerField(default=0,verbose_name="2. How often do you become absorbed in what you are doing? (0 - never, 5 - always)")
    P1 = models.PositiveIntegerField(default=0,verbose_name="3. In general, how often do you feel joyful? (0 - never, 5 - always)")
    N1 = models.PositiveIntegerField(default=0,verbose_name="4. In general, how often do you feel anxious? (0 - never, 5 - always)")
    A2 = models.PositiveIntegerField(default=0,verbose_name="5. How often do you achieve the important goals you have set for yourself? (0 - never, 5 - always)")
    H1 = models.PositiveIntegerField(default=0,verbose_name="6. In general, how would you rate your health? (0 - terrible, 5 - excellent)")
    M1 = models.PositiveIntegerField(default=0,verbose_name="7. In general, to what extent do you lead a purposeful and meaningful life? (0 - not at all, 5 - completely)")

    R1 = models.PositiveIntegerField(default=0,verbose_name="8. To what extent do you receive help and support from others when you need it? (0 - not at all, 5 - completely)")
    M2 = models.PositiveIntegerField(default=0,verbose_name="9. In general, to what extent do you feel that what you do in your life is valuable and worthwhile? (0 - not at all, 5 - completely)")
    E2 = models.PositiveIntegerField(default=0,verbose_name="10. In general, to what extent do you feel excited and interested in things? (0 - not at all, 5 - completely)")
    Lon = models.PositiveIntegerField(default=0,verbose_name="11. How lonely do you feel in your daily life? (0 - not at all, 5 - completely)")
    H2 = models.PositiveIntegerField(default=0,verbose_name="12. How satisfied are you with your current physical health? (0 - not at all, 5 - completely)")
    P2 = models.PositiveIntegerField(default=0,verbose_name="13. In general, how often do you feel positive? (0 - never, 5 - always)")
    N2 = models.PositiveIntegerField(default=0,verbose_name="14. In general, how often do you feel angry? (0 - never, 5 - always)")

    A3 = models.PositiveIntegerField(default=0,verbose_name="15. How often are you able to handle your responsibilities? (0 - never, 5 - always)")
    N3 = models.PositiveIntegerField(default=0,verbose_name="16. In general, how often do you feel sad? (0 - never, 5 - always)")
    E3 = models.PositiveIntegerField(default=0,verbose_name="17. How often do you lose track of time while doing something you enjoy? (0 - never, 5 - always)")
    H3 = models.PositiveIntegerField(default=0,verbose_name="18. Compared to others of your same age and sex, how is your health? (0 - terrible, 5 - excellent)")
    R2 = models.PositiveIntegerField(default=0,verbose_name="19. To what extent do you feel loved? (0 - not at all, 5 - completely)")
    M3 = models.PositiveIntegerField(default=0,verbose_name="20. To what extent do you generally feel you have a sense of direction in your life? (0 - not at all, 5 - completely)")
    R3 = models.PositiveIntegerField(default=0,verbose_name="21. How satisfied are you with your relationships? (0 - not at all, 5 - completely)")
    P3 = models.PositiveIntegerField(default=0,verbose_name="22. In general, to what extent do you feel contented? (0 - not at all, 5 - completely)")
    hap = models.PositiveIntegerField(default=0,verbose_name="23. Taking all things together, how happy would you say you are? (0 - not at all, 5 - completely)")

    Q1 = models.PositiveIntegerField(default=0,verbose_name="1. Tension in the body, like tense muscles, sore back or neck")
    Q2 = models.PositiveIntegerField(default=0,verbose_name="2. Difficulty falling asleep or finding yourself over sleeping?")
    Q3 = models.PositiveIntegerField(default=0,verbose_name="3. Having Mood Swings")
    Q4 = models.PositiveIntegerField(default=0,verbose_name="4. Experiencing Irritation or anger with things outside of your control")
    Q5 = models.PositiveIntegerField(default=0,verbose_name="5. Facing Health Issues like headaches, stomach upsets, rashes on the body etc")
    Q6 = models.PositiveIntegerField(default=0,verbose_name="6. Irregular Eating Habits like eating too much or too little")
    Q7 = models.PositiveIntegerField(default=0,verbose_name="7. Discomfort in communicating with people in your work place or personal life")
    Q8 = models.PositiveIntegerField(default=0,verbose_name="8. Getting tired easily or experiencing fatigue")
    Q9 = models.PositiveIntegerField(default=0,verbose_name="9. Bouts of boredeom or feeling low")
    Q10 = models.PositiveIntegerField(default=0,verbose_name="10. Feeling upset because of something that happened unexpectedly")
    Q11 = models.PositiveIntegerField(default=0,verbose_name="11. Finding it difficult to cope with all the things that you have to do")
    Q12 = models.PositiveIntegerField(default=0,verbose_name="12. Finding the need to take intoxicants or stimulants")

    going_beyond_stress = models.BooleanField(default=False,verbose_name="Going Beyond Stress")
    finding_sustained_happiness = models.BooleanField(default=False,verbose_name="Finding Sustained Happiness")
    mental_emotional_wellness = models.BooleanField(default=False,verbose_name="Mental & Emotional Wellness")
    positive_parenting = models.BooleanField(default=False,verbose_name="Positive Parenting")
    healthy_relationship = models.BooleanField(default=False,verbose_name="Healthy Relationships")
    accelerated_professional_growth = models.BooleanField(default=False,verbose_name="Accelerated Professional Growth")
    healthy_lifestyle = models.BooleanField(default=False,verbose_name="Healthy Lifestyle")
    coping_with_the_covid_situation = models.BooleanField(default=False,verbose_name="Coping with the Covid Situation")

    created_date = models.DateTimeField(auto_now=True,blank=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE,verbose_name="Created By")

    def CreateDate(self):
        return str(timezone.localtime(self.created_date).strftime("%d %b, %Y, %I:%M %p %Z"))

    def CreateBy(self):
        return str(self.user)

    def get_absolute_url(self):
        return reverse('assessment:myassmentment')
