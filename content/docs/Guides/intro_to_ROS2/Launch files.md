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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6YTMUZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCsyKlvXD69ttQUhjI7kSDRKyoy%2B%2FYj6xS3V%2B8whDy52wIhAKG4abWeS5%2BXUvx3wWLiAR5hnJgW2n%2BiSyTjBW01AUPJKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgJ2U9qRVreSuZ40Eq3ANZgdoJlC0WTXrllk%2BRLm%2F2kiyNZoPgQ2Hm5J0H7pxgYxGDphWUAGH%2BKiaQFcM8gIY6YcVH5vKizyY81Ayc2QHtgjO2avocWpQDtrWb01PPvHrFiL3%2BYNV4uGAuJ9cwEeYRHZNfy5KQ5SbLaVlWOnFgtcbqbHwPGvsMsPO9ZCBw5RaxfYqlJI9aKdRgNGMFb0bulTNk1PNSD7tI%2FU1wMNaBQpv24CBushhQ4EwDZMcpsnhqGElowHu3T0SqcKI08WZy9lG2SUfRZAULigc3Nbdwtv0InQUKievujn%2Fyjr%2Bb9%2FzL1eDvBx4XhwIMxMp47yfxRxSCwmXCcjVsK5sLMk0OJ9WEWyvWrXvvzGT4ev8LZaX1qyh0BGd6e%2B7MCMuEfy6a3AnBF4YKtqUTkU2mQ6kQHpEmfmI9PfYJN8UG8xAVJ1qT8hSzF2k3HghfO6sYbqUIpOuTZF4lIdbPy6I91mbITHNnJf6XNK7wXAjUMyQp9UniFpYPQi13LN8Gdx1eh7bIX9VKXWyH3rth6VnY%2Fn4kzItCOvB0RjLmHhH91U12YhlKcC96ZUjKZzO4NKIbErHVMba78u0HAsJMKTh5YrRI%2Bq%2BQWnJqj4ZSKsT9AI9T6pRRwQSz5DoXGz7LLTCejcHEBjqkAbb4yNNjjSoz4pc7U%2B07zXbethT7syeMDEJlcqXuBs3l8SAEtbokdRPX3gtyNhXvrPnySqC19w%2F4WWVQqDgEqnPW%2BolkGNeLOgBOSDZXXGKueqL3n%2BxskC3wxAfSWiLbqyL2gtrHtL2RLYagHB4khgMd0VkOu%2F4TqogNFaYzURg2j0AD3Je78AWDiDK49iSnHAub9b0Qog%2FdWPQeMCFuKWJAAuen&X-Amz-Signature=0f4026edddcf075fd708ca34960facce07bdeb2867750e339aee8a14667b43ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6YTMUZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCsyKlvXD69ttQUhjI7kSDRKyoy%2B%2FYj6xS3V%2B8whDy52wIhAKG4abWeS5%2BXUvx3wWLiAR5hnJgW2n%2BiSyTjBW01AUPJKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgJ2U9qRVreSuZ40Eq3ANZgdoJlC0WTXrllk%2BRLm%2F2kiyNZoPgQ2Hm5J0H7pxgYxGDphWUAGH%2BKiaQFcM8gIY6YcVH5vKizyY81Ayc2QHtgjO2avocWpQDtrWb01PPvHrFiL3%2BYNV4uGAuJ9cwEeYRHZNfy5KQ5SbLaVlWOnFgtcbqbHwPGvsMsPO9ZCBw5RaxfYqlJI9aKdRgNGMFb0bulTNk1PNSD7tI%2FU1wMNaBQpv24CBushhQ4EwDZMcpsnhqGElowHu3T0SqcKI08WZy9lG2SUfRZAULigc3Nbdwtv0InQUKievujn%2Fyjr%2Bb9%2FzL1eDvBx4XhwIMxMp47yfxRxSCwmXCcjVsK5sLMk0OJ9WEWyvWrXvvzGT4ev8LZaX1qyh0BGd6e%2B7MCMuEfy6a3AnBF4YKtqUTkU2mQ6kQHpEmfmI9PfYJN8UG8xAVJ1qT8hSzF2k3HghfO6sYbqUIpOuTZF4lIdbPy6I91mbITHNnJf6XNK7wXAjUMyQp9UniFpYPQi13LN8Gdx1eh7bIX9VKXWyH3rth6VnY%2Fn4kzItCOvB0RjLmHhH91U12YhlKcC96ZUjKZzO4NKIbErHVMba78u0HAsJMKTh5YrRI%2Bq%2BQWnJqj4ZSKsT9AI9T6pRRwQSz5DoXGz7LLTCejcHEBjqkAbb4yNNjjSoz4pc7U%2B07zXbethT7syeMDEJlcqXuBs3l8SAEtbokdRPX3gtyNhXvrPnySqC19w%2F4WWVQqDgEqnPW%2BolkGNeLOgBOSDZXXGKueqL3n%2BxskC3wxAfSWiLbqyL2gtrHtL2RLYagHB4khgMd0VkOu%2F4TqogNFaYzURg2j0AD3Je78AWDiDK49iSnHAub9b0Qog%2FdWPQeMCFuKWJAAuen&X-Amz-Signature=857d36a06a2b3507dc34533c901d883fff728fd794418faf6c6b640a1312c2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6YTMUZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCsyKlvXD69ttQUhjI7kSDRKyoy%2B%2FYj6xS3V%2B8whDy52wIhAKG4abWeS5%2BXUvx3wWLiAR5hnJgW2n%2BiSyTjBW01AUPJKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgJ2U9qRVreSuZ40Eq3ANZgdoJlC0WTXrllk%2BRLm%2F2kiyNZoPgQ2Hm5J0H7pxgYxGDphWUAGH%2BKiaQFcM8gIY6YcVH5vKizyY81Ayc2QHtgjO2avocWpQDtrWb01PPvHrFiL3%2BYNV4uGAuJ9cwEeYRHZNfy5KQ5SbLaVlWOnFgtcbqbHwPGvsMsPO9ZCBw5RaxfYqlJI9aKdRgNGMFb0bulTNk1PNSD7tI%2FU1wMNaBQpv24CBushhQ4EwDZMcpsnhqGElowHu3T0SqcKI08WZy9lG2SUfRZAULigc3Nbdwtv0InQUKievujn%2Fyjr%2Bb9%2FzL1eDvBx4XhwIMxMp47yfxRxSCwmXCcjVsK5sLMk0OJ9WEWyvWrXvvzGT4ev8LZaX1qyh0BGd6e%2B7MCMuEfy6a3AnBF4YKtqUTkU2mQ6kQHpEmfmI9PfYJN8UG8xAVJ1qT8hSzF2k3HghfO6sYbqUIpOuTZF4lIdbPy6I91mbITHNnJf6XNK7wXAjUMyQp9UniFpYPQi13LN8Gdx1eh7bIX9VKXWyH3rth6VnY%2Fn4kzItCOvB0RjLmHhH91U12YhlKcC96ZUjKZzO4NKIbErHVMba78u0HAsJMKTh5YrRI%2Bq%2BQWnJqj4ZSKsT9AI9T6pRRwQSz5DoXGz7LLTCejcHEBjqkAbb4yNNjjSoz4pc7U%2B07zXbethT7syeMDEJlcqXuBs3l8SAEtbokdRPX3gtyNhXvrPnySqC19w%2F4WWVQqDgEqnPW%2BolkGNeLOgBOSDZXXGKueqL3n%2BxskC3wxAfSWiLbqyL2gtrHtL2RLYagHB4khgMd0VkOu%2F4TqogNFaYzURg2j0AD3Je78AWDiDK49iSnHAub9b0Qog%2FdWPQeMCFuKWJAAuen&X-Amz-Signature=de502c91da655d1b33fb7d6951822de0ef8f93e3cd48a4bb65557c67d2f4c33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
