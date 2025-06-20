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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LYNNGT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMfGvPiXN3iOp04C9MGSzmHTPAhaJIgc%2B3ekLW5AYbQIgWUmxxrj1AbBp8s4fQZWqZI7h%2FBP9jo%2BDD3t0J8YAgcAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXjtTzlZuQBdpVglircA356sROpk%2F0bNrfwiObeX68dXaqnewjIWtZk%2Ba2A1Hrm7UToyUG98HJTYB4tSkT400A1nd6VhMOlUtVl4ToMZv6WFcupVZ5Rw74dAmrC2X5UynoU1LCPT6a5m4Rzq8kLzhj50wwRl8fDrzwJ8pr%2B6BKZJpym0VlajxeAkX1zDi0UwUblU9Mop27kK9v8gFDGDT50L0x3LeoLRGfTiEQytIKXPaybkYoF2NEt1UmIfqinoxHaG%2Frc62CD3SDKm%2BJ5%2FG%2BtgshUb61R5mcmoA8cM0I3vVBUmhsQl4ljwRumOrDmeUiq4hfdgRlR0kKiYf3y%2FKOaG3U7XRpYAT2l652NBTTXzg%2B1wakACG%2BFdtwK7ujUuFcjYJ1XmIEKzI61tpDsSLtnxARFqZBI2Xj%2FPD%2FIdAtkghUuaeNl8JHwI59lACwyQYgnnCNGtEw4v8h9%2FSGXXg15cwzlBkha8TrlTsrNauVi26ZaSd%2BsN32b0ZUg%2FH0bSdiL%2BOK5sJRmTUau%2B1HEAPHJttZrlGlwLlX335TQ1vaskes7pYQKS6dz3zn1cfMErwflaaao8Zc3QsrLzNSiRAYA0YdEZy%2FH76DTNVVVstcNS%2FHzQD666WOCUiU3O1d90PQNLVxmi0jYPDzGMIyy1sIGOqUBG8%2BSaC%2BKSsuRToPRo%2BeiCa8VKSe0MKTmAIkI2OMPE%2BIIHgIk5D7zp5OPaRkd1aYLycgOxhfYE4MYiROAQK0o1LE2HGaohe8kR6Rci8KnOeB3e%2FnB6qpgJu7CJ%2BUHbNCZmEgi51rnZ16co9imCFG%2FEwyDpirH%2B8FHptY7oTLspLJOIMcDDnUizy6Ppdgh5A1Zc5hLK576LxHmbEHz3mOYuDyHahdL&X-Amz-Signature=d71f4e82c02a8700bfb5aaceb2c5f6fe9a2331c293071de68153b5982c0a1ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LYNNGT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMfGvPiXN3iOp04C9MGSzmHTPAhaJIgc%2B3ekLW5AYbQIgWUmxxrj1AbBp8s4fQZWqZI7h%2FBP9jo%2BDD3t0J8YAgcAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXjtTzlZuQBdpVglircA356sROpk%2F0bNrfwiObeX68dXaqnewjIWtZk%2Ba2A1Hrm7UToyUG98HJTYB4tSkT400A1nd6VhMOlUtVl4ToMZv6WFcupVZ5Rw74dAmrC2X5UynoU1LCPT6a5m4Rzq8kLzhj50wwRl8fDrzwJ8pr%2B6BKZJpym0VlajxeAkX1zDi0UwUblU9Mop27kK9v8gFDGDT50L0x3LeoLRGfTiEQytIKXPaybkYoF2NEt1UmIfqinoxHaG%2Frc62CD3SDKm%2BJ5%2FG%2BtgshUb61R5mcmoA8cM0I3vVBUmhsQl4ljwRumOrDmeUiq4hfdgRlR0kKiYf3y%2FKOaG3U7XRpYAT2l652NBTTXzg%2B1wakACG%2BFdtwK7ujUuFcjYJ1XmIEKzI61tpDsSLtnxARFqZBI2Xj%2FPD%2FIdAtkghUuaeNl8JHwI59lACwyQYgnnCNGtEw4v8h9%2FSGXXg15cwzlBkha8TrlTsrNauVi26ZaSd%2BsN32b0ZUg%2FH0bSdiL%2BOK5sJRmTUau%2B1HEAPHJttZrlGlwLlX335TQ1vaskes7pYQKS6dz3zn1cfMErwflaaao8Zc3QsrLzNSiRAYA0YdEZy%2FH76DTNVVVstcNS%2FHzQD666WOCUiU3O1d90PQNLVxmi0jYPDzGMIyy1sIGOqUBG8%2BSaC%2BKSsuRToPRo%2BeiCa8VKSe0MKTmAIkI2OMPE%2BIIHgIk5D7zp5OPaRkd1aYLycgOxhfYE4MYiROAQK0o1LE2HGaohe8kR6Rci8KnOeB3e%2FnB6qpgJu7CJ%2BUHbNCZmEgi51rnZ16co9imCFG%2FEwyDpirH%2B8FHptY7oTLspLJOIMcDDnUizy6Ppdgh5A1Zc5hLK576LxHmbEHz3mOYuDyHahdL&X-Amz-Signature=0c02f852e85a397479a15344733fbdff0d76836d19ebec1731260fc2d6be6f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LYNNGT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOMfGvPiXN3iOp04C9MGSzmHTPAhaJIgc%2B3ekLW5AYbQIgWUmxxrj1AbBp8s4fQZWqZI7h%2FBP9jo%2BDD3t0J8YAgcAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXjtTzlZuQBdpVglircA356sROpk%2F0bNrfwiObeX68dXaqnewjIWtZk%2Ba2A1Hrm7UToyUG98HJTYB4tSkT400A1nd6VhMOlUtVl4ToMZv6WFcupVZ5Rw74dAmrC2X5UynoU1LCPT6a5m4Rzq8kLzhj50wwRl8fDrzwJ8pr%2B6BKZJpym0VlajxeAkX1zDi0UwUblU9Mop27kK9v8gFDGDT50L0x3LeoLRGfTiEQytIKXPaybkYoF2NEt1UmIfqinoxHaG%2Frc62CD3SDKm%2BJ5%2FG%2BtgshUb61R5mcmoA8cM0I3vVBUmhsQl4ljwRumOrDmeUiq4hfdgRlR0kKiYf3y%2FKOaG3U7XRpYAT2l652NBTTXzg%2B1wakACG%2BFdtwK7ujUuFcjYJ1XmIEKzI61tpDsSLtnxARFqZBI2Xj%2FPD%2FIdAtkghUuaeNl8JHwI59lACwyQYgnnCNGtEw4v8h9%2FSGXXg15cwzlBkha8TrlTsrNauVi26ZaSd%2BsN32b0ZUg%2FH0bSdiL%2BOK5sJRmTUau%2B1HEAPHJttZrlGlwLlX335TQ1vaskes7pYQKS6dz3zn1cfMErwflaaao8Zc3QsrLzNSiRAYA0YdEZy%2FH76DTNVVVstcNS%2FHzQD666WOCUiU3O1d90PQNLVxmi0jYPDzGMIyy1sIGOqUBG8%2BSaC%2BKSsuRToPRo%2BeiCa8VKSe0MKTmAIkI2OMPE%2BIIHgIk5D7zp5OPaRkd1aYLycgOxhfYE4MYiROAQK0o1LE2HGaohe8kR6Rci8KnOeB3e%2FnB6qpgJu7CJ%2BUHbNCZmEgi51rnZ16co9imCFG%2FEwyDpirH%2B8FHptY7oTLspLJOIMcDDnUizy6Ppdgh5A1Zc5hLK576LxHmbEHz3mOYuDyHahdL&X-Amz-Signature=5a0244ebd454e204a90d0e30b72e8113c5d35671eaabae550674f18d1c7ea037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
