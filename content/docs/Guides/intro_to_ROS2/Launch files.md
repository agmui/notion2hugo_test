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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBUVWYV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDL7VyXUjoxZ2jk6wW49vODhzIMSOPOUiSPUOLkSS%2BrHgIhAOVE%2BLkQJycOaPDJR%2FAxdyx7p99Pp%2FvdPucdxOip3u4vKv8DCFwQABoMNjM3NDIzMTgzODA1Igwz0YAm7ohWQAybc8kq3ANbcr6Jv8cXwPb7WxmbqKkTyHaAtBoNH82YdP%2FLyH02IddGZysw1rFkRzxWqSNID%2BfYGNaauzPyeUpb2H%2FeyDV2PS7xaZ3GQeZ9EKKKP5XjWN1HKrqLeGRvzB0K5sGcrOFs79K7lmZR0nQwzLbB%2F8Msc4BG4Eg48HT803mDxjfAwicqtr%2Bf3eUGJvVs15WbE%2BNjCE0Z0qbqJq9asmUJh8R45nKkFe5wLPrNUNTQxWIW%2BIClEOe6F9BMl9BGgRcBdCBYlaXTBqr9q86eQ%2F5qkSXJs0aPb%2Bk8OFWiwT6sfM1impfc%2BEWUvtgWNta5OpijAdpHP43XIKhY%2Bmp0cblp9ygkv297laFXhlXc6ucWIVjEvS7ouWQEH51az15vDgb7GRKVYx2dN7noV1uSdT89exJE1YkzbXqCVTJ11NEDTdatNz6oeEoiuYSJJ7mOQo7sdjFP8VbitMu0XiWVaXvQHr0PHAWHpUEMA8TCxnpIe8tUDDefyEI7IYp%2BCC3gc92JGn7mYOFgcgdFqrbjeyWW8sW6BF80m1D8qSrKLlTBqcZakKDboWNcrmm5CSd0XvlhjkkcQoTK46vkdac3L19EMIjWQvg3ujA3MJyDdgMkGluvcDGkE5%2BLEePwG6TZ4DC6k97DBjqkAbqpFruYPvWHLmDDxV7A0iFRTW%2BqJK%2FTziGJTQLvEGmdgMCU6weqYFzfMuqE3WKIJ9sxsvL%2FORRnIRWi%2BvlaD%2BigdTEPFQZIolQr3z%2BVulXJH72%2FZqgvju5oKctvN1BpR73BQACpYnlMbNn0mYWmTmD5CcpGHgAZjFiYOe%2F0Z1nlnqUnc9blx7gvQIQxO%2B0MhyYSMx3BkMim7F3mpov1jT%2BCL0oP&X-Amz-Signature=eacb9d8b884fa2af9e3eadc29d91bc221378ab92011ed9369d6540247b43ebbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBUVWYV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDL7VyXUjoxZ2jk6wW49vODhzIMSOPOUiSPUOLkSS%2BrHgIhAOVE%2BLkQJycOaPDJR%2FAxdyx7p99Pp%2FvdPucdxOip3u4vKv8DCFwQABoMNjM3NDIzMTgzODA1Igwz0YAm7ohWQAybc8kq3ANbcr6Jv8cXwPb7WxmbqKkTyHaAtBoNH82YdP%2FLyH02IddGZysw1rFkRzxWqSNID%2BfYGNaauzPyeUpb2H%2FeyDV2PS7xaZ3GQeZ9EKKKP5XjWN1HKrqLeGRvzB0K5sGcrOFs79K7lmZR0nQwzLbB%2F8Msc4BG4Eg48HT803mDxjfAwicqtr%2Bf3eUGJvVs15WbE%2BNjCE0Z0qbqJq9asmUJh8R45nKkFe5wLPrNUNTQxWIW%2BIClEOe6F9BMl9BGgRcBdCBYlaXTBqr9q86eQ%2F5qkSXJs0aPb%2Bk8OFWiwT6sfM1impfc%2BEWUvtgWNta5OpijAdpHP43XIKhY%2Bmp0cblp9ygkv297laFXhlXc6ucWIVjEvS7ouWQEH51az15vDgb7GRKVYx2dN7noV1uSdT89exJE1YkzbXqCVTJ11NEDTdatNz6oeEoiuYSJJ7mOQo7sdjFP8VbitMu0XiWVaXvQHr0PHAWHpUEMA8TCxnpIe8tUDDefyEI7IYp%2BCC3gc92JGn7mYOFgcgdFqrbjeyWW8sW6BF80m1D8qSrKLlTBqcZakKDboWNcrmm5CSd0XvlhjkkcQoTK46vkdac3L19EMIjWQvg3ujA3MJyDdgMkGluvcDGkE5%2BLEePwG6TZ4DC6k97DBjqkAbqpFruYPvWHLmDDxV7A0iFRTW%2BqJK%2FTziGJTQLvEGmdgMCU6weqYFzfMuqE3WKIJ9sxsvL%2FORRnIRWi%2BvlaD%2BigdTEPFQZIolQr3z%2BVulXJH72%2FZqgvju5oKctvN1BpR73BQACpYnlMbNn0mYWmTmD5CcpGHgAZjFiYOe%2F0Z1nlnqUnc9blx7gvQIQxO%2B0MhyYSMx3BkMim7F3mpov1jT%2BCL0oP&X-Amz-Signature=a82e5e35e1161f9e3a67612d06814f0dfb7999ffb8edd5dd0a98291ff0e31289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBUVWYV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDL7VyXUjoxZ2jk6wW49vODhzIMSOPOUiSPUOLkSS%2BrHgIhAOVE%2BLkQJycOaPDJR%2FAxdyx7p99Pp%2FvdPucdxOip3u4vKv8DCFwQABoMNjM3NDIzMTgzODA1Igwz0YAm7ohWQAybc8kq3ANbcr6Jv8cXwPb7WxmbqKkTyHaAtBoNH82YdP%2FLyH02IddGZysw1rFkRzxWqSNID%2BfYGNaauzPyeUpb2H%2FeyDV2PS7xaZ3GQeZ9EKKKP5XjWN1HKrqLeGRvzB0K5sGcrOFs79K7lmZR0nQwzLbB%2F8Msc4BG4Eg48HT803mDxjfAwicqtr%2Bf3eUGJvVs15WbE%2BNjCE0Z0qbqJq9asmUJh8R45nKkFe5wLPrNUNTQxWIW%2BIClEOe6F9BMl9BGgRcBdCBYlaXTBqr9q86eQ%2F5qkSXJs0aPb%2Bk8OFWiwT6sfM1impfc%2BEWUvtgWNta5OpijAdpHP43XIKhY%2Bmp0cblp9ygkv297laFXhlXc6ucWIVjEvS7ouWQEH51az15vDgb7GRKVYx2dN7noV1uSdT89exJE1YkzbXqCVTJ11NEDTdatNz6oeEoiuYSJJ7mOQo7sdjFP8VbitMu0XiWVaXvQHr0PHAWHpUEMA8TCxnpIe8tUDDefyEI7IYp%2BCC3gc92JGn7mYOFgcgdFqrbjeyWW8sW6BF80m1D8qSrKLlTBqcZakKDboWNcrmm5CSd0XvlhjkkcQoTK46vkdac3L19EMIjWQvg3ujA3MJyDdgMkGluvcDGkE5%2BLEePwG6TZ4DC6k97DBjqkAbqpFruYPvWHLmDDxV7A0iFRTW%2BqJK%2FTziGJTQLvEGmdgMCU6weqYFzfMuqE3WKIJ9sxsvL%2FORRnIRWi%2BvlaD%2BigdTEPFQZIolQr3z%2BVulXJH72%2FZqgvju5oKctvN1BpR73BQACpYnlMbNn0mYWmTmD5CcpGHgAZjFiYOe%2F0Z1nlnqUnc9blx7gvQIQxO%2B0MhyYSMx3BkMim7F3mpov1jT%2BCL0oP&X-Amz-Signature=7f31859f8a5cd3888e0278542eaa0863664927eaf1af5c0f41042792d4d94264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
