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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUOZTF4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4k0feItySnRYm%2Ftdy5fGUYtk%2BXLXmOvuHmNs2IQ1r%2BgIgMc4PDKL1MFpqZ66iqIPwN5O6qdBX1mBZu1S5RWxGCDkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFVFvJzoAfYWCkDjircA6C6eaqzyt3fii%2B2%2BT0z8bgEVwJFGqpYIB76P1pvChtw4RM6l0%2Fta9kXOsSOZJAgLWTUN5NlcfxAgDFA0yPc2MuegdsexrZyQsaIqiKKfDwj0Aj3BwvsauzbqKl6eT0HLQ39PJJNE37F8nn4kb2oTwvNy1Bw1AXRXMXBaKWx7P%2BmIBPFIYmN2PtzEhydD605Mlmo2kAnrkeLWvNprGIfsCWsoWDPeeDWdK4NGfAe76ZEwvhsnefgnNdtYFdMht6wG3QXDRItCxsX97I1ngrm8oeDsDQ9VOSAM9%2FgGD9X15BoxoC3YB3bYr28%2BlFEZxTqXlnKp3w5PoedhPCPjV3jq9KDDMpe6Xhll3D%2F09%2BrloP9Rk6A5V7NdX1AiCYY414llvrmjgXwav%2FIYKkFdVag0vR%2FRKQypRI15JsRi7l25aUQFbamZ9fjoEZSj7GfFySgozOoa92JWP8FUOJrXEePYl7z6bc8%2Ft7Qj1jpV46ljngZNnU7piPvQMJEyzeV71kK%2F6uz9O5CwAIgDHdv3bA7YtbKQPQdZNyD1a2xlQTeho6F5gbJRTeFoHg%2FQVJzd0Ga86xRFmtqGYHjeomJou7hz8q5wGyPOJi%2FfRKwgKKNwZpNPDI%2Bd2hl39AVlKHZMMHa88MGOqUBcP0U%2Be4IALo0ZaJroLFa6DrQ9gMow0g6L5hcl4hRN97lvxGVnuqVFNtKsJ6JOAx1tXgeb6U40GrUTUOnSouxEY4Sm1YR9Jkzhj83gGvXHmn4B0lrbKeUI8df%2B1M2ivMfQoOsivbFvLGXbEq85tJokrjme6%2BLkAJOjvgI8PefgfRijRYJvCw%2BsAgYMr1Ey74Hf70XpdlqSaFX%2BRz%2FAMOdiRaHTA%2B4&X-Amz-Signature=a1c80bbbaccb74d27c4ec8d6e08ce66d51587dfc8f8e77bc72cf262e6119ee2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUOZTF4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4k0feItySnRYm%2Ftdy5fGUYtk%2BXLXmOvuHmNs2IQ1r%2BgIgMc4PDKL1MFpqZ66iqIPwN5O6qdBX1mBZu1S5RWxGCDkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFVFvJzoAfYWCkDjircA6C6eaqzyt3fii%2B2%2BT0z8bgEVwJFGqpYIB76P1pvChtw4RM6l0%2Fta9kXOsSOZJAgLWTUN5NlcfxAgDFA0yPc2MuegdsexrZyQsaIqiKKfDwj0Aj3BwvsauzbqKl6eT0HLQ39PJJNE37F8nn4kb2oTwvNy1Bw1AXRXMXBaKWx7P%2BmIBPFIYmN2PtzEhydD605Mlmo2kAnrkeLWvNprGIfsCWsoWDPeeDWdK4NGfAe76ZEwvhsnefgnNdtYFdMht6wG3QXDRItCxsX97I1ngrm8oeDsDQ9VOSAM9%2FgGD9X15BoxoC3YB3bYr28%2BlFEZxTqXlnKp3w5PoedhPCPjV3jq9KDDMpe6Xhll3D%2F09%2BrloP9Rk6A5V7NdX1AiCYY414llvrmjgXwav%2FIYKkFdVag0vR%2FRKQypRI15JsRi7l25aUQFbamZ9fjoEZSj7GfFySgozOoa92JWP8FUOJrXEePYl7z6bc8%2Ft7Qj1jpV46ljngZNnU7piPvQMJEyzeV71kK%2F6uz9O5CwAIgDHdv3bA7YtbKQPQdZNyD1a2xlQTeho6F5gbJRTeFoHg%2FQVJzd0Ga86xRFmtqGYHjeomJou7hz8q5wGyPOJi%2FfRKwgKKNwZpNPDI%2Bd2hl39AVlKHZMMHa88MGOqUBcP0U%2Be4IALo0ZaJroLFa6DrQ9gMow0g6L5hcl4hRN97lvxGVnuqVFNtKsJ6JOAx1tXgeb6U40GrUTUOnSouxEY4Sm1YR9Jkzhj83gGvXHmn4B0lrbKeUI8df%2B1M2ivMfQoOsivbFvLGXbEq85tJokrjme6%2BLkAJOjvgI8PefgfRijRYJvCw%2BsAgYMr1Ey74Hf70XpdlqSaFX%2BRz%2FAMOdiRaHTA%2B4&X-Amz-Signature=5cc6780f3c3322d647be3ce31b7f4dfc18eaa4632b4bcbb73680eb1cf9bce165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUOZTF4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4k0feItySnRYm%2Ftdy5fGUYtk%2BXLXmOvuHmNs2IQ1r%2BgIgMc4PDKL1MFpqZ66iqIPwN5O6qdBX1mBZu1S5RWxGCDkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFVFvJzoAfYWCkDjircA6C6eaqzyt3fii%2B2%2BT0z8bgEVwJFGqpYIB76P1pvChtw4RM6l0%2Fta9kXOsSOZJAgLWTUN5NlcfxAgDFA0yPc2MuegdsexrZyQsaIqiKKfDwj0Aj3BwvsauzbqKl6eT0HLQ39PJJNE37F8nn4kb2oTwvNy1Bw1AXRXMXBaKWx7P%2BmIBPFIYmN2PtzEhydD605Mlmo2kAnrkeLWvNprGIfsCWsoWDPeeDWdK4NGfAe76ZEwvhsnefgnNdtYFdMht6wG3QXDRItCxsX97I1ngrm8oeDsDQ9VOSAM9%2FgGD9X15BoxoC3YB3bYr28%2BlFEZxTqXlnKp3w5PoedhPCPjV3jq9KDDMpe6Xhll3D%2F09%2BrloP9Rk6A5V7NdX1AiCYY414llvrmjgXwav%2FIYKkFdVag0vR%2FRKQypRI15JsRi7l25aUQFbamZ9fjoEZSj7GfFySgozOoa92JWP8FUOJrXEePYl7z6bc8%2Ft7Qj1jpV46ljngZNnU7piPvQMJEyzeV71kK%2F6uz9O5CwAIgDHdv3bA7YtbKQPQdZNyD1a2xlQTeho6F5gbJRTeFoHg%2FQVJzd0Ga86xRFmtqGYHjeomJou7hz8q5wGyPOJi%2FfRKwgKKNwZpNPDI%2Bd2hl39AVlKHZMMHa88MGOqUBcP0U%2Be4IALo0ZaJroLFa6DrQ9gMow0g6L5hcl4hRN97lvxGVnuqVFNtKsJ6JOAx1tXgeb6U40GrUTUOnSouxEY4Sm1YR9Jkzhj83gGvXHmn4B0lrbKeUI8df%2B1M2ivMfQoOsivbFvLGXbEq85tJokrjme6%2BLkAJOjvgI8PefgfRijRYJvCw%2BsAgYMr1Ey74Hf70XpdlqSaFX%2BRz%2FAMOdiRaHTA%2B4&X-Amz-Signature=721323df5d2b8b341c8c5c0c1482eaa092659021cb4bf3aaf456e4c0f146a986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
