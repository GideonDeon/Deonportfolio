from ast import Delete
from django.urls import path
from .views import home, my_work, welcome, submit_details, admin, dele_te

urlpatterns = [
    path('', welcome, name="welcome"),
    path('home/', home, name="home"),
    path('my_work/', my_work, name="my_work"),
    path('submit_details/', submit_details, name="submit_details"),
    path('adminn/', admin, name="adminn"),
    path('dele_te/<int:id>', dele_te, name="dele_te")
]
