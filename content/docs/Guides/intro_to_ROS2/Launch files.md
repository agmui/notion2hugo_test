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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TPF6EY%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC8Y%2FTdor%2BssHjTHetX6xXk4qWMH4%2BrKSRvUkyDbskDFAIgMKVxXNSAT9%2FUcU7vVlK5iFnZgC3isstFfzC2Wf25N%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJ3zX2uehkdbTTPTSrcA1%2Bwbf8GlmTM8Iik40APczO9Zlda36JEJPx5tTorDHW2EQd3N6fxusDzlb8EQ1uhFxQqUWd8lRKIXrR51ETj26oqMWugENIQu%2BsTfoUjK0XuRJBWnYmt3pLC0Z6SVpndzyKqwoNV4CagAa3MTRQ%2FphTMsBuudprFuatwvckuTjX%2FiqP%2Bu9swyJ8OmGbsYWLh5P0crvpLdIr1JWDc%2Bz%2BHuWWh%2FFxKzEvCMUAFCVhDW0E%2FPkdbYE5WN7jjq8RIWN0RsYyIHuhzZwxb7bpSNI7RWGoki8h7oGcW%2BxFhDKIHPi7mUivrXSNMpZvTCNAHV5hJritfVBNV%2BH%2Fg26HCOEOz%2FRvZBlGUJBiPQZArWo2zK8sf4DWfwc7a2mdr61fcoGedUQFzqLg9i8ZS967RsfrgSiGUTeFvsUV6tJR%2FheerHA%2Fh5jSXTaf5bO5%2FB36qK0TucaxOXKJYD8oW%2FWRpaeJwFL0IEOijP2XG6zNoOF8zfdjwprUY75Hr7fAUfBtv3AevwR%2BS4RTkrtUDVyO1FTL%2FikuMfPuBkZZQzaomH81QI16iHt3R92qjHU3Kat3mPKWaKdEXhoBmrIlHVuK55u6Z6%2FJ2CiDZhW8c66JzsfWM3d0EN2ghRKFZf1pcmINNMI%2F7uL4GOqUBS3HLp9mKTYpzCcV5H0TcuZ%2FZD3dEN8CRWWeH47sAu%2Fjfe75YqE8U83qgutedkspj%2B4H60N4zjb2eM7rNmPpRv4gvynPWG9T3ivh17xws4oevadFScyw9BorDERR%2F%2BsuvlhE4sRsU7eJpGHP5Y6Q%2BA0SFaKOxK3alUPg2Ma3hky0HVfpbyH5eFjv4LsmY26TqJkfp3rnKGNpJJPs0NUiblklqfw0h&X-Amz-Signature=f69f153bd78e73c02ad2ac968b122c9dba752308abeed2c901543baf347cd5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TPF6EY%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC8Y%2FTdor%2BssHjTHetX6xXk4qWMH4%2BrKSRvUkyDbskDFAIgMKVxXNSAT9%2FUcU7vVlK5iFnZgC3isstFfzC2Wf25N%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJ3zX2uehkdbTTPTSrcA1%2Bwbf8GlmTM8Iik40APczO9Zlda36JEJPx5tTorDHW2EQd3N6fxusDzlb8EQ1uhFxQqUWd8lRKIXrR51ETj26oqMWugENIQu%2BsTfoUjK0XuRJBWnYmt3pLC0Z6SVpndzyKqwoNV4CagAa3MTRQ%2FphTMsBuudprFuatwvckuTjX%2FiqP%2Bu9swyJ8OmGbsYWLh5P0crvpLdIr1JWDc%2Bz%2BHuWWh%2FFxKzEvCMUAFCVhDW0E%2FPkdbYE5WN7jjq8RIWN0RsYyIHuhzZwxb7bpSNI7RWGoki8h7oGcW%2BxFhDKIHPi7mUivrXSNMpZvTCNAHV5hJritfVBNV%2BH%2Fg26HCOEOz%2FRvZBlGUJBiPQZArWo2zK8sf4DWfwc7a2mdr61fcoGedUQFzqLg9i8ZS967RsfrgSiGUTeFvsUV6tJR%2FheerHA%2Fh5jSXTaf5bO5%2FB36qK0TucaxOXKJYD8oW%2FWRpaeJwFL0IEOijP2XG6zNoOF8zfdjwprUY75Hr7fAUfBtv3AevwR%2BS4RTkrtUDVyO1FTL%2FikuMfPuBkZZQzaomH81QI16iHt3R92qjHU3Kat3mPKWaKdEXhoBmrIlHVuK55u6Z6%2FJ2CiDZhW8c66JzsfWM3d0EN2ghRKFZf1pcmINNMI%2F7uL4GOqUBS3HLp9mKTYpzCcV5H0TcuZ%2FZD3dEN8CRWWeH47sAu%2Fjfe75YqE8U83qgutedkspj%2B4H60N4zjb2eM7rNmPpRv4gvynPWG9T3ivh17xws4oevadFScyw9BorDERR%2F%2BsuvlhE4sRsU7eJpGHP5Y6Q%2BA0SFaKOxK3alUPg2Ma3hky0HVfpbyH5eFjv4LsmY26TqJkfp3rnKGNpJJPs0NUiblklqfw0h&X-Amz-Signature=2f6fea511c6c53471ce34aa6290f4810cffa7ea55c97ec1d111a9d3ed72e452f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TPF6EY%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC8Y%2FTdor%2BssHjTHetX6xXk4qWMH4%2BrKSRvUkyDbskDFAIgMKVxXNSAT9%2FUcU7vVlK5iFnZgC3isstFfzC2Wf25N%2FYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJ3zX2uehkdbTTPTSrcA1%2Bwbf8GlmTM8Iik40APczO9Zlda36JEJPx5tTorDHW2EQd3N6fxusDzlb8EQ1uhFxQqUWd8lRKIXrR51ETj26oqMWugENIQu%2BsTfoUjK0XuRJBWnYmt3pLC0Z6SVpndzyKqwoNV4CagAa3MTRQ%2FphTMsBuudprFuatwvckuTjX%2FiqP%2Bu9swyJ8OmGbsYWLh5P0crvpLdIr1JWDc%2Bz%2BHuWWh%2FFxKzEvCMUAFCVhDW0E%2FPkdbYE5WN7jjq8RIWN0RsYyIHuhzZwxb7bpSNI7RWGoki8h7oGcW%2BxFhDKIHPi7mUivrXSNMpZvTCNAHV5hJritfVBNV%2BH%2Fg26HCOEOz%2FRvZBlGUJBiPQZArWo2zK8sf4DWfwc7a2mdr61fcoGedUQFzqLg9i8ZS967RsfrgSiGUTeFvsUV6tJR%2FheerHA%2Fh5jSXTaf5bO5%2FB36qK0TucaxOXKJYD8oW%2FWRpaeJwFL0IEOijP2XG6zNoOF8zfdjwprUY75Hr7fAUfBtv3AevwR%2BS4RTkrtUDVyO1FTL%2FikuMfPuBkZZQzaomH81QI16iHt3R92qjHU3Kat3mPKWaKdEXhoBmrIlHVuK55u6Z6%2FJ2CiDZhW8c66JzsfWM3d0EN2ghRKFZf1pcmINNMI%2F7uL4GOqUBS3HLp9mKTYpzCcV5H0TcuZ%2FZD3dEN8CRWWeH47sAu%2Fjfe75YqE8U83qgutedkspj%2B4H60N4zjb2eM7rNmPpRv4gvynPWG9T3ivh17xws4oevadFScyw9BorDERR%2F%2BsuvlhE4sRsU7eJpGHP5Y6Q%2BA0SFaKOxK3alUPg2Ma3hky0HVfpbyH5eFjv4LsmY26TqJkfp3rnKGNpJJPs0NUiblklqfw0h&X-Amz-Signature=06d29257e4589b4f50196fa5e2c0b62b649fe55c98054f0d3478f7ccaa514880&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
