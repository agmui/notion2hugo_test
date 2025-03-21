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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJ7FJZF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGUf03E9mqrs%2BDGikK7NsaXuWhZZ5VfB8iJIFNi9orQYAiABYjKJJsjToSchP46jMYlB3X0bMw7zYSHjeDjbpeUMGSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg2Spzq0cKCzpcmd5KtwDu5iFMuXx1foHM6qNkAAxQWcOQExgSKBsybDxqh3Jaed2x5AbbHQyxMY8aytrRhZ4wQb0jW%2FZAIhArRwbKxQVEw%2FzCJgL9AbPXQ9Dbig%2FLOhRvHLOvAQ2jcodDUb796jy0ht5dJExPmws2%2B%2F9qT9iJqAkKZMc5ONOdpbwl2hBD7%2F4ztA9StsKqvgLOEwgjLMCEiNGGI1r9ezciwd46Q648UI%2Fb8OPi8gL9lwXw6tKIoqMReORq2bOhGy5HP2dQq8%2Bc%2BwmLEj%2B94mVfSgRcM8DKloQZmxPL2QrxtpXpT9VYLfOGf00mVkLcKyh2LWZkMOoOGjV%2BOFH8HHzKCASpIteDqn3%2BZadFQgw%2F%2FG6zPstphflvZ%2FXt2jUm9bnJdfl79xLpFM%2FCMjYr3bgWfFHZlOBcZmSdLr%2BxePTDKToK2%2FxNJdsFVlBy56EC1hQASOXrdC1W%2F3FsktsxKIxhY6JE4MZWq%2FtpA6Uk7mDf9z9jegCwmmu%2FIF6pZrqb9zis6fPVn5E2baBisOH0hXfAYHMNrnXCppDEXcVnORgbceUpaLjR%2FUkQ3iAdtCmTrORii4GFm3Ru8i6KlBtN4D2DuF00DN5ez7ydmal3Yu%2B0ILYx6kSdDmIhVG%2BQNdQz9FtPNAwubnzvgY6pgEGcWoZ7PXOkVwLAoun7vc3TJ3JTvalbCC1c5k4iR8bPtOa7dZkpLpbYqI9tpRbTmVhYpTTJkbdtupfebMD42kPUh3yXhGuJV81BkMU5QUSPliAk4Wb8mtnqAfemMmPtWE7DSv4i6k4NYOd9KQBqGtIp0x0H2kt6Oh49XWJLanSaQpAVHOJgEuplbd%2FWQT2n7qYvY8Tc1ooCBfPXPlsBekYAr1w7Tay&X-Amz-Signature=ed36d6be20c5e14aed9bb427f9dcea02d5bec72d7c3725a99f958919f4103d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJ7FJZF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGUf03E9mqrs%2BDGikK7NsaXuWhZZ5VfB8iJIFNi9orQYAiABYjKJJsjToSchP46jMYlB3X0bMw7zYSHjeDjbpeUMGSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg2Spzq0cKCzpcmd5KtwDu5iFMuXx1foHM6qNkAAxQWcOQExgSKBsybDxqh3Jaed2x5AbbHQyxMY8aytrRhZ4wQb0jW%2FZAIhArRwbKxQVEw%2FzCJgL9AbPXQ9Dbig%2FLOhRvHLOvAQ2jcodDUb796jy0ht5dJExPmws2%2B%2F9qT9iJqAkKZMc5ONOdpbwl2hBD7%2F4ztA9StsKqvgLOEwgjLMCEiNGGI1r9ezciwd46Q648UI%2Fb8OPi8gL9lwXw6tKIoqMReORq2bOhGy5HP2dQq8%2Bc%2BwmLEj%2B94mVfSgRcM8DKloQZmxPL2QrxtpXpT9VYLfOGf00mVkLcKyh2LWZkMOoOGjV%2BOFH8HHzKCASpIteDqn3%2BZadFQgw%2F%2FG6zPstphflvZ%2FXt2jUm9bnJdfl79xLpFM%2FCMjYr3bgWfFHZlOBcZmSdLr%2BxePTDKToK2%2FxNJdsFVlBy56EC1hQASOXrdC1W%2F3FsktsxKIxhY6JE4MZWq%2FtpA6Uk7mDf9z9jegCwmmu%2FIF6pZrqb9zis6fPVn5E2baBisOH0hXfAYHMNrnXCppDEXcVnORgbceUpaLjR%2FUkQ3iAdtCmTrORii4GFm3Ru8i6KlBtN4D2DuF00DN5ez7ydmal3Yu%2B0ILYx6kSdDmIhVG%2BQNdQz9FtPNAwubnzvgY6pgEGcWoZ7PXOkVwLAoun7vc3TJ3JTvalbCC1c5k4iR8bPtOa7dZkpLpbYqI9tpRbTmVhYpTTJkbdtupfebMD42kPUh3yXhGuJV81BkMU5QUSPliAk4Wb8mtnqAfemMmPtWE7DSv4i6k4NYOd9KQBqGtIp0x0H2kt6Oh49XWJLanSaQpAVHOJgEuplbd%2FWQT2n7qYvY8Tc1ooCBfPXPlsBekYAr1w7Tay&X-Amz-Signature=23fa1a72ab2c3f452b8e8cbd01c948e39ebfc467aa795612c480e6c9d69edf85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJ7FJZF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGUf03E9mqrs%2BDGikK7NsaXuWhZZ5VfB8iJIFNi9orQYAiABYjKJJsjToSchP46jMYlB3X0bMw7zYSHjeDjbpeUMGSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg2Spzq0cKCzpcmd5KtwDu5iFMuXx1foHM6qNkAAxQWcOQExgSKBsybDxqh3Jaed2x5AbbHQyxMY8aytrRhZ4wQb0jW%2FZAIhArRwbKxQVEw%2FzCJgL9AbPXQ9Dbig%2FLOhRvHLOvAQ2jcodDUb796jy0ht5dJExPmws2%2B%2F9qT9iJqAkKZMc5ONOdpbwl2hBD7%2F4ztA9StsKqvgLOEwgjLMCEiNGGI1r9ezciwd46Q648UI%2Fb8OPi8gL9lwXw6tKIoqMReORq2bOhGy5HP2dQq8%2Bc%2BwmLEj%2B94mVfSgRcM8DKloQZmxPL2QrxtpXpT9VYLfOGf00mVkLcKyh2LWZkMOoOGjV%2BOFH8HHzKCASpIteDqn3%2BZadFQgw%2F%2FG6zPstphflvZ%2FXt2jUm9bnJdfl79xLpFM%2FCMjYr3bgWfFHZlOBcZmSdLr%2BxePTDKToK2%2FxNJdsFVlBy56EC1hQASOXrdC1W%2F3FsktsxKIxhY6JE4MZWq%2FtpA6Uk7mDf9z9jegCwmmu%2FIF6pZrqb9zis6fPVn5E2baBisOH0hXfAYHMNrnXCppDEXcVnORgbceUpaLjR%2FUkQ3iAdtCmTrORii4GFm3Ru8i6KlBtN4D2DuF00DN5ez7ydmal3Yu%2B0ILYx6kSdDmIhVG%2BQNdQz9FtPNAwubnzvgY6pgEGcWoZ7PXOkVwLAoun7vc3TJ3JTvalbCC1c5k4iR8bPtOa7dZkpLpbYqI9tpRbTmVhYpTTJkbdtupfebMD42kPUh3yXhGuJV81BkMU5QUSPliAk4Wb8mtnqAfemMmPtWE7DSv4i6k4NYOd9KQBqGtIp0x0H2kt6Oh49XWJLanSaQpAVHOJgEuplbd%2FWQT2n7qYvY8Tc1ooCBfPXPlsBekYAr1w7Tay&X-Amz-Signature=f4ec07e9d5eb4085b4b4e0f87d188349b00b8e67eb506c6e8609aa16c7e132f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
