# Generated by Django 5.0.2 on 2024-02-11 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0002_alter_task_created_by_alter_task_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.CharField(default='', max_length=100, null=True),
        ),
    ]
