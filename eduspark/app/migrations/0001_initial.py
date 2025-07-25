# Generated by Django 5.2.4 on 2025-07-18 19:25

import django.contrib.auth.validators
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.CharField(max_length=500, unique=True)),
                ('assignment_name', models.CharField(max_length=500)),
                ('assignment_description', models.CharField(max_length=500)),
                ('assignment_due_date', models.CharField(max_length=20)),
                ('assignment_submission_link', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='HourRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=5000, null=True)),
                ('hours', models.IntegerField()),
                ('work_description', models.CharField(max_length=500)),
                ('Organizer_Email', models.EmailField(default='email@gmail.com', max_length=254, null=True, verbose_name='email address')),
                ('approved', models.BooleanField(default=False)),
                ('denied', models.BooleanField(default=False)),
                ('date', models.CharField(max_length=5000)),
            ],
        ),
        migrations.CreateModel(
            name='Mentor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=500, unique=True)),
                ('name', models.CharField(max_length=500)),
                ('address', models.CharField(max_length=500)),
                ('studyField', models.CharField(max_length=200)),
                ('Experience', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=5000)),
                ('Organization_Name', models.CharField(max_length=500)),
                ('Organization_Email', models.EmailField(max_length=254, verbose_name='email address')),
                ('Organization_Description', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('age', models.CharField(default=0, max_length=2)),
                ('userType', models.CharField(default='Student', max_length=200)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=5000)),
                ('Event_Name', models.CharField(max_length=500)),
                ('Event_Description', models.CharField(max_length=2000)),
                ('Event_Location', models.CharField(max_length=2000)),
                ('Event_Time', models.CharField(max_length=2000)),
                ('Meet_Code', models.CharField(max_length=10)),
                ('participants', models.ManyToManyField(blank=True, related_name='events_participated', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
