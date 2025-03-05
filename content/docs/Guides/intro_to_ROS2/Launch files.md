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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWM2YK4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG090WHTO1T0mB%2FRoe2mlBtLCHaC5CagpOkMXJ8lvLgHAiBH293rJODpNVMqpXBiIeQOe04rlNAEna%2FM1C7%2B1zDY0ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM2DFYxNgvUKHuDreIKtwDMm2kElg9Gj5miwoV3TUQT28ZUpTf4vw%2FjiMpJFXwzXELfrup9OQb4SkH7Md1ChWDtOU%2BLuLBPcy3DSrOTeIJjLNfx3E3A1ZHdvgLIrHo0TLZiMW8ReUd4%2FQ6wXvRKbHhTl9TCGvG5jskIZBcJRSS0tZwt1pZQqTA%2BarFt%2BTPC8OBoyyl3yKDnWoim9Pw%2Bqy6HAfg0%2Fjd2m5M9pgwhbrmkiIfMHc%2Bl5WpdVg7mQMJrPEG48Pz%2B8lb9uB8yjN%2FO2AXLQlCIT9OvGLP77Bu0B9fVjrS01NFvhpG%2B3qEtVZPPl6%2FqYoMIn1d7GZpaWCQurSEKRRbQpmvtQDTd%2F7vwlw8tjzb28fQnmUmE7vkXXH6qtHZJqkLsp6%2Bztgcn9Y6ajUjmrGWWif3n8Cu43pvUoWGMU87qcCZks9asIvwo%2FiKFPdfyUPTrAuNd23MBk8weVAdc99e0mQHMfePXeURIASuNdDdiS%2Br2CJvqAs%2BWbEiZ5q29ybEwH2HsjY89N4ozFBcqscE%2BuKxJc6sqHFDwD9JyfWPT%2B%2BtdHseZQHy0robRJA4sXMrXxPAgjsBf6819nhnCimG51%2FnN9Rk%2FzR4f9%2BI5eRCEvin4mLKlV1kt7nHgF%2FqkfSu1T2R34XIx1YwhOufvgY6pgHsfT4lai%2F%2FPj7ULa8fUw7KZmx7tZl%2F%2BjbNFdIL29s7Mn3W1lx3RJ1Q2ioJa6bV6kQX2KrjYIMJm%2Bw5kllUnWczTaXz9LrMB2sNGW%2F%2BGPBIbSP0OjskJ%2BnbVSSQv7%2B6vBzZN5Z%2BTjKot7SQ3W%2BipUo1iHHbQSLghZclxJWgkPQJOSjR6TVe%2B4GSdlkHismK8ZxWvkqPoOuufI8QHmKBOarY%2BL9h%2FzN3&X-Amz-Signature=b6ea073dd6530ae7ef2239d6f2c995bf48f935b9b576549a4c98e7577b8f0a75&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWM2YK4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG090WHTO1T0mB%2FRoe2mlBtLCHaC5CagpOkMXJ8lvLgHAiBH293rJODpNVMqpXBiIeQOe04rlNAEna%2FM1C7%2B1zDY0ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM2DFYxNgvUKHuDreIKtwDMm2kElg9Gj5miwoV3TUQT28ZUpTf4vw%2FjiMpJFXwzXELfrup9OQb4SkH7Md1ChWDtOU%2BLuLBPcy3DSrOTeIJjLNfx3E3A1ZHdvgLIrHo0TLZiMW8ReUd4%2FQ6wXvRKbHhTl9TCGvG5jskIZBcJRSS0tZwt1pZQqTA%2BarFt%2BTPC8OBoyyl3yKDnWoim9Pw%2Bqy6HAfg0%2Fjd2m5M9pgwhbrmkiIfMHc%2Bl5WpdVg7mQMJrPEG48Pz%2B8lb9uB8yjN%2FO2AXLQlCIT9OvGLP77Bu0B9fVjrS01NFvhpG%2B3qEtVZPPl6%2FqYoMIn1d7GZpaWCQurSEKRRbQpmvtQDTd%2F7vwlw8tjzb28fQnmUmE7vkXXH6qtHZJqkLsp6%2Bztgcn9Y6ajUjmrGWWif3n8Cu43pvUoWGMU87qcCZks9asIvwo%2FiKFPdfyUPTrAuNd23MBk8weVAdc99e0mQHMfePXeURIASuNdDdiS%2Br2CJvqAs%2BWbEiZ5q29ybEwH2HsjY89N4ozFBcqscE%2BuKxJc6sqHFDwD9JyfWPT%2B%2BtdHseZQHy0robRJA4sXMrXxPAgjsBf6819nhnCimG51%2FnN9Rk%2FzR4f9%2BI5eRCEvin4mLKlV1kt7nHgF%2FqkfSu1T2R34XIx1YwhOufvgY6pgHsfT4lai%2F%2FPj7ULa8fUw7KZmx7tZl%2F%2BjbNFdIL29s7Mn3W1lx3RJ1Q2ioJa6bV6kQX2KrjYIMJm%2Bw5kllUnWczTaXz9LrMB2sNGW%2F%2BGPBIbSP0OjskJ%2BnbVSSQv7%2B6vBzZN5Z%2BTjKot7SQ3W%2BipUo1iHHbQSLghZclxJWgkPQJOSjR6TVe%2B4GSdlkHismK8ZxWvkqPoOuufI8QHmKBOarY%2BL9h%2FzN3&X-Amz-Signature=79a85d4751bfda7f0911d890af99e820855f989e510d4acd0adcf3f5aac5321d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWM2YK4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG090WHTO1T0mB%2FRoe2mlBtLCHaC5CagpOkMXJ8lvLgHAiBH293rJODpNVMqpXBiIeQOe04rlNAEna%2FM1C7%2B1zDY0ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM2DFYxNgvUKHuDreIKtwDMm2kElg9Gj5miwoV3TUQT28ZUpTf4vw%2FjiMpJFXwzXELfrup9OQb4SkH7Md1ChWDtOU%2BLuLBPcy3DSrOTeIJjLNfx3E3A1ZHdvgLIrHo0TLZiMW8ReUd4%2FQ6wXvRKbHhTl9TCGvG5jskIZBcJRSS0tZwt1pZQqTA%2BarFt%2BTPC8OBoyyl3yKDnWoim9Pw%2Bqy6HAfg0%2Fjd2m5M9pgwhbrmkiIfMHc%2Bl5WpdVg7mQMJrPEG48Pz%2B8lb9uB8yjN%2FO2AXLQlCIT9OvGLP77Bu0B9fVjrS01NFvhpG%2B3qEtVZPPl6%2FqYoMIn1d7GZpaWCQurSEKRRbQpmvtQDTd%2F7vwlw8tjzb28fQnmUmE7vkXXH6qtHZJqkLsp6%2Bztgcn9Y6ajUjmrGWWif3n8Cu43pvUoWGMU87qcCZks9asIvwo%2FiKFPdfyUPTrAuNd23MBk8weVAdc99e0mQHMfePXeURIASuNdDdiS%2Br2CJvqAs%2BWbEiZ5q29ybEwH2HsjY89N4ozFBcqscE%2BuKxJc6sqHFDwD9JyfWPT%2B%2BtdHseZQHy0robRJA4sXMrXxPAgjsBf6819nhnCimG51%2FnN9Rk%2FzR4f9%2BI5eRCEvin4mLKlV1kt7nHgF%2FqkfSu1T2R34XIx1YwhOufvgY6pgHsfT4lai%2F%2FPj7ULa8fUw7KZmx7tZl%2F%2BjbNFdIL29s7Mn3W1lx3RJ1Q2ioJa6bV6kQX2KrjYIMJm%2Bw5kllUnWczTaXz9LrMB2sNGW%2F%2BGPBIbSP0OjskJ%2BnbVSSQv7%2B6vBzZN5Z%2BTjKot7SQ3W%2BipUo1iHHbQSLghZclxJWgkPQJOSjR6TVe%2B4GSdlkHismK8ZxWvkqPoOuufI8QHmKBOarY%2BL9h%2FzN3&X-Amz-Signature=c238f74f5a5c90e875ceb82038813e2a712464ebd3fc21ff80b3c41f6a754c30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
