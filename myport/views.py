from django.shortcuts import render,redirect
from .models import Details
def welcome(request):
    return render(request,'myport/welcomepage.html',{})

def home(request):
    return render(request,'myport/home_page.html',{})

def my_work(request):
    return render(request,'myport/myWork.html',{})

def submit_details(request):
    Details.objects.create(
        name = request.POST['text'],
        email = request.POST['email'],
        message = request.POST['message']
    )
    return redirect("home")

def admin(request):
    det = Details.objects.all
    return render(request, 'myport/admin.html',{'dett':det})
def dele_te(request, id):
    det = Details.objects.get(id=id)
    det.delete()
    return redirect("adminn")
