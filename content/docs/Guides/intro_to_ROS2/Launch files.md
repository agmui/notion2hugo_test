---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7B3KRL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCPgm8VOQADGOMgl%2B1m7tK7p9GF4lNVcR7GOFdbosjC%2BgIhAPDyGkCJ8oM1n7YbOcuyggdkaFdF1P2ovYJp3CV5590gKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BIZo8apD7MFZT7Bkq3APeZgSco4RqGBaKfo48cCkKVDm%2Bl45bKiJO10AeSzkV3hEnQ0yoJTNEskijQxTnE5d%2FKFLJUiu9O5TSWnP%2BXn70GpLNTaIm4Ro%2BVthUcMQOdOW9ywyyn9l99UamUrYdVS1qOZRssNb43hj6xYHhgF%2BdvimLFjNb8wXaO2w9D92pril9tw4abNZ5JhviArautm9P3Rf6NWTEOiJOE6Uqvv%2B1KNYgRUGV1UlB2oS7MteTuOv0DwObIOPT5ifPf0qsM10tj9eRkOsbaq1FQkRyJNlfG3khsx66XnjhDoawgSQYs%2B2Xe0bGXrGLAKxWdshhEIB79dinBhoe28NgaenSQ7HXyiD0nwHK6EtkPHIrRRaJfmOsmivth9W3r7ffGEw8HEIaH0iOWklKk99qDvbCwgBQVtbePp0w46CrF2C9uZeWR5IVLwkiXtNWEgkQSEdif8tAjsmMqVmuXwsZ%2FyQEHJP%2Be8hRVHF%2BdI1TrfF6Po4TyjBP87vAnCUdlEv55KPKJPXfD6gCeCRhvHCm9Ph19ofDQ9iOn0sV6XzNIOxipBHPLyCg94g%2FE7h%2FzkW83eLtDKrXJ44WMiB1I2kt8TZGzdoKhb9U988w6HSrzkBOyQ8KdcvV6WlHX2aSHlbt4TCA2%2Fa%2BBjqkAVsw4N1VXi8g3lTtY8p4OmwCjGoS7tmnp0oCaILa%2BxKbFWRI%2B8oamLI%2F7RKoz0vCZluDn%2FEHmQiQ5kksdG1YVfiaIZmsCF%2FngcG6r%2BIHuJSckk6Q24vZLqaF86T%2B6dNDaZ15eVeNEvdsS4l9PiuVm6ZnAXBBcNS5Ek3hXpigySgLKbCD%2FFWBalh6RHUZ79qCWHrmlLmGj0ZcNmRGMHg4g27Pnr1U&X-Amz-Signature=1a4e53ee40eef2d7ed3a0e630c5c9e6af9caab867cf2a18ae8e38806ceccd66f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7B3KRL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCPgm8VOQADGOMgl%2B1m7tK7p9GF4lNVcR7GOFdbosjC%2BgIhAPDyGkCJ8oM1n7YbOcuyggdkaFdF1P2ovYJp3CV5590gKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BIZo8apD7MFZT7Bkq3APeZgSco4RqGBaKfo48cCkKVDm%2Bl45bKiJO10AeSzkV3hEnQ0yoJTNEskijQxTnE5d%2FKFLJUiu9O5TSWnP%2BXn70GpLNTaIm4Ro%2BVthUcMQOdOW9ywyyn9l99UamUrYdVS1qOZRssNb43hj6xYHhgF%2BdvimLFjNb8wXaO2w9D92pril9tw4abNZ5JhviArautm9P3Rf6NWTEOiJOE6Uqvv%2B1KNYgRUGV1UlB2oS7MteTuOv0DwObIOPT5ifPf0qsM10tj9eRkOsbaq1FQkRyJNlfG3khsx66XnjhDoawgSQYs%2B2Xe0bGXrGLAKxWdshhEIB79dinBhoe28NgaenSQ7HXyiD0nwHK6EtkPHIrRRaJfmOsmivth9W3r7ffGEw8HEIaH0iOWklKk99qDvbCwgBQVtbePp0w46CrF2C9uZeWR5IVLwkiXtNWEgkQSEdif8tAjsmMqVmuXwsZ%2FyQEHJP%2Be8hRVHF%2BdI1TrfF6Po4TyjBP87vAnCUdlEv55KPKJPXfD6gCeCRhvHCm9Ph19ofDQ9iOn0sV6XzNIOxipBHPLyCg94g%2FE7h%2FzkW83eLtDKrXJ44WMiB1I2kt8TZGzdoKhb9U988w6HSrzkBOyQ8KdcvV6WlHX2aSHlbt4TCA2%2Fa%2BBjqkAVsw4N1VXi8g3lTtY8p4OmwCjGoS7tmnp0oCaILa%2BxKbFWRI%2B8oamLI%2F7RKoz0vCZluDn%2FEHmQiQ5kksdG1YVfiaIZmsCF%2FngcG6r%2BIHuJSckk6Q24vZLqaF86T%2B6dNDaZ15eVeNEvdsS4l9PiuVm6ZnAXBBcNS5Ek3hXpigySgLKbCD%2FFWBalh6RHUZ79qCWHrmlLmGj0ZcNmRGMHg4g27Pnr1U&X-Amz-Signature=10586dea8ebbcc43d8770bc03342e9d9ebafe9fb0a76820dc82f7333e93f0c24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7B3KRL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCPgm8VOQADGOMgl%2B1m7tK7p9GF4lNVcR7GOFdbosjC%2BgIhAPDyGkCJ8oM1n7YbOcuyggdkaFdF1P2ovYJp3CV5590gKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BIZo8apD7MFZT7Bkq3APeZgSco4RqGBaKfo48cCkKVDm%2Bl45bKiJO10AeSzkV3hEnQ0yoJTNEskijQxTnE5d%2FKFLJUiu9O5TSWnP%2BXn70GpLNTaIm4Ro%2BVthUcMQOdOW9ywyyn9l99UamUrYdVS1qOZRssNb43hj6xYHhgF%2BdvimLFjNb8wXaO2w9D92pril9tw4abNZ5JhviArautm9P3Rf6NWTEOiJOE6Uqvv%2B1KNYgRUGV1UlB2oS7MteTuOv0DwObIOPT5ifPf0qsM10tj9eRkOsbaq1FQkRyJNlfG3khsx66XnjhDoawgSQYs%2B2Xe0bGXrGLAKxWdshhEIB79dinBhoe28NgaenSQ7HXyiD0nwHK6EtkPHIrRRaJfmOsmivth9W3r7ffGEw8HEIaH0iOWklKk99qDvbCwgBQVtbePp0w46CrF2C9uZeWR5IVLwkiXtNWEgkQSEdif8tAjsmMqVmuXwsZ%2FyQEHJP%2Be8hRVHF%2BdI1TrfF6Po4TyjBP87vAnCUdlEv55KPKJPXfD6gCeCRhvHCm9Ph19ofDQ9iOn0sV6XzNIOxipBHPLyCg94g%2FE7h%2FzkW83eLtDKrXJ44WMiB1I2kt8TZGzdoKhb9U988w6HSrzkBOyQ8KdcvV6WlHX2aSHlbt4TCA2%2Fa%2BBjqkAVsw4N1VXi8g3lTtY8p4OmwCjGoS7tmnp0oCaILa%2BxKbFWRI%2B8oamLI%2F7RKoz0vCZluDn%2FEHmQiQ5kksdG1YVfiaIZmsCF%2FngcG6r%2BIHuJSckk6Q24vZLqaF86T%2B6dNDaZ15eVeNEvdsS4l9PiuVm6ZnAXBBcNS5Ek3hXpigySgLKbCD%2FFWBalh6RHUZ79qCWHrmlLmGj0ZcNmRGMHg4g27Pnr1U&X-Amz-Signature=3821b6291ebef0581ab070ad05023fd5f46648d368d75ff73bd74c853c5c73a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
