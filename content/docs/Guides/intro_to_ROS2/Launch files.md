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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EN3X6KQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDJvRWjwEDJaSuLjZ4jX%2FwEI%2BYSGfIfCL%2BCBSIT2NrAtgIgWybsQTkzDqt3j7h6W30qTvBJ2LxWkVPy0LYzVzt5EkUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIJECRltqRIkL%2BqBBSrcA3wYDlnhkCzPUyUul5lvGj2EfQOK2h2kf1QTExxZX7kRQTJzcnijTHTBcWCc%2Fk2BUGYMzPA9Rr25HJpJhLSh94EqxL%2FvFSnNWmsnuPaJVkx0qWPW7A%2FhQWFG43yvVJYCRq31drUlDENUaQuxgY8CcwmuIl%2Bl%2BLMEXuflLmNq2JVw3nA83tNHlycukDWImEAPQorV%2FRynIHAizAkXZdjAWoSQGFuhNy8cgHRju8uKlt2hjPS8m1ZkSlQleJv%2BepBuWMYdOei0of3ZhlRncscdTKXCcnE5ZKnHR3U4QF9xrqOGvRtefQEdAO%2F91IX26gq8hs44Tt895rnniSrI3bu5KuxcAbGrDbskbiGMCiFat8%2B0Nkp%2BSYXmX2%2FvBm%2FiacgTB0dwdG1UbY%2F5rV5NpwshycZgkG8q7KXuguG%2BiXvALuGjtvZeOqBZAwiR1rW2U9JxPsuk7rgtvNwmVhS4K8rdxqr7F8jpq4HsCrvGDDdE8WuGDGf49OIKiI5iL0oxxXLH716C2efuTFgPT2lgXQ827T7KXOWdZ3PMMXj9kDSsLkbeyZ0OFkqgkcSpt%2FX7Tr%2FhjdoaQCmjN%2BGHOdVvodUxSmrgImIiiihA4BN0es2oChjpUTbrBuRhngligVTvMOW35cMGOqUBW%2BAQleASlKGMC%2Bqu4j6w%2F%2F2CrteskXN5eCYrXtNEmFlEVdb3Sy%2BmOWEBWlr9MT%2FeuyHxCs2WCvg6%2FLSW%2B8Fb1Zb5U6KmvPmLwuZ0DY%2BNGXzDn0fZWYhoEERpDjMD1ePU1x5c%2BYM0n8kpmtIkJoaE6Udg0cCgXl3Qkg%2FtCnRzi6UJZDWTTnTR6G0ZuSdLBIIEatPZ%2F7QY6ShNKVX0YldP2GHgNZZG&X-Amz-Signature=0855b63e1d4d49c1eb95c14d090da6b30d40bc2c911e045371905e207495d3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EN3X6KQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDJvRWjwEDJaSuLjZ4jX%2FwEI%2BYSGfIfCL%2BCBSIT2NrAtgIgWybsQTkzDqt3j7h6W30qTvBJ2LxWkVPy0LYzVzt5EkUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIJECRltqRIkL%2BqBBSrcA3wYDlnhkCzPUyUul5lvGj2EfQOK2h2kf1QTExxZX7kRQTJzcnijTHTBcWCc%2Fk2BUGYMzPA9Rr25HJpJhLSh94EqxL%2FvFSnNWmsnuPaJVkx0qWPW7A%2FhQWFG43yvVJYCRq31drUlDENUaQuxgY8CcwmuIl%2Bl%2BLMEXuflLmNq2JVw3nA83tNHlycukDWImEAPQorV%2FRynIHAizAkXZdjAWoSQGFuhNy8cgHRju8uKlt2hjPS8m1ZkSlQleJv%2BepBuWMYdOei0of3ZhlRncscdTKXCcnE5ZKnHR3U4QF9xrqOGvRtefQEdAO%2F91IX26gq8hs44Tt895rnniSrI3bu5KuxcAbGrDbskbiGMCiFat8%2B0Nkp%2BSYXmX2%2FvBm%2FiacgTB0dwdG1UbY%2F5rV5NpwshycZgkG8q7KXuguG%2BiXvALuGjtvZeOqBZAwiR1rW2U9JxPsuk7rgtvNwmVhS4K8rdxqr7F8jpq4HsCrvGDDdE8WuGDGf49OIKiI5iL0oxxXLH716C2efuTFgPT2lgXQ827T7KXOWdZ3PMMXj9kDSsLkbeyZ0OFkqgkcSpt%2FX7Tr%2FhjdoaQCmjN%2BGHOdVvodUxSmrgImIiiihA4BN0es2oChjpUTbrBuRhngligVTvMOW35cMGOqUBW%2BAQleASlKGMC%2Bqu4j6w%2F%2F2CrteskXN5eCYrXtNEmFlEVdb3Sy%2BmOWEBWlr9MT%2FeuyHxCs2WCvg6%2FLSW%2B8Fb1Zb5U6KmvPmLwuZ0DY%2BNGXzDn0fZWYhoEERpDjMD1ePU1x5c%2BYM0n8kpmtIkJoaE6Udg0cCgXl3Qkg%2FtCnRzi6UJZDWTTnTR6G0ZuSdLBIIEatPZ%2F7QY6ShNKVX0YldP2GHgNZZG&X-Amz-Signature=5e11f0c0096ac890f9aa4ddb880461f8d2cbc70c3ac12f0d33b1cebe38738d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EN3X6KQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDJvRWjwEDJaSuLjZ4jX%2FwEI%2BYSGfIfCL%2BCBSIT2NrAtgIgWybsQTkzDqt3j7h6W30qTvBJ2LxWkVPy0LYzVzt5EkUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIJECRltqRIkL%2BqBBSrcA3wYDlnhkCzPUyUul5lvGj2EfQOK2h2kf1QTExxZX7kRQTJzcnijTHTBcWCc%2Fk2BUGYMzPA9Rr25HJpJhLSh94EqxL%2FvFSnNWmsnuPaJVkx0qWPW7A%2FhQWFG43yvVJYCRq31drUlDENUaQuxgY8CcwmuIl%2Bl%2BLMEXuflLmNq2JVw3nA83tNHlycukDWImEAPQorV%2FRynIHAizAkXZdjAWoSQGFuhNy8cgHRju8uKlt2hjPS8m1ZkSlQleJv%2BepBuWMYdOei0of3ZhlRncscdTKXCcnE5ZKnHR3U4QF9xrqOGvRtefQEdAO%2F91IX26gq8hs44Tt895rnniSrI3bu5KuxcAbGrDbskbiGMCiFat8%2B0Nkp%2BSYXmX2%2FvBm%2FiacgTB0dwdG1UbY%2F5rV5NpwshycZgkG8q7KXuguG%2BiXvALuGjtvZeOqBZAwiR1rW2U9JxPsuk7rgtvNwmVhS4K8rdxqr7F8jpq4HsCrvGDDdE8WuGDGf49OIKiI5iL0oxxXLH716C2efuTFgPT2lgXQ827T7KXOWdZ3PMMXj9kDSsLkbeyZ0OFkqgkcSpt%2FX7Tr%2FhjdoaQCmjN%2BGHOdVvodUxSmrgImIiiihA4BN0es2oChjpUTbrBuRhngligVTvMOW35cMGOqUBW%2BAQleASlKGMC%2Bqu4j6w%2F%2F2CrteskXN5eCYrXtNEmFlEVdb3Sy%2BmOWEBWlr9MT%2FeuyHxCs2WCvg6%2FLSW%2B8Fb1Zb5U6KmvPmLwuZ0DY%2BNGXzDn0fZWYhoEERpDjMD1ePU1x5c%2BYM0n8kpmtIkJoaE6Udg0cCgXl3Qkg%2FtCnRzi6UJZDWTTnTR6G0ZuSdLBIIEatPZ%2F7QY6ShNKVX0YldP2GHgNZZG&X-Amz-Signature=47faa85de6efaafb2f48ba4621aab22077a610b174c564a95020102c9c495dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
