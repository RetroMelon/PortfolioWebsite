from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('homepage.views',
    # Examples:
    # url(r'^$', 'PortfolioWebsite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', 'homepage'),
    url(r'^2', 'homepage2'),
)
