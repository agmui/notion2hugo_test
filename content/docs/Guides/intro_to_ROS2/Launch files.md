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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETCCTHW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAgnncqSgkBaEwi8xV1T%2BBeJWyK46E8aDxO4tW1qdu0mAiAXW8tvzJ5rvsMLl8JFb1Pj81ww0Y77My0XE53UOP9P1yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMq5X6das%2FKJ2kfTR%2BKtwDnE2y21iczsbv%2F6%2BE%2FPKg68uIWZEnU%2Bjs4lYBHv958Cjnm0kc2ETaA4AokCIkP2cFd4cMSMVdoS6QUOj%2BsI5hHUMEo%2F9pYDYEIuDfRWdaRkCyjfpUNFmbx7q%2BOBdwuyM3zBAw%2Fkf4YJ7VMeO6igy9x5%2F%2FO4k2HC4R18qH2Oj0wv1aM3My1AWsigsR9F3r33CwaaqxD4VHprGYAT%2FBl5WeHFISEkl5qq%2FMce1phym%2F3uNEiV1B26CG2ACa%2FkYxrzJJA1jjUzBcZrZ5Br425K8%2BNwc6b8ltIQOTn4gWb1q85NNZDvMKx1zk7SkiQHoIMHLfE%2B2DPRpJD9stHH%2BvZBgrzUAgf0SIb2meepJjdESZ9JK8kHi8wCildqDsd%2F0KPS%2FNq4DEnW3gCteRYNeWItd3PSJrGPEFzxYVqLcBFFQNL9U5hsoQKsN90qI6w4UZR8H6mos7EZW94rQ%2FiI9lWjqQHcUC3yMDnKO10PTCe4B%2BFIg%2F259DwnQvBBKQkOW09QEwVDuKLZa2QsNyCiqcKbUFPqVxLyHNwsNxekWKBUrjf8eyXnN21%2Ffv04TM%2FXSofMOlGefRsCViHv6tjQNRTB9uOaM6Fv%2BJp9mrYFsnEvagylY4iMLFAB0GhqQxMikwg97ovgY6pgGGiq1QPUVsINaDbmLF67JP1S8kUVHbqTNqXBwc1yqhzHtkUtDuDeBsSZfHcCBReFe8Wwqi0HOkOAurpyMhNA%2BCoEcbYS06gZIAQbOHSLQrXxJF9ojUYyXLZTgAclfIoPJhwy9uHoTmbMEKZKO4kfeDC6Jxin%2B1TiKNktiUTSBD2jTjV77TX9E9xSHkzIT1ANAS1hKqpNtpFre2EMea3TN2aOpb4N0K&X-Amz-Signature=2af1357b6d6e358feb0f76802a61909e1b75aab0ad314d25e95aeedc1294b587&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETCCTHW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAgnncqSgkBaEwi8xV1T%2BBeJWyK46E8aDxO4tW1qdu0mAiAXW8tvzJ5rvsMLl8JFb1Pj81ww0Y77My0XE53UOP9P1yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMq5X6das%2FKJ2kfTR%2BKtwDnE2y21iczsbv%2F6%2BE%2FPKg68uIWZEnU%2Bjs4lYBHv958Cjnm0kc2ETaA4AokCIkP2cFd4cMSMVdoS6QUOj%2BsI5hHUMEo%2F9pYDYEIuDfRWdaRkCyjfpUNFmbx7q%2BOBdwuyM3zBAw%2Fkf4YJ7VMeO6igy9x5%2F%2FO4k2HC4R18qH2Oj0wv1aM3My1AWsigsR9F3r33CwaaqxD4VHprGYAT%2FBl5WeHFISEkl5qq%2FMce1phym%2F3uNEiV1B26CG2ACa%2FkYxrzJJA1jjUzBcZrZ5Br425K8%2BNwc6b8ltIQOTn4gWb1q85NNZDvMKx1zk7SkiQHoIMHLfE%2B2DPRpJD9stHH%2BvZBgrzUAgf0SIb2meepJjdESZ9JK8kHi8wCildqDsd%2F0KPS%2FNq4DEnW3gCteRYNeWItd3PSJrGPEFzxYVqLcBFFQNL9U5hsoQKsN90qI6w4UZR8H6mos7EZW94rQ%2FiI9lWjqQHcUC3yMDnKO10PTCe4B%2BFIg%2F259DwnQvBBKQkOW09QEwVDuKLZa2QsNyCiqcKbUFPqVxLyHNwsNxekWKBUrjf8eyXnN21%2Ffv04TM%2FXSofMOlGefRsCViHv6tjQNRTB9uOaM6Fv%2BJp9mrYFsnEvagylY4iMLFAB0GhqQxMikwg97ovgY6pgGGiq1QPUVsINaDbmLF67JP1S8kUVHbqTNqXBwc1yqhzHtkUtDuDeBsSZfHcCBReFe8Wwqi0HOkOAurpyMhNA%2BCoEcbYS06gZIAQbOHSLQrXxJF9ojUYyXLZTgAclfIoPJhwy9uHoTmbMEKZKO4kfeDC6Jxin%2B1TiKNktiUTSBD2jTjV77TX9E9xSHkzIT1ANAS1hKqpNtpFre2EMea3TN2aOpb4N0K&X-Amz-Signature=c3f00f2a06914563f4cc713eea3afca4f7b4c2333a5b96bdd437c6599b4b9fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETCCTHW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAgnncqSgkBaEwi8xV1T%2BBeJWyK46E8aDxO4tW1qdu0mAiAXW8tvzJ5rvsMLl8JFb1Pj81ww0Y77My0XE53UOP9P1yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMq5X6das%2FKJ2kfTR%2BKtwDnE2y21iczsbv%2F6%2BE%2FPKg68uIWZEnU%2Bjs4lYBHv958Cjnm0kc2ETaA4AokCIkP2cFd4cMSMVdoS6QUOj%2BsI5hHUMEo%2F9pYDYEIuDfRWdaRkCyjfpUNFmbx7q%2BOBdwuyM3zBAw%2Fkf4YJ7VMeO6igy9x5%2F%2FO4k2HC4R18qH2Oj0wv1aM3My1AWsigsR9F3r33CwaaqxD4VHprGYAT%2FBl5WeHFISEkl5qq%2FMce1phym%2F3uNEiV1B26CG2ACa%2FkYxrzJJA1jjUzBcZrZ5Br425K8%2BNwc6b8ltIQOTn4gWb1q85NNZDvMKx1zk7SkiQHoIMHLfE%2B2DPRpJD9stHH%2BvZBgrzUAgf0SIb2meepJjdESZ9JK8kHi8wCildqDsd%2F0KPS%2FNq4DEnW3gCteRYNeWItd3PSJrGPEFzxYVqLcBFFQNL9U5hsoQKsN90qI6w4UZR8H6mos7EZW94rQ%2FiI9lWjqQHcUC3yMDnKO10PTCe4B%2BFIg%2F259DwnQvBBKQkOW09QEwVDuKLZa2QsNyCiqcKbUFPqVxLyHNwsNxekWKBUrjf8eyXnN21%2Ffv04TM%2FXSofMOlGefRsCViHv6tjQNRTB9uOaM6Fv%2BJp9mrYFsnEvagylY4iMLFAB0GhqQxMikwg97ovgY6pgGGiq1QPUVsINaDbmLF67JP1S8kUVHbqTNqXBwc1yqhzHtkUtDuDeBsSZfHcCBReFe8Wwqi0HOkOAurpyMhNA%2BCoEcbYS06gZIAQbOHSLQrXxJF9ojUYyXLZTgAclfIoPJhwy9uHoTmbMEKZKO4kfeDC6Jxin%2B1TiKNktiUTSBD2jTjV77TX9E9xSHkzIT1ANAS1hKqpNtpFre2EMea3TN2aOpb4N0K&X-Amz-Signature=8182d1ab2be05b4946b0d44452660c3117643f28cd3dbdc66357a2c62d4d8185&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
