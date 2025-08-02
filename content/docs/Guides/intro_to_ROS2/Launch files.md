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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UA7TN7Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQv0MUB089zZV5NWmH1LMYTw0pi03Gy3Vig1D19l2GCAIgcXlYJN%2BpHT64%2F3UWAqj199Y67mzAEHVlOId9ur7iz6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUeKiYaxuDytdre0CrcA7%2BiphympjgwoZ9kTJXU15zmw7e7hO5FiJtg3i%2BXn1S9ZUCV7ScHaGe4ygL%2F9rpu8E2Y7eJ4aV4PeEhWv2xOwLn%2BJFj3U%2Fv9SNqQ14IUCVrMBCuaiRk2Q3XQb3Gm4Dh8Elxe%2BxEP6Xc1d7%2FUBJnEkySnS5%2F30hlb40axRNQDECWtDYh5TV7x1WsZJ50xPneC%2Fcgy3PnB4KkkMlM8tJAhjYBI6ZFEq22W9%2FFEEftOi1lYjlQPb2uQ3pKopaGkkKuIYe0opntQgU2AdrhxnxocCBvVnnRDPFTJpOVl%2F3Fua2UruL7imkcKXe5PI%2B2OVyztp%2B7Q2%2FVIUgPJJYoYAigQ78hpfeOTc0o07kjiEqKR6ijA7moz5sBNadH2GFNMduPES6mLX2CpKEYxBGBwDE7rUvHU%2B5EwlxVLlky6wrNGptcP%2FnAbftIwdAZQ%2FGBkyj20aJ3GoWclDmncHV6u6rwlj1YFxuSusbPyLiPRkpZ1Dj5MM0rQTdgdt4JAKoHCIiJLiVS9%2B%2BZZrut8u9VyNbrNThwZHh8WrRGjfhklebGJW6ciJzr0IdskDTfvTRScZysDmaQtJLuDTQofI69LG6rGkQgkuTAcZoQlX6CqnCxdIJykYRlEYFjNWXLITAAPMMqctsQGOqUBcetIHeP2o65ygiTLeVW2QmE9DSoZv6mxMD%2FO9edXEynu98pGa1WJfErKEiJsv1QozoUu8z2B1lwiKv65jk%2BOB2np6gCsfUyefzgikMxzLIBrO642YWwqzWw637n6YgyPagAiRyShNqpx%2BTm5MouWioyBa49d1H4IAbzPnmcjmhI2Saua1dhNuAZytZPlYXhlkT9QKTWTLjVCauig7qDPvfNi6Y0u&X-Amz-Signature=5960b5924604c038806e6bbae7a25973768ed8494fcba62b44fd2de212825450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UA7TN7Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQv0MUB089zZV5NWmH1LMYTw0pi03Gy3Vig1D19l2GCAIgcXlYJN%2BpHT64%2F3UWAqj199Y67mzAEHVlOId9ur7iz6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUeKiYaxuDytdre0CrcA7%2BiphympjgwoZ9kTJXU15zmw7e7hO5FiJtg3i%2BXn1S9ZUCV7ScHaGe4ygL%2F9rpu8E2Y7eJ4aV4PeEhWv2xOwLn%2BJFj3U%2Fv9SNqQ14IUCVrMBCuaiRk2Q3XQb3Gm4Dh8Elxe%2BxEP6Xc1d7%2FUBJnEkySnS5%2F30hlb40axRNQDECWtDYh5TV7x1WsZJ50xPneC%2Fcgy3PnB4KkkMlM8tJAhjYBI6ZFEq22W9%2FFEEftOi1lYjlQPb2uQ3pKopaGkkKuIYe0opntQgU2AdrhxnxocCBvVnnRDPFTJpOVl%2F3Fua2UruL7imkcKXe5PI%2B2OVyztp%2B7Q2%2FVIUgPJJYoYAigQ78hpfeOTc0o07kjiEqKR6ijA7moz5sBNadH2GFNMduPES6mLX2CpKEYxBGBwDE7rUvHU%2B5EwlxVLlky6wrNGptcP%2FnAbftIwdAZQ%2FGBkyj20aJ3GoWclDmncHV6u6rwlj1YFxuSusbPyLiPRkpZ1Dj5MM0rQTdgdt4JAKoHCIiJLiVS9%2B%2BZZrut8u9VyNbrNThwZHh8WrRGjfhklebGJW6ciJzr0IdskDTfvTRScZysDmaQtJLuDTQofI69LG6rGkQgkuTAcZoQlX6CqnCxdIJykYRlEYFjNWXLITAAPMMqctsQGOqUBcetIHeP2o65ygiTLeVW2QmE9DSoZv6mxMD%2FO9edXEynu98pGa1WJfErKEiJsv1QozoUu8z2B1lwiKv65jk%2BOB2np6gCsfUyefzgikMxzLIBrO642YWwqzWw637n6YgyPagAiRyShNqpx%2BTm5MouWioyBa49d1H4IAbzPnmcjmhI2Saua1dhNuAZytZPlYXhlkT9QKTWTLjVCauig7qDPvfNi6Y0u&X-Amz-Signature=c3f7c6f06e11ac51ce45137113d159e7cb491b301a75b62157be89330cb9aab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UA7TN7Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQv0MUB089zZV5NWmH1LMYTw0pi03Gy3Vig1D19l2GCAIgcXlYJN%2BpHT64%2F3UWAqj199Y67mzAEHVlOId9ur7iz6oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUeKiYaxuDytdre0CrcA7%2BiphympjgwoZ9kTJXU15zmw7e7hO5FiJtg3i%2BXn1S9ZUCV7ScHaGe4ygL%2F9rpu8E2Y7eJ4aV4PeEhWv2xOwLn%2BJFj3U%2Fv9SNqQ14IUCVrMBCuaiRk2Q3XQb3Gm4Dh8Elxe%2BxEP6Xc1d7%2FUBJnEkySnS5%2F30hlb40axRNQDECWtDYh5TV7x1WsZJ50xPneC%2Fcgy3PnB4KkkMlM8tJAhjYBI6ZFEq22W9%2FFEEftOi1lYjlQPb2uQ3pKopaGkkKuIYe0opntQgU2AdrhxnxocCBvVnnRDPFTJpOVl%2F3Fua2UruL7imkcKXe5PI%2B2OVyztp%2B7Q2%2FVIUgPJJYoYAigQ78hpfeOTc0o07kjiEqKR6ijA7moz5sBNadH2GFNMduPES6mLX2CpKEYxBGBwDE7rUvHU%2B5EwlxVLlky6wrNGptcP%2FnAbftIwdAZQ%2FGBkyj20aJ3GoWclDmncHV6u6rwlj1YFxuSusbPyLiPRkpZ1Dj5MM0rQTdgdt4JAKoHCIiJLiVS9%2B%2BZZrut8u9VyNbrNThwZHh8WrRGjfhklebGJW6ciJzr0IdskDTfvTRScZysDmaQtJLuDTQofI69LG6rGkQgkuTAcZoQlX6CqnCxdIJykYRlEYFjNWXLITAAPMMqctsQGOqUBcetIHeP2o65ygiTLeVW2QmE9DSoZv6mxMD%2FO9edXEynu98pGa1WJfErKEiJsv1QozoUu8z2B1lwiKv65jk%2BOB2np6gCsfUyefzgikMxzLIBrO642YWwqzWw637n6YgyPagAiRyShNqpx%2BTm5MouWioyBa49d1H4IAbzPnmcjmhI2Saua1dhNuAZytZPlYXhlkT9QKTWTLjVCauig7qDPvfNi6Y0u&X-Amz-Signature=662e26f789aa69cf9410ed5443b86e72145f2a3ac4d4a49c5011544711c9ff7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
