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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG2PL7J%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDO2hhzWizYW6rJqKvFNUXK8T08Hr1ERofG7NUe4NW5FAIgYd%2FLzweBbyoCuFt%2BBhTnnyMANcK68REVt1fZVx7Te2kq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDL9W1pQdHL%2BJh1AOircAxCuKEpfVfuxctd40EY7Yi9y502Q6GsmHKFjkbuWjLAqsbFGnADkSmcQkXtO5B0Nqtl5ofb90Pr6Mxi6ivuqnP8i%2B6N%2BrENAi6BlQiHwDaLw70jCrbxgf9o7nSYD%2B2Y5CtoC421mi0EcoyN5lHMxWDNTNSOys%2BXq6yyZJfB4EzZ9kIVwj%2BPMYeF%2FfNMRCTJGn5BM0HQ9qnVmh9EAZRDKViq%2F%2FgNVxC9GbyHi%2Fcrxud3OeWViQwUIh1PgBJ1y9P%2BatZDHZAlroOxDvv0nOkBM4hW6vDG3RcSN6DO8xdvKGKpXvfQMMX6j6LhiTKr%2FCGdaRt2Enor%2FoBmujXnqPB8g0zk%2BXY3D7X06x3B46MonPIzbNH4hXLuHlq%2BNIbnieUi1gl79w8PbUL5%2FZQkWvnB9V4qkRAsg0fTTj7OIkzHcZJ2t3X%2FbT6IR7YakyouDF6eyeDV1u%2Fd6PnpFmzWJBFhXN6A9vmD7vLtdipXWfDpIZ99x07BM0gfD1PsLd4PFitDi6MSiyY0SnV03BQqeCvH4OG3%2BTS09mlFuowabwPE52RhRRp%2BXib1wJlfp4rXvWVrrhiCBeFwVDaMDE18qz6R4j19iVQ2%2FdJqBOPy9Pbvtx7P5TzkWqazHJh64dDwoMKCXzMQGOqUBMOTaNGvaUaDO8iYgii0qaHvN6sgUsHxxBF4gzWL2U6lSNkN%2BT8Fu%2F4%2BLT2OZBwcFO5MUwW%2FRp7h5BVB0VPIJt5ZJ8gEZ0ZGeoB%2F4IOPnUMTO0PZ4y8z%2BhiVrPSF8Pj9YlYPDQZzFjmHslkAFvzP4KCOKHP2j90miGwRHoocMSgxGKblVuUv8WHemLrn%2F0ImQOafOV2jvfFa4O5T1MgQZQYOIkIv4&X-Amz-Signature=961a043bb8fc94fe97f53c12b5cfa61b193f9ec1303d574ab6da5ed96bd585ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG2PL7J%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDO2hhzWizYW6rJqKvFNUXK8T08Hr1ERofG7NUe4NW5FAIgYd%2FLzweBbyoCuFt%2BBhTnnyMANcK68REVt1fZVx7Te2kq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDL9W1pQdHL%2BJh1AOircAxCuKEpfVfuxctd40EY7Yi9y502Q6GsmHKFjkbuWjLAqsbFGnADkSmcQkXtO5B0Nqtl5ofb90Pr6Mxi6ivuqnP8i%2B6N%2BrENAi6BlQiHwDaLw70jCrbxgf9o7nSYD%2B2Y5CtoC421mi0EcoyN5lHMxWDNTNSOys%2BXq6yyZJfB4EzZ9kIVwj%2BPMYeF%2FfNMRCTJGn5BM0HQ9qnVmh9EAZRDKViq%2F%2FgNVxC9GbyHi%2Fcrxud3OeWViQwUIh1PgBJ1y9P%2BatZDHZAlroOxDvv0nOkBM4hW6vDG3RcSN6DO8xdvKGKpXvfQMMX6j6LhiTKr%2FCGdaRt2Enor%2FoBmujXnqPB8g0zk%2BXY3D7X06x3B46MonPIzbNH4hXLuHlq%2BNIbnieUi1gl79w8PbUL5%2FZQkWvnB9V4qkRAsg0fTTj7OIkzHcZJ2t3X%2FbT6IR7YakyouDF6eyeDV1u%2Fd6PnpFmzWJBFhXN6A9vmD7vLtdipXWfDpIZ99x07BM0gfD1PsLd4PFitDi6MSiyY0SnV03BQqeCvH4OG3%2BTS09mlFuowabwPE52RhRRp%2BXib1wJlfp4rXvWVrrhiCBeFwVDaMDE18qz6R4j19iVQ2%2FdJqBOPy9Pbvtx7P5TzkWqazHJh64dDwoMKCXzMQGOqUBMOTaNGvaUaDO8iYgii0qaHvN6sgUsHxxBF4gzWL2U6lSNkN%2BT8Fu%2F4%2BLT2OZBwcFO5MUwW%2FRp7h5BVB0VPIJt5ZJ8gEZ0ZGeoB%2F4IOPnUMTO0PZ4y8z%2BhiVrPSF8Pj9YlYPDQZzFjmHslkAFvzP4KCOKHP2j90miGwRHoocMSgxGKblVuUv8WHemLrn%2F0ImQOafOV2jvfFa4O5T1MgQZQYOIkIv4&X-Amz-Signature=8926674698d0c32e330b813309b7a24257cd8aaac9eeba0b21bbf2761824ccd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG2PL7J%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDO2hhzWizYW6rJqKvFNUXK8T08Hr1ERofG7NUe4NW5FAIgYd%2FLzweBbyoCuFt%2BBhTnnyMANcK68REVt1fZVx7Te2kq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDL9W1pQdHL%2BJh1AOircAxCuKEpfVfuxctd40EY7Yi9y502Q6GsmHKFjkbuWjLAqsbFGnADkSmcQkXtO5B0Nqtl5ofb90Pr6Mxi6ivuqnP8i%2B6N%2BrENAi6BlQiHwDaLw70jCrbxgf9o7nSYD%2B2Y5CtoC421mi0EcoyN5lHMxWDNTNSOys%2BXq6yyZJfB4EzZ9kIVwj%2BPMYeF%2FfNMRCTJGn5BM0HQ9qnVmh9EAZRDKViq%2F%2FgNVxC9GbyHi%2Fcrxud3OeWViQwUIh1PgBJ1y9P%2BatZDHZAlroOxDvv0nOkBM4hW6vDG3RcSN6DO8xdvKGKpXvfQMMX6j6LhiTKr%2FCGdaRt2Enor%2FoBmujXnqPB8g0zk%2BXY3D7X06x3B46MonPIzbNH4hXLuHlq%2BNIbnieUi1gl79w8PbUL5%2FZQkWvnB9V4qkRAsg0fTTj7OIkzHcZJ2t3X%2FbT6IR7YakyouDF6eyeDV1u%2Fd6PnpFmzWJBFhXN6A9vmD7vLtdipXWfDpIZ99x07BM0gfD1PsLd4PFitDi6MSiyY0SnV03BQqeCvH4OG3%2BTS09mlFuowabwPE52RhRRp%2BXib1wJlfp4rXvWVrrhiCBeFwVDaMDE18qz6R4j19iVQ2%2FdJqBOPy9Pbvtx7P5TzkWqazHJh64dDwoMKCXzMQGOqUBMOTaNGvaUaDO8iYgii0qaHvN6sgUsHxxBF4gzWL2U6lSNkN%2BT8Fu%2F4%2BLT2OZBwcFO5MUwW%2FRp7h5BVB0VPIJt5ZJ8gEZ0ZGeoB%2F4IOPnUMTO0PZ4y8z%2BhiVrPSF8Pj9YlYPDQZzFjmHslkAFvzP4KCOKHP2j90miGwRHoocMSgxGKblVuUv8WHemLrn%2F0ImQOafOV2jvfFa4O5T1MgQZQYOIkIv4&X-Amz-Signature=88c6a070ec7b37074e9d96b44e86eb3a40eece6ffbcd0598ffcea8051c5fd2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
