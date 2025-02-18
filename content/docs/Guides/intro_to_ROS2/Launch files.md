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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIO3M5N%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDkIbUVG0dsrztJZGR1RT%2Fky3ww5rgbVbC5n9TXYR8XgQIhALFPqAQVhjpOQll4Cg1MfEWprjrspGMXgBMzOhSoF5YTKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOC30eMOCL4JKmvsYq3AOVp4CrcSnagemOqna41yJGVzDKoZwiBDwJ8Uz9vCWx6ExDoQuTF3M5ObDVOdsACr0V3JkdPtd%2Bo9Bof7OH%2FmFlcqd5Qa%2BHLsqmkuq9m8%2FBlUnooDnS8uKbCw%2BRy65rNUpyST1nPkq6N%2BAYvgU4jGudjuGBvBjUQlQFcZy5QQ%2BAXw%2F6BiWL4OlXSSxQ%2BhmLMSoezWL4SpigGjhSWtUXf8JcBMDh2rzejqwLaJWTbTjHge6PUcMSRd4O%2Bdd14uCsTFgTDLkCSN73kx1U8zBTuLZ2rSDMCHXScdrNrkGaJYy8UWhLPNRLgYoQxgm70rbfu5sEmxCG6I0SeDPCA9AD88v3oTvZP0wICrIZ2r4PPMMc5rOYjHg%2FhsU0llNJHiMklOSUZxwfG34MtasBNfNsUyNj1iYAL1OnjQ%2BxP714LOMfoWM%2F7%2BvVXYVi1Y1XSOSqzEptzwo9SUMGVNDYeflJwEK3LT6l7ZuS7jHiuYUKRsBI0m75fMzzfwWHtlx%2F5zf1UTc0%2BKaE4pdLEysvuKz8nMBKO%2BR9vNJtEQdx7HVxZK38mWji%2FZRH%2BL4nRuOR7wur%2BHqJElLi2%2BCGVdQFT4inDc%2BeodZgT%2Bb%2Fob0AL9tW%2FSHS5du0lAoaSctJzC0eMTCdutO9BjqkAXXmIzgxbJjwcNs7YSxSiJxZ2n7kAVz1W%2FraTUgX%2BPz98V0dTRNGcmicnqmwBvkyPst2cAhmdI6Jksa6EN9LIxrAcsQzpgL9PGioL0BUCOIo2Q0sh%2FTvIc45C%2B62HJRdyemdvd2LiXrnmM0ceAp65X2JOPflZQEcTxsbdeZ3ONryk59SDoTPxopnCLJUhaZWpwPqHWeMLVJcwFC8Kmt63xjafDSP&X-Amz-Signature=336cb58d839178b67ea411a6b46ac0df82f85cb5f2cf0ff462306eabfde82ded&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIO3M5N%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDkIbUVG0dsrztJZGR1RT%2Fky3ww5rgbVbC5n9TXYR8XgQIhALFPqAQVhjpOQll4Cg1MfEWprjrspGMXgBMzOhSoF5YTKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOC30eMOCL4JKmvsYq3AOVp4CrcSnagemOqna41yJGVzDKoZwiBDwJ8Uz9vCWx6ExDoQuTF3M5ObDVOdsACr0V3JkdPtd%2Bo9Bof7OH%2FmFlcqd5Qa%2BHLsqmkuq9m8%2FBlUnooDnS8uKbCw%2BRy65rNUpyST1nPkq6N%2BAYvgU4jGudjuGBvBjUQlQFcZy5QQ%2BAXw%2F6BiWL4OlXSSxQ%2BhmLMSoezWL4SpigGjhSWtUXf8JcBMDh2rzejqwLaJWTbTjHge6PUcMSRd4O%2Bdd14uCsTFgTDLkCSN73kx1U8zBTuLZ2rSDMCHXScdrNrkGaJYy8UWhLPNRLgYoQxgm70rbfu5sEmxCG6I0SeDPCA9AD88v3oTvZP0wICrIZ2r4PPMMc5rOYjHg%2FhsU0llNJHiMklOSUZxwfG34MtasBNfNsUyNj1iYAL1OnjQ%2BxP714LOMfoWM%2F7%2BvVXYVi1Y1XSOSqzEptzwo9SUMGVNDYeflJwEK3LT6l7ZuS7jHiuYUKRsBI0m75fMzzfwWHtlx%2F5zf1UTc0%2BKaE4pdLEysvuKz8nMBKO%2BR9vNJtEQdx7HVxZK38mWji%2FZRH%2BL4nRuOR7wur%2BHqJElLi2%2BCGVdQFT4inDc%2BeodZgT%2Bb%2Fob0AL9tW%2FSHS5du0lAoaSctJzC0eMTCdutO9BjqkAXXmIzgxbJjwcNs7YSxSiJxZ2n7kAVz1W%2FraTUgX%2BPz98V0dTRNGcmicnqmwBvkyPst2cAhmdI6Jksa6EN9LIxrAcsQzpgL9PGioL0BUCOIo2Q0sh%2FTvIc45C%2B62HJRdyemdvd2LiXrnmM0ceAp65X2JOPflZQEcTxsbdeZ3ONryk59SDoTPxopnCLJUhaZWpwPqHWeMLVJcwFC8Kmt63xjafDSP&X-Amz-Signature=41ba42a67cb4f0c6f9841a67a46ec68908f4bd2980f066d2333f6c4d245e1441&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIO3M5N%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDkIbUVG0dsrztJZGR1RT%2Fky3ww5rgbVbC5n9TXYR8XgQIhALFPqAQVhjpOQll4Cg1MfEWprjrspGMXgBMzOhSoF5YTKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOC30eMOCL4JKmvsYq3AOVp4CrcSnagemOqna41yJGVzDKoZwiBDwJ8Uz9vCWx6ExDoQuTF3M5ObDVOdsACr0V3JkdPtd%2Bo9Bof7OH%2FmFlcqd5Qa%2BHLsqmkuq9m8%2FBlUnooDnS8uKbCw%2BRy65rNUpyST1nPkq6N%2BAYvgU4jGudjuGBvBjUQlQFcZy5QQ%2BAXw%2F6BiWL4OlXSSxQ%2BhmLMSoezWL4SpigGjhSWtUXf8JcBMDh2rzejqwLaJWTbTjHge6PUcMSRd4O%2Bdd14uCsTFgTDLkCSN73kx1U8zBTuLZ2rSDMCHXScdrNrkGaJYy8UWhLPNRLgYoQxgm70rbfu5sEmxCG6I0SeDPCA9AD88v3oTvZP0wICrIZ2r4PPMMc5rOYjHg%2FhsU0llNJHiMklOSUZxwfG34MtasBNfNsUyNj1iYAL1OnjQ%2BxP714LOMfoWM%2F7%2BvVXYVi1Y1XSOSqzEptzwo9SUMGVNDYeflJwEK3LT6l7ZuS7jHiuYUKRsBI0m75fMzzfwWHtlx%2F5zf1UTc0%2BKaE4pdLEysvuKz8nMBKO%2BR9vNJtEQdx7HVxZK38mWji%2FZRH%2BL4nRuOR7wur%2BHqJElLi2%2BCGVdQFT4inDc%2BeodZgT%2Bb%2Fob0AL9tW%2FSHS5du0lAoaSctJzC0eMTCdutO9BjqkAXXmIzgxbJjwcNs7YSxSiJxZ2n7kAVz1W%2FraTUgX%2BPz98V0dTRNGcmicnqmwBvkyPst2cAhmdI6Jksa6EN9LIxrAcsQzpgL9PGioL0BUCOIo2Q0sh%2FTvIc45C%2B62HJRdyemdvd2LiXrnmM0ceAp65X2JOPflZQEcTxsbdeZ3ONryk59SDoTPxopnCLJUhaZWpwPqHWeMLVJcwFC8Kmt63xjafDSP&X-Amz-Signature=2a1a1ce66f3cb10bc5d918d3efc2ba9d215702bc1c943c5f0bafaba4a4995010&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
