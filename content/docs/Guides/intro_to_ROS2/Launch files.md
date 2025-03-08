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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOBHWCE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD4jWGbzdg4hDxu5D8e%2By9hOAbmtpVA1OOVqAU1CI8j%2FgIhAOwXLcP2UaLwdCw8Tbj30kTSdY5hYnSQehCNpzSVzRr6Kv8DCFMQABoMNjM3NDIzMTgzODA1Igx24Dad05qRL3iRD0Yq3AP6EMkzTo1K2lPoE4RC81sXgc8Jn%2BLWNENEBqrOU3Zt2doaMzMaUjSRZXE9jikEmxxYHXCNrAo8uranuVe%2BQd2SqFef3lq1f9qIFbnh4hKpGzKBWEZZPckspLTZvkVC0MwZwk7YG9D4oZrqdxH7L1Kimg%2FRlNvT908GgZr0Tnl65ZO26wm%2BWcdrhReZoINi%2BJ2b3GLVtfZeWGHfnJZm4SLl6mBLt6Hk2yqteMnoICD9KV8bc7VKgUJm9FcIiKmfqRnW%2FV0DLKrJ%2FfU23HJqD3RGzxWamZDHn1QzV1IRXYhISKEKfP%2BiJaSWuzPOKP3r1b%2BijzoI0pdlVdwDwzhoI1ptWFfa0wLmVx5wcD3Sia7s7%2FBSwrcnsUPha%2BITZwVn%2BzqpJK%2F%2F%2FIHdSunWKk7BYcdcTsfqr77W3iTJl2gZl9n9gblI2bReWhBmrYsFFJ0b7TNfltVJOM4HV3rv9hKGe3goDSVIyqDGfYOAkUxoUf%2B222pbV0rDbE2WBbvOU7Xd09Byw3QK9h73zUq8mF96Nc6b%2ByfIzVj0%2BJeOu8pHkXXPLRrOOlp%2FkMD%2Fz8ci2%2FPB1qg53GN%2BW3uJMCjGc2aoKpN53PcjY4jYBHrY34HdJ85R9aKoZdbQXUMhtaMLkjChva6%2BBjqkAWV4IWg4Ht91BWWBm9ChsDCmxOlohPPHdKc%2FeOIVI0BZ3%2BGhoVExlGOZkHWTQb7TCuSze1ed2ENBitCnVZeLVqM6GW1ym3Zg9V%2FuDZzMgUwgv6rvSAUBifzM5gjvNHAg8RiN7Ti9oKFp43t1rHVXcymRqIM3S6xqVYI9T0IBxBkaAGQoHoQbwr77WV0mfwO5QzQmB2l9ya5dm%2B2POatzdxoiFfcb&X-Amz-Signature=f769d234c680a1d88bf7cec8e1a5d9ab365258cb32476f2b6aaaac50610d0b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOBHWCE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD4jWGbzdg4hDxu5D8e%2By9hOAbmtpVA1OOVqAU1CI8j%2FgIhAOwXLcP2UaLwdCw8Tbj30kTSdY5hYnSQehCNpzSVzRr6Kv8DCFMQABoMNjM3NDIzMTgzODA1Igx24Dad05qRL3iRD0Yq3AP6EMkzTo1K2lPoE4RC81sXgc8Jn%2BLWNENEBqrOU3Zt2doaMzMaUjSRZXE9jikEmxxYHXCNrAo8uranuVe%2BQd2SqFef3lq1f9qIFbnh4hKpGzKBWEZZPckspLTZvkVC0MwZwk7YG9D4oZrqdxH7L1Kimg%2FRlNvT908GgZr0Tnl65ZO26wm%2BWcdrhReZoINi%2BJ2b3GLVtfZeWGHfnJZm4SLl6mBLt6Hk2yqteMnoICD9KV8bc7VKgUJm9FcIiKmfqRnW%2FV0DLKrJ%2FfU23HJqD3RGzxWamZDHn1QzV1IRXYhISKEKfP%2BiJaSWuzPOKP3r1b%2BijzoI0pdlVdwDwzhoI1ptWFfa0wLmVx5wcD3Sia7s7%2FBSwrcnsUPha%2BITZwVn%2BzqpJK%2F%2F%2FIHdSunWKk7BYcdcTsfqr77W3iTJl2gZl9n9gblI2bReWhBmrYsFFJ0b7TNfltVJOM4HV3rv9hKGe3goDSVIyqDGfYOAkUxoUf%2B222pbV0rDbE2WBbvOU7Xd09Byw3QK9h73zUq8mF96Nc6b%2ByfIzVj0%2BJeOu8pHkXXPLRrOOlp%2FkMD%2Fz8ci2%2FPB1qg53GN%2BW3uJMCjGc2aoKpN53PcjY4jYBHrY34HdJ85R9aKoZdbQXUMhtaMLkjChva6%2BBjqkAWV4IWg4Ht91BWWBm9ChsDCmxOlohPPHdKc%2FeOIVI0BZ3%2BGhoVExlGOZkHWTQb7TCuSze1ed2ENBitCnVZeLVqM6GW1ym3Zg9V%2FuDZzMgUwgv6rvSAUBifzM5gjvNHAg8RiN7Ti9oKFp43t1rHVXcymRqIM3S6xqVYI9T0IBxBkaAGQoHoQbwr77WV0mfwO5QzQmB2l9ya5dm%2B2POatzdxoiFfcb&X-Amz-Signature=dcc281b056e41d8f8c329f7a0a219eaef78b58af637443f5bcbad66293870381&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOBHWCE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD4jWGbzdg4hDxu5D8e%2By9hOAbmtpVA1OOVqAU1CI8j%2FgIhAOwXLcP2UaLwdCw8Tbj30kTSdY5hYnSQehCNpzSVzRr6Kv8DCFMQABoMNjM3NDIzMTgzODA1Igx24Dad05qRL3iRD0Yq3AP6EMkzTo1K2lPoE4RC81sXgc8Jn%2BLWNENEBqrOU3Zt2doaMzMaUjSRZXE9jikEmxxYHXCNrAo8uranuVe%2BQd2SqFef3lq1f9qIFbnh4hKpGzKBWEZZPckspLTZvkVC0MwZwk7YG9D4oZrqdxH7L1Kimg%2FRlNvT908GgZr0Tnl65ZO26wm%2BWcdrhReZoINi%2BJ2b3GLVtfZeWGHfnJZm4SLl6mBLt6Hk2yqteMnoICD9KV8bc7VKgUJm9FcIiKmfqRnW%2FV0DLKrJ%2FfU23HJqD3RGzxWamZDHn1QzV1IRXYhISKEKfP%2BiJaSWuzPOKP3r1b%2BijzoI0pdlVdwDwzhoI1ptWFfa0wLmVx5wcD3Sia7s7%2FBSwrcnsUPha%2BITZwVn%2BzqpJK%2F%2F%2FIHdSunWKk7BYcdcTsfqr77W3iTJl2gZl9n9gblI2bReWhBmrYsFFJ0b7TNfltVJOM4HV3rv9hKGe3goDSVIyqDGfYOAkUxoUf%2B222pbV0rDbE2WBbvOU7Xd09Byw3QK9h73zUq8mF96Nc6b%2ByfIzVj0%2BJeOu8pHkXXPLRrOOlp%2FkMD%2Fz8ci2%2FPB1qg53GN%2BW3uJMCjGc2aoKpN53PcjY4jYBHrY34HdJ85R9aKoZdbQXUMhtaMLkjChva6%2BBjqkAWV4IWg4Ht91BWWBm9ChsDCmxOlohPPHdKc%2FeOIVI0BZ3%2BGhoVExlGOZkHWTQb7TCuSze1ed2ENBitCnVZeLVqM6GW1ym3Zg9V%2FuDZzMgUwgv6rvSAUBifzM5gjvNHAg8RiN7Ti9oKFp43t1rHVXcymRqIM3S6xqVYI9T0IBxBkaAGQoHoQbwr77WV0mfwO5QzQmB2l9ya5dm%2B2POatzdxoiFfcb&X-Amz-Signature=65ef8379ad534f4ba19cd739cf6524143f09da0a6a6edee1da857482cfc54c97&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
