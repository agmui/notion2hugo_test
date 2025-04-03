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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422V4SCN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgTFPI%2FZ4KAJfuSkvvmwWiVhux%2FQ%2BmZmKxjE4LfD4YYAiEAyOOgcRSsx3yVptQmIRcefYFEBjBEaM0eB3xEGheFLWQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4PT34reAg7lrTxbSrcA5achVCf3JPtrRxdPnfNmCSF7jTromLLnQGvHlGiISgh1%2FwfxX%2BOMLB8wYCFM2spE8qxW6P8FXQx9TTKCTf82SUJUBhTspch3x1kqkDMJVlitxV%2BW4sQkoupIu%2FT5Oga%2FIxKwzBmpQdupj2qza5fcPQqSqAIEn6f9xXT9Pxj8KQOv2xd2FVQimXNDMbhBeL%2BpJBZA8%2FtpwH02Itjwb7UBg4da6OPrJVFK5qjrg4RV3VU2uFwGG%2BTFli%2FHBRRbZxBiKFjLHOezhOfKVdKWG8POqdQ9VGRz3VdqMBaNODAlTRXR7DAPMAp2teqcxKH6E%2Fjw6mCaP3ItsLXhf%2FPvwL2pwj2%2B0mSUpWE3VPA5ZxHfSv90PhVbUchOSpW3sUveu4oHUkJ7be5lxigBYC3UCVNcwFqnYDgggMvU9iHZ5TR0XK9K6OI4abXeK5QCzwF7hcesoDJ6Q7zol8rPlQPUaMbOA%2FVJLc8%2FR0enf4fv00Mo4KqChZ695q4Z7W5K%2BO66eAQWW3oJgoDm8CFfnJ3goTOBmrczx9T0CtsDcUNhrL8Psbq2U45gmtG6tU7HjriNuK4oCkKAt2%2BvabnpCTBYQDMxpZFs72UzZD0L8hK9Tq3g%2F3zn1Lp583fku6CULeKMN%2FSu78GOqUBrjp9uyPQ%2BWmTvIXl508FzdKeBjBVB1WOc9ZL9gNUhNADQHkPE6vjj76D2ce87Odrmh9oZxgT7NXHHA8XhyWu93btz5Gfw5us4RnZgyUNZnpemqgh5SCEBd%2FPLD8DInWfBCHK2H4g2UJt%2B71J1Djh828S%2BFP9bhbjvpFoNF6MyOFv3DboxSTxdZ9oL8kzjrykk%2F%2FasZOihSm4t0Np8z8TJwQHJdHC&X-Amz-Signature=83c6d64a019185e28bbc9b7b0847aa8fe4d46b5b7fac2145499418e71235dd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422V4SCN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgTFPI%2FZ4KAJfuSkvvmwWiVhux%2FQ%2BmZmKxjE4LfD4YYAiEAyOOgcRSsx3yVptQmIRcefYFEBjBEaM0eB3xEGheFLWQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4PT34reAg7lrTxbSrcA5achVCf3JPtrRxdPnfNmCSF7jTromLLnQGvHlGiISgh1%2FwfxX%2BOMLB8wYCFM2spE8qxW6P8FXQx9TTKCTf82SUJUBhTspch3x1kqkDMJVlitxV%2BW4sQkoupIu%2FT5Oga%2FIxKwzBmpQdupj2qza5fcPQqSqAIEn6f9xXT9Pxj8KQOv2xd2FVQimXNDMbhBeL%2BpJBZA8%2FtpwH02Itjwb7UBg4da6OPrJVFK5qjrg4RV3VU2uFwGG%2BTFli%2FHBRRbZxBiKFjLHOezhOfKVdKWG8POqdQ9VGRz3VdqMBaNODAlTRXR7DAPMAp2teqcxKH6E%2Fjw6mCaP3ItsLXhf%2FPvwL2pwj2%2B0mSUpWE3VPA5ZxHfSv90PhVbUchOSpW3sUveu4oHUkJ7be5lxigBYC3UCVNcwFqnYDgggMvU9iHZ5TR0XK9K6OI4abXeK5QCzwF7hcesoDJ6Q7zol8rPlQPUaMbOA%2FVJLc8%2FR0enf4fv00Mo4KqChZ695q4Z7W5K%2BO66eAQWW3oJgoDm8CFfnJ3goTOBmrczx9T0CtsDcUNhrL8Psbq2U45gmtG6tU7HjriNuK4oCkKAt2%2BvabnpCTBYQDMxpZFs72UzZD0L8hK9Tq3g%2F3zn1Lp583fku6CULeKMN%2FSu78GOqUBrjp9uyPQ%2BWmTvIXl508FzdKeBjBVB1WOc9ZL9gNUhNADQHkPE6vjj76D2ce87Odrmh9oZxgT7NXHHA8XhyWu93btz5Gfw5us4RnZgyUNZnpemqgh5SCEBd%2FPLD8DInWfBCHK2H4g2UJt%2B71J1Djh828S%2BFP9bhbjvpFoNF6MyOFv3DboxSTxdZ9oL8kzjrykk%2F%2FasZOihSm4t0Np8z8TJwQHJdHC&X-Amz-Signature=650bf082a4358c48703d2064df89376f7b44c1f2dddef7747f26c49a9b58932b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422V4SCN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgTFPI%2FZ4KAJfuSkvvmwWiVhux%2FQ%2BmZmKxjE4LfD4YYAiEAyOOgcRSsx3yVptQmIRcefYFEBjBEaM0eB3xEGheFLWQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4PT34reAg7lrTxbSrcA5achVCf3JPtrRxdPnfNmCSF7jTromLLnQGvHlGiISgh1%2FwfxX%2BOMLB8wYCFM2spE8qxW6P8FXQx9TTKCTf82SUJUBhTspch3x1kqkDMJVlitxV%2BW4sQkoupIu%2FT5Oga%2FIxKwzBmpQdupj2qza5fcPQqSqAIEn6f9xXT9Pxj8KQOv2xd2FVQimXNDMbhBeL%2BpJBZA8%2FtpwH02Itjwb7UBg4da6OPrJVFK5qjrg4RV3VU2uFwGG%2BTFli%2FHBRRbZxBiKFjLHOezhOfKVdKWG8POqdQ9VGRz3VdqMBaNODAlTRXR7DAPMAp2teqcxKH6E%2Fjw6mCaP3ItsLXhf%2FPvwL2pwj2%2B0mSUpWE3VPA5ZxHfSv90PhVbUchOSpW3sUveu4oHUkJ7be5lxigBYC3UCVNcwFqnYDgggMvU9iHZ5TR0XK9K6OI4abXeK5QCzwF7hcesoDJ6Q7zol8rPlQPUaMbOA%2FVJLc8%2FR0enf4fv00Mo4KqChZ695q4Z7W5K%2BO66eAQWW3oJgoDm8CFfnJ3goTOBmrczx9T0CtsDcUNhrL8Psbq2U45gmtG6tU7HjriNuK4oCkKAt2%2BvabnpCTBYQDMxpZFs72UzZD0L8hK9Tq3g%2F3zn1Lp583fku6CULeKMN%2FSu78GOqUBrjp9uyPQ%2BWmTvIXl508FzdKeBjBVB1WOc9ZL9gNUhNADQHkPE6vjj76D2ce87Odrmh9oZxgT7NXHHA8XhyWu93btz5Gfw5us4RnZgyUNZnpemqgh5SCEBd%2FPLD8DInWfBCHK2H4g2UJt%2B71J1Djh828S%2BFP9bhbjvpFoNF6MyOFv3DboxSTxdZ9oL8kzjrykk%2F%2FasZOihSm4t0Np8z8TJwQHJdHC&X-Amz-Signature=d0f4df24a424029ec7e195023c4bffff4357e126da0eb8de6f050d6c5f985559&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
