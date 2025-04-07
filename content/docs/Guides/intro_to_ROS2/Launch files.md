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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHCY6TA4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT6isXTEdfgcHQsCcgljHOmSqtk0bUvuf5A6iW%2BGPlEQIhALQLwp7pJAIyF%2F7O8U4Bl1fpO%2F9LlghXzPF8bQJthR4oKv8DCGMQABoMNjM3NDIzMTgzODA1IgzMipg%2BFmkcJS3stuEq3ANBCZC4pZ6rxQ5fRM%2B2%2BqAWVxdFlSKX9YJi5cbRyykeMmJEKQ53flI97isXLIKunBARwSqmZ0ZQju%2FuSz4fFkRP5OZC0WEpA1aaq1hbX38usM0uFVt0XU0Ln%2B8tq8oesaORnA4uZ0HlmbSbeC%2Bp%2F660vBtmLIukjpyrZoLGa8VgzIUkjyreQW%2FCKgNaBNsatGk094Gt6dqMCijbpRZQgHhH5FqrmHtQ3V7UgP6s%2FKuQVipbWueibDNlO9SyjpbCtF37WEDQHF1wV5j6WgbK9wKbT4Jvh1LEnB78z6PTAOAqMfXeRw3HGjICvAppxLgaglweQUWUiDUEgkKksGzrsa%2F4zl8ELdz1sihs5WrHXhOzoZ8XOUau3vbPoNeZq2gfCYRF0UuLtJXtMsbIgc8ZjfsJ76Myh7VRND%2Bt0mJKzA3CO5Xxuy0tqszyO6OBQhXWa%2FO073ZE6u5UtTb2sVpgvloaZ2G40VPWdFxD%2BCQQGOdBcMwC%2Bf9qjUVOZURa9CojXffF7wVk3609MCaH3vQVN1kSpfA2xyAPOVZUDA%2FGY9ru6IMNHknMnjmHC9wG%2Bp283daEG6LYRBr%2FdoDiVxOCmCw4c9u0mM4LSZ8FxSz6iqRndw5OHb5HP5y47xVx5zDro9C%2FBjqkAVWsr7RONkFQRFiKCzcPgVG49WCGsVTkLns7DTc5goih82ewqtqrtGMjEa165K630QgSpYyge4K4yj6U7nkSt0LbJHUhVQHN2g%2BQcJln8gjSBwBL%2FqgU2oKz0DqciBejJ6DJ0ex6L%2F6BS6Qr6gtvJA9mcigIr7EaElNSUKs6DvAuBUhGVHw3HmD17utUkQ%2B8wWHrlKR0Wo6xV4qwTyHjZfqcRfq1&X-Amz-Signature=4f4aed4ed69027b0a43ce9a81673970514ac01dd0e1bdf3e43392920b5a94f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHCY6TA4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT6isXTEdfgcHQsCcgljHOmSqtk0bUvuf5A6iW%2BGPlEQIhALQLwp7pJAIyF%2F7O8U4Bl1fpO%2F9LlghXzPF8bQJthR4oKv8DCGMQABoMNjM3NDIzMTgzODA1IgzMipg%2BFmkcJS3stuEq3ANBCZC4pZ6rxQ5fRM%2B2%2BqAWVxdFlSKX9YJi5cbRyykeMmJEKQ53flI97isXLIKunBARwSqmZ0ZQju%2FuSz4fFkRP5OZC0WEpA1aaq1hbX38usM0uFVt0XU0Ln%2B8tq8oesaORnA4uZ0HlmbSbeC%2Bp%2F660vBtmLIukjpyrZoLGa8VgzIUkjyreQW%2FCKgNaBNsatGk094Gt6dqMCijbpRZQgHhH5FqrmHtQ3V7UgP6s%2FKuQVipbWueibDNlO9SyjpbCtF37WEDQHF1wV5j6WgbK9wKbT4Jvh1LEnB78z6PTAOAqMfXeRw3HGjICvAppxLgaglweQUWUiDUEgkKksGzrsa%2F4zl8ELdz1sihs5WrHXhOzoZ8XOUau3vbPoNeZq2gfCYRF0UuLtJXtMsbIgc8ZjfsJ76Myh7VRND%2Bt0mJKzA3CO5Xxuy0tqszyO6OBQhXWa%2FO073ZE6u5UtTb2sVpgvloaZ2G40VPWdFxD%2BCQQGOdBcMwC%2Bf9qjUVOZURa9CojXffF7wVk3609MCaH3vQVN1kSpfA2xyAPOVZUDA%2FGY9ru6IMNHknMnjmHC9wG%2Bp283daEG6LYRBr%2FdoDiVxOCmCw4c9u0mM4LSZ8FxSz6iqRndw5OHb5HP5y47xVx5zDro9C%2FBjqkAVWsr7RONkFQRFiKCzcPgVG49WCGsVTkLns7DTc5goih82ewqtqrtGMjEa165K630QgSpYyge4K4yj6U7nkSt0LbJHUhVQHN2g%2BQcJln8gjSBwBL%2FqgU2oKz0DqciBejJ6DJ0ex6L%2F6BS6Qr6gtvJA9mcigIr7EaElNSUKs6DvAuBUhGVHw3HmD17utUkQ%2B8wWHrlKR0Wo6xV4qwTyHjZfqcRfq1&X-Amz-Signature=cf7af6010ba21d4f25317eeaeb5af4a9ad23efaf84352dfe56dd5e7246997dce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHCY6TA4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT6isXTEdfgcHQsCcgljHOmSqtk0bUvuf5A6iW%2BGPlEQIhALQLwp7pJAIyF%2F7O8U4Bl1fpO%2F9LlghXzPF8bQJthR4oKv8DCGMQABoMNjM3NDIzMTgzODA1IgzMipg%2BFmkcJS3stuEq3ANBCZC4pZ6rxQ5fRM%2B2%2BqAWVxdFlSKX9YJi5cbRyykeMmJEKQ53flI97isXLIKunBARwSqmZ0ZQju%2FuSz4fFkRP5OZC0WEpA1aaq1hbX38usM0uFVt0XU0Ln%2B8tq8oesaORnA4uZ0HlmbSbeC%2Bp%2F660vBtmLIukjpyrZoLGa8VgzIUkjyreQW%2FCKgNaBNsatGk094Gt6dqMCijbpRZQgHhH5FqrmHtQ3V7UgP6s%2FKuQVipbWueibDNlO9SyjpbCtF37WEDQHF1wV5j6WgbK9wKbT4Jvh1LEnB78z6PTAOAqMfXeRw3HGjICvAppxLgaglweQUWUiDUEgkKksGzrsa%2F4zl8ELdz1sihs5WrHXhOzoZ8XOUau3vbPoNeZq2gfCYRF0UuLtJXtMsbIgc8ZjfsJ76Myh7VRND%2Bt0mJKzA3CO5Xxuy0tqszyO6OBQhXWa%2FO073ZE6u5UtTb2sVpgvloaZ2G40VPWdFxD%2BCQQGOdBcMwC%2Bf9qjUVOZURa9CojXffF7wVk3609MCaH3vQVN1kSpfA2xyAPOVZUDA%2FGY9ru6IMNHknMnjmHC9wG%2Bp283daEG6LYRBr%2FdoDiVxOCmCw4c9u0mM4LSZ8FxSz6iqRndw5OHb5HP5y47xVx5zDro9C%2FBjqkAVWsr7RONkFQRFiKCzcPgVG49WCGsVTkLns7DTc5goih82ewqtqrtGMjEa165K630QgSpYyge4K4yj6U7nkSt0LbJHUhVQHN2g%2BQcJln8gjSBwBL%2FqgU2oKz0DqciBejJ6DJ0ex6L%2F6BS6Qr6gtvJA9mcigIr7EaElNSUKs6DvAuBUhGVHw3HmD17utUkQ%2B8wWHrlKR0Wo6xV4qwTyHjZfqcRfq1&X-Amz-Signature=8cbc2c325130d90580c228f316182744c6f0677332d44569639e1f3cd953e34a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
