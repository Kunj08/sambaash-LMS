from django.shortcuts import render
from django.views.generic import View,TemplateView,ListView,DetailView,CreateView,UpdateView,DeleteView
from . import models
from django.urls import reverse_lazy
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth.models import User
from .forms import assementForm
from django.http import JsonResponse
import pdb
from django.core import serializers
# from django.http import HttpResponse

@method_decorator(login_required(login_url='assessment:user_login'),name='dispatch')
class assementCreate(CreateView):
    model = models.userAssements
    form_class = assementForm
    # fields = ("A1","E1","P1","N1","A2","H1","M1","R1","M2","E2","Lon","H2","P2","N2","A3","N3","E3","H3","R2","M3","R3","P3","hap",
    #             "Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","going_beyond_stress","finding_sustained_happiness",
    #             "mental_emotional_wellness","positive_parenting","healthy_relationship","accelerated_professional_growth",
    #             "healthy_lifestyle","user")
    template_name = 'assessment/index.html'


@method_decorator(login_required(login_url='assessment:user_login'),name='dispatch')
class assementUpdate(UpdateView):
    model = models.userAssements
    form_class = assementForm
    # fields = ("A1","E1","P1","N1","A2","H1","M1","R1","M2","E2","Lon","H2","P2","N2","A3","N3","E3","H3","R2","M3","R3","P3","hap",
    #             "Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","going_beyond_stress","finding_sustained_happiness",
    #             "mental_emotional_wellness","positive_parenting","healthy_relationship","accelerated_professional_growth",
    #             "healthy_lifestyle")

    template_name = 'assessment/userAssements_list.html'

class assementList(ListView):
    context_object_name = 'myAssments'
    model = models.userAssements

    def get_queryset(self):
        assessmentList = {}
        if self.request.user.is_superuser:
            assessmentList = models.userAssements.objects.all()
        else:
            assessmentList = models.userAssements.objects.filter(user=self.request.user).order_by('-created_date')
        return assessmentList


def user_login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('assessment:home'))
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username,password=password)

        if user:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse('assessment:home'))
            else:
                return HttpResponseRedirect("ACCOUNT NOT ACTIVE!")
        else:
            print("somewone tried to login and failed")
            print("UserName: {} and Password {}".format(username,password))
            return render(request,'assessment/login.html',{"invalid":"Username OR Password Invalid"})
    else:
        template_name = 'assessment/login.html'
        return render(request,template_name,{})

@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('assessment:home'))

def assement_result(request):
    model = models.userAssements
    asseesmentKey = request.GET.get('pk')
    result = model.objects.get(pk=asseesmentKey)
    data = {
    'A1':result.How_much_of_the_time_do_you_feel_you_are_making_progress_towards_accomplishing_your_goals,
    'E1':result.How_often_do_you_become_absorbed_in_what_you_are_doing,
    'P1':result.In_general_how_often_do_you_feel_joyful,
    'N1':result.In_general_how_often_do_you_feel_anxious,
    'A2':result.How_often_do_you_achieve_the_important_goals_you_have_set_for_yourself,
    'H1':result.In_general_how_would_you_say_your_health_is,
    'M1':result.In_general_to_what_extent_do_you_lead_a_purposeful_and_meaningful_life,
    'R1':result.To_what_extent_do_you_receive_help_and_support_from_others_when_you_need_it,
    'M2':result.In_general_to_what_extent_do_you_feel_that_what_you_do_in_your_life_is_valuable_and_worthwhile,
    'E2':result.In_general_to_what_extent_do_you_feel_excited_and_interested_in_things,
    'Lon':result.How_lonely_do_you_feel_in_your_daily_life,
    'H2':result.How_satisfied_are_you_with_your_current_physical_health,
    'P2':result.In_general_how_often_do_you_feel_positive,
    'N2':result.In_general_how_often_do_you_feel_angry,
    'A3':result.How_often_are_you_able_to_handle_your_responsibilities,
    'N3':result.In_general_how_often_do_you_feel_sad,
    'E3':result.How_often_do_you_lose_track_of_time_while_doing_something_you_enjoy,
    'H3':result.Compared_to_others_of_your_same_age_and_sex_how_is_your_health,
    'R2':result.To_what_extent_do_you_feel_loved,
    'M3':result.To_what_extent_do_you_generally_feel_you_have_a_sense_of_direction_in_your_life,
    'R3':result.How_satisfied_are_you_with_your_relationships,
    'P3':result.In_general_to_what_extent_do_you_feel_contented,
    'hap':result.Taking_all_things_together_how_happy_would_you_say_you_are,

    'Q1':result.Tension_in_the_body_like_tense_muscles_sore_back_or_neck,
    'Q2':result.Difficulty_falling_asleep_or_finding_yourself_over_sleeping,
    'Q3':result.Having_Mood_Swings,
    'Q4':result.Experiencing_Irritation_or_anger_with_things_outside_of_your_control,
    'Q5':result.Facing_Health_Issues_like_headaches_stomach_upsets_rashes_on_the_body_etc,
    'Q6':result.Irregular_Eating_Habits_like_eating_too_much_or_too_little,
    'Q7':result.Discomfort_in_communicating_with_people_in_your_work_place_or_personal_life,
    'Q8':result.Getting_tired_easily_or_experiencing_fatigue,
    'Q9':result.Bouts_of_boredeom_or_feeling_low,
    'Q10':result.Feeling_upset_because_of_something_that_happened_unexpectedly,
    'Q11':result.Finding_it_difficult_to_cope_with_all_the_things_that_you_have_to_do,
    'Q12':result.Finding_the_need_to_take_intoxicants_or_stimulants,

    'CQ1':result.going_beyond_stress,
    'CQ2':result.finding_sustained_happiness,
    'CQ3':result.mental_emotional_wellness,
    'CQ4':result.positive_parenting,
    'CQ5':result.healthy_relationship,
    'CQ6':result.accelerated_professional_growth,
    'CQ7':result.healthy_lifestyle,
    'CQ8':result.coping_with_the_covid_situation
    }
    return JsonResponse(data)
