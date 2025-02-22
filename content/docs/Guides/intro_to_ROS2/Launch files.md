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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYKA4KT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMAetWEj%2F1S9QZHanbQKgvNTznWjsmlUjSwIYW9IIuEAiAG4MaR0OvmVcyb%2F4wuDsEHOndu93PbX9F1ar9sGVPMJSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGuFgic9iY0LZpxbKtwDCwxmvvsfcCa2jTgC1PP1eiXATufLXL9IBVeZFmUCc2vIkuRWOZimagTxLQJWMVTK2Mb9HPwrW%2FUrIWi%2FbM4Gliy%2F0%2FYE0U3MU7TQoRPFkHIyPsgWvKchgTZRn9j%2Bg7rZZmtVk%2BXFt44ZX42%2FlhEsoQod7ekQXKm3qHae%2FMxuv1VyG1uc6zLkDPBj02iMuu49ENtMOdE5d%2FvXabAbyWB3DpPr%2BPWZT0pz6s4Zn3NytILHDIt%2F4fxp6V1JBNvxpQfLDE%2FTMiFRb83v1bHZVS%2B2rtVwAE3aedBaxnwrDqd1EssjqiLg5yzddaoBOtsqCSuKNQJPZ9GFOqcXw3cIfwM1tLi8qIIq8iod3cYmjf42r61YoitGVAofPZ7%2FF0%2F0TUFJuncjMkuyA382g5MdBdq5LVvTiy6b8GjfEc8934ko625O0bTRq9gpj6ZcEnM%2FVq%2FgT%2BqL1Vw5fgPwYH3MFaf3W89aomO1y650i2SyWfHKFcwyDdkyFtsP48PRbQPoTyWev%2BBlduk3%2FqGzfAJmnD44j0OOGa%2FFGRulwSgmTMT6hrkqeeiCiYNZyjGItRZliUeJjfkIUjRAZt0Boj%2Fn75LMOi3YnRF9LzCuOWvQK6GuVfK4LMnRcu0lIYMZ4hMwps%2FkvQY6pgHgL826l8aOwrqchPcK0OA75XfFfwKqbWWUPLAPzgPVP7L21gm6Jm886qQMT462f7JadIyJySzT31QxpPka3k%2BLT7bTEpJaoYODeJTtv%2BrbZZlrGnZziey%2FJe4%2Bmx9F1hTlDTweWliCJoBrflISwWBF2hieSHDqFmcX4MH9FlnleDa0%2B68DBwoqC0REo7%2BcwfmTgXAnqXO%2BJbPmd2%2FZ0lQ4weJDSEop&X-Amz-Signature=006528f2548c560a2388a259884e2df337d16e6405423adff10271a5cccc47c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYKA4KT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMAetWEj%2F1S9QZHanbQKgvNTznWjsmlUjSwIYW9IIuEAiAG4MaR0OvmVcyb%2F4wuDsEHOndu93PbX9F1ar9sGVPMJSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGuFgic9iY0LZpxbKtwDCwxmvvsfcCa2jTgC1PP1eiXATufLXL9IBVeZFmUCc2vIkuRWOZimagTxLQJWMVTK2Mb9HPwrW%2FUrIWi%2FbM4Gliy%2F0%2FYE0U3MU7TQoRPFkHIyPsgWvKchgTZRn9j%2Bg7rZZmtVk%2BXFt44ZX42%2FlhEsoQod7ekQXKm3qHae%2FMxuv1VyG1uc6zLkDPBj02iMuu49ENtMOdE5d%2FvXabAbyWB3DpPr%2BPWZT0pz6s4Zn3NytILHDIt%2F4fxp6V1JBNvxpQfLDE%2FTMiFRb83v1bHZVS%2B2rtVwAE3aedBaxnwrDqd1EssjqiLg5yzddaoBOtsqCSuKNQJPZ9GFOqcXw3cIfwM1tLi8qIIq8iod3cYmjf42r61YoitGVAofPZ7%2FF0%2F0TUFJuncjMkuyA382g5MdBdq5LVvTiy6b8GjfEc8934ko625O0bTRq9gpj6ZcEnM%2FVq%2FgT%2BqL1Vw5fgPwYH3MFaf3W89aomO1y650i2SyWfHKFcwyDdkyFtsP48PRbQPoTyWev%2BBlduk3%2FqGzfAJmnD44j0OOGa%2FFGRulwSgmTMT6hrkqeeiCiYNZyjGItRZliUeJjfkIUjRAZt0Boj%2Fn75LMOi3YnRF9LzCuOWvQK6GuVfK4LMnRcu0lIYMZ4hMwps%2FkvQY6pgHgL826l8aOwrqchPcK0OA75XfFfwKqbWWUPLAPzgPVP7L21gm6Jm886qQMT462f7JadIyJySzT31QxpPka3k%2BLT7bTEpJaoYODeJTtv%2BrbZZlrGnZziey%2FJe4%2Bmx9F1hTlDTweWliCJoBrflISwWBF2hieSHDqFmcX4MH9FlnleDa0%2B68DBwoqC0REo7%2BcwfmTgXAnqXO%2BJbPmd2%2FZ0lQ4weJDSEop&X-Amz-Signature=32c55635e063fa4b62e659ee7f925f4d59786385a4cd797706adb095b037959c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYKA4KT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMAetWEj%2F1S9QZHanbQKgvNTznWjsmlUjSwIYW9IIuEAiAG4MaR0OvmVcyb%2F4wuDsEHOndu93PbX9F1ar9sGVPMJSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGuFgic9iY0LZpxbKtwDCwxmvvsfcCa2jTgC1PP1eiXATufLXL9IBVeZFmUCc2vIkuRWOZimagTxLQJWMVTK2Mb9HPwrW%2FUrIWi%2FbM4Gliy%2F0%2FYE0U3MU7TQoRPFkHIyPsgWvKchgTZRn9j%2Bg7rZZmtVk%2BXFt44ZX42%2FlhEsoQod7ekQXKm3qHae%2FMxuv1VyG1uc6zLkDPBj02iMuu49ENtMOdE5d%2FvXabAbyWB3DpPr%2BPWZT0pz6s4Zn3NytILHDIt%2F4fxp6V1JBNvxpQfLDE%2FTMiFRb83v1bHZVS%2B2rtVwAE3aedBaxnwrDqd1EssjqiLg5yzddaoBOtsqCSuKNQJPZ9GFOqcXw3cIfwM1tLi8qIIq8iod3cYmjf42r61YoitGVAofPZ7%2FF0%2F0TUFJuncjMkuyA382g5MdBdq5LVvTiy6b8GjfEc8934ko625O0bTRq9gpj6ZcEnM%2FVq%2FgT%2BqL1Vw5fgPwYH3MFaf3W89aomO1y650i2SyWfHKFcwyDdkyFtsP48PRbQPoTyWev%2BBlduk3%2FqGzfAJmnD44j0OOGa%2FFGRulwSgmTMT6hrkqeeiCiYNZyjGItRZliUeJjfkIUjRAZt0Boj%2Fn75LMOi3YnRF9LzCuOWvQK6GuVfK4LMnRcu0lIYMZ4hMwps%2FkvQY6pgHgL826l8aOwrqchPcK0OA75XfFfwKqbWWUPLAPzgPVP7L21gm6Jm886qQMT462f7JadIyJySzT31QxpPka3k%2BLT7bTEpJaoYODeJTtv%2BrbZZlrGnZziey%2FJe4%2Bmx9F1hTlDTweWliCJoBrflISwWBF2hieSHDqFmcX4MH9FlnleDa0%2B68DBwoqC0REo7%2BcwfmTgXAnqXO%2BJbPmd2%2FZ0lQ4weJDSEop&X-Amz-Signature=e2a30b7fb6f667e4b203fc964c664901f91bd9b39a8ceda29443bca7a227e9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
