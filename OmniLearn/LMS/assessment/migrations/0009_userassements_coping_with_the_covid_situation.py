# Generated by Django 3.2 on 2021-05-29 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0008_auto_20210529_1958'),
    ]

    operations = [
        migrations.AddField(
            model_name='userassements',
            name='coping_with_the_covid_situation',
            field=models.BooleanField(default=False),
        ),
    ]
