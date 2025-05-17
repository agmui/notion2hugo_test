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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U4ZNL7I%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1wOYhBnKqYjC%2FGq01OtH2WbpzylhK0rDgg6bKsvf5mAiEA%2F%2BpuMoZznaRON9PIEGdqWW7asc7KuFxYM8TCPmOCT%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKzDRpGygRMm88wNNyrcA4mRVLBTgL%2Bas87HCp%2FRbGyablzBVN2wxGIbBlWQ2ZkOnHKJtdxh%2Fgn0Sab0%2BgQYODyrnYjt467I0Dn0uFe5ejeaaGncbdJphtxxck9uhhMhdYiX1sUhPuFfOFl7AFQbXWCWjvjYVaIc6Hbh7oi%2BrXW%2FtIT7YIcPTqov66B3DaJE8gXFS3eXX%2BxBBO90W9Wh4uNQEsW66IWiuSkj8aqWrFUsGf1hg7mO47X%2FO%2F1viDm%2BJ3QtT3IpZwgfkVdS5xQ6x5rFhbFzSWctbymMxfxUOmEXgBCIOkzChOVSdrqPPMLqY0bM5UcOnvIUJIy7lBVe4ZLlPfuw2q5G3lT565pwL2SZN5UipM4aRMX6jJ4By00IMe85nUDdaVty43GywtBY0Arj8YmiKBXbWc%2B99UIbUi1bFeO1zx8cqcpT5lgqkXyIkzODFjfcTspZOnB53RHK%2FTNYXX6Y6JyWMeaCyFCaQG2r834%2FKXaLM7QrwM4Eru8a4%2BLnO9LvDS6%2F6VH71pAmnBSiK4k21WsNBRY6BOGHoRNCvqrjKcw1J0YPkt4kw72JKVJMVzS9Pz6Vk7fFrO5MQTNVH%2Bcc3bd9aQfJgxM8SWKXWN2ZLkZ%2Bp9dFilsSimWR24Agb3VqAkTB%2BYQrML62osEGOqUB5KAe%2BfgpV02opry1z29AMKEBadI45qHE%2B0Sqr1GSWN6XGIm78kogLCP7VLQwZwVc5P8Cy9mPFHPm%2BwtiO%2BUBxo3dRoclzfYMRB2VsMJrUDpRaJayieSsxa%2BQuRXHntQO6pbnQjX44hRFNTu3%2BQHPPJF4%2F3quGOnuTscCq7XkEMZ%2Be7HvFc9Weq3ZTluuYAmz9EajxUxusMJxK5WJVwGvxslWFCXU&X-Amz-Signature=180e580c474c070f7b95b01ca8660bd400cad3ff8311c3968dfa228a8723f90d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U4ZNL7I%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1wOYhBnKqYjC%2FGq01OtH2WbpzylhK0rDgg6bKsvf5mAiEA%2F%2BpuMoZznaRON9PIEGdqWW7asc7KuFxYM8TCPmOCT%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKzDRpGygRMm88wNNyrcA4mRVLBTgL%2Bas87HCp%2FRbGyablzBVN2wxGIbBlWQ2ZkOnHKJtdxh%2Fgn0Sab0%2BgQYODyrnYjt467I0Dn0uFe5ejeaaGncbdJphtxxck9uhhMhdYiX1sUhPuFfOFl7AFQbXWCWjvjYVaIc6Hbh7oi%2BrXW%2FtIT7YIcPTqov66B3DaJE8gXFS3eXX%2BxBBO90W9Wh4uNQEsW66IWiuSkj8aqWrFUsGf1hg7mO47X%2FO%2F1viDm%2BJ3QtT3IpZwgfkVdS5xQ6x5rFhbFzSWctbymMxfxUOmEXgBCIOkzChOVSdrqPPMLqY0bM5UcOnvIUJIy7lBVe4ZLlPfuw2q5G3lT565pwL2SZN5UipM4aRMX6jJ4By00IMe85nUDdaVty43GywtBY0Arj8YmiKBXbWc%2B99UIbUi1bFeO1zx8cqcpT5lgqkXyIkzODFjfcTspZOnB53RHK%2FTNYXX6Y6JyWMeaCyFCaQG2r834%2FKXaLM7QrwM4Eru8a4%2BLnO9LvDS6%2F6VH71pAmnBSiK4k21WsNBRY6BOGHoRNCvqrjKcw1J0YPkt4kw72JKVJMVzS9Pz6Vk7fFrO5MQTNVH%2Bcc3bd9aQfJgxM8SWKXWN2ZLkZ%2Bp9dFilsSimWR24Agb3VqAkTB%2BYQrML62osEGOqUB5KAe%2BfgpV02opry1z29AMKEBadI45qHE%2B0Sqr1GSWN6XGIm78kogLCP7VLQwZwVc5P8Cy9mPFHPm%2BwtiO%2BUBxo3dRoclzfYMRB2VsMJrUDpRaJayieSsxa%2BQuRXHntQO6pbnQjX44hRFNTu3%2BQHPPJF4%2F3quGOnuTscCq7XkEMZ%2Be7HvFc9Weq3ZTluuYAmz9EajxUxusMJxK5WJVwGvxslWFCXU&X-Amz-Signature=3d89819f2a4452f4759ef29b17934b08586d0358923785684bdbd998e5b56ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U4ZNL7I%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1wOYhBnKqYjC%2FGq01OtH2WbpzylhK0rDgg6bKsvf5mAiEA%2F%2BpuMoZznaRON9PIEGdqWW7asc7KuFxYM8TCPmOCT%2Fkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKzDRpGygRMm88wNNyrcA4mRVLBTgL%2Bas87HCp%2FRbGyablzBVN2wxGIbBlWQ2ZkOnHKJtdxh%2Fgn0Sab0%2BgQYODyrnYjt467I0Dn0uFe5ejeaaGncbdJphtxxck9uhhMhdYiX1sUhPuFfOFl7AFQbXWCWjvjYVaIc6Hbh7oi%2BrXW%2FtIT7YIcPTqov66B3DaJE8gXFS3eXX%2BxBBO90W9Wh4uNQEsW66IWiuSkj8aqWrFUsGf1hg7mO47X%2FO%2F1viDm%2BJ3QtT3IpZwgfkVdS5xQ6x5rFhbFzSWctbymMxfxUOmEXgBCIOkzChOVSdrqPPMLqY0bM5UcOnvIUJIy7lBVe4ZLlPfuw2q5G3lT565pwL2SZN5UipM4aRMX6jJ4By00IMe85nUDdaVty43GywtBY0Arj8YmiKBXbWc%2B99UIbUi1bFeO1zx8cqcpT5lgqkXyIkzODFjfcTspZOnB53RHK%2FTNYXX6Y6JyWMeaCyFCaQG2r834%2FKXaLM7QrwM4Eru8a4%2BLnO9LvDS6%2F6VH71pAmnBSiK4k21WsNBRY6BOGHoRNCvqrjKcw1J0YPkt4kw72JKVJMVzS9Pz6Vk7fFrO5MQTNVH%2Bcc3bd9aQfJgxM8SWKXWN2ZLkZ%2Bp9dFilsSimWR24Agb3VqAkTB%2BYQrML62osEGOqUB5KAe%2BfgpV02opry1z29AMKEBadI45qHE%2B0Sqr1GSWN6XGIm78kogLCP7VLQwZwVc5P8Cy9mPFHPm%2BwtiO%2BUBxo3dRoclzfYMRB2VsMJrUDpRaJayieSsxa%2BQuRXHntQO6pbnQjX44hRFNTu3%2BQHPPJF4%2F3quGOnuTscCq7XkEMZ%2Be7HvFc9Weq3ZTluuYAmz9EajxUxusMJxK5WJVwGvxslWFCXU&X-Amz-Signature=8a0e4639bb14d20d62a33d832cda7619f992448e07135ac957367ca67fd26598&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
