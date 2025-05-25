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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AACMC6O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCBPP5nc8qnDyFko8cs9W5R0PpieV0jYGmqVCa2p2dmLAIgSPqAsHwq3NHmlQtEG5HFVByF%2Fn0kXEy%2BLajsfLfPAFoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKHIhB0j2OdalJhe1CrcA3uRfpEocWEcg09rUcaz5wL3c4qOqe%2BHYex70SH7O7srE%2FKwweqOQYXceG%2Fx%2FOEQMp8PszmzIZYgR87q3piTa8Kw7Dd0m0jBriKxNh4LH9W7gL1YsSHshnOQcYJEMHIpAF7BnWObsjT0t2t5VubvN9W4GZrSbMK1jCGRZ7rAEFnrZi3eZ73s55K9vKc6P%2BEZ0%2B7FY75Py8ICgIphnUlmTXBkGQ%2BUqywJ%2Bhq8GVT5eW3tbyAmURe5gpCTh%2F11ULd1dV5IbAIOcLZ%2FQLYSGowjY7llqGVrDxf2O%2ByWEP6N%2BaLfj8Cj829mnDEIolLEPKUNYlpAhmPA%2FBQBJdSVDWlwY9G0v96A17yvEJxlLkcTKHTsmU64CagKVXUuJHXrclwUalF33FKCmxozKw4t5itdB2f93jr8vnSMRLK6H%2FIlAx%2F%2FFO%2BA0LmnlZgzFcEpDlb6%2FO3RYw%2FagxXk3XuDi9aJCYAbk%2B%2BwyTuPfbMOU5bZVmhziUDjbCDAGOj4BsA9oU0wVp2ljmdgJ1YBfXC7pFY7%2BTGq4OYikSHUdVCS3LRpE8%2BsVgxn7fMR16Pa1IsqLDhZfiBpQDp0qubpnjEWPML2c8XBNozQ1dnCNklZQaX3YsA%2B9v9YyresQaEYwkGXMKKqzsEGOqUB%2FCQzGeoSyqaSME3ONZKpV9pzi2IU6nlpKv8o6SkRAgab8dzjUt1HzObxjOpiczpBvhT5F0hWIBPBQcmmvHPiEJyGyfUNq6Sa%2B8qPthLaz%2F81%2BEHIu2%2BDLEXqUBHtd4Un68c9Thqd8zC6b5jqfhHsAvno0mxCYC4Zfn%2F8AY7ZpcjF8C8mpLuMZw3sTl3VPpU6dQwPekuLkMrSmiN4XmAltGOfoJQF&X-Amz-Signature=01259a2b19b2d5520e30ea895cfc4d1b68059717367e66c66c18f8be255bee56&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AACMC6O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCBPP5nc8qnDyFko8cs9W5R0PpieV0jYGmqVCa2p2dmLAIgSPqAsHwq3NHmlQtEG5HFVByF%2Fn0kXEy%2BLajsfLfPAFoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKHIhB0j2OdalJhe1CrcA3uRfpEocWEcg09rUcaz5wL3c4qOqe%2BHYex70SH7O7srE%2FKwweqOQYXceG%2Fx%2FOEQMp8PszmzIZYgR87q3piTa8Kw7Dd0m0jBriKxNh4LH9W7gL1YsSHshnOQcYJEMHIpAF7BnWObsjT0t2t5VubvN9W4GZrSbMK1jCGRZ7rAEFnrZi3eZ73s55K9vKc6P%2BEZ0%2B7FY75Py8ICgIphnUlmTXBkGQ%2BUqywJ%2Bhq8GVT5eW3tbyAmURe5gpCTh%2F11ULd1dV5IbAIOcLZ%2FQLYSGowjY7llqGVrDxf2O%2ByWEP6N%2BaLfj8Cj829mnDEIolLEPKUNYlpAhmPA%2FBQBJdSVDWlwY9G0v96A17yvEJxlLkcTKHTsmU64CagKVXUuJHXrclwUalF33FKCmxozKw4t5itdB2f93jr8vnSMRLK6H%2FIlAx%2F%2FFO%2BA0LmnlZgzFcEpDlb6%2FO3RYw%2FagxXk3XuDi9aJCYAbk%2B%2BwyTuPfbMOU5bZVmhziUDjbCDAGOj4BsA9oU0wVp2ljmdgJ1YBfXC7pFY7%2BTGq4OYikSHUdVCS3LRpE8%2BsVgxn7fMR16Pa1IsqLDhZfiBpQDp0qubpnjEWPML2c8XBNozQ1dnCNklZQaX3YsA%2B9v9YyresQaEYwkGXMKKqzsEGOqUB%2FCQzGeoSyqaSME3ONZKpV9pzi2IU6nlpKv8o6SkRAgab8dzjUt1HzObxjOpiczpBvhT5F0hWIBPBQcmmvHPiEJyGyfUNq6Sa%2B8qPthLaz%2F81%2BEHIu2%2BDLEXqUBHtd4Un68c9Thqd8zC6b5jqfhHsAvno0mxCYC4Zfn%2F8AY7ZpcjF8C8mpLuMZw3sTl3VPpU6dQwPekuLkMrSmiN4XmAltGOfoJQF&X-Amz-Signature=5414040e3218b1202cd28ea4835eade28b6d9c26bead95c8ae4e34c29a1cfe9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AACMC6O%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCBPP5nc8qnDyFko8cs9W5R0PpieV0jYGmqVCa2p2dmLAIgSPqAsHwq3NHmlQtEG5HFVByF%2Fn0kXEy%2BLajsfLfPAFoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKHIhB0j2OdalJhe1CrcA3uRfpEocWEcg09rUcaz5wL3c4qOqe%2BHYex70SH7O7srE%2FKwweqOQYXceG%2Fx%2FOEQMp8PszmzIZYgR87q3piTa8Kw7Dd0m0jBriKxNh4LH9W7gL1YsSHshnOQcYJEMHIpAF7BnWObsjT0t2t5VubvN9W4GZrSbMK1jCGRZ7rAEFnrZi3eZ73s55K9vKc6P%2BEZ0%2B7FY75Py8ICgIphnUlmTXBkGQ%2BUqywJ%2Bhq8GVT5eW3tbyAmURe5gpCTh%2F11ULd1dV5IbAIOcLZ%2FQLYSGowjY7llqGVrDxf2O%2ByWEP6N%2BaLfj8Cj829mnDEIolLEPKUNYlpAhmPA%2FBQBJdSVDWlwY9G0v96A17yvEJxlLkcTKHTsmU64CagKVXUuJHXrclwUalF33FKCmxozKw4t5itdB2f93jr8vnSMRLK6H%2FIlAx%2F%2FFO%2BA0LmnlZgzFcEpDlb6%2FO3RYw%2FagxXk3XuDi9aJCYAbk%2B%2BwyTuPfbMOU5bZVmhziUDjbCDAGOj4BsA9oU0wVp2ljmdgJ1YBfXC7pFY7%2BTGq4OYikSHUdVCS3LRpE8%2BsVgxn7fMR16Pa1IsqLDhZfiBpQDp0qubpnjEWPML2c8XBNozQ1dnCNklZQaX3YsA%2B9v9YyresQaEYwkGXMKKqzsEGOqUB%2FCQzGeoSyqaSME3ONZKpV9pzi2IU6nlpKv8o6SkRAgab8dzjUt1HzObxjOpiczpBvhT5F0hWIBPBQcmmvHPiEJyGyfUNq6Sa%2B8qPthLaz%2F81%2BEHIu2%2BDLEXqUBHtd4Un68c9Thqd8zC6b5jqfhHsAvno0mxCYC4Zfn%2F8AY7ZpcjF8C8mpLuMZw3sTl3VPpU6dQwPekuLkMrSmiN4XmAltGOfoJQF&X-Amz-Signature=7cceb73f0dc67e357ba7140768f7f2d794549951f7e5a1e84d02a3a3b7e04ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
