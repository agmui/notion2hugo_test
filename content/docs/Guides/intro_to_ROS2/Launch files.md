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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZFZBLY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGKsCQ7gM3G2mtLor1KzOr6h3Y%2Bb7zEW96NLwNiLQB8gIgLvorS1%2BrIahiENaI0iEfSZ0hI5miELk42ZKfKAeHrXkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiz4UiPaT%2BiUvdeKSrcA5EVudLgCx4ww%2BgWtJF8XCMLk3YBYfMKV8bwN9QaTIusY2coaJDubfgR9vwEzYNPI%2BUbDALWVHOgIdZd4wTDEi5lV7k5I7bT8z0yzcLXkeWPwnhDW5GTEkmMTlIQtALJkHYRascJliNEu6fMl%2FJWSxZieOdKg%2FEQPBCuyyv7MzvgPeybOrDILkc34gYZq43AuvKV1IETUs87JW9IITITSdNzLRDVuk2ALb5JLOTkl0OtOefUnkRIgLgnpkq%2FVlXETA%2FJO1cDjGiJNVI1K3vvUKl5HZM5iuWbdW6lwrcZvyl3irmpkf%2BnWZxrkvPjdH5FIdmZcTQyNxvdnlYnaVCOXWRghlJZ%2FiLiCsFdEBkI7Hvu5DKQbLIViX6K1u8NEYJ7OaeX2SPJDcrWh9%2Fy9G6lUGIcIGBENBy2c0ovh9HQeDuDqMo8tEWl52oJ5cjJf9QPRZ6C2O4vswEFez5JBbeDgi3YTChCDP7gvgc%2FHmcSaoqkKZ%2BLuuaC9hP0s0eeXwFR2oPymtzAxdkE9vZckryxwll0tzyxEx%2FoxmyWjfzNkDgYzNjX0tGPNAq2iBxdrDCWtCdupNiOApx0ciBvTpdVTzZuY3A2SowIHUuvilJBFR%2FSsLwnEeBAKBxfPIyCMPXEyr4GOqUBNpyeo1o5CDIxjSch2Pcy%2F3W%2B1HfrpgCL2x6JU74e4XFbczRQly0ormexAJyJvt2ywcSTQdJaTx6B%2Fw6gmPqXI%2FqxvumqyYyukQGdQcEfPpTbEKnIf3kvrTaKtrjEg7jrmMknzOmAXkJYh1KvI3shPmj3YGI%2Fm2GQGczJbS%2Bavu0lJ5LUuWofvnnEN2Dx75aXvkrghXROJNaPyYuhjjLBYmgpanPn&X-Amz-Signature=82ea01fceefc64e48c1be8c0abd20e93d7ef6fd4b4f79d5578c641f7debc98d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZFZBLY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGKsCQ7gM3G2mtLor1KzOr6h3Y%2Bb7zEW96NLwNiLQB8gIgLvorS1%2BrIahiENaI0iEfSZ0hI5miELk42ZKfKAeHrXkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiz4UiPaT%2BiUvdeKSrcA5EVudLgCx4ww%2BgWtJF8XCMLk3YBYfMKV8bwN9QaTIusY2coaJDubfgR9vwEzYNPI%2BUbDALWVHOgIdZd4wTDEi5lV7k5I7bT8z0yzcLXkeWPwnhDW5GTEkmMTlIQtALJkHYRascJliNEu6fMl%2FJWSxZieOdKg%2FEQPBCuyyv7MzvgPeybOrDILkc34gYZq43AuvKV1IETUs87JW9IITITSdNzLRDVuk2ALb5JLOTkl0OtOefUnkRIgLgnpkq%2FVlXETA%2FJO1cDjGiJNVI1K3vvUKl5HZM5iuWbdW6lwrcZvyl3irmpkf%2BnWZxrkvPjdH5FIdmZcTQyNxvdnlYnaVCOXWRghlJZ%2FiLiCsFdEBkI7Hvu5DKQbLIViX6K1u8NEYJ7OaeX2SPJDcrWh9%2Fy9G6lUGIcIGBENBy2c0ovh9HQeDuDqMo8tEWl52oJ5cjJf9QPRZ6C2O4vswEFez5JBbeDgi3YTChCDP7gvgc%2FHmcSaoqkKZ%2BLuuaC9hP0s0eeXwFR2oPymtzAxdkE9vZckryxwll0tzyxEx%2FoxmyWjfzNkDgYzNjX0tGPNAq2iBxdrDCWtCdupNiOApx0ciBvTpdVTzZuY3A2SowIHUuvilJBFR%2FSsLwnEeBAKBxfPIyCMPXEyr4GOqUBNpyeo1o5CDIxjSch2Pcy%2F3W%2B1HfrpgCL2x6JU74e4XFbczRQly0ormexAJyJvt2ywcSTQdJaTx6B%2Fw6gmPqXI%2FqxvumqyYyukQGdQcEfPpTbEKnIf3kvrTaKtrjEg7jrmMknzOmAXkJYh1KvI3shPmj3YGI%2Fm2GQGczJbS%2Bavu0lJ5LUuWofvnnEN2Dx75aXvkrghXROJNaPyYuhjjLBYmgpanPn&X-Amz-Signature=764b5ad18f7b33a57262fa9617a37ffc5b3412fd0c887ba6142c0d4c76f3b16f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZFZBLY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGKsCQ7gM3G2mtLor1KzOr6h3Y%2Bb7zEW96NLwNiLQB8gIgLvorS1%2BrIahiENaI0iEfSZ0hI5miELk42ZKfKAeHrXkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiz4UiPaT%2BiUvdeKSrcA5EVudLgCx4ww%2BgWtJF8XCMLk3YBYfMKV8bwN9QaTIusY2coaJDubfgR9vwEzYNPI%2BUbDALWVHOgIdZd4wTDEi5lV7k5I7bT8z0yzcLXkeWPwnhDW5GTEkmMTlIQtALJkHYRascJliNEu6fMl%2FJWSxZieOdKg%2FEQPBCuyyv7MzvgPeybOrDILkc34gYZq43AuvKV1IETUs87JW9IITITSdNzLRDVuk2ALb5JLOTkl0OtOefUnkRIgLgnpkq%2FVlXETA%2FJO1cDjGiJNVI1K3vvUKl5HZM5iuWbdW6lwrcZvyl3irmpkf%2BnWZxrkvPjdH5FIdmZcTQyNxvdnlYnaVCOXWRghlJZ%2FiLiCsFdEBkI7Hvu5DKQbLIViX6K1u8NEYJ7OaeX2SPJDcrWh9%2Fy9G6lUGIcIGBENBy2c0ovh9HQeDuDqMo8tEWl52oJ5cjJf9QPRZ6C2O4vswEFez5JBbeDgi3YTChCDP7gvgc%2FHmcSaoqkKZ%2BLuuaC9hP0s0eeXwFR2oPymtzAxdkE9vZckryxwll0tzyxEx%2FoxmyWjfzNkDgYzNjX0tGPNAq2iBxdrDCWtCdupNiOApx0ciBvTpdVTzZuY3A2SowIHUuvilJBFR%2FSsLwnEeBAKBxfPIyCMPXEyr4GOqUBNpyeo1o5CDIxjSch2Pcy%2F3W%2B1HfrpgCL2x6JU74e4XFbczRQly0ormexAJyJvt2ywcSTQdJaTx6B%2Fw6gmPqXI%2FqxvumqyYyukQGdQcEfPpTbEKnIf3kvrTaKtrjEg7jrmMknzOmAXkJYh1KvI3shPmj3YGI%2Fm2GQGczJbS%2Bavu0lJ5LUuWofvnnEN2Dx75aXvkrghXROJNaPyYuhjjLBYmgpanPn&X-Amz-Signature=727d1f8d6a1da6054951f84ad4a9a2f92cdccb0c316aaf6fc523d3a80f191f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
