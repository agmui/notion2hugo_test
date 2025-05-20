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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SHSQQB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKgLtHP4qURNKV8dsnxvaeRVFW4PmA%2FyCCHTlFXNk%2F%2FQIhAOV7SWyArjNR2osrniH9k407eRVmWOC8g0AlGu3QJ67yKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWROgfCESDQjwGJ4wq3AOiYm1q3NAS9VBF2PntLTWPt6db1RauXJwTwfcM%2BBCj5qwWECmnsUfdnx1Tptb7QqhsaADg%2FJlcAlL5jJ902IzCf5eAbMOu5lGOV7WGP3oEkCx5JPlv6Sztua3ZcMzSrhSKDw%2BHyukHCEhhN6Eat9l5PhVkqALNcggLITaHOQotE52%2F1LMXAsucnM%2FeO2E%2BGvUR%2FzoPyeBkwRihVpP5MAPDdGD2zA%2F89k6c5g7rflmXEob3BQJ1uddJUOKK%2B1Skon63juEyhahxAi4C5f0LIVnO1EeTeqpeIkDLBZfBkbf9eW5%2BWYf6FkPxJbKsF9jTi2y2EmnAA%2BB5vlSqIhY7FjCbuFHHzrQn%2FrPVOh%2FdAtHtuiEiWeopW%2FNUMaxo%2FJw1if0y9Ff3aidRK8DWOErvej0Q08Q2HEK32R93xHEeVovnDIuNH9X90xbezZuf7xANk7wbpUyh9Cs8iKP4%2FLq1sMH%2B%2B3xKjQrr10T1BBRLRvT1RkIg0K0D8SrhPsDgNdP%2B0QLFdeOPzpsaN7FmAfKywgC026Br64lrjylXHjkjGgeKC4Z4gz0m3J5mLPxdI2RBF2TVAwyu7LUkUNCi3%2B36mM3u%2Bec3gnksGRT2a1zXABEtrmITxLIMbJPGGmtPtDCHmLLBBjqkAbnJXOix0%2Bz5ScdbrZiaoKuHab8acvGppDsUCLyIZcPY0jzKg1423gNpzKC1XTb7Rd0FigdtqZFTKR9wiOYt2GXW7ls2XIWRaIOO1S%2BWoEvb6oEOK2a1ZMjD59ih7CxtVOPuirO6sYnZYBxuvmymBolWFJZuDiPYd8d6yk6aX2dvzuaO2fXsY%2BWVq%2B9QBATVl%2BpFOKy2muzvVS5oetvp6slwdJ3X&X-Amz-Signature=47309b24fc75d1803e9c881ee3f5b98a8e084be8c8100f128cdba157e54cef66&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SHSQQB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKgLtHP4qURNKV8dsnxvaeRVFW4PmA%2FyCCHTlFXNk%2F%2FQIhAOV7SWyArjNR2osrniH9k407eRVmWOC8g0AlGu3QJ67yKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWROgfCESDQjwGJ4wq3AOiYm1q3NAS9VBF2PntLTWPt6db1RauXJwTwfcM%2BBCj5qwWECmnsUfdnx1Tptb7QqhsaADg%2FJlcAlL5jJ902IzCf5eAbMOu5lGOV7WGP3oEkCx5JPlv6Sztua3ZcMzSrhSKDw%2BHyukHCEhhN6Eat9l5PhVkqALNcggLITaHOQotE52%2F1LMXAsucnM%2FeO2E%2BGvUR%2FzoPyeBkwRihVpP5MAPDdGD2zA%2F89k6c5g7rflmXEob3BQJ1uddJUOKK%2B1Skon63juEyhahxAi4C5f0LIVnO1EeTeqpeIkDLBZfBkbf9eW5%2BWYf6FkPxJbKsF9jTi2y2EmnAA%2BB5vlSqIhY7FjCbuFHHzrQn%2FrPVOh%2FdAtHtuiEiWeopW%2FNUMaxo%2FJw1if0y9Ff3aidRK8DWOErvej0Q08Q2HEK32R93xHEeVovnDIuNH9X90xbezZuf7xANk7wbpUyh9Cs8iKP4%2FLq1sMH%2B%2B3xKjQrr10T1BBRLRvT1RkIg0K0D8SrhPsDgNdP%2B0QLFdeOPzpsaN7FmAfKywgC026Br64lrjylXHjkjGgeKC4Z4gz0m3J5mLPxdI2RBF2TVAwyu7LUkUNCi3%2B36mM3u%2Bec3gnksGRT2a1zXABEtrmITxLIMbJPGGmtPtDCHmLLBBjqkAbnJXOix0%2Bz5ScdbrZiaoKuHab8acvGppDsUCLyIZcPY0jzKg1423gNpzKC1XTb7Rd0FigdtqZFTKR9wiOYt2GXW7ls2XIWRaIOO1S%2BWoEvb6oEOK2a1ZMjD59ih7CxtVOPuirO6sYnZYBxuvmymBolWFJZuDiPYd8d6yk6aX2dvzuaO2fXsY%2BWVq%2B9QBATVl%2BpFOKy2muzvVS5oetvp6slwdJ3X&X-Amz-Signature=3ddc6cd8651a29c1390ec90bfa1ad6fda40054725d5d077e2a21b29989f7edaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SHSQQB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKgLtHP4qURNKV8dsnxvaeRVFW4PmA%2FyCCHTlFXNk%2F%2FQIhAOV7SWyArjNR2osrniH9k407eRVmWOC8g0AlGu3QJ67yKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWROgfCESDQjwGJ4wq3AOiYm1q3NAS9VBF2PntLTWPt6db1RauXJwTwfcM%2BBCj5qwWECmnsUfdnx1Tptb7QqhsaADg%2FJlcAlL5jJ902IzCf5eAbMOu5lGOV7WGP3oEkCx5JPlv6Sztua3ZcMzSrhSKDw%2BHyukHCEhhN6Eat9l5PhVkqALNcggLITaHOQotE52%2F1LMXAsucnM%2FeO2E%2BGvUR%2FzoPyeBkwRihVpP5MAPDdGD2zA%2F89k6c5g7rflmXEob3BQJ1uddJUOKK%2B1Skon63juEyhahxAi4C5f0LIVnO1EeTeqpeIkDLBZfBkbf9eW5%2BWYf6FkPxJbKsF9jTi2y2EmnAA%2BB5vlSqIhY7FjCbuFHHzrQn%2FrPVOh%2FdAtHtuiEiWeopW%2FNUMaxo%2FJw1if0y9Ff3aidRK8DWOErvej0Q08Q2HEK32R93xHEeVovnDIuNH9X90xbezZuf7xANk7wbpUyh9Cs8iKP4%2FLq1sMH%2B%2B3xKjQrr10T1BBRLRvT1RkIg0K0D8SrhPsDgNdP%2B0QLFdeOPzpsaN7FmAfKywgC026Br64lrjylXHjkjGgeKC4Z4gz0m3J5mLPxdI2RBF2TVAwyu7LUkUNCi3%2B36mM3u%2Bec3gnksGRT2a1zXABEtrmITxLIMbJPGGmtPtDCHmLLBBjqkAbnJXOix0%2Bz5ScdbrZiaoKuHab8acvGppDsUCLyIZcPY0jzKg1423gNpzKC1XTb7Rd0FigdtqZFTKR9wiOYt2GXW7ls2XIWRaIOO1S%2BWoEvb6oEOK2a1ZMjD59ih7CxtVOPuirO6sYnZYBxuvmymBolWFJZuDiPYd8d6yk6aX2dvzuaO2fXsY%2BWVq%2B9QBATVl%2BpFOKy2muzvVS5oetvp6slwdJ3X&X-Amz-Signature=d63f8a6f1a970a7a9e6e167dc3e4e289fa7b7eda3848df8c5625ad48c6f55593&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
