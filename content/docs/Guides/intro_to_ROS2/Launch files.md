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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EZ4VPFF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIC7guwK%2BTEZdzMgakk5B8%2FT5esiYEgKca2Qt8QJ0Q5eXAiEA1lYw2dNH41nYdKvwF5%2F%2Fg1Hvm3SNMQFiZLitiMtm1zMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8ZIkwljOxObqyMCrcA6NrS5LaTdlow%2B7gMwM2la1jqKOAKMq1OibczWEIPGsi7ftfZyOgHcsjWnAgk6Cw3K4AHHTbNeTSlEwpN0pkF5cs597yMW1XR7unFyb20AWqYrw8OkHPE9V5Lvzg38S2rfyAEnFGPzRXC6kCS5Jy7cWre2ECuVM89HAk9c1jhOdUSLW7P5S0GoIhjDJ0k8ish2Rh4cYlj7FdZCLVzFDMpqMm39hAR44rOvQRuJNcZCERVK5S1%2Fztk0%2FlocE8Wou8zoO0K5NDlswDxA5CJjePm9SarcHs5eUct9bsZ9hs9yAKALNS6QdLjw%2Bzg63JQQ%2FM2aCPhMCyKu6A4JWYsbT%2BPGbNQsk8RcKlXdtCyQt8xNCjS8EwptvQ%2FsDoQeF9AjM7shUyrcWXfG%2FGRMJN4T9BRwRxFRMo%2BBTjzpUGJ0iFuJ3isUa4U1PMXLeFU7rSf7%2F7X4Xd6VI2soyag0RbWNeOrbYjc0zgDOoDP%2F70ahcf0kQ4ZRpkmiMDYPzXG8t82BVgkZc93AupKh32C2gAm4EinAsgdi%2FhHzF2Y3b8t933kb20WCe8Jxjc02nC4PL2KpbBGqGc17ub3Vzg8pQjIv0lJ9ITrgLZwbM67kSV51QqexZh41W0WLyYRXXHMh0MMMDarsIGOqUBudyHb79fMBX4rfAHx%2FfoMJCNfsaGzhtHQzWDgjFObISCtm9K4HmyB%2FcadYiJzSAe5De0LDf%2BqFDuHbHtQnSX9DZbHLszZpyY%2Bmda%2BhH2XCs14y7WuFnVdLMCAJeU%2FLtHTU1nlwfgeZMNC1KXaomNrqu9T56%2FTQxl%2BXRWmwzvDAyX2QgCifhlQlWubkPy5GoZjw%2Bxb8yM40mgwhs8662uzrA744kq&X-Amz-Signature=7ce665770b8d88124a281153d7318d31b9f1adba09178bd869b356d32b4a4a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EZ4VPFF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIC7guwK%2BTEZdzMgakk5B8%2FT5esiYEgKca2Qt8QJ0Q5eXAiEA1lYw2dNH41nYdKvwF5%2F%2Fg1Hvm3SNMQFiZLitiMtm1zMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8ZIkwljOxObqyMCrcA6NrS5LaTdlow%2B7gMwM2la1jqKOAKMq1OibczWEIPGsi7ftfZyOgHcsjWnAgk6Cw3K4AHHTbNeTSlEwpN0pkF5cs597yMW1XR7unFyb20AWqYrw8OkHPE9V5Lvzg38S2rfyAEnFGPzRXC6kCS5Jy7cWre2ECuVM89HAk9c1jhOdUSLW7P5S0GoIhjDJ0k8ish2Rh4cYlj7FdZCLVzFDMpqMm39hAR44rOvQRuJNcZCERVK5S1%2Fztk0%2FlocE8Wou8zoO0K5NDlswDxA5CJjePm9SarcHs5eUct9bsZ9hs9yAKALNS6QdLjw%2Bzg63JQQ%2FM2aCPhMCyKu6A4JWYsbT%2BPGbNQsk8RcKlXdtCyQt8xNCjS8EwptvQ%2FsDoQeF9AjM7shUyrcWXfG%2FGRMJN4T9BRwRxFRMo%2BBTjzpUGJ0iFuJ3isUa4U1PMXLeFU7rSf7%2F7X4Xd6VI2soyag0RbWNeOrbYjc0zgDOoDP%2F70ahcf0kQ4ZRpkmiMDYPzXG8t82BVgkZc93AupKh32C2gAm4EinAsgdi%2FhHzF2Y3b8t933kb20WCe8Jxjc02nC4PL2KpbBGqGc17ub3Vzg8pQjIv0lJ9ITrgLZwbM67kSV51QqexZh41W0WLyYRXXHMh0MMMDarsIGOqUBudyHb79fMBX4rfAHx%2FfoMJCNfsaGzhtHQzWDgjFObISCtm9K4HmyB%2FcadYiJzSAe5De0LDf%2BqFDuHbHtQnSX9DZbHLszZpyY%2Bmda%2BhH2XCs14y7WuFnVdLMCAJeU%2FLtHTU1nlwfgeZMNC1KXaomNrqu9T56%2FTQxl%2BXRWmwzvDAyX2QgCifhlQlWubkPy5GoZjw%2Bxb8yM40mgwhs8662uzrA744kq&X-Amz-Signature=698a9591550ebaa40d0ae323644921c32e30bbf5c1c120913a4eaf9d3b8e0b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EZ4VPFF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIC7guwK%2BTEZdzMgakk5B8%2FT5esiYEgKca2Qt8QJ0Q5eXAiEA1lYw2dNH41nYdKvwF5%2F%2Fg1Hvm3SNMQFiZLitiMtm1zMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8ZIkwljOxObqyMCrcA6NrS5LaTdlow%2B7gMwM2la1jqKOAKMq1OibczWEIPGsi7ftfZyOgHcsjWnAgk6Cw3K4AHHTbNeTSlEwpN0pkF5cs597yMW1XR7unFyb20AWqYrw8OkHPE9V5Lvzg38S2rfyAEnFGPzRXC6kCS5Jy7cWre2ECuVM89HAk9c1jhOdUSLW7P5S0GoIhjDJ0k8ish2Rh4cYlj7FdZCLVzFDMpqMm39hAR44rOvQRuJNcZCERVK5S1%2Fztk0%2FlocE8Wou8zoO0K5NDlswDxA5CJjePm9SarcHs5eUct9bsZ9hs9yAKALNS6QdLjw%2Bzg63JQQ%2FM2aCPhMCyKu6A4JWYsbT%2BPGbNQsk8RcKlXdtCyQt8xNCjS8EwptvQ%2FsDoQeF9AjM7shUyrcWXfG%2FGRMJN4T9BRwRxFRMo%2BBTjzpUGJ0iFuJ3isUa4U1PMXLeFU7rSf7%2F7X4Xd6VI2soyag0RbWNeOrbYjc0zgDOoDP%2F70ahcf0kQ4ZRpkmiMDYPzXG8t82BVgkZc93AupKh32C2gAm4EinAsgdi%2FhHzF2Y3b8t933kb20WCe8Jxjc02nC4PL2KpbBGqGc17ub3Vzg8pQjIv0lJ9ITrgLZwbM67kSV51QqexZh41W0WLyYRXXHMh0MMMDarsIGOqUBudyHb79fMBX4rfAHx%2FfoMJCNfsaGzhtHQzWDgjFObISCtm9K4HmyB%2FcadYiJzSAe5De0LDf%2BqFDuHbHtQnSX9DZbHLszZpyY%2Bmda%2BhH2XCs14y7WuFnVdLMCAJeU%2FLtHTU1nlwfgeZMNC1KXaomNrqu9T56%2FTQxl%2BXRWmwzvDAyX2QgCifhlQlWubkPy5GoZjw%2Bxb8yM40mgwhs8662uzrA744kq&X-Amz-Signature=29dca49cad11c08b72aab9984d157fec4541d1279a0f1a7244e2dd2d2eb92ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
