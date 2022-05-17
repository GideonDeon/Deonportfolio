from django.db import models
class Details(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    message = models.TextField()

    def __str__(self):
        return self.name
    # list_display = ("name", "email")
    # class Meta:
    #     ordering = ("name", "email")


