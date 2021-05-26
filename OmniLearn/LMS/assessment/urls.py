from django.urls import path
from django.conf.urls import url
from assessment import views


app_name = 'assessment'

urlpatterns = [
    path('', views.assementCreate.as_view(),name="home"),
    url(r'^result/(?P<pk>\d+)/$',views.assementUpdate.as_view(),name="result"),
    path('login/', views.user_login,name="user_login"),
    path('logout/',views.user_logout,name='logout'),
    path('myassment/',views.assementList.as_view(),name="myassmentment")
]
