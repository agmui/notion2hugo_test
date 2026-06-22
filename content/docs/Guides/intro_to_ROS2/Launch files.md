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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3TYKHAC%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCKwEeeUxBI6vSyamxjiw1WDDkgWVjZiAtDzeUQcwOMDAIgMyDA0SkoIxdIQfIvQlk%2BLgvFcquy6EYnbq%2F%2BovojsqIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0eKXo%2FeuD08q2lPSrcA8xNfaPgSzKSQsPxZp0l3SnsD%2B3NleASynCXuVJRykqsbx%2FYRUFHNCRMl%2Bzb0d1IhE0TemaLKzQzp%2BgCYvrRIzB5O9ItQC9YPQ1LZyNBY3lsVfr1xSIabgQ8fCNzq%2BDPuuxdO%2BQaj6NI3IJeGLZcDMrYecy2u0DYjHu4VrO%2FVqgX7x3NYwvUJRGEWY6UFWIzj6FNs3VMF5VuNsUc72PQQ2chnUaZsDoVa2kv6hcmaVR6gaZRMmoZhOKn4SdVln3IHF%2F9a%2BlKIX6hNStzJAorlMNET%2BauVZ4db3tkB1Fmc6L0wDJ65Mlvs6x%2FmEaNpoj34GPn2tlJiVLt415VLo8fMaJ7LCSdHxDzxLUxL2Es009fUzP0SknLh4cDfV2hcXfOoH%2FSr2AWgJBoHjVlM7k8EqUhkT%2Bpp2PZX%2BOiDunoJpF3s%2FS3c46j6QeoMHbY6XGTAIIADK4iTCSqsPw%2FqIf2eWOgo13UwgjhBcHzgV0S%2BuQqKm%2FG0md98AypK%2F0fkQMqDtHHwK3AoVPUJxtshFCxETk7%2BUhChOhqojfOAtqean9O3cH%2FteALs0V%2FJKZjn95FIjxEIITeSnsfew5UGJRTILQiPsRdv6ZfEUfSwP0lHkgSg5AK0t9MpUt%2FPnTMMI3Z4tEGOqUBZBy45CCF5QyrAljC5zGOT0WAAjM9uiusQWqhsZfhfiDtVCtEw2N4DZzHUj5Y7mqlzxePowdtZPd5QKS5%2Be7VhKrUxb%2BVNVzgmMHb2Vo3Q%2FX6aqX%2Bhbuh%2FQ0iAJLH2UP2kwdF9dhacei4MN4uaEIvh8jqYu%2FPrxkaTsDmxXTwCSE1MoNpnrLq0pDR%2FhowqAbq%2F2cexz2x7uY9pL1iypvvkkp15L4J&X-Amz-Signature=8135b23bf6735932f58916ffff8d438b257c00cdac3f82b2f61618666124db05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3TYKHAC%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCKwEeeUxBI6vSyamxjiw1WDDkgWVjZiAtDzeUQcwOMDAIgMyDA0SkoIxdIQfIvQlk%2BLgvFcquy6EYnbq%2F%2BovojsqIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0eKXo%2FeuD08q2lPSrcA8xNfaPgSzKSQsPxZp0l3SnsD%2B3NleASynCXuVJRykqsbx%2FYRUFHNCRMl%2Bzb0d1IhE0TemaLKzQzp%2BgCYvrRIzB5O9ItQC9YPQ1LZyNBY3lsVfr1xSIabgQ8fCNzq%2BDPuuxdO%2BQaj6NI3IJeGLZcDMrYecy2u0DYjHu4VrO%2FVqgX7x3NYwvUJRGEWY6UFWIzj6FNs3VMF5VuNsUc72PQQ2chnUaZsDoVa2kv6hcmaVR6gaZRMmoZhOKn4SdVln3IHF%2F9a%2BlKIX6hNStzJAorlMNET%2BauVZ4db3tkB1Fmc6L0wDJ65Mlvs6x%2FmEaNpoj34GPn2tlJiVLt415VLo8fMaJ7LCSdHxDzxLUxL2Es009fUzP0SknLh4cDfV2hcXfOoH%2FSr2AWgJBoHjVlM7k8EqUhkT%2Bpp2PZX%2BOiDunoJpF3s%2FS3c46j6QeoMHbY6XGTAIIADK4iTCSqsPw%2FqIf2eWOgo13UwgjhBcHzgV0S%2BuQqKm%2FG0md98AypK%2F0fkQMqDtHHwK3AoVPUJxtshFCxETk7%2BUhChOhqojfOAtqean9O3cH%2FteALs0V%2FJKZjn95FIjxEIITeSnsfew5UGJRTILQiPsRdv6ZfEUfSwP0lHkgSg5AK0t9MpUt%2FPnTMMI3Z4tEGOqUBZBy45CCF5QyrAljC5zGOT0WAAjM9uiusQWqhsZfhfiDtVCtEw2N4DZzHUj5Y7mqlzxePowdtZPd5QKS5%2Be7VhKrUxb%2BVNVzgmMHb2Vo3Q%2FX6aqX%2Bhbuh%2FQ0iAJLH2UP2kwdF9dhacei4MN4uaEIvh8jqYu%2FPrxkaTsDmxXTwCSE1MoNpnrLq0pDR%2FhowqAbq%2F2cexz2x7uY9pL1iypvvkkp15L4J&X-Amz-Signature=3d908086f1163634e2d375031b4de78859f9a159a60891769f62904bfd33cf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3TYKHAC%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCKwEeeUxBI6vSyamxjiw1WDDkgWVjZiAtDzeUQcwOMDAIgMyDA0SkoIxdIQfIvQlk%2BLgvFcquy6EYnbq%2F%2BovojsqIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0eKXo%2FeuD08q2lPSrcA8xNfaPgSzKSQsPxZp0l3SnsD%2B3NleASynCXuVJRykqsbx%2FYRUFHNCRMl%2Bzb0d1IhE0TemaLKzQzp%2BgCYvrRIzB5O9ItQC9YPQ1LZyNBY3lsVfr1xSIabgQ8fCNzq%2BDPuuxdO%2BQaj6NI3IJeGLZcDMrYecy2u0DYjHu4VrO%2FVqgX7x3NYwvUJRGEWY6UFWIzj6FNs3VMF5VuNsUc72PQQ2chnUaZsDoVa2kv6hcmaVR6gaZRMmoZhOKn4SdVln3IHF%2F9a%2BlKIX6hNStzJAorlMNET%2BauVZ4db3tkB1Fmc6L0wDJ65Mlvs6x%2FmEaNpoj34GPn2tlJiVLt415VLo8fMaJ7LCSdHxDzxLUxL2Es009fUzP0SknLh4cDfV2hcXfOoH%2FSr2AWgJBoHjVlM7k8EqUhkT%2Bpp2PZX%2BOiDunoJpF3s%2FS3c46j6QeoMHbY6XGTAIIADK4iTCSqsPw%2FqIf2eWOgo13UwgjhBcHzgV0S%2BuQqKm%2FG0md98AypK%2F0fkQMqDtHHwK3AoVPUJxtshFCxETk7%2BUhChOhqojfOAtqean9O3cH%2FteALs0V%2FJKZjn95FIjxEIITeSnsfew5UGJRTILQiPsRdv6ZfEUfSwP0lHkgSg5AK0t9MpUt%2FPnTMMI3Z4tEGOqUBZBy45CCF5QyrAljC5zGOT0WAAjM9uiusQWqhsZfhfiDtVCtEw2N4DZzHUj5Y7mqlzxePowdtZPd5QKS5%2Be7VhKrUxb%2BVNVzgmMHb2Vo3Q%2FX6aqX%2Bhbuh%2FQ0iAJLH2UP2kwdF9dhacei4MN4uaEIvh8jqYu%2FPrxkaTsDmxXTwCSE1MoNpnrLq0pDR%2FhowqAbq%2F2cexz2x7uY9pL1iypvvkkp15L4J&X-Amz-Signature=fa15b2bf85f080fad3e1f53330457fbfc1d6eb160673e39f1e1b1de700fe61ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
