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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAIF5Q4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KlzxMV3G0mQpIrTjMj5BZLUULmfRocX7lq7bh3BtJAIhANjRQuZASNqoxXPBMJucp2wpvOP8Y%2BLNKmOuxePqmx1vKv8DCEEQABoMNjM3NDIzMTgzODA1Igx3Bw%2BpI5PtYKuT6yEq3AOIS726EAQf1vam8vPGI%2B2uUB1ymLEbQcOV2H4XXYHqMhQYCdvjxQSq6%2Fjjb7heMMe0IAuQzVrrTs%2FXK%2FO68NOIttmQQhdCg53HJmTeCYXlUc9N6KXa5SJd%2BZ%2Ba1abc6LgBpPuxxB7KD1o392UHamnqN9OH096uLzyCri8aRQlzTf4krIbfBrtdPXnBGFAXYb5HfG7aRz8usxLsCcO0KAMGPPDLrNtol4ngAyVU3HosO3zR9TgXYRn4%2B8%2BzqZM1cqNO0pG3yziDVGU%2FZrWsTpbwa%2BaDRXGabGinlFEOVtBgQCxcU5sec37KDXlkbA9mZwP6pjUG07ALP0%2B9u8fZ3EZQeNoxAXtBE%2F%2FMgoLQiGhx1W3EKT7cXpWanlfgyoPoCmQuvr2mkQl4VuEjrjz0PN1bw65TS%2F5k0xCLgv5aL6c4mvt%2FPvxgrRgAm5qLsMWRqPm7WsSFw5d2gJp59DUz%2BfChj8DJ%2BRPZuaTIBhWYbIdBVVS2XwDA41nlYCKfh%2FoY4omu%2B4L3OZkXFWZllEuXl%2B6%2FEsbWaJX6pECdbZvIxqds774SZK0HaDx9fx9MS0BbRxNNtfv46wiqP%2BbxfO06gJU5m5gKGDjpHiDcbryHe7XdclMPwjCHDqgby7pIBzD5r9%2B%2BBjqkAYETdmeZjlFViUqSMIT0xlhUD4dmGUPYQ14PULCN6COH6%2FXdyOtCsMuhTs9YKZk43Ns8nZAAwK7aXbwmRLuAitR%2F1swMKhPBL0tyLL3%2BBSr0XGZFeOvO3lt0CNa%2Bcb6EdEKr%2BKyoV0G2F6ZeuhUfhxXdzPqQJcufqkj5TPbehubb1mQZb%2BzMDPa8q3dMCvSvdV3DYmZJYrxt9mAewryHkn%2BrTsvB&X-Amz-Signature=713c4bac8d240b0444104db8bb3c8bbde02e0f136e95b51a2bd63c098d4da5f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAIF5Q4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KlzxMV3G0mQpIrTjMj5BZLUULmfRocX7lq7bh3BtJAIhANjRQuZASNqoxXPBMJucp2wpvOP8Y%2BLNKmOuxePqmx1vKv8DCEEQABoMNjM3NDIzMTgzODA1Igx3Bw%2BpI5PtYKuT6yEq3AOIS726EAQf1vam8vPGI%2B2uUB1ymLEbQcOV2H4XXYHqMhQYCdvjxQSq6%2Fjjb7heMMe0IAuQzVrrTs%2FXK%2FO68NOIttmQQhdCg53HJmTeCYXlUc9N6KXa5SJd%2BZ%2Ba1abc6LgBpPuxxB7KD1o392UHamnqN9OH096uLzyCri8aRQlzTf4krIbfBrtdPXnBGFAXYb5HfG7aRz8usxLsCcO0KAMGPPDLrNtol4ngAyVU3HosO3zR9TgXYRn4%2B8%2BzqZM1cqNO0pG3yziDVGU%2FZrWsTpbwa%2BaDRXGabGinlFEOVtBgQCxcU5sec37KDXlkbA9mZwP6pjUG07ALP0%2B9u8fZ3EZQeNoxAXtBE%2F%2FMgoLQiGhx1W3EKT7cXpWanlfgyoPoCmQuvr2mkQl4VuEjrjz0PN1bw65TS%2F5k0xCLgv5aL6c4mvt%2FPvxgrRgAm5qLsMWRqPm7WsSFw5d2gJp59DUz%2BfChj8DJ%2BRPZuaTIBhWYbIdBVVS2XwDA41nlYCKfh%2FoY4omu%2B4L3OZkXFWZllEuXl%2B6%2FEsbWaJX6pECdbZvIxqds774SZK0HaDx9fx9MS0BbRxNNtfv46wiqP%2BbxfO06gJU5m5gKGDjpHiDcbryHe7XdclMPwjCHDqgby7pIBzD5r9%2B%2BBjqkAYETdmeZjlFViUqSMIT0xlhUD4dmGUPYQ14PULCN6COH6%2FXdyOtCsMuhTs9YKZk43Ns8nZAAwK7aXbwmRLuAitR%2F1swMKhPBL0tyLL3%2BBSr0XGZFeOvO3lt0CNa%2Bcb6EdEKr%2BKyoV0G2F6ZeuhUfhxXdzPqQJcufqkj5TPbehubb1mQZb%2BzMDPa8q3dMCvSvdV3DYmZJYrxt9mAewryHkn%2BrTsvB&X-Amz-Signature=dbec71824f3b07b305d7824405c847e26584c249830ef11f47afaea1f65446db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAIF5Q4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6KlzxMV3G0mQpIrTjMj5BZLUULmfRocX7lq7bh3BtJAIhANjRQuZASNqoxXPBMJucp2wpvOP8Y%2BLNKmOuxePqmx1vKv8DCEEQABoMNjM3NDIzMTgzODA1Igx3Bw%2BpI5PtYKuT6yEq3AOIS726EAQf1vam8vPGI%2B2uUB1ymLEbQcOV2H4XXYHqMhQYCdvjxQSq6%2Fjjb7heMMe0IAuQzVrrTs%2FXK%2FO68NOIttmQQhdCg53HJmTeCYXlUc9N6KXa5SJd%2BZ%2Ba1abc6LgBpPuxxB7KD1o392UHamnqN9OH096uLzyCri8aRQlzTf4krIbfBrtdPXnBGFAXYb5HfG7aRz8usxLsCcO0KAMGPPDLrNtol4ngAyVU3HosO3zR9TgXYRn4%2B8%2BzqZM1cqNO0pG3yziDVGU%2FZrWsTpbwa%2BaDRXGabGinlFEOVtBgQCxcU5sec37KDXlkbA9mZwP6pjUG07ALP0%2B9u8fZ3EZQeNoxAXtBE%2F%2FMgoLQiGhx1W3EKT7cXpWanlfgyoPoCmQuvr2mkQl4VuEjrjz0PN1bw65TS%2F5k0xCLgv5aL6c4mvt%2FPvxgrRgAm5qLsMWRqPm7WsSFw5d2gJp59DUz%2BfChj8DJ%2BRPZuaTIBhWYbIdBVVS2XwDA41nlYCKfh%2FoY4omu%2B4L3OZkXFWZllEuXl%2B6%2FEsbWaJX6pECdbZvIxqds774SZK0HaDx9fx9MS0BbRxNNtfv46wiqP%2BbxfO06gJU5m5gKGDjpHiDcbryHe7XdclMPwjCHDqgby7pIBzD5r9%2B%2BBjqkAYETdmeZjlFViUqSMIT0xlhUD4dmGUPYQ14PULCN6COH6%2FXdyOtCsMuhTs9YKZk43Ns8nZAAwK7aXbwmRLuAitR%2F1swMKhPBL0tyLL3%2BBSr0XGZFeOvO3lt0CNa%2Bcb6EdEKr%2BKyoV0G2F6ZeuhUfhxXdzPqQJcufqkj5TPbehubb1mQZb%2BzMDPa8q3dMCvSvdV3DYmZJYrxt9mAewryHkn%2BrTsvB&X-Amz-Signature=6f0c5f30e28c0c4b5436a9006ff2f00658cc48d69f2c39a4365cb782e9bc8cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
