# Generated by Django 3.2 on 2021-06-01 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0009_userassements_coping_with_the_covid_situation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userassements',
            name='How_much_of_the_time_do_you_feel_you_are_making_progress_towards_accomplishing_your_goals',
            field=models.PositiveIntegerField(verbose_name='abc'),
        ),
    ]