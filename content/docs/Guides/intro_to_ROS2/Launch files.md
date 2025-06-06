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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCJG2LN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuuqO2WnZyvWfT%2FJP49KDjC%2F%2Bx7VIbX5WmZ0t80CaV9wIgaXlbpIxt2YZshyag%2FCh1gDBAMc005oFS5j6CowLQop0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDhx%2FuWbeV55XKXIXSrcAzIgOb4YsqFodzxiWyVrgYDEGtN1LRT7WmFPlzUm3rcqTDycIIgg%2FNDCYJt7MYj8wIFbTuxPfa4div%2Bn3iZNbdFbS03S39%2B5wvF%2BuTrmfM%2ByiIgGShCzGpxx4j%2BOFbES6XdTgHGHREHnItTI%2F7%2FFAhci9jDypzLWrV4CUn8gSW79gyyI1Jy8YYZbZpqPBaqiN2lisSNXFxSlTfYMDZvbEh2YjCFwRZIWyJ2Ah8b6VdZai2K%2B0%2F3CEcsx4GDSLG3UNDusPWEOMIHMLRL5JY9qRlniJMQg5Z4dEdJKJyYja%2Ff3kwp8F%2F9SHpGIf9gMHpe8wmnpDL99zzg7UmecrP6ymNhxXGR9xnXf0IWcdKUqWv4sr1vzoHfy%2BgQrbVznmBpt1lmt%2BG%2BDsAwH8apg%2FQXJH6k7hV8aeDluWf4KpshEJ%2F5NCiydz0ZNR0D3LH96HVSGqFVInwIfYPFeZR72XFx%2B3scZdJShg91s0um3Wjcz92KyQIECmLF0vllbpsQOR7q%2FJtgiaz%2FXLefNtrsFA9llP%2FRa7X8Je%2FhzDvhfcLa%2BS1nBDLo3Kz0MDKDyxjll3urGJCYyVKZoL2M4yl%2FJjY93S2Il97YstRDBIRhBr4zuoBLccEB1cplDQDBDbIXJMP2hjMIGOqUBl0XrR%2BEPJ6x1Ha%2B8%2BfhakU88ASOkC0AohlRAXg1oMMlEr8lndLdhSV2hNwIog%2Bo7YQfcDYFSEhZ0B2jc6yIHBFWR9%2BIu3IRldb00cRnHYifzyEejSd5BKto86MhCVBzF40%2BRIc7DvGVgJFByDaKCupxjffov1IbHrdRkhSdIaqWd%2BmIghHDj01WK8zay0eZ4kw1X5%2F2fuiU%2BHLI28xYyQ0N6bqAw&X-Amz-Signature=e5e87e30bc4eceb7c7c10f4f70fb54b26eb943d6d110d80b7ef4d6f9f851efb3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCJG2LN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuuqO2WnZyvWfT%2FJP49KDjC%2F%2Bx7VIbX5WmZ0t80CaV9wIgaXlbpIxt2YZshyag%2FCh1gDBAMc005oFS5j6CowLQop0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDhx%2FuWbeV55XKXIXSrcAzIgOb4YsqFodzxiWyVrgYDEGtN1LRT7WmFPlzUm3rcqTDycIIgg%2FNDCYJt7MYj8wIFbTuxPfa4div%2Bn3iZNbdFbS03S39%2B5wvF%2BuTrmfM%2ByiIgGShCzGpxx4j%2BOFbES6XdTgHGHREHnItTI%2F7%2FFAhci9jDypzLWrV4CUn8gSW79gyyI1Jy8YYZbZpqPBaqiN2lisSNXFxSlTfYMDZvbEh2YjCFwRZIWyJ2Ah8b6VdZai2K%2B0%2F3CEcsx4GDSLG3UNDusPWEOMIHMLRL5JY9qRlniJMQg5Z4dEdJKJyYja%2Ff3kwp8F%2F9SHpGIf9gMHpe8wmnpDL99zzg7UmecrP6ymNhxXGR9xnXf0IWcdKUqWv4sr1vzoHfy%2BgQrbVznmBpt1lmt%2BG%2BDsAwH8apg%2FQXJH6k7hV8aeDluWf4KpshEJ%2F5NCiydz0ZNR0D3LH96HVSGqFVInwIfYPFeZR72XFx%2B3scZdJShg91s0um3Wjcz92KyQIECmLF0vllbpsQOR7q%2FJtgiaz%2FXLefNtrsFA9llP%2FRa7X8Je%2FhzDvhfcLa%2BS1nBDLo3Kz0MDKDyxjll3urGJCYyVKZoL2M4yl%2FJjY93S2Il97YstRDBIRhBr4zuoBLccEB1cplDQDBDbIXJMP2hjMIGOqUBl0XrR%2BEPJ6x1Ha%2B8%2BfhakU88ASOkC0AohlRAXg1oMMlEr8lndLdhSV2hNwIog%2Bo7YQfcDYFSEhZ0B2jc6yIHBFWR9%2BIu3IRldb00cRnHYifzyEejSd5BKto86MhCVBzF40%2BRIc7DvGVgJFByDaKCupxjffov1IbHrdRkhSdIaqWd%2BmIghHDj01WK8zay0eZ4kw1X5%2F2fuiU%2BHLI28xYyQ0N6bqAw&X-Amz-Signature=98dbf99b5a99739b660c3f310fac595cdc5ec6825501c46664775d6a46baa8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCJG2LN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuuqO2WnZyvWfT%2FJP49KDjC%2F%2Bx7VIbX5WmZ0t80CaV9wIgaXlbpIxt2YZshyag%2FCh1gDBAMc005oFS5j6CowLQop0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDhx%2FuWbeV55XKXIXSrcAzIgOb4YsqFodzxiWyVrgYDEGtN1LRT7WmFPlzUm3rcqTDycIIgg%2FNDCYJt7MYj8wIFbTuxPfa4div%2Bn3iZNbdFbS03S39%2B5wvF%2BuTrmfM%2ByiIgGShCzGpxx4j%2BOFbES6XdTgHGHREHnItTI%2F7%2FFAhci9jDypzLWrV4CUn8gSW79gyyI1Jy8YYZbZpqPBaqiN2lisSNXFxSlTfYMDZvbEh2YjCFwRZIWyJ2Ah8b6VdZai2K%2B0%2F3CEcsx4GDSLG3UNDusPWEOMIHMLRL5JY9qRlniJMQg5Z4dEdJKJyYja%2Ff3kwp8F%2F9SHpGIf9gMHpe8wmnpDL99zzg7UmecrP6ymNhxXGR9xnXf0IWcdKUqWv4sr1vzoHfy%2BgQrbVznmBpt1lmt%2BG%2BDsAwH8apg%2FQXJH6k7hV8aeDluWf4KpshEJ%2F5NCiydz0ZNR0D3LH96HVSGqFVInwIfYPFeZR72XFx%2B3scZdJShg91s0um3Wjcz92KyQIECmLF0vllbpsQOR7q%2FJtgiaz%2FXLefNtrsFA9llP%2FRa7X8Je%2FhzDvhfcLa%2BS1nBDLo3Kz0MDKDyxjll3urGJCYyVKZoL2M4yl%2FJjY93S2Il97YstRDBIRhBr4zuoBLccEB1cplDQDBDbIXJMP2hjMIGOqUBl0XrR%2BEPJ6x1Ha%2B8%2BfhakU88ASOkC0AohlRAXg1oMMlEr8lndLdhSV2hNwIog%2Bo7YQfcDYFSEhZ0B2jc6yIHBFWR9%2BIu3IRldb00cRnHYifzyEejSd5BKto86MhCVBzF40%2BRIc7DvGVgJFByDaKCupxjffov1IbHrdRkhSdIaqWd%2BmIghHDj01WK8zay0eZ4kw1X5%2F2fuiU%2BHLI28xYyQ0N6bqAw&X-Amz-Signature=e34cbf25d1194ae520388146a325bede3210a1455a977ec5b615438623539a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
