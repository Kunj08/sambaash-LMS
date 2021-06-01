from django.db import models
from django.urls import reverse
from django import forms
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class userAssements(models.Model):
    How_much_of_the_time_do_you_feel_you_are_making_progress_towards_accomplishing_your_goals = models.PositiveIntegerField()
    How_often_do_you_become_absorbed_in_what_you_are_doing = models.PositiveIntegerField()
    In_general_how_often_do_you_feel_joyful = models.PositiveIntegerField()
    In_general_how_often_do_you_feel_anxious = models.PositiveIntegerField()
    How_often_do_you_achieve_the_important_goals_you_have_set_for_yourself = models.PositiveIntegerField()
    In_general_how_would_you_say_your_health_is = models.PositiveIntegerField()
    In_general_to_what_extent_do_you_lead_a_purposeful_and_meaningful_life = models.PositiveIntegerField()

    To_what_extent_do_you_receive_help_and_support_from_others_when_you_need_it = models.PositiveIntegerField()
    In_general_to_what_extent_do_you_feel_that_what_you_do_in_your_life_is_valuable_and_worthwhile = models.PositiveIntegerField()
    In_general_to_what_extent_do_you_feel_excited_and_interested_in_things = models.PositiveIntegerField()
    How_lonely_do_you_feel_in_your_daily_life = models.PositiveIntegerField()
    How_satisfied_are_you_with_your_current_physical_health = models.PositiveIntegerField()
    In_general_how_often_do_you_feel_positive = models.PositiveIntegerField()
    In_general_how_often_do_you_feel_angry = models.PositiveIntegerField()

    How_often_are_you_able_to_handle_your_responsibilities = models.PositiveIntegerField()
    In_general_how_often_do_you_feel_sad = models.PositiveIntegerField()
    How_often_do_you_lose_track_of_time_while_doing_something_you_enjoy = models.PositiveIntegerField()
    Compared_to_others_of_your_same_age_and_sex_how_is_your_health = models.PositiveIntegerField()
    To_what_extent_do_you_feel_loved = models.PositiveIntegerField()
    To_what_extent_do_you_generally_feel_you_have_a_sense_of_direction_in_your_life = models.PositiveIntegerField()
    How_satisfied_are_you_with_your_relationships = models.PositiveIntegerField()
    In_general_to_what_extent_do_you_feel_contented = models.PositiveIntegerField()
    Taking_all_things_together_how_happy_would_you_say_you_are = models.PositiveIntegerField()

    Tension_in_the_body_like_tense_muscles_sore_back_or_neck = models.PositiveIntegerField()
    Difficulty_falling_asleep_or_finding_yourself_over_sleeping = models.PositiveIntegerField()
    Having_Mood_Swings = models.PositiveIntegerField()
    Experiencing_Irritation_or_anger_with_things_outside_of_your_control = models.PositiveIntegerField()
    Facing_Health_Issues_like_headaches_stomach_upsets_rashes_on_the_body_etc = models.PositiveIntegerField()
    Irregular_Eating_Habits_like_eating_too_much_or_too_little = models.PositiveIntegerField()
    Discomfort_in_communicating_with_people_in_your_work_place_or_personal_life = models.PositiveIntegerField()
    Getting_tired_easily_or_experiencing_fatigue = models.PositiveIntegerField()
    Bouts_of_boredeom_or_feeling_low = models.PositiveIntegerField()
    Feeling_upset_because_of_something_that_happened_unexpectedly = models.PositiveIntegerField()
    Finding_it_difficult_to_cope_with_all_the_things_that_you_have_to_do = models.PositiveIntegerField()
    Finding_the_need_to_take_intoxicants_or_stimulants = models.PositiveIntegerField()

    going_beyond_stress = models.BooleanField(default=False)
    finding_sustained_happiness = models.BooleanField(default=False)
    mental_emotional_wellness = models.BooleanField(default=False)
    positive_parenting = models.BooleanField(default=False)
    healthy_relationship = models.BooleanField(default=False)
    accelerated_professional_growth = models.BooleanField(default=False)
    healthy_lifestyle = models.BooleanField(default=False)
    coping_with_the_covid_situation = models.BooleanField(default=False)

    created_date = models.DateTimeField(auto_now=True,blank=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def CreateDate(self):
        return str(timezone.localtime(self.created_date).strftime("%d %b, %Y, %I:%M %p %Z"))

    def get_absolute_url(self):
        return reverse('assessment:myassmentment')
