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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHODCF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU8yf%2FRq9BDAu1s4reLZncyrwq5QBlDl9zzQ%2FIhmuImAiAy7fFABxmX3UeXX6ypHa3YIygi%2BFx0Br2YLHlC5tgyZyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBtN9M2QZuc0Jb7PWKtwD9bJ%2Fbm1cI0luqjx09lmouS%2BBIYBChOxImUvfZ7DFyNyBcwOgDX3boRhXs1ViVzahDyxMQs4%2FREnIcQx%2BquWhaneJJHo3r5aQmMyesTThKE6dzOu3Q0Bp0rdt1011Sh1aspNQKwjQEyZgBVBXYlMEXx4hJjf1RzOC2vYYKYZ25hV4Nyr1wBs%2BKZjzhIXuY0qLpqaw59lzcMfQPFx%2Bzaqin0z86TB7GNYdD%2Bx7lwo0WG22FXUP7z4obEFsn07l9p9cF0qvyEP9hlSIBdhOk%2FAKFUJzU71e0Uzwpf3dfGwX834rvtvcMAhEn7hTiNmedpnXVIHPuKJGqzxFR53hld47Ru49q5X6SdMsJHS55sVm49JzVIS%2BabtdqMWbf7%2BDDRVwDSPtxZsKyI8eNI95H0dHy0uK%2FEZC02%2B4sUD1J0cUdOTHRGO6hG5YviHzrFD%2BKB8aqa5UUDhfBPxSlwfyYsUfqEYRpShp7tvvG26LO2RYtkn6cF%2FW%2B8aPrOJb2hMD2zhnacoREJYAcbd5%2FofK1elf3koatGDcMGpV1fzOi8MbBHOKLnLbZEpsQpcGM9eNhFrYp9eKTgxRuKr93NJG4ab6StnTDBN%2Bo1Dwlssmmsy3jm5z3B%2BDPU2D63sp%2B3Aw5pOuwQY6pgH0v2sLZr%2BN0MmFHJd5akuVKm8%2Fon7pL%2FfJCrsL38uiPoJqSBAKD31nIZEYipzyULSGCdDotTnQh3Kc9kpKraDQjkHtR3EUn1nHzowgzl%2F2HNqUae4dLjZa%2F2RsHAxyOxRhb8LH8kgUHme%2FDfcHH7ZY2F7aSDS19bwK3FhuS1wdcjMJiK6xOpSat0xC3TqwkALGf8wUcepMoCCCVmi88qjFs%2Bsf5%2F3p&X-Amz-Signature=87f06784b7622a8f8253efea1836fd6a25b6447a0b31cd01f437fc74e3956272&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHODCF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU8yf%2FRq9BDAu1s4reLZncyrwq5QBlDl9zzQ%2FIhmuImAiAy7fFABxmX3UeXX6ypHa3YIygi%2BFx0Br2YLHlC5tgyZyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBtN9M2QZuc0Jb7PWKtwD9bJ%2Fbm1cI0luqjx09lmouS%2BBIYBChOxImUvfZ7DFyNyBcwOgDX3boRhXs1ViVzahDyxMQs4%2FREnIcQx%2BquWhaneJJHo3r5aQmMyesTThKE6dzOu3Q0Bp0rdt1011Sh1aspNQKwjQEyZgBVBXYlMEXx4hJjf1RzOC2vYYKYZ25hV4Nyr1wBs%2BKZjzhIXuY0qLpqaw59lzcMfQPFx%2Bzaqin0z86TB7GNYdD%2Bx7lwo0WG22FXUP7z4obEFsn07l9p9cF0qvyEP9hlSIBdhOk%2FAKFUJzU71e0Uzwpf3dfGwX834rvtvcMAhEn7hTiNmedpnXVIHPuKJGqzxFR53hld47Ru49q5X6SdMsJHS55sVm49JzVIS%2BabtdqMWbf7%2BDDRVwDSPtxZsKyI8eNI95H0dHy0uK%2FEZC02%2B4sUD1J0cUdOTHRGO6hG5YviHzrFD%2BKB8aqa5UUDhfBPxSlwfyYsUfqEYRpShp7tvvG26LO2RYtkn6cF%2FW%2B8aPrOJb2hMD2zhnacoREJYAcbd5%2FofK1elf3koatGDcMGpV1fzOi8MbBHOKLnLbZEpsQpcGM9eNhFrYp9eKTgxRuKr93NJG4ab6StnTDBN%2Bo1Dwlssmmsy3jm5z3B%2BDPU2D63sp%2B3Aw5pOuwQY6pgH0v2sLZr%2BN0MmFHJd5akuVKm8%2Fon7pL%2FfJCrsL38uiPoJqSBAKD31nIZEYipzyULSGCdDotTnQh3Kc9kpKraDQjkHtR3EUn1nHzowgzl%2F2HNqUae4dLjZa%2F2RsHAxyOxRhb8LH8kgUHme%2FDfcHH7ZY2F7aSDS19bwK3FhuS1wdcjMJiK6xOpSat0xC3TqwkALGf8wUcepMoCCCVmi88qjFs%2Bsf5%2F3p&X-Amz-Signature=91f6ca35d091d380483449e4c7c1bc468c9a6a107d8adcba87ea77cf41885578&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SMHODCF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEU8yf%2FRq9BDAu1s4reLZncyrwq5QBlDl9zzQ%2FIhmuImAiAy7fFABxmX3UeXX6ypHa3YIygi%2BFx0Br2YLHlC5tgyZyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBtN9M2QZuc0Jb7PWKtwD9bJ%2Fbm1cI0luqjx09lmouS%2BBIYBChOxImUvfZ7DFyNyBcwOgDX3boRhXs1ViVzahDyxMQs4%2FREnIcQx%2BquWhaneJJHo3r5aQmMyesTThKE6dzOu3Q0Bp0rdt1011Sh1aspNQKwjQEyZgBVBXYlMEXx4hJjf1RzOC2vYYKYZ25hV4Nyr1wBs%2BKZjzhIXuY0qLpqaw59lzcMfQPFx%2Bzaqin0z86TB7GNYdD%2Bx7lwo0WG22FXUP7z4obEFsn07l9p9cF0qvyEP9hlSIBdhOk%2FAKFUJzU71e0Uzwpf3dfGwX834rvtvcMAhEn7hTiNmedpnXVIHPuKJGqzxFR53hld47Ru49q5X6SdMsJHS55sVm49JzVIS%2BabtdqMWbf7%2BDDRVwDSPtxZsKyI8eNI95H0dHy0uK%2FEZC02%2B4sUD1J0cUdOTHRGO6hG5YviHzrFD%2BKB8aqa5UUDhfBPxSlwfyYsUfqEYRpShp7tvvG26LO2RYtkn6cF%2FW%2B8aPrOJb2hMD2zhnacoREJYAcbd5%2FofK1elf3koatGDcMGpV1fzOi8MbBHOKLnLbZEpsQpcGM9eNhFrYp9eKTgxRuKr93NJG4ab6StnTDBN%2Bo1Dwlssmmsy3jm5z3B%2BDPU2D63sp%2B3Aw5pOuwQY6pgH0v2sLZr%2BN0MmFHJd5akuVKm8%2Fon7pL%2FfJCrsL38uiPoJqSBAKD31nIZEYipzyULSGCdDotTnQh3Kc9kpKraDQjkHtR3EUn1nHzowgzl%2F2HNqUae4dLjZa%2F2RsHAxyOxRhb8LH8kgUHme%2FDfcHH7ZY2F7aSDS19bwK3FhuS1wdcjMJiK6xOpSat0xC3TqwkALGf8wUcepMoCCCVmi88qjFs%2Bsf5%2F3p&X-Amz-Signature=12abf8d710bcd5e5b5a6f88c0dcb7cfdfa5a5b19d3f6bf9175c8210061927f18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
