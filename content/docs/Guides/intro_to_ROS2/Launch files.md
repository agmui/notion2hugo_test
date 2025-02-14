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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AHLLXJW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAiZxjGNcrF5oc33ApHNE%2FjJkjXuQFhYjK4u0Q5aEUHnAiAzJktTDoUqGwYOcV7rsvff%2FCQaikmA0N4tDO5RXyyzkyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMm4GL3SxZZDJCbc0%2BKtwDnCpqX9gvnhXg%2B4SI8t11yhnidUu%2FC0CGF2cMenIWzEDv4hRq0YIGxEmX8IbxWHP81Qd7IHPd8qWVf4s4WeuIw8H%2BpCJkGx95ngUe8s4R9%2BDNcv%2BvuIQKwdBCn8O9VUssjieTmCHSOFqFAPen4gTp2I9DwRnKrHbroVUsqRoFp88GghmP7gBS0epzfqPnZjHi5ZXykn%2Bk3mOEXl7WpJEaqRCG3wBTd%2B5xcWAI%2F9P8p87FFKNWmvXL9mz0d%2BvqvswbKsWHL3OpLF9CUUAnjxuN3%2BBXCpNf%2F1foDVo7wVdrYRN50jaIFQTUBYkP9kRm1p%2BE4W9E8FRYLDYtbtm3J%2BW8uyKgmdmr6ytNR8PC224fdoR0fN%2F7dfDuo5XiZL3%2BbaQSEzRHLJLwX2wF3dC1gcaI5S5pNpb71tGOUxsmjaRY%2FIwVjOr3W%2Bz0%2BOG7tPD%2FXR0Jv8NU9%2B%2Bmjf8RFyifSN%2FpHbW7lN%2FmFH%2BzIa6TS%2BiG12vq43uH%2FJo2Kt1tz1jPKI1qNVBHfkt%2B1XIuWknCFwBvi6sLgc3c1OiS2ox1NoC6WbTzCBobpcrtRq873EmcfODyK0G9SpSRHUZnQMWfi2PoPvExdH0NqvVBTl8UQhFTL4UWP0b5hEnJPXPqXJIwzuq7vQY6pgGV2Xefmp3ljbPjxdTIhYm96sB7mTg6ezJA1VxREVTaFthStH5Jhbk7zFw%2FKKIajR49gqm6SqBC6e%2BC%2F%2FLtZdAA9B9Kcrgi%2BjVywFutPZ4xch3bOLFb9OPDO9%2B8%2BByD9z7di0kbkDIUO3gnz3W4yZn5faKamcQJLs%2BfvCou1NMdPc19wLR4g%2FyZ22KpcG5qtx3JNVjNgGDTlK4JPlvC5WBHSx4xxyTv&X-Amz-Signature=6637794dac367b456d84ce1b3090509e42d7bb085d3819f2e54d9f44e7454bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AHLLXJW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAiZxjGNcrF5oc33ApHNE%2FjJkjXuQFhYjK4u0Q5aEUHnAiAzJktTDoUqGwYOcV7rsvff%2FCQaikmA0N4tDO5RXyyzkyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMm4GL3SxZZDJCbc0%2BKtwDnCpqX9gvnhXg%2B4SI8t11yhnidUu%2FC0CGF2cMenIWzEDv4hRq0YIGxEmX8IbxWHP81Qd7IHPd8qWVf4s4WeuIw8H%2BpCJkGx95ngUe8s4R9%2BDNcv%2BvuIQKwdBCn8O9VUssjieTmCHSOFqFAPen4gTp2I9DwRnKrHbroVUsqRoFp88GghmP7gBS0epzfqPnZjHi5ZXykn%2Bk3mOEXl7WpJEaqRCG3wBTd%2B5xcWAI%2F9P8p87FFKNWmvXL9mz0d%2BvqvswbKsWHL3OpLF9CUUAnjxuN3%2BBXCpNf%2F1foDVo7wVdrYRN50jaIFQTUBYkP9kRm1p%2BE4W9E8FRYLDYtbtm3J%2BW8uyKgmdmr6ytNR8PC224fdoR0fN%2F7dfDuo5XiZL3%2BbaQSEzRHLJLwX2wF3dC1gcaI5S5pNpb71tGOUxsmjaRY%2FIwVjOr3W%2Bz0%2BOG7tPD%2FXR0Jv8NU9%2B%2Bmjf8RFyifSN%2FpHbW7lN%2FmFH%2BzIa6TS%2BiG12vq43uH%2FJo2Kt1tz1jPKI1qNVBHfkt%2B1XIuWknCFwBvi6sLgc3c1OiS2ox1NoC6WbTzCBobpcrtRq873EmcfODyK0G9SpSRHUZnQMWfi2PoPvExdH0NqvVBTl8UQhFTL4UWP0b5hEnJPXPqXJIwzuq7vQY6pgGV2Xefmp3ljbPjxdTIhYm96sB7mTg6ezJA1VxREVTaFthStH5Jhbk7zFw%2FKKIajR49gqm6SqBC6e%2BC%2F%2FLtZdAA9B9Kcrgi%2BjVywFutPZ4xch3bOLFb9OPDO9%2B8%2BByD9z7di0kbkDIUO3gnz3W4yZn5faKamcQJLs%2BfvCou1NMdPc19wLR4g%2FyZ22KpcG5qtx3JNVjNgGDTlK4JPlvC5WBHSx4xxyTv&X-Amz-Signature=378000e4d7e4de9c8a162560546d5f5758b31848b91f6b5f636ca3bce17dc052&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AHLLXJW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAiZxjGNcrF5oc33ApHNE%2FjJkjXuQFhYjK4u0Q5aEUHnAiAzJktTDoUqGwYOcV7rsvff%2FCQaikmA0N4tDO5RXyyzkyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMm4GL3SxZZDJCbc0%2BKtwDnCpqX9gvnhXg%2B4SI8t11yhnidUu%2FC0CGF2cMenIWzEDv4hRq0YIGxEmX8IbxWHP81Qd7IHPd8qWVf4s4WeuIw8H%2BpCJkGx95ngUe8s4R9%2BDNcv%2BvuIQKwdBCn8O9VUssjieTmCHSOFqFAPen4gTp2I9DwRnKrHbroVUsqRoFp88GghmP7gBS0epzfqPnZjHi5ZXykn%2Bk3mOEXl7WpJEaqRCG3wBTd%2B5xcWAI%2F9P8p87FFKNWmvXL9mz0d%2BvqvswbKsWHL3OpLF9CUUAnjxuN3%2BBXCpNf%2F1foDVo7wVdrYRN50jaIFQTUBYkP9kRm1p%2BE4W9E8FRYLDYtbtm3J%2BW8uyKgmdmr6ytNR8PC224fdoR0fN%2F7dfDuo5XiZL3%2BbaQSEzRHLJLwX2wF3dC1gcaI5S5pNpb71tGOUxsmjaRY%2FIwVjOr3W%2Bz0%2BOG7tPD%2FXR0Jv8NU9%2B%2Bmjf8RFyifSN%2FpHbW7lN%2FmFH%2BzIa6TS%2BiG12vq43uH%2FJo2Kt1tz1jPKI1qNVBHfkt%2B1XIuWknCFwBvi6sLgc3c1OiS2ox1NoC6WbTzCBobpcrtRq873EmcfODyK0G9SpSRHUZnQMWfi2PoPvExdH0NqvVBTl8UQhFTL4UWP0b5hEnJPXPqXJIwzuq7vQY6pgGV2Xefmp3ljbPjxdTIhYm96sB7mTg6ezJA1VxREVTaFthStH5Jhbk7zFw%2FKKIajR49gqm6SqBC6e%2BC%2F%2FLtZdAA9B9Kcrgi%2BjVywFutPZ4xch3bOLFb9OPDO9%2B8%2BByD9z7di0kbkDIUO3gnz3W4yZn5faKamcQJLs%2BfvCou1NMdPc19wLR4g%2FyZ22KpcG5qtx3JNVjNgGDTlK4JPlvC5WBHSx4xxyTv&X-Amz-Signature=47ea9e0944f00b9d9b826a2240f23a4d33630abd0da0bf6ef956ecf103a436a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
