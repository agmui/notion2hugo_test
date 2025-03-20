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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWHOV5V%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDjbPDU0Q5LNFRoS7F7KbpZn1zV6b1%2F3MzRUF%2FBdgLdOgIgZ23KpFhlobk5SKmueKnSlAUQyFZua1AGhLgCpKm5eI4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ%2BjIAYJllxSbNVcCrcA6mZfGqY5HmMnIXp1kffO9bnHyICQvuMFt%2F%2FVz2AIwUq3pwKk7GX1fLk2tuQkVa53Hi%2FQITX1jykVeTb8u0CtaVhkG%2F8LIGnfnqyLRy831iYuMFuFQsdFZdfZ0rvantSaBJvbkzjVLIEYxrL9nXCGcAoJkAQ7n3rlei7J%2FiR24myzbAam37O5yhHaUJ6ntdLZ02VViwRMHxGfBSDrbyB%2Bdk9N4YoSeqSkxSroPjTstD9UYYT%2BW4qoDne411WigrvzaG82ejoxJUKlcuIZlu8RCF1vHjYv27THpHUtFgJDr7VJ5mhkN%2Fgftopq8u%2FHY3tnf2dZ1TH3bWx3wZJSnTMPgsLfAQtc%2BOXFf6XXbF%2B11gWK6dcZskrdHLWOYyjKKSfHGb3WdyGwwQPeOwBi46ODZzG8Ih0T%2Bl8GQeBt52pp%2FIE634Tdh3FoxRMoJkn37%2F%2FpVNAitDXUt5zpChkB8OwqLVE2xBuxR9FdOtp%2FyVGxOI46%2B2MqCNPGk1vOqiT6AydRUYk%2F6xLBaUIlEQoZJR3BdWDrrAIgqgipBFMjo5%2F6GtBaTq%2B1SMh0LIZMdUsytmUtRZF2%2BK0YcBRD2d6rNKObG6F1EcAjaHJE8rrnCG40qemqN0pPApz7knqkbJNMMOG774GOqUBuyi6oBQfCWqajtSihIPrUtkl7CvzwXN6wJnhptDrs91ihdGbKjTlcHdIpMxFtxd9JwbeEUsXp0QvwkqKTz6XEcj8573qS4%2FZZQYjwkRx%2BqRBAM6ewkkF0yjtLKuFtoKiq5gY%2Fd4mS4RPPYePkcUHMFl9sNNcJAP0SM8JKNKlBuvup7mie3vC%2BatGxRn4Z8%2FxG0gRH4Ie1Kn9rId1Wj%2FL1N607z4r&X-Amz-Signature=20b2090a4055f46cccddcf505972f7a32ede9c026e76e05f9f41bbc87bd802f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWHOV5V%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDjbPDU0Q5LNFRoS7F7KbpZn1zV6b1%2F3MzRUF%2FBdgLdOgIgZ23KpFhlobk5SKmueKnSlAUQyFZua1AGhLgCpKm5eI4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ%2BjIAYJllxSbNVcCrcA6mZfGqY5HmMnIXp1kffO9bnHyICQvuMFt%2F%2FVz2AIwUq3pwKk7GX1fLk2tuQkVa53Hi%2FQITX1jykVeTb8u0CtaVhkG%2F8LIGnfnqyLRy831iYuMFuFQsdFZdfZ0rvantSaBJvbkzjVLIEYxrL9nXCGcAoJkAQ7n3rlei7J%2FiR24myzbAam37O5yhHaUJ6ntdLZ02VViwRMHxGfBSDrbyB%2Bdk9N4YoSeqSkxSroPjTstD9UYYT%2BW4qoDne411WigrvzaG82ejoxJUKlcuIZlu8RCF1vHjYv27THpHUtFgJDr7VJ5mhkN%2Fgftopq8u%2FHY3tnf2dZ1TH3bWx3wZJSnTMPgsLfAQtc%2BOXFf6XXbF%2B11gWK6dcZskrdHLWOYyjKKSfHGb3WdyGwwQPeOwBi46ODZzG8Ih0T%2Bl8GQeBt52pp%2FIE634Tdh3FoxRMoJkn37%2F%2FpVNAitDXUt5zpChkB8OwqLVE2xBuxR9FdOtp%2FyVGxOI46%2B2MqCNPGk1vOqiT6AydRUYk%2F6xLBaUIlEQoZJR3BdWDrrAIgqgipBFMjo5%2F6GtBaTq%2B1SMh0LIZMdUsytmUtRZF2%2BK0YcBRD2d6rNKObG6F1EcAjaHJE8rrnCG40qemqN0pPApz7knqkbJNMMOG774GOqUBuyi6oBQfCWqajtSihIPrUtkl7CvzwXN6wJnhptDrs91ihdGbKjTlcHdIpMxFtxd9JwbeEUsXp0QvwkqKTz6XEcj8573qS4%2FZZQYjwkRx%2BqRBAM6ewkkF0yjtLKuFtoKiq5gY%2Fd4mS4RPPYePkcUHMFl9sNNcJAP0SM8JKNKlBuvup7mie3vC%2BatGxRn4Z8%2FxG0gRH4Ie1Kn9rId1Wj%2FL1N607z4r&X-Amz-Signature=cce06177cb751f8d2ccee419b02a54ebb9bfbd9dc5066e43b81f92f042d50ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWHOV5V%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDjbPDU0Q5LNFRoS7F7KbpZn1zV6b1%2F3MzRUF%2FBdgLdOgIgZ23KpFhlobk5SKmueKnSlAUQyFZua1AGhLgCpKm5eI4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ%2BjIAYJllxSbNVcCrcA6mZfGqY5HmMnIXp1kffO9bnHyICQvuMFt%2F%2FVz2AIwUq3pwKk7GX1fLk2tuQkVa53Hi%2FQITX1jykVeTb8u0CtaVhkG%2F8LIGnfnqyLRy831iYuMFuFQsdFZdfZ0rvantSaBJvbkzjVLIEYxrL9nXCGcAoJkAQ7n3rlei7J%2FiR24myzbAam37O5yhHaUJ6ntdLZ02VViwRMHxGfBSDrbyB%2Bdk9N4YoSeqSkxSroPjTstD9UYYT%2BW4qoDne411WigrvzaG82ejoxJUKlcuIZlu8RCF1vHjYv27THpHUtFgJDr7VJ5mhkN%2Fgftopq8u%2FHY3tnf2dZ1TH3bWx3wZJSnTMPgsLfAQtc%2BOXFf6XXbF%2B11gWK6dcZskrdHLWOYyjKKSfHGb3WdyGwwQPeOwBi46ODZzG8Ih0T%2Bl8GQeBt52pp%2FIE634Tdh3FoxRMoJkn37%2F%2FpVNAitDXUt5zpChkB8OwqLVE2xBuxR9FdOtp%2FyVGxOI46%2B2MqCNPGk1vOqiT6AydRUYk%2F6xLBaUIlEQoZJR3BdWDrrAIgqgipBFMjo5%2F6GtBaTq%2B1SMh0LIZMdUsytmUtRZF2%2BK0YcBRD2d6rNKObG6F1EcAjaHJE8rrnCG40qemqN0pPApz7knqkbJNMMOG774GOqUBuyi6oBQfCWqajtSihIPrUtkl7CvzwXN6wJnhptDrs91ihdGbKjTlcHdIpMxFtxd9JwbeEUsXp0QvwkqKTz6XEcj8573qS4%2FZZQYjwkRx%2BqRBAM6ewkkF0yjtLKuFtoKiq5gY%2Fd4mS4RPPYePkcUHMFl9sNNcJAP0SM8JKNKlBuvup7mie3vC%2BatGxRn4Z8%2FxG0gRH4Ie1Kn9rId1Wj%2FL1N607z4r&X-Amz-Signature=2871a878bf7d65d90d2dbc7d25d7a62c4d30917fc8905cb05b8cdea0b884a9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
