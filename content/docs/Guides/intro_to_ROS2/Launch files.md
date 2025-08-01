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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QW6FGKB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0uCzA%2FXUct9TjkHECV8BN9cQZM%2B%2FAZFcBxh3d71opEwIgFLaOUANOqXP46DNjvFYAfsgSDyktKj8JwhN1CaQ81CIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICWMdqiC%2FNs6q9eLircAyh%2FZQPFSZHu04WGeFFNATvjGKeyo06E%2FdKoRQh1K0uM8l1DfYaum4T1OGI50dOM451c0YQmrHOyDEbSqUByWCXe4rxkYKCIi0Q8c2%2F6VNo2ULnULg6GAD%2FzM7WEWIomxYuUw85LBtFx4%2FOnj3ecB296SqzLLCpbqMIhOUxNdVppJfmiVOefrtSb%2BypDno%2FEq%2FbMCRQXAOL7ANEMuYHfrujO0S60Dv%2F9n6O9hLJnIm4kLQOs3s7b3d6IifvPrarkT0k76n%2BHOMaMfT4mI8HEu%2FbLYTvXQ477VFNAsHZ7KoRAvggTaG8bJeKi5PscSsU2cgBZGDJFLuPJVjObsenfL5IJ5%2BXw2w73oRdmJ3SUC5VwcWcD%2FOrWu%2FkexsoaIjLoRCLA0A4vPxjVlS8eVP1H36F%2FcMtoSyhcVcKioEmXvX0YSNSOxJNzzi4xVRoxwWkvsX%2Fkk%2Br4wmg53q7HYpkByMbkaR1CtwtqSvmHEfmfp3IboQX%2FXhURrCehC7c4oju8%2BFVAyTz6ubXu1%2B5n0PA%2Fy8upR2svLjiG1Sr9MM9NmnLZD7rgHbVXxHqe5ERnpcSKvjkQ2k%2BVKAYIm2WI2BfuuVMn8XuaW2x6ut1mBkGJgylIChjfH8ZiIZJfplgnMJ%2FLsMQGOqUBAt4KU2LHEDwD9ji0gLehdrtv7KSy1OihZcRi3MUJ20242VcF6Jdueft2dzOC14ocvLuGJECXTL78gdeH8CueyRwLFHGtnDpUZaZs2h0gq3VATfV2jSm0Mdj8oc4ezF%2FB8QlXpM96wRcaLgEge4Zm8GIggrvUBC55hQ0aFUs6NVpj57GKPpav%2ByoJvyAh4VHt7Ecv6DJYMAQ8OZaTBaaKW7o%2FmQNZ&X-Amz-Signature=5b0cea7997fb5b347d662d82449d24868d0e02d29f8e7dc6c3647770acdb70a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QW6FGKB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0uCzA%2FXUct9TjkHECV8BN9cQZM%2B%2FAZFcBxh3d71opEwIgFLaOUANOqXP46DNjvFYAfsgSDyktKj8JwhN1CaQ81CIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICWMdqiC%2FNs6q9eLircAyh%2FZQPFSZHu04WGeFFNATvjGKeyo06E%2FdKoRQh1K0uM8l1DfYaum4T1OGI50dOM451c0YQmrHOyDEbSqUByWCXe4rxkYKCIi0Q8c2%2F6VNo2ULnULg6GAD%2FzM7WEWIomxYuUw85LBtFx4%2FOnj3ecB296SqzLLCpbqMIhOUxNdVppJfmiVOefrtSb%2BypDno%2FEq%2FbMCRQXAOL7ANEMuYHfrujO0S60Dv%2F9n6O9hLJnIm4kLQOs3s7b3d6IifvPrarkT0k76n%2BHOMaMfT4mI8HEu%2FbLYTvXQ477VFNAsHZ7KoRAvggTaG8bJeKi5PscSsU2cgBZGDJFLuPJVjObsenfL5IJ5%2BXw2w73oRdmJ3SUC5VwcWcD%2FOrWu%2FkexsoaIjLoRCLA0A4vPxjVlS8eVP1H36F%2FcMtoSyhcVcKioEmXvX0YSNSOxJNzzi4xVRoxwWkvsX%2Fkk%2Br4wmg53q7HYpkByMbkaR1CtwtqSvmHEfmfp3IboQX%2FXhURrCehC7c4oju8%2BFVAyTz6ubXu1%2B5n0PA%2Fy8upR2svLjiG1Sr9MM9NmnLZD7rgHbVXxHqe5ERnpcSKvjkQ2k%2BVKAYIm2WI2BfuuVMn8XuaW2x6ut1mBkGJgylIChjfH8ZiIZJfplgnMJ%2FLsMQGOqUBAt4KU2LHEDwD9ji0gLehdrtv7KSy1OihZcRi3MUJ20242VcF6Jdueft2dzOC14ocvLuGJECXTL78gdeH8CueyRwLFHGtnDpUZaZs2h0gq3VATfV2jSm0Mdj8oc4ezF%2FB8QlXpM96wRcaLgEge4Zm8GIggrvUBC55hQ0aFUs6NVpj57GKPpav%2ByoJvyAh4VHt7Ecv6DJYMAQ8OZaTBaaKW7o%2FmQNZ&X-Amz-Signature=28d5c187653cb522e6b101523b7fd27fa2ad6e880120ac8cb0030b6914c12887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QW6FGKB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0uCzA%2FXUct9TjkHECV8BN9cQZM%2B%2FAZFcBxh3d71opEwIgFLaOUANOqXP46DNjvFYAfsgSDyktKj8JwhN1CaQ81CIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICWMdqiC%2FNs6q9eLircAyh%2FZQPFSZHu04WGeFFNATvjGKeyo06E%2FdKoRQh1K0uM8l1DfYaum4T1OGI50dOM451c0YQmrHOyDEbSqUByWCXe4rxkYKCIi0Q8c2%2F6VNo2ULnULg6GAD%2FzM7WEWIomxYuUw85LBtFx4%2FOnj3ecB296SqzLLCpbqMIhOUxNdVppJfmiVOefrtSb%2BypDno%2FEq%2FbMCRQXAOL7ANEMuYHfrujO0S60Dv%2F9n6O9hLJnIm4kLQOs3s7b3d6IifvPrarkT0k76n%2BHOMaMfT4mI8HEu%2FbLYTvXQ477VFNAsHZ7KoRAvggTaG8bJeKi5PscSsU2cgBZGDJFLuPJVjObsenfL5IJ5%2BXw2w73oRdmJ3SUC5VwcWcD%2FOrWu%2FkexsoaIjLoRCLA0A4vPxjVlS8eVP1H36F%2FcMtoSyhcVcKioEmXvX0YSNSOxJNzzi4xVRoxwWkvsX%2Fkk%2Br4wmg53q7HYpkByMbkaR1CtwtqSvmHEfmfp3IboQX%2FXhURrCehC7c4oju8%2BFVAyTz6ubXu1%2B5n0PA%2Fy8upR2svLjiG1Sr9MM9NmnLZD7rgHbVXxHqe5ERnpcSKvjkQ2k%2BVKAYIm2WI2BfuuVMn8XuaW2x6ut1mBkGJgylIChjfH8ZiIZJfplgnMJ%2FLsMQGOqUBAt4KU2LHEDwD9ji0gLehdrtv7KSy1OihZcRi3MUJ20242VcF6Jdueft2dzOC14ocvLuGJECXTL78gdeH8CueyRwLFHGtnDpUZaZs2h0gq3VATfV2jSm0Mdj8oc4ezF%2FB8QlXpM96wRcaLgEge4Zm8GIggrvUBC55hQ0aFUs6NVpj57GKPpav%2ByoJvyAh4VHt7Ecv6DJYMAQ8OZaTBaaKW7o%2FmQNZ&X-Amz-Signature=5e2658bb82bb5b58584cb4d442ce86be38e8842d2d06251287d088280bdd99e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
