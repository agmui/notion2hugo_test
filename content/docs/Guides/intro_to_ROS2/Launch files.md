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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKW3RQ7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICbsCol1dYlKoygLB03TSKdeu46tUU5qSN6siQT8ay56AiBHocNctqe78rUML0qaPHjhnP6CoFFn%2Fu3TTYQuw0TrKCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcavKOzCgM6amIaucKtwDtorelfjhh925b3PR6A5ISO5FAmoOwOcwHM2MJfyoYR1lebABXLQF4uo1yd%2FxsR126hEwo%2FEX1oQxyRb4yqTgGvKlE5N7DgCubvzC7wVeaxvIvreA5f%2Ff44QZdGGEQswneTImE18%2FmnKpCzhk4mTJQJcyLkvy%2FjhmNcsTw8qR7ZJrjVib9s2eHm%2BZNCxE2T1OYTQwddBk8mntQnZCcBtOIRVPMv%2BvaqgXPOFmj3xH2%2FT6yunZW3zbl2C88w8dwtmWoVRKmfVSthmuykSVNOUbH8xsFXnGZm%2Bp5BQvT%2BPIgOBSTxsFwTRzR2srB7oAXvs0guvAzmWJEa70aE7jw%2BBeZQ8MsUc0l%2BXmq02gBY0nWaGRLY8PhvTEQYa3wTFpLamVvYMLwaJ8hyrM5OcmkaNybdGIVoOwGGo1cf01gh8t4FP%2BVUnWmDByK5o3x1q2ljRjcSWQQAT%2FFsvLGMRU%2FTsLx43Xq6iwlUQsow3wfOCIh1k%2Bl4MelP7K0GDgcpmFEDmABf2g8cnbryypNctLLMZyVGRLC2zqxzDq9ynQgStlaU3MFOkyV1W7CUBrMnb3kESeSSdwIsk7p2HATRDuu92xxSaQ82loG52EhvEKtpBzxYvtlBhtaOrHj%2BQwJA4w78rpvwY6pgGgm8hGuKCjIt8mrtfC5XuZ2SmZnY4d%2F%2FjR76ifG%2FyiLHnhiB8ix7jVm13tdbpDH6uRZHRBnzvB5IzGrAArlKT21oEB39v9ce0yQ5txjqUohlESoetD66GJUDEoK4NIgdf1s5cBLCiaSZfPGWGfFZvsoGjfDTuRI5hFjAQtGTLC5l8ETDyD5m%2F7l%2FjM3KdRHUGslWGzfNjoZy7NXxDCU2DeBLK0%2Fpcg&X-Amz-Signature=07049898f7bcb2bcf1497666a246c1629e160a0b3b750f162d35a6b149df487c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKW3RQ7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICbsCol1dYlKoygLB03TSKdeu46tUU5qSN6siQT8ay56AiBHocNctqe78rUML0qaPHjhnP6CoFFn%2Fu3TTYQuw0TrKCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcavKOzCgM6amIaucKtwDtorelfjhh925b3PR6A5ISO5FAmoOwOcwHM2MJfyoYR1lebABXLQF4uo1yd%2FxsR126hEwo%2FEX1oQxyRb4yqTgGvKlE5N7DgCubvzC7wVeaxvIvreA5f%2Ff44QZdGGEQswneTImE18%2FmnKpCzhk4mTJQJcyLkvy%2FjhmNcsTw8qR7ZJrjVib9s2eHm%2BZNCxE2T1OYTQwddBk8mntQnZCcBtOIRVPMv%2BvaqgXPOFmj3xH2%2FT6yunZW3zbl2C88w8dwtmWoVRKmfVSthmuykSVNOUbH8xsFXnGZm%2Bp5BQvT%2BPIgOBSTxsFwTRzR2srB7oAXvs0guvAzmWJEa70aE7jw%2BBeZQ8MsUc0l%2BXmq02gBY0nWaGRLY8PhvTEQYa3wTFpLamVvYMLwaJ8hyrM5OcmkaNybdGIVoOwGGo1cf01gh8t4FP%2BVUnWmDByK5o3x1q2ljRjcSWQQAT%2FFsvLGMRU%2FTsLx43Xq6iwlUQsow3wfOCIh1k%2Bl4MelP7K0GDgcpmFEDmABf2g8cnbryypNctLLMZyVGRLC2zqxzDq9ynQgStlaU3MFOkyV1W7CUBrMnb3kESeSSdwIsk7p2HATRDuu92xxSaQ82loG52EhvEKtpBzxYvtlBhtaOrHj%2BQwJA4w78rpvwY6pgGgm8hGuKCjIt8mrtfC5XuZ2SmZnY4d%2F%2FjR76ifG%2FyiLHnhiB8ix7jVm13tdbpDH6uRZHRBnzvB5IzGrAArlKT21oEB39v9ce0yQ5txjqUohlESoetD66GJUDEoK4NIgdf1s5cBLCiaSZfPGWGfFZvsoGjfDTuRI5hFjAQtGTLC5l8ETDyD5m%2F7l%2FjM3KdRHUGslWGzfNjoZy7NXxDCU2DeBLK0%2Fpcg&X-Amz-Signature=c4ae5518898b122254190b9608e863b5ecb80fa2df39a0221f350bf621fd21d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKW3RQ7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICbsCol1dYlKoygLB03TSKdeu46tUU5qSN6siQT8ay56AiBHocNctqe78rUML0qaPHjhnP6CoFFn%2Fu3TTYQuw0TrKCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcavKOzCgM6amIaucKtwDtorelfjhh925b3PR6A5ISO5FAmoOwOcwHM2MJfyoYR1lebABXLQF4uo1yd%2FxsR126hEwo%2FEX1oQxyRb4yqTgGvKlE5N7DgCubvzC7wVeaxvIvreA5f%2Ff44QZdGGEQswneTImE18%2FmnKpCzhk4mTJQJcyLkvy%2FjhmNcsTw8qR7ZJrjVib9s2eHm%2BZNCxE2T1OYTQwddBk8mntQnZCcBtOIRVPMv%2BvaqgXPOFmj3xH2%2FT6yunZW3zbl2C88w8dwtmWoVRKmfVSthmuykSVNOUbH8xsFXnGZm%2Bp5BQvT%2BPIgOBSTxsFwTRzR2srB7oAXvs0guvAzmWJEa70aE7jw%2BBeZQ8MsUc0l%2BXmq02gBY0nWaGRLY8PhvTEQYa3wTFpLamVvYMLwaJ8hyrM5OcmkaNybdGIVoOwGGo1cf01gh8t4FP%2BVUnWmDByK5o3x1q2ljRjcSWQQAT%2FFsvLGMRU%2FTsLx43Xq6iwlUQsow3wfOCIh1k%2Bl4MelP7K0GDgcpmFEDmABf2g8cnbryypNctLLMZyVGRLC2zqxzDq9ynQgStlaU3MFOkyV1W7CUBrMnb3kESeSSdwIsk7p2HATRDuu92xxSaQ82loG52EhvEKtpBzxYvtlBhtaOrHj%2BQwJA4w78rpvwY6pgGgm8hGuKCjIt8mrtfC5XuZ2SmZnY4d%2F%2FjR76ifG%2FyiLHnhiB8ix7jVm13tdbpDH6uRZHRBnzvB5IzGrAArlKT21oEB39v9ce0yQ5txjqUohlESoetD66GJUDEoK4NIgdf1s5cBLCiaSZfPGWGfFZvsoGjfDTuRI5hFjAQtGTLC5l8ETDyD5m%2F7l%2FjM3KdRHUGslWGzfNjoZy7NXxDCU2DeBLK0%2Fpcg&X-Amz-Signature=3d3e5d10526aa038424341cd09c5b216a653726cda12c2f2fc15832cb86dc5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
