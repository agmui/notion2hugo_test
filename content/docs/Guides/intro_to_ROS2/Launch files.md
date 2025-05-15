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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV7PKMH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGzkqNRrRxZVzP1C%2Fc4QtfAT7y%2FwHTExkbAi6JU%2FHPuPAiA%2FqnLDw6l0AbgSn6GQUV41g4cLWkaVu7hcEV2j9U0cQir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEUjt3B0UiRz77t%2BwKtwDsnn2aLoVpg5gTp8gLtw%2BvAKCQvSrwV1SBxiG5jKo0Fz0XWeibEgxSDlqer0qWc4RdATglhbZWF98ibb4dKQY6LG175PevVutYz3bMpSg2NE%2B1jiyOElYewAVTruwDTNjrlUNwWdFPuipQBeYDZ%2BQdvAJRytt%2FSrl1MnXfJRw0VRkdHHm8c%2Bxhso0IenogevE0c3cD5zxqBB64RUIHR8Ab46hcefgN9ltCenD5JVxn63DCgJSQaZ1uS%2FDxxV61K6fC024%2FX%2BrN9O6AZB8c3X9%2FgRdDaIvSzF6jh3U0xMl7j4E9GtnKf%2FrxJVwRyYaoDKC9V0vXAZ4dOSrOH0LVkWXAHU60CTVl%2Fa6wlJd5g3WbnjYNGU2oVTDGLkMVJxIjGi6duoaSdQLU17IBwJ3yZwAQhG92OZoVF1JgzSR6SqYzOl2SNTTWbXXKbLV4PvmQF6iL4Zds0XcKTQTPGuj601rUvAbTMqCtqzpBZKWA8dcWvSK7peEL5alW4C%2FgJwVQ0HXGnFIgpB%2By2UlS6DomF9cXxwJkoeWdHlpqhUVcNl5t0CRurWnGRfqD6aaosERhOnPsqaeN4GLARgk0e5k03HBz4vW4scdRNc04ihWn8704vYEeQx8N%2FzmGhPnO50wvcSYwQY6pgGvfkxZ2QAyHpULjlfbOXtgxesK17DPDSKBiJ3uhhnl19h8npzwIZjLrbasv7oksmWDidRpOhicMG5JAh1JqKgCf44Hqx0rOEfeQWcAEbHLXi9nB9jGa%2BRZJgqsZzTolo4dybDQX1UpqOQ0dhFU9QSm5bcTJXGZnd%2FR%2BRXb4USYkqh411YBOJ%2Fx%2BOyOjLhC2kTw3QiB2X5%2B4D5q54rDNDbLiXSzTIze&X-Amz-Signature=030fefa71589af221ae58b61a8ed0e390a7dd00bbb4b22e81cfe29baa524a3df&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV7PKMH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGzkqNRrRxZVzP1C%2Fc4QtfAT7y%2FwHTExkbAi6JU%2FHPuPAiA%2FqnLDw6l0AbgSn6GQUV41g4cLWkaVu7hcEV2j9U0cQir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEUjt3B0UiRz77t%2BwKtwDsnn2aLoVpg5gTp8gLtw%2BvAKCQvSrwV1SBxiG5jKo0Fz0XWeibEgxSDlqer0qWc4RdATglhbZWF98ibb4dKQY6LG175PevVutYz3bMpSg2NE%2B1jiyOElYewAVTruwDTNjrlUNwWdFPuipQBeYDZ%2BQdvAJRytt%2FSrl1MnXfJRw0VRkdHHm8c%2Bxhso0IenogevE0c3cD5zxqBB64RUIHR8Ab46hcefgN9ltCenD5JVxn63DCgJSQaZ1uS%2FDxxV61K6fC024%2FX%2BrN9O6AZB8c3X9%2FgRdDaIvSzF6jh3U0xMl7j4E9GtnKf%2FrxJVwRyYaoDKC9V0vXAZ4dOSrOH0LVkWXAHU60CTVl%2Fa6wlJd5g3WbnjYNGU2oVTDGLkMVJxIjGi6duoaSdQLU17IBwJ3yZwAQhG92OZoVF1JgzSR6SqYzOl2SNTTWbXXKbLV4PvmQF6iL4Zds0XcKTQTPGuj601rUvAbTMqCtqzpBZKWA8dcWvSK7peEL5alW4C%2FgJwVQ0HXGnFIgpB%2By2UlS6DomF9cXxwJkoeWdHlpqhUVcNl5t0CRurWnGRfqD6aaosERhOnPsqaeN4GLARgk0e5k03HBz4vW4scdRNc04ihWn8704vYEeQx8N%2FzmGhPnO50wvcSYwQY6pgGvfkxZ2QAyHpULjlfbOXtgxesK17DPDSKBiJ3uhhnl19h8npzwIZjLrbasv7oksmWDidRpOhicMG5JAh1JqKgCf44Hqx0rOEfeQWcAEbHLXi9nB9jGa%2BRZJgqsZzTolo4dybDQX1UpqOQ0dhFU9QSm5bcTJXGZnd%2FR%2BRXb4USYkqh411YBOJ%2Fx%2BOyOjLhC2kTw3QiB2X5%2B4D5q54rDNDbLiXSzTIze&X-Amz-Signature=fd4d1133730891009affc5470a530c889532ea30e2bd0e1f9df45cc9a7ec17f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV7PKMH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGzkqNRrRxZVzP1C%2Fc4QtfAT7y%2FwHTExkbAi6JU%2FHPuPAiA%2FqnLDw6l0AbgSn6GQUV41g4cLWkaVu7hcEV2j9U0cQir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEUjt3B0UiRz77t%2BwKtwDsnn2aLoVpg5gTp8gLtw%2BvAKCQvSrwV1SBxiG5jKo0Fz0XWeibEgxSDlqer0qWc4RdATglhbZWF98ibb4dKQY6LG175PevVutYz3bMpSg2NE%2B1jiyOElYewAVTruwDTNjrlUNwWdFPuipQBeYDZ%2BQdvAJRytt%2FSrl1MnXfJRw0VRkdHHm8c%2Bxhso0IenogevE0c3cD5zxqBB64RUIHR8Ab46hcefgN9ltCenD5JVxn63DCgJSQaZ1uS%2FDxxV61K6fC024%2FX%2BrN9O6AZB8c3X9%2FgRdDaIvSzF6jh3U0xMl7j4E9GtnKf%2FrxJVwRyYaoDKC9V0vXAZ4dOSrOH0LVkWXAHU60CTVl%2Fa6wlJd5g3WbnjYNGU2oVTDGLkMVJxIjGi6duoaSdQLU17IBwJ3yZwAQhG92OZoVF1JgzSR6SqYzOl2SNTTWbXXKbLV4PvmQF6iL4Zds0XcKTQTPGuj601rUvAbTMqCtqzpBZKWA8dcWvSK7peEL5alW4C%2FgJwVQ0HXGnFIgpB%2By2UlS6DomF9cXxwJkoeWdHlpqhUVcNl5t0CRurWnGRfqD6aaosERhOnPsqaeN4GLARgk0e5k03HBz4vW4scdRNc04ihWn8704vYEeQx8N%2FzmGhPnO50wvcSYwQY6pgGvfkxZ2QAyHpULjlfbOXtgxesK17DPDSKBiJ3uhhnl19h8npzwIZjLrbasv7oksmWDidRpOhicMG5JAh1JqKgCf44Hqx0rOEfeQWcAEbHLXi9nB9jGa%2BRZJgqsZzTolo4dybDQX1UpqOQ0dhFU9QSm5bcTJXGZnd%2FR%2BRXb4USYkqh411YBOJ%2Fx%2BOyOjLhC2kTw3QiB2X5%2B4D5q54rDNDbLiXSzTIze&X-Amz-Signature=76923d7ca941bc37a69cc7b5a76c4be9c2f6dd02c2c06e3b527fcb32deac5f45&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
