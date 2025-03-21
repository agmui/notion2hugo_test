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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOWCHGR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv1Ma%2FvL3tcoGBFz50hBk9EktYnlRi%2F7Bw%2BRWN5yUmAAIgYVjCo5wzhCRDyk12n8uCZtrH43D76aChjHq8US9v7b8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbSfs1WocU06pFRVircA1BQWIGpnKECgfX4hL1OnLvK5QKOse5xTOnuyY81d98t39NW34XWpCx9X4N7LWq%2B2CA2KOS4LK1iFmitvqzwok0wG8un3foFslST8yryGsfaOF6KKUNCz36nYeZftrweru5pFU5sCuwPVF0FkSk%2FVcbusW06%2FyVqNO%2FLKkWZzfCvkpQnKn%2BVKOuc06uRtga0Vdx%2FD49SDpwDXoFIbEn16aaKa5l%2F7GocM8fCizlnkw6ZBe9HtyMkd1VRapiv0rZB91oWM1XDOi1idPjnQQ88zXqcWmelDIXYFPUslkPOvPMbuNtxY89KALfgmpjykfhmn66pZ%2Fv3eqIgQSkidbV36n3V50I7kwTZxipDshv59l%2Fa6agcUf1aDZNH6wHAye7Apd0FLLhaTPImXEYzpRKiHSHkbZmaEMy%2FO5uEWpw6ISek6CjPU5bhMOfr8fzK3GpTNe0ZZvgA7O7Zf4pZuRhT5kCvVpbq29sxfaU60XxZ0QfRN9WXYRUgqCVqqX3K8q%2FVVtPaAUq9l38jzn4PDoTauBONAxBs0musqtudEZ4bLEvhcWZhN5k4mdF1fCEFvkM2ssM048hCbfUeFWmLCNVckLV7atIPT6ZDn9bIQmhminUciCNnppx%2BvjU8%2BCptMIr48r4GOqUBEZas16B%2FEqivTiriMwon%2Bcws0SDAV%2F5qp%2BSGBzp3VRRsTf5vIl0qNgEk8T417tlt%2FHe4gRAfxtdNZv8HctOKdGgVfPifZEL8lmo5G%2FiOG17EkWIWVFgbwPklTvFGJbsfu208OIg%2BLkJ6g8kyAuy5n%2Bg8AUqP%2FPxZVHaSVahYbnDswA7dl%2BjyumTkgKy1z4OFE15IRwtRK5aJ0jOvdz1HWpzwOdu7&X-Amz-Signature=402e0a0948a6078cc0239c1c0480dc1bc537e6d332500e61cd693c7e0ecc203e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOWCHGR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv1Ma%2FvL3tcoGBFz50hBk9EktYnlRi%2F7Bw%2BRWN5yUmAAIgYVjCo5wzhCRDyk12n8uCZtrH43D76aChjHq8US9v7b8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbSfs1WocU06pFRVircA1BQWIGpnKECgfX4hL1OnLvK5QKOse5xTOnuyY81d98t39NW34XWpCx9X4N7LWq%2B2CA2KOS4LK1iFmitvqzwok0wG8un3foFslST8yryGsfaOF6KKUNCz36nYeZftrweru5pFU5sCuwPVF0FkSk%2FVcbusW06%2FyVqNO%2FLKkWZzfCvkpQnKn%2BVKOuc06uRtga0Vdx%2FD49SDpwDXoFIbEn16aaKa5l%2F7GocM8fCizlnkw6ZBe9HtyMkd1VRapiv0rZB91oWM1XDOi1idPjnQQ88zXqcWmelDIXYFPUslkPOvPMbuNtxY89KALfgmpjykfhmn66pZ%2Fv3eqIgQSkidbV36n3V50I7kwTZxipDshv59l%2Fa6agcUf1aDZNH6wHAye7Apd0FLLhaTPImXEYzpRKiHSHkbZmaEMy%2FO5uEWpw6ISek6CjPU5bhMOfr8fzK3GpTNe0ZZvgA7O7Zf4pZuRhT5kCvVpbq29sxfaU60XxZ0QfRN9WXYRUgqCVqqX3K8q%2FVVtPaAUq9l38jzn4PDoTauBONAxBs0musqtudEZ4bLEvhcWZhN5k4mdF1fCEFvkM2ssM048hCbfUeFWmLCNVckLV7atIPT6ZDn9bIQmhminUciCNnppx%2BvjU8%2BCptMIr48r4GOqUBEZas16B%2FEqivTiriMwon%2Bcws0SDAV%2F5qp%2BSGBzp3VRRsTf5vIl0qNgEk8T417tlt%2FHe4gRAfxtdNZv8HctOKdGgVfPifZEL8lmo5G%2FiOG17EkWIWVFgbwPklTvFGJbsfu208OIg%2BLkJ6g8kyAuy5n%2Bg8AUqP%2FPxZVHaSVahYbnDswA7dl%2BjyumTkgKy1z4OFE15IRwtRK5aJ0jOvdz1HWpzwOdu7&X-Amz-Signature=a648148068c8da791a79012448930e5291dc5a7c170bf0fedb82a4609a23b1f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOWCHGR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDv1Ma%2FvL3tcoGBFz50hBk9EktYnlRi%2F7Bw%2BRWN5yUmAAIgYVjCo5wzhCRDyk12n8uCZtrH43D76aChjHq8US9v7b8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbSfs1WocU06pFRVircA1BQWIGpnKECgfX4hL1OnLvK5QKOse5xTOnuyY81d98t39NW34XWpCx9X4N7LWq%2B2CA2KOS4LK1iFmitvqzwok0wG8un3foFslST8yryGsfaOF6KKUNCz36nYeZftrweru5pFU5sCuwPVF0FkSk%2FVcbusW06%2FyVqNO%2FLKkWZzfCvkpQnKn%2BVKOuc06uRtga0Vdx%2FD49SDpwDXoFIbEn16aaKa5l%2F7GocM8fCizlnkw6ZBe9HtyMkd1VRapiv0rZB91oWM1XDOi1idPjnQQ88zXqcWmelDIXYFPUslkPOvPMbuNtxY89KALfgmpjykfhmn66pZ%2Fv3eqIgQSkidbV36n3V50I7kwTZxipDshv59l%2Fa6agcUf1aDZNH6wHAye7Apd0FLLhaTPImXEYzpRKiHSHkbZmaEMy%2FO5uEWpw6ISek6CjPU5bhMOfr8fzK3GpTNe0ZZvgA7O7Zf4pZuRhT5kCvVpbq29sxfaU60XxZ0QfRN9WXYRUgqCVqqX3K8q%2FVVtPaAUq9l38jzn4PDoTauBONAxBs0musqtudEZ4bLEvhcWZhN5k4mdF1fCEFvkM2ssM048hCbfUeFWmLCNVckLV7atIPT6ZDn9bIQmhminUciCNnppx%2BvjU8%2BCptMIr48r4GOqUBEZas16B%2FEqivTiriMwon%2Bcws0SDAV%2F5qp%2BSGBzp3VRRsTf5vIl0qNgEk8T417tlt%2FHe4gRAfxtdNZv8HctOKdGgVfPifZEL8lmo5G%2FiOG17EkWIWVFgbwPklTvFGJbsfu208OIg%2BLkJ6g8kyAuy5n%2Bg8AUqP%2FPxZVHaSVahYbnDswA7dl%2BjyumTkgKy1z4OFE15IRwtRK5aJ0jOvdz1HWpzwOdu7&X-Amz-Signature=c77c32d55b63d534734cff55599cd10a2b828a4ffcd6a7a49d2508bb505a3617&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
