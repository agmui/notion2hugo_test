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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7XYV5A%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUwhcS%2BX2QM4LSXj%2F6vlxNVX6IWlF2oUxDDXB1UxbUiAiAgZpfG6lwFf0dPjFSHyhlE4FLEu%2BlyFxvncFHsNWIcciqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Qikc2MdwqwR67FxKtwDdumXYrelO3kRBfi4VylJYHIMtdKpdGuZX%2BLIdYBJalKdmxUCFmdU%2B%2BfMVLd98KWPy9bEO4onHdE1%2F9LEmqWOe4j9%2BCK4OUBzYajaMaFq6uGo2WEI%2F5X9bDmV4c0qYdQBsTAeZzY1mHJc72MhkMv6Cc4%2FGSdirrgDDU2nTrBAaNq8t0Dlbd7GjNHmjgyIoVcTXQiAq4vJCs262Iu6h%2B45EzyBAaPmwehJaBvbRUSRdmzkM7jDCdBwpls%2Fh6KKVCpT6mYjTn7rapIDGqR4vP%2BI2thZC9wNq0M4NDgYBaZdD%2BF6bqS8qer0CRSCOh%2BDQZUy9G5qoSZ9XQqw1Hi4OgWpl9LpiND6RBlqAUiJGCiAgHjEISm8XaKD5K1fv2BkSlol3pxZ4hLJ165XVcrTOLjX7amYgXLCkri9KNdbtQYd1eO8RLeDTSlHuAa%2FooOBT7pXUDJ1CrkAqVkjkfX26zswqN3bCtVfN0vwQPPyiOOunTpHrj1SHWZaRniKpww5TKoOSsG84Pl5dEAMzZbuD2vPnQQc9GZ6FrfzybY0FHXeBpk2jO93xFn5nVIhpSxRt%2BjLIfeBDNJ4xU4RxyPjXSo2VarAXzdurEYcraWELoJK0kBgqbbBnU30YWgqxR4wpMCY0QY6pgGbNegyZchqREpB4IEWPHbLkVv%2FHtht7wpvkqKQCFCtLRxGo8kgAhFGPeRzm4ok1ZmHMCYPVp7D%2B65RtfwRXBfbLiOVZCWYc2B%2F%2BctOPueYnWsxwioRtk9PcRu4xNYezvWi%2B%2Bxp1HxEa0qSAQewbRuXHeo0IEaLkzZY6QmbLlEq6ZJiZlzk8gOt75M8mFjJhInfBMkc7wiCcxodKGSn6L54MokGVXlr&X-Amz-Signature=0413af4c1851de6b4cd064835f23ebf207b9cb2c2142c4896f8562a0ae026004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7XYV5A%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUwhcS%2BX2QM4LSXj%2F6vlxNVX6IWlF2oUxDDXB1UxbUiAiAgZpfG6lwFf0dPjFSHyhlE4FLEu%2BlyFxvncFHsNWIcciqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Qikc2MdwqwR67FxKtwDdumXYrelO3kRBfi4VylJYHIMtdKpdGuZX%2BLIdYBJalKdmxUCFmdU%2B%2BfMVLd98KWPy9bEO4onHdE1%2F9LEmqWOe4j9%2BCK4OUBzYajaMaFq6uGo2WEI%2F5X9bDmV4c0qYdQBsTAeZzY1mHJc72MhkMv6Cc4%2FGSdirrgDDU2nTrBAaNq8t0Dlbd7GjNHmjgyIoVcTXQiAq4vJCs262Iu6h%2B45EzyBAaPmwehJaBvbRUSRdmzkM7jDCdBwpls%2Fh6KKVCpT6mYjTn7rapIDGqR4vP%2BI2thZC9wNq0M4NDgYBaZdD%2BF6bqS8qer0CRSCOh%2BDQZUy9G5qoSZ9XQqw1Hi4OgWpl9LpiND6RBlqAUiJGCiAgHjEISm8XaKD5K1fv2BkSlol3pxZ4hLJ165XVcrTOLjX7amYgXLCkri9KNdbtQYd1eO8RLeDTSlHuAa%2FooOBT7pXUDJ1CrkAqVkjkfX26zswqN3bCtVfN0vwQPPyiOOunTpHrj1SHWZaRniKpww5TKoOSsG84Pl5dEAMzZbuD2vPnQQc9GZ6FrfzybY0FHXeBpk2jO93xFn5nVIhpSxRt%2BjLIfeBDNJ4xU4RxyPjXSo2VarAXzdurEYcraWELoJK0kBgqbbBnU30YWgqxR4wpMCY0QY6pgGbNegyZchqREpB4IEWPHbLkVv%2FHtht7wpvkqKQCFCtLRxGo8kgAhFGPeRzm4ok1ZmHMCYPVp7D%2B65RtfwRXBfbLiOVZCWYc2B%2F%2BctOPueYnWsxwioRtk9PcRu4xNYezvWi%2B%2Bxp1HxEa0qSAQewbRuXHeo0IEaLkzZY6QmbLlEq6ZJiZlzk8gOt75M8mFjJhInfBMkc7wiCcxodKGSn6L54MokGVXlr&X-Amz-Signature=796eeb7c16e14ee8f046f2ca585b16016d5084fa49359925478e79ee8af9761c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7XYV5A%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUwhcS%2BX2QM4LSXj%2F6vlxNVX6IWlF2oUxDDXB1UxbUiAiAgZpfG6lwFf0dPjFSHyhlE4FLEu%2BlyFxvncFHsNWIcciqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Qikc2MdwqwR67FxKtwDdumXYrelO3kRBfi4VylJYHIMtdKpdGuZX%2BLIdYBJalKdmxUCFmdU%2B%2BfMVLd98KWPy9bEO4onHdE1%2F9LEmqWOe4j9%2BCK4OUBzYajaMaFq6uGo2WEI%2F5X9bDmV4c0qYdQBsTAeZzY1mHJc72MhkMv6Cc4%2FGSdirrgDDU2nTrBAaNq8t0Dlbd7GjNHmjgyIoVcTXQiAq4vJCs262Iu6h%2B45EzyBAaPmwehJaBvbRUSRdmzkM7jDCdBwpls%2Fh6KKVCpT6mYjTn7rapIDGqR4vP%2BI2thZC9wNq0M4NDgYBaZdD%2BF6bqS8qer0CRSCOh%2BDQZUy9G5qoSZ9XQqw1Hi4OgWpl9LpiND6RBlqAUiJGCiAgHjEISm8XaKD5K1fv2BkSlol3pxZ4hLJ165XVcrTOLjX7amYgXLCkri9KNdbtQYd1eO8RLeDTSlHuAa%2FooOBT7pXUDJ1CrkAqVkjkfX26zswqN3bCtVfN0vwQPPyiOOunTpHrj1SHWZaRniKpww5TKoOSsG84Pl5dEAMzZbuD2vPnQQc9GZ6FrfzybY0FHXeBpk2jO93xFn5nVIhpSxRt%2BjLIfeBDNJ4xU4RxyPjXSo2VarAXzdurEYcraWELoJK0kBgqbbBnU30YWgqxR4wpMCY0QY6pgGbNegyZchqREpB4IEWPHbLkVv%2FHtht7wpvkqKQCFCtLRxGo8kgAhFGPeRzm4ok1ZmHMCYPVp7D%2B65RtfwRXBfbLiOVZCWYc2B%2F%2BctOPueYnWsxwioRtk9PcRu4xNYezvWi%2B%2Bxp1HxEa0qSAQewbRuXHeo0IEaLkzZY6QmbLlEq6ZJiZlzk8gOt75M8mFjJhInfBMkc7wiCcxodKGSn6L54MokGVXlr&X-Amz-Signature=0954eef72459d73f677284e337c8a06a6eb6d5bc71311ebedc94ee38693cc080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
