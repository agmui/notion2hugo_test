---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDDEOV2%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4AnIFipnICVJ%2BMba%2By6Ins5AxuEWuX8j5KJJQi16HIAiEA1KGf%2F9rAGKUVoTL6M9vkBByFHxQUS3B54Dlx7b39zKkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhZys8O3BLb8BtJ8yrcA26EN51%2BNpLQta0ey%2FadpZeEMp47N5wv6jNCM19mNpzaZFop2gMgSfLUgcdbA1Leaj%2FIBvyelpsFjbw0B%2Fx6sEoZUdq%2FOE7letfV85zPROs0WvWxK2aYRJagGUIf0QdkPaDjyi2GBB20QNIJ6P64X8KBY9ylajqnqwjN47ZTjOdeeSes9POdTSTsoADZJ10Gp%2F9HHTG6JzH6DDyGP4x6gVm%2FLAIbtFH2mw5ryi2rJ1Zb0a6KiGehYqivSrk4h9ZEGfvSVRg6SP1dD0MVBqxPdP9D5w2UWfFYAvxomCrYjNQt%2FzPasoitGxJNKfDwFJ%2FH30qTmXIst8UotaNMUXLReun2UqULErkDqzD%2ByYzWbZ%2FZOyWBPGSYG1oHe6BdfrfMN6i6og0D0XrJqmA%2Fw1FKuDvW2lyjBaRl6YFdOgVpwiHmCphaA9YmWbGMk%2Bb8M3FPCR5GaCa9zDRORbwe9VDDTDZSnMcyRoOPGVVxG%2F%2Bp6rtyip5My%2BI8XzD%2B%2BIDNLMJS%2BT2pXRCBqEdPvRZw57CGTaYRVF5ASStcFur1tvjj3bMS3ErOvyb7SeB6KC1PqIE9a70K%2BJD9kXudnyFZt3Lwp1zCjNi%2BYGP14GainxBSmhWeIh3nMrsZq79xq%2BSoMKnVh9IGOqUB1UDUrTw97GfZ%2BtkZ4gtY0MzjB4ET5VRYKf8Qe0lBKgOgSUHaRHgFVnFf3ZUZJvunU%2BrKLvqNI4dbg96Nu7BDwzOPG%2FfsvVGD7PKZL3C5v9sMHcsCTfnt9NbJPU82LiIcPZlI1RkRVdCKdmYdcoIgeu7%2B30LBuClQSGiiEV4VMSSoT7AtDlvnrjpqd80DAefc6MlUayijkTE94LcJcKuBlpXygRqj&X-Amz-Signature=fa7d6259aba3bdae5756942598379b1537ea9314e0a35f0517671617d6c359a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDDEOV2%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4AnIFipnICVJ%2BMba%2By6Ins5AxuEWuX8j5KJJQi16HIAiEA1KGf%2F9rAGKUVoTL6M9vkBByFHxQUS3B54Dlx7b39zKkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhZys8O3BLb8BtJ8yrcA26EN51%2BNpLQta0ey%2FadpZeEMp47N5wv6jNCM19mNpzaZFop2gMgSfLUgcdbA1Leaj%2FIBvyelpsFjbw0B%2Fx6sEoZUdq%2FOE7letfV85zPROs0WvWxK2aYRJagGUIf0QdkPaDjyi2GBB20QNIJ6P64X8KBY9ylajqnqwjN47ZTjOdeeSes9POdTSTsoADZJ10Gp%2F9HHTG6JzH6DDyGP4x6gVm%2FLAIbtFH2mw5ryi2rJ1Zb0a6KiGehYqivSrk4h9ZEGfvSVRg6SP1dD0MVBqxPdP9D5w2UWfFYAvxomCrYjNQt%2FzPasoitGxJNKfDwFJ%2FH30qTmXIst8UotaNMUXLReun2UqULErkDqzD%2ByYzWbZ%2FZOyWBPGSYG1oHe6BdfrfMN6i6og0D0XrJqmA%2Fw1FKuDvW2lyjBaRl6YFdOgVpwiHmCphaA9YmWbGMk%2Bb8M3FPCR5GaCa9zDRORbwe9VDDTDZSnMcyRoOPGVVxG%2F%2Bp6rtyip5My%2BI8XzD%2B%2BIDNLMJS%2BT2pXRCBqEdPvRZw57CGTaYRVF5ASStcFur1tvjj3bMS3ErOvyb7SeB6KC1PqIE9a70K%2BJD9kXudnyFZt3Lwp1zCjNi%2BYGP14GainxBSmhWeIh3nMrsZq79xq%2BSoMKnVh9IGOqUB1UDUrTw97GfZ%2BtkZ4gtY0MzjB4ET5VRYKf8Qe0lBKgOgSUHaRHgFVnFf3ZUZJvunU%2BrKLvqNI4dbg96Nu7BDwzOPG%2FfsvVGD7PKZL3C5v9sMHcsCTfnt9NbJPU82LiIcPZlI1RkRVdCKdmYdcoIgeu7%2B30LBuClQSGiiEV4VMSSoT7AtDlvnrjpqd80DAefc6MlUayijkTE94LcJcKuBlpXygRqj&X-Amz-Signature=0d31b3f24de841032bcb2fd1ec36c9c34ef80644172370df4d3ab870cbfc74e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDDEOV2%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4AnIFipnICVJ%2BMba%2By6Ins5AxuEWuX8j5KJJQi16HIAiEA1KGf%2F9rAGKUVoTL6M9vkBByFHxQUS3B54Dlx7b39zKkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhZys8O3BLb8BtJ8yrcA26EN51%2BNpLQta0ey%2FadpZeEMp47N5wv6jNCM19mNpzaZFop2gMgSfLUgcdbA1Leaj%2FIBvyelpsFjbw0B%2Fx6sEoZUdq%2FOE7letfV85zPROs0WvWxK2aYRJagGUIf0QdkPaDjyi2GBB20QNIJ6P64X8KBY9ylajqnqwjN47ZTjOdeeSes9POdTSTsoADZJ10Gp%2F9HHTG6JzH6DDyGP4x6gVm%2FLAIbtFH2mw5ryi2rJ1Zb0a6KiGehYqivSrk4h9ZEGfvSVRg6SP1dD0MVBqxPdP9D5w2UWfFYAvxomCrYjNQt%2FzPasoitGxJNKfDwFJ%2FH30qTmXIst8UotaNMUXLReun2UqULErkDqzD%2ByYzWbZ%2FZOyWBPGSYG1oHe6BdfrfMN6i6og0D0XrJqmA%2Fw1FKuDvW2lyjBaRl6YFdOgVpwiHmCphaA9YmWbGMk%2Bb8M3FPCR5GaCa9zDRORbwe9VDDTDZSnMcyRoOPGVVxG%2F%2Bp6rtyip5My%2BI8XzD%2B%2BIDNLMJS%2BT2pXRCBqEdPvRZw57CGTaYRVF5ASStcFur1tvjj3bMS3ErOvyb7SeB6KC1PqIE9a70K%2BJD9kXudnyFZt3Lwp1zCjNi%2BYGP14GainxBSmhWeIh3nMrsZq79xq%2BSoMKnVh9IGOqUB1UDUrTw97GfZ%2BtkZ4gtY0MzjB4ET5VRYKf8Qe0lBKgOgSUHaRHgFVnFf3ZUZJvunU%2BrKLvqNI4dbg96Nu7BDwzOPG%2FfsvVGD7PKZL3C5v9sMHcsCTfnt9NbJPU82LiIcPZlI1RkRVdCKdmYdcoIgeu7%2B30LBuClQSGiiEV4VMSSoT7AtDlvnrjpqd80DAefc6MlUayijkTE94LcJcKuBlpXygRqj&X-Amz-Signature=2db2874b2bbb34d881163a1d085c9da04cbfc60251f04f14988d727035ba56f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
