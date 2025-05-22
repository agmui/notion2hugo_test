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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNHBCAO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBpCtcQoVt%2BaEdITrOEPM55UwFRTQkAOvS5BpIyMXJKeAiAxJN3cjPnLsQzxTvtbzw4Qf%2Bi1meCH6lZ9l%2FkhW%2FrTViqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJeB7Ww0md8p5B%2F9KtwDr%2FFFZXmshEwR4kT4maJOJktgHGiiM96bD%2FBDhlvceyTlYskx8RJLfTgJOld%2BZEKF2ylqYxh5D3iQnjZ4eWWVAL2lsb39W0R1bsmfA2%2BzgJlCA%2BTsaYCQQQTDTgfHG1QbKi0Eo%2BjaNqMk3kJaGLCTqHblz2JiY%2FB0kj3dETvRTtTQBZjaljzEM3C9ws%2BV2Pj8Qt5eQgE1CmsxMvnx0i0SJd70czBzxOZgtnn8mp4cB9gLMWRDZ5RlzW7CuGyOVM5R0Tv3j1LYbX7ODGaNkoGhyqccEBwSwebecCiosggnE6D4LJTMbw29SazXIhkRhjlet%2FQ7eDKbwVft%2F%2FAVlRuJJMZH7AVRsmW3o4rwxVOxey9%2B0%2Fzq9HxZl%2FQs9CS1HkzZXI%2FtJ8dLuDMmhS%2BGmxhLoa2HFpxvXnZbM%2FNCeNNTLvzBmGn6ruAvxYwB9Hy%2F6RuB77lzURGpQ9jzx14YOCfonrtVLYDt9SLUdfWHJDtDf4ykk4vYk%2FGxNzTx1hNaUcLInkhFcfoRfWbmaH%2FtxM31KO4sRGxQixjUAXc8ItTWB9cevvTG811LSw2Tg5EA6y6s09Ci6LHlmcl7Lj3xEgKwLSu79MHjCCapwH2PVZCs6ADg3076aWx1o5d6r%2FIwzeK8wQY6pgEIIEbcyu6nKSJiHT%2FxRgxqMSKVTqvjh8N%2BokM4Uev8fWYmjq9RZaIxC5lJIWjr2RyVq8X%2B1jbw3lPaBUcARGoqAYHPJ3WUzVVsLx2tFtySoDOs%2B%2BAKSNaMQDzIOSc5ab7Xsh4UX9YG8SpiY5f6QGPGlu6T6Gi56VHIF5z%2FCx0onOqkXpCkdw0OriaKYOlccILVGuHIECGMvgQQOvGi7czdzRbnLfzO&X-Amz-Signature=a59b286d5f4ea388ce2354ac5696bd1fe8e0cf8fb0356ab70fcd416984d72af4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNHBCAO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBpCtcQoVt%2BaEdITrOEPM55UwFRTQkAOvS5BpIyMXJKeAiAxJN3cjPnLsQzxTvtbzw4Qf%2Bi1meCH6lZ9l%2FkhW%2FrTViqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJeB7Ww0md8p5B%2F9KtwDr%2FFFZXmshEwR4kT4maJOJktgHGiiM96bD%2FBDhlvceyTlYskx8RJLfTgJOld%2BZEKF2ylqYxh5D3iQnjZ4eWWVAL2lsb39W0R1bsmfA2%2BzgJlCA%2BTsaYCQQQTDTgfHG1QbKi0Eo%2BjaNqMk3kJaGLCTqHblz2JiY%2FB0kj3dETvRTtTQBZjaljzEM3C9ws%2BV2Pj8Qt5eQgE1CmsxMvnx0i0SJd70czBzxOZgtnn8mp4cB9gLMWRDZ5RlzW7CuGyOVM5R0Tv3j1LYbX7ODGaNkoGhyqccEBwSwebecCiosggnE6D4LJTMbw29SazXIhkRhjlet%2FQ7eDKbwVft%2F%2FAVlRuJJMZH7AVRsmW3o4rwxVOxey9%2B0%2Fzq9HxZl%2FQs9CS1HkzZXI%2FtJ8dLuDMmhS%2BGmxhLoa2HFpxvXnZbM%2FNCeNNTLvzBmGn6ruAvxYwB9Hy%2F6RuB77lzURGpQ9jzx14YOCfonrtVLYDt9SLUdfWHJDtDf4ykk4vYk%2FGxNzTx1hNaUcLInkhFcfoRfWbmaH%2FtxM31KO4sRGxQixjUAXc8ItTWB9cevvTG811LSw2Tg5EA6y6s09Ci6LHlmcl7Lj3xEgKwLSu79MHjCCapwH2PVZCs6ADg3076aWx1o5d6r%2FIwzeK8wQY6pgEIIEbcyu6nKSJiHT%2FxRgxqMSKVTqvjh8N%2BokM4Uev8fWYmjq9RZaIxC5lJIWjr2RyVq8X%2B1jbw3lPaBUcARGoqAYHPJ3WUzVVsLx2tFtySoDOs%2B%2BAKSNaMQDzIOSc5ab7Xsh4UX9YG8SpiY5f6QGPGlu6T6Gi56VHIF5z%2FCx0onOqkXpCkdw0OriaKYOlccILVGuHIECGMvgQQOvGi7czdzRbnLfzO&X-Amz-Signature=9b0d96807ec69f8a8e224d1afb06273ca1dedcecc9f12d39e84f6deb222267a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNHBCAO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBpCtcQoVt%2BaEdITrOEPM55UwFRTQkAOvS5BpIyMXJKeAiAxJN3cjPnLsQzxTvtbzw4Qf%2Bi1meCH6lZ9l%2FkhW%2FrTViqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJeB7Ww0md8p5B%2F9KtwDr%2FFFZXmshEwR4kT4maJOJktgHGiiM96bD%2FBDhlvceyTlYskx8RJLfTgJOld%2BZEKF2ylqYxh5D3iQnjZ4eWWVAL2lsb39W0R1bsmfA2%2BzgJlCA%2BTsaYCQQQTDTgfHG1QbKi0Eo%2BjaNqMk3kJaGLCTqHblz2JiY%2FB0kj3dETvRTtTQBZjaljzEM3C9ws%2BV2Pj8Qt5eQgE1CmsxMvnx0i0SJd70czBzxOZgtnn8mp4cB9gLMWRDZ5RlzW7CuGyOVM5R0Tv3j1LYbX7ODGaNkoGhyqccEBwSwebecCiosggnE6D4LJTMbw29SazXIhkRhjlet%2FQ7eDKbwVft%2F%2FAVlRuJJMZH7AVRsmW3o4rwxVOxey9%2B0%2Fzq9HxZl%2FQs9CS1HkzZXI%2FtJ8dLuDMmhS%2BGmxhLoa2HFpxvXnZbM%2FNCeNNTLvzBmGn6ruAvxYwB9Hy%2F6RuB77lzURGpQ9jzx14YOCfonrtVLYDt9SLUdfWHJDtDf4ykk4vYk%2FGxNzTx1hNaUcLInkhFcfoRfWbmaH%2FtxM31KO4sRGxQixjUAXc8ItTWB9cevvTG811LSw2Tg5EA6y6s09Ci6LHlmcl7Lj3xEgKwLSu79MHjCCapwH2PVZCs6ADg3076aWx1o5d6r%2FIwzeK8wQY6pgEIIEbcyu6nKSJiHT%2FxRgxqMSKVTqvjh8N%2BokM4Uev8fWYmjq9RZaIxC5lJIWjr2RyVq8X%2B1jbw3lPaBUcARGoqAYHPJ3WUzVVsLx2tFtySoDOs%2B%2BAKSNaMQDzIOSc5ab7Xsh4UX9YG8SpiY5f6QGPGlu6T6Gi56VHIF5z%2FCx0onOqkXpCkdw0OriaKYOlccILVGuHIECGMvgQQOvGi7czdzRbnLfzO&X-Amz-Signature=8a7b13485e77398da3f2d52d88d07a9c77e8df3e487daafd170293c12cf48e69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
