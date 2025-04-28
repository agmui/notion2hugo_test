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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFFQWAIB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Nz864%2BxqNHtNY1c5vFIBEv5Etf97qQ2tt9Zcs42i1QIgC0HSCcpAornArlreedVv1I4gDggo1cBnwJ9jNzRb5%2BUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH82xAV7D5mT2c7ykircA1CfYVmKpSUyAy5791TLoXIeRRgIiono7cL7S3MD2uSd4%2FWdKK6vLS29ec9zJ0bvVq4CoBFp2%2BGIV07xKsFsT06WJ7UVhtSXvQ6%2FnpwYCQnP9ggU%2BFBK09XKAUEl%2BOZq3uSA%2Br%2FIrVsE2%2B81tz8T1cgA2MOdjHoDPnfDng2G5YpwYIwsgHgPKzeziK4P%2BD8duTDJ5RwSvn2Q1sIIIyyrJzTA5zHdV%2BcHr5T4jBkq69jWZ3hmIymwbzr0DD23pfIlpCr%2FVmLmq0bR%2Fzu3o3miCJOLJRPYWHjSs1tM%2FyeM6UsWzIzwgQw%2FCYupCFbsO8QukallENQ7Vv2b7%2FDmP30MIiaetsTAz%2FYQWiWgIIxKJmrA1qkJHqAPrBK90Uel1b7mbb6V1JPxhzFGMRelDlf4%2BMF5xo5CNMmohsBj5imP%2FgfjQeC2mrp9zjMsH%2F5IM4MqEjjKON1otjIqq%2B6pj%2FlfEoLgWvRDZ4lN71UDVxDVXiQmW%2FbHaQCzHsU4suw2tKlRnM9q2i0AbNWtR5WPi9YilCGOjRw%2Bs3gPcHp7%2BjWs8v48YVCBDFZaQqhXSQr3tDwaXY8s9dD5qdM1IMDfW%2FPmjo6qQLJgivVl3JUpCNx%2B8U1UwdqvF8oX%2BqL1uwk2MJ2bv8AGOqUBB8K9vLQzx2b4JAycQgPZpUctodoOIXtGpIHSrXG0RpuGQNNmNZeWsogUBSi%2FK9ysGhaeMmZ1ENzDU0kqRUiU7oEavdOnZsKFy8UbjDKGryK9m9ZPRUL1Fzxdv8QD2YjaIkwkiMo3Dd8j1sweAUYaHljXIA8ZYwlIfV4DSz7vzXEW0KrR%2F%2Fwaa10v7GcWilmaHOIUCglyAPobjkl7tS7h8nzUM4Lc&X-Amz-Signature=409f97dbc114e415b4f9eaee23b00f5885f002b5cdfac354eec4c8b479e38baf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFFQWAIB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Nz864%2BxqNHtNY1c5vFIBEv5Etf97qQ2tt9Zcs42i1QIgC0HSCcpAornArlreedVv1I4gDggo1cBnwJ9jNzRb5%2BUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH82xAV7D5mT2c7ykircA1CfYVmKpSUyAy5791TLoXIeRRgIiono7cL7S3MD2uSd4%2FWdKK6vLS29ec9zJ0bvVq4CoBFp2%2BGIV07xKsFsT06WJ7UVhtSXvQ6%2FnpwYCQnP9ggU%2BFBK09XKAUEl%2BOZq3uSA%2Br%2FIrVsE2%2B81tz8T1cgA2MOdjHoDPnfDng2G5YpwYIwsgHgPKzeziK4P%2BD8duTDJ5RwSvn2Q1sIIIyyrJzTA5zHdV%2BcHr5T4jBkq69jWZ3hmIymwbzr0DD23pfIlpCr%2FVmLmq0bR%2Fzu3o3miCJOLJRPYWHjSs1tM%2FyeM6UsWzIzwgQw%2FCYupCFbsO8QukallENQ7Vv2b7%2FDmP30MIiaetsTAz%2FYQWiWgIIxKJmrA1qkJHqAPrBK90Uel1b7mbb6V1JPxhzFGMRelDlf4%2BMF5xo5CNMmohsBj5imP%2FgfjQeC2mrp9zjMsH%2F5IM4MqEjjKON1otjIqq%2B6pj%2FlfEoLgWvRDZ4lN71UDVxDVXiQmW%2FbHaQCzHsU4suw2tKlRnM9q2i0AbNWtR5WPi9YilCGOjRw%2Bs3gPcHp7%2BjWs8v48YVCBDFZaQqhXSQr3tDwaXY8s9dD5qdM1IMDfW%2FPmjo6qQLJgivVl3JUpCNx%2B8U1UwdqvF8oX%2BqL1uwk2MJ2bv8AGOqUBB8K9vLQzx2b4JAycQgPZpUctodoOIXtGpIHSrXG0RpuGQNNmNZeWsogUBSi%2FK9ysGhaeMmZ1ENzDU0kqRUiU7oEavdOnZsKFy8UbjDKGryK9m9ZPRUL1Fzxdv8QD2YjaIkwkiMo3Dd8j1sweAUYaHljXIA8ZYwlIfV4DSz7vzXEW0KrR%2F%2Fwaa10v7GcWilmaHOIUCglyAPobjkl7tS7h8nzUM4Lc&X-Amz-Signature=1af09536dd7b245ac75fd211de901f0cbfbe6281a8fc708d1f6cf2e7acbd3290&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFFQWAIB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Nz864%2BxqNHtNY1c5vFIBEv5Etf97qQ2tt9Zcs42i1QIgC0HSCcpAornArlreedVv1I4gDggo1cBnwJ9jNzRb5%2BUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH82xAV7D5mT2c7ykircA1CfYVmKpSUyAy5791TLoXIeRRgIiono7cL7S3MD2uSd4%2FWdKK6vLS29ec9zJ0bvVq4CoBFp2%2BGIV07xKsFsT06WJ7UVhtSXvQ6%2FnpwYCQnP9ggU%2BFBK09XKAUEl%2BOZq3uSA%2Br%2FIrVsE2%2B81tz8T1cgA2MOdjHoDPnfDng2G5YpwYIwsgHgPKzeziK4P%2BD8duTDJ5RwSvn2Q1sIIIyyrJzTA5zHdV%2BcHr5T4jBkq69jWZ3hmIymwbzr0DD23pfIlpCr%2FVmLmq0bR%2Fzu3o3miCJOLJRPYWHjSs1tM%2FyeM6UsWzIzwgQw%2FCYupCFbsO8QukallENQ7Vv2b7%2FDmP30MIiaetsTAz%2FYQWiWgIIxKJmrA1qkJHqAPrBK90Uel1b7mbb6V1JPxhzFGMRelDlf4%2BMF5xo5CNMmohsBj5imP%2FgfjQeC2mrp9zjMsH%2F5IM4MqEjjKON1otjIqq%2B6pj%2FlfEoLgWvRDZ4lN71UDVxDVXiQmW%2FbHaQCzHsU4suw2tKlRnM9q2i0AbNWtR5WPi9YilCGOjRw%2Bs3gPcHp7%2BjWs8v48YVCBDFZaQqhXSQr3tDwaXY8s9dD5qdM1IMDfW%2FPmjo6qQLJgivVl3JUpCNx%2B8U1UwdqvF8oX%2BqL1uwk2MJ2bv8AGOqUBB8K9vLQzx2b4JAycQgPZpUctodoOIXtGpIHSrXG0RpuGQNNmNZeWsogUBSi%2FK9ysGhaeMmZ1ENzDU0kqRUiU7oEavdOnZsKFy8UbjDKGryK9m9ZPRUL1Fzxdv8QD2YjaIkwkiMo3Dd8j1sweAUYaHljXIA8ZYwlIfV4DSz7vzXEW0KrR%2F%2Fwaa10v7GcWilmaHOIUCglyAPobjkl7tS7h8nzUM4Lc&X-Amz-Signature=8930dd0e7c925faad06e37a02e7af9709aab425bffdbee05b58bde44a3130066&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
