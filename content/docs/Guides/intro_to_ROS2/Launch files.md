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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIMAYQK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvoLkF66%2BnGFX9PCT0%2B8lOVJYxVWtRjvqDJotLsSpxeAIhAO%2FJOWyqQ79RXs%2BTsOhPuuripjhv%2FDkSynyJpNsU4dA2KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztAWrAcAA7rYcK1dEq3APmrDwYAMb1O3w2jA30kRN80auRp%2FQY8v8VSnrgxJRomH%2FHx02H37yJTY8sPOpa%2F%2BbWcK2aFeeK4PpSx11edwk7D5D7JrSNoCP11Q385m5ztTA5ri45pXfi77BcBVa9wzfAn6TmBqfT%2BtCsyoK1VMhatS%2B9p6Jyb3pxsyIy4BgWiGTCTvXThs7O0YZMVHfLOJFWXHo%2BNUQ7PVTQ6I3aQh%2Bcx%2B4rFwlFpFs6vsv5wkWQ9KqQCYnNTKadYk9qRpMCoj6rGH4VWBjMGyEuu3gHAcre0Es%2FA%2F%2B9vodrkVyR7WG%2FxASclpbqufQVk573T8lAza9AFoX%2BIwHjBz9zzf49XaMSIaB6%2Brtjx3TvW06gmagfEDfkwuhzYwzI4NL7Gj8Sdu1TDPi7ymiX4lDVA1BUHPwhxRDqF7t4LnwHlZowYeqvyixq78IF58Rary0BjFWiCJ6cojIdv9QJqqI8DvG1LmRVCfESbqqRpxjajRHqCQYy7SfJPyMC50x21H2lORNKl9qEc0LdE7Dapq55kDHirDBGcJy72nBEE%2F6bALe0oOWF%2FYa8EE1eB8Uz13%2FQwglt4dhEA0f84l8LAlDQ%2Bop%2B1X%2Fx8093Q%2F07ClWXiNNGjnidrwE3IYKpM2axd%2Bc8LDCpgr2%2FBjqkATzudPCcIahn3aWHc0cRMhx6XRO%2BQJvhxNgGClB7GdJlLDynmum3IbPtwRwl6EEarTsSgh77RINf%2F64yCsyPqWcYxWkyn9nboUmeVduhOjRe5ATlJyrBDLGGBkxQqOqRARuKIRek8wHzDvlgroMfl%2F1zey2baRAsRlHdrJhb4Zx1LZnDaUvg7vWicVlVoA0jF04gsTyUnixlkKvkyWyM9OfsRYKd&X-Amz-Signature=3a7590c27ce2b288abf0eafa23ee75f8888537b275e1262f7a0991c5c61e397e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIMAYQK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvoLkF66%2BnGFX9PCT0%2B8lOVJYxVWtRjvqDJotLsSpxeAIhAO%2FJOWyqQ79RXs%2BTsOhPuuripjhv%2FDkSynyJpNsU4dA2KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztAWrAcAA7rYcK1dEq3APmrDwYAMb1O3w2jA30kRN80auRp%2FQY8v8VSnrgxJRomH%2FHx02H37yJTY8sPOpa%2F%2BbWcK2aFeeK4PpSx11edwk7D5D7JrSNoCP11Q385m5ztTA5ri45pXfi77BcBVa9wzfAn6TmBqfT%2BtCsyoK1VMhatS%2B9p6Jyb3pxsyIy4BgWiGTCTvXThs7O0YZMVHfLOJFWXHo%2BNUQ7PVTQ6I3aQh%2Bcx%2B4rFwlFpFs6vsv5wkWQ9KqQCYnNTKadYk9qRpMCoj6rGH4VWBjMGyEuu3gHAcre0Es%2FA%2F%2B9vodrkVyR7WG%2FxASclpbqufQVk573T8lAza9AFoX%2BIwHjBz9zzf49XaMSIaB6%2Brtjx3TvW06gmagfEDfkwuhzYwzI4NL7Gj8Sdu1TDPi7ymiX4lDVA1BUHPwhxRDqF7t4LnwHlZowYeqvyixq78IF58Rary0BjFWiCJ6cojIdv9QJqqI8DvG1LmRVCfESbqqRpxjajRHqCQYy7SfJPyMC50x21H2lORNKl9qEc0LdE7Dapq55kDHirDBGcJy72nBEE%2F6bALe0oOWF%2FYa8EE1eB8Uz13%2FQwglt4dhEA0f84l8LAlDQ%2Bop%2B1X%2Fx8093Q%2F07ClWXiNNGjnidrwE3IYKpM2axd%2Bc8LDCpgr2%2FBjqkATzudPCcIahn3aWHc0cRMhx6XRO%2BQJvhxNgGClB7GdJlLDynmum3IbPtwRwl6EEarTsSgh77RINf%2F64yCsyPqWcYxWkyn9nboUmeVduhOjRe5ATlJyrBDLGGBkxQqOqRARuKIRek8wHzDvlgroMfl%2F1zey2baRAsRlHdrJhb4Zx1LZnDaUvg7vWicVlVoA0jF04gsTyUnixlkKvkyWyM9OfsRYKd&X-Amz-Signature=68f467ab87f8f8151c57c0ffded297c147a5a39d929d60e2925f8aa81fd51cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VIMAYQK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvoLkF66%2BnGFX9PCT0%2B8lOVJYxVWtRjvqDJotLsSpxeAIhAO%2FJOWyqQ79RXs%2BTsOhPuuripjhv%2FDkSynyJpNsU4dA2KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztAWrAcAA7rYcK1dEq3APmrDwYAMb1O3w2jA30kRN80auRp%2FQY8v8VSnrgxJRomH%2FHx02H37yJTY8sPOpa%2F%2BbWcK2aFeeK4PpSx11edwk7D5D7JrSNoCP11Q385m5ztTA5ri45pXfi77BcBVa9wzfAn6TmBqfT%2BtCsyoK1VMhatS%2B9p6Jyb3pxsyIy4BgWiGTCTvXThs7O0YZMVHfLOJFWXHo%2BNUQ7PVTQ6I3aQh%2Bcx%2B4rFwlFpFs6vsv5wkWQ9KqQCYnNTKadYk9qRpMCoj6rGH4VWBjMGyEuu3gHAcre0Es%2FA%2F%2B9vodrkVyR7WG%2FxASclpbqufQVk573T8lAza9AFoX%2BIwHjBz9zzf49XaMSIaB6%2Brtjx3TvW06gmagfEDfkwuhzYwzI4NL7Gj8Sdu1TDPi7ymiX4lDVA1BUHPwhxRDqF7t4LnwHlZowYeqvyixq78IF58Rary0BjFWiCJ6cojIdv9QJqqI8DvG1LmRVCfESbqqRpxjajRHqCQYy7SfJPyMC50x21H2lORNKl9qEc0LdE7Dapq55kDHirDBGcJy72nBEE%2F6bALe0oOWF%2FYa8EE1eB8Uz13%2FQwglt4dhEA0f84l8LAlDQ%2Bop%2B1X%2Fx8093Q%2F07ClWXiNNGjnidrwE3IYKpM2axd%2Bc8LDCpgr2%2FBjqkATzudPCcIahn3aWHc0cRMhx6XRO%2BQJvhxNgGClB7GdJlLDynmum3IbPtwRwl6EEarTsSgh77RINf%2F64yCsyPqWcYxWkyn9nboUmeVduhOjRe5ATlJyrBDLGGBkxQqOqRARuKIRek8wHzDvlgroMfl%2F1zey2baRAsRlHdrJhb4Zx1LZnDaUvg7vWicVlVoA0jF04gsTyUnixlkKvkyWyM9OfsRYKd&X-Amz-Signature=2dde787f0700d10581ccf6341894b4a036c5bcd254429da03f3558e4368b7ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
