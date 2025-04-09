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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2YFGI7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDunV3JGBynVth8PIV%2Bt6AqItoEmeAZQvM%2BSx4ycb%2FIyAIhAPzlL1nv9i9JccnOiJuX8cIIHGMV4V8S6O1k5vkAXs8qKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydfVByTpCYpFTcgM0q3APhZXjAwnrkxyJylwsc19OTw3wi4f%2BXmFriJQccM7jt0R80k9PLhDcBjgblW9FpQBxIxC9aoPiifaeKemqNE8RFsfUUQCvM5xk%2BJ9MC3hwk0xCUXJmTOl4TlltEscf5gIdMbDhyY1VfBrdy3TOyeSfSdNzVCdWpbxwdfiBVA5OxqOz%2BzsY0YNd%2FWOrqhe9I5sq3vUxgQbPx8AVvjp%2BEDARW1ujXl1lApwNPTPrEveq2%2FxyQ%2Ffp1fE%2FXp0Gmf0hpW5zd%2FUyIsgYqViypcLknO7dMy2bmVtmQAvgTcmj%2BP0HThs6CnuJJR7al9n3gXahCKoHX1IOp1mHRZO%2BfNS8279ZfXVAwBJITMix1H2NqIK6%2FZeFJw6xsjHSahKpPNKnEp8hE1sqG4lq3QuYtdBmq6Z%2BPhMJ%2FxUz8htyIPiLkx3Jd4lNgk6y7QKHfAAG1m7uLaq7HIJAPC9KtHvp8RY2LnQHQZGXxbTP4vXs881c0ywbLkOs4ce%2F%2BF3WCNUN0uB%2B8ecctp1POPZGGerHFNr9IuWSPNKYCmq47fFquzdP%2F0TjpYTfe%2Fr536wNztfHVpIKVK3SRVb2cfQ6jfgnGttHNikbQ440vyYFtJUhkqwQEDwSB%2FPNe7I1ut2RnGjVapjDP%2Btq%2FBjqkAQzQ42JvBVVjzRv2sn61podHQgEvfUGld5CIbmrnraRYv3WSa69%2BvIhnmPoBqnN9DNbvj28tzzOW7f8%2BKGXeWXKVzmk0CWMbcpjlcLgLd%2BDH30atyz9hc3BnAnUBHPzUubMBvDypxihCuUnccoowUhUHtA4x%2FYOKpQfXxzbCwu%2F0Pf0KKzAJRB%2B7A7qclxInjmeM2hniCU1%2B4YwTLhDx53IQ5KrW&X-Amz-Signature=d134ff458488a71d650b59463fd6b6e2e58d64094d8c9885a7d0ce5ff3fce501&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2YFGI7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDunV3JGBynVth8PIV%2Bt6AqItoEmeAZQvM%2BSx4ycb%2FIyAIhAPzlL1nv9i9JccnOiJuX8cIIHGMV4V8S6O1k5vkAXs8qKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydfVByTpCYpFTcgM0q3APhZXjAwnrkxyJylwsc19OTw3wi4f%2BXmFriJQccM7jt0R80k9PLhDcBjgblW9FpQBxIxC9aoPiifaeKemqNE8RFsfUUQCvM5xk%2BJ9MC3hwk0xCUXJmTOl4TlltEscf5gIdMbDhyY1VfBrdy3TOyeSfSdNzVCdWpbxwdfiBVA5OxqOz%2BzsY0YNd%2FWOrqhe9I5sq3vUxgQbPx8AVvjp%2BEDARW1ujXl1lApwNPTPrEveq2%2FxyQ%2Ffp1fE%2FXp0Gmf0hpW5zd%2FUyIsgYqViypcLknO7dMy2bmVtmQAvgTcmj%2BP0HThs6CnuJJR7al9n3gXahCKoHX1IOp1mHRZO%2BfNS8279ZfXVAwBJITMix1H2NqIK6%2FZeFJw6xsjHSahKpPNKnEp8hE1sqG4lq3QuYtdBmq6Z%2BPhMJ%2FxUz8htyIPiLkx3Jd4lNgk6y7QKHfAAG1m7uLaq7HIJAPC9KtHvp8RY2LnQHQZGXxbTP4vXs881c0ywbLkOs4ce%2F%2BF3WCNUN0uB%2B8ecctp1POPZGGerHFNr9IuWSPNKYCmq47fFquzdP%2F0TjpYTfe%2Fr536wNztfHVpIKVK3SRVb2cfQ6jfgnGttHNikbQ440vyYFtJUhkqwQEDwSB%2FPNe7I1ut2RnGjVapjDP%2Btq%2FBjqkAQzQ42JvBVVjzRv2sn61podHQgEvfUGld5CIbmrnraRYv3WSa69%2BvIhnmPoBqnN9DNbvj28tzzOW7f8%2BKGXeWXKVzmk0CWMbcpjlcLgLd%2BDH30atyz9hc3BnAnUBHPzUubMBvDypxihCuUnccoowUhUHtA4x%2FYOKpQfXxzbCwu%2F0Pf0KKzAJRB%2B7A7qclxInjmeM2hniCU1%2B4YwTLhDx53IQ5KrW&X-Amz-Signature=7c3fef0121aa57db5a1edc3ab5a051f20a82093d875eb832bf1701742b59b896&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2YFGI7%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDunV3JGBynVth8PIV%2Bt6AqItoEmeAZQvM%2BSx4ycb%2FIyAIhAPzlL1nv9i9JccnOiJuX8cIIHGMV4V8S6O1k5vkAXs8qKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydfVByTpCYpFTcgM0q3APhZXjAwnrkxyJylwsc19OTw3wi4f%2BXmFriJQccM7jt0R80k9PLhDcBjgblW9FpQBxIxC9aoPiifaeKemqNE8RFsfUUQCvM5xk%2BJ9MC3hwk0xCUXJmTOl4TlltEscf5gIdMbDhyY1VfBrdy3TOyeSfSdNzVCdWpbxwdfiBVA5OxqOz%2BzsY0YNd%2FWOrqhe9I5sq3vUxgQbPx8AVvjp%2BEDARW1ujXl1lApwNPTPrEveq2%2FxyQ%2Ffp1fE%2FXp0Gmf0hpW5zd%2FUyIsgYqViypcLknO7dMy2bmVtmQAvgTcmj%2BP0HThs6CnuJJR7al9n3gXahCKoHX1IOp1mHRZO%2BfNS8279ZfXVAwBJITMix1H2NqIK6%2FZeFJw6xsjHSahKpPNKnEp8hE1sqG4lq3QuYtdBmq6Z%2BPhMJ%2FxUz8htyIPiLkx3Jd4lNgk6y7QKHfAAG1m7uLaq7HIJAPC9KtHvp8RY2LnQHQZGXxbTP4vXs881c0ywbLkOs4ce%2F%2BF3WCNUN0uB%2B8ecctp1POPZGGerHFNr9IuWSPNKYCmq47fFquzdP%2F0TjpYTfe%2Fr536wNztfHVpIKVK3SRVb2cfQ6jfgnGttHNikbQ440vyYFtJUhkqwQEDwSB%2FPNe7I1ut2RnGjVapjDP%2Btq%2FBjqkAQzQ42JvBVVjzRv2sn61podHQgEvfUGld5CIbmrnraRYv3WSa69%2BvIhnmPoBqnN9DNbvj28tzzOW7f8%2BKGXeWXKVzmk0CWMbcpjlcLgLd%2BDH30atyz9hc3BnAnUBHPzUubMBvDypxihCuUnccoowUhUHtA4x%2FYOKpQfXxzbCwu%2F0Pf0KKzAJRB%2B7A7qclxInjmeM2hniCU1%2B4YwTLhDx53IQ5KrW&X-Amz-Signature=608683fa7a8c4f4be9f66bfee192e437b81392134a6e06e92e96326e3d98aa2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
