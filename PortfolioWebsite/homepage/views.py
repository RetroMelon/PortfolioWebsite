from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.template import RequestContext, Context
# The homepage view, simply renders the homepage template and returns
def homepage(request):
    return render_to_response("homepage/main.html", context_instance=RequestContext(request))
