# Generated by Django 3.2 on 2021-06-01 17:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0012_auto_20210601_2106'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userassements',
            old_name='user',
            new_name='assesment_user',
        ),
    ]