---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS3O5FK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFYl6A7e8rVQbg%2FEH10u9y9u2SDJre%2FnQem0%2BkUB3V9tAiAzvlKemssBv97mPqAsnkKcbtnY6KAJIfuT94wh7cJAyiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5p1LrZTDjiYMQbGOKtwDTu3btAVx5YcvS9YjzQVu2M0y5fluGtvxzSMB%2FDc4Jc9TROMSHlsL%2F51XhQ6vzscCpY7Pt6JF6r4jJdaqfhs2zskvmG9FDKqPvHsGaV2QhsxyOI46pB4Zwyd%2BAN6GD35zyB1wng38%2Bp%2FmV472xauTWEGIZILqUXP3AKYUzOTBRTWaxjIAEskj69TAlr4oFORpsdTgKV8z0kjT%2FfgUzjPq8e%2FVcQBWvkI62KRw%2BRn3k68W6YWvLo5qUm49HmtTxamHM9UYcM6yW%2FbZHLUhX%2BxZwBdljy6JJ7a9ErJEtdsPza0nRfrE7VWDJB2YymwEtURYdiDRszCzO9m6SzNBITiqBaNtDyIE9a99fKj1O4bAFXsBHQHMuRmClvgKb56M0wjl6AmZlqkNID534%2FNAKhs7cDy2IOFy9dxBS1ujpf%2FjGHFmGiSuartEkL5utuWcCI0ZF92qfjgMe%2FWyYG%2BABL5bab27XysBiti7sYPSr0i53NPvFtGEdTYMv3Nkh%2FzametKR0r1%2FbraM6f9k88WTmXNWvv9hYwDw35S%2FTzals7FdhdewTz06GLOkrRisQWm%2FLtAIMPHCU2xWTIEoL2berh0c%2F0eSRxMa9Ql%2BPEyCtSckNYXkKqQZ1H%2BmC6%2BAw0w6e2axAY6pgGvWg4%2FUv4tKsk8ssX%2Fg7rSXUOWhgpvc4RFnVBgcbUzvq8U%2FnpEjRCvH0NMbQ5nTVQBbtLJ6dwpHXC0b8FsfSYMO21aolQOndOSFF%2BR91x2bXHuaZ%2BgTsj6pKItG2IiT3M%2Fz%2BDnzt0Qcci8CmVmf6FF8U6vv52fe%2BJZ8WysgL3KU1EiQfRFzDr%2BTYMCN3J%2Fprh8%2BH%2BB4zGGnN%2BxBGK9FR3jy8xNjDZx&X-Amz-Signature=c25ab1040626ecdc38b57eb515e2e073ef6edf95ac445c1eeba1ae0cc36c1066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS3O5FK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFYl6A7e8rVQbg%2FEH10u9y9u2SDJre%2FnQem0%2BkUB3V9tAiAzvlKemssBv97mPqAsnkKcbtnY6KAJIfuT94wh7cJAyiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5p1LrZTDjiYMQbGOKtwDTu3btAVx5YcvS9YjzQVu2M0y5fluGtvxzSMB%2FDc4Jc9TROMSHlsL%2F51XhQ6vzscCpY7Pt6JF6r4jJdaqfhs2zskvmG9FDKqPvHsGaV2QhsxyOI46pB4Zwyd%2BAN6GD35zyB1wng38%2Bp%2FmV472xauTWEGIZILqUXP3AKYUzOTBRTWaxjIAEskj69TAlr4oFORpsdTgKV8z0kjT%2FfgUzjPq8e%2FVcQBWvkI62KRw%2BRn3k68W6YWvLo5qUm49HmtTxamHM9UYcM6yW%2FbZHLUhX%2BxZwBdljy6JJ7a9ErJEtdsPza0nRfrE7VWDJB2YymwEtURYdiDRszCzO9m6SzNBITiqBaNtDyIE9a99fKj1O4bAFXsBHQHMuRmClvgKb56M0wjl6AmZlqkNID534%2FNAKhs7cDy2IOFy9dxBS1ujpf%2FjGHFmGiSuartEkL5utuWcCI0ZF92qfjgMe%2FWyYG%2BABL5bab27XysBiti7sYPSr0i53NPvFtGEdTYMv3Nkh%2FzametKR0r1%2FbraM6f9k88WTmXNWvv9hYwDw35S%2FTzals7FdhdewTz06GLOkrRisQWm%2FLtAIMPHCU2xWTIEoL2berh0c%2F0eSRxMa9Ql%2BPEyCtSckNYXkKqQZ1H%2BmC6%2BAw0w6e2axAY6pgGvWg4%2FUv4tKsk8ssX%2Fg7rSXUOWhgpvc4RFnVBgcbUzvq8U%2FnpEjRCvH0NMbQ5nTVQBbtLJ6dwpHXC0b8FsfSYMO21aolQOndOSFF%2BR91x2bXHuaZ%2BgTsj6pKItG2IiT3M%2Fz%2BDnzt0Qcci8CmVmf6FF8U6vv52fe%2BJZ8WysgL3KU1EiQfRFzDr%2BTYMCN3J%2Fprh8%2BH%2BB4zGGnN%2BxBGK9FR3jy8xNjDZx&X-Amz-Signature=d8cc1cedbca6eb04e5f01684b76ea3afba8967b27ba9b9f6cc8e6d20295c62e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCS3O5FK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFYl6A7e8rVQbg%2FEH10u9y9u2SDJre%2FnQem0%2BkUB3V9tAiAzvlKemssBv97mPqAsnkKcbtnY6KAJIfuT94wh7cJAyiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5p1LrZTDjiYMQbGOKtwDTu3btAVx5YcvS9YjzQVu2M0y5fluGtvxzSMB%2FDc4Jc9TROMSHlsL%2F51XhQ6vzscCpY7Pt6JF6r4jJdaqfhs2zskvmG9FDKqPvHsGaV2QhsxyOI46pB4Zwyd%2BAN6GD35zyB1wng38%2Bp%2FmV472xauTWEGIZILqUXP3AKYUzOTBRTWaxjIAEskj69TAlr4oFORpsdTgKV8z0kjT%2FfgUzjPq8e%2FVcQBWvkI62KRw%2BRn3k68W6YWvLo5qUm49HmtTxamHM9UYcM6yW%2FbZHLUhX%2BxZwBdljy6JJ7a9ErJEtdsPza0nRfrE7VWDJB2YymwEtURYdiDRszCzO9m6SzNBITiqBaNtDyIE9a99fKj1O4bAFXsBHQHMuRmClvgKb56M0wjl6AmZlqkNID534%2FNAKhs7cDy2IOFy9dxBS1ujpf%2FjGHFmGiSuartEkL5utuWcCI0ZF92qfjgMe%2FWyYG%2BABL5bab27XysBiti7sYPSr0i53NPvFtGEdTYMv3Nkh%2FzametKR0r1%2FbraM6f9k88WTmXNWvv9hYwDw35S%2FTzals7FdhdewTz06GLOkrRisQWm%2FLtAIMPHCU2xWTIEoL2berh0c%2F0eSRxMa9Ql%2BPEyCtSckNYXkKqQZ1H%2BmC6%2BAw0w6e2axAY6pgGvWg4%2FUv4tKsk8ssX%2Fg7rSXUOWhgpvc4RFnVBgcbUzvq8U%2FnpEjRCvH0NMbQ5nTVQBbtLJ6dwpHXC0b8FsfSYMO21aolQOndOSFF%2BR91x2bXHuaZ%2BgTsj6pKItG2IiT3M%2Fz%2BDnzt0Qcci8CmVmf6FF8U6vv52fe%2BJZ8WysgL3KU1EiQfRFzDr%2BTYMCN3J%2Fprh8%2BH%2BB4zGGnN%2BxBGK9FR3jy8xNjDZx&X-Amz-Signature=ae6f84b5b09ef96b1e1b119746b9cfbc734fb16deca53aec92b3794bf0ceb720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
