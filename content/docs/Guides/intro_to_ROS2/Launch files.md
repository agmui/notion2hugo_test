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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYHM773%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh2TfPIPq7ilMiGTihULLxEd7BdYqMHHs%2Brzaf%2FLvmIgIgOBz0Qvy%2F3maGxvnjNuKqYjUz0Ep6gr%2F6a2mkOwO7LDgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET6CS6uetHklIWPXCrcAwYODAq7HIrCjZZ44O5XLWrnFbNuCi7WA84LeDj28vY9QKzrDw0gkn51XHpsU81bH%2FP889BCttFWZcvGgGifG8uYdYksq%2B22PAdJShVglpJCR5Q6tkEGrLy2%2FlnN%2FrCycWVpNNmpJiTXa6wS5nPH%2BRcHVX010yilOY9W8VughxshTnG7fXySdIQWmlEbqOzuMrAx2EMi0WJptjqZW09dpVIRvs5pmrlRA3VnWyVpeH1yNT8Bx5GCivRgChtbPFuoAE7mlDiJLqH%2BDOrbilA0NLeR%2BZO02rAQh1O%2BN5b1iJ%2BUWkFxKFBVxtWUSdhwAlR5x7cjOrm6ORhZebRz2sszPLvp8H4qF44cgx51hoyF8FWK77kjJLN%2FJFJ7MJ5uhbChHi6Al4y5s8911OeCdK9zYZXBKmLQsHd0XOU6gmUdMXvKLmYQP5YLEnyHm7P1YZoYDjiNeuGxhnhUITxmUloH6gzjKjuiWjBN7dlQThADTcSEdZuPbu5Yr5ZV4EGJiRI17f4xwfPvlJK8iuBcPm4qZzoOsp377r1WLYfQo621sDuBJ0asQH9D0qy1jEI8fiInFrxUobmZ6KmcTw2WxJd9Gzu1%2BMuTcZu%2BqtqW9jxzMHCRbK6iQZI6bBnb%2FKLmMKHQ570GOqUBUlYI7DS07hxfsGlC%2FLB5grJMk%2BdUaaI8dtDTpVURM5zTy9qFVD2bEaifbZ40NPMb8S7l8NuDAzv0FMzeVtXhiVDbnrDQe%2Fngj6IW8V4rniC8xZjrQSk4koNVcPEBXdkD2sf5lywgVm%2FbtowgI9MXtn7aZA2M8I7MO%2BWxTRfZVDB0B4zVZaBsdrDNw%2B1uafqYcxYCmkOEmieNRZ8bchiuEoRi%2BRiO&X-Amz-Signature=294169ba8f36f6a66e391ecdd9b38905c537b61283e2102f1c6f1b04af021f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYHM773%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh2TfPIPq7ilMiGTihULLxEd7BdYqMHHs%2Brzaf%2FLvmIgIgOBz0Qvy%2F3maGxvnjNuKqYjUz0Ep6gr%2F6a2mkOwO7LDgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET6CS6uetHklIWPXCrcAwYODAq7HIrCjZZ44O5XLWrnFbNuCi7WA84LeDj28vY9QKzrDw0gkn51XHpsU81bH%2FP889BCttFWZcvGgGifG8uYdYksq%2B22PAdJShVglpJCR5Q6tkEGrLy2%2FlnN%2FrCycWVpNNmpJiTXa6wS5nPH%2BRcHVX010yilOY9W8VughxshTnG7fXySdIQWmlEbqOzuMrAx2EMi0WJptjqZW09dpVIRvs5pmrlRA3VnWyVpeH1yNT8Bx5GCivRgChtbPFuoAE7mlDiJLqH%2BDOrbilA0NLeR%2BZO02rAQh1O%2BN5b1iJ%2BUWkFxKFBVxtWUSdhwAlR5x7cjOrm6ORhZebRz2sszPLvp8H4qF44cgx51hoyF8FWK77kjJLN%2FJFJ7MJ5uhbChHi6Al4y5s8911OeCdK9zYZXBKmLQsHd0XOU6gmUdMXvKLmYQP5YLEnyHm7P1YZoYDjiNeuGxhnhUITxmUloH6gzjKjuiWjBN7dlQThADTcSEdZuPbu5Yr5ZV4EGJiRI17f4xwfPvlJK8iuBcPm4qZzoOsp377r1WLYfQo621sDuBJ0asQH9D0qy1jEI8fiInFrxUobmZ6KmcTw2WxJd9Gzu1%2BMuTcZu%2BqtqW9jxzMHCRbK6iQZI6bBnb%2FKLmMKHQ570GOqUBUlYI7DS07hxfsGlC%2FLB5grJMk%2BdUaaI8dtDTpVURM5zTy9qFVD2bEaifbZ40NPMb8S7l8NuDAzv0FMzeVtXhiVDbnrDQe%2Fngj6IW8V4rniC8xZjrQSk4koNVcPEBXdkD2sf5lywgVm%2FbtowgI9MXtn7aZA2M8I7MO%2BWxTRfZVDB0B4zVZaBsdrDNw%2B1uafqYcxYCmkOEmieNRZ8bchiuEoRi%2BRiO&X-Amz-Signature=c37a181d18c3688b75b8115657b56e2d90a5879470ca903f5f98ff31e29f7e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYHM773%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh2TfPIPq7ilMiGTihULLxEd7BdYqMHHs%2Brzaf%2FLvmIgIgOBz0Qvy%2F3maGxvnjNuKqYjUz0Ep6gr%2F6a2mkOwO7LDgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDET6CS6uetHklIWPXCrcAwYODAq7HIrCjZZ44O5XLWrnFbNuCi7WA84LeDj28vY9QKzrDw0gkn51XHpsU81bH%2FP889BCttFWZcvGgGifG8uYdYksq%2B22PAdJShVglpJCR5Q6tkEGrLy2%2FlnN%2FrCycWVpNNmpJiTXa6wS5nPH%2BRcHVX010yilOY9W8VughxshTnG7fXySdIQWmlEbqOzuMrAx2EMi0WJptjqZW09dpVIRvs5pmrlRA3VnWyVpeH1yNT8Bx5GCivRgChtbPFuoAE7mlDiJLqH%2BDOrbilA0NLeR%2BZO02rAQh1O%2BN5b1iJ%2BUWkFxKFBVxtWUSdhwAlR5x7cjOrm6ORhZebRz2sszPLvp8H4qF44cgx51hoyF8FWK77kjJLN%2FJFJ7MJ5uhbChHi6Al4y5s8911OeCdK9zYZXBKmLQsHd0XOU6gmUdMXvKLmYQP5YLEnyHm7P1YZoYDjiNeuGxhnhUITxmUloH6gzjKjuiWjBN7dlQThADTcSEdZuPbu5Yr5ZV4EGJiRI17f4xwfPvlJK8iuBcPm4qZzoOsp377r1WLYfQo621sDuBJ0asQH9D0qy1jEI8fiInFrxUobmZ6KmcTw2WxJd9Gzu1%2BMuTcZu%2BqtqW9jxzMHCRbK6iQZI6bBnb%2FKLmMKHQ570GOqUBUlYI7DS07hxfsGlC%2FLB5grJMk%2BdUaaI8dtDTpVURM5zTy9qFVD2bEaifbZ40NPMb8S7l8NuDAzv0FMzeVtXhiVDbnrDQe%2Fngj6IW8V4rniC8xZjrQSk4koNVcPEBXdkD2sf5lywgVm%2FbtowgI9MXtn7aZA2M8I7MO%2BWxTRfZVDB0B4zVZaBsdrDNw%2B1uafqYcxYCmkOEmieNRZ8bchiuEoRi%2BRiO&X-Amz-Signature=c62d86a6660af61fbbfc64e4088eac0d855b560a79da4d1f0baed9bcfce4ab7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
