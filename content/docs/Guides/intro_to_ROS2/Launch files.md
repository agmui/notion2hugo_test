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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3CQPCO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Qn9XuEYn9hvHQRrnDDmDnJgY1BniHjR4MPPCEq47ZgIhALwoLFbxqGZdOY5%2BZniUUrokebgzqlbX%2Bn%2BAXQuJL1qGKv8DCEMQABoMNjM3NDIzMTgzODA1IgxXl%2FBQSuvK2R%2B5ducq3AOX3YOclNZJH%2BVCzUyndrgZD4unxsQxocHYtXjGgVtcONjQtBdw5wcjOXvfYjwmo%2FwntAzXRufyYPiy%2BIp7pViwx%2BYAGYmrncZ2a91bvZqS%2FYUyBWRDKOxBm%2FPP7TPY8BmqJnB72VJI12Q6%2FNvB89QEyhRg%2FoE7GHjo3ffjxMq58hCWPXC6RyNrkiBJZ2aIRdQzW8YxlGJxTXSw5GlYrTwdK%2Fo05g%2Fd0RjSyro0PnCvjdWzqt9zL6BbQAv674S4kTTmurUiZ5cMqB7pUyMrx8IP4L26AacUZuMc%2FfWj3XjJlOxX93cakErL%2Fs4E4E9IOySBergB4UTTKFOGK90FvpFtkYSR3D2t8Aw6I9v2Yk4OvMrywBrqaBNrt2AN4i2hnMkARiI3hGviRbr7ZBlFFOTOjiBCKV0aPw2Ka6SPcrptdsG05EMI6FSmqtvQUcKPoMM9fp43dYebbB7jVEXPUomK8%2Bmr5eCcLYnh3IqyBykA3z2LBt9OZsNxWGmvew7RSrDMySYDlAEa8t8P28q1hBP%2Fwgh%2FW2S7bLGrj4P2HqH8ay9vBbWeG9toZHGtlPIXN2QO%2BGcoOLF7sXu5IoiL4rB8YRPlkMap1wsFEL9ecjUgwTSQbbMwE0za3zdqqzDLmcm%2FBjqkAVmlmfKCYPiKEwTcoACw67p2Qwvw2dnQNEujwsjvwAg4jU8yiZy8buG2%2B67pwaVePIR%2F3q%2BT93DFuHSTqdUD3GKXWPmi5EoKnwbyhK2KcTIXkOzx8O7kEVv1xJ%2BVMbP%2FcFLSsDNE%2BM3sYH0bGeB%2BF%2BfLg1xnQKzawt4zPFjQvPiWxAQB3udkGtaJeuj3uLvhOcpAUmfXv3MOtw14enm%2BQ1b%2BiG%2FW&X-Amz-Signature=6be8abaef51bb594dd69fae4c99959c19c15350d40ba45c6ea2d860fcbf7537e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3CQPCO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Qn9XuEYn9hvHQRrnDDmDnJgY1BniHjR4MPPCEq47ZgIhALwoLFbxqGZdOY5%2BZniUUrokebgzqlbX%2Bn%2BAXQuJL1qGKv8DCEMQABoMNjM3NDIzMTgzODA1IgxXl%2FBQSuvK2R%2B5ducq3AOX3YOclNZJH%2BVCzUyndrgZD4unxsQxocHYtXjGgVtcONjQtBdw5wcjOXvfYjwmo%2FwntAzXRufyYPiy%2BIp7pViwx%2BYAGYmrncZ2a91bvZqS%2FYUyBWRDKOxBm%2FPP7TPY8BmqJnB72VJI12Q6%2FNvB89QEyhRg%2FoE7GHjo3ffjxMq58hCWPXC6RyNrkiBJZ2aIRdQzW8YxlGJxTXSw5GlYrTwdK%2Fo05g%2Fd0RjSyro0PnCvjdWzqt9zL6BbQAv674S4kTTmurUiZ5cMqB7pUyMrx8IP4L26AacUZuMc%2FfWj3XjJlOxX93cakErL%2Fs4E4E9IOySBergB4UTTKFOGK90FvpFtkYSR3D2t8Aw6I9v2Yk4OvMrywBrqaBNrt2AN4i2hnMkARiI3hGviRbr7ZBlFFOTOjiBCKV0aPw2Ka6SPcrptdsG05EMI6FSmqtvQUcKPoMM9fp43dYebbB7jVEXPUomK8%2Bmr5eCcLYnh3IqyBykA3z2LBt9OZsNxWGmvew7RSrDMySYDlAEa8t8P28q1hBP%2Fwgh%2FW2S7bLGrj4P2HqH8ay9vBbWeG9toZHGtlPIXN2QO%2BGcoOLF7sXu5IoiL4rB8YRPlkMap1wsFEL9ecjUgwTSQbbMwE0za3zdqqzDLmcm%2FBjqkAVmlmfKCYPiKEwTcoACw67p2Qwvw2dnQNEujwsjvwAg4jU8yiZy8buG2%2B67pwaVePIR%2F3q%2BT93DFuHSTqdUD3GKXWPmi5EoKnwbyhK2KcTIXkOzx8O7kEVv1xJ%2BVMbP%2FcFLSsDNE%2BM3sYH0bGeB%2BF%2BfLg1xnQKzawt4zPFjQvPiWxAQB3udkGtaJeuj3uLvhOcpAUmfXv3MOtw14enm%2BQ1b%2BiG%2FW&X-Amz-Signature=39c820a455930239dac34846a3ff91546fcff362e8987e36064b72fa0a1f292d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3CQPCO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Qn9XuEYn9hvHQRrnDDmDnJgY1BniHjR4MPPCEq47ZgIhALwoLFbxqGZdOY5%2BZniUUrokebgzqlbX%2Bn%2BAXQuJL1qGKv8DCEMQABoMNjM3NDIzMTgzODA1IgxXl%2FBQSuvK2R%2B5ducq3AOX3YOclNZJH%2BVCzUyndrgZD4unxsQxocHYtXjGgVtcONjQtBdw5wcjOXvfYjwmo%2FwntAzXRufyYPiy%2BIp7pViwx%2BYAGYmrncZ2a91bvZqS%2FYUyBWRDKOxBm%2FPP7TPY8BmqJnB72VJI12Q6%2FNvB89QEyhRg%2FoE7GHjo3ffjxMq58hCWPXC6RyNrkiBJZ2aIRdQzW8YxlGJxTXSw5GlYrTwdK%2Fo05g%2Fd0RjSyro0PnCvjdWzqt9zL6BbQAv674S4kTTmurUiZ5cMqB7pUyMrx8IP4L26AacUZuMc%2FfWj3XjJlOxX93cakErL%2Fs4E4E9IOySBergB4UTTKFOGK90FvpFtkYSR3D2t8Aw6I9v2Yk4OvMrywBrqaBNrt2AN4i2hnMkARiI3hGviRbr7ZBlFFOTOjiBCKV0aPw2Ka6SPcrptdsG05EMI6FSmqtvQUcKPoMM9fp43dYebbB7jVEXPUomK8%2Bmr5eCcLYnh3IqyBykA3z2LBt9OZsNxWGmvew7RSrDMySYDlAEa8t8P28q1hBP%2Fwgh%2FW2S7bLGrj4P2HqH8ay9vBbWeG9toZHGtlPIXN2QO%2BGcoOLF7sXu5IoiL4rB8YRPlkMap1wsFEL9ecjUgwTSQbbMwE0za3zdqqzDLmcm%2FBjqkAVmlmfKCYPiKEwTcoACw67p2Qwvw2dnQNEujwsjvwAg4jU8yiZy8buG2%2B67pwaVePIR%2F3q%2BT93DFuHSTqdUD3GKXWPmi5EoKnwbyhK2KcTIXkOzx8O7kEVv1xJ%2BVMbP%2FcFLSsDNE%2BM3sYH0bGeB%2BF%2BfLg1xnQKzawt4zPFjQvPiWxAQB3udkGtaJeuj3uLvhOcpAUmfXv3MOtw14enm%2BQ1b%2BiG%2FW&X-Amz-Signature=f8c5c58980feeab6c49b34d108b72ba1d98353a41d301753d55a22409604597c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
