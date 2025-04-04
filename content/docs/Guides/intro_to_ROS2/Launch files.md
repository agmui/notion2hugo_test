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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEEI5BB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjkOMDquEcPF%2FN4AC2gYXcm%2FLGGjZQnrDC%2BUCPHNxMcgIgZUw3JjY6mZ1cfoRpEK83u3bWqkrJvbH09uKwStNRpFYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBjaF578va3PbSVzECrcAzZ%2BjvNmIeo9j12e2YwvKZpGquIex2tU7Q7MNc8LkoPHA%2FwIhGv6kSnwaQfvwlVREopKA9DMng3V0W0UbioRe%2FMo3a7Rw8jBQ9lH5wb2NxBdl6%2BYtrkui8HYDxM1PDoFDof8MHWoMmqfSaTFW7HiL9Gk1Q4EsTFmjltRVu1gfnPpXKRP1kojnDMrF1PkcnPgoYhULWzAtLYxbChO8xtnJW%2FNXdJ0xOv5mN4G%2B6fWB3ROMgcM7i3G8T66AhqWWCVY%2FvxPagOkKuD%2F8y%2FHQLworTDUtdKHInfDdvxTtgNSUXZK2WuELIjvu1ByST4G36CruD1FFYp1QtQE3D7IG4byWqNljEFWtJMC%2BeZVeSjqrr%2Fw0DzqJiF2kRX6Md9UWruHgyDtCA7sgbdF4%2BYe%2FzwHt4jEmeJ04NPD6dyXfv6agxS7w6EGRgZ%2BxI87N10nrXHC6hUe0ZUXSlKnBt0twh1jHqB8zM4h8W046enS9PK6uNlDcYlSmxEXqwtfWXmXzOiYopm8pGrpKinqim0CTCY6%2BclhS5MV7WftFocUnVHaWZtsxKqcHHuz9%2Fo%2BEM9%2FR%2FX%2FtwIduYHWo7CWgpXxDdn0HC0GvVtqqdyFEUsrhaqyXhCNdEX5PYHkkUUbnov9MNLIvr8GOqUB8U%2FiOYzv1KusVdbDhhi%2F%2BLjFmeMDn7nRapSpoMMS3pFHz6CdFuXTLJKkzzCSTZ%2BKnw%2Fjl7FBXZrhjjj47dwl5recZ%2FlRp76cdqRYIgLkYYQDyj8cI3ceqNMYm2yTlSGhHJM9gEVflgmQY6RhqyUspYuGrjIOIKlHNVKbRf%2FTI4t0%2F7YtlGuFFyX3GfwUNqHE8vHV8Sj3ifOZUj%2Bh0dzYb5gACuF7&X-Amz-Signature=162a6e02f150195dd22eac83b4c36b84d2182f5cf97f9730de9f672fdbdb0bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEEI5BB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjkOMDquEcPF%2FN4AC2gYXcm%2FLGGjZQnrDC%2BUCPHNxMcgIgZUw3JjY6mZ1cfoRpEK83u3bWqkrJvbH09uKwStNRpFYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBjaF578va3PbSVzECrcAzZ%2BjvNmIeo9j12e2YwvKZpGquIex2tU7Q7MNc8LkoPHA%2FwIhGv6kSnwaQfvwlVREopKA9DMng3V0W0UbioRe%2FMo3a7Rw8jBQ9lH5wb2NxBdl6%2BYtrkui8HYDxM1PDoFDof8MHWoMmqfSaTFW7HiL9Gk1Q4EsTFmjltRVu1gfnPpXKRP1kojnDMrF1PkcnPgoYhULWzAtLYxbChO8xtnJW%2FNXdJ0xOv5mN4G%2B6fWB3ROMgcM7i3G8T66AhqWWCVY%2FvxPagOkKuD%2F8y%2FHQLworTDUtdKHInfDdvxTtgNSUXZK2WuELIjvu1ByST4G36CruD1FFYp1QtQE3D7IG4byWqNljEFWtJMC%2BeZVeSjqrr%2Fw0DzqJiF2kRX6Md9UWruHgyDtCA7sgbdF4%2BYe%2FzwHt4jEmeJ04NPD6dyXfv6agxS7w6EGRgZ%2BxI87N10nrXHC6hUe0ZUXSlKnBt0twh1jHqB8zM4h8W046enS9PK6uNlDcYlSmxEXqwtfWXmXzOiYopm8pGrpKinqim0CTCY6%2BclhS5MV7WftFocUnVHaWZtsxKqcHHuz9%2Fo%2BEM9%2FR%2FX%2FtwIduYHWo7CWgpXxDdn0HC0GvVtqqdyFEUsrhaqyXhCNdEX5PYHkkUUbnov9MNLIvr8GOqUB8U%2FiOYzv1KusVdbDhhi%2F%2BLjFmeMDn7nRapSpoMMS3pFHz6CdFuXTLJKkzzCSTZ%2BKnw%2Fjl7FBXZrhjjj47dwl5recZ%2FlRp76cdqRYIgLkYYQDyj8cI3ceqNMYm2yTlSGhHJM9gEVflgmQY6RhqyUspYuGrjIOIKlHNVKbRf%2FTI4t0%2F7YtlGuFFyX3GfwUNqHE8vHV8Sj3ifOZUj%2Bh0dzYb5gACuF7&X-Amz-Signature=95714e56f7e5a3139fb41b8ef271769a69e94bbb4120f2b5ed66523409c31993&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEEI5BB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjkOMDquEcPF%2FN4AC2gYXcm%2FLGGjZQnrDC%2BUCPHNxMcgIgZUw3JjY6mZ1cfoRpEK83u3bWqkrJvbH09uKwStNRpFYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBjaF578va3PbSVzECrcAzZ%2BjvNmIeo9j12e2YwvKZpGquIex2tU7Q7MNc8LkoPHA%2FwIhGv6kSnwaQfvwlVREopKA9DMng3V0W0UbioRe%2FMo3a7Rw8jBQ9lH5wb2NxBdl6%2BYtrkui8HYDxM1PDoFDof8MHWoMmqfSaTFW7HiL9Gk1Q4EsTFmjltRVu1gfnPpXKRP1kojnDMrF1PkcnPgoYhULWzAtLYxbChO8xtnJW%2FNXdJ0xOv5mN4G%2B6fWB3ROMgcM7i3G8T66AhqWWCVY%2FvxPagOkKuD%2F8y%2FHQLworTDUtdKHInfDdvxTtgNSUXZK2WuELIjvu1ByST4G36CruD1FFYp1QtQE3D7IG4byWqNljEFWtJMC%2BeZVeSjqrr%2Fw0DzqJiF2kRX6Md9UWruHgyDtCA7sgbdF4%2BYe%2FzwHt4jEmeJ04NPD6dyXfv6agxS7w6EGRgZ%2BxI87N10nrXHC6hUe0ZUXSlKnBt0twh1jHqB8zM4h8W046enS9PK6uNlDcYlSmxEXqwtfWXmXzOiYopm8pGrpKinqim0CTCY6%2BclhS5MV7WftFocUnVHaWZtsxKqcHHuz9%2Fo%2BEM9%2FR%2FX%2FtwIduYHWo7CWgpXxDdn0HC0GvVtqqdyFEUsrhaqyXhCNdEX5PYHkkUUbnov9MNLIvr8GOqUB8U%2FiOYzv1KusVdbDhhi%2F%2BLjFmeMDn7nRapSpoMMS3pFHz6CdFuXTLJKkzzCSTZ%2BKnw%2Fjl7FBXZrhjjj47dwl5recZ%2FlRp76cdqRYIgLkYYQDyj8cI3ceqNMYm2yTlSGhHJM9gEVflgmQY6RhqyUspYuGrjIOIKlHNVKbRf%2FTI4t0%2F7YtlGuFFyX3GfwUNqHE8vHV8Sj3ifOZUj%2Bh0dzYb5gACuF7&X-Amz-Signature=bd93c0d1c51316927ef8d88a7f808e80a3382a59f25a412345c04056db9c18dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
