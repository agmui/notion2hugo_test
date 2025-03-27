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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3AACTKF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJvjFANC6ME%2B4EiOuSocZZPD7ADy3xFcbwcCrLjL18AAiEAoQzdQT4rqhC35I7sWKNevIiJAzbJdYf3RiUi0iRMj7Uq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAzsRYjNMm3OS%2Fw%2BNCrcA9BtCTtjmQvzRt58xl%2BF0aXorxSYTvHfG%2FWt7Ug0w1qVe%2BclcG6VvQ9uKKYnAxzmjLmxAE7XEihO%2B4O1bNjOOGEF3%2BPkYbdqpPfV%2BqyAcfrf7%2B0b0frLUpCwxbX%2FxRPhG5uUY4Sg%2FIy%2B6d4ReMt3Geyg3TPi32Zc4LdtJueJNBTf2Dyu0HBJ%2FyqDEXTHKENWLN4RFOptuwq%2FIAuJ1VYWrqwDaG9b%2B1lr3E6IcdY6gE3%2BoNzdVV1dWjmaH3TJwLBghGSRtCOicV7%2FISn5VYvA%2FbYpoWletStlB6NuSUNcKWubivyAHW5Xch0BzIE%2BTRsDQHfna9XPb54cRs4LwIzTI%2BTYT7dztw9B7xMGfmD5Icw66z5u%2FH9iVPu6iYVIohb7IsM6jJ1RUgHWLZOKjxvIpB94fVxGJC2c6oy8T%2FTm8r6lNgx9RbQjYJgTtiNVuIaSIEkUAn8Gf%2FFhmv%2BEFK17xFOz4NvLgahS%2FdK%2BbtQQgMYd6NxNG4CvJhNEBk6TbNvtLB%2B7LX%2FmegAGrYACwRZbM%2Fp9H6d9aDUgjY2tFL3q0zJS25S8NQFknUUE8MWm8uKKOSegAG60q50YWx%2FaIPqMha5XpEiRAP541ngYQs13KSa7JdkgC1V7k40ENSomMOSwlb8GOqUBnKQ46UkHY7Qdruoa%2B7ElWJbs48ISx3zW%2B85bn2HenXp94NB4vInf12BoATKLOmbvgTT%2FX9K0QifXLz57RlvawGSSg2X64RboPuJxdXv5RjXNnLeXaAd846KNGqG3QsOKTAFd2bzVlKNa0beqNlL5GKghrMT999utPgY3ONmE1tKqba9LMTo3X%2FRmktzeqKRbKyBzRhSk%2FMaLb2l5OLdTrjUJ43fD&X-Amz-Signature=cd2add190977d9986597f7379b66569bf0339746b15a6596a891935808a63f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3AACTKF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJvjFANC6ME%2B4EiOuSocZZPD7ADy3xFcbwcCrLjL18AAiEAoQzdQT4rqhC35I7sWKNevIiJAzbJdYf3RiUi0iRMj7Uq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAzsRYjNMm3OS%2Fw%2BNCrcA9BtCTtjmQvzRt58xl%2BF0aXorxSYTvHfG%2FWt7Ug0w1qVe%2BclcG6VvQ9uKKYnAxzmjLmxAE7XEihO%2B4O1bNjOOGEF3%2BPkYbdqpPfV%2BqyAcfrf7%2B0b0frLUpCwxbX%2FxRPhG5uUY4Sg%2FIy%2B6d4ReMt3Geyg3TPi32Zc4LdtJueJNBTf2Dyu0HBJ%2FyqDEXTHKENWLN4RFOptuwq%2FIAuJ1VYWrqwDaG9b%2B1lr3E6IcdY6gE3%2BoNzdVV1dWjmaH3TJwLBghGSRtCOicV7%2FISn5VYvA%2FbYpoWletStlB6NuSUNcKWubivyAHW5Xch0BzIE%2BTRsDQHfna9XPb54cRs4LwIzTI%2BTYT7dztw9B7xMGfmD5Icw66z5u%2FH9iVPu6iYVIohb7IsM6jJ1RUgHWLZOKjxvIpB94fVxGJC2c6oy8T%2FTm8r6lNgx9RbQjYJgTtiNVuIaSIEkUAn8Gf%2FFhmv%2BEFK17xFOz4NvLgahS%2FdK%2BbtQQgMYd6NxNG4CvJhNEBk6TbNvtLB%2B7LX%2FmegAGrYACwRZbM%2Fp9H6d9aDUgjY2tFL3q0zJS25S8NQFknUUE8MWm8uKKOSegAG60q50YWx%2FaIPqMha5XpEiRAP541ngYQs13KSa7JdkgC1V7k40ENSomMOSwlb8GOqUBnKQ46UkHY7Qdruoa%2B7ElWJbs48ISx3zW%2B85bn2HenXp94NB4vInf12BoATKLOmbvgTT%2FX9K0QifXLz57RlvawGSSg2X64RboPuJxdXv5RjXNnLeXaAd846KNGqG3QsOKTAFd2bzVlKNa0beqNlL5GKghrMT999utPgY3ONmE1tKqba9LMTo3X%2FRmktzeqKRbKyBzRhSk%2FMaLb2l5OLdTrjUJ43fD&X-Amz-Signature=ba3155d7b1fb4fcaaaca12d7c5105add7f0fc6e5bcbbc4bb87c253c96ce48807&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3AACTKF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJvjFANC6ME%2B4EiOuSocZZPD7ADy3xFcbwcCrLjL18AAiEAoQzdQT4rqhC35I7sWKNevIiJAzbJdYf3RiUi0iRMj7Uq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAzsRYjNMm3OS%2Fw%2BNCrcA9BtCTtjmQvzRt58xl%2BF0aXorxSYTvHfG%2FWt7Ug0w1qVe%2BclcG6VvQ9uKKYnAxzmjLmxAE7XEihO%2B4O1bNjOOGEF3%2BPkYbdqpPfV%2BqyAcfrf7%2B0b0frLUpCwxbX%2FxRPhG5uUY4Sg%2FIy%2B6d4ReMt3Geyg3TPi32Zc4LdtJueJNBTf2Dyu0HBJ%2FyqDEXTHKENWLN4RFOptuwq%2FIAuJ1VYWrqwDaG9b%2B1lr3E6IcdY6gE3%2BoNzdVV1dWjmaH3TJwLBghGSRtCOicV7%2FISn5VYvA%2FbYpoWletStlB6NuSUNcKWubivyAHW5Xch0BzIE%2BTRsDQHfna9XPb54cRs4LwIzTI%2BTYT7dztw9B7xMGfmD5Icw66z5u%2FH9iVPu6iYVIohb7IsM6jJ1RUgHWLZOKjxvIpB94fVxGJC2c6oy8T%2FTm8r6lNgx9RbQjYJgTtiNVuIaSIEkUAn8Gf%2FFhmv%2BEFK17xFOz4NvLgahS%2FdK%2BbtQQgMYd6NxNG4CvJhNEBk6TbNvtLB%2B7LX%2FmegAGrYACwRZbM%2Fp9H6d9aDUgjY2tFL3q0zJS25S8NQFknUUE8MWm8uKKOSegAG60q50YWx%2FaIPqMha5XpEiRAP541ngYQs13KSa7JdkgC1V7k40ENSomMOSwlb8GOqUBnKQ46UkHY7Qdruoa%2B7ElWJbs48ISx3zW%2B85bn2HenXp94NB4vInf12BoATKLOmbvgTT%2FX9K0QifXLz57RlvawGSSg2X64RboPuJxdXv5RjXNnLeXaAd846KNGqG3QsOKTAFd2bzVlKNa0beqNlL5GKghrMT999utPgY3ONmE1tKqba9LMTo3X%2FRmktzeqKRbKyBzRhSk%2FMaLb2l5OLdTrjUJ43fD&X-Amz-Signature=a9b6c19154de9ab981ce26f63d7f9a4c56fdc9882fbad5faeb56a0cebf4cf70b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
