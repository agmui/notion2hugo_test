---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IBIAOF5%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQAIepvEiEIagPvHGRx84SdSAPcq%2FgLJzET1oAVqeuVAiAnY3w2sfpt1SbX5c72n6ukRs%2F0HT3ef624DkU2uGdsPyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMFpTPWaj0QD0%2FUbegKtwDomqhrQfikPO1VWDEFUHsOWsGCqtn%2FMcVuh2qdMarSLgeR4Gg1FIJfgqXFc7RG7nYBhYqEvIgYJcuk8Mowl5zOJTBgdZrX3MTK0lyUKLelGkgMm5OXb29n1osDwfbXPJJa4KdKyjsSFpPBY5uI%2FEAbrJQq9OFIQWAfleM5PB9GN%2BKVLZ80OP4TAU0USBNBGFnHIZODxX6UCCV7%2BuA4Szs8I5ZDpV6eRbIlcmcJBUXDwKvpQGAATJix%2FvpGIaB5PJ4xZQTelfWcVHMRZo4clJIrCHwofXIUQmqz%2B8WRK7ne1roWM1NkzBwcbawWK4oVdPTOJ1Th8BA306%2BSy906Z3nfeHWrvhGGLsDYA3Gq%2BEw9FBGku1sgZRZWjkL3J%2B8EGKxydy%2Fxpb4OrxjOgWTagDbdbfmxEJuWEP1ywSe0rGF7PQj4yzayAelGeka4SiI1%2FqsKfXSuH8OV9%2BbaxGVqdq3qaZVlxbDpcoryxH27S6x8MYffl0ZWQKG3OM%2F6NkdXRFQ0YFIZCE7V%2BWr2ITJrYcb84Qlc3ZRxpXAbYyQUy7PxRCIClhlSK7%2BiibwZBHUcJuDP4JtyP9TPU%2FFM8LlcbkmHyRywMZr4iUHc90Xx21Q7gnD72vjfvtLPQsFKyMw84igyAY6pgHiIDD%2FYA8m%2F01FXHRsdiRSj3hIWYwJRu0wRG1lxSd6D6tBiGIR%2BqawhA5Hl%2FIRKaLbKSVR9BoEGBlBpPpmJefnZZfC%2FdpsmP9Gd5C5uOy9xSo63arqGOJy2oOuDMI3dAgfxeZADOZCLrqMdcbisf13OCtbKjTtgYYf0Ycmup0W0DNPxmRsHv2xztdtY0nLUEVwRR8OITaNmoIevppkZyn3m8Qptidz&X-Amz-Signature=1c8bd94b4df07da577057cb3306a5be4dcc3e736b8fb65456f6933469ff77d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IBIAOF5%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQAIepvEiEIagPvHGRx84SdSAPcq%2FgLJzET1oAVqeuVAiAnY3w2sfpt1SbX5c72n6ukRs%2F0HT3ef624DkU2uGdsPyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMFpTPWaj0QD0%2FUbegKtwDomqhrQfikPO1VWDEFUHsOWsGCqtn%2FMcVuh2qdMarSLgeR4Gg1FIJfgqXFc7RG7nYBhYqEvIgYJcuk8Mowl5zOJTBgdZrX3MTK0lyUKLelGkgMm5OXb29n1osDwfbXPJJa4KdKyjsSFpPBY5uI%2FEAbrJQq9OFIQWAfleM5PB9GN%2BKVLZ80OP4TAU0USBNBGFnHIZODxX6UCCV7%2BuA4Szs8I5ZDpV6eRbIlcmcJBUXDwKvpQGAATJix%2FvpGIaB5PJ4xZQTelfWcVHMRZo4clJIrCHwofXIUQmqz%2B8WRK7ne1roWM1NkzBwcbawWK4oVdPTOJ1Th8BA306%2BSy906Z3nfeHWrvhGGLsDYA3Gq%2BEw9FBGku1sgZRZWjkL3J%2B8EGKxydy%2Fxpb4OrxjOgWTagDbdbfmxEJuWEP1ywSe0rGF7PQj4yzayAelGeka4SiI1%2FqsKfXSuH8OV9%2BbaxGVqdq3qaZVlxbDpcoryxH27S6x8MYffl0ZWQKG3OM%2F6NkdXRFQ0YFIZCE7V%2BWr2ITJrYcb84Qlc3ZRxpXAbYyQUy7PxRCIClhlSK7%2BiibwZBHUcJuDP4JtyP9TPU%2FFM8LlcbkmHyRywMZr4iUHc90Xx21Q7gnD72vjfvtLPQsFKyMw84igyAY6pgHiIDD%2FYA8m%2F01FXHRsdiRSj3hIWYwJRu0wRG1lxSd6D6tBiGIR%2BqawhA5Hl%2FIRKaLbKSVR9BoEGBlBpPpmJefnZZfC%2FdpsmP9Gd5C5uOy9xSo63arqGOJy2oOuDMI3dAgfxeZADOZCLrqMdcbisf13OCtbKjTtgYYf0Ycmup0W0DNPxmRsHv2xztdtY0nLUEVwRR8OITaNmoIevppkZyn3m8Qptidz&X-Amz-Signature=bbcaa1907a9243e5a3b05b58fa3320413fe85b0a435cf7e9e4f8eecad45ba3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IBIAOF5%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQAIepvEiEIagPvHGRx84SdSAPcq%2FgLJzET1oAVqeuVAiAnY3w2sfpt1SbX5c72n6ukRs%2F0HT3ef624DkU2uGdsPyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMFpTPWaj0QD0%2FUbegKtwDomqhrQfikPO1VWDEFUHsOWsGCqtn%2FMcVuh2qdMarSLgeR4Gg1FIJfgqXFc7RG7nYBhYqEvIgYJcuk8Mowl5zOJTBgdZrX3MTK0lyUKLelGkgMm5OXb29n1osDwfbXPJJa4KdKyjsSFpPBY5uI%2FEAbrJQq9OFIQWAfleM5PB9GN%2BKVLZ80OP4TAU0USBNBGFnHIZODxX6UCCV7%2BuA4Szs8I5ZDpV6eRbIlcmcJBUXDwKvpQGAATJix%2FvpGIaB5PJ4xZQTelfWcVHMRZo4clJIrCHwofXIUQmqz%2B8WRK7ne1roWM1NkzBwcbawWK4oVdPTOJ1Th8BA306%2BSy906Z3nfeHWrvhGGLsDYA3Gq%2BEw9FBGku1sgZRZWjkL3J%2B8EGKxydy%2Fxpb4OrxjOgWTagDbdbfmxEJuWEP1ywSe0rGF7PQj4yzayAelGeka4SiI1%2FqsKfXSuH8OV9%2BbaxGVqdq3qaZVlxbDpcoryxH27S6x8MYffl0ZWQKG3OM%2F6NkdXRFQ0YFIZCE7V%2BWr2ITJrYcb84Qlc3ZRxpXAbYyQUy7PxRCIClhlSK7%2BiibwZBHUcJuDP4JtyP9TPU%2FFM8LlcbkmHyRywMZr4iUHc90Xx21Q7gnD72vjfvtLPQsFKyMw84igyAY6pgHiIDD%2FYA8m%2F01FXHRsdiRSj3hIWYwJRu0wRG1lxSd6D6tBiGIR%2BqawhA5Hl%2FIRKaLbKSVR9BoEGBlBpPpmJefnZZfC%2FdpsmP9Gd5C5uOy9xSo63arqGOJy2oOuDMI3dAgfxeZADOZCLrqMdcbisf13OCtbKjTtgYYf0Ycmup0W0DNPxmRsHv2xztdtY0nLUEVwRR8OITaNmoIevppkZyn3m8Qptidz&X-Amz-Signature=7e816531421c4f9ee87c87798989b04da7a4b78b9c3b0464ef6250603c00d5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
