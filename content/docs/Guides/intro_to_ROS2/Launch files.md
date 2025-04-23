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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7BXY4Q%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB9oxYTs6YMGTrVilXAJ24ecCU8KZc6ZfUSqzws%2FcHzIAiEAy%2BwS7zAx3qcalMVREXRL4vRX0iwlAqigOJy8hxAgWM8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnzsOsyRQn0DMhFfCrcA%2FK5fMocPQjNyadMQJXOTbt6YGdL4t3mMJ3HbeRjJjhMYjHBGOlNyRr7EDGR%2BGlEITS5I%2BYxI4bkAtUJ47luWZZ9xwCRO3hl1dMZygrrhp2H0gpLRtMzjRIdwE0jldkudfLdohFTiUzyMymyemWR0AAPY5fOC7H491aPbXmfcyu%2BFZ1X3bu9RFO8gEuXTL%2FxjsChr8t2N58knULyeQVjv7977QkoLQ%2FNJnxYQ9oJpoqvhHxUugkO3VkB62xD6huy9F2JgOu7ODuTkPNHS7X1c28d%2BavW%2BUu1Y9aHb24IuHi1f3njup63yvvM%2F216JhsH7wP1xJPM%2FcFlzEXWyKJ%2BdV1LZKXyTAwxtIGxF4yXl%2FUfGpZMb67E3GfNUgIuuQIY1VTEoVermpUbUAEFsPxEmeYp12pykif4g4wf0HLZxcxtvnrem0d%2FE0uTII6I0pm7ksUih%2B9QbAHUPvw3FQq1ssyZoc68z3Rdgen%2FvIrPxNJ5r6a83s6ufPxwwQk%2FvknWrHcBbE3PqAddacPcqXNC4yngxrtSecq1wfnVTUnbEgxEJrxZEm60ObjU2SJLK%2BSZd4gTb%2BvgcOaFaAyYvQoj2dsThApZVZxEIIGRk2VQ5ON4ozD217RtYzi6y42qMKzGosAGOqUBGJx1k1f2NiSR6S4SMlq5WvxnHkwTOJ5Vs3tzD9Y%2FiSnOrVh39S9vkMJkhaevwFuTJhsCjx0uIEKyvzaUMR3491trxoGYLGn6gU8XHU%2FApBgYVar5wUxjZAL5oaPHaVrewtjFEVWsw5WIpDjJx5eNIHtbDjErGLjhHZLFihRKEWvIAeGu5mNeuViXMkdPCuIBId1PsvFaobabkGC2aa1JfK5F47Dj&X-Amz-Signature=5b2e1d257c396c545798017086c33c446ab7e71c8ecbdcbaa87672495c089578&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7BXY4Q%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB9oxYTs6YMGTrVilXAJ24ecCU8KZc6ZfUSqzws%2FcHzIAiEAy%2BwS7zAx3qcalMVREXRL4vRX0iwlAqigOJy8hxAgWM8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnzsOsyRQn0DMhFfCrcA%2FK5fMocPQjNyadMQJXOTbt6YGdL4t3mMJ3HbeRjJjhMYjHBGOlNyRr7EDGR%2BGlEITS5I%2BYxI4bkAtUJ47luWZZ9xwCRO3hl1dMZygrrhp2H0gpLRtMzjRIdwE0jldkudfLdohFTiUzyMymyemWR0AAPY5fOC7H491aPbXmfcyu%2BFZ1X3bu9RFO8gEuXTL%2FxjsChr8t2N58knULyeQVjv7977QkoLQ%2FNJnxYQ9oJpoqvhHxUugkO3VkB62xD6huy9F2JgOu7ODuTkPNHS7X1c28d%2BavW%2BUu1Y9aHb24IuHi1f3njup63yvvM%2F216JhsH7wP1xJPM%2FcFlzEXWyKJ%2BdV1LZKXyTAwxtIGxF4yXl%2FUfGpZMb67E3GfNUgIuuQIY1VTEoVermpUbUAEFsPxEmeYp12pykif4g4wf0HLZxcxtvnrem0d%2FE0uTII6I0pm7ksUih%2B9QbAHUPvw3FQq1ssyZoc68z3Rdgen%2FvIrPxNJ5r6a83s6ufPxwwQk%2FvknWrHcBbE3PqAddacPcqXNC4yngxrtSecq1wfnVTUnbEgxEJrxZEm60ObjU2SJLK%2BSZd4gTb%2BvgcOaFaAyYvQoj2dsThApZVZxEIIGRk2VQ5ON4ozD217RtYzi6y42qMKzGosAGOqUBGJx1k1f2NiSR6S4SMlq5WvxnHkwTOJ5Vs3tzD9Y%2FiSnOrVh39S9vkMJkhaevwFuTJhsCjx0uIEKyvzaUMR3491trxoGYLGn6gU8XHU%2FApBgYVar5wUxjZAL5oaPHaVrewtjFEVWsw5WIpDjJx5eNIHtbDjErGLjhHZLFihRKEWvIAeGu5mNeuViXMkdPCuIBId1PsvFaobabkGC2aa1JfK5F47Dj&X-Amz-Signature=57f758799551ba8839ce8f7bd136ec426cbfd696f517ca5509c04e07b17ebf7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7BXY4Q%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB9oxYTs6YMGTrVilXAJ24ecCU8KZc6ZfUSqzws%2FcHzIAiEAy%2BwS7zAx3qcalMVREXRL4vRX0iwlAqigOJy8hxAgWM8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnzsOsyRQn0DMhFfCrcA%2FK5fMocPQjNyadMQJXOTbt6YGdL4t3mMJ3HbeRjJjhMYjHBGOlNyRr7EDGR%2BGlEITS5I%2BYxI4bkAtUJ47luWZZ9xwCRO3hl1dMZygrrhp2H0gpLRtMzjRIdwE0jldkudfLdohFTiUzyMymyemWR0AAPY5fOC7H491aPbXmfcyu%2BFZ1X3bu9RFO8gEuXTL%2FxjsChr8t2N58knULyeQVjv7977QkoLQ%2FNJnxYQ9oJpoqvhHxUugkO3VkB62xD6huy9F2JgOu7ODuTkPNHS7X1c28d%2BavW%2BUu1Y9aHb24IuHi1f3njup63yvvM%2F216JhsH7wP1xJPM%2FcFlzEXWyKJ%2BdV1LZKXyTAwxtIGxF4yXl%2FUfGpZMb67E3GfNUgIuuQIY1VTEoVermpUbUAEFsPxEmeYp12pykif4g4wf0HLZxcxtvnrem0d%2FE0uTII6I0pm7ksUih%2B9QbAHUPvw3FQq1ssyZoc68z3Rdgen%2FvIrPxNJ5r6a83s6ufPxwwQk%2FvknWrHcBbE3PqAddacPcqXNC4yngxrtSecq1wfnVTUnbEgxEJrxZEm60ObjU2SJLK%2BSZd4gTb%2BvgcOaFaAyYvQoj2dsThApZVZxEIIGRk2VQ5ON4ozD217RtYzi6y42qMKzGosAGOqUBGJx1k1f2NiSR6S4SMlq5WvxnHkwTOJ5Vs3tzD9Y%2FiSnOrVh39S9vkMJkhaevwFuTJhsCjx0uIEKyvzaUMR3491trxoGYLGn6gU8XHU%2FApBgYVar5wUxjZAL5oaPHaVrewtjFEVWsw5WIpDjJx5eNIHtbDjErGLjhHZLFihRKEWvIAeGu5mNeuViXMkdPCuIBId1PsvFaobabkGC2aa1JfK5F47Dj&X-Amz-Signature=317eb30f4a3fa9f54f74ee62e3a3667718d63e46ff8ad4f3f2af83c7f1cace63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
