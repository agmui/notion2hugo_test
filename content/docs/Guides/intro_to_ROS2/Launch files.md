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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5CDXW3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTzE2bAREa3RfBelRmXPvII66ZY68kWaK1xUQ6GNiQBQIhAIW6JOCbB4l%2F3EZ5Pt1XGF%2Fa9QT2Gw4PvweCUqLvCQRNKv8DCD0QABoMNjM3NDIzMTgzODA1IgwWx7sT1TqJ2JdgwNUq3AMZMf8DWnlqdgwBpRfdvVGsc79yrzB0FhZ8K3A93hfhIpGhj6FyaBjeOO4Z61EmDURDUsyoaeUYPuV3XjyVUnNRwIzT6NhZiRv7GdbO8QBgLeCnXt%2BGYv%2BYrLcv7P3vvZ7cR1Qr1b8jP2WnQog6%2BPobzu%2FVCbgSyRZ99GsWhK26UfcIks%2BqvR3dAnm2Atkble2%2B6dxiNNbWZjNOeyj9WDiPV2wvnSQfrseGeJxIuYif967E28YCN2G9eT8Z4qSpBuAnnU%2B74OU93WyRmkitKM1HWvAlGDDWOOo%2BSOwJSno8PbSBdNK9Of3V%2F9lXglcdNsaDHnVaCoVik9e8rB6uS9uFCyVwsCcczTSIwLjlwZ8XzLX4p5vdTtuntd04v3tQxhYjrZzV1ceUkyqubToQbz5fEbAacNqrBHFMC%2FSYKB3Ir%2FuvPjSlfH5cgGuh11BaPh%2BEuKALf37KR3yC0whSQ1Zg0hf4W6fnTBNprIveFalcMepkr5K43uSkpOBNc6gC82bExwFI07R4I31l6QHWqBwGecgtsFCnRHi0FQ691BEVQxZS%2FOLOtjVV%2F0Durazq%2B%2BQ7PyOmEkE%2FQako0SQCxuIVn0G3bECsdZtBt98lPjwHxpSjM7ySoG%2F4RsmpmjCl%2BIvEBjqkAXmLJcrYfX8%2FRrqFlNB15ZgZfLbYlz3UQ9iOkV6nhJr6s8%2BjiIZWmbK3Os3RSA4qua4%2FNIKAj0ERXcgm%2F1D2o%2FcOYXTwdC1Y3WDe1BiMMsRcw%2BF2WMDoYeBVVIr5yGHqY80eRf5wGvEFX5ZZ0sRSR%2FTtVLFcrjyQdXulROjbsv07Ik3%2Bd0f%2BCC8VNrhTLT%2B5ORv3gUBSqtCG19Nu1SXfp12GrIDM&X-Amz-Signature=dd7a5dab46ebba39c8ff6d96699df28d6bda4a7b11b2a85474498eda7d55f6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5CDXW3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTzE2bAREa3RfBelRmXPvII66ZY68kWaK1xUQ6GNiQBQIhAIW6JOCbB4l%2F3EZ5Pt1XGF%2Fa9QT2Gw4PvweCUqLvCQRNKv8DCD0QABoMNjM3NDIzMTgzODA1IgwWx7sT1TqJ2JdgwNUq3AMZMf8DWnlqdgwBpRfdvVGsc79yrzB0FhZ8K3A93hfhIpGhj6FyaBjeOO4Z61EmDURDUsyoaeUYPuV3XjyVUnNRwIzT6NhZiRv7GdbO8QBgLeCnXt%2BGYv%2BYrLcv7P3vvZ7cR1Qr1b8jP2WnQog6%2BPobzu%2FVCbgSyRZ99GsWhK26UfcIks%2BqvR3dAnm2Atkble2%2B6dxiNNbWZjNOeyj9WDiPV2wvnSQfrseGeJxIuYif967E28YCN2G9eT8Z4qSpBuAnnU%2B74OU93WyRmkitKM1HWvAlGDDWOOo%2BSOwJSno8PbSBdNK9Of3V%2F9lXglcdNsaDHnVaCoVik9e8rB6uS9uFCyVwsCcczTSIwLjlwZ8XzLX4p5vdTtuntd04v3tQxhYjrZzV1ceUkyqubToQbz5fEbAacNqrBHFMC%2FSYKB3Ir%2FuvPjSlfH5cgGuh11BaPh%2BEuKALf37KR3yC0whSQ1Zg0hf4W6fnTBNprIveFalcMepkr5K43uSkpOBNc6gC82bExwFI07R4I31l6QHWqBwGecgtsFCnRHi0FQ691BEVQxZS%2FOLOtjVV%2F0Durazq%2B%2BQ7PyOmEkE%2FQako0SQCxuIVn0G3bECsdZtBt98lPjwHxpSjM7ySoG%2F4RsmpmjCl%2BIvEBjqkAXmLJcrYfX8%2FRrqFlNB15ZgZfLbYlz3UQ9iOkV6nhJr6s8%2BjiIZWmbK3Os3RSA4qua4%2FNIKAj0ERXcgm%2F1D2o%2FcOYXTwdC1Y3WDe1BiMMsRcw%2BF2WMDoYeBVVIr5yGHqY80eRf5wGvEFX5ZZ0sRSR%2FTtVLFcrjyQdXulROjbsv07Ik3%2Bd0f%2BCC8VNrhTLT%2B5ORv3gUBSqtCG19Nu1SXfp12GrIDM&X-Amz-Signature=3b70d939fab5fbcdd547c0a826f3409e9d2dc932f6f88e529935fdfe06c7df1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5CDXW3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTzE2bAREa3RfBelRmXPvII66ZY68kWaK1xUQ6GNiQBQIhAIW6JOCbB4l%2F3EZ5Pt1XGF%2Fa9QT2Gw4PvweCUqLvCQRNKv8DCD0QABoMNjM3NDIzMTgzODA1IgwWx7sT1TqJ2JdgwNUq3AMZMf8DWnlqdgwBpRfdvVGsc79yrzB0FhZ8K3A93hfhIpGhj6FyaBjeOO4Z61EmDURDUsyoaeUYPuV3XjyVUnNRwIzT6NhZiRv7GdbO8QBgLeCnXt%2BGYv%2BYrLcv7P3vvZ7cR1Qr1b8jP2WnQog6%2BPobzu%2FVCbgSyRZ99GsWhK26UfcIks%2BqvR3dAnm2Atkble2%2B6dxiNNbWZjNOeyj9WDiPV2wvnSQfrseGeJxIuYif967E28YCN2G9eT8Z4qSpBuAnnU%2B74OU93WyRmkitKM1HWvAlGDDWOOo%2BSOwJSno8PbSBdNK9Of3V%2F9lXglcdNsaDHnVaCoVik9e8rB6uS9uFCyVwsCcczTSIwLjlwZ8XzLX4p5vdTtuntd04v3tQxhYjrZzV1ceUkyqubToQbz5fEbAacNqrBHFMC%2FSYKB3Ir%2FuvPjSlfH5cgGuh11BaPh%2BEuKALf37KR3yC0whSQ1Zg0hf4W6fnTBNprIveFalcMepkr5K43uSkpOBNc6gC82bExwFI07R4I31l6QHWqBwGecgtsFCnRHi0FQ691BEVQxZS%2FOLOtjVV%2F0Durazq%2B%2BQ7PyOmEkE%2FQako0SQCxuIVn0G3bECsdZtBt98lPjwHxpSjM7ySoG%2F4RsmpmjCl%2BIvEBjqkAXmLJcrYfX8%2FRrqFlNB15ZgZfLbYlz3UQ9iOkV6nhJr6s8%2BjiIZWmbK3Os3RSA4qua4%2FNIKAj0ERXcgm%2F1D2o%2FcOYXTwdC1Y3WDe1BiMMsRcw%2BF2WMDoYeBVVIr5yGHqY80eRf5wGvEFX5ZZ0sRSR%2FTtVLFcrjyQdXulROjbsv07Ik3%2Bd0f%2BCC8VNrhTLT%2B5ORv3gUBSqtCG19Nu1SXfp12GrIDM&X-Amz-Signature=a55cec5ea52075c84ee1ecc7d676bdf6bfee77dd5c5cb58865b1e48bc00e5ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
