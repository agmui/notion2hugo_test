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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NURGVRN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC0olQ4a2xDt%2BkFNqbvEfIOPIesb%2FlRx2V9gv8tBk1r8wIgcMDetH5qYaY2YJzTNKIxRZXWrbQntS8EWpYcOmgqBBYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKdBFqfyG5Ar0fyjmCrcAx%2FJWYzAJzmt4EAyqr7t1f8ORojefue419pA1o7VSdrudvXGr0xUTGBENT%2FLIUR42N9hViFFAnzDOBTtpxQimYqmMgeUpkndA891p5EHs9IfGBfhysZ2CQdHlbmZguiyfprem5eJVXBm2z3LWyJPe8b9BjViwPUJTtrtrCPVTIYnGZSvU3uZK5hTtURKajveo%2BuUKGQ%2Fz5WpcPEwZWzduri6Xa27IZQ0ESBrWfKLMetbJyCtkAwWWB2qyfjnnQROeR%2BzzHusWHbxpSV7SMkRxPTMeIToecbXNosHKrphXn3eIWz64CYsqBIwRF8ttJFvfmeWf87YI9aiYsByi1fojKNEZStH6LWjsZe7%2FxClJfuPRbkRJdE5OWkstasij1zi%2BI2j0f8nZpj1J1%2BKZ71MssqZPMffctu%2FdxD7yul4X4eAY1fkWQ623bBGK4L9jxN3UFvHKysHwMU6Sp4DdwZfF84mAmfRoE9sR0lN9S5X7gvANI94KikSk3Qiv4%2BV2TuBzdb8mMSD01gOdEGD29hVrxK2jkm53xsef%2FvGAPPr4RuX8NsH%2B5tPqMS3d%2BiA5nK7Z5KK%2FI%2F19bHTKXsXOeRygijLTOGOu9jlzhllYIq67PfvPPTkx01MXWtInwAdMIi7l8EGOqUBVwQiw%2F9oFdLTvcvDKCoGvBqg8f4zDlWg0fXYS6rclWu1hXb795PXM7f6Fl%2BmSi5Eag38O6cgugmj822SAbdG1PfcIFCQoUJJYyGX8PhfCpJtYChh42dDNZSAzA%2FRXNZiZO1US88dhmjkMJwvWzJhofMbjlBddNQB3%2FPkpOcoB8x6j2KQq9Q%2BybTmGuGqYSSGCy84IODkcwrImVXDiL%2BmyiNiz6EN&X-Amz-Signature=178ce44b9b9254352d80d445778bb46a9b13eb5f3b8597a394a9f0175e81a395&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NURGVRN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC0olQ4a2xDt%2BkFNqbvEfIOPIesb%2FlRx2V9gv8tBk1r8wIgcMDetH5qYaY2YJzTNKIxRZXWrbQntS8EWpYcOmgqBBYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKdBFqfyG5Ar0fyjmCrcAx%2FJWYzAJzmt4EAyqr7t1f8ORojefue419pA1o7VSdrudvXGr0xUTGBENT%2FLIUR42N9hViFFAnzDOBTtpxQimYqmMgeUpkndA891p5EHs9IfGBfhysZ2CQdHlbmZguiyfprem5eJVXBm2z3LWyJPe8b9BjViwPUJTtrtrCPVTIYnGZSvU3uZK5hTtURKajveo%2BuUKGQ%2Fz5WpcPEwZWzduri6Xa27IZQ0ESBrWfKLMetbJyCtkAwWWB2qyfjnnQROeR%2BzzHusWHbxpSV7SMkRxPTMeIToecbXNosHKrphXn3eIWz64CYsqBIwRF8ttJFvfmeWf87YI9aiYsByi1fojKNEZStH6LWjsZe7%2FxClJfuPRbkRJdE5OWkstasij1zi%2BI2j0f8nZpj1J1%2BKZ71MssqZPMffctu%2FdxD7yul4X4eAY1fkWQ623bBGK4L9jxN3UFvHKysHwMU6Sp4DdwZfF84mAmfRoE9sR0lN9S5X7gvANI94KikSk3Qiv4%2BV2TuBzdb8mMSD01gOdEGD29hVrxK2jkm53xsef%2FvGAPPr4RuX8NsH%2B5tPqMS3d%2BiA5nK7Z5KK%2FI%2F19bHTKXsXOeRygijLTOGOu9jlzhllYIq67PfvPPTkx01MXWtInwAdMIi7l8EGOqUBVwQiw%2F9oFdLTvcvDKCoGvBqg8f4zDlWg0fXYS6rclWu1hXb795PXM7f6Fl%2BmSi5Eag38O6cgugmj822SAbdG1PfcIFCQoUJJYyGX8PhfCpJtYChh42dDNZSAzA%2FRXNZiZO1US88dhmjkMJwvWzJhofMbjlBddNQB3%2FPkpOcoB8x6j2KQq9Q%2BybTmGuGqYSSGCy84IODkcwrImVXDiL%2BmyiNiz6EN&X-Amz-Signature=ee72d49d48a0d92fea444d97813a7bcfe1df793442438c1a9c042edb24ab2227&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NURGVRN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC0olQ4a2xDt%2BkFNqbvEfIOPIesb%2FlRx2V9gv8tBk1r8wIgcMDetH5qYaY2YJzTNKIxRZXWrbQntS8EWpYcOmgqBBYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKdBFqfyG5Ar0fyjmCrcAx%2FJWYzAJzmt4EAyqr7t1f8ORojefue419pA1o7VSdrudvXGr0xUTGBENT%2FLIUR42N9hViFFAnzDOBTtpxQimYqmMgeUpkndA891p5EHs9IfGBfhysZ2CQdHlbmZguiyfprem5eJVXBm2z3LWyJPe8b9BjViwPUJTtrtrCPVTIYnGZSvU3uZK5hTtURKajveo%2BuUKGQ%2Fz5WpcPEwZWzduri6Xa27IZQ0ESBrWfKLMetbJyCtkAwWWB2qyfjnnQROeR%2BzzHusWHbxpSV7SMkRxPTMeIToecbXNosHKrphXn3eIWz64CYsqBIwRF8ttJFvfmeWf87YI9aiYsByi1fojKNEZStH6LWjsZe7%2FxClJfuPRbkRJdE5OWkstasij1zi%2BI2j0f8nZpj1J1%2BKZ71MssqZPMffctu%2FdxD7yul4X4eAY1fkWQ623bBGK4L9jxN3UFvHKysHwMU6Sp4DdwZfF84mAmfRoE9sR0lN9S5X7gvANI94KikSk3Qiv4%2BV2TuBzdb8mMSD01gOdEGD29hVrxK2jkm53xsef%2FvGAPPr4RuX8NsH%2B5tPqMS3d%2BiA5nK7Z5KK%2FI%2F19bHTKXsXOeRygijLTOGOu9jlzhllYIq67PfvPPTkx01MXWtInwAdMIi7l8EGOqUBVwQiw%2F9oFdLTvcvDKCoGvBqg8f4zDlWg0fXYS6rclWu1hXb795PXM7f6Fl%2BmSi5Eag38O6cgugmj822SAbdG1PfcIFCQoUJJYyGX8PhfCpJtYChh42dDNZSAzA%2FRXNZiZO1US88dhmjkMJwvWzJhofMbjlBddNQB3%2FPkpOcoB8x6j2KQq9Q%2BybTmGuGqYSSGCy84IODkcwrImVXDiL%2BmyiNiz6EN&X-Amz-Signature=500445905b883d9288910b2d5280d74adacadfbcf91cdaf2e836292e02343f21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
