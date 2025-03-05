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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBRHEG3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsUjg04U0pqhhbsQyyb2%2BeY30%2F8XhsIqZ8uoV8FGBxKAiAZpmtBB%2B%2Fg2g9kUDBYLiLVQpO%2BcX2mC8BqihEhAMnHZir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMShV0aD0s%2FlH18qQ%2FKtwDfAxdzGYGtOBoEfJQ8WtH238ly1%2FujdK3EiCZe0ey%2FujPy1x2ZKeVQn1vd6iySUvE%2FW1ajyWNcFP%2FQ4E6RBydurwY878ESUxwfPsk0%2FVEj3qkY7PxDgEoV8TPA0dKvseKL1btces00GREqwq7ICv2gYf5rb22jDZ0Q5TOZlVYro9fn3gYlgiTovMASqZDr7bMjFSGx3yZ8iaq1Itp6ze8DTN82%2BXyWy97Pja%2FWLfD3alGy%2Fsy6c9UE58BmLseX%2Bf0c5jotYZgyjLsjmFffxy%2FqPRy%2BMkWSiQJ5uF9fejkvRZz1Cq74CJEE93MpWsrlOCgEgTdn%2BqXUZZAh2VSZV0TldapgUg3OCnTWwzDDsgXNJMbqe6FmIrGJ1i9eDa9Xr%2FaMYkhQYbgbwKhSWgEiPmj0yAN%2FKXp3N5U2XFvSSU2HSWAIIiz3GVqzrrmL8h8NF%2FGFHnhvunRhyYnjWTcqENELOiy%2BsqbU3H%2BLLddJN2I5GlHpcvi%2FpYNmn3aloxp%2ByKDoWre00F6HyvjHN3VIlH0XHF1bOlBNY37GP%2FjK7QiES8kc3Uuw8RWX4LLoXbLstWf5owQ%2B73JYmBKALgLKlxvCTYhXJ7O0fQlG0EfYvV3PdBSAbTpzS8bBpmgI%2F4wqK%2BgvgY6pgE3KorZrNGD%2FuRm%2FQePMeOc4rTThdlRcEWhIiN3KiuZcpy%2FLk2%2BgMFtUJvvJQ84fG63rDu0VbOUdny1QErPg8tnFWynGAbihgtjsIooXPZGTPGtXwbq9OUovL1468w8iaH8%2BQONDG0DQmD9mcBNUT2PLoEpYrrWNZCubZKcLpkpJfMVqvFjdFmctPq%2BoYuTcG0tI%2F2nR3Tl%2F0gCYVgt37jGBsBMm5gk&X-Amz-Signature=d1a059cc5da0929fd3b1f86fd73399f48c0a9e44961fd3e5f902573df5ddc447&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBRHEG3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsUjg04U0pqhhbsQyyb2%2BeY30%2F8XhsIqZ8uoV8FGBxKAiAZpmtBB%2B%2Fg2g9kUDBYLiLVQpO%2BcX2mC8BqihEhAMnHZir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMShV0aD0s%2FlH18qQ%2FKtwDfAxdzGYGtOBoEfJQ8WtH238ly1%2FujdK3EiCZe0ey%2FujPy1x2ZKeVQn1vd6iySUvE%2FW1ajyWNcFP%2FQ4E6RBydurwY878ESUxwfPsk0%2FVEj3qkY7PxDgEoV8TPA0dKvseKL1btces00GREqwq7ICv2gYf5rb22jDZ0Q5TOZlVYro9fn3gYlgiTovMASqZDr7bMjFSGx3yZ8iaq1Itp6ze8DTN82%2BXyWy97Pja%2FWLfD3alGy%2Fsy6c9UE58BmLseX%2Bf0c5jotYZgyjLsjmFffxy%2FqPRy%2BMkWSiQJ5uF9fejkvRZz1Cq74CJEE93MpWsrlOCgEgTdn%2BqXUZZAh2VSZV0TldapgUg3OCnTWwzDDsgXNJMbqe6FmIrGJ1i9eDa9Xr%2FaMYkhQYbgbwKhSWgEiPmj0yAN%2FKXp3N5U2XFvSSU2HSWAIIiz3GVqzrrmL8h8NF%2FGFHnhvunRhyYnjWTcqENELOiy%2BsqbU3H%2BLLddJN2I5GlHpcvi%2FpYNmn3aloxp%2ByKDoWre00F6HyvjHN3VIlH0XHF1bOlBNY37GP%2FjK7QiES8kc3Uuw8RWX4LLoXbLstWf5owQ%2B73JYmBKALgLKlxvCTYhXJ7O0fQlG0EfYvV3PdBSAbTpzS8bBpmgI%2F4wqK%2BgvgY6pgE3KorZrNGD%2FuRm%2FQePMeOc4rTThdlRcEWhIiN3KiuZcpy%2FLk2%2BgMFtUJvvJQ84fG63rDu0VbOUdny1QErPg8tnFWynGAbihgtjsIooXPZGTPGtXwbq9OUovL1468w8iaH8%2BQONDG0DQmD9mcBNUT2PLoEpYrrWNZCubZKcLpkpJfMVqvFjdFmctPq%2BoYuTcG0tI%2F2nR3Tl%2F0gCYVgt37jGBsBMm5gk&X-Amz-Signature=a028a0b7c5962f784e220ee3dcb4ca496134f8bf1ef02a0ca3341c6755b7272f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBRHEG3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsUjg04U0pqhhbsQyyb2%2BeY30%2F8XhsIqZ8uoV8FGBxKAiAZpmtBB%2B%2Fg2g9kUDBYLiLVQpO%2BcX2mC8BqihEhAMnHZir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMShV0aD0s%2FlH18qQ%2FKtwDfAxdzGYGtOBoEfJQ8WtH238ly1%2FujdK3EiCZe0ey%2FujPy1x2ZKeVQn1vd6iySUvE%2FW1ajyWNcFP%2FQ4E6RBydurwY878ESUxwfPsk0%2FVEj3qkY7PxDgEoV8TPA0dKvseKL1btces00GREqwq7ICv2gYf5rb22jDZ0Q5TOZlVYro9fn3gYlgiTovMASqZDr7bMjFSGx3yZ8iaq1Itp6ze8DTN82%2BXyWy97Pja%2FWLfD3alGy%2Fsy6c9UE58BmLseX%2Bf0c5jotYZgyjLsjmFffxy%2FqPRy%2BMkWSiQJ5uF9fejkvRZz1Cq74CJEE93MpWsrlOCgEgTdn%2BqXUZZAh2VSZV0TldapgUg3OCnTWwzDDsgXNJMbqe6FmIrGJ1i9eDa9Xr%2FaMYkhQYbgbwKhSWgEiPmj0yAN%2FKXp3N5U2XFvSSU2HSWAIIiz3GVqzrrmL8h8NF%2FGFHnhvunRhyYnjWTcqENELOiy%2BsqbU3H%2BLLddJN2I5GlHpcvi%2FpYNmn3aloxp%2ByKDoWre00F6HyvjHN3VIlH0XHF1bOlBNY37GP%2FjK7QiES8kc3Uuw8RWX4LLoXbLstWf5owQ%2B73JYmBKALgLKlxvCTYhXJ7O0fQlG0EfYvV3PdBSAbTpzS8bBpmgI%2F4wqK%2BgvgY6pgE3KorZrNGD%2FuRm%2FQePMeOc4rTThdlRcEWhIiN3KiuZcpy%2FLk2%2BgMFtUJvvJQ84fG63rDu0VbOUdny1QErPg8tnFWynGAbihgtjsIooXPZGTPGtXwbq9OUovL1468w8iaH8%2BQONDG0DQmD9mcBNUT2PLoEpYrrWNZCubZKcLpkpJfMVqvFjdFmctPq%2BoYuTcG0tI%2F2nR3Tl%2F0gCYVgt37jGBsBMm5gk&X-Amz-Signature=b42b635dcbac2fcfb563364b6f80d9055897345801acf209005187cbfea9c46f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
