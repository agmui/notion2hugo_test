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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STN7GFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDtFCJabAa38VZ6P97zl86qo8gjbAHpt07WdvZjDSygegIhAN52kdWC8AcQM3lF2v%2F6KjPfZGVyv966h9qnTVPYIFL7Kv8DCEgQABoMNjM3NDIzMTgzODA1IgyithmNVJv6aSdQ%2FN0q3APL%2F6uvupyqpfkfaVU%2BjgaALXK3rkI01knDp7g3F7pHvu7fbv5GNIZZpnOOkqsChJMJmgAVLXPQoMzveDHqC%2B6PPaS4SWYW%2Fi0vemM5l3pPpZPlEGs6Kk%2FwzktPOy8bVnecEK6dzzo5Tee0%2Bu0A0pHkucK1xynJsmdVG31eZIb83aFXA4iw8rAjZx085vQXmzG9eocywcWvbDPjqqS5%2BCbrZdb3bJ2VlKwdENI0d1prJ6AkqVLtv3EBGJCHvr8UlcCUO2suKgh4nz3It6Zdgtb2jbrGgXGgYDHz57QiQyxPnRW7Ch%2B4Ev5x%2FVUrg1V%2FE0K07c9Haj0Odqpn550aWO260NO0YTg0qUNef5cc%2FigCqJaSxSdtu7C6eqG9SGbolq8nxkn%2FDq3gcDxBHWSIVlUuDnhFQpdlfEp4nkhk4IB%2BLyp0SlIYHRMUH4sk4JrRGtR5Tk%2BoCUTiAIr7LW1zVUGodA5LXYla8wBerEy5Z%2BM3glxMGXbnyVo4h1JEEBZ1RNguq3SbkgEb1cKFEqKkYXBWN0ImErhjMqza6SaUBARX%2BNmqNpHClwX6c0QAgh3YCQ71lBjv1c2YB2X%2B4%2BAWXyudDOuzKTq9RVircwgenh4vhY0x7pJjTixFQAlZ%2FzDf2dnDBjqkAbS3aIqGKQE1Gv7vgDutyvxt%2BYylzOcfKL8W58M1ECeVxl0Imj%2Fuj32NhYXwPajru8KlIjSHfPA8JtRZrQG1VG6dwZu5DF2PQtW5d6dvRiWwdgN6Ech86rFNjAYTyKZFavS%2Fax1M%2FEv7tYlzrWhEh0J9J%2FAF%2BhUXWK8pASEvbwgVoO0gMrIKbZKN2GmGHiqoC2d1OQopKNXTEmOk%2FY5NljWHiNv6&X-Amz-Signature=1e610cbed8db60cf0336a9a924d391a1a314c29d24af9317328c4b2701942e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STN7GFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDtFCJabAa38VZ6P97zl86qo8gjbAHpt07WdvZjDSygegIhAN52kdWC8AcQM3lF2v%2F6KjPfZGVyv966h9qnTVPYIFL7Kv8DCEgQABoMNjM3NDIzMTgzODA1IgyithmNVJv6aSdQ%2FN0q3APL%2F6uvupyqpfkfaVU%2BjgaALXK3rkI01knDp7g3F7pHvu7fbv5GNIZZpnOOkqsChJMJmgAVLXPQoMzveDHqC%2B6PPaS4SWYW%2Fi0vemM5l3pPpZPlEGs6Kk%2FwzktPOy8bVnecEK6dzzo5Tee0%2Bu0A0pHkucK1xynJsmdVG31eZIb83aFXA4iw8rAjZx085vQXmzG9eocywcWvbDPjqqS5%2BCbrZdb3bJ2VlKwdENI0d1prJ6AkqVLtv3EBGJCHvr8UlcCUO2suKgh4nz3It6Zdgtb2jbrGgXGgYDHz57QiQyxPnRW7Ch%2B4Ev5x%2FVUrg1V%2FE0K07c9Haj0Odqpn550aWO260NO0YTg0qUNef5cc%2FigCqJaSxSdtu7C6eqG9SGbolq8nxkn%2FDq3gcDxBHWSIVlUuDnhFQpdlfEp4nkhk4IB%2BLyp0SlIYHRMUH4sk4JrRGtR5Tk%2BoCUTiAIr7LW1zVUGodA5LXYla8wBerEy5Z%2BM3glxMGXbnyVo4h1JEEBZ1RNguq3SbkgEb1cKFEqKkYXBWN0ImErhjMqza6SaUBARX%2BNmqNpHClwX6c0QAgh3YCQ71lBjv1c2YB2X%2B4%2BAWXyudDOuzKTq9RVircwgenh4vhY0x7pJjTixFQAlZ%2FzDf2dnDBjqkAbS3aIqGKQE1Gv7vgDutyvxt%2BYylzOcfKL8W58M1ECeVxl0Imj%2Fuj32NhYXwPajru8KlIjSHfPA8JtRZrQG1VG6dwZu5DF2PQtW5d6dvRiWwdgN6Ech86rFNjAYTyKZFavS%2Fax1M%2FEv7tYlzrWhEh0J9J%2FAF%2BhUXWK8pASEvbwgVoO0gMrIKbZKN2GmGHiqoC2d1OQopKNXTEmOk%2FY5NljWHiNv6&X-Amz-Signature=0d378f0463a926cca5ad12e3e865446849915b74991670b39aa9237e5dc249b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STN7GFP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDtFCJabAa38VZ6P97zl86qo8gjbAHpt07WdvZjDSygegIhAN52kdWC8AcQM3lF2v%2F6KjPfZGVyv966h9qnTVPYIFL7Kv8DCEgQABoMNjM3NDIzMTgzODA1IgyithmNVJv6aSdQ%2FN0q3APL%2F6uvupyqpfkfaVU%2BjgaALXK3rkI01knDp7g3F7pHvu7fbv5GNIZZpnOOkqsChJMJmgAVLXPQoMzveDHqC%2B6PPaS4SWYW%2Fi0vemM5l3pPpZPlEGs6Kk%2FwzktPOy8bVnecEK6dzzo5Tee0%2Bu0A0pHkucK1xynJsmdVG31eZIb83aFXA4iw8rAjZx085vQXmzG9eocywcWvbDPjqqS5%2BCbrZdb3bJ2VlKwdENI0d1prJ6AkqVLtv3EBGJCHvr8UlcCUO2suKgh4nz3It6Zdgtb2jbrGgXGgYDHz57QiQyxPnRW7Ch%2B4Ev5x%2FVUrg1V%2FE0K07c9Haj0Odqpn550aWO260NO0YTg0qUNef5cc%2FigCqJaSxSdtu7C6eqG9SGbolq8nxkn%2FDq3gcDxBHWSIVlUuDnhFQpdlfEp4nkhk4IB%2BLyp0SlIYHRMUH4sk4JrRGtR5Tk%2BoCUTiAIr7LW1zVUGodA5LXYla8wBerEy5Z%2BM3glxMGXbnyVo4h1JEEBZ1RNguq3SbkgEb1cKFEqKkYXBWN0ImErhjMqza6SaUBARX%2BNmqNpHClwX6c0QAgh3YCQ71lBjv1c2YB2X%2B4%2BAWXyudDOuzKTq9RVircwgenh4vhY0x7pJjTixFQAlZ%2FzDf2dnDBjqkAbS3aIqGKQE1Gv7vgDutyvxt%2BYylzOcfKL8W58M1ECeVxl0Imj%2Fuj32NhYXwPajru8KlIjSHfPA8JtRZrQG1VG6dwZu5DF2PQtW5d6dvRiWwdgN6Ech86rFNjAYTyKZFavS%2Fax1M%2FEv7tYlzrWhEh0J9J%2FAF%2BhUXWK8pASEvbwgVoO0gMrIKbZKN2GmGHiqoC2d1OQopKNXTEmOk%2FY5NljWHiNv6&X-Amz-Signature=b1d6ca67e3bbbab30ac19b16dfa3b4716aba578257bea466a10f94e3c7a801da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
