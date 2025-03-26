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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVXXZ2Z%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHpT%2FSyKm0O9FOH6M%2BQz8o7DDQmCwPmumlBHBa11fN%2BAiBWHo9VbbT3lOx6xSkKXZk5XRP09ccCp2%2BcCeaswXLQkCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMNuTP7wUvyIGYv7eGKtwDhTSGRMeNJEN%2Fm6Qvnrs4iQs0jo50NSWhnMnmVWu2zTfr%2B6t%2BWjM8DqsGQapYPTPPU%2F8IevUxE6BrSrIVDuy2OoZz12AmmvoqW6fBFzTlnlfBsKZ%2B8viWWp8phUvHyf4zdF7kovKezwpRSGKr3T%2BhbYQUoiYO9XV3ftaMepmDp8pTz0Mk%2F%2FHloff%2BpxazrAF%2BLLy7aMf7evL5hXFGIJnz4PDKddRlBbrxQ%2FdM8EfhGM84c8N0IubrcEPTzxypMCQqOHQdmUkULpRfTm2wLj9Q1HMvBWhjFIiVFQVe8TQHeru29LJHJs4f1CgShehMLMpxDVA8VWhBsKmbWXp%2FpFidbwKuNFbyvQeS3FZs5%2FkDezdQ7igKFPTxynCoJ%2B24wrWwycFMLKIoW%2Bkl1%2BQCeVOH3Iy2Zg%2FPnf9BKIRdV3cuo6zan4KSZnVXC1qNIF959JaMOxiSGt2nJDaRwyj6ahYqb6M0vEZJNQ%2Fo26S0dsmUaZLcQR2UVCgCfy4cY1BHrgRrACZbOdZNpFXE2dTsB6bWRf%2BQ8lhE1WocvUDrvL12rN0z5EhqXYsZis4udCCqvEgb963PVYW0zCpbnlShDLaqwXBLqLBkl%2Fk99KLs7wl%2FNI%2BIxWvnBOyce5tbp%2BYwouqNvwY6pgFAnCRE6pw%2F8PT0GhWMJ5kw40rz7KlHhjWO3M5X3I5AGEdepbdLPJZPXMuc5YfL2V%2Bg2umoJ5Jhsvj%2BjTWV7OozN%2F9wvi%2FODBqMi9UQxJz7h%2Bw%2F7I85tLei%2B8TyYuafSY%2FAOFgQXKkPNkCAGjgSqH63uG7QCJKsVcZ9yXC1frOGhaePDMwzStu0pLCECQtb%2BuqcIH7hrCXyp6egBSw49C5LVKPiZX4y&X-Amz-Signature=b522822f11129dfbfbd8fa366fd5eda2ba7fd951c7f43764939de07c10f0f6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVXXZ2Z%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHpT%2FSyKm0O9FOH6M%2BQz8o7DDQmCwPmumlBHBa11fN%2BAiBWHo9VbbT3lOx6xSkKXZk5XRP09ccCp2%2BcCeaswXLQkCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMNuTP7wUvyIGYv7eGKtwDhTSGRMeNJEN%2Fm6Qvnrs4iQs0jo50NSWhnMnmVWu2zTfr%2B6t%2BWjM8DqsGQapYPTPPU%2F8IevUxE6BrSrIVDuy2OoZz12AmmvoqW6fBFzTlnlfBsKZ%2B8viWWp8phUvHyf4zdF7kovKezwpRSGKr3T%2BhbYQUoiYO9XV3ftaMepmDp8pTz0Mk%2F%2FHloff%2BpxazrAF%2BLLy7aMf7evL5hXFGIJnz4PDKddRlBbrxQ%2FdM8EfhGM84c8N0IubrcEPTzxypMCQqOHQdmUkULpRfTm2wLj9Q1HMvBWhjFIiVFQVe8TQHeru29LJHJs4f1CgShehMLMpxDVA8VWhBsKmbWXp%2FpFidbwKuNFbyvQeS3FZs5%2FkDezdQ7igKFPTxynCoJ%2B24wrWwycFMLKIoW%2Bkl1%2BQCeVOH3Iy2Zg%2FPnf9BKIRdV3cuo6zan4KSZnVXC1qNIF959JaMOxiSGt2nJDaRwyj6ahYqb6M0vEZJNQ%2Fo26S0dsmUaZLcQR2UVCgCfy4cY1BHrgRrACZbOdZNpFXE2dTsB6bWRf%2BQ8lhE1WocvUDrvL12rN0z5EhqXYsZis4udCCqvEgb963PVYW0zCpbnlShDLaqwXBLqLBkl%2Fk99KLs7wl%2FNI%2BIxWvnBOyce5tbp%2BYwouqNvwY6pgFAnCRE6pw%2F8PT0GhWMJ5kw40rz7KlHhjWO3M5X3I5AGEdepbdLPJZPXMuc5YfL2V%2Bg2umoJ5Jhsvj%2BjTWV7OozN%2F9wvi%2FODBqMi9UQxJz7h%2Bw%2F7I85tLei%2B8TyYuafSY%2FAOFgQXKkPNkCAGjgSqH63uG7QCJKsVcZ9yXC1frOGhaePDMwzStu0pLCECQtb%2BuqcIH7hrCXyp6egBSw49C5LVKPiZX4y&X-Amz-Signature=194ebba333bd275afb2639f3cad1b39d475ba32dfed70ac4db067ee069dd3c82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVXXZ2Z%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHpT%2FSyKm0O9FOH6M%2BQz8o7DDQmCwPmumlBHBa11fN%2BAiBWHo9VbbT3lOx6xSkKXZk5XRP09ccCp2%2BcCeaswXLQkCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMNuTP7wUvyIGYv7eGKtwDhTSGRMeNJEN%2Fm6Qvnrs4iQs0jo50NSWhnMnmVWu2zTfr%2B6t%2BWjM8DqsGQapYPTPPU%2F8IevUxE6BrSrIVDuy2OoZz12AmmvoqW6fBFzTlnlfBsKZ%2B8viWWp8phUvHyf4zdF7kovKezwpRSGKr3T%2BhbYQUoiYO9XV3ftaMepmDp8pTz0Mk%2F%2FHloff%2BpxazrAF%2BLLy7aMf7evL5hXFGIJnz4PDKddRlBbrxQ%2FdM8EfhGM84c8N0IubrcEPTzxypMCQqOHQdmUkULpRfTm2wLj9Q1HMvBWhjFIiVFQVe8TQHeru29LJHJs4f1CgShehMLMpxDVA8VWhBsKmbWXp%2FpFidbwKuNFbyvQeS3FZs5%2FkDezdQ7igKFPTxynCoJ%2B24wrWwycFMLKIoW%2Bkl1%2BQCeVOH3Iy2Zg%2FPnf9BKIRdV3cuo6zan4KSZnVXC1qNIF959JaMOxiSGt2nJDaRwyj6ahYqb6M0vEZJNQ%2Fo26S0dsmUaZLcQR2UVCgCfy4cY1BHrgRrACZbOdZNpFXE2dTsB6bWRf%2BQ8lhE1WocvUDrvL12rN0z5EhqXYsZis4udCCqvEgb963PVYW0zCpbnlShDLaqwXBLqLBkl%2Fk99KLs7wl%2FNI%2BIxWvnBOyce5tbp%2BYwouqNvwY6pgFAnCRE6pw%2F8PT0GhWMJ5kw40rz7KlHhjWO3M5X3I5AGEdepbdLPJZPXMuc5YfL2V%2Bg2umoJ5Jhsvj%2BjTWV7OozN%2F9wvi%2FODBqMi9UQxJz7h%2Bw%2F7I85tLei%2B8TyYuafSY%2FAOFgQXKkPNkCAGjgSqH63uG7QCJKsVcZ9yXC1frOGhaePDMwzStu0pLCECQtb%2BuqcIH7hrCXyp6egBSw49C5LVKPiZX4y&X-Amz-Signature=f50d97722258b067378209f2d3e5c62613eca5d28bf509f4f4f13a5354f1b4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
