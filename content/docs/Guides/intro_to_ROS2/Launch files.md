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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYQMAQU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXOic%2Bu6fGVOnoj%2BMogOvVohHx178ujaU61ha90WzzbAIhAK6Oy4cuYXa4WLkUrSqG7Gb2vFhOJgNVbt4MYFkE9t9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxHeSqF2nabR56NZigq3AMhmZS2JUna7xEn7nDigwpGVJP6QnCX7v7qxP0gXIUGFFaNeS5hN7j57pBW6tsz0mFobx7M8xu%2BX06gplPuUaqL4ZO2ars1Kla0Q4F2ils%2FIvqFyPpd%2BmRTuvyb6n%2BwXLNRfghF0irqUuFWK3sZT8pInHfRvWhUVbnkVM2HK%2BHgvV9qgpJnBDe2L%2BAhH%2B7fGxFM237eBACPlf3kWjQ4cvhDBxS7FvokJorZUSEXzApoCTXymvYSkvDhyomIP7tN21b42QTg%2FdPGNTvxBirmvhtthKuQb4If6TA3iGHRTWiCXi3UwqXuw6CJclbQt1XD8X%2FXqSoYj0YbERVLlYeaYewaTIatEkKJM9rvRQah0XyJaHywZGOYe%2BIt2WHb4Zna6tNvtGWXXFw9Aya7GlhyEKLuSpwJMUvE8RgerZ79NzdTxIsTtiTl74yy75nqMesCrefVUeghIRPh7UUf%2BION6VA6SxjsUb8TkxNOv91sgiGqPimZZ4bBuYdUKVZulk64w%2BPlX6vi%2B9VpMmKR9%2FWKk40el%2BXTcLlu%2FdESRmj968Rr52qQIKfwR2Lxr1%2BgglvCP7FtvOlk10izWfS4jOBXET%2BRks1ulMt0HAzW2VHjLOo5ZKsYbEUSWtkeHP42szDXv6rABjqkAUuaQE5z2xosHgtEpqdpxCOeYUEmj0GWoyn6JciOqM%2Bx956Z33PSHogtaETFDas4PRYDz6KY%2FN%2Fu%2FEuG6xFrUUcEyi8gGFK937%2FwtbuOv8VzP4v7t4j7YD%2FZXc0T6HdcJ8FU2YSyAXeLFz1kXc2Lzj8OjaAbzdK%2FNwmmd%2B0JZtsqcOQ1iCgc%2F2B%2F7sXPr%2FmYA1VF0wj93c0FpxjeLNaCh2Y90u%2BQ&X-Amz-Signature=d329336c787952bfb3c611ae33d2d29a2081fdfbf7566f2f85ff460e09f8b110&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYQMAQU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXOic%2Bu6fGVOnoj%2BMogOvVohHx178ujaU61ha90WzzbAIhAK6Oy4cuYXa4WLkUrSqG7Gb2vFhOJgNVbt4MYFkE9t9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxHeSqF2nabR56NZigq3AMhmZS2JUna7xEn7nDigwpGVJP6QnCX7v7qxP0gXIUGFFaNeS5hN7j57pBW6tsz0mFobx7M8xu%2BX06gplPuUaqL4ZO2ars1Kla0Q4F2ils%2FIvqFyPpd%2BmRTuvyb6n%2BwXLNRfghF0irqUuFWK3sZT8pInHfRvWhUVbnkVM2HK%2BHgvV9qgpJnBDe2L%2BAhH%2B7fGxFM237eBACPlf3kWjQ4cvhDBxS7FvokJorZUSEXzApoCTXymvYSkvDhyomIP7tN21b42QTg%2FdPGNTvxBirmvhtthKuQb4If6TA3iGHRTWiCXi3UwqXuw6CJclbQt1XD8X%2FXqSoYj0YbERVLlYeaYewaTIatEkKJM9rvRQah0XyJaHywZGOYe%2BIt2WHb4Zna6tNvtGWXXFw9Aya7GlhyEKLuSpwJMUvE8RgerZ79NzdTxIsTtiTl74yy75nqMesCrefVUeghIRPh7UUf%2BION6VA6SxjsUb8TkxNOv91sgiGqPimZZ4bBuYdUKVZulk64w%2BPlX6vi%2B9VpMmKR9%2FWKk40el%2BXTcLlu%2FdESRmj968Rr52qQIKfwR2Lxr1%2BgglvCP7FtvOlk10izWfS4jOBXET%2BRks1ulMt0HAzW2VHjLOo5ZKsYbEUSWtkeHP42szDXv6rABjqkAUuaQE5z2xosHgtEpqdpxCOeYUEmj0GWoyn6JciOqM%2Bx956Z33PSHogtaETFDas4PRYDz6KY%2FN%2Fu%2FEuG6xFrUUcEyi8gGFK937%2FwtbuOv8VzP4v7t4j7YD%2FZXc0T6HdcJ8FU2YSyAXeLFz1kXc2Lzj8OjaAbzdK%2FNwmmd%2B0JZtsqcOQ1iCgc%2F2B%2F7sXPr%2FmYA1VF0wj93c0FpxjeLNaCh2Y90u%2BQ&X-Amz-Signature=413409ecf26e556b8ead1869414aea7d02a95e5462d3b6047a4f420475848616&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYQMAQU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXOic%2Bu6fGVOnoj%2BMogOvVohHx178ujaU61ha90WzzbAIhAK6Oy4cuYXa4WLkUrSqG7Gb2vFhOJgNVbt4MYFkE9t9LKv8DCB4QABoMNjM3NDIzMTgzODA1IgxHeSqF2nabR56NZigq3AMhmZS2JUna7xEn7nDigwpGVJP6QnCX7v7qxP0gXIUGFFaNeS5hN7j57pBW6tsz0mFobx7M8xu%2BX06gplPuUaqL4ZO2ars1Kla0Q4F2ils%2FIvqFyPpd%2BmRTuvyb6n%2BwXLNRfghF0irqUuFWK3sZT8pInHfRvWhUVbnkVM2HK%2BHgvV9qgpJnBDe2L%2BAhH%2B7fGxFM237eBACPlf3kWjQ4cvhDBxS7FvokJorZUSEXzApoCTXymvYSkvDhyomIP7tN21b42QTg%2FdPGNTvxBirmvhtthKuQb4If6TA3iGHRTWiCXi3UwqXuw6CJclbQt1XD8X%2FXqSoYj0YbERVLlYeaYewaTIatEkKJM9rvRQah0XyJaHywZGOYe%2BIt2WHb4Zna6tNvtGWXXFw9Aya7GlhyEKLuSpwJMUvE8RgerZ79NzdTxIsTtiTl74yy75nqMesCrefVUeghIRPh7UUf%2BION6VA6SxjsUb8TkxNOv91sgiGqPimZZ4bBuYdUKVZulk64w%2BPlX6vi%2B9VpMmKR9%2FWKk40el%2BXTcLlu%2FdESRmj968Rr52qQIKfwR2Lxr1%2BgglvCP7FtvOlk10izWfS4jOBXET%2BRks1ulMt0HAzW2VHjLOo5ZKsYbEUSWtkeHP42szDXv6rABjqkAUuaQE5z2xosHgtEpqdpxCOeYUEmj0GWoyn6JciOqM%2Bx956Z33PSHogtaETFDas4PRYDz6KY%2FN%2Fu%2FEuG6xFrUUcEyi8gGFK937%2FwtbuOv8VzP4v7t4j7YD%2FZXc0T6HdcJ8FU2YSyAXeLFz1kXc2Lzj8OjaAbzdK%2FNwmmd%2B0JZtsqcOQ1iCgc%2F2B%2F7sXPr%2FmYA1VF0wj93c0FpxjeLNaCh2Y90u%2BQ&X-Amz-Signature=a0ef05076092652f687de716250ed1e03e5c529fe6632c151042e0395baeeafa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
