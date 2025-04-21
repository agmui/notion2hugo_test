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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIR7WL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCVzYYCEUz7mFZAEi54O6b1mTRhKNft1sTe8GfFUS0WrAIgI1mel%2FOVCcIGjw4zfsVBp6UHI6IcblX3yE2Mob7Iqs0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLhGb3Ha%2Bjs6Fj2%2FCrcA5XRXttu3Iocf4sgnFPFvuVDQ%2BnBYw3Kxy%2B4gt4QSB3b2AKnBB2LNHD7H5NLP9WrwmqwEbpNqJ7X4xv%2Bb04YIYEZ4rVxP%2B0lDs2coUKGG3NKE9C6gCf3cs7CztWTsV60C5CVa6KDH0sq%2Bh75mrQPqro8nHE9Z1n%2BTBm6cbx%2B7d5f6hHEO0tUX8sfEro%2FwQEL31hCrjSUZ7ZJaoicOS4uItfzBQzl%2BEblBR%2F0MvPeyQmhXHChEPo1vb882LvX2uRc0Kc9f0G1pECR5FmdWbKmJ0mOruBac9FboT6WlVmuJ3GoA7eitUddUbFmp2BZEKOFzhmqAzHbd2TNPX84iSkPZTRJL571WUytyhhL9%2FhQ01qwO3JjAfa5K0HppK41u2poO%2B3OyJrUMi4VYfnTKn0Hg6JkakTyltVk3kyJJlnQmeAYk2t%2F10A%2BIEyLN66d7M%2FJXsV%2BUrk8fpsbGgzI7bwm9YaQ71J1RLPl6x03L9xhZbthjoW66E%2Fh8Mcuof9Z4x%2FoqqtAYK5fp6jUwAJNO7cMeUlfcguCZHyYrDRRo75QES%2BC%2FYzoxDxOJ2go8%2BGthi%2BwVYVrBrSeyvRfc%2F7bSWX7gmZugm7A74G6ENxcG0YY8b3UP8H60z%2B8uPEJPuEPMKHTmsAGOqUB3jL9cF63vtyU9LMENTw%2FGqbSPW1DZ2lMbvVNDG31SgZoInS3beRA5MVcsm66T%2FAxm%2FxpYC%2FaOxz%2B4Z8P%2BRtflviJQ3HXZXTu%2FUc1ISDr8xhKu0D5rq59X6yNg%2BfDjeNIIyXdpTRqy5E6vUPo4du7guVZwfX%2F66xoP2hpjKhHctqroGd5RTOMxD6J%2FGbSvYMX1j7p9kAgOiPa0rDM%2B0hTC%2BRq4N6R&X-Amz-Signature=00f920f3d4776c396ab8de6e3d5f26f5c499aeb93def012bb7fbfc29c1ec940d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIR7WL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCVzYYCEUz7mFZAEi54O6b1mTRhKNft1sTe8GfFUS0WrAIgI1mel%2FOVCcIGjw4zfsVBp6UHI6IcblX3yE2Mob7Iqs0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLhGb3Ha%2Bjs6Fj2%2FCrcA5XRXttu3Iocf4sgnFPFvuVDQ%2BnBYw3Kxy%2B4gt4QSB3b2AKnBB2LNHD7H5NLP9WrwmqwEbpNqJ7X4xv%2Bb04YIYEZ4rVxP%2B0lDs2coUKGG3NKE9C6gCf3cs7CztWTsV60C5CVa6KDH0sq%2Bh75mrQPqro8nHE9Z1n%2BTBm6cbx%2B7d5f6hHEO0tUX8sfEro%2FwQEL31hCrjSUZ7ZJaoicOS4uItfzBQzl%2BEblBR%2F0MvPeyQmhXHChEPo1vb882LvX2uRc0Kc9f0G1pECR5FmdWbKmJ0mOruBac9FboT6WlVmuJ3GoA7eitUddUbFmp2BZEKOFzhmqAzHbd2TNPX84iSkPZTRJL571WUytyhhL9%2FhQ01qwO3JjAfa5K0HppK41u2poO%2B3OyJrUMi4VYfnTKn0Hg6JkakTyltVk3kyJJlnQmeAYk2t%2F10A%2BIEyLN66d7M%2FJXsV%2BUrk8fpsbGgzI7bwm9YaQ71J1RLPl6x03L9xhZbthjoW66E%2Fh8Mcuof9Z4x%2FoqqtAYK5fp6jUwAJNO7cMeUlfcguCZHyYrDRRo75QES%2BC%2FYzoxDxOJ2go8%2BGthi%2BwVYVrBrSeyvRfc%2F7bSWX7gmZugm7A74G6ENxcG0YY8b3UP8H60z%2B8uPEJPuEPMKHTmsAGOqUB3jL9cF63vtyU9LMENTw%2FGqbSPW1DZ2lMbvVNDG31SgZoInS3beRA5MVcsm66T%2FAxm%2FxpYC%2FaOxz%2B4Z8P%2BRtflviJQ3HXZXTu%2FUc1ISDr8xhKu0D5rq59X6yNg%2BfDjeNIIyXdpTRqy5E6vUPo4du7guVZwfX%2F66xoP2hpjKhHctqroGd5RTOMxD6J%2FGbSvYMX1j7p9kAgOiPa0rDM%2B0hTC%2BRq4N6R&X-Amz-Signature=8f7bbc88e77197aa588e77eeab6497f4e6b9954d4038e7b4bf6585c267e36569&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIR7WL3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCVzYYCEUz7mFZAEi54O6b1mTRhKNft1sTe8GfFUS0WrAIgI1mel%2FOVCcIGjw4zfsVBp6UHI6IcblX3yE2Mob7Iqs0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLhGb3Ha%2Bjs6Fj2%2FCrcA5XRXttu3Iocf4sgnFPFvuVDQ%2BnBYw3Kxy%2B4gt4QSB3b2AKnBB2LNHD7H5NLP9WrwmqwEbpNqJ7X4xv%2Bb04YIYEZ4rVxP%2B0lDs2coUKGG3NKE9C6gCf3cs7CztWTsV60C5CVa6KDH0sq%2Bh75mrQPqro8nHE9Z1n%2BTBm6cbx%2B7d5f6hHEO0tUX8sfEro%2FwQEL31hCrjSUZ7ZJaoicOS4uItfzBQzl%2BEblBR%2F0MvPeyQmhXHChEPo1vb882LvX2uRc0Kc9f0G1pECR5FmdWbKmJ0mOruBac9FboT6WlVmuJ3GoA7eitUddUbFmp2BZEKOFzhmqAzHbd2TNPX84iSkPZTRJL571WUytyhhL9%2FhQ01qwO3JjAfa5K0HppK41u2poO%2B3OyJrUMi4VYfnTKn0Hg6JkakTyltVk3kyJJlnQmeAYk2t%2F10A%2BIEyLN66d7M%2FJXsV%2BUrk8fpsbGgzI7bwm9YaQ71J1RLPl6x03L9xhZbthjoW66E%2Fh8Mcuof9Z4x%2FoqqtAYK5fp6jUwAJNO7cMeUlfcguCZHyYrDRRo75QES%2BC%2FYzoxDxOJ2go8%2BGthi%2BwVYVrBrSeyvRfc%2F7bSWX7gmZugm7A74G6ENxcG0YY8b3UP8H60z%2B8uPEJPuEPMKHTmsAGOqUB3jL9cF63vtyU9LMENTw%2FGqbSPW1DZ2lMbvVNDG31SgZoInS3beRA5MVcsm66T%2FAxm%2FxpYC%2FaOxz%2B4Z8P%2BRtflviJQ3HXZXTu%2FUc1ISDr8xhKu0D5rq59X6yNg%2BfDjeNIIyXdpTRqy5E6vUPo4du7guVZwfX%2F66xoP2hpjKhHctqroGd5RTOMxD6J%2FGbSvYMX1j7p9kAgOiPa0rDM%2B0hTC%2BRq4N6R&X-Amz-Signature=e0caea6a1c552bc51a6f5c2edf802f99decdf61977b6e191368bd8c4d8e476c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
