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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJLKDYE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI1diEIZlDrZ7EDGYRxV4mdnWC0CETEh77s%2F3Mf%2BnLuAiEAr4nO9TEsEkEs1Rp2W3sZXV%2FuRzfkdKfjB8iS1cyPnN0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOOu6DQvHij4mUqh9CrcA042ns%2BjckI707iko4wSZrowJrRA%2F4hEDWidcKdAyULTvaYEvdIKGpYRR6dQ9KeYpi8sTmpJbskaxn6TSpsE8Z9xkBZSvsbBYL85Vp7RVT5op3kxU%2FLGe5PlrVsuhz72eKKenkNJUJ7YHwLQSzr5xjs3AJGpxevzqXLt2VWgxiTa60pUSEm5TBaJXXhYH86T6%2BSznxj4ubaOmVRlBZKEEbno%2FoAEmPW8F%2BZZ5E24tI50TeYwz5HlmWjo%2By2gyTAqriAM1Cn6INGognhUQd01YN%2F5d4mPUKgvmdgYZZ9Oz4XYSZzHm3VHY2UDS8XifS%2BdWNThv6EtcRvuF7zHcmUtwQGGUOIm6ThZGpFouMLZpsz9%2BJLIas7e3jGxWnBqJAjMYK%2FbiQzOS3OZOqWT7T2WhKhkikRMn9gKRFM8DzIRsR5tHBvW0Uo6%2F9eIp1oylNPoG3ArA3hIlRUf489h1FA2AU8MUQaw18FlnN3m9ynBsARmHym8o5cEfvEOAJqbn9qcY7h06BwfZdOfztQ%2F71TEJb%2BfltA5D9qoXAwnt%2Fd3pcF3zAfq9WNGCm4n0cbnMSXf1PDAv%2BNnCGORZCS3GvrBgiZxhQIqVghe0AHGdEiog7z5kQ9U2zpHmLnsOkNrMPbs374GOqUBKk4zBIvtJNXPk8wZeO8EEtdrosuiNt0rqmheFx4qwpzKk9SWhsUmrIxWnmW%2Fg9ydzbkfpheZZ1G0Tb%2ByEDbIv0PQnYafgNT1u1BRVDEZgF4gOT4aGpEjj4eIfohNBpbLqQBT5OdbYBPydgq2Lc8PyGq0dkIFrWezlrZeK6domzq5BmpVKiv29I4HK97zENSzjLIgg6iBXrHkJJF%2BsinMB4ycpC1j&X-Amz-Signature=81c11c17e99dc132089f22d1f02591b01fcc3295cf4ccd296bba23d091b11216&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJLKDYE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI1diEIZlDrZ7EDGYRxV4mdnWC0CETEh77s%2F3Mf%2BnLuAiEAr4nO9TEsEkEs1Rp2W3sZXV%2FuRzfkdKfjB8iS1cyPnN0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOOu6DQvHij4mUqh9CrcA042ns%2BjckI707iko4wSZrowJrRA%2F4hEDWidcKdAyULTvaYEvdIKGpYRR6dQ9KeYpi8sTmpJbskaxn6TSpsE8Z9xkBZSvsbBYL85Vp7RVT5op3kxU%2FLGe5PlrVsuhz72eKKenkNJUJ7YHwLQSzr5xjs3AJGpxevzqXLt2VWgxiTa60pUSEm5TBaJXXhYH86T6%2BSznxj4ubaOmVRlBZKEEbno%2FoAEmPW8F%2BZZ5E24tI50TeYwz5HlmWjo%2By2gyTAqriAM1Cn6INGognhUQd01YN%2F5d4mPUKgvmdgYZZ9Oz4XYSZzHm3VHY2UDS8XifS%2BdWNThv6EtcRvuF7zHcmUtwQGGUOIm6ThZGpFouMLZpsz9%2BJLIas7e3jGxWnBqJAjMYK%2FbiQzOS3OZOqWT7T2WhKhkikRMn9gKRFM8DzIRsR5tHBvW0Uo6%2F9eIp1oylNPoG3ArA3hIlRUf489h1FA2AU8MUQaw18FlnN3m9ynBsARmHym8o5cEfvEOAJqbn9qcY7h06BwfZdOfztQ%2F71TEJb%2BfltA5D9qoXAwnt%2Fd3pcF3zAfq9WNGCm4n0cbnMSXf1PDAv%2BNnCGORZCS3GvrBgiZxhQIqVghe0AHGdEiog7z5kQ9U2zpHmLnsOkNrMPbs374GOqUBKk4zBIvtJNXPk8wZeO8EEtdrosuiNt0rqmheFx4qwpzKk9SWhsUmrIxWnmW%2Fg9ydzbkfpheZZ1G0Tb%2ByEDbIv0PQnYafgNT1u1BRVDEZgF4gOT4aGpEjj4eIfohNBpbLqQBT5OdbYBPydgq2Lc8PyGq0dkIFrWezlrZeK6domzq5BmpVKiv29I4HK97zENSzjLIgg6iBXrHkJJF%2BsinMB4ycpC1j&X-Amz-Signature=3a3806d7b146cb14163103ddc748371b061bebf79d9c53f5e66cd473705ccb91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJLKDYE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI1diEIZlDrZ7EDGYRxV4mdnWC0CETEh77s%2F3Mf%2BnLuAiEAr4nO9TEsEkEs1Rp2W3sZXV%2FuRzfkdKfjB8iS1cyPnN0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOOu6DQvHij4mUqh9CrcA042ns%2BjckI707iko4wSZrowJrRA%2F4hEDWidcKdAyULTvaYEvdIKGpYRR6dQ9KeYpi8sTmpJbskaxn6TSpsE8Z9xkBZSvsbBYL85Vp7RVT5op3kxU%2FLGe5PlrVsuhz72eKKenkNJUJ7YHwLQSzr5xjs3AJGpxevzqXLt2VWgxiTa60pUSEm5TBaJXXhYH86T6%2BSznxj4ubaOmVRlBZKEEbno%2FoAEmPW8F%2BZZ5E24tI50TeYwz5HlmWjo%2By2gyTAqriAM1Cn6INGognhUQd01YN%2F5d4mPUKgvmdgYZZ9Oz4XYSZzHm3VHY2UDS8XifS%2BdWNThv6EtcRvuF7zHcmUtwQGGUOIm6ThZGpFouMLZpsz9%2BJLIas7e3jGxWnBqJAjMYK%2FbiQzOS3OZOqWT7T2WhKhkikRMn9gKRFM8DzIRsR5tHBvW0Uo6%2F9eIp1oylNPoG3ArA3hIlRUf489h1FA2AU8MUQaw18FlnN3m9ynBsARmHym8o5cEfvEOAJqbn9qcY7h06BwfZdOfztQ%2F71TEJb%2BfltA5D9qoXAwnt%2Fd3pcF3zAfq9WNGCm4n0cbnMSXf1PDAv%2BNnCGORZCS3GvrBgiZxhQIqVghe0AHGdEiog7z5kQ9U2zpHmLnsOkNrMPbs374GOqUBKk4zBIvtJNXPk8wZeO8EEtdrosuiNt0rqmheFx4qwpzKk9SWhsUmrIxWnmW%2Fg9ydzbkfpheZZ1G0Tb%2ByEDbIv0PQnYafgNT1u1BRVDEZgF4gOT4aGpEjj4eIfohNBpbLqQBT5OdbYBPydgq2Lc8PyGq0dkIFrWezlrZeK6domzq5BmpVKiv29I4HK97zENSzjLIgg6iBXrHkJJF%2BsinMB4ycpC1j&X-Amz-Signature=58336681cbd2988740adaa32bc46e18a87b5b25d98d21fe9df9540db36b313a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
