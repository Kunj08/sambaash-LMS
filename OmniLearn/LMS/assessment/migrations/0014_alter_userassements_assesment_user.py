# Generated by Django 3.2 on 2021-06-01 17:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('assessment', '0013_rename_user_userassements_assesment_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userassements',
            name='assesment_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Created By'),
        ),
    ]
