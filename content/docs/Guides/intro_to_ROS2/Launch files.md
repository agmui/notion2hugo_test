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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMY5GGB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2BumQTZx%2FnqbHB%2FrvVzyQnl4jgQeyLrouDqd6NETBwDwIgQHmcJDqKEafAB%2Bb9YdgTsOLV%2FChpsziX2qf0jkeYzPgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcRB%2FH5kMRGtw54WyrcAzAQ77l%2FjM7KFAm3iBiMzF0KaukJIw2T3a57q3aQ20F3AqqaDzzzduSugKVIWsNszXbx3LcuTFYdfXgyo6MVJu0b9zhgnAcUKSajEXEZj46UtI7FfoCngGccXVmKiinLGdVq%2FUHFK2zC%2FuDpV%2FaH4sY2dFnIY%2BH4mE4hHhXmUy9X5lE5a6DPDQ%2FaDPTfmqLa%2BizUYKctEI5YXjAEWvfKBsVUYKysybc1qjeZKjEh2qsXh96gk4WghZ6fikPhIKaJ2kOMMq1fWSPD%2BYCF9xTWi0oOqZfYYHZzRAft2kH%2Brf2MorCJBc48vVrjOo85RUrrLeFNOvX4ic3H0UwVtLpNTnqvW1Y%2Blt9KltW0qhTDt5%2B1EdxtCwUGQIsmwQB%2FtSxJ4PL4GGyjGHRIo%2BzUCtboyoeEH%2BOThQexx2CXBZhyfeBDRmN4Bu07HlFrm732SPgICBkjfDn9bCu5f%2FSqAI12P%2BQObCNZaFXecd4xeOWKGhy%2BWQhF9Etk58o%2F9IOYYVbcifNwsMo3jAKwZsXUcfSqO7R5jNkxGXACCsZKnI9a0AvRSoLKfKO3uEkYci2UTJz9safAQMdeGPPCBEzCbnzspqlc%2BMz3Z2dvOgULWFj5lV9mEVB0NoY2%2B%2FbuHS2lMNqosb8GOqUBht56EnIITWjxl7Xqjem3qK8fm1PZCoYje17Znq%2F%2FuWk76RB5gQZB7QwRf2ZUS9a%2BJ7nEqBKom%2F8D8YGcU23hyyJCvTD3ibeV9MBObN9ug1u2utqZXVfqEIjOvX5QgU16gNYHenQiRZS9bSn0cuN9uzOlonNzPlYjIANOiMV4lgAG34XIU2ZcMSNqHneE6AmtFDXh4HLLuuUvv4SdzSP334qZgrUT&X-Amz-Signature=e561ccca3470cd635b12685b82a36009e3d240948a292ffbc9124c43c3f01ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMY5GGB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2BumQTZx%2FnqbHB%2FrvVzyQnl4jgQeyLrouDqd6NETBwDwIgQHmcJDqKEafAB%2Bb9YdgTsOLV%2FChpsziX2qf0jkeYzPgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcRB%2FH5kMRGtw54WyrcAzAQ77l%2FjM7KFAm3iBiMzF0KaukJIw2T3a57q3aQ20F3AqqaDzzzduSugKVIWsNszXbx3LcuTFYdfXgyo6MVJu0b9zhgnAcUKSajEXEZj46UtI7FfoCngGccXVmKiinLGdVq%2FUHFK2zC%2FuDpV%2FaH4sY2dFnIY%2BH4mE4hHhXmUy9X5lE5a6DPDQ%2FaDPTfmqLa%2BizUYKctEI5YXjAEWvfKBsVUYKysybc1qjeZKjEh2qsXh96gk4WghZ6fikPhIKaJ2kOMMq1fWSPD%2BYCF9xTWi0oOqZfYYHZzRAft2kH%2Brf2MorCJBc48vVrjOo85RUrrLeFNOvX4ic3H0UwVtLpNTnqvW1Y%2Blt9KltW0qhTDt5%2B1EdxtCwUGQIsmwQB%2FtSxJ4PL4GGyjGHRIo%2BzUCtboyoeEH%2BOThQexx2CXBZhyfeBDRmN4Bu07HlFrm732SPgICBkjfDn9bCu5f%2FSqAI12P%2BQObCNZaFXecd4xeOWKGhy%2BWQhF9Etk58o%2F9IOYYVbcifNwsMo3jAKwZsXUcfSqO7R5jNkxGXACCsZKnI9a0AvRSoLKfKO3uEkYci2UTJz9safAQMdeGPPCBEzCbnzspqlc%2BMz3Z2dvOgULWFj5lV9mEVB0NoY2%2B%2FbuHS2lMNqosb8GOqUBht56EnIITWjxl7Xqjem3qK8fm1PZCoYje17Znq%2F%2FuWk76RB5gQZB7QwRf2ZUS9a%2BJ7nEqBKom%2F8D8YGcU23hyyJCvTD3ibeV9MBObN9ug1u2utqZXVfqEIjOvX5QgU16gNYHenQiRZS9bSn0cuN9uzOlonNzPlYjIANOiMV4lgAG34XIU2ZcMSNqHneE6AmtFDXh4HLLuuUvv4SdzSP334qZgrUT&X-Amz-Signature=1a45fe6d64e8022f1bf249b9cb88601ec243609cafe0510425020b5088f8ed90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMY5GGB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC%2BumQTZx%2FnqbHB%2FrvVzyQnl4jgQeyLrouDqd6NETBwDwIgQHmcJDqKEafAB%2Bb9YdgTsOLV%2FChpsziX2qf0jkeYzPgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcRB%2FH5kMRGtw54WyrcAzAQ77l%2FjM7KFAm3iBiMzF0KaukJIw2T3a57q3aQ20F3AqqaDzzzduSugKVIWsNszXbx3LcuTFYdfXgyo6MVJu0b9zhgnAcUKSajEXEZj46UtI7FfoCngGccXVmKiinLGdVq%2FUHFK2zC%2FuDpV%2FaH4sY2dFnIY%2BH4mE4hHhXmUy9X5lE5a6DPDQ%2FaDPTfmqLa%2BizUYKctEI5YXjAEWvfKBsVUYKysybc1qjeZKjEh2qsXh96gk4WghZ6fikPhIKaJ2kOMMq1fWSPD%2BYCF9xTWi0oOqZfYYHZzRAft2kH%2Brf2MorCJBc48vVrjOo85RUrrLeFNOvX4ic3H0UwVtLpNTnqvW1Y%2Blt9KltW0qhTDt5%2B1EdxtCwUGQIsmwQB%2FtSxJ4PL4GGyjGHRIo%2BzUCtboyoeEH%2BOThQexx2CXBZhyfeBDRmN4Bu07HlFrm732SPgICBkjfDn9bCu5f%2FSqAI12P%2BQObCNZaFXecd4xeOWKGhy%2BWQhF9Etk58o%2F9IOYYVbcifNwsMo3jAKwZsXUcfSqO7R5jNkxGXACCsZKnI9a0AvRSoLKfKO3uEkYci2UTJz9safAQMdeGPPCBEzCbnzspqlc%2BMz3Z2dvOgULWFj5lV9mEVB0NoY2%2B%2FbuHS2lMNqosb8GOqUBht56EnIITWjxl7Xqjem3qK8fm1PZCoYje17Znq%2F%2FuWk76RB5gQZB7QwRf2ZUS9a%2BJ7nEqBKom%2F8D8YGcU23hyyJCvTD3ibeV9MBObN9ug1u2utqZXVfqEIjOvX5QgU16gNYHenQiRZS9bSn0cuN9uzOlonNzPlYjIANOiMV4lgAG34XIU2ZcMSNqHneE6AmtFDXh4HLLuuUvv4SdzSP334qZgrUT&X-Amz-Signature=1a1d0f61eaac67d408566d73644ff01e9ad88dbe768abbddd156b32d8974839e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
