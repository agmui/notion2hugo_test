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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXU3DN2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGNopQXudOhq6SQ5J5aHkUaz0DRoaiNnzU6roVBrWz6AiEA4v9%2F4ARf2a880i2dWFah1VGyMjxbbpEVGLU0%2BtMkSHUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI9IIRVB54rGXvnVMCrcA4dvH17MzgaPgX4lnfCX1OxR2qGynv5dCpHyWr6jsK%2BwH%2B9VmOHqkGFKvxaCY0MwW4rGeBLVuDPvgUYWhCLKqxyvooO3NW8fjRiqNVmBPQcKuIQyFRWPJEnFLc6lGmJu0AS5m0JM9RRtBl0IVTyF%2F2fpsWBEyz5rg992pEQCB%2BsE4ebZ5Vqdzq2EnDjF0VlSb%2BgMj%2FqS2nxHEv9edjPPnb9UDQeEFIWbfGWkbq%2BV%2FjYQ04BXr%2F7kM%2F0%2Bl3tglv0PQe5Tw7wmDL%2FAl7wMPKoyE1I9RKNhcjelduIYuxG7S8oq9ANYEQJ0Ww8Hq2iKjdgoQY4lVtPkPL2zgkQOUEb9tg7ePXzaXx4G3Ht2IJtSYMKsAxgOXrbZ0u0SEJuhCLRkni7CrSnAz0ZrQkN45eONWMXEoPXAJochdlPforgnwPKqoA7fI3GwZLzzjXNOXIb2T1et0i19C9HM14zwg009%2FiZCs92Kk3ScFI%2FaXBJ2vY9uJD5flb5fu9DrArNAlIrIeGe9X%2F3gGHJNZLBdLjvGkYz41vQDcRZREP%2BIuDN0x3Bvpj4DuRqNcDiC0arFM6G%2BnLwIW6B0tAmTW4cHYHQ%2FF467q%2BYRjUwzvDyYkzdGfxoRSq%2BqiDD0d1RD6CNVMODBw8IGOqUB3iZRNvT2w%2BGj0a%2FAo4Cq7GZ8w3nh4qUi2qV9KngXsNt6Q2HCLYTHm%2Fz0HNb0wbHFLGy44jsvXDVU84wG4Yz0z9y4tJAxdh1uEiC%2Bo4zq%2FDnWa%2F4MWRmVPF5tmZraeDhkdnWfVcQs9Jw%2FYpEOIT2lstcZ0zf0VsHr%2BqFaX%2B503NdUOTTD6FOoOZwIN1aKSzwpYJsSNcCFlyCBy%2BODuGl0moMj6wSK&X-Amz-Signature=a9f47caa0817403d706b0f3af3f08c4238a552f82b2e336a233599d4d02ca9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXU3DN2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGNopQXudOhq6SQ5J5aHkUaz0DRoaiNnzU6roVBrWz6AiEA4v9%2F4ARf2a880i2dWFah1VGyMjxbbpEVGLU0%2BtMkSHUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI9IIRVB54rGXvnVMCrcA4dvH17MzgaPgX4lnfCX1OxR2qGynv5dCpHyWr6jsK%2BwH%2B9VmOHqkGFKvxaCY0MwW4rGeBLVuDPvgUYWhCLKqxyvooO3NW8fjRiqNVmBPQcKuIQyFRWPJEnFLc6lGmJu0AS5m0JM9RRtBl0IVTyF%2F2fpsWBEyz5rg992pEQCB%2BsE4ebZ5Vqdzq2EnDjF0VlSb%2BgMj%2FqS2nxHEv9edjPPnb9UDQeEFIWbfGWkbq%2BV%2FjYQ04BXr%2F7kM%2F0%2Bl3tglv0PQe5Tw7wmDL%2FAl7wMPKoyE1I9RKNhcjelduIYuxG7S8oq9ANYEQJ0Ww8Hq2iKjdgoQY4lVtPkPL2zgkQOUEb9tg7ePXzaXx4G3Ht2IJtSYMKsAxgOXrbZ0u0SEJuhCLRkni7CrSnAz0ZrQkN45eONWMXEoPXAJochdlPforgnwPKqoA7fI3GwZLzzjXNOXIb2T1et0i19C9HM14zwg009%2FiZCs92Kk3ScFI%2FaXBJ2vY9uJD5flb5fu9DrArNAlIrIeGe9X%2F3gGHJNZLBdLjvGkYz41vQDcRZREP%2BIuDN0x3Bvpj4DuRqNcDiC0arFM6G%2BnLwIW6B0tAmTW4cHYHQ%2FF467q%2BYRjUwzvDyYkzdGfxoRSq%2BqiDD0d1RD6CNVMODBw8IGOqUB3iZRNvT2w%2BGj0a%2FAo4Cq7GZ8w3nh4qUi2qV9KngXsNt6Q2HCLYTHm%2Fz0HNb0wbHFLGy44jsvXDVU84wG4Yz0z9y4tJAxdh1uEiC%2Bo4zq%2FDnWa%2F4MWRmVPF5tmZraeDhkdnWfVcQs9Jw%2FYpEOIT2lstcZ0zf0VsHr%2BqFaX%2B503NdUOTTD6FOoOZwIN1aKSzwpYJsSNcCFlyCBy%2BODuGl0moMj6wSK&X-Amz-Signature=91157e004a9c76be0d0b1d5dc9f3e7ab96f7fdf40e91c20724240e550b5e732d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXU3DN2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGNopQXudOhq6SQ5J5aHkUaz0DRoaiNnzU6roVBrWz6AiEA4v9%2F4ARf2a880i2dWFah1VGyMjxbbpEVGLU0%2BtMkSHUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI9IIRVB54rGXvnVMCrcA4dvH17MzgaPgX4lnfCX1OxR2qGynv5dCpHyWr6jsK%2BwH%2B9VmOHqkGFKvxaCY0MwW4rGeBLVuDPvgUYWhCLKqxyvooO3NW8fjRiqNVmBPQcKuIQyFRWPJEnFLc6lGmJu0AS5m0JM9RRtBl0IVTyF%2F2fpsWBEyz5rg992pEQCB%2BsE4ebZ5Vqdzq2EnDjF0VlSb%2BgMj%2FqS2nxHEv9edjPPnb9UDQeEFIWbfGWkbq%2BV%2FjYQ04BXr%2F7kM%2F0%2Bl3tglv0PQe5Tw7wmDL%2FAl7wMPKoyE1I9RKNhcjelduIYuxG7S8oq9ANYEQJ0Ww8Hq2iKjdgoQY4lVtPkPL2zgkQOUEb9tg7ePXzaXx4G3Ht2IJtSYMKsAxgOXrbZ0u0SEJuhCLRkni7CrSnAz0ZrQkN45eONWMXEoPXAJochdlPforgnwPKqoA7fI3GwZLzzjXNOXIb2T1et0i19C9HM14zwg009%2FiZCs92Kk3ScFI%2FaXBJ2vY9uJD5flb5fu9DrArNAlIrIeGe9X%2F3gGHJNZLBdLjvGkYz41vQDcRZREP%2BIuDN0x3Bvpj4DuRqNcDiC0arFM6G%2BnLwIW6B0tAmTW4cHYHQ%2FF467q%2BYRjUwzvDyYkzdGfxoRSq%2BqiDD0d1RD6CNVMODBw8IGOqUB3iZRNvT2w%2BGj0a%2FAo4Cq7GZ8w3nh4qUi2qV9KngXsNt6Q2HCLYTHm%2Fz0HNb0wbHFLGy44jsvXDVU84wG4Yz0z9y4tJAxdh1uEiC%2Bo4zq%2FDnWa%2F4MWRmVPF5tmZraeDhkdnWfVcQs9Jw%2FYpEOIT2lstcZ0zf0VsHr%2BqFaX%2B503NdUOTTD6FOoOZwIN1aKSzwpYJsSNcCFlyCBy%2BODuGl0moMj6wSK&X-Amz-Signature=aa89277a5181b7ed8b72bb3c3a6b116c63db40f710e5f2933e22d0d412007b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
