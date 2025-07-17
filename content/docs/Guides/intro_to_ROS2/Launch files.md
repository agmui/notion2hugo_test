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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3FBYBP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDZ5E4QMRjn%2BQTsPsycCLYUL74luwg4MyM3maQtnhGDSQIgTL7Y5TNcis2pHhnS0TuN10GjKu6ZMBtl70V6GeOTOmUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNYY0iXW6JWtTHDC8SrcAyCDeR%2FHa0spxk6LahkZldJ0fKRV0bkqwXAe4z%2FAdata9DI1Tvd20inYYGehPCyabWp0u%2F0mKn485iiGksWy8q1d8utyPvx6WlGbMmT0BlWU3Y1Ytq2wAYJTxfaHR9Mt0Huq5zULat%2FuPcpMjCrbNmgjqEQrxkKA4FdlkL%2F%2BVrx9v4pps6cAN4%2FQyy%2FvAGFddDaahXKfiGqJxnfwe%2FR1ztZmNZl%2Fes4wref6UV4%2BVhBmpcXnU7gVnuVvhMYokTcdu0aPvs4HOSW2COcifv35pJduTTCNlLGaa1UuED%2F1%2BL1vfZflhCvA0suWfapionAJ3A5O2OBVhWVsiUSBQbyD77R45ncYcepp4e2K5NM5hPaF4GyzxBQgO2ll78pbAuGJRHIR2nUnxFBIVfIvHr6nMQh44xO4gBhZB47Z0wmFsKDFZeuIKgq3Q3YKZ2BAqsJHViBPQmVuhe%2BOvKTreKzMESxHSIQWCLsKalGMtlpCfpeSn%2F3mQw55aIsyL2aV7v887s4TbrLCice%2B8ZfVbQ3spTvm3BlpTF8QOgQgzkGIoobpeZ3cEGDDIy7fsq1L4ZIUzqjxxh4xIbxAxkGlNscKd0mzl3diTTyJs31UENF%2FqusDsGSu4J8FAXnCX0gkMOuV4sMGOqUBUIBUWjzcNoK0%2BIyX7FniCAB%2BrqKNLpd9PZihcsSdlJui2wFH9VAOWwMmGHtnPjBirfBHYCBGfl1TdJhFaOi89fbeImZXAVPWSoejv9NvfViiE4N2x1KRz5dpMJeI9GbLhznd4MdbLgGU4BjagJsw%2FvVny8tt9SWJuVRsaM77MKEmZ%2B%2BCKLPNNgULoh%2BnaXc%2FuYcG24HcLmdxoyRTVrPRj6q92e6g&X-Amz-Signature=724e4ea1c20c03d180b2cb149aaff01b909fde3048efc3b189a42e46cf163f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3FBYBP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDZ5E4QMRjn%2BQTsPsycCLYUL74luwg4MyM3maQtnhGDSQIgTL7Y5TNcis2pHhnS0TuN10GjKu6ZMBtl70V6GeOTOmUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNYY0iXW6JWtTHDC8SrcAyCDeR%2FHa0spxk6LahkZldJ0fKRV0bkqwXAe4z%2FAdata9DI1Tvd20inYYGehPCyabWp0u%2F0mKn485iiGksWy8q1d8utyPvx6WlGbMmT0BlWU3Y1Ytq2wAYJTxfaHR9Mt0Huq5zULat%2FuPcpMjCrbNmgjqEQrxkKA4FdlkL%2F%2BVrx9v4pps6cAN4%2FQyy%2FvAGFddDaahXKfiGqJxnfwe%2FR1ztZmNZl%2Fes4wref6UV4%2BVhBmpcXnU7gVnuVvhMYokTcdu0aPvs4HOSW2COcifv35pJduTTCNlLGaa1UuED%2F1%2BL1vfZflhCvA0suWfapionAJ3A5O2OBVhWVsiUSBQbyD77R45ncYcepp4e2K5NM5hPaF4GyzxBQgO2ll78pbAuGJRHIR2nUnxFBIVfIvHr6nMQh44xO4gBhZB47Z0wmFsKDFZeuIKgq3Q3YKZ2BAqsJHViBPQmVuhe%2BOvKTreKzMESxHSIQWCLsKalGMtlpCfpeSn%2F3mQw55aIsyL2aV7v887s4TbrLCice%2B8ZfVbQ3spTvm3BlpTF8QOgQgzkGIoobpeZ3cEGDDIy7fsq1L4ZIUzqjxxh4xIbxAxkGlNscKd0mzl3diTTyJs31UENF%2FqusDsGSu4J8FAXnCX0gkMOuV4sMGOqUBUIBUWjzcNoK0%2BIyX7FniCAB%2BrqKNLpd9PZihcsSdlJui2wFH9VAOWwMmGHtnPjBirfBHYCBGfl1TdJhFaOi89fbeImZXAVPWSoejv9NvfViiE4N2x1KRz5dpMJeI9GbLhznd4MdbLgGU4BjagJsw%2FvVny8tt9SWJuVRsaM77MKEmZ%2B%2BCKLPNNgULoh%2BnaXc%2FuYcG24HcLmdxoyRTVrPRj6q92e6g&X-Amz-Signature=f0d970fb69945ab736b81466ee67ed4f4e3e4e93df37330f448e437ec9b4f360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3FBYBP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDZ5E4QMRjn%2BQTsPsycCLYUL74luwg4MyM3maQtnhGDSQIgTL7Y5TNcis2pHhnS0TuN10GjKu6ZMBtl70V6GeOTOmUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNYY0iXW6JWtTHDC8SrcAyCDeR%2FHa0spxk6LahkZldJ0fKRV0bkqwXAe4z%2FAdata9DI1Tvd20inYYGehPCyabWp0u%2F0mKn485iiGksWy8q1d8utyPvx6WlGbMmT0BlWU3Y1Ytq2wAYJTxfaHR9Mt0Huq5zULat%2FuPcpMjCrbNmgjqEQrxkKA4FdlkL%2F%2BVrx9v4pps6cAN4%2FQyy%2FvAGFddDaahXKfiGqJxnfwe%2FR1ztZmNZl%2Fes4wref6UV4%2BVhBmpcXnU7gVnuVvhMYokTcdu0aPvs4HOSW2COcifv35pJduTTCNlLGaa1UuED%2F1%2BL1vfZflhCvA0suWfapionAJ3A5O2OBVhWVsiUSBQbyD77R45ncYcepp4e2K5NM5hPaF4GyzxBQgO2ll78pbAuGJRHIR2nUnxFBIVfIvHr6nMQh44xO4gBhZB47Z0wmFsKDFZeuIKgq3Q3YKZ2BAqsJHViBPQmVuhe%2BOvKTreKzMESxHSIQWCLsKalGMtlpCfpeSn%2F3mQw55aIsyL2aV7v887s4TbrLCice%2B8ZfVbQ3spTvm3BlpTF8QOgQgzkGIoobpeZ3cEGDDIy7fsq1L4ZIUzqjxxh4xIbxAxkGlNscKd0mzl3diTTyJs31UENF%2FqusDsGSu4J8FAXnCX0gkMOuV4sMGOqUBUIBUWjzcNoK0%2BIyX7FniCAB%2BrqKNLpd9PZihcsSdlJui2wFH9VAOWwMmGHtnPjBirfBHYCBGfl1TdJhFaOi89fbeImZXAVPWSoejv9NvfViiE4N2x1KRz5dpMJeI9GbLhznd4MdbLgGU4BjagJsw%2FvVny8tt9SWJuVRsaM77MKEmZ%2B%2BCKLPNNgULoh%2BnaXc%2FuYcG24HcLmdxoyRTVrPRj6q92e6g&X-Amz-Signature=d44f36fa139f0505eff1d50ced1951bc5a7b66cd610681ff1dde8f0b44cf2248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
