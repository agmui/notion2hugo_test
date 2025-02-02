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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQY3DGCS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BH95ZK9xFkDsAoHaDcRRlocvBxzM5RRt6r0xd2WJwaAiA99scwuoFYzg8agwbtYyglm7UgO%2FdpDrTEuh85FJavGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjvaxhQtWTdW4LerKtwDDC1Ir0%2BnE7f7BFfKyT4moaH7SGrXEfsRS5k5BT2DcPdRMCy%2F2ouqUqpLWN2EZNUV3cTmAc2Zq6%2B0UQMatY7ibdY7G6gC9usN4wuVgHhgK4jEDNWddU6mPGz%2F6oFHmNFkQ%2BejA5qAyPGdZfTrU2V7Co0m9SH2g%2BzxtliW7fBo57UDaVTyl2VujpJ5TcOf8RxdIxQeZGdMmN0NQSPDRJbeNV7rWZqTONK9RznLHj1XLkuCvicCRCpINVVT25vbtwS3%2FRgrGuko1cyOvXM1CcSwf3GIlP4izK0KCB2K1AvXqMwgSpj8wko699l2jabHn1ADKib7zWcoVuquYxCWyAhUvwWe0vd51IERfY0M7si1kuNKeHZkkevo%2BMgpTaUx3tszfD1Re1XRa3lad5lt4AWRUicBY30K%2FL2Qd9rG8r5pujSuKyCDXzQZMx80lak8N5QwSzCYajNhMqygS3l%2BrZeOvsWwrlXmBSQUHboKM2W5xFvqU81PxHBltca45Oy0MqUqFCRRhxCEhDIpnykOa%2FjtnO9bZvGKqCDVc4ZsPlhPtb110fAaw%2Fi7jSV0YfwNA%2BwGmTreKt3ijRs5QjVaDvXakZ%2FMT2jtcxVSETRzGoDDI%2Bza%2FcPjDs%2FAILxHlMcw1bn9vAY6pgFN6XZ6KMOfMHaOyHMUTFpRl0bTSSSgq2Q%2FjhCg1yLin9K4BxEFwIcekn%2FWV3s2nN9je8oBAqMD6qX9ZOVtHxFkWPIrZ%2FdzAnMSBslaM0oXZMR5%2FL8eUfxcf%2FxHimiOXhfMs4rDAWzO%2FsOwh15UpcvgeQgbg7Sz5Tixwse%2BdyZH%2FJu%2BvezP4A6JF68%2BYJKLTWyH%2BrckgsCoiPbOgK7qFRYydvd3Zqoq&X-Amz-Signature=86443e93299421f291c4792e77e21e115cd8a2c261da83444a17f1c9763e6c72&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQY3DGCS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BH95ZK9xFkDsAoHaDcRRlocvBxzM5RRt6r0xd2WJwaAiA99scwuoFYzg8agwbtYyglm7UgO%2FdpDrTEuh85FJavGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjvaxhQtWTdW4LerKtwDDC1Ir0%2BnE7f7BFfKyT4moaH7SGrXEfsRS5k5BT2DcPdRMCy%2F2ouqUqpLWN2EZNUV3cTmAc2Zq6%2B0UQMatY7ibdY7G6gC9usN4wuVgHhgK4jEDNWddU6mPGz%2F6oFHmNFkQ%2BejA5qAyPGdZfTrU2V7Co0m9SH2g%2BzxtliW7fBo57UDaVTyl2VujpJ5TcOf8RxdIxQeZGdMmN0NQSPDRJbeNV7rWZqTONK9RznLHj1XLkuCvicCRCpINVVT25vbtwS3%2FRgrGuko1cyOvXM1CcSwf3GIlP4izK0KCB2K1AvXqMwgSpj8wko699l2jabHn1ADKib7zWcoVuquYxCWyAhUvwWe0vd51IERfY0M7si1kuNKeHZkkevo%2BMgpTaUx3tszfD1Re1XRa3lad5lt4AWRUicBY30K%2FL2Qd9rG8r5pujSuKyCDXzQZMx80lak8N5QwSzCYajNhMqygS3l%2BrZeOvsWwrlXmBSQUHboKM2W5xFvqU81PxHBltca45Oy0MqUqFCRRhxCEhDIpnykOa%2FjtnO9bZvGKqCDVc4ZsPlhPtb110fAaw%2Fi7jSV0YfwNA%2BwGmTreKt3ijRs5QjVaDvXakZ%2FMT2jtcxVSETRzGoDDI%2Bza%2FcPjDs%2FAILxHlMcw1bn9vAY6pgFN6XZ6KMOfMHaOyHMUTFpRl0bTSSSgq2Q%2FjhCg1yLin9K4BxEFwIcekn%2FWV3s2nN9je8oBAqMD6qX9ZOVtHxFkWPIrZ%2FdzAnMSBslaM0oXZMR5%2FL8eUfxcf%2FxHimiOXhfMs4rDAWzO%2FsOwh15UpcvgeQgbg7Sz5Tixwse%2BdyZH%2FJu%2BvezP4A6JF68%2BYJKLTWyH%2BrckgsCoiPbOgK7qFRYydvd3Zqoq&X-Amz-Signature=f52978af9c02a606fcfb49a7d6f12696837b3d7f8870a3ec14b9d06b0076c2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQY3DGCS%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BH95ZK9xFkDsAoHaDcRRlocvBxzM5RRt6r0xd2WJwaAiA99scwuoFYzg8agwbtYyglm7UgO%2FdpDrTEuh85FJavGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFjvaxhQtWTdW4LerKtwDDC1Ir0%2BnE7f7BFfKyT4moaH7SGrXEfsRS5k5BT2DcPdRMCy%2F2ouqUqpLWN2EZNUV3cTmAc2Zq6%2B0UQMatY7ibdY7G6gC9usN4wuVgHhgK4jEDNWddU6mPGz%2F6oFHmNFkQ%2BejA5qAyPGdZfTrU2V7Co0m9SH2g%2BzxtliW7fBo57UDaVTyl2VujpJ5TcOf8RxdIxQeZGdMmN0NQSPDRJbeNV7rWZqTONK9RznLHj1XLkuCvicCRCpINVVT25vbtwS3%2FRgrGuko1cyOvXM1CcSwf3GIlP4izK0KCB2K1AvXqMwgSpj8wko699l2jabHn1ADKib7zWcoVuquYxCWyAhUvwWe0vd51IERfY0M7si1kuNKeHZkkevo%2BMgpTaUx3tszfD1Re1XRa3lad5lt4AWRUicBY30K%2FL2Qd9rG8r5pujSuKyCDXzQZMx80lak8N5QwSzCYajNhMqygS3l%2BrZeOvsWwrlXmBSQUHboKM2W5xFvqU81PxHBltca45Oy0MqUqFCRRhxCEhDIpnykOa%2FjtnO9bZvGKqCDVc4ZsPlhPtb110fAaw%2Fi7jSV0YfwNA%2BwGmTreKt3ijRs5QjVaDvXakZ%2FMT2jtcxVSETRzGoDDI%2Bza%2FcPjDs%2FAILxHlMcw1bn9vAY6pgFN6XZ6KMOfMHaOyHMUTFpRl0bTSSSgq2Q%2FjhCg1yLin9K4BxEFwIcekn%2FWV3s2nN9je8oBAqMD6qX9ZOVtHxFkWPIrZ%2FdzAnMSBslaM0oXZMR5%2FL8eUfxcf%2FxHimiOXhfMs4rDAWzO%2FsOwh15UpcvgeQgbg7Sz5Tixwse%2BdyZH%2FJu%2BvezP4A6JF68%2BYJKLTWyH%2BrckgsCoiPbOgK7qFRYydvd3Zqoq&X-Amz-Signature=525dc3b1e8c9d0879147bcb43ef66a1cd725b80baf70d7a2dab67e6d7c0abad6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
