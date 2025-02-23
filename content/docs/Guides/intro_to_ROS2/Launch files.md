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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXHUONA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMxlJ3KtaPPAop5zdTn0uiMI77EkKtHiy%2B5Adj8yL%2FtAiBMPTNcAzzVP%2FPLjXFgJ5WfjlaFuSMNGply2vMUNwm7eSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxx%2BL5slgkEGyPSZUKtwDy1XHszvwx3JVoYl3B0pMPDqhvobcmWAdaUNn2aOsxki21vWKDURNQqU7ICyi3XROuJvTzoIz1wZll5PDMGE9TD6%2FU3thq7a3pZqt7mwDz5GkcvU9RxT6PIInnZIb%2BA%2FEklMPorUasjKk3q5oWF5CIShUk8YpLceWR3Y%2FnSkAHr6dSCFzlxlGgIO9Qh7yEQ4Lx%2Be2AlcQ%2FoY1kqd1tSnKHhuGMV6Av1xKeH5pSpAT4tu60gK9bAGjq5TzGMCAdTr3iKarliURiaaqVngMQPCeAwcOq8M3X1YgbKy70bWzgqpLYMFVdrMTBxMVenBiNCu3u8AJEVdpxlebhiYx3Y0S4O%2F4rsYjSbXYkv3IO4xEa9D3jaywacjLWy9Oe5C%2FP2GMFHAMFbT69q%2FK%2BptQWEZ4pUQ9Qmnm%2F6k210RPPQ6x6gkyiLUSfzKnY4bCCB%2BvHbdNkuz%2FgsO67EeVTx%2Fdo7EBG%2Beo2ntBg8v2yAOu%2FZGbFMzFOh0W93oUTR8zmfYqvBJs3qeZyjou5dm3xzHlLeLyt2kf2CzOujkZ6F0w7RfcFzNmbk3tEr4V7tSvAY5HKvdEsgPPgnYDuJqhNPQAvZtpQ92I6GL%2F0FMO82UyGQD1KTkvlbZawgxXZHqmfjkwucTqvQY6pgFjqAmjhpPI1IrLT7t%2ByIaYxzTziOYgXq7bFsQpXTwfySbGvbHqCZEJIC3YoLhiIgEeHIJ32YgZujxDAjyleuzFDUawF8I5KIxbX4%2BUfgBugz5FdDZ7EU4gqAfSvQ3Se%2B9lTcwPHgV6bMv5i4VW9VeLxPuW82R45lQOlkyoUxZAtfd9L7h%2FklyX%2FZSCEnz4tHB9QT6g%2F1BrxgVv7bddf9iyv5lcuFrl&X-Amz-Signature=edd712e7137b519e95dd5c950818b9a7041cc9431d8d196a4b738f42ddac3e83&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXHUONA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMxlJ3KtaPPAop5zdTn0uiMI77EkKtHiy%2B5Adj8yL%2FtAiBMPTNcAzzVP%2FPLjXFgJ5WfjlaFuSMNGply2vMUNwm7eSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxx%2BL5slgkEGyPSZUKtwDy1XHszvwx3JVoYl3B0pMPDqhvobcmWAdaUNn2aOsxki21vWKDURNQqU7ICyi3XROuJvTzoIz1wZll5PDMGE9TD6%2FU3thq7a3pZqt7mwDz5GkcvU9RxT6PIInnZIb%2BA%2FEklMPorUasjKk3q5oWF5CIShUk8YpLceWR3Y%2FnSkAHr6dSCFzlxlGgIO9Qh7yEQ4Lx%2Be2AlcQ%2FoY1kqd1tSnKHhuGMV6Av1xKeH5pSpAT4tu60gK9bAGjq5TzGMCAdTr3iKarliURiaaqVngMQPCeAwcOq8M3X1YgbKy70bWzgqpLYMFVdrMTBxMVenBiNCu3u8AJEVdpxlebhiYx3Y0S4O%2F4rsYjSbXYkv3IO4xEa9D3jaywacjLWy9Oe5C%2FP2GMFHAMFbT69q%2FK%2BptQWEZ4pUQ9Qmnm%2F6k210RPPQ6x6gkyiLUSfzKnY4bCCB%2BvHbdNkuz%2FgsO67EeVTx%2Fdo7EBG%2Beo2ntBg8v2yAOu%2FZGbFMzFOh0W93oUTR8zmfYqvBJs3qeZyjou5dm3xzHlLeLyt2kf2CzOujkZ6F0w7RfcFzNmbk3tEr4V7tSvAY5HKvdEsgPPgnYDuJqhNPQAvZtpQ92I6GL%2F0FMO82UyGQD1KTkvlbZawgxXZHqmfjkwucTqvQY6pgFjqAmjhpPI1IrLT7t%2ByIaYxzTziOYgXq7bFsQpXTwfySbGvbHqCZEJIC3YoLhiIgEeHIJ32YgZujxDAjyleuzFDUawF8I5KIxbX4%2BUfgBugz5FdDZ7EU4gqAfSvQ3Se%2B9lTcwPHgV6bMv5i4VW9VeLxPuW82R45lQOlkyoUxZAtfd9L7h%2FklyX%2FZSCEnz4tHB9QT6g%2F1BrxgVv7bddf9iyv5lcuFrl&X-Amz-Signature=c558cef1322bea8eb581956e4ca66c9deb4f09fac2d7494fd1d5b667ac51046b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXHUONA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMxlJ3KtaPPAop5zdTn0uiMI77EkKtHiy%2B5Adj8yL%2FtAiBMPTNcAzzVP%2FPLjXFgJ5WfjlaFuSMNGply2vMUNwm7eSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxx%2BL5slgkEGyPSZUKtwDy1XHszvwx3JVoYl3B0pMPDqhvobcmWAdaUNn2aOsxki21vWKDURNQqU7ICyi3XROuJvTzoIz1wZll5PDMGE9TD6%2FU3thq7a3pZqt7mwDz5GkcvU9RxT6PIInnZIb%2BA%2FEklMPorUasjKk3q5oWF5CIShUk8YpLceWR3Y%2FnSkAHr6dSCFzlxlGgIO9Qh7yEQ4Lx%2Be2AlcQ%2FoY1kqd1tSnKHhuGMV6Av1xKeH5pSpAT4tu60gK9bAGjq5TzGMCAdTr3iKarliURiaaqVngMQPCeAwcOq8M3X1YgbKy70bWzgqpLYMFVdrMTBxMVenBiNCu3u8AJEVdpxlebhiYx3Y0S4O%2F4rsYjSbXYkv3IO4xEa9D3jaywacjLWy9Oe5C%2FP2GMFHAMFbT69q%2FK%2BptQWEZ4pUQ9Qmnm%2F6k210RPPQ6x6gkyiLUSfzKnY4bCCB%2BvHbdNkuz%2FgsO67EeVTx%2Fdo7EBG%2Beo2ntBg8v2yAOu%2FZGbFMzFOh0W93oUTR8zmfYqvBJs3qeZyjou5dm3xzHlLeLyt2kf2CzOujkZ6F0w7RfcFzNmbk3tEr4V7tSvAY5HKvdEsgPPgnYDuJqhNPQAvZtpQ92I6GL%2F0FMO82UyGQD1KTkvlbZawgxXZHqmfjkwucTqvQY6pgFjqAmjhpPI1IrLT7t%2ByIaYxzTziOYgXq7bFsQpXTwfySbGvbHqCZEJIC3YoLhiIgEeHIJ32YgZujxDAjyleuzFDUawF8I5KIxbX4%2BUfgBugz5FdDZ7EU4gqAfSvQ3Se%2B9lTcwPHgV6bMv5i4VW9VeLxPuW82R45lQOlkyoUxZAtfd9L7h%2FklyX%2FZSCEnz4tHB9QT6g%2F1BrxgVv7bddf9iyv5lcuFrl&X-Amz-Signature=c669adf35d9cbe03e229e5c04147da216b02d27644fdf38f9dce8414511c6372&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
