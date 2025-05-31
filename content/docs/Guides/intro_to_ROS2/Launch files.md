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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWG6GU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD4Bv8Hm8PJwmYyOBe%2Bz1V9lkPxFyh2VE9kpim%2B5PATAiEAuw0QOKUPAyQevRda2PO7e8zYTX4%2B0EGM9J63Ge1kexIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqYcx5RTGbHhBTw7ircA5J9glFHXmn0f4pN0BCg6cgllpVlheQvXpmMmOjnyOeQ8n88L7GRDNcqhdaJJ0xDoBGAa1L8oWfGd7wMVzQ7Q3sVHd%2BqB7Af0XORwlO8pYSU7AC2r0208RnOqbTxZuHBw4w8xTm8JZEO7EzZhz0ZCv8ILN%2BqEa61RPkbrirBNVW%2BVNXOeqzNM3I72jAi3p9vknp9KCBjUS5S5wxcgyUSwGeIokkacDCShBthwMzA2WB0NLtEnfrAQYU1L6B9Do%2B38tepsTIiLCS1uAtSY3yNhOOXX7bblbNF74xyO1TUF1huUCVL%2FqtPjecDYOmIUdiKUlA2JPtEmxoYkLXTc0NkntONJnPoNSmONtfUW8xHPuion3O5rEC8FIkBelJ7Fvz49DZ%2F3auP9T3kB3XkrUh4kqPoZBD4z8D%2Bn1m1wtIvB5V509I0oO9P2RdMJ9aCIEZ%2BnKUmSCyuLiMqvXfIaO3Ke%2Fx0kLyf0LfYwu5IqcKHKUPRnzVHzsifslX%2BUQkQ27CjOVEtXhptx0aqfJQRQi5HloiJdLIRrM%2BQcu9FcoC6bwDLfDbeaPGD6wpnDYx4lguPKe%2FP%2Fta60JMjCyttNcnAfUGSdMl1BKS3G6L7DdbE85UzS0ogJ2xGzT6urF31MIjI7cEGOqUB%2BVO7DKaGQRYGHrXP3gjy9sZVoBBz%2FC4glWTws1%2B6Pb7DiXSj1wSnBLfzqSI1Q9O4AW6zwVtoL8P26JgoNC%2Fa5WFDqf4iJtAu2dpou%2Bf%2Ff6oz1qWjqdoM8dXT8YBE%2BGt2GcJY73Bc7G%2F%2BzD6n1Z1nAf%2BeRqk6Um8PeOIHcB9hu4nRYQWQWnKDmqkgJ8C9%2FSxLhdQYYTApLRLkj2SmAwNQzg9FS6z9&X-Amz-Signature=e289a72c32a44027ec3be98f4d89b1f43c59e7e87d6442ccb52bb12c400e8a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWG6GU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD4Bv8Hm8PJwmYyOBe%2Bz1V9lkPxFyh2VE9kpim%2B5PATAiEAuw0QOKUPAyQevRda2PO7e8zYTX4%2B0EGM9J63Ge1kexIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqYcx5RTGbHhBTw7ircA5J9glFHXmn0f4pN0BCg6cgllpVlheQvXpmMmOjnyOeQ8n88L7GRDNcqhdaJJ0xDoBGAa1L8oWfGd7wMVzQ7Q3sVHd%2BqB7Af0XORwlO8pYSU7AC2r0208RnOqbTxZuHBw4w8xTm8JZEO7EzZhz0ZCv8ILN%2BqEa61RPkbrirBNVW%2BVNXOeqzNM3I72jAi3p9vknp9KCBjUS5S5wxcgyUSwGeIokkacDCShBthwMzA2WB0NLtEnfrAQYU1L6B9Do%2B38tepsTIiLCS1uAtSY3yNhOOXX7bblbNF74xyO1TUF1huUCVL%2FqtPjecDYOmIUdiKUlA2JPtEmxoYkLXTc0NkntONJnPoNSmONtfUW8xHPuion3O5rEC8FIkBelJ7Fvz49DZ%2F3auP9T3kB3XkrUh4kqPoZBD4z8D%2Bn1m1wtIvB5V509I0oO9P2RdMJ9aCIEZ%2BnKUmSCyuLiMqvXfIaO3Ke%2Fx0kLyf0LfYwu5IqcKHKUPRnzVHzsifslX%2BUQkQ27CjOVEtXhptx0aqfJQRQi5HloiJdLIRrM%2BQcu9FcoC6bwDLfDbeaPGD6wpnDYx4lguPKe%2FP%2Fta60JMjCyttNcnAfUGSdMl1BKS3G6L7DdbE85UzS0ogJ2xGzT6urF31MIjI7cEGOqUB%2BVO7DKaGQRYGHrXP3gjy9sZVoBBz%2FC4glWTws1%2B6Pb7DiXSj1wSnBLfzqSI1Q9O4AW6zwVtoL8P26JgoNC%2Fa5WFDqf4iJtAu2dpou%2Bf%2Ff6oz1qWjqdoM8dXT8YBE%2BGt2GcJY73Bc7G%2F%2BzD6n1Z1nAf%2BeRqk6Um8PeOIHcB9hu4nRYQWQWnKDmqkgJ8C9%2FSxLhdQYYTApLRLkj2SmAwNQzg9FS6z9&X-Amz-Signature=c40bedcde10a7d2993027306fee6fd38275dd3cbd55f1f3cd53351b58758125c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQWG6GU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD4Bv8Hm8PJwmYyOBe%2Bz1V9lkPxFyh2VE9kpim%2B5PATAiEAuw0QOKUPAyQevRda2PO7e8zYTX4%2B0EGM9J63Ge1kexIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqYcx5RTGbHhBTw7ircA5J9glFHXmn0f4pN0BCg6cgllpVlheQvXpmMmOjnyOeQ8n88L7GRDNcqhdaJJ0xDoBGAa1L8oWfGd7wMVzQ7Q3sVHd%2BqB7Af0XORwlO8pYSU7AC2r0208RnOqbTxZuHBw4w8xTm8JZEO7EzZhz0ZCv8ILN%2BqEa61RPkbrirBNVW%2BVNXOeqzNM3I72jAi3p9vknp9KCBjUS5S5wxcgyUSwGeIokkacDCShBthwMzA2WB0NLtEnfrAQYU1L6B9Do%2B38tepsTIiLCS1uAtSY3yNhOOXX7bblbNF74xyO1TUF1huUCVL%2FqtPjecDYOmIUdiKUlA2JPtEmxoYkLXTc0NkntONJnPoNSmONtfUW8xHPuion3O5rEC8FIkBelJ7Fvz49DZ%2F3auP9T3kB3XkrUh4kqPoZBD4z8D%2Bn1m1wtIvB5V509I0oO9P2RdMJ9aCIEZ%2BnKUmSCyuLiMqvXfIaO3Ke%2Fx0kLyf0LfYwu5IqcKHKUPRnzVHzsifslX%2BUQkQ27CjOVEtXhptx0aqfJQRQi5HloiJdLIRrM%2BQcu9FcoC6bwDLfDbeaPGD6wpnDYx4lguPKe%2FP%2Fta60JMjCyttNcnAfUGSdMl1BKS3G6L7DdbE85UzS0ogJ2xGzT6urF31MIjI7cEGOqUB%2BVO7DKaGQRYGHrXP3gjy9sZVoBBz%2FC4glWTws1%2B6Pb7DiXSj1wSnBLfzqSI1Q9O4AW6zwVtoL8P26JgoNC%2Fa5WFDqf4iJtAu2dpou%2Bf%2Ff6oz1qWjqdoM8dXT8YBE%2BGt2GcJY73Bc7G%2F%2BzD6n1Z1nAf%2BeRqk6Um8PeOIHcB9hu4nRYQWQWnKDmqkgJ8C9%2FSxLhdQYYTApLRLkj2SmAwNQzg9FS6z9&X-Amz-Signature=58acf94bd91ae497de54ab92e5b0b032f9fd3b4f48fd4565368baa7aa57a887b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
