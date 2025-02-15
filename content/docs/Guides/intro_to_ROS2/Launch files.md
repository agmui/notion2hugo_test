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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43QULJE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDriLSPfemW5uCLcFOynfPbHgNKeVKbXDW%2BCx%2FYlTuq%2BwIgLFNLtOqKwm7ADcZwHR%2FyZtaFv7ZJPJrYAp%2BYTrGpDv4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNnqPCtQScdTlefaDCrcAzVrIEhuMPFqqzd5nzbO1ccnAf%2F6sKbFOv6QE7AoLthr5FUQcaGcYeQF37ZOZylw3qmX71CevsbxNitA8m%2Bc54uNXThKg6Rfbf0ZKxQ3EEgqi5JJtH9i7nlrGzCUdMs5OUg9DnweYa%2FVb2CDurhbLGaI%2FEp1n6ZooH%2FSbsvy2ZeGirih9gkj2jjN6u28oEKufMYi%2BGTB9D3XY4xEOk4DWa1%2FJOYcGFN0YBDsYKPjKeXj%2BbNsaoJH7lvkacDxXItZaaHVoPQpD8qbvynn3hTSqBB%2FBZgP9RTZNGsJ3eBpG0SfWDKzMyZQDMoqWeWdIHZf%2FPCRtMjOc1vyhoWqxVystc0ekIzZ6Q08xVTYqSkvq53zTt%2Fmxu1EBSH6Q2ssPib868iPSsGORZxb%2Bb4h%2F4kSzG4OM1PdFWuwJ%2BHL2Dq5HggwcIZJ5fwrq9e8RNrQKb6iz62qI%2FEDAjKhf8dvKpfslvkL3rowoRbvY65OgWBX%2BsrC8ggD%2F0Bg1sMWUv4yt%2BDjRKnGQ1rLr1c%2F1GOaRuulD4YwGq4ebM713RwGLYZ5OBKLs9qc1d2b28TFECJvBmps%2FGvTtbDaUknetEQc3X9BU76WHfzmC7cXQ5zYBR%2F6XtnVcrKeHzOV642E7%2Bf%2BMI3Zw70GOqUBUu%2BuHjhCR%2BDTM1%2FSr6ef%2F5jgaWsgaw98s6qrDKLmuAqGC1VyM3gIj4onV%2B5q6p8ZAxQU0gaPf1DtECCBLYohe4DY84fpyWM5ODOn2M7IQSk5Q%2BpasSvPSA7d%2BN4azmt1%2FtKou6MieIWfYyHxibSTKlPBSNCqFtfN%2BwINCU9tDXqGB8p2QyT6c5CvxgBymFIMfXexstfJW3U5TYSihBtiCv%2FfoBzD&X-Amz-Signature=af68067ff4662fd9bc28612c3e6f42cf42949ca8da2db326629d3c9bf8486f06&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43QULJE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDriLSPfemW5uCLcFOynfPbHgNKeVKbXDW%2BCx%2FYlTuq%2BwIgLFNLtOqKwm7ADcZwHR%2FyZtaFv7ZJPJrYAp%2BYTrGpDv4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNnqPCtQScdTlefaDCrcAzVrIEhuMPFqqzd5nzbO1ccnAf%2F6sKbFOv6QE7AoLthr5FUQcaGcYeQF37ZOZylw3qmX71CevsbxNitA8m%2Bc54uNXThKg6Rfbf0ZKxQ3EEgqi5JJtH9i7nlrGzCUdMs5OUg9DnweYa%2FVb2CDurhbLGaI%2FEp1n6ZooH%2FSbsvy2ZeGirih9gkj2jjN6u28oEKufMYi%2BGTB9D3XY4xEOk4DWa1%2FJOYcGFN0YBDsYKPjKeXj%2BbNsaoJH7lvkacDxXItZaaHVoPQpD8qbvynn3hTSqBB%2FBZgP9RTZNGsJ3eBpG0SfWDKzMyZQDMoqWeWdIHZf%2FPCRtMjOc1vyhoWqxVystc0ekIzZ6Q08xVTYqSkvq53zTt%2Fmxu1EBSH6Q2ssPib868iPSsGORZxb%2Bb4h%2F4kSzG4OM1PdFWuwJ%2BHL2Dq5HggwcIZJ5fwrq9e8RNrQKb6iz62qI%2FEDAjKhf8dvKpfslvkL3rowoRbvY65OgWBX%2BsrC8ggD%2F0Bg1sMWUv4yt%2BDjRKnGQ1rLr1c%2F1GOaRuulD4YwGq4ebM713RwGLYZ5OBKLs9qc1d2b28TFECJvBmps%2FGvTtbDaUknetEQc3X9BU76WHfzmC7cXQ5zYBR%2F6XtnVcrKeHzOV642E7%2Bf%2BMI3Zw70GOqUBUu%2BuHjhCR%2BDTM1%2FSr6ef%2F5jgaWsgaw98s6qrDKLmuAqGC1VyM3gIj4onV%2B5q6p8ZAxQU0gaPf1DtECCBLYohe4DY84fpyWM5ODOn2M7IQSk5Q%2BpasSvPSA7d%2BN4azmt1%2FtKou6MieIWfYyHxibSTKlPBSNCqFtfN%2BwINCU9tDXqGB8p2QyT6c5CvxgBymFIMfXexstfJW3U5TYSihBtiCv%2FfoBzD&X-Amz-Signature=c4f0b2c5f4e9595804dda24d760be450f65b4dc43dfb3b5107719521876dc2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43QULJE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDriLSPfemW5uCLcFOynfPbHgNKeVKbXDW%2BCx%2FYlTuq%2BwIgLFNLtOqKwm7ADcZwHR%2FyZtaFv7ZJPJrYAp%2BYTrGpDv4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNnqPCtQScdTlefaDCrcAzVrIEhuMPFqqzd5nzbO1ccnAf%2F6sKbFOv6QE7AoLthr5FUQcaGcYeQF37ZOZylw3qmX71CevsbxNitA8m%2Bc54uNXThKg6Rfbf0ZKxQ3EEgqi5JJtH9i7nlrGzCUdMs5OUg9DnweYa%2FVb2CDurhbLGaI%2FEp1n6ZooH%2FSbsvy2ZeGirih9gkj2jjN6u28oEKufMYi%2BGTB9D3XY4xEOk4DWa1%2FJOYcGFN0YBDsYKPjKeXj%2BbNsaoJH7lvkacDxXItZaaHVoPQpD8qbvynn3hTSqBB%2FBZgP9RTZNGsJ3eBpG0SfWDKzMyZQDMoqWeWdIHZf%2FPCRtMjOc1vyhoWqxVystc0ekIzZ6Q08xVTYqSkvq53zTt%2Fmxu1EBSH6Q2ssPib868iPSsGORZxb%2Bb4h%2F4kSzG4OM1PdFWuwJ%2BHL2Dq5HggwcIZJ5fwrq9e8RNrQKb6iz62qI%2FEDAjKhf8dvKpfslvkL3rowoRbvY65OgWBX%2BsrC8ggD%2F0Bg1sMWUv4yt%2BDjRKnGQ1rLr1c%2F1GOaRuulD4YwGq4ebM713RwGLYZ5OBKLs9qc1d2b28TFECJvBmps%2FGvTtbDaUknetEQc3X9BU76WHfzmC7cXQ5zYBR%2F6XtnVcrKeHzOV642E7%2Bf%2BMI3Zw70GOqUBUu%2BuHjhCR%2BDTM1%2FSr6ef%2F5jgaWsgaw98s6qrDKLmuAqGC1VyM3gIj4onV%2B5q6p8ZAxQU0gaPf1DtECCBLYohe4DY84fpyWM5ODOn2M7IQSk5Q%2BpasSvPSA7d%2BN4azmt1%2FtKou6MieIWfYyHxibSTKlPBSNCqFtfN%2BwINCU9tDXqGB8p2QyT6c5CvxgBymFIMfXexstfJW3U5TYSihBtiCv%2FfoBzD&X-Amz-Signature=fff7ac9c6c72cdf45aff8d4a1274db9fe4219de472d72b76be8e1297d2f91f26&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
