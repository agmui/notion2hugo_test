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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OYJQHB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDvumT%2B1LpAFFwuNhYRt%2Bgy6PMBPqObcQMH4MrhSJzq8QIgTmGNSgDwHQY%2F2MDOWIE%2FIC6c96TwZP6d%2F%2FPUhHpPfGgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyyyGya7IuFe4CzUCrcA480JpSWONSi9P30vNLLQxpvkp8kplP6eEyWqjre5ObwhVnCfbL8CfVUEaBfrLjfAeAE6E%2B1EhyLANqrAc77hyDQFHkkVJSuXo%2BRGRewXdUYusMOTYLoSSd6ebMzBQxrk1h6gAJykjvM5lDMkT%2BAOzGSlgVxQ0tCcGySdVSuHGMezZ1ITKYKFo8dxZxwMs9ub%2FVTqadeYsSQR%2B%2F99MctzyO7MlRyMqXMmwVtCbUTMP4rQwWpeSvw3rcbiztj8fPMD1um7t5UQoHkTtfPSTWEqf3FlphChWHkpFVK5DKDPnEAIT8KOLR5%2BxryRYp6ByOPcw9AmHmlHXySms%2F%2Bo9vXhQSrePXTAuwgrp1j%2BbUjxe8eL7qnCpyWe7Xk8KeZIzt0YOqtcytIeof0BEYWlsNw%2FxlV4FK6cn2AY5fqA0ztsOIJYtza2a3MKZ%2BR6nzmgK%2Bbk4coFT3%2B6YTE99UnRZjw%2BVrQuZJqhKWdZHG1%2BoJ0dm%2B5D7GC6JbsStlmG5NJ0EcV5beI2XC3Trp7ww1l%2B8wti1p1fEaKSCHpqk4sq%2F%2FO5vEUNThtczyJDomJJO7IBilRyvY770wD7v%2BEpVwpaqExoF6flI7oqV6ZGJtCVQp3ZSKdDDjUqbEY8jCz0mLbMP7YwcEGOqUBgdhpv7oktdIbh8QCpwzxHxg4L8rvCk5Ljg0jHxVQTDqXKNX%2BQFVs6L37mw3CVLbfBdl3TBeRUxDlITtRxggqVQh%2Fz5DS72bZw2JLiHK8CI1p6EOsBMMnU%2FXOR1kxa6zuKhbl1qCbsaOhNoOc49NqRaZOUvK5qoCTFmL%2FX9AxFlWeLkjlvI%2FLAn6Og8qdV2U9BYbqOztt%2FSHdtyTqEITU2NyRwYIJ&X-Amz-Signature=d1ec5289a793bcfaa38fb4388358b5f24df48610464627be4cc0c615c2bf0795&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OYJQHB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDvumT%2B1LpAFFwuNhYRt%2Bgy6PMBPqObcQMH4MrhSJzq8QIgTmGNSgDwHQY%2F2MDOWIE%2FIC6c96TwZP6d%2F%2FPUhHpPfGgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyyyGya7IuFe4CzUCrcA480JpSWONSi9P30vNLLQxpvkp8kplP6eEyWqjre5ObwhVnCfbL8CfVUEaBfrLjfAeAE6E%2B1EhyLANqrAc77hyDQFHkkVJSuXo%2BRGRewXdUYusMOTYLoSSd6ebMzBQxrk1h6gAJykjvM5lDMkT%2BAOzGSlgVxQ0tCcGySdVSuHGMezZ1ITKYKFo8dxZxwMs9ub%2FVTqadeYsSQR%2B%2F99MctzyO7MlRyMqXMmwVtCbUTMP4rQwWpeSvw3rcbiztj8fPMD1um7t5UQoHkTtfPSTWEqf3FlphChWHkpFVK5DKDPnEAIT8KOLR5%2BxryRYp6ByOPcw9AmHmlHXySms%2F%2Bo9vXhQSrePXTAuwgrp1j%2BbUjxe8eL7qnCpyWe7Xk8KeZIzt0YOqtcytIeof0BEYWlsNw%2FxlV4FK6cn2AY5fqA0ztsOIJYtza2a3MKZ%2BR6nzmgK%2Bbk4coFT3%2B6YTE99UnRZjw%2BVrQuZJqhKWdZHG1%2BoJ0dm%2B5D7GC6JbsStlmG5NJ0EcV5beI2XC3Trp7ww1l%2B8wti1p1fEaKSCHpqk4sq%2F%2FO5vEUNThtczyJDomJJO7IBilRyvY770wD7v%2BEpVwpaqExoF6flI7oqV6ZGJtCVQp3ZSKdDDjUqbEY8jCz0mLbMP7YwcEGOqUBgdhpv7oktdIbh8QCpwzxHxg4L8rvCk5Ljg0jHxVQTDqXKNX%2BQFVs6L37mw3CVLbfBdl3TBeRUxDlITtRxggqVQh%2Fz5DS72bZw2JLiHK8CI1p6EOsBMMnU%2FXOR1kxa6zuKhbl1qCbsaOhNoOc49NqRaZOUvK5qoCTFmL%2FX9AxFlWeLkjlvI%2FLAn6Og8qdV2U9BYbqOztt%2FSHdtyTqEITU2NyRwYIJ&X-Amz-Signature=9c6f297094d68ad217454a9d8cd7dca7dbe751cf7b4bbaab478a120b10bf7e92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OYJQHB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDvumT%2B1LpAFFwuNhYRt%2Bgy6PMBPqObcQMH4MrhSJzq8QIgTmGNSgDwHQY%2F2MDOWIE%2FIC6c96TwZP6d%2F%2FPUhHpPfGgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyyyGya7IuFe4CzUCrcA480JpSWONSi9P30vNLLQxpvkp8kplP6eEyWqjre5ObwhVnCfbL8CfVUEaBfrLjfAeAE6E%2B1EhyLANqrAc77hyDQFHkkVJSuXo%2BRGRewXdUYusMOTYLoSSd6ebMzBQxrk1h6gAJykjvM5lDMkT%2BAOzGSlgVxQ0tCcGySdVSuHGMezZ1ITKYKFo8dxZxwMs9ub%2FVTqadeYsSQR%2B%2F99MctzyO7MlRyMqXMmwVtCbUTMP4rQwWpeSvw3rcbiztj8fPMD1um7t5UQoHkTtfPSTWEqf3FlphChWHkpFVK5DKDPnEAIT8KOLR5%2BxryRYp6ByOPcw9AmHmlHXySms%2F%2Bo9vXhQSrePXTAuwgrp1j%2BbUjxe8eL7qnCpyWe7Xk8KeZIzt0YOqtcytIeof0BEYWlsNw%2FxlV4FK6cn2AY5fqA0ztsOIJYtza2a3MKZ%2BR6nzmgK%2Bbk4coFT3%2B6YTE99UnRZjw%2BVrQuZJqhKWdZHG1%2BoJ0dm%2B5D7GC6JbsStlmG5NJ0EcV5beI2XC3Trp7ww1l%2B8wti1p1fEaKSCHpqk4sq%2F%2FO5vEUNThtczyJDomJJO7IBilRyvY770wD7v%2BEpVwpaqExoF6flI7oqV6ZGJtCVQp3ZSKdDDjUqbEY8jCz0mLbMP7YwcEGOqUBgdhpv7oktdIbh8QCpwzxHxg4L8rvCk5Ljg0jHxVQTDqXKNX%2BQFVs6L37mw3CVLbfBdl3TBeRUxDlITtRxggqVQh%2Fz5DS72bZw2JLiHK8CI1p6EOsBMMnU%2FXOR1kxa6zuKhbl1qCbsaOhNoOc49NqRaZOUvK5qoCTFmL%2FX9AxFlWeLkjlvI%2FLAn6Og8qdV2U9BYbqOztt%2FSHdtyTqEITU2NyRwYIJ&X-Amz-Signature=21f1f1b086d2857865e9ae54593362d27492420ddf3d772f3c444ad50783ba40&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
