from django.shortcuts import render, render_to_response
from django.http import HttpResponse
# The homepage view, simply renders the homepage template and returns
def homepage(e):
    return render_to_response("homepage/main3.html", {})

def homepage2(e):
    return render_to_response("homepage/main5.html", {})
