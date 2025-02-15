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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YCTKZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbAD1ek6Ge2aNRAhdX89aolv5r4cUJw9xpm3P27Pk2LQIgYtsnjeGSPHweIfORcpUb1V4pzqU76RK%2B0kNzl%2F80484q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLMNxifSlZPLJZVZZCrcA8D97QYDybTwGZtxtocHUn7mPAC4BCLwPy0ytavO1AfpQOy85%2FzTItXnx7vrTA5GK%2BFnCBzgZOcdhavP0%2BM%2BaAH6MjWerdrDZD3bHApfV%2F2Mqm4PnZPTG7w53MHzGwsIC3vxPkvSFajmzEjJJmvg1ma%2Fov8BIcYCAPYBBHbJnDT4I4ZFwonNc7YKGkv5HKFKDOrU1XFE3sDzDZZz1jvv%2FjvgGth5JS99rZsB1SJ3ieWnpeeyf9Z72qPfjEUwPYZmLZHzOfJiPCIbAkuvphk%2BW5BO%2BRXhAMJu8SKk8UhTDzuONc8OQMffks6qi2vSw35bsINgjcv%2FqeSi0LPvAaVQkpVkP9ljuLFzaM5RaQ0efs6T2yY75HIYCc7Qep0uqgyrZjaubGEQRT%2B0s3Nuv%2FDeOdOaGbQ8Ya8ABPTBnTHlN%2BCSdB2Nyj0pzFdM8UZHlenYqri0ECtn9uNS4EeTBS0CbNJImCPRLghwH0Ez2odNWfsQ6yw0ivTELULXvuZcCKU8HvDhrXOnBFf598PS5fBiGBbBftUAyEJe0oBKqaBhusq8u1rflwxucDyBSuLB5kx5OenrT9%2BAs%2FdT0RG5MPylid7Ln%2B0uHr16u3Y7gmXeKNeLzsypDQXe9lebJ2i4MIu0v70GOqUB0zIkNwQcZQloBfGDdrftTw6bLGGO171DzBjKnkTg%2BwGlJvD5K6uF2FBGoGIaoqSXQDd7TTynbO8efNEU10yPdj%2FwggZTqlNv3WpzfEDm7XVQ6iRsnP6nawE1GtCN91kWNJGU0V2dH0Ocg5%2FhigW5G%2FNoJ8xcvC3Hyrf1qeU%2Fus8OjVs5y41A%2BkKAGFj6hug4N9kwXqCleA7ln5Hu%2B2FinvRHkIwK&X-Amz-Signature=f1146692cd9398747f117ba0f4f597f778cf0dd858bf84b0b8273ddcdd70150b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YCTKZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbAD1ek6Ge2aNRAhdX89aolv5r4cUJw9xpm3P27Pk2LQIgYtsnjeGSPHweIfORcpUb1V4pzqU76RK%2B0kNzl%2F80484q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLMNxifSlZPLJZVZZCrcA8D97QYDybTwGZtxtocHUn7mPAC4BCLwPy0ytavO1AfpQOy85%2FzTItXnx7vrTA5GK%2BFnCBzgZOcdhavP0%2BM%2BaAH6MjWerdrDZD3bHApfV%2F2Mqm4PnZPTG7w53MHzGwsIC3vxPkvSFajmzEjJJmvg1ma%2Fov8BIcYCAPYBBHbJnDT4I4ZFwonNc7YKGkv5HKFKDOrU1XFE3sDzDZZz1jvv%2FjvgGth5JS99rZsB1SJ3ieWnpeeyf9Z72qPfjEUwPYZmLZHzOfJiPCIbAkuvphk%2BW5BO%2BRXhAMJu8SKk8UhTDzuONc8OQMffks6qi2vSw35bsINgjcv%2FqeSi0LPvAaVQkpVkP9ljuLFzaM5RaQ0efs6T2yY75HIYCc7Qep0uqgyrZjaubGEQRT%2B0s3Nuv%2FDeOdOaGbQ8Ya8ABPTBnTHlN%2BCSdB2Nyj0pzFdM8UZHlenYqri0ECtn9uNS4EeTBS0CbNJImCPRLghwH0Ez2odNWfsQ6yw0ivTELULXvuZcCKU8HvDhrXOnBFf598PS5fBiGBbBftUAyEJe0oBKqaBhusq8u1rflwxucDyBSuLB5kx5OenrT9%2BAs%2FdT0RG5MPylid7Ln%2B0uHr16u3Y7gmXeKNeLzsypDQXe9lebJ2i4MIu0v70GOqUB0zIkNwQcZQloBfGDdrftTw6bLGGO171DzBjKnkTg%2BwGlJvD5K6uF2FBGoGIaoqSXQDd7TTynbO8efNEU10yPdj%2FwggZTqlNv3WpzfEDm7XVQ6iRsnP6nawE1GtCN91kWNJGU0V2dH0Ocg5%2FhigW5G%2FNoJ8xcvC3Hyrf1qeU%2Fus8OjVs5y41A%2BkKAGFj6hug4N9kwXqCleA7ln5Hu%2B2FinvRHkIwK&X-Amz-Signature=ea11c22d04b7756a0b4a5fa03164a79b4e84e47086bcc4c49017048270a39d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YCTKZF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDbAD1ek6Ge2aNRAhdX89aolv5r4cUJw9xpm3P27Pk2LQIgYtsnjeGSPHweIfORcpUb1V4pzqU76RK%2B0kNzl%2F80484q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLMNxifSlZPLJZVZZCrcA8D97QYDybTwGZtxtocHUn7mPAC4BCLwPy0ytavO1AfpQOy85%2FzTItXnx7vrTA5GK%2BFnCBzgZOcdhavP0%2BM%2BaAH6MjWerdrDZD3bHApfV%2F2Mqm4PnZPTG7w53MHzGwsIC3vxPkvSFajmzEjJJmvg1ma%2Fov8BIcYCAPYBBHbJnDT4I4ZFwonNc7YKGkv5HKFKDOrU1XFE3sDzDZZz1jvv%2FjvgGth5JS99rZsB1SJ3ieWnpeeyf9Z72qPfjEUwPYZmLZHzOfJiPCIbAkuvphk%2BW5BO%2BRXhAMJu8SKk8UhTDzuONc8OQMffks6qi2vSw35bsINgjcv%2FqeSi0LPvAaVQkpVkP9ljuLFzaM5RaQ0efs6T2yY75HIYCc7Qep0uqgyrZjaubGEQRT%2B0s3Nuv%2FDeOdOaGbQ8Ya8ABPTBnTHlN%2BCSdB2Nyj0pzFdM8UZHlenYqri0ECtn9uNS4EeTBS0CbNJImCPRLghwH0Ez2odNWfsQ6yw0ivTELULXvuZcCKU8HvDhrXOnBFf598PS5fBiGBbBftUAyEJe0oBKqaBhusq8u1rflwxucDyBSuLB5kx5OenrT9%2BAs%2FdT0RG5MPylid7Ln%2B0uHr16u3Y7gmXeKNeLzsypDQXe9lebJ2i4MIu0v70GOqUB0zIkNwQcZQloBfGDdrftTw6bLGGO171DzBjKnkTg%2BwGlJvD5K6uF2FBGoGIaoqSXQDd7TTynbO8efNEU10yPdj%2FwggZTqlNv3WpzfEDm7XVQ6iRsnP6nawE1GtCN91kWNJGU0V2dH0Ocg5%2FhigW5G%2FNoJ8xcvC3Hyrf1qeU%2Fus8OjVs5y41A%2BkKAGFj6hug4N9kwXqCleA7ln5Hu%2B2FinvRHkIwK&X-Amz-Signature=4c2cef1de275a9f5304cadc91669eb26a44c937192a5c79a5404d384d6077c68&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
