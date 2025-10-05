---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDC7UQIX%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyts5d5G5%2BTo1MzsHQIqWqh03jHEZHl6627SNYxLCioAiEApieW%2BBKlC3GgMSi3UkQWV3TJKLCbzW6fsQuzl%2FjJxswq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDqV4jOAZoITkUSq1SrcAwW72bYHdi5LpnwSXPgiYvJy%2FcnQCyWvDR5BPcD%2FkiZrlGZCXU2%2FA6EF6Oqmzy2H263ZQU8Y%2B5oSoDWCOAnx0G0iaFzsR2kOlL1qtLAz6JH6VbylVFbjJNAXarijVlRr%2BrUZKmmlJk93I7LxWo%2FQGKNn30iLOAL8EWN6uwW8jR4cxpqKTpsjd8iw%2BwyQt0vHN%2BElpCoOxfaJfYBem0WbQ951lNdEFU%2FQKYFB2nhsRJ6%2Fqk8KG0495Wvr9ZvfW%2F3K%2BEWlRfkAJCrror5pY05phvGhx371HAF0k5BPGOM%2Bg2kIO3Og4ssPbE6CGeIfUlJbgmoauIBBRpIdZ%2F4nQjDnURbIJ4f0NXZtP19okeiTa48WOV8x9p9sc%2BJf3%2Fl9fBbTvnDKZx%2FDPuWbxQioHeyu6JzzoUarAxEmQJ6bJaQneZTs0gqSypZazFo93R9CxrmFG57LYPVFXSaFNxfS9qeMQ0jNDeFeF%2Fd2uuX5oB1zdvFjY1Gzahggb%2Bqg9SUfoEPsOWj%2Fe9gbOuuMMakk0v%2FxkTgMoj0Bo0ua0QpxxpmCy%2BCZ7Fy2ZUnvD7whA3PKd9yyR%2Ba28YzWsUlxWUHDg8VFqi8YA1fwzW%2FCglEJgRVQTHBJh9NztVeW0VoRCWXQMJ%2F1hscGOqUBCjS4dmmqj1bIAqBagR8SuCZP0MRHnh52%2BURqyG5ED8FWo2p0X0sfo0s86Iom6GAQjo3j2FW3LWVQ3CsHBlUxcVCH%2FnGnRVqdbdtOCF6wssJbGN7sJGZTU9qZt0usEVrt5zL5a1pa3xI%2FK3UxDQZziJBCAgLRCG5EDcIZIteDROM7MP6SwXj8MJwWMpu2LOqbrYz9rBR%2F4gGn9ljmTqCAghnqqVXX&X-Amz-Signature=636f50762a2fdf9357042abc66a8f1e5d81188d520c36957986fa645fe60fb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDC7UQIX%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyts5d5G5%2BTo1MzsHQIqWqh03jHEZHl6627SNYxLCioAiEApieW%2BBKlC3GgMSi3UkQWV3TJKLCbzW6fsQuzl%2FjJxswq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDqV4jOAZoITkUSq1SrcAwW72bYHdi5LpnwSXPgiYvJy%2FcnQCyWvDR5BPcD%2FkiZrlGZCXU2%2FA6EF6Oqmzy2H263ZQU8Y%2B5oSoDWCOAnx0G0iaFzsR2kOlL1qtLAz6JH6VbylVFbjJNAXarijVlRr%2BrUZKmmlJk93I7LxWo%2FQGKNn30iLOAL8EWN6uwW8jR4cxpqKTpsjd8iw%2BwyQt0vHN%2BElpCoOxfaJfYBem0WbQ951lNdEFU%2FQKYFB2nhsRJ6%2Fqk8KG0495Wvr9ZvfW%2F3K%2BEWlRfkAJCrror5pY05phvGhx371HAF0k5BPGOM%2Bg2kIO3Og4ssPbE6CGeIfUlJbgmoauIBBRpIdZ%2F4nQjDnURbIJ4f0NXZtP19okeiTa48WOV8x9p9sc%2BJf3%2Fl9fBbTvnDKZx%2FDPuWbxQioHeyu6JzzoUarAxEmQJ6bJaQneZTs0gqSypZazFo93R9CxrmFG57LYPVFXSaFNxfS9qeMQ0jNDeFeF%2Fd2uuX5oB1zdvFjY1Gzahggb%2Bqg9SUfoEPsOWj%2Fe9gbOuuMMakk0v%2FxkTgMoj0Bo0ua0QpxxpmCy%2BCZ7Fy2ZUnvD7whA3PKd9yyR%2Ba28YzWsUlxWUHDg8VFqi8YA1fwzW%2FCglEJgRVQTHBJh9NztVeW0VoRCWXQMJ%2F1hscGOqUBCjS4dmmqj1bIAqBagR8SuCZP0MRHnh52%2BURqyG5ED8FWo2p0X0sfo0s86Iom6GAQjo3j2FW3LWVQ3CsHBlUxcVCH%2FnGnRVqdbdtOCF6wssJbGN7sJGZTU9qZt0usEVrt5zL5a1pa3xI%2FK3UxDQZziJBCAgLRCG5EDcIZIteDROM7MP6SwXj8MJwWMpu2LOqbrYz9rBR%2F4gGn9ljmTqCAghnqqVXX&X-Amz-Signature=e99a8a61108b4fcea850b2b6cafb1bdfebaef33f0b43a74da8ce72a58db96d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDC7UQIX%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyts5d5G5%2BTo1MzsHQIqWqh03jHEZHl6627SNYxLCioAiEApieW%2BBKlC3GgMSi3UkQWV3TJKLCbzW6fsQuzl%2FjJxswq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDqV4jOAZoITkUSq1SrcAwW72bYHdi5LpnwSXPgiYvJy%2FcnQCyWvDR5BPcD%2FkiZrlGZCXU2%2FA6EF6Oqmzy2H263ZQU8Y%2B5oSoDWCOAnx0G0iaFzsR2kOlL1qtLAz6JH6VbylVFbjJNAXarijVlRr%2BrUZKmmlJk93I7LxWo%2FQGKNn30iLOAL8EWN6uwW8jR4cxpqKTpsjd8iw%2BwyQt0vHN%2BElpCoOxfaJfYBem0WbQ951lNdEFU%2FQKYFB2nhsRJ6%2Fqk8KG0495Wvr9ZvfW%2F3K%2BEWlRfkAJCrror5pY05phvGhx371HAF0k5BPGOM%2Bg2kIO3Og4ssPbE6CGeIfUlJbgmoauIBBRpIdZ%2F4nQjDnURbIJ4f0NXZtP19okeiTa48WOV8x9p9sc%2BJf3%2Fl9fBbTvnDKZx%2FDPuWbxQioHeyu6JzzoUarAxEmQJ6bJaQneZTs0gqSypZazFo93R9CxrmFG57LYPVFXSaFNxfS9qeMQ0jNDeFeF%2Fd2uuX5oB1zdvFjY1Gzahggb%2Bqg9SUfoEPsOWj%2Fe9gbOuuMMakk0v%2FxkTgMoj0Bo0ua0QpxxpmCy%2BCZ7Fy2ZUnvD7whA3PKd9yyR%2Ba28YzWsUlxWUHDg8VFqi8YA1fwzW%2FCglEJgRVQTHBJh9NztVeW0VoRCWXQMJ%2F1hscGOqUBCjS4dmmqj1bIAqBagR8SuCZP0MRHnh52%2BURqyG5ED8FWo2p0X0sfo0s86Iom6GAQjo3j2FW3LWVQ3CsHBlUxcVCH%2FnGnRVqdbdtOCF6wssJbGN7sJGZTU9qZt0usEVrt5zL5a1pa3xI%2FK3UxDQZziJBCAgLRCG5EDcIZIteDROM7MP6SwXj8MJwWMpu2LOqbrYz9rBR%2F4gGn9ljmTqCAghnqqVXX&X-Amz-Signature=23a19a969505b3f0d1e228dddbbe6958eb46a566236fa8a4f00c9e9666ca657c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
