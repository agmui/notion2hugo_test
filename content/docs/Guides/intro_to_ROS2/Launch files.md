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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBZW6DBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWlcOsIBbmwT0pQeC592bD39IeIUBjsjalFEJ2UAdlNAIgeNMXON%2BQoJ1gOabf%2Bg1OHgn4hTBMUpO1TE2FuMWCnIAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOYkMt4SxW9oudBLuircA7OlutdPzb%2BaAM9tBmQSo9CcUffYyRwmYMR6BGbrARrsdOP414TPLs5Fze%2FThcQFxxLyRq5NmCIRxakK6tgp8Qw4G5dPcAq8GuFqV27hcfLsSAc%2FtLvLkPSeXJGnXUrkocJe1xrl5Hzf3wXyd2ww5m9YdJm6LLHWYFhE71gtEfFSjTo%2BfglzqoLUFK59uKUgP4E%2BzBLNTJZTlzgmn5EGp9nL1Af%2FMTJ4YbqH1nUHE0lWn8fC8z7FiEhh8x9m8yvMsE2G6xaPgy62d2hO%2F%2BqC5U%2BzM20V1ScU36w%2BCk3j4Zpb6ySOhhFYYisUiR%2B18%2BSm66qIOTihImA0ZzMXw2R%2BoiACqz3xiDtfrjlZVBT56vJbG8XTVP4VP%2BshAQoEQvOZkBgOQuLFL3gEF%2B8WJAu2WpAB4S0YDv02F0K2apdEGI%2FWGDtD%2B1KzQTQEVwyiGuLrapnbv47Z4IRYceymrDtE%2FkrraXSErTSu1E4%2B8h1LfqlznQB4F9BnGxEefONfFotnnUPyKRmWXbT2EveEqoGbYNTFjeZeJ6j0FNsfkmEpwpguSNK2skpr2XSfWAuWg8lE6%2BY%2FFruTBF2KdOIcYy21goP2qmanGrnnxQOR%2B8B2Av2SAl68y2UcJQWYLLlkMJ7bnMEGOqUBjbGkAOZeugG0r5f2F%2FVH0YIO5QjqTyhqP5o%2FZ4aVHIdjUfzQGGD8lJI%2Br5vDgwwZgr6fjhbPgftR82oSenCHOkSunettZy9b2%2B%2FaQDd%2BK0uC3T8ibSWZdhztEX3Vs%2B%2BSwm82yc7FYQT%2BimImZQ2%2FP4e8CUjHW%2Fnf9CyzQXfT%2BGgeeH2Uv99G%2F3NtMBRQL1LQZIoSJ5G5G%2Bht4Y4g3WAv5fhpGPZX&X-Amz-Signature=06719a1016d32a27e59873669a41569320cde4e84eac91ce9e7c1963d94942d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBZW6DBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWlcOsIBbmwT0pQeC592bD39IeIUBjsjalFEJ2UAdlNAIgeNMXON%2BQoJ1gOabf%2Bg1OHgn4hTBMUpO1TE2FuMWCnIAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOYkMt4SxW9oudBLuircA7OlutdPzb%2BaAM9tBmQSo9CcUffYyRwmYMR6BGbrARrsdOP414TPLs5Fze%2FThcQFxxLyRq5NmCIRxakK6tgp8Qw4G5dPcAq8GuFqV27hcfLsSAc%2FtLvLkPSeXJGnXUrkocJe1xrl5Hzf3wXyd2ww5m9YdJm6LLHWYFhE71gtEfFSjTo%2BfglzqoLUFK59uKUgP4E%2BzBLNTJZTlzgmn5EGp9nL1Af%2FMTJ4YbqH1nUHE0lWn8fC8z7FiEhh8x9m8yvMsE2G6xaPgy62d2hO%2F%2BqC5U%2BzM20V1ScU36w%2BCk3j4Zpb6ySOhhFYYisUiR%2B18%2BSm66qIOTihImA0ZzMXw2R%2BoiACqz3xiDtfrjlZVBT56vJbG8XTVP4VP%2BshAQoEQvOZkBgOQuLFL3gEF%2B8WJAu2WpAB4S0YDv02F0K2apdEGI%2FWGDtD%2B1KzQTQEVwyiGuLrapnbv47Z4IRYceymrDtE%2FkrraXSErTSu1E4%2B8h1LfqlznQB4F9BnGxEefONfFotnnUPyKRmWXbT2EveEqoGbYNTFjeZeJ6j0FNsfkmEpwpguSNK2skpr2XSfWAuWg8lE6%2BY%2FFruTBF2KdOIcYy21goP2qmanGrnnxQOR%2B8B2Av2SAl68y2UcJQWYLLlkMJ7bnMEGOqUBjbGkAOZeugG0r5f2F%2FVH0YIO5QjqTyhqP5o%2FZ4aVHIdjUfzQGGD8lJI%2Br5vDgwwZgr6fjhbPgftR82oSenCHOkSunettZy9b2%2B%2FaQDd%2BK0uC3T8ibSWZdhztEX3Vs%2B%2BSwm82yc7FYQT%2BimImZQ2%2FP4e8CUjHW%2Fnf9CyzQXfT%2BGgeeH2Uv99G%2F3NtMBRQL1LQZIoSJ5G5G%2Bht4Y4g3WAv5fhpGPZX&X-Amz-Signature=c17d74f605b3608d26178dab82cbcfe669cb8f4de9db0eae2d7f4929bbc9d3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBZW6DBC%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWlcOsIBbmwT0pQeC592bD39IeIUBjsjalFEJ2UAdlNAIgeNMXON%2BQoJ1gOabf%2Bg1OHgn4hTBMUpO1TE2FuMWCnIAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOYkMt4SxW9oudBLuircA7OlutdPzb%2BaAM9tBmQSo9CcUffYyRwmYMR6BGbrARrsdOP414TPLs5Fze%2FThcQFxxLyRq5NmCIRxakK6tgp8Qw4G5dPcAq8GuFqV27hcfLsSAc%2FtLvLkPSeXJGnXUrkocJe1xrl5Hzf3wXyd2ww5m9YdJm6LLHWYFhE71gtEfFSjTo%2BfglzqoLUFK59uKUgP4E%2BzBLNTJZTlzgmn5EGp9nL1Af%2FMTJ4YbqH1nUHE0lWn8fC8z7FiEhh8x9m8yvMsE2G6xaPgy62d2hO%2F%2BqC5U%2BzM20V1ScU36w%2BCk3j4Zpb6ySOhhFYYisUiR%2B18%2BSm66qIOTihImA0ZzMXw2R%2BoiACqz3xiDtfrjlZVBT56vJbG8XTVP4VP%2BshAQoEQvOZkBgOQuLFL3gEF%2B8WJAu2WpAB4S0YDv02F0K2apdEGI%2FWGDtD%2B1KzQTQEVwyiGuLrapnbv47Z4IRYceymrDtE%2FkrraXSErTSu1E4%2B8h1LfqlznQB4F9BnGxEefONfFotnnUPyKRmWXbT2EveEqoGbYNTFjeZeJ6j0FNsfkmEpwpguSNK2skpr2XSfWAuWg8lE6%2BY%2FFruTBF2KdOIcYy21goP2qmanGrnnxQOR%2B8B2Av2SAl68y2UcJQWYLLlkMJ7bnMEGOqUBjbGkAOZeugG0r5f2F%2FVH0YIO5QjqTyhqP5o%2FZ4aVHIdjUfzQGGD8lJI%2Br5vDgwwZgr6fjhbPgftR82oSenCHOkSunettZy9b2%2B%2FaQDd%2BK0uC3T8ibSWZdhztEX3Vs%2B%2BSwm82yc7FYQT%2BimImZQ2%2FP4e8CUjHW%2Fnf9CyzQXfT%2BGgeeH2Uv99G%2F3NtMBRQL1LQZIoSJ5G5G%2Bht4Y4g3WAv5fhpGPZX&X-Amz-Signature=c4df09e0cd336f3558bde6ee73f1680d3fb52b366638c3951846c765cceee84a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
