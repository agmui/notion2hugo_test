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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7GVM4R%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDPM6hrgcubDwzYquVHeqsnozouoD0vSOajzJ2b%2F5d%2FHAiBHjGDZJ4bYyevEexQxdiTee9V4CnwH0nOQsAphKGHCxCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM8z0yiDySbail8XYeKtwDCzDD7QhfmFZzkmjr5unJ8GcpXrP7HNWBmcYoxuE04%2FawRUbAij%2FpU6VFaRUEA4z3kVIIWQa1dG57bs%2F7pSOesaUwFrWylUMaDMAC8c%2FLMpDKnOFtHco1j3IrqTX%2Br21tVCN%2FkC56RJQyWy9NE1ve9xt0xNZjnb1ZhbmFAxu6xRzbma9jrVrmqPCI8soTgpgkIoljihCIf7BwZwxob1JyTVWro7%2BXFw0nnpFdxM3oFCvdwjyr4jndzT918u%2FEFtuiwx%2BC%2BX5rnUJXadp%2B1Pv5S329nkT5nPICIAvs2w%2BsIAtXfhddj3Xua4qjahtjP1YaqCsNHHkLkgqbsPD9N0AT7fJbNXc%2FRijBmI%2B9PdVZa9VROuSnj%2Fn5vDhgfbnD2ozpn%2Fe9afLtj7mhHFDIsEQ5VFB10sBdRZtNu6Sq8BMBNHgQ09lowTbvTkEQtP71jsHfPMNHI4nfuyUzVxuKXZGUi%2Fx7Jzv7CYrGXVNpjP0G5DACdDDlC6RxrMCuBIddcTYUkBBPWb4YuowR6mFW%2FgxDVEC8j%2Bsjw1xdDSKiWGTqJZImnNKe7XjujCo4720Zl4HfpNBwvd2GSKpOG5iJnx0%2FBWKbNtc%2B55xLKiTJ%2F9hbmiL55SBRlMFdKbYKMN0wm%2B2RvQY6pgHt0DUZxQ%2FXyWwL2RR27rm3d2TTBV6wlb0YFIJrCiv8NTmbnv7zuvViI9wxaWgy%2Fws5rxqvUrBNY3GF5NKw5q6NNfIs236Vo5EkFDgAiCB35cVCV86AiXwffXmi%2Fd4h%2FAx0KwCYVschHHwQgEf6vlTURjk6wTl1Mf1CMP%2BgIzf0Kwzxu8twvhL3mfLVCy4A1I6z7uTn%2FMN4rhyXCUi6AOOERZ7IHmWf&X-Amz-Signature=61bd6596587fdacdcc43ef380ddc82461deb72b2c6133973e6cacd2feeb5cd75&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7GVM4R%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDPM6hrgcubDwzYquVHeqsnozouoD0vSOajzJ2b%2F5d%2FHAiBHjGDZJ4bYyevEexQxdiTee9V4CnwH0nOQsAphKGHCxCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM8z0yiDySbail8XYeKtwDCzDD7QhfmFZzkmjr5unJ8GcpXrP7HNWBmcYoxuE04%2FawRUbAij%2FpU6VFaRUEA4z3kVIIWQa1dG57bs%2F7pSOesaUwFrWylUMaDMAC8c%2FLMpDKnOFtHco1j3IrqTX%2Br21tVCN%2FkC56RJQyWy9NE1ve9xt0xNZjnb1ZhbmFAxu6xRzbma9jrVrmqPCI8soTgpgkIoljihCIf7BwZwxob1JyTVWro7%2BXFw0nnpFdxM3oFCvdwjyr4jndzT918u%2FEFtuiwx%2BC%2BX5rnUJXadp%2B1Pv5S329nkT5nPICIAvs2w%2BsIAtXfhddj3Xua4qjahtjP1YaqCsNHHkLkgqbsPD9N0AT7fJbNXc%2FRijBmI%2B9PdVZa9VROuSnj%2Fn5vDhgfbnD2ozpn%2Fe9afLtj7mhHFDIsEQ5VFB10sBdRZtNu6Sq8BMBNHgQ09lowTbvTkEQtP71jsHfPMNHI4nfuyUzVxuKXZGUi%2Fx7Jzv7CYrGXVNpjP0G5DACdDDlC6RxrMCuBIddcTYUkBBPWb4YuowR6mFW%2FgxDVEC8j%2Bsjw1xdDSKiWGTqJZImnNKe7XjujCo4720Zl4HfpNBwvd2GSKpOG5iJnx0%2FBWKbNtc%2B55xLKiTJ%2F9hbmiL55SBRlMFdKbYKMN0wm%2B2RvQY6pgHt0DUZxQ%2FXyWwL2RR27rm3d2TTBV6wlb0YFIJrCiv8NTmbnv7zuvViI9wxaWgy%2Fws5rxqvUrBNY3GF5NKw5q6NNfIs236Vo5EkFDgAiCB35cVCV86AiXwffXmi%2Fd4h%2FAx0KwCYVschHHwQgEf6vlTURjk6wTl1Mf1CMP%2BgIzf0Kwzxu8twvhL3mfLVCy4A1I6z7uTn%2FMN4rhyXCUi6AOOERZ7IHmWf&X-Amz-Signature=ae16835e595f99a1c94e08d963cc95fe80fbec7e5bac26ae5de02bbddf371e46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7GVM4R%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDPM6hrgcubDwzYquVHeqsnozouoD0vSOajzJ2b%2F5d%2FHAiBHjGDZJ4bYyevEexQxdiTee9V4CnwH0nOQsAphKGHCxCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM8z0yiDySbail8XYeKtwDCzDD7QhfmFZzkmjr5unJ8GcpXrP7HNWBmcYoxuE04%2FawRUbAij%2FpU6VFaRUEA4z3kVIIWQa1dG57bs%2F7pSOesaUwFrWylUMaDMAC8c%2FLMpDKnOFtHco1j3IrqTX%2Br21tVCN%2FkC56RJQyWy9NE1ve9xt0xNZjnb1ZhbmFAxu6xRzbma9jrVrmqPCI8soTgpgkIoljihCIf7BwZwxob1JyTVWro7%2BXFw0nnpFdxM3oFCvdwjyr4jndzT918u%2FEFtuiwx%2BC%2BX5rnUJXadp%2B1Pv5S329nkT5nPICIAvs2w%2BsIAtXfhddj3Xua4qjahtjP1YaqCsNHHkLkgqbsPD9N0AT7fJbNXc%2FRijBmI%2B9PdVZa9VROuSnj%2Fn5vDhgfbnD2ozpn%2Fe9afLtj7mhHFDIsEQ5VFB10sBdRZtNu6Sq8BMBNHgQ09lowTbvTkEQtP71jsHfPMNHI4nfuyUzVxuKXZGUi%2Fx7Jzv7CYrGXVNpjP0G5DACdDDlC6RxrMCuBIddcTYUkBBPWb4YuowR6mFW%2FgxDVEC8j%2Bsjw1xdDSKiWGTqJZImnNKe7XjujCo4720Zl4HfpNBwvd2GSKpOG5iJnx0%2FBWKbNtc%2B55xLKiTJ%2F9hbmiL55SBRlMFdKbYKMN0wm%2B2RvQY6pgHt0DUZxQ%2FXyWwL2RR27rm3d2TTBV6wlb0YFIJrCiv8NTmbnv7zuvViI9wxaWgy%2Fws5rxqvUrBNY3GF5NKw5q6NNfIs236Vo5EkFDgAiCB35cVCV86AiXwffXmi%2Fd4h%2FAx0KwCYVschHHwQgEf6vlTURjk6wTl1Mf1CMP%2BgIzf0Kwzxu8twvhL3mfLVCy4A1I6z7uTn%2FMN4rhyXCUi6AOOERZ7IHmWf&X-Amz-Signature=5c8e3a8dce9da8555f7378ed4ff87f651a73b0efe101ce8f41f86998e8e9508e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
