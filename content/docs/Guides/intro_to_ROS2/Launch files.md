---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTUDRNS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmr5T1RpxJSDZggsdi%2FGR8cDLLYC0gjwUOnetZ9A06%2FAiBZGrMxS%2FW%2Ba7ffs0vuDxqt3hnDdWFB5kvuzhgYpEAQGyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhNxtgFPXwTWGB%2FuKtwDLNBZgd8F4xoOp6IIeTv1SDSDYk%2B2ufA5Z%2FEsNH0icIJiLNfxI%2B%2BILeGSjEG0xlXxCdfaRC5jegIoi8TjimeL0LWAPnq3%2BkesuClFzY1bLZA9ouENv%2BtxsZIfaNEZ0sDK5pzgacktvSTfOh9WkeK4EudAgYc1x4BAKMDd0a5SObfVG1nBPwLqv%2FzfjZFLM%2F317PeyuZ4sNO3WOKFdIIetJPjY%2B02vqTe8LrZduMF1fKnqc6%2BCP93jlmDKAtfi5t9XqagAPhlX2dnmKgQgDtMJYprNChQBWQPcbqU1I1%2FZmfpe6WGH1ejN3QibHkge7aJxR84ANykM6o%2BC%2FUvMMvMYQ6HTngsnAoU%2BgwYKQU45U0ckp6NJb1hklDbYjNoNWlOxzXHELspTuKhbFULW7dKYt8D6Dh1vqPT2YLmkeiwnn6tSaGwtj7AO0svouE5WPaYVQFTpkkfYmhyVps%2FHxQN16lXyV%2F2ZSMYu7gNM13Sa6S5g1TK5RK3aAefLDYwbkCG1sltZc9K3JE6cFNXMeydZh7hJCXSrsKYTKvitlu02y%2F%2BuAMz%2FMITFcSvSonAZ0AY683xb0iEybsfIn3SROvGrDw9eTb2VXRPVX5fTHPoswVxHoX%2FG2SFrO8UGHigwvtqmxAY6pgFIUjRXSrCdg1J2lbjXVjfU0%2B2S48T0f8yTTNLsAprbMR1OrOWwjlEHv%2BT7i2BvWR5x0kW%2Fh3LXUPQsfH6lnUgohfFmh9nt1sEU58%2BUvc6Ub5IWQ%2FxDwxUGvmoFZzf78JyvvJN0wvWTb5cKmbT%2FBbF7czQ5L7pihOCm10Z69vZgiYPCkPwLAHMO1RgfimvmeeDlF2kCV9tV0uooAA3a3ECa4kHpd11a&X-Amz-Signature=6520c1915aca21982596d5f1ee6596ba71bcf4abd35c0face88330d20d1ca9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTUDRNS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmr5T1RpxJSDZggsdi%2FGR8cDLLYC0gjwUOnetZ9A06%2FAiBZGrMxS%2FW%2Ba7ffs0vuDxqt3hnDdWFB5kvuzhgYpEAQGyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhNxtgFPXwTWGB%2FuKtwDLNBZgd8F4xoOp6IIeTv1SDSDYk%2B2ufA5Z%2FEsNH0icIJiLNfxI%2B%2BILeGSjEG0xlXxCdfaRC5jegIoi8TjimeL0LWAPnq3%2BkesuClFzY1bLZA9ouENv%2BtxsZIfaNEZ0sDK5pzgacktvSTfOh9WkeK4EudAgYc1x4BAKMDd0a5SObfVG1nBPwLqv%2FzfjZFLM%2F317PeyuZ4sNO3WOKFdIIetJPjY%2B02vqTe8LrZduMF1fKnqc6%2BCP93jlmDKAtfi5t9XqagAPhlX2dnmKgQgDtMJYprNChQBWQPcbqU1I1%2FZmfpe6WGH1ejN3QibHkge7aJxR84ANykM6o%2BC%2FUvMMvMYQ6HTngsnAoU%2BgwYKQU45U0ckp6NJb1hklDbYjNoNWlOxzXHELspTuKhbFULW7dKYt8D6Dh1vqPT2YLmkeiwnn6tSaGwtj7AO0svouE5WPaYVQFTpkkfYmhyVps%2FHxQN16lXyV%2F2ZSMYu7gNM13Sa6S5g1TK5RK3aAefLDYwbkCG1sltZc9K3JE6cFNXMeydZh7hJCXSrsKYTKvitlu02y%2F%2BuAMz%2FMITFcSvSonAZ0AY683xb0iEybsfIn3SROvGrDw9eTb2VXRPVX5fTHPoswVxHoX%2FG2SFrO8UGHigwvtqmxAY6pgFIUjRXSrCdg1J2lbjXVjfU0%2B2S48T0f8yTTNLsAprbMR1OrOWwjlEHv%2BT7i2BvWR5x0kW%2Fh3LXUPQsfH6lnUgohfFmh9nt1sEU58%2BUvc6Ub5IWQ%2FxDwxUGvmoFZzf78JyvvJN0wvWTb5cKmbT%2FBbF7czQ5L7pihOCm10Z69vZgiYPCkPwLAHMO1RgfimvmeeDlF2kCV9tV0uooAA3a3ECa4kHpd11a&X-Amz-Signature=7027536da5e19faca04f81343a700d3223713e4c173aa7954ca06308c19229dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTUDRNS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmr5T1RpxJSDZggsdi%2FGR8cDLLYC0gjwUOnetZ9A06%2FAiBZGrMxS%2FW%2Ba7ffs0vuDxqt3hnDdWFB5kvuzhgYpEAQGyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhNxtgFPXwTWGB%2FuKtwDLNBZgd8F4xoOp6IIeTv1SDSDYk%2B2ufA5Z%2FEsNH0icIJiLNfxI%2B%2BILeGSjEG0xlXxCdfaRC5jegIoi8TjimeL0LWAPnq3%2BkesuClFzY1bLZA9ouENv%2BtxsZIfaNEZ0sDK5pzgacktvSTfOh9WkeK4EudAgYc1x4BAKMDd0a5SObfVG1nBPwLqv%2FzfjZFLM%2F317PeyuZ4sNO3WOKFdIIetJPjY%2B02vqTe8LrZduMF1fKnqc6%2BCP93jlmDKAtfi5t9XqagAPhlX2dnmKgQgDtMJYprNChQBWQPcbqU1I1%2FZmfpe6WGH1ejN3QibHkge7aJxR84ANykM6o%2BC%2FUvMMvMYQ6HTngsnAoU%2BgwYKQU45U0ckp6NJb1hklDbYjNoNWlOxzXHELspTuKhbFULW7dKYt8D6Dh1vqPT2YLmkeiwnn6tSaGwtj7AO0svouE5WPaYVQFTpkkfYmhyVps%2FHxQN16lXyV%2F2ZSMYu7gNM13Sa6S5g1TK5RK3aAefLDYwbkCG1sltZc9K3JE6cFNXMeydZh7hJCXSrsKYTKvitlu02y%2F%2BuAMz%2FMITFcSvSonAZ0AY683xb0iEybsfIn3SROvGrDw9eTb2VXRPVX5fTHPoswVxHoX%2FG2SFrO8UGHigwvtqmxAY6pgFIUjRXSrCdg1J2lbjXVjfU0%2B2S48T0f8yTTNLsAprbMR1OrOWwjlEHv%2BT7i2BvWR5x0kW%2Fh3LXUPQsfH6lnUgohfFmh9nt1sEU58%2BUvc6Ub5IWQ%2FxDwxUGvmoFZzf78JyvvJN0wvWTb5cKmbT%2FBbF7czQ5L7pihOCm10Z69vZgiYPCkPwLAHMO1RgfimvmeeDlF2kCV9tV0uooAA3a3ECa4kHpd11a&X-Amz-Signature=adfd4bbdef202ae1df88cbc6f8e0434ea34ac6f172e9a3281fcd67b250517b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
