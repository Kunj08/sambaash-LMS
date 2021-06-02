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
from django.http import JsonResponse
import pdb
from django.core import serializers

@method_decorator(login_required(login_url='assessment:user_login'),name='dispatch')
class assementCreate(CreateView):
    model = models.userAssements
    fields = ("A1","E1","P1","N1","A2","H1","M1","R1","M2","E2","Lon","H2","P2","N2","A3","N3","E3","H3","R2","M3","R3","P3","hap",
                "Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","going_beyond_stress","finding_sustained_happiness",
                "mental_emotional_wellness","positive_parenting","healthy_relationship","accelerated_professional_growth",
                "healthy_lifestyle","coping_with_the_covid_situation","user")
    template_name = 'assessment/index.html'


@method_decorator(login_required(login_url='assessment:user_login'),name='dispatch')
class assementUpdate(UpdateView):
    model = models.userAssements
    fields = ("A1","E1","P1","N1","A2","H1","M1","R1","M2","E2","Lon","H2","P2","N2","A3","N3","E3","H3","R2","M3","R3","P3","hap",
                "Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","going_beyond_stress","finding_sustained_happiness",
                "mental_emotional_wellness","positive_parenting","healthy_relationship","accelerated_professional_growth",
                "healthy_lifestyle","coping_with_the_covid_situation","user")

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
    'A1':result.A1,
    'E1':result.E1,
    'P1':result.P1,
    'N1':result.N1,
    'A2':result.A2,
    'H1':result.H1,
    'M1':result.M1,
    'R1':result.R1,
    'M2':result.M2,
    'E2':result.E2,
    'Lon':result.Lon,
    'H2':result.H2,
    'P2':result.P2,
    'N2':result.N2,
    'A3':result.A3,
    'N3':result.N3,
    'E3':result.E3,
    'H3':result.H3,
    'R2':result.R2,
    'M3':result.M3,
    'R3':result.R3,
    'P3':result.P3,
    'hap':result.hap,

    'Q1':result.Q1,
    'Q2':result.Q2,
    'Q3':result.Q3,
    'Q4':result.Q4,
    'Q5':result.Q5,
    'Q6':result.Q6,
    'Q7':result.Q7,
    'Q8':result.Q8,
    'Q9':result.Q9,
    'Q10':result.Q10,
    'Q11':result.Q11,
    'Q12':result.Q12,

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
