from django.contrib import admin
from django.urls import path
from HomePage.views import HomesDetail, AboutMeDetail
from contact.views import ContactDetail
from projects.views import ProjectListView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home/', view=HomesDetail.as_view(), name='home-detail'),
    path('api/about/page', view=AboutMeDetail.as_view(), name='about-detail'),
    path('api/contact/post', view=ContactDetail.as_view(), name='contact-detail'),
    path('api/project/list', view=ProjectListView.as_view(), name='project-list')
]
