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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC23JIYO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHoLK8NlaJJWOpTSdvgvp%2Fcf56d%2FkLU8D%2BcjybSfOj%2BRAiEAtqvqjFTmFgLjrwgxVbJoAKEJbgkj1VGvoApf0UHvwH8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJlsmlZeN%2Fej2fPVgCrcA0T7dkvHfVfxgVmeKHLvjF9CfqJ7VEEaOdp2NEhc5l7QR8EnQAbVPskhwgRMUfgYXYC2SQaKsZMaHf6bOrQA9x6M9v%2FyA8BYRKygGL4U9Q2e0o9eEicPvjkliCA5lj3gt%2FG0Kzx09%2FVMRyaRMkcDNbdSatSGQDtsEM9YRQHtJxJy6xRvaBhGVkc4zX2v3xazDZisKP480LIMZKZQaj8cfsARh%2Fxz%2FoWVrV3%2BGFcsVloKFMcWTxS92iSQwhliN1ieTXUXtzWS76xCjdm7L6PWKJc3OeMHH%2BN8cJA0W%2FHjGb3aU2Rfg%2FLBRZRyNCZfkkgTn4V2WKoMSEu5jpclmO6b5BhtbmkhuQt5%2FMEI2DmFXceOpOSm3JklnBtD5AsyPwZSFL0kd3XlbfpJcmjG3edtHmrUQV5qJCo6pr8Vg1rv4p0otRPV3q%2FLJssWQTebzmGLjDYL1nKqyYgM5N0EB%2FQXJ7mpfw2rPxDNronx5ZuK%2FKgE61r1C4KTh1zm3V4f%2Ft4mWwT4S%2F4Ul%2B%2BY0IMKUmH30heiNuREmj1w1TbsaJr6VgdAxbg0ZHOJvmaeFhvvyrTJjfE7DVXKEivuoC2qCOf%2BSQroOXcZmfcPEyeCXlnLsZRqp6h5cInIQwyy%2FX47MITOpMMGOqUBu1ORye6WApiMqYWuyvKxduyX46RSieeLFsT1IPC1noUpvjvQtxJawlN6E1bwKq3Nb4OLwHRchJYTSmCzgZf14Otbmpt%2B4u2AiHtPN5nAgW91Dap73bVR5DplQQmyfxD%2FPB366473ed%2Bu2BwZTRN%2B1NtFOtAQFkOCtbZKhamXzB3X56dO%2FV4yHIy0Joi9ZEzR5prUNSceS8yik2LoCDkWm8gW62uz&X-Amz-Signature=b63ab28e997052653b0db4a8e7c6f13c07f6e123d30b3defc1ce4c7562d837b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC23JIYO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHoLK8NlaJJWOpTSdvgvp%2Fcf56d%2FkLU8D%2BcjybSfOj%2BRAiEAtqvqjFTmFgLjrwgxVbJoAKEJbgkj1VGvoApf0UHvwH8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJlsmlZeN%2Fej2fPVgCrcA0T7dkvHfVfxgVmeKHLvjF9CfqJ7VEEaOdp2NEhc5l7QR8EnQAbVPskhwgRMUfgYXYC2SQaKsZMaHf6bOrQA9x6M9v%2FyA8BYRKygGL4U9Q2e0o9eEicPvjkliCA5lj3gt%2FG0Kzx09%2FVMRyaRMkcDNbdSatSGQDtsEM9YRQHtJxJy6xRvaBhGVkc4zX2v3xazDZisKP480LIMZKZQaj8cfsARh%2Fxz%2FoWVrV3%2BGFcsVloKFMcWTxS92iSQwhliN1ieTXUXtzWS76xCjdm7L6PWKJc3OeMHH%2BN8cJA0W%2FHjGb3aU2Rfg%2FLBRZRyNCZfkkgTn4V2WKoMSEu5jpclmO6b5BhtbmkhuQt5%2FMEI2DmFXceOpOSm3JklnBtD5AsyPwZSFL0kd3XlbfpJcmjG3edtHmrUQV5qJCo6pr8Vg1rv4p0otRPV3q%2FLJssWQTebzmGLjDYL1nKqyYgM5N0EB%2FQXJ7mpfw2rPxDNronx5ZuK%2FKgE61r1C4KTh1zm3V4f%2Ft4mWwT4S%2F4Ul%2B%2BY0IMKUmH30heiNuREmj1w1TbsaJr6VgdAxbg0ZHOJvmaeFhvvyrTJjfE7DVXKEivuoC2qCOf%2BSQroOXcZmfcPEyeCXlnLsZRqp6h5cInIQwyy%2FX47MITOpMMGOqUBu1ORye6WApiMqYWuyvKxduyX46RSieeLFsT1IPC1noUpvjvQtxJawlN6E1bwKq3Nb4OLwHRchJYTSmCzgZf14Otbmpt%2B4u2AiHtPN5nAgW91Dap73bVR5DplQQmyfxD%2FPB366473ed%2Bu2BwZTRN%2B1NtFOtAQFkOCtbZKhamXzB3X56dO%2FV4yHIy0Joi9ZEzR5prUNSceS8yik2LoCDkWm8gW62uz&X-Amz-Signature=6e8dd9a7e095451f116db08578d2db0358d122a4ed433db33d126c38950727d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC23JIYO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHoLK8NlaJJWOpTSdvgvp%2Fcf56d%2FkLU8D%2BcjybSfOj%2BRAiEAtqvqjFTmFgLjrwgxVbJoAKEJbgkj1VGvoApf0UHvwH8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJlsmlZeN%2Fej2fPVgCrcA0T7dkvHfVfxgVmeKHLvjF9CfqJ7VEEaOdp2NEhc5l7QR8EnQAbVPskhwgRMUfgYXYC2SQaKsZMaHf6bOrQA9x6M9v%2FyA8BYRKygGL4U9Q2e0o9eEicPvjkliCA5lj3gt%2FG0Kzx09%2FVMRyaRMkcDNbdSatSGQDtsEM9YRQHtJxJy6xRvaBhGVkc4zX2v3xazDZisKP480LIMZKZQaj8cfsARh%2Fxz%2FoWVrV3%2BGFcsVloKFMcWTxS92iSQwhliN1ieTXUXtzWS76xCjdm7L6PWKJc3OeMHH%2BN8cJA0W%2FHjGb3aU2Rfg%2FLBRZRyNCZfkkgTn4V2WKoMSEu5jpclmO6b5BhtbmkhuQt5%2FMEI2DmFXceOpOSm3JklnBtD5AsyPwZSFL0kd3XlbfpJcmjG3edtHmrUQV5qJCo6pr8Vg1rv4p0otRPV3q%2FLJssWQTebzmGLjDYL1nKqyYgM5N0EB%2FQXJ7mpfw2rPxDNronx5ZuK%2FKgE61r1C4KTh1zm3V4f%2Ft4mWwT4S%2F4Ul%2B%2BY0IMKUmH30heiNuREmj1w1TbsaJr6VgdAxbg0ZHOJvmaeFhvvyrTJjfE7DVXKEivuoC2qCOf%2BSQroOXcZmfcPEyeCXlnLsZRqp6h5cInIQwyy%2FX47MITOpMMGOqUBu1ORye6WApiMqYWuyvKxduyX46RSieeLFsT1IPC1noUpvjvQtxJawlN6E1bwKq3Nb4OLwHRchJYTSmCzgZf14Otbmpt%2B4u2AiHtPN5nAgW91Dap73bVR5DplQQmyfxD%2FPB366473ed%2Bu2BwZTRN%2B1NtFOtAQFkOCtbZKhamXzB3X56dO%2FV4yHIy0Joi9ZEzR5prUNSceS8yik2LoCDkWm8gW62uz&X-Amz-Signature=b30f1d86ab7d34a94e06693533699900c6523f43211916fd918c6aebc45f6b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
