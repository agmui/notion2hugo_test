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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJL74GS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCGRQ%2FIezlYshqP7Sk80vozG%2FYWxBD5cyCZtmf5jEceAiEAvflVW05tat9JA2BiW%2FYLcqxxN1t4hkQq6dXRlCgdw%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDQnBRuCXySbk%2BUuHircA%2BoafvwGW9WRmVjAcbURVOcrtwOBn3ggxHNH6zTzOvqMOih9ix9P%2FZYPVIX0cWNOkgRf%2FvF7l0d%2Fhqhe1LknFt96a2dSJXn9LaD2Yhk9LI%2F3F1fTSKW1YuGAbbpunfooKVsP5loBBxb3tAIob5GIZAMEf%2F33GZ01yvsfpicuZk9UUcerpEKml6TQmybq0HTpFBCGIMADRukoxrtA2yToqqxUjBGrCsM36ihLXvhEDWKi0BT4reXLXqIc9tbL%2FE2v%2F%2FxV5JgelVsmxZgpOZKf8uwcnIx8ryrMjad5elMxVv2WPhhNRZFkMnxj6aWl4eo94REiR0JYoCIde3wUxJG5k09GRcsxu8FQK0gzcBCdMKfhdvVNKVvvd4kqHm5W7Hu3CIK1QYMW4LhdlNDp2zds94e8NFsynP%2B4H6I6vfI31u3U1L5BTqSkukQh4U0qAMrl0oxVySmPoLqoh5HLVceEOA2Me%2FkiLoC85NN6VZmr1iXTqr7MahbH8WYBr7jflZ02BwhWS3SXyCDp4W2QZ%2FP9%2BmUodpw%2FIwdW1bXvfLlTQPeEPaI59T%2Bd2qHc%2F5WvEwmvUdqGp2x5Asu%2B79%2FcaVvSv%2FJ1B%2Fc%2FiC8Hg%2FohouUth9Git51sobXhZYwQ3OFfMNC9psEGOqUBA49zit9Vey9GW6rf6HNtUUwMGrJJQf20ei8PeA%2FAx%2FcJFR2dkgBQqdqSFUqb9nTuacgB%2Bi9%2FZoLTIZZ6BVJLKEi53X01N5Ku1K%2FLH7cNXbTIkX03WdtoEBr91qhq8In8sJ1nN1XMC77isLGy98c2u5XgT3pGTA%2FuQRXVM7lio1%2Bm6Ef2nu7M1VjW8j7HDMnkWywOnSILMWkRwvGlEFN9W3XqN7mJ&X-Amz-Signature=eb4cdbcca36513ba0778b466fc236dadac4bbfd0e8ba617ff2f9145110811d76&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJL74GS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCGRQ%2FIezlYshqP7Sk80vozG%2FYWxBD5cyCZtmf5jEceAiEAvflVW05tat9JA2BiW%2FYLcqxxN1t4hkQq6dXRlCgdw%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDQnBRuCXySbk%2BUuHircA%2BoafvwGW9WRmVjAcbURVOcrtwOBn3ggxHNH6zTzOvqMOih9ix9P%2FZYPVIX0cWNOkgRf%2FvF7l0d%2Fhqhe1LknFt96a2dSJXn9LaD2Yhk9LI%2F3F1fTSKW1YuGAbbpunfooKVsP5loBBxb3tAIob5GIZAMEf%2F33GZ01yvsfpicuZk9UUcerpEKml6TQmybq0HTpFBCGIMADRukoxrtA2yToqqxUjBGrCsM36ihLXvhEDWKi0BT4reXLXqIc9tbL%2FE2v%2F%2FxV5JgelVsmxZgpOZKf8uwcnIx8ryrMjad5elMxVv2WPhhNRZFkMnxj6aWl4eo94REiR0JYoCIde3wUxJG5k09GRcsxu8FQK0gzcBCdMKfhdvVNKVvvd4kqHm5W7Hu3CIK1QYMW4LhdlNDp2zds94e8NFsynP%2B4H6I6vfI31u3U1L5BTqSkukQh4U0qAMrl0oxVySmPoLqoh5HLVceEOA2Me%2FkiLoC85NN6VZmr1iXTqr7MahbH8WYBr7jflZ02BwhWS3SXyCDp4W2QZ%2FP9%2BmUodpw%2FIwdW1bXvfLlTQPeEPaI59T%2Bd2qHc%2F5WvEwmvUdqGp2x5Asu%2B79%2FcaVvSv%2FJ1B%2Fc%2FiC8Hg%2FohouUth9Git51sobXhZYwQ3OFfMNC9psEGOqUBA49zit9Vey9GW6rf6HNtUUwMGrJJQf20ei8PeA%2FAx%2FcJFR2dkgBQqdqSFUqb9nTuacgB%2Bi9%2FZoLTIZZ6BVJLKEi53X01N5Ku1K%2FLH7cNXbTIkX03WdtoEBr91qhq8In8sJ1nN1XMC77isLGy98c2u5XgT3pGTA%2FuQRXVM7lio1%2Bm6Ef2nu7M1VjW8j7HDMnkWywOnSILMWkRwvGlEFN9W3XqN7mJ&X-Amz-Signature=ed7422097f66aec6e8ba3327c2d0d0187c6bee783132e65b1f1f5b8f83c89028&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJL74GS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCGRQ%2FIezlYshqP7Sk80vozG%2FYWxBD5cyCZtmf5jEceAiEAvflVW05tat9JA2BiW%2FYLcqxxN1t4hkQq6dXRlCgdw%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDQnBRuCXySbk%2BUuHircA%2BoafvwGW9WRmVjAcbURVOcrtwOBn3ggxHNH6zTzOvqMOih9ix9P%2FZYPVIX0cWNOkgRf%2FvF7l0d%2Fhqhe1LknFt96a2dSJXn9LaD2Yhk9LI%2F3F1fTSKW1YuGAbbpunfooKVsP5loBBxb3tAIob5GIZAMEf%2F33GZ01yvsfpicuZk9UUcerpEKml6TQmybq0HTpFBCGIMADRukoxrtA2yToqqxUjBGrCsM36ihLXvhEDWKi0BT4reXLXqIc9tbL%2FE2v%2F%2FxV5JgelVsmxZgpOZKf8uwcnIx8ryrMjad5elMxVv2WPhhNRZFkMnxj6aWl4eo94REiR0JYoCIde3wUxJG5k09GRcsxu8FQK0gzcBCdMKfhdvVNKVvvd4kqHm5W7Hu3CIK1QYMW4LhdlNDp2zds94e8NFsynP%2B4H6I6vfI31u3U1L5BTqSkukQh4U0qAMrl0oxVySmPoLqoh5HLVceEOA2Me%2FkiLoC85NN6VZmr1iXTqr7MahbH8WYBr7jflZ02BwhWS3SXyCDp4W2QZ%2FP9%2BmUodpw%2FIwdW1bXvfLlTQPeEPaI59T%2Bd2qHc%2F5WvEwmvUdqGp2x5Asu%2B79%2FcaVvSv%2FJ1B%2Fc%2FiC8Hg%2FohouUth9Git51sobXhZYwQ3OFfMNC9psEGOqUBA49zit9Vey9GW6rf6HNtUUwMGrJJQf20ei8PeA%2FAx%2FcJFR2dkgBQqdqSFUqb9nTuacgB%2Bi9%2FZoLTIZZ6BVJLKEi53X01N5Ku1K%2FLH7cNXbTIkX03WdtoEBr91qhq8In8sJ1nN1XMC77isLGy98c2u5XgT3pGTA%2FuQRXVM7lio1%2Bm6Ef2nu7M1VjW8j7HDMnkWywOnSILMWkRwvGlEFN9W3XqN7mJ&X-Amz-Signature=b0d0da556d95b340563b92f615358f8a0154cf1bfbe45f1f04c3a3a16ab9b5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
