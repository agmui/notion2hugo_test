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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAW7GWE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCOOrSFaDbQr7d8nCn1lOB2M9pZH8GVZc2uQ6hOVCKQ3QIgGSl%2BmagqDhtkW9pTT1vk5h7VyixAo03iinrczrNSlu8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcCxXiGly7BuNoH9ircA00Eycw6xTEcTeTj%2BU81XnfXCq%2Fa7cHeo5pJacGeB2elKHB%2Bb7w5I28ahhxwKGBTUAIxzeCvYMQ6byfYLlowIqfPOROaB%2B640f5%2FgR5pRPzhMFF7K8EJFQII6fqFG0w3k0hvuRiq%2F67yMLjruLSmZWvm8XMHhDPrLoYxo6gIpRIbEBeXssOdRAFXJa%2BX7S7tI9VKhHwJFMNEzrfAjO4oXQ63p5rEvSi2seaXROM7TrBf8pkekohx5TX8UfanA2inS92qTS%2F6Y82H8z%2B750nmZPm609azsqiVzg0QgVAwKaZaZtmXND4JtTwfx1c%2BuWYwdsd%2BPiVrFh%2F3wmJBqQFxa4lLObqET9kd1SvD6wsY2GCpMVNgQHUsYy4AmlkveSMTbiJSj1y9nsw0VFKqWczYQlzdrpJQtFxs9e%2BKXJ8ECqNR9KC4kYntoLpynuF4tLHd7%2F0u2BC7b%2BF9es9o1uZBztoYCq0GBgkNYqdBqoB5jRISbiGby2xDPzgYaBN0rLYjSN8XBakHZqsjMG7m%2B3UG%2Fm%2FoZAVZrNeJ3%2B4QpITcQKsHgpxzET23yfwNpHh0RCySsZXjWDU7OAyE66mRXT7j15jNzYGW3b5ZbGHNzSr8LW%2FVweytc48Ggxz2aw9%2BMJP50sQGOqUB3AOPgi5z0oM0BWUu8PkToDaGF6SWw7claJdoUazpfChyKAiEvkq1%2B7wTV2IDb4NgzR2lEWM36LxQUfQg%2F4tc3kCP55SQwTOHN5TKo%2BlIu7cnGVzWNfbP5HSfKwZuB4j5mGGxCgyfDUnZWhfmQicaBkl21F48irE26SfAMLUMhSDrV68TsOiCyn9FQT7eSMSLnmoefDmzIOAKUnWqDBR8QiuFhDOM&X-Amz-Signature=12d476e4bdaf9a383fd486f7793dd4dfb2131c92295aed3fbddbaa58bb2073d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAW7GWE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCOOrSFaDbQr7d8nCn1lOB2M9pZH8GVZc2uQ6hOVCKQ3QIgGSl%2BmagqDhtkW9pTT1vk5h7VyixAo03iinrczrNSlu8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcCxXiGly7BuNoH9ircA00Eycw6xTEcTeTj%2BU81XnfXCq%2Fa7cHeo5pJacGeB2elKHB%2Bb7w5I28ahhxwKGBTUAIxzeCvYMQ6byfYLlowIqfPOROaB%2B640f5%2FgR5pRPzhMFF7K8EJFQII6fqFG0w3k0hvuRiq%2F67yMLjruLSmZWvm8XMHhDPrLoYxo6gIpRIbEBeXssOdRAFXJa%2BX7S7tI9VKhHwJFMNEzrfAjO4oXQ63p5rEvSi2seaXROM7TrBf8pkekohx5TX8UfanA2inS92qTS%2F6Y82H8z%2B750nmZPm609azsqiVzg0QgVAwKaZaZtmXND4JtTwfx1c%2BuWYwdsd%2BPiVrFh%2F3wmJBqQFxa4lLObqET9kd1SvD6wsY2GCpMVNgQHUsYy4AmlkveSMTbiJSj1y9nsw0VFKqWczYQlzdrpJQtFxs9e%2BKXJ8ECqNR9KC4kYntoLpynuF4tLHd7%2F0u2BC7b%2BF9es9o1uZBztoYCq0GBgkNYqdBqoB5jRISbiGby2xDPzgYaBN0rLYjSN8XBakHZqsjMG7m%2B3UG%2Fm%2FoZAVZrNeJ3%2B4QpITcQKsHgpxzET23yfwNpHh0RCySsZXjWDU7OAyE66mRXT7j15jNzYGW3b5ZbGHNzSr8LW%2FVweytc48Ggxz2aw9%2BMJP50sQGOqUB3AOPgi5z0oM0BWUu8PkToDaGF6SWw7claJdoUazpfChyKAiEvkq1%2B7wTV2IDb4NgzR2lEWM36LxQUfQg%2F4tc3kCP55SQwTOHN5TKo%2BlIu7cnGVzWNfbP5HSfKwZuB4j5mGGxCgyfDUnZWhfmQicaBkl21F48irE26SfAMLUMhSDrV68TsOiCyn9FQT7eSMSLnmoefDmzIOAKUnWqDBR8QiuFhDOM&X-Amz-Signature=0691f2674476311579139026c991a28c8ad7050115cd2e3fb480e43504cf99ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAW7GWE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCOOrSFaDbQr7d8nCn1lOB2M9pZH8GVZc2uQ6hOVCKQ3QIgGSl%2BmagqDhtkW9pTT1vk5h7VyixAo03iinrczrNSlu8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcCxXiGly7BuNoH9ircA00Eycw6xTEcTeTj%2BU81XnfXCq%2Fa7cHeo5pJacGeB2elKHB%2Bb7w5I28ahhxwKGBTUAIxzeCvYMQ6byfYLlowIqfPOROaB%2B640f5%2FgR5pRPzhMFF7K8EJFQII6fqFG0w3k0hvuRiq%2F67yMLjruLSmZWvm8XMHhDPrLoYxo6gIpRIbEBeXssOdRAFXJa%2BX7S7tI9VKhHwJFMNEzrfAjO4oXQ63p5rEvSi2seaXROM7TrBf8pkekohx5TX8UfanA2inS92qTS%2F6Y82H8z%2B750nmZPm609azsqiVzg0QgVAwKaZaZtmXND4JtTwfx1c%2BuWYwdsd%2BPiVrFh%2F3wmJBqQFxa4lLObqET9kd1SvD6wsY2GCpMVNgQHUsYy4AmlkveSMTbiJSj1y9nsw0VFKqWczYQlzdrpJQtFxs9e%2BKXJ8ECqNR9KC4kYntoLpynuF4tLHd7%2F0u2BC7b%2BF9es9o1uZBztoYCq0GBgkNYqdBqoB5jRISbiGby2xDPzgYaBN0rLYjSN8XBakHZqsjMG7m%2B3UG%2Fm%2FoZAVZrNeJ3%2B4QpITcQKsHgpxzET23yfwNpHh0RCySsZXjWDU7OAyE66mRXT7j15jNzYGW3b5ZbGHNzSr8LW%2FVweytc48Ggxz2aw9%2BMJP50sQGOqUB3AOPgi5z0oM0BWUu8PkToDaGF6SWw7claJdoUazpfChyKAiEvkq1%2B7wTV2IDb4NgzR2lEWM36LxQUfQg%2F4tc3kCP55SQwTOHN5TKo%2BlIu7cnGVzWNfbP5HSfKwZuB4j5mGGxCgyfDUnZWhfmQicaBkl21F48irE26SfAMLUMhSDrV68TsOiCyn9FQT7eSMSLnmoefDmzIOAKUnWqDBR8QiuFhDOM&X-Amz-Signature=cedf39e45f28f69cfd4b88c0f44297c53400e5be1f440b2c5ac14823d2326475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
