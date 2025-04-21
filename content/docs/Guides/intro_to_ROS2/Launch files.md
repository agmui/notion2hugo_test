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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLIVN3NM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGZuUATjQiYFhNwcQeJJZ5pFiAPh7kKBEREPp6PIaW0TAiA5P2SJuXB7IEtHzzRVA99tiZ74wSgt6GpGpm0n6U%2F2vCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYb%2F1xQvliPF5d95KKtwD0pqd0EkBj6itDN6bCrmvtj2bGNeez71Fzz2lKo4RB9Sw2vm0IbZHh%2Fy3camyxchCJSNueo32dj6OlSPxFY8diZT9OsYgqkAfMy9bwNZF5q6HtjWF7lVFTPKxyFK%2FoRuGvfc%2B4Ayb6kIHUEdqwSlU9hnqHo1NQmtw%2FfYhKdShgaH6w7BU2M6vSHb5NEVfICLmrk519NWgyEiMxQqLdcFfHJ8laa4bFT35E8VfBxyv43C3%2FTq1W%2BpglpTMhz0AdXxCvhn976yACgzxEv2cHEsuXYkLz%2FkwpBk%2FEcK9isdPJdMaiyQheOLhi3b3j2xbWcv7%2BxKLGRdiGJXKzlQQp3xHK1nvjjh9A%2BjXIyM9UQd1oF6SlM2oXZU5yZhb6cJF0l%2BlLz5jwRLgFAlCV8FM9ZzAwRzHBh%2FDg4wVQbQHKBC5WE2cKN62uYsY8n28awUhhHviHSDKZzhPr7SKCzWpPwMwQ7cdNi%2BNO6YZw0un%2BdYiTxk4Z%2B%2FOW7SJ5HCk3x03F5pJf%2FHxCr5r%2BvHDPkhGIu0hspJO3rzCCvUuEpMr30JbQySKchY%2FtMfdflvPmEoyJPQNJnHU0z15CXUTaMlxH59XFEkOGAeceqer6y%2FLgFgQfLdqM5Wd5o7fHLjf1Zcwh6KYwAY6pgGlpuM1MQBgyING3GcaiAyZ1ywtJOlGUmuGgR4OePKfVAkz5s7bbWm0%2FSbVONY5l814ypwqE7kkY5E68dNbNRIDcyCq2UWz41Ir5dpCEpdRRlNYMqolRgH2Z5a3IvcO8iG%2FOiY7vG9kOBk0E6SncHQdW3Dk5F59kTbhAhdYuNsbk9J9Ld0wlwW9MKiSWMJdbjXQTakdCsHvG8DyiGprVTeAJSWNy%2FIU&X-Amz-Signature=63ad3a647402ff72b1c71e88e9a7f581e8e0eac58e8053e77c9ba34703aeceb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLIVN3NM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGZuUATjQiYFhNwcQeJJZ5pFiAPh7kKBEREPp6PIaW0TAiA5P2SJuXB7IEtHzzRVA99tiZ74wSgt6GpGpm0n6U%2F2vCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYb%2F1xQvliPF5d95KKtwD0pqd0EkBj6itDN6bCrmvtj2bGNeez71Fzz2lKo4RB9Sw2vm0IbZHh%2Fy3camyxchCJSNueo32dj6OlSPxFY8diZT9OsYgqkAfMy9bwNZF5q6HtjWF7lVFTPKxyFK%2FoRuGvfc%2B4Ayb6kIHUEdqwSlU9hnqHo1NQmtw%2FfYhKdShgaH6w7BU2M6vSHb5NEVfICLmrk519NWgyEiMxQqLdcFfHJ8laa4bFT35E8VfBxyv43C3%2FTq1W%2BpglpTMhz0AdXxCvhn976yACgzxEv2cHEsuXYkLz%2FkwpBk%2FEcK9isdPJdMaiyQheOLhi3b3j2xbWcv7%2BxKLGRdiGJXKzlQQp3xHK1nvjjh9A%2BjXIyM9UQd1oF6SlM2oXZU5yZhb6cJF0l%2BlLz5jwRLgFAlCV8FM9ZzAwRzHBh%2FDg4wVQbQHKBC5WE2cKN62uYsY8n28awUhhHviHSDKZzhPr7SKCzWpPwMwQ7cdNi%2BNO6YZw0un%2BdYiTxk4Z%2B%2FOW7SJ5HCk3x03F5pJf%2FHxCr5r%2BvHDPkhGIu0hspJO3rzCCvUuEpMr30JbQySKchY%2FtMfdflvPmEoyJPQNJnHU0z15CXUTaMlxH59XFEkOGAeceqer6y%2FLgFgQfLdqM5Wd5o7fHLjf1Zcwh6KYwAY6pgGlpuM1MQBgyING3GcaiAyZ1ywtJOlGUmuGgR4OePKfVAkz5s7bbWm0%2FSbVONY5l814ypwqE7kkY5E68dNbNRIDcyCq2UWz41Ir5dpCEpdRRlNYMqolRgH2Z5a3IvcO8iG%2FOiY7vG9kOBk0E6SncHQdW3Dk5F59kTbhAhdYuNsbk9J9Ld0wlwW9MKiSWMJdbjXQTakdCsHvG8DyiGprVTeAJSWNy%2FIU&X-Amz-Signature=7f190522a6d2aef5e1104b6dc79b74a8ad6a22aeb44944a43b08ec7812e726b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLIVN3NM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGZuUATjQiYFhNwcQeJJZ5pFiAPh7kKBEREPp6PIaW0TAiA5P2SJuXB7IEtHzzRVA99tiZ74wSgt6GpGpm0n6U%2F2vCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYb%2F1xQvliPF5d95KKtwD0pqd0EkBj6itDN6bCrmvtj2bGNeez71Fzz2lKo4RB9Sw2vm0IbZHh%2Fy3camyxchCJSNueo32dj6OlSPxFY8diZT9OsYgqkAfMy9bwNZF5q6HtjWF7lVFTPKxyFK%2FoRuGvfc%2B4Ayb6kIHUEdqwSlU9hnqHo1NQmtw%2FfYhKdShgaH6w7BU2M6vSHb5NEVfICLmrk519NWgyEiMxQqLdcFfHJ8laa4bFT35E8VfBxyv43C3%2FTq1W%2BpglpTMhz0AdXxCvhn976yACgzxEv2cHEsuXYkLz%2FkwpBk%2FEcK9isdPJdMaiyQheOLhi3b3j2xbWcv7%2BxKLGRdiGJXKzlQQp3xHK1nvjjh9A%2BjXIyM9UQd1oF6SlM2oXZU5yZhb6cJF0l%2BlLz5jwRLgFAlCV8FM9ZzAwRzHBh%2FDg4wVQbQHKBC5WE2cKN62uYsY8n28awUhhHviHSDKZzhPr7SKCzWpPwMwQ7cdNi%2BNO6YZw0un%2BdYiTxk4Z%2B%2FOW7SJ5HCk3x03F5pJf%2FHxCr5r%2BvHDPkhGIu0hspJO3rzCCvUuEpMr30JbQySKchY%2FtMfdflvPmEoyJPQNJnHU0z15CXUTaMlxH59XFEkOGAeceqer6y%2FLgFgQfLdqM5Wd5o7fHLjf1Zcwh6KYwAY6pgGlpuM1MQBgyING3GcaiAyZ1ywtJOlGUmuGgR4OePKfVAkz5s7bbWm0%2FSbVONY5l814ypwqE7kkY5E68dNbNRIDcyCq2UWz41Ir5dpCEpdRRlNYMqolRgH2Z5a3IvcO8iG%2FOiY7vG9kOBk0E6SncHQdW3Dk5F59kTbhAhdYuNsbk9J9Ld0wlwW9MKiSWMJdbjXQTakdCsHvG8DyiGprVTeAJSWNy%2FIU&X-Amz-Signature=6c33f867f5ea80fa7169aba1ad965b3a850d197afd1ae2b774c4bfe32c18fdd2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
