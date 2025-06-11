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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQZGXK6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG40u4h31arfpENtp65%2Bd5gnVFodhnsUqrqrmYx1FvabAiAAvtQtPb4ibBPclUqn6sY6WeaP1NQhI0lGo6VoSGXIfCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxPhYqlux1xF%2FZ7hKtwDqdV4kBGZG0mzo595HIklel2X0r2H3ga6B%2BXczBcBXktzd5cBuGkj2%2FQgDXtv5mk6ASGMldkLk26H8qa%2BqWCG%2FwQb%2BLiV%2BY3jj6pAPORksUiHPNEI1LBeLmjFccy3XqVXyoziXRrKxGgZBeKu2EwOLF0VJbOoUgP8eajDokEWMA7mV%2FGqPKCzjgW4gGJEk9AduK6ORSrrWTR8inXBnOtyVyTF35jz6wPFFlitlKZyrRBFWp7I%2FZnGrX0Q%2BNrzb2%2FWZOcAmtBF2sCBgRb3U0xjXqlkhcuCSmF7bp6qX6t%2BEc6EiZT1ElTZmDV6k1QIF%2FkdcRz5zd%2F5xR35YyRh1L3jL4e6wxyk%2FOb24P6EgBpSX7WCvSmR22t%2Bflcxnn1nIqjEl807j4IcOGpR%2FIjfNM7IUUtBE2xAF2VcYAm%2BQlaPe%2F2vxrJ1rE4Ucnes8HxiN0Dvzewp8x9KH8VfU0cp8aBdlRm9LYbdqkWvvD2x3HYY5m3uy78yOkjTMWcUaq3INZDS1bvFR6tWmpfDQ0vTMwlIQbO7CsXr0XhfSM5R5gWsurPFpr%2FWcqUiO9EZH4LV67UkOiQfn9jpSh7nvw%2FX5WT8xXzQVtDkZbknE7RWZRUVmDJ8xi1aAAjRjTTAj8ww3JakwgY6pgGT%2FTUTXhVtqZ9%2BO48dUHssdyAhnOI2s2fzKmX2y3MiOwwLzQg8kB%2BlfkqHVcOi1ZsyN%2FkKeZhJbQIuN79auvteQOGsrCaCozUmXyjPfF9rNqD6YAoYQveQdm6KmWIVPbi6b%2Ba7uYOJpkeLu8xthz%2FnkwmH5JKIGDSKGr%2F8VhWQYFrutxxguAOz5fuwmjE4vvdZUuBYd3Zyc6Sjx2TAkGjQsTCVu%2BFK&X-Amz-Signature=575509d29550d2c7ba32f87f8405409a0f8f05853338b8c2640479ee4554fed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQZGXK6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG40u4h31arfpENtp65%2Bd5gnVFodhnsUqrqrmYx1FvabAiAAvtQtPb4ibBPclUqn6sY6WeaP1NQhI0lGo6VoSGXIfCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxPhYqlux1xF%2FZ7hKtwDqdV4kBGZG0mzo595HIklel2X0r2H3ga6B%2BXczBcBXktzd5cBuGkj2%2FQgDXtv5mk6ASGMldkLk26H8qa%2BqWCG%2FwQb%2BLiV%2BY3jj6pAPORksUiHPNEI1LBeLmjFccy3XqVXyoziXRrKxGgZBeKu2EwOLF0VJbOoUgP8eajDokEWMA7mV%2FGqPKCzjgW4gGJEk9AduK6ORSrrWTR8inXBnOtyVyTF35jz6wPFFlitlKZyrRBFWp7I%2FZnGrX0Q%2BNrzb2%2FWZOcAmtBF2sCBgRb3U0xjXqlkhcuCSmF7bp6qX6t%2BEc6EiZT1ElTZmDV6k1QIF%2FkdcRz5zd%2F5xR35YyRh1L3jL4e6wxyk%2FOb24P6EgBpSX7WCvSmR22t%2Bflcxnn1nIqjEl807j4IcOGpR%2FIjfNM7IUUtBE2xAF2VcYAm%2BQlaPe%2F2vxrJ1rE4Ucnes8HxiN0Dvzewp8x9KH8VfU0cp8aBdlRm9LYbdqkWvvD2x3HYY5m3uy78yOkjTMWcUaq3INZDS1bvFR6tWmpfDQ0vTMwlIQbO7CsXr0XhfSM5R5gWsurPFpr%2FWcqUiO9EZH4LV67UkOiQfn9jpSh7nvw%2FX5WT8xXzQVtDkZbknE7RWZRUVmDJ8xi1aAAjRjTTAj8ww3JakwgY6pgGT%2FTUTXhVtqZ9%2BO48dUHssdyAhnOI2s2fzKmX2y3MiOwwLzQg8kB%2BlfkqHVcOi1ZsyN%2FkKeZhJbQIuN79auvteQOGsrCaCozUmXyjPfF9rNqD6YAoYQveQdm6KmWIVPbi6b%2Ba7uYOJpkeLu8xthz%2FnkwmH5JKIGDSKGr%2F8VhWQYFrutxxguAOz5fuwmjE4vvdZUuBYd3Zyc6Sjx2TAkGjQsTCVu%2BFK&X-Amz-Signature=a4597a0355f50b67d13a004f7bc6b5d92ba4d6a6ead8b64e8dc2a8ee5b44959a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQZGXK6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG40u4h31arfpENtp65%2Bd5gnVFodhnsUqrqrmYx1FvabAiAAvtQtPb4ibBPclUqn6sY6WeaP1NQhI0lGo6VoSGXIfCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxPhYqlux1xF%2FZ7hKtwDqdV4kBGZG0mzo595HIklel2X0r2H3ga6B%2BXczBcBXktzd5cBuGkj2%2FQgDXtv5mk6ASGMldkLk26H8qa%2BqWCG%2FwQb%2BLiV%2BY3jj6pAPORksUiHPNEI1LBeLmjFccy3XqVXyoziXRrKxGgZBeKu2EwOLF0VJbOoUgP8eajDokEWMA7mV%2FGqPKCzjgW4gGJEk9AduK6ORSrrWTR8inXBnOtyVyTF35jz6wPFFlitlKZyrRBFWp7I%2FZnGrX0Q%2BNrzb2%2FWZOcAmtBF2sCBgRb3U0xjXqlkhcuCSmF7bp6qX6t%2BEc6EiZT1ElTZmDV6k1QIF%2FkdcRz5zd%2F5xR35YyRh1L3jL4e6wxyk%2FOb24P6EgBpSX7WCvSmR22t%2Bflcxnn1nIqjEl807j4IcOGpR%2FIjfNM7IUUtBE2xAF2VcYAm%2BQlaPe%2F2vxrJ1rE4Ucnes8HxiN0Dvzewp8x9KH8VfU0cp8aBdlRm9LYbdqkWvvD2x3HYY5m3uy78yOkjTMWcUaq3INZDS1bvFR6tWmpfDQ0vTMwlIQbO7CsXr0XhfSM5R5gWsurPFpr%2FWcqUiO9EZH4LV67UkOiQfn9jpSh7nvw%2FX5WT8xXzQVtDkZbknE7RWZRUVmDJ8xi1aAAjRjTTAj8ww3JakwgY6pgGT%2FTUTXhVtqZ9%2BO48dUHssdyAhnOI2s2fzKmX2y3MiOwwLzQg8kB%2BlfkqHVcOi1ZsyN%2FkKeZhJbQIuN79auvteQOGsrCaCozUmXyjPfF9rNqD6YAoYQveQdm6KmWIVPbi6b%2Ba7uYOJpkeLu8xthz%2FnkwmH5JKIGDSKGr%2F8VhWQYFrutxxguAOz5fuwmjE4vvdZUuBYd3Zyc6Sjx2TAkGjQsTCVu%2BFK&X-Amz-Signature=63bdff05c4fcad2c0c2ac88916593e75175704d6034b4943dbe269a9f28766ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
