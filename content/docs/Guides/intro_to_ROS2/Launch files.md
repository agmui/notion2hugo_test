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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GF2CUYR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAcex0WfAZ6th5ho57S%2FVOtDBkziE4v1iVypJEV1NyewIgZWxQUo1sMl7%2Flyq9jDn8htpD6gdcRjnuNTUA%2BfNwpkMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcNcksFae6nr%2FImCrcA9sUSC9VMaqcwnrsrzio5ridnepuzZmpwSXJnb4AbPfV2ekno7A%2BNKc5QiGVdGdS2zvVZ299k5JUMGe0i8Oyqd3SBroXFv2IHF7sozfjIsrS4oBrIfElez94jFjbE3ohFpKIXqHqWJC6y1RAHhi%2BZ4E3K6S%2FW8HMs%2F4MLeUAckN8xY3onr%2BrjukftVoJ%2F8J1SE7xRxuhWvaTOq7GfLG6Z2kP2xM3SiSDPZyt626c1u57rvzwFijZ3lLJMdTHYE4o5zWcUW1l7dotaAeMr2hKlhux%2FcFgW1MKRB250%2BPHk1pIZuG1CL93pbsTO4RSnlLTdsn3kZYDKiwOIhwQckXy%2F3og5wFogFv1bPtBcoGayZcHRQEH35PynxgOyRQGurg5fap3s0JcATKfP%2BEggW%2BBH1V7DLy5Sx%2Bdhi5ezzar%2BpTONkYT5ZF5Oz4h5H4IEY5Z8hiGnjp4eBb02FI7rlzLQ0X4b3usNj0%2F5%2BPmWsHUWhRWxKNXcBbPDRxvhgz%2BoG4IdGlmrgMPFFIcIMzP8%2BKtiueCDQt7ZDILt9vUHhDeioBWEsCyU3lsJcpVM3oFQ5gL5TGAlR%2B7p5e3mF8smTHH5K%2F0%2FW1RaJzq9WLFjlFvWGVmagXTBu98e3p8e09uMJX71cQGOqUBvtH6C2XQEvNSsW5lpwbwKOpxpx5uLR0tglNANz%2BXsYdycTBUzJuPYhOmUpMeCV%2B%2FZFOrkLOzNVdEufY7z%2BX0aKQOzUqIuX1GNmktF%2Fl9pTTW4UaGeTpfUNl5cbnhzfLgKPS4RU5WalxScF450KUKlYgN5HmLDztEinF8LQwehAl8%2BAyphNL5QcpJQeC2k7huqv9mZ%2BzNeObrVZxGeReIuHTgBUYJ&X-Amz-Signature=77386f75af4a60fc4af3056841b524c9ed5b64867c096f13361bace5e6cb77d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GF2CUYR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAcex0WfAZ6th5ho57S%2FVOtDBkziE4v1iVypJEV1NyewIgZWxQUo1sMl7%2Flyq9jDn8htpD6gdcRjnuNTUA%2BfNwpkMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcNcksFae6nr%2FImCrcA9sUSC9VMaqcwnrsrzio5ridnepuzZmpwSXJnb4AbPfV2ekno7A%2BNKc5QiGVdGdS2zvVZ299k5JUMGe0i8Oyqd3SBroXFv2IHF7sozfjIsrS4oBrIfElez94jFjbE3ohFpKIXqHqWJC6y1RAHhi%2BZ4E3K6S%2FW8HMs%2F4MLeUAckN8xY3onr%2BrjukftVoJ%2F8J1SE7xRxuhWvaTOq7GfLG6Z2kP2xM3SiSDPZyt626c1u57rvzwFijZ3lLJMdTHYE4o5zWcUW1l7dotaAeMr2hKlhux%2FcFgW1MKRB250%2BPHk1pIZuG1CL93pbsTO4RSnlLTdsn3kZYDKiwOIhwQckXy%2F3og5wFogFv1bPtBcoGayZcHRQEH35PynxgOyRQGurg5fap3s0JcATKfP%2BEggW%2BBH1V7DLy5Sx%2Bdhi5ezzar%2BpTONkYT5ZF5Oz4h5H4IEY5Z8hiGnjp4eBb02FI7rlzLQ0X4b3usNj0%2F5%2BPmWsHUWhRWxKNXcBbPDRxvhgz%2BoG4IdGlmrgMPFFIcIMzP8%2BKtiueCDQt7ZDILt9vUHhDeioBWEsCyU3lsJcpVM3oFQ5gL5TGAlR%2B7p5e3mF8smTHH5K%2F0%2FW1RaJzq9WLFjlFvWGVmagXTBu98e3p8e09uMJX71cQGOqUBvtH6C2XQEvNSsW5lpwbwKOpxpx5uLR0tglNANz%2BXsYdycTBUzJuPYhOmUpMeCV%2B%2FZFOrkLOzNVdEufY7z%2BX0aKQOzUqIuX1GNmktF%2Fl9pTTW4UaGeTpfUNl5cbnhzfLgKPS4RU5WalxScF450KUKlYgN5HmLDztEinF8LQwehAl8%2BAyphNL5QcpJQeC2k7huqv9mZ%2BzNeObrVZxGeReIuHTgBUYJ&X-Amz-Signature=7013cb1b1909a9bf7ef1e12e88aa862d1a6aca1f68e3277b5c182d12cf2be2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GF2CUYR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAcex0WfAZ6th5ho57S%2FVOtDBkziE4v1iVypJEV1NyewIgZWxQUo1sMl7%2Flyq9jDn8htpD6gdcRjnuNTUA%2BfNwpkMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcNcksFae6nr%2FImCrcA9sUSC9VMaqcwnrsrzio5ridnepuzZmpwSXJnb4AbPfV2ekno7A%2BNKc5QiGVdGdS2zvVZ299k5JUMGe0i8Oyqd3SBroXFv2IHF7sozfjIsrS4oBrIfElez94jFjbE3ohFpKIXqHqWJC6y1RAHhi%2BZ4E3K6S%2FW8HMs%2F4MLeUAckN8xY3onr%2BrjukftVoJ%2F8J1SE7xRxuhWvaTOq7GfLG6Z2kP2xM3SiSDPZyt626c1u57rvzwFijZ3lLJMdTHYE4o5zWcUW1l7dotaAeMr2hKlhux%2FcFgW1MKRB250%2BPHk1pIZuG1CL93pbsTO4RSnlLTdsn3kZYDKiwOIhwQckXy%2F3og5wFogFv1bPtBcoGayZcHRQEH35PynxgOyRQGurg5fap3s0JcATKfP%2BEggW%2BBH1V7DLy5Sx%2Bdhi5ezzar%2BpTONkYT5ZF5Oz4h5H4IEY5Z8hiGnjp4eBb02FI7rlzLQ0X4b3usNj0%2F5%2BPmWsHUWhRWxKNXcBbPDRxvhgz%2BoG4IdGlmrgMPFFIcIMzP8%2BKtiueCDQt7ZDILt9vUHhDeioBWEsCyU3lsJcpVM3oFQ5gL5TGAlR%2B7p5e3mF8smTHH5K%2F0%2FW1RaJzq9WLFjlFvWGVmagXTBu98e3p8e09uMJX71cQGOqUBvtH6C2XQEvNSsW5lpwbwKOpxpx5uLR0tglNANz%2BXsYdycTBUzJuPYhOmUpMeCV%2B%2FZFOrkLOzNVdEufY7z%2BX0aKQOzUqIuX1GNmktF%2Fl9pTTW4UaGeTpfUNl5cbnhzfLgKPS4RU5WalxScF450KUKlYgN5HmLDztEinF8LQwehAl8%2BAyphNL5QcpJQeC2k7huqv9mZ%2BzNeObrVZxGeReIuHTgBUYJ&X-Amz-Signature=2a653f8129938b821d929d57d9dd58d7dd7e9966d834a716dc4b5c7689ed8d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
