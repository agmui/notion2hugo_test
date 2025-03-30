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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRVNFM27%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDuqossGXl0hyOCPDI8lHvqdN%2FEdKJHlmGnmMryB4O01AIhAPVd%2FVHkbE0uSqp%2FTsl5Pd0Cf7Pg3sLshIYdpAHxOZ29KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPveo9NzrJMsimNIoq3ANfdGcr4tUkmNAPlV9CNBckTIyV2zocwuTD%2FkM0XLXx2o2TBvuYEv1yY8cW1DAQgV8oMGJjU0%2F8Aj%2BDKNspv40bQzZGhghY9llNoCg0GP0n%2B%2BMB3G7HgUCxOY%2BVyQ%2BCSK1xM3wEc2YXaE8HQNhlUmbjVpXaXdwxaaQZnuu7TFdIJ3U02aDxS%2FIOzJRjuPFN6j1fhlQcb1Wwf7DXL%2BUF7L4uaU%2FHCRXcW578BNSB7qkeAvJrHBsBs89tKsoOS%2Bcg%2BT7EnjDq1mEgtKqmIR2hvpXwLExxDpoqWVZ907%2B0HVwLfWq7kEzT3lyyz1d9nT5tPU6%2BBn986XTImzZhf91RiKqCMKGtwmr7dFa9kQzKdO7Ma5fR1PN7z0vIcG1xuAaNgEPVuaQFhbG6GRa5HnqsKH7YudhqgMmDMvP84ut4Jmkmx6yBUFk7Xy2rMGIaTCsmhg1wNTvW7oxkyrtJQ7t0FEKCYAo2v4jTQ7scZwiEIsENE0m7W%2BNAJ3jguHBY7wU9Ur5yTf8wuc7vw36p7kIg%2BkBIi1IX2T7X2xBY04YpTt9GJMIagcgmR13OxvUOKkmbEf4PiwQJ4ddciRrNccsUjWTivRjhAT8tFj6mKpi9%2FrB5JL%2BKDIriFdZz0hoklzCX0aK%2FBjqkAVwS97IOdW%2FuqaOr6uc4iy2smKLJoeJ6Vylvjm4S7znWxeGpBgpF9TPsgX%2B5vThTmbvwSi7d%2BdTuEuYBWdIITQh3sq5tFYpfI1PMk9PPyBRfqdtDCG0zwRJA%2F9LDG4flkWL6ls3ueW1HKrahFMc9h4wvTej1hCDbhTCgssHsOQzQ4Axkby2JruiBobNaxkrLUEHTcJJGpHoIUs0yFpZ%2Feu6u4DcE&X-Amz-Signature=a180617924976dcd93460e46dc51e10c8a4b8b4afd4e627409265496b6a08cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRVNFM27%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDuqossGXl0hyOCPDI8lHvqdN%2FEdKJHlmGnmMryB4O01AIhAPVd%2FVHkbE0uSqp%2FTsl5Pd0Cf7Pg3sLshIYdpAHxOZ29KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPveo9NzrJMsimNIoq3ANfdGcr4tUkmNAPlV9CNBckTIyV2zocwuTD%2FkM0XLXx2o2TBvuYEv1yY8cW1DAQgV8oMGJjU0%2F8Aj%2BDKNspv40bQzZGhghY9llNoCg0GP0n%2B%2BMB3G7HgUCxOY%2BVyQ%2BCSK1xM3wEc2YXaE8HQNhlUmbjVpXaXdwxaaQZnuu7TFdIJ3U02aDxS%2FIOzJRjuPFN6j1fhlQcb1Wwf7DXL%2BUF7L4uaU%2FHCRXcW578BNSB7qkeAvJrHBsBs89tKsoOS%2Bcg%2BT7EnjDq1mEgtKqmIR2hvpXwLExxDpoqWVZ907%2B0HVwLfWq7kEzT3lyyz1d9nT5tPU6%2BBn986XTImzZhf91RiKqCMKGtwmr7dFa9kQzKdO7Ma5fR1PN7z0vIcG1xuAaNgEPVuaQFhbG6GRa5HnqsKH7YudhqgMmDMvP84ut4Jmkmx6yBUFk7Xy2rMGIaTCsmhg1wNTvW7oxkyrtJQ7t0FEKCYAo2v4jTQ7scZwiEIsENE0m7W%2BNAJ3jguHBY7wU9Ur5yTf8wuc7vw36p7kIg%2BkBIi1IX2T7X2xBY04YpTt9GJMIagcgmR13OxvUOKkmbEf4PiwQJ4ddciRrNccsUjWTivRjhAT8tFj6mKpi9%2FrB5JL%2BKDIriFdZz0hoklzCX0aK%2FBjqkAVwS97IOdW%2FuqaOr6uc4iy2smKLJoeJ6Vylvjm4S7znWxeGpBgpF9TPsgX%2B5vThTmbvwSi7d%2BdTuEuYBWdIITQh3sq5tFYpfI1PMk9PPyBRfqdtDCG0zwRJA%2F9LDG4flkWL6ls3ueW1HKrahFMc9h4wvTej1hCDbhTCgssHsOQzQ4Axkby2JruiBobNaxkrLUEHTcJJGpHoIUs0yFpZ%2Feu6u4DcE&X-Amz-Signature=f9df63529da0e8d367a160e18ef24c8951831f0fb220ce065f3dd336e349d6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRVNFM27%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDuqossGXl0hyOCPDI8lHvqdN%2FEdKJHlmGnmMryB4O01AIhAPVd%2FVHkbE0uSqp%2FTsl5Pd0Cf7Pg3sLshIYdpAHxOZ29KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPveo9NzrJMsimNIoq3ANfdGcr4tUkmNAPlV9CNBckTIyV2zocwuTD%2FkM0XLXx2o2TBvuYEv1yY8cW1DAQgV8oMGJjU0%2F8Aj%2BDKNspv40bQzZGhghY9llNoCg0GP0n%2B%2BMB3G7HgUCxOY%2BVyQ%2BCSK1xM3wEc2YXaE8HQNhlUmbjVpXaXdwxaaQZnuu7TFdIJ3U02aDxS%2FIOzJRjuPFN6j1fhlQcb1Wwf7DXL%2BUF7L4uaU%2FHCRXcW578BNSB7qkeAvJrHBsBs89tKsoOS%2Bcg%2BT7EnjDq1mEgtKqmIR2hvpXwLExxDpoqWVZ907%2B0HVwLfWq7kEzT3lyyz1d9nT5tPU6%2BBn986XTImzZhf91RiKqCMKGtwmr7dFa9kQzKdO7Ma5fR1PN7z0vIcG1xuAaNgEPVuaQFhbG6GRa5HnqsKH7YudhqgMmDMvP84ut4Jmkmx6yBUFk7Xy2rMGIaTCsmhg1wNTvW7oxkyrtJQ7t0FEKCYAo2v4jTQ7scZwiEIsENE0m7W%2BNAJ3jguHBY7wU9Ur5yTf8wuc7vw36p7kIg%2BkBIi1IX2T7X2xBY04YpTt9GJMIagcgmR13OxvUOKkmbEf4PiwQJ4ddciRrNccsUjWTivRjhAT8tFj6mKpi9%2FrB5JL%2BKDIriFdZz0hoklzCX0aK%2FBjqkAVwS97IOdW%2FuqaOr6uc4iy2smKLJoeJ6Vylvjm4S7znWxeGpBgpF9TPsgX%2B5vThTmbvwSi7d%2BdTuEuYBWdIITQh3sq5tFYpfI1PMk9PPyBRfqdtDCG0zwRJA%2F9LDG4flkWL6ls3ueW1HKrahFMc9h4wvTej1hCDbhTCgssHsOQzQ4Axkby2JruiBobNaxkrLUEHTcJJGpHoIUs0yFpZ%2Feu6u4DcE&X-Amz-Signature=1b84c04f5858f35f77e1068be1b597514d583504c12fe29ef9263a59e4704e45&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
