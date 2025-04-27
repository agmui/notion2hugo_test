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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNEJ2S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGddWSEidOX2vmbVgoEUAZEYc6tDLS5szy3GQj1K%2Fi1QAiEAh6axUpxvmGH0VTopehUbsShq1xEYQnI%2BFUVlk%2B1x%2Bnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHlT9GBHrSfcBVrTZyrcAyofBqhAEEuXZ0ji6F0pyl9uryth0lCAP3Wy9kKW34xbbk3VmWJw1ObQJy%2F%2BmW9WspLv0fGZPrCo8PzCr5hUE7zC49gol22ETO%2FN%2FhJ%2Fxk4u8qQIm9VSu%2BcHgoZk4eyURCQiEymnAOZ%2Futnr3YFzMx2Jy3Dq08%2FIoLR2NSDUxXLEWAnatt5bjZXdc%2FNrqw8eIiCP9IvEmvRulHESHaRWVROZt5qcnFcQPpzgabADcY0NcRqSzrD8OzPny7RINNgF0xzsKaM0%2BxEP2pbpCEH0TZuWv0jj4aidQtzFQj4lBnsrNbONJyfw4qkxsFC7Yt51%2BdbXLjwEmCvIn0D7vNTUTp2cez2thPt9GAzzFkzRnCHeFIsHOAriiX9v56ZIUvd9BUI0w3n9mhP4UdaJA1qYLQsGgZ1AKdCZBtPSkgcJqdt84JLpgr0rwB5p0GQCweZarVDnYhVmoTjTvsJFOEQs6y4sbNZyGSvWa7FAcN1DJIU5yiXLoczRz1%2FAsrCf8dRlB7bPlw8uTx%2F7WXYtF4U4TYwhFkrxwCcc627UF9FKDOKoYgq%2Fu5w1Jr1T2W8P6wbr%2B6%2FL0ZX%2BAIuJ9A8fxylhTuKVZWfKo6s1FkCpSJvNzmy6Xj1XJVo%2F3a5P139gMLWMuMAGOqUBybLHJQVJWdaqPfpmY5dSZI8W%2B2XcGIb3Vhup0nAKEjr4kMY4ADMS3C4ZCElPEpun6%2B2dcmWHOCXI3OLmHhAOfe8srZ%2FcyhMzI4i76dEioIvAF3zdhGznG%2FUjcOn9S6XHXWrX%2FCw2KeqwEl%2BuxnPwc76FvFA2iAZL4iO5t9y0B1xW0fY2Kl3DF93XhBmAYnmDIZNT5vFdwRoHbssEYg520y%2F7MVM4&X-Amz-Signature=d3a93442f4d0b1c44e3333f4578e87b70fca30a4bfa11466a05e02c67b7bf59e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNEJ2S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGddWSEidOX2vmbVgoEUAZEYc6tDLS5szy3GQj1K%2Fi1QAiEAh6axUpxvmGH0VTopehUbsShq1xEYQnI%2BFUVlk%2B1x%2Bnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHlT9GBHrSfcBVrTZyrcAyofBqhAEEuXZ0ji6F0pyl9uryth0lCAP3Wy9kKW34xbbk3VmWJw1ObQJy%2F%2BmW9WspLv0fGZPrCo8PzCr5hUE7zC49gol22ETO%2FN%2FhJ%2Fxk4u8qQIm9VSu%2BcHgoZk4eyURCQiEymnAOZ%2Futnr3YFzMx2Jy3Dq08%2FIoLR2NSDUxXLEWAnatt5bjZXdc%2FNrqw8eIiCP9IvEmvRulHESHaRWVROZt5qcnFcQPpzgabADcY0NcRqSzrD8OzPny7RINNgF0xzsKaM0%2BxEP2pbpCEH0TZuWv0jj4aidQtzFQj4lBnsrNbONJyfw4qkxsFC7Yt51%2BdbXLjwEmCvIn0D7vNTUTp2cez2thPt9GAzzFkzRnCHeFIsHOAriiX9v56ZIUvd9BUI0w3n9mhP4UdaJA1qYLQsGgZ1AKdCZBtPSkgcJqdt84JLpgr0rwB5p0GQCweZarVDnYhVmoTjTvsJFOEQs6y4sbNZyGSvWa7FAcN1DJIU5yiXLoczRz1%2FAsrCf8dRlB7bPlw8uTx%2F7WXYtF4U4TYwhFkrxwCcc627UF9FKDOKoYgq%2Fu5w1Jr1T2W8P6wbr%2B6%2FL0ZX%2BAIuJ9A8fxylhTuKVZWfKo6s1FkCpSJvNzmy6Xj1XJVo%2F3a5P139gMLWMuMAGOqUBybLHJQVJWdaqPfpmY5dSZI8W%2B2XcGIb3Vhup0nAKEjr4kMY4ADMS3C4ZCElPEpun6%2B2dcmWHOCXI3OLmHhAOfe8srZ%2FcyhMzI4i76dEioIvAF3zdhGznG%2FUjcOn9S6XHXWrX%2FCw2KeqwEl%2BuxnPwc76FvFA2iAZL4iO5t9y0B1xW0fY2Kl3DF93XhBmAYnmDIZNT5vFdwRoHbssEYg520y%2F7MVM4&X-Amz-Signature=ec83e26617600fb8682ca22d2a23b165bae6dbc282f197c361dc075dda30c4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZNEJ2S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGddWSEidOX2vmbVgoEUAZEYc6tDLS5szy3GQj1K%2Fi1QAiEAh6axUpxvmGH0VTopehUbsShq1xEYQnI%2BFUVlk%2B1x%2Bnoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHlT9GBHrSfcBVrTZyrcAyofBqhAEEuXZ0ji6F0pyl9uryth0lCAP3Wy9kKW34xbbk3VmWJw1ObQJy%2F%2BmW9WspLv0fGZPrCo8PzCr5hUE7zC49gol22ETO%2FN%2FhJ%2Fxk4u8qQIm9VSu%2BcHgoZk4eyURCQiEymnAOZ%2Futnr3YFzMx2Jy3Dq08%2FIoLR2NSDUxXLEWAnatt5bjZXdc%2FNrqw8eIiCP9IvEmvRulHESHaRWVROZt5qcnFcQPpzgabADcY0NcRqSzrD8OzPny7RINNgF0xzsKaM0%2BxEP2pbpCEH0TZuWv0jj4aidQtzFQj4lBnsrNbONJyfw4qkxsFC7Yt51%2BdbXLjwEmCvIn0D7vNTUTp2cez2thPt9GAzzFkzRnCHeFIsHOAriiX9v56ZIUvd9BUI0w3n9mhP4UdaJA1qYLQsGgZ1AKdCZBtPSkgcJqdt84JLpgr0rwB5p0GQCweZarVDnYhVmoTjTvsJFOEQs6y4sbNZyGSvWa7FAcN1DJIU5yiXLoczRz1%2FAsrCf8dRlB7bPlw8uTx%2F7WXYtF4U4TYwhFkrxwCcc627UF9FKDOKoYgq%2Fu5w1Jr1T2W8P6wbr%2B6%2FL0ZX%2BAIuJ9A8fxylhTuKVZWfKo6s1FkCpSJvNzmy6Xj1XJVo%2F3a5P139gMLWMuMAGOqUBybLHJQVJWdaqPfpmY5dSZI8W%2B2XcGIb3Vhup0nAKEjr4kMY4ADMS3C4ZCElPEpun6%2B2dcmWHOCXI3OLmHhAOfe8srZ%2FcyhMzI4i76dEioIvAF3zdhGznG%2FUjcOn9S6XHXWrX%2FCw2KeqwEl%2BuxnPwc76FvFA2iAZL4iO5t9y0B1xW0fY2Kl3DF93XhBmAYnmDIZNT5vFdwRoHbssEYg520y%2F7MVM4&X-Amz-Signature=144659a50a6544c9b9665aa0d4d6becabbb42989c44e9d26b6ccbdc4c52abca6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
