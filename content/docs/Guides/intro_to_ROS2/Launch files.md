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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNB3A4S4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQD1DM7TwDej3Z%2FCpPjjVpuFwOmUZDpmjTmmZcsJsSUAiA9IbVmtaeJATbojui9sbLYiKKAWYOQaGr4152lkwUVcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMJcKgG9BT%2BYVka6a4KtwDc68a56ih6K6N5QI%2FSw%2FihxgA%2B0xApR5t7sbZ%2BgEM8wI%2Fum%2FLgDPHx%2FPkcpPsY14i0RCMepXSIvyCZeYC4Kiu6r6RNv8JAFpD8q7FtXlJZfW12qjrUSyeJlChkH114LksguJrrcfM3%2Bz2I5kN8kAOHGNEoVUkPok8wKfC7UwWm%2Fey5YgyfxQ4w8idW4Bhtnuc0DyQ2IaCocRxQf8F4nRlQaaEBsDKWxG2YMFX%2BkNFJ2TvzQf8760Kk2jXDMPnaLFNHaAT94tdXM0pZfKcrOpLXGiexURXbLPMhqRYJFwiZ6XLbipoZHDDYoVWKMkHcr7XZlNBxBHdjgqph9X4vlWHN6dgQt4R3HDZUgLe3OVIT1fRhk%2FJUDcxCzhcuR4R2VmxmoMokVGI3Xbv39NvdGG5qqrysH4ML3iciGlA7TQizZ9uwIlUlqrkpLQEyZFRKnNTvgokUgF60mb%2BlLxSt1LPYmQtUYq0ahLYLGfBuDNfJTODQTJn5UZ2HOlGNa02nhgTaZZ5j4X9RPZDo9hKs0jmP77r%2Fowjnkzz5Y5x7e8I%2BMyvj%2FRZtbG3ujLpJq5lmRF9gn5yJ8R0Ku%2Fvfnht9Vzn8Yxmw2eUJYI5xn%2FSeIN1fMaMhfjHyJ3%2B4wA8TKQwhay5vQY6pgHfTyxRYbfTCq4YrNU4zySp6M5QcqI58NWKueZG2mlOEA7DX0IBCEdYk9Hi%2FRgaKKYxxgNsNj9vAc%2FvcMLxh5%2BneLeuTpk76mrkp9bJuEzfaTGVvGQOduIuetbU%2Bz9lXB7vab%2BgsRRNbOEw0OaEtuj%2B1u3xM%2FApUfW8e6ybNIup6ZPVkX3zJi4m6LyorbXu0eDrUBp8zY5c3ZB7E%2BZoSsE%2FQo%2FqKsPh&X-Amz-Signature=9cd9c2925997e94afe756b6c2a77021c5156347705d542b1ea8556d600b53f18&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNB3A4S4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQD1DM7TwDej3Z%2FCpPjjVpuFwOmUZDpmjTmmZcsJsSUAiA9IbVmtaeJATbojui9sbLYiKKAWYOQaGr4152lkwUVcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMJcKgG9BT%2BYVka6a4KtwDc68a56ih6K6N5QI%2FSw%2FihxgA%2B0xApR5t7sbZ%2BgEM8wI%2Fum%2FLgDPHx%2FPkcpPsY14i0RCMepXSIvyCZeYC4Kiu6r6RNv8JAFpD8q7FtXlJZfW12qjrUSyeJlChkH114LksguJrrcfM3%2Bz2I5kN8kAOHGNEoVUkPok8wKfC7UwWm%2Fey5YgyfxQ4w8idW4Bhtnuc0DyQ2IaCocRxQf8F4nRlQaaEBsDKWxG2YMFX%2BkNFJ2TvzQf8760Kk2jXDMPnaLFNHaAT94tdXM0pZfKcrOpLXGiexURXbLPMhqRYJFwiZ6XLbipoZHDDYoVWKMkHcr7XZlNBxBHdjgqph9X4vlWHN6dgQt4R3HDZUgLe3OVIT1fRhk%2FJUDcxCzhcuR4R2VmxmoMokVGI3Xbv39NvdGG5qqrysH4ML3iciGlA7TQizZ9uwIlUlqrkpLQEyZFRKnNTvgokUgF60mb%2BlLxSt1LPYmQtUYq0ahLYLGfBuDNfJTODQTJn5UZ2HOlGNa02nhgTaZZ5j4X9RPZDo9hKs0jmP77r%2Fowjnkzz5Y5x7e8I%2BMyvj%2FRZtbG3ujLpJq5lmRF9gn5yJ8R0Ku%2Fvfnht9Vzn8Yxmw2eUJYI5xn%2FSeIN1fMaMhfjHyJ3%2B4wA8TKQwhay5vQY6pgHfTyxRYbfTCq4YrNU4zySp6M5QcqI58NWKueZG2mlOEA7DX0IBCEdYk9Hi%2FRgaKKYxxgNsNj9vAc%2FvcMLxh5%2BneLeuTpk76mrkp9bJuEzfaTGVvGQOduIuetbU%2Bz9lXB7vab%2BgsRRNbOEw0OaEtuj%2B1u3xM%2FApUfW8e6ybNIup6ZPVkX3zJi4m6LyorbXu0eDrUBp8zY5c3ZB7E%2BZoSsE%2FQo%2FqKsPh&X-Amz-Signature=fa3488cb11b2bd1efff3ce6a86f2151292cadaae05f1c6affffce407905d06f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNB3A4S4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQD1DM7TwDej3Z%2FCpPjjVpuFwOmUZDpmjTmmZcsJsSUAiA9IbVmtaeJATbojui9sbLYiKKAWYOQaGr4152lkwUVcSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMJcKgG9BT%2BYVka6a4KtwDc68a56ih6K6N5QI%2FSw%2FihxgA%2B0xApR5t7sbZ%2BgEM8wI%2Fum%2FLgDPHx%2FPkcpPsY14i0RCMepXSIvyCZeYC4Kiu6r6RNv8JAFpD8q7FtXlJZfW12qjrUSyeJlChkH114LksguJrrcfM3%2Bz2I5kN8kAOHGNEoVUkPok8wKfC7UwWm%2Fey5YgyfxQ4w8idW4Bhtnuc0DyQ2IaCocRxQf8F4nRlQaaEBsDKWxG2YMFX%2BkNFJ2TvzQf8760Kk2jXDMPnaLFNHaAT94tdXM0pZfKcrOpLXGiexURXbLPMhqRYJFwiZ6XLbipoZHDDYoVWKMkHcr7XZlNBxBHdjgqph9X4vlWHN6dgQt4R3HDZUgLe3OVIT1fRhk%2FJUDcxCzhcuR4R2VmxmoMokVGI3Xbv39NvdGG5qqrysH4ML3iciGlA7TQizZ9uwIlUlqrkpLQEyZFRKnNTvgokUgF60mb%2BlLxSt1LPYmQtUYq0ahLYLGfBuDNfJTODQTJn5UZ2HOlGNa02nhgTaZZ5j4X9RPZDo9hKs0jmP77r%2Fowjnkzz5Y5x7e8I%2BMyvj%2FRZtbG3ujLpJq5lmRF9gn5yJ8R0Ku%2Fvfnht9Vzn8Yxmw2eUJYI5xn%2FSeIN1fMaMhfjHyJ3%2B4wA8TKQwhay5vQY6pgHfTyxRYbfTCq4YrNU4zySp6M5QcqI58NWKueZG2mlOEA7DX0IBCEdYk9Hi%2FRgaKKYxxgNsNj9vAc%2FvcMLxh5%2BneLeuTpk76mrkp9bJuEzfaTGVvGQOduIuetbU%2Bz9lXB7vab%2BgsRRNbOEw0OaEtuj%2B1u3xM%2FApUfW8e6ybNIup6ZPVkX3zJi4m6LyorbXu0eDrUBp8zY5c3ZB7E%2BZoSsE%2FQo%2FqKsPh&X-Amz-Signature=b8b0f1fd3bbfb0a8761e84a5706b6096e93df2a7088968667b9ceff62e3dd4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
