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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5O4K6IZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0jk5wehrZpmuERYr%2FfpKt1zI3LdOBUWnXWtQzI87VxAiAhsbiOvPLpwRizQePBa%2BxPNkWjPzE5rFcykcUlm88deCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMJm2fH8I7m1kjXUAIKtwD8V%2B9eTf2iSn3GtIX7u5GEHLNf2FgWQ39iPZo%2F8QjAiEbY2ZgsxbMfgkVRPL9LB5jhgnlBXAHxHkaib8eSecRqp9F8NxAlFJrk0rWXAIGZKD%2BA%2BSLtUEKvDoV%2FJnWxMA58ZhkA2%2BGFveeJXqKRlRriDmZ9Yr9LKvydmWgp%2Fqwqf%2F4%2B3lFNfsKMuITQXcEEofH89Sw6Ue85TaH86dq2Mv6q1wEbhB4s7qS1CG5VOxU2qatF69PWcOZ%2B9uVknZ8Ap2gnh3wkqBZu1ht8t6ypcwjofxWkvPRG1R%2FmPzbannuvN3FftxsXAz9giU5hccxX2%2B5s%2BkXoFHLTV7UZTUZ8NRLlZD1MnqSIuYpoug0R%2FVR2S7M9FaiwUcXZO%2BEmlIlhTjw1Vr5i6vYt%2FojVsVB1sDLH3LW2sWBUUOLNX%2BTuBwNgqFZaX%2B%2BtQ1qmu41jGHpSS2ky5BFD9EFinLwMdl9QReZMzJhcu7hnhU4a5QxH1I1bhLPNedAHb1gCHJUzo0x5sx9KCMPOX1guP%2FrEXuseSHg0RAXWmRpzrHvWp%2BXmiWLbCBIobJeeFB%2BsTpUuwvWfG6ctaw6MRpoYCuQn%2BsXwwDc7RGJFRRtky1R9ywBoeri59QeghUcI67PKbEIZNEw%2BfqPwgY6pgFjeoMmIbh9o78m3ddOCiUTWil%2F9WcIv6181rkjK99JLfyYbA%2Fvd4uDDfMLfDCBMG2MPxvIEi%2B%2FvGarbzxf4JmIvMt2TcYezsE8pkeKxjA7SD4vWI5heHvunovITko5t8Ga3ljfdqg4Lkm4ruUR2P%2FOFf764VdFk55iBiqirSZessaM2Xvs0VgO3EFpsHs9JsL0G3RtqSivc8CiOye8BbyxJ9zegB5q&X-Amz-Signature=3f444a58a732cec4d8c182aabee89f6edfb082a2229075c0920cc5a031cad928&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5O4K6IZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0jk5wehrZpmuERYr%2FfpKt1zI3LdOBUWnXWtQzI87VxAiAhsbiOvPLpwRizQePBa%2BxPNkWjPzE5rFcykcUlm88deCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMJm2fH8I7m1kjXUAIKtwD8V%2B9eTf2iSn3GtIX7u5GEHLNf2FgWQ39iPZo%2F8QjAiEbY2ZgsxbMfgkVRPL9LB5jhgnlBXAHxHkaib8eSecRqp9F8NxAlFJrk0rWXAIGZKD%2BA%2BSLtUEKvDoV%2FJnWxMA58ZhkA2%2BGFveeJXqKRlRriDmZ9Yr9LKvydmWgp%2Fqwqf%2F4%2B3lFNfsKMuITQXcEEofH89Sw6Ue85TaH86dq2Mv6q1wEbhB4s7qS1CG5VOxU2qatF69PWcOZ%2B9uVknZ8Ap2gnh3wkqBZu1ht8t6ypcwjofxWkvPRG1R%2FmPzbannuvN3FftxsXAz9giU5hccxX2%2B5s%2BkXoFHLTV7UZTUZ8NRLlZD1MnqSIuYpoug0R%2FVR2S7M9FaiwUcXZO%2BEmlIlhTjw1Vr5i6vYt%2FojVsVB1sDLH3LW2sWBUUOLNX%2BTuBwNgqFZaX%2B%2BtQ1qmu41jGHpSS2ky5BFD9EFinLwMdl9QReZMzJhcu7hnhU4a5QxH1I1bhLPNedAHb1gCHJUzo0x5sx9KCMPOX1guP%2FrEXuseSHg0RAXWmRpzrHvWp%2BXmiWLbCBIobJeeFB%2BsTpUuwvWfG6ctaw6MRpoYCuQn%2BsXwwDc7RGJFRRtky1R9ywBoeri59QeghUcI67PKbEIZNEw%2BfqPwgY6pgFjeoMmIbh9o78m3ddOCiUTWil%2F9WcIv6181rkjK99JLfyYbA%2Fvd4uDDfMLfDCBMG2MPxvIEi%2B%2FvGarbzxf4JmIvMt2TcYezsE8pkeKxjA7SD4vWI5heHvunovITko5t8Ga3ljfdqg4Lkm4ruUR2P%2FOFf764VdFk55iBiqirSZessaM2Xvs0VgO3EFpsHs9JsL0G3RtqSivc8CiOye8BbyxJ9zegB5q&X-Amz-Signature=c820c30ab55ddb72e05297981311152b5a272b92cdab4ce8637ada94e95f780f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5O4K6IZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0jk5wehrZpmuERYr%2FfpKt1zI3LdOBUWnXWtQzI87VxAiAhsbiOvPLpwRizQePBa%2BxPNkWjPzE5rFcykcUlm88deCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMJm2fH8I7m1kjXUAIKtwD8V%2B9eTf2iSn3GtIX7u5GEHLNf2FgWQ39iPZo%2F8QjAiEbY2ZgsxbMfgkVRPL9LB5jhgnlBXAHxHkaib8eSecRqp9F8NxAlFJrk0rWXAIGZKD%2BA%2BSLtUEKvDoV%2FJnWxMA58ZhkA2%2BGFveeJXqKRlRriDmZ9Yr9LKvydmWgp%2Fqwqf%2F4%2B3lFNfsKMuITQXcEEofH89Sw6Ue85TaH86dq2Mv6q1wEbhB4s7qS1CG5VOxU2qatF69PWcOZ%2B9uVknZ8Ap2gnh3wkqBZu1ht8t6ypcwjofxWkvPRG1R%2FmPzbannuvN3FftxsXAz9giU5hccxX2%2B5s%2BkXoFHLTV7UZTUZ8NRLlZD1MnqSIuYpoug0R%2FVR2S7M9FaiwUcXZO%2BEmlIlhTjw1Vr5i6vYt%2FojVsVB1sDLH3LW2sWBUUOLNX%2BTuBwNgqFZaX%2B%2BtQ1qmu41jGHpSS2ky5BFD9EFinLwMdl9QReZMzJhcu7hnhU4a5QxH1I1bhLPNedAHb1gCHJUzo0x5sx9KCMPOX1guP%2FrEXuseSHg0RAXWmRpzrHvWp%2BXmiWLbCBIobJeeFB%2BsTpUuwvWfG6ctaw6MRpoYCuQn%2BsXwwDc7RGJFRRtky1R9ywBoeri59QeghUcI67PKbEIZNEw%2BfqPwgY6pgFjeoMmIbh9o78m3ddOCiUTWil%2F9WcIv6181rkjK99JLfyYbA%2Fvd4uDDfMLfDCBMG2MPxvIEi%2B%2FvGarbzxf4JmIvMt2TcYezsE8pkeKxjA7SD4vWI5heHvunovITko5t8Ga3ljfdqg4Lkm4ruUR2P%2FOFf764VdFk55iBiqirSZessaM2Xvs0VgO3EFpsHs9JsL0G3RtqSivc8CiOye8BbyxJ9zegB5q&X-Amz-Signature=7dfcd6a95dc64cf34389a6132a54de6362a48009caca3d2065802ab8771ed9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
