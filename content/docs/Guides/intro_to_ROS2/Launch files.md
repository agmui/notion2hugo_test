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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWLBBLW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjFxZASQfSuVw%2FZwpHBFBkIXks0951awU2KtEvOAh7qAIgEkhaeB14muZq1XxnyEzDXuh%2BPwb4yyNcKD58jswUf0UqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfzIk7FjUpfyJaNuircA2QtAsqgqTFiCENvfaxkgkD8Nte%2Bpq1toVbEoRG6X2p9kw0O86zSXIab6TAuSwhDdSqxdHc%2FhZZ6vfyo6rGFQmGyLbqxrKuxaognKNbOawfqYa10aK2uBmzlQYghSVKqRdOrien0httNWMa%2FmdNTFL3Ngn7c2oxZTaLONs4yAHNrPp47ITobIkbLs3eo2PXDE8O20paWFB0yWAwFQdc1C1GEjr%2BXjBYOuV52wc%2Fi4mlAVT0HXBnR68cgwHuo65tDSTbw3SaB7r0yFjjH06Sgj80hnEgruQzzP7QrRr%2B8HU3JLVt3HH5A6u%2FmvnZOwginljFdep60yH780M%2Fz4WA2tspJGedaXP%2F6gJBMzqPL92A9hj8zd%2BTQ4Skryx4%2BiTtXjGuDeadD42rhWYPL8Eig9gwcXG2X4qtRK4R1eS4W6Xs9xGbNC%2BRiuH9yPMxLXzNegp3EyH0rB%2BLoUgAD48inrZp0dwacsXZejr9ydbXy199YZGuzeeZb0HC3yjFqtc6StzxAhqn6Z9q%2FRKNihSgQNiWyakPKMKhkiGhvyfwmHsmyvztpp7NtICTQDp7S4YoM2Inn30IR0yy2TzMO5o1%2Fy4FOXFRSzTELLYNgJvyG94Edkvqmw5ZtgGL9K2uBMLjGsMEGOqUBNODiZxzDac4jECgb0yh0gL%2BwTj9z%2Fvs1i%2FzFtYb1GfUg2VaMY8PX4T1G3g3nzx4W%2FLQPJInndYisliGJjWzuTSZEGGkl3XuCDTpU4xWHOLhP8Awrt76PCGP1udyJYLoacq3dw6kSqOdtYRm5qG7A1Hw64Go%2FV4AwFRzYKC9fmiL9bt8gAMLUZuXW2jlwvOZw%2BvU1xKdUS20g0N64YoPHkEms29L4&X-Amz-Signature=caaca8440ce5ec28adabbae3ce94c40c284159ace70971f6f859441d4ad306cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWLBBLW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjFxZASQfSuVw%2FZwpHBFBkIXks0951awU2KtEvOAh7qAIgEkhaeB14muZq1XxnyEzDXuh%2BPwb4yyNcKD58jswUf0UqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfzIk7FjUpfyJaNuircA2QtAsqgqTFiCENvfaxkgkD8Nte%2Bpq1toVbEoRG6X2p9kw0O86zSXIab6TAuSwhDdSqxdHc%2FhZZ6vfyo6rGFQmGyLbqxrKuxaognKNbOawfqYa10aK2uBmzlQYghSVKqRdOrien0httNWMa%2FmdNTFL3Ngn7c2oxZTaLONs4yAHNrPp47ITobIkbLs3eo2PXDE8O20paWFB0yWAwFQdc1C1GEjr%2BXjBYOuV52wc%2Fi4mlAVT0HXBnR68cgwHuo65tDSTbw3SaB7r0yFjjH06Sgj80hnEgruQzzP7QrRr%2B8HU3JLVt3HH5A6u%2FmvnZOwginljFdep60yH780M%2Fz4WA2tspJGedaXP%2F6gJBMzqPL92A9hj8zd%2BTQ4Skryx4%2BiTtXjGuDeadD42rhWYPL8Eig9gwcXG2X4qtRK4R1eS4W6Xs9xGbNC%2BRiuH9yPMxLXzNegp3EyH0rB%2BLoUgAD48inrZp0dwacsXZejr9ydbXy199YZGuzeeZb0HC3yjFqtc6StzxAhqn6Z9q%2FRKNihSgQNiWyakPKMKhkiGhvyfwmHsmyvztpp7NtICTQDp7S4YoM2Inn30IR0yy2TzMO5o1%2Fy4FOXFRSzTELLYNgJvyG94Edkvqmw5ZtgGL9K2uBMLjGsMEGOqUBNODiZxzDac4jECgb0yh0gL%2BwTj9z%2Fvs1i%2FzFtYb1GfUg2VaMY8PX4T1G3g3nzx4W%2FLQPJInndYisliGJjWzuTSZEGGkl3XuCDTpU4xWHOLhP8Awrt76PCGP1udyJYLoacq3dw6kSqOdtYRm5qG7A1Hw64Go%2FV4AwFRzYKC9fmiL9bt8gAMLUZuXW2jlwvOZw%2BvU1xKdUS20g0N64YoPHkEms29L4&X-Amz-Signature=39c7b609f3d533b3f8af4ac2c615d3c5f9c2de40d1f18acab09643d743f1d22e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWLBBLW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjFxZASQfSuVw%2FZwpHBFBkIXks0951awU2KtEvOAh7qAIgEkhaeB14muZq1XxnyEzDXuh%2BPwb4yyNcKD58jswUf0UqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfzIk7FjUpfyJaNuircA2QtAsqgqTFiCENvfaxkgkD8Nte%2Bpq1toVbEoRG6X2p9kw0O86zSXIab6TAuSwhDdSqxdHc%2FhZZ6vfyo6rGFQmGyLbqxrKuxaognKNbOawfqYa10aK2uBmzlQYghSVKqRdOrien0httNWMa%2FmdNTFL3Ngn7c2oxZTaLONs4yAHNrPp47ITobIkbLs3eo2PXDE8O20paWFB0yWAwFQdc1C1GEjr%2BXjBYOuV52wc%2Fi4mlAVT0HXBnR68cgwHuo65tDSTbw3SaB7r0yFjjH06Sgj80hnEgruQzzP7QrRr%2B8HU3JLVt3HH5A6u%2FmvnZOwginljFdep60yH780M%2Fz4WA2tspJGedaXP%2F6gJBMzqPL92A9hj8zd%2BTQ4Skryx4%2BiTtXjGuDeadD42rhWYPL8Eig9gwcXG2X4qtRK4R1eS4W6Xs9xGbNC%2BRiuH9yPMxLXzNegp3EyH0rB%2BLoUgAD48inrZp0dwacsXZejr9ydbXy199YZGuzeeZb0HC3yjFqtc6StzxAhqn6Z9q%2FRKNihSgQNiWyakPKMKhkiGhvyfwmHsmyvztpp7NtICTQDp7S4YoM2Inn30IR0yy2TzMO5o1%2Fy4FOXFRSzTELLYNgJvyG94Edkvqmw5ZtgGL9K2uBMLjGsMEGOqUBNODiZxzDac4jECgb0yh0gL%2BwTj9z%2Fvs1i%2FzFtYb1GfUg2VaMY8PX4T1G3g3nzx4W%2FLQPJInndYisliGJjWzuTSZEGGkl3XuCDTpU4xWHOLhP8Awrt76PCGP1udyJYLoacq3dw6kSqOdtYRm5qG7A1Hw64Go%2FV4AwFRzYKC9fmiL9bt8gAMLUZuXW2jlwvOZw%2BvU1xKdUS20g0N64YoPHkEms29L4&X-Amz-Signature=60eb01879f19eb73162c8403454f5fe84c0edd31a7fe0335dd2e9b6dc635fa15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
