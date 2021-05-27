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

    template_name = 'assessment/assmentUpdate.html'

class assementList(ListView):
    context_object_name = 'myAssments'
    model = models.userAssements

    def get_queryset(self):
        assessmentList = {}
        if self.request.user.is_superuser:
            assessmentList = models.userAssements.objects.all()
        else:
            assessmentList = models.userAssements.objects.filter(user=self.request.user)
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
