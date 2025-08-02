---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXHKQCJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVh6mB8cxRvEgWildrRM2IuFiRlBfhuwozioJpfyxwhAiEAqCKMCjX3nGv12%2BuF6VLal1gz7h3e1naVd8rClUgTxToq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGEta%2BazEEnzbGjQ7CrcA8nJiIhnmAUe%2BXHGLV%2BHuD%2FH7VpLinOSoA7fag0cKj7vgC8Qqghtua3BEQ4KRIZHHL4OQ36q3JhOd8hIAL8REf1y9IFhvILT7qQZ%2FhMpLDR3hwfSCgGkAgU6%2Fo4bMkQUyZl4x9U9nNx796%2FGkj7tQAbAzmq%2B8cUw3Y%2FxVy0LC4Jd2sRoJbNqEEQ8VkI9ImgJuMwVBLyyLHyBWa3EmdmXe6QVEDpeCOtEzPet6iLZxI%2BMty1v9MdKkV7Vzv5qh12Ps5gcG%2FNzC6FNC2AnJyMFKipveqDa5ItdP56N%2FTSVhU%2FXuCWniXvN4r%2FKh1fbP4AFwchnLez6n%2FhZfq%2FXXuiZx5gbyIoDstM6ivDbNrdJZY27pFw1yU9qiroAMAHklFpzLe10VgbPJ2FZZ8OeOom0xSgu6QGIkypoUwDLFICyC3p8zAXkv0yK8gvipiY4%2BPrYCwuHo3CeDwjZgrmNCblVc9serWTjxXruYvMmGiw2zctlGRymomQkrVUmnjWXi6aZdDkdlz%2BA%2B%2BlyaXlduoCXmwsDdguy23UDFHXU9v4ExvUyylsiG2Q656kZq6e9ArJ%2B5%2Fdq%2FJK4rgidQfFObGx6FSJMtAj87vfRzgEpreBjnhXas9cd%2FllkXHkXRMPsMK2AusQGOqUB%2FZbmrcIcBA6xQpEedIASaVfTN6jFb1IMZzKvxd8pdj0ul9wZovB1%2FbNxt9OgCV0uaOjBuXvOSpWn0serrnypudiTu%2BMmM4vm7%2BP66vido%2BVkGfhohpZzd3caR0DwiizyGO7wp8dRjYDqtvA1%2Fb2rxQg%2FOQwTkZ57AH%2FVGMscTuY2761Ndbav3cQlEzBqXHxA8uWLZPnd%2FCw8U0pIDU%2ByJ4i2mY%2FX&X-Amz-Signature=42b5af629b5b7ff2a9fd1c1dc9e55db020936bf42267ad28515b7d52ecdb7ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXHKQCJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVh6mB8cxRvEgWildrRM2IuFiRlBfhuwozioJpfyxwhAiEAqCKMCjX3nGv12%2BuF6VLal1gz7h3e1naVd8rClUgTxToq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGEta%2BazEEnzbGjQ7CrcA8nJiIhnmAUe%2BXHGLV%2BHuD%2FH7VpLinOSoA7fag0cKj7vgC8Qqghtua3BEQ4KRIZHHL4OQ36q3JhOd8hIAL8REf1y9IFhvILT7qQZ%2FhMpLDR3hwfSCgGkAgU6%2Fo4bMkQUyZl4x9U9nNx796%2FGkj7tQAbAzmq%2B8cUw3Y%2FxVy0LC4Jd2sRoJbNqEEQ8VkI9ImgJuMwVBLyyLHyBWa3EmdmXe6QVEDpeCOtEzPet6iLZxI%2BMty1v9MdKkV7Vzv5qh12Ps5gcG%2FNzC6FNC2AnJyMFKipveqDa5ItdP56N%2FTSVhU%2FXuCWniXvN4r%2FKh1fbP4AFwchnLez6n%2FhZfq%2FXXuiZx5gbyIoDstM6ivDbNrdJZY27pFw1yU9qiroAMAHklFpzLe10VgbPJ2FZZ8OeOom0xSgu6QGIkypoUwDLFICyC3p8zAXkv0yK8gvipiY4%2BPrYCwuHo3CeDwjZgrmNCblVc9serWTjxXruYvMmGiw2zctlGRymomQkrVUmnjWXi6aZdDkdlz%2BA%2B%2BlyaXlduoCXmwsDdguy23UDFHXU9v4ExvUyylsiG2Q656kZq6e9ArJ%2B5%2Fdq%2FJK4rgidQfFObGx6FSJMtAj87vfRzgEpreBjnhXas9cd%2FllkXHkXRMPsMK2AusQGOqUB%2FZbmrcIcBA6xQpEedIASaVfTN6jFb1IMZzKvxd8pdj0ul9wZovB1%2FbNxt9OgCV0uaOjBuXvOSpWn0serrnypudiTu%2BMmM4vm7%2BP66vido%2BVkGfhohpZzd3caR0DwiizyGO7wp8dRjYDqtvA1%2Fb2rxQg%2FOQwTkZ57AH%2FVGMscTuY2761Ndbav3cQlEzBqXHxA8uWLZPnd%2FCw8U0pIDU%2ByJ4i2mY%2FX&X-Amz-Signature=79943ed557bfc4a2eac7354d2af42967aec16381d06183fae518d0139f0ced12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXHKQCJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVh6mB8cxRvEgWildrRM2IuFiRlBfhuwozioJpfyxwhAiEAqCKMCjX3nGv12%2BuF6VLal1gz7h3e1naVd8rClUgTxToq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGEta%2BazEEnzbGjQ7CrcA8nJiIhnmAUe%2BXHGLV%2BHuD%2FH7VpLinOSoA7fag0cKj7vgC8Qqghtua3BEQ4KRIZHHL4OQ36q3JhOd8hIAL8REf1y9IFhvILT7qQZ%2FhMpLDR3hwfSCgGkAgU6%2Fo4bMkQUyZl4x9U9nNx796%2FGkj7tQAbAzmq%2B8cUw3Y%2FxVy0LC4Jd2sRoJbNqEEQ8VkI9ImgJuMwVBLyyLHyBWa3EmdmXe6QVEDpeCOtEzPet6iLZxI%2BMty1v9MdKkV7Vzv5qh12Ps5gcG%2FNzC6FNC2AnJyMFKipveqDa5ItdP56N%2FTSVhU%2FXuCWniXvN4r%2FKh1fbP4AFwchnLez6n%2FhZfq%2FXXuiZx5gbyIoDstM6ivDbNrdJZY27pFw1yU9qiroAMAHklFpzLe10VgbPJ2FZZ8OeOom0xSgu6QGIkypoUwDLFICyC3p8zAXkv0yK8gvipiY4%2BPrYCwuHo3CeDwjZgrmNCblVc9serWTjxXruYvMmGiw2zctlGRymomQkrVUmnjWXi6aZdDkdlz%2BA%2B%2BlyaXlduoCXmwsDdguy23UDFHXU9v4ExvUyylsiG2Q656kZq6e9ArJ%2B5%2Fdq%2FJK4rgidQfFObGx6FSJMtAj87vfRzgEpreBjnhXas9cd%2FllkXHkXRMPsMK2AusQGOqUB%2FZbmrcIcBA6xQpEedIASaVfTN6jFb1IMZzKvxd8pdj0ul9wZovB1%2FbNxt9OgCV0uaOjBuXvOSpWn0serrnypudiTu%2BMmM4vm7%2BP66vido%2BVkGfhohpZzd3caR0DwiizyGO7wp8dRjYDqtvA1%2Fb2rxQg%2FOQwTkZ57AH%2FVGMscTuY2761Ndbav3cQlEzBqXHxA8uWLZPnd%2FCw8U0pIDU%2ByJ4i2mY%2FX&X-Amz-Signature=3c6003270f4521b444e8d5a338a3e67e31fb5b7802a38b004baf2a259f278680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
