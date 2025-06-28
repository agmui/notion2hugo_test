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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJC6WKW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKctwQr%2BJm5Fu2GsO2yWzwYOr39v53u%2FufTIdLxtCk0AiEA5Eik4DuI1PmDzcZNPMuhm98DAJuNYwDduMhZU2L9EaEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5DKYA8pk8SbVIG8yrcAxr5IrIAe0bQ4SizXllf6GCq9LjaY52lbl%2B45z6lR0DoxElBmygNXcMmHqbQRaKPMJQ1NJN7ZDwmoAus4KcDoK9417AeiVWGO%2FZZczb9xOITGG8ByJZ24F6NCaxAWGS06d49%2BXRlwGhqCUmepa24ZhzxFVKFLWZZS5gye8AMoVSgc%2BRpbil2cL0VM6BII2lIWEHYrb5WKHNRAL07BCJXV9ZrO26rDPgb8Sfzr%2BmykltKNa9vGE8o4algytYdrdwJfTqjI4GqpQPdyEMKjeB1pZN9fyCtVapgrVlphNBkb1rfzx8d8drowNTKSYzbsQRO997%2Btumu22Iu7Ea4gp64o5KX1Zfl2zQC7lNeR4opV1f2epGhLTs5No5vV0NB%2B3JZCiqlyDPxwHART%2Fd3bvvtT0P48NOonmt5FkpB5e%2FudHqPyWIZutsPzVG7LXXIt6eB9XFisKmx7GuJamn3nmw%2Bz1vcoOn0S7jUJtfaVQvDCWPfcwAAQaUMZIkIIVvworxO%2FEsOsam7PGgCX66d5gaRl3uFslUnQJ7Jd03wuqvfzNNyx%2FtXH%2BcXc4UyWo0GKhb%2Fo0KuLC5QZOQXJe7UsXPPdTbaZh5OBlU9wKKU2aqDoTcsL4LFGKSxmxqgqDHnMMmP%2F8IGOqUBjmEo%2BkAqbrcK%2Bmy8GApHkzP5tUGlnEc3hN%2Bn9cFokT85cahttlz6WfuCXt%2BsQ%2BpvYTPZ0iwIAm3ghvpSW0fsnIPOHsLzaJkK6T8khzV0rPcx%2BbJBUET38sAHMxWP8gHb48WZM9lU5j8Qd46j%2FCh5lKNkiCJxta1Ao5IrBk3kDN9RHgh%2BxC0G25ArHP1%2F0sreOOZLJx7tegDtxapKRHu7Lbu4b4dv&X-Amz-Signature=862adbe166c8ff9af59e1a3dbaab2d32f5a0ac5824868725cc8562635a287d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJC6WKW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKctwQr%2BJm5Fu2GsO2yWzwYOr39v53u%2FufTIdLxtCk0AiEA5Eik4DuI1PmDzcZNPMuhm98DAJuNYwDduMhZU2L9EaEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5DKYA8pk8SbVIG8yrcAxr5IrIAe0bQ4SizXllf6GCq9LjaY52lbl%2B45z6lR0DoxElBmygNXcMmHqbQRaKPMJQ1NJN7ZDwmoAus4KcDoK9417AeiVWGO%2FZZczb9xOITGG8ByJZ24F6NCaxAWGS06d49%2BXRlwGhqCUmepa24ZhzxFVKFLWZZS5gye8AMoVSgc%2BRpbil2cL0VM6BII2lIWEHYrb5WKHNRAL07BCJXV9ZrO26rDPgb8Sfzr%2BmykltKNa9vGE8o4algytYdrdwJfTqjI4GqpQPdyEMKjeB1pZN9fyCtVapgrVlphNBkb1rfzx8d8drowNTKSYzbsQRO997%2Btumu22Iu7Ea4gp64o5KX1Zfl2zQC7lNeR4opV1f2epGhLTs5No5vV0NB%2B3JZCiqlyDPxwHART%2Fd3bvvtT0P48NOonmt5FkpB5e%2FudHqPyWIZutsPzVG7LXXIt6eB9XFisKmx7GuJamn3nmw%2Bz1vcoOn0S7jUJtfaVQvDCWPfcwAAQaUMZIkIIVvworxO%2FEsOsam7PGgCX66d5gaRl3uFslUnQJ7Jd03wuqvfzNNyx%2FtXH%2BcXc4UyWo0GKhb%2Fo0KuLC5QZOQXJe7UsXPPdTbaZh5OBlU9wKKU2aqDoTcsL4LFGKSxmxqgqDHnMMmP%2F8IGOqUBjmEo%2BkAqbrcK%2Bmy8GApHkzP5tUGlnEc3hN%2Bn9cFokT85cahttlz6WfuCXt%2BsQ%2BpvYTPZ0iwIAm3ghvpSW0fsnIPOHsLzaJkK6T8khzV0rPcx%2BbJBUET38sAHMxWP8gHb48WZM9lU5j8Qd46j%2FCh5lKNkiCJxta1Ao5IrBk3kDN9RHgh%2BxC0G25ArHP1%2F0sreOOZLJx7tegDtxapKRHu7Lbu4b4dv&X-Amz-Signature=f8c0f600e377de3c99a564938d16bc789bde66238ab408de7a9d29dcff663588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJC6WKW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKctwQr%2BJm5Fu2GsO2yWzwYOr39v53u%2FufTIdLxtCk0AiEA5Eik4DuI1PmDzcZNPMuhm98DAJuNYwDduMhZU2L9EaEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5DKYA8pk8SbVIG8yrcAxr5IrIAe0bQ4SizXllf6GCq9LjaY52lbl%2B45z6lR0DoxElBmygNXcMmHqbQRaKPMJQ1NJN7ZDwmoAus4KcDoK9417AeiVWGO%2FZZczb9xOITGG8ByJZ24F6NCaxAWGS06d49%2BXRlwGhqCUmepa24ZhzxFVKFLWZZS5gye8AMoVSgc%2BRpbil2cL0VM6BII2lIWEHYrb5WKHNRAL07BCJXV9ZrO26rDPgb8Sfzr%2BmykltKNa9vGE8o4algytYdrdwJfTqjI4GqpQPdyEMKjeB1pZN9fyCtVapgrVlphNBkb1rfzx8d8drowNTKSYzbsQRO997%2Btumu22Iu7Ea4gp64o5KX1Zfl2zQC7lNeR4opV1f2epGhLTs5No5vV0NB%2B3JZCiqlyDPxwHART%2Fd3bvvtT0P48NOonmt5FkpB5e%2FudHqPyWIZutsPzVG7LXXIt6eB9XFisKmx7GuJamn3nmw%2Bz1vcoOn0S7jUJtfaVQvDCWPfcwAAQaUMZIkIIVvworxO%2FEsOsam7PGgCX66d5gaRl3uFslUnQJ7Jd03wuqvfzNNyx%2FtXH%2BcXc4UyWo0GKhb%2Fo0KuLC5QZOQXJe7UsXPPdTbaZh5OBlU9wKKU2aqDoTcsL4LFGKSxmxqgqDHnMMmP%2F8IGOqUBjmEo%2BkAqbrcK%2Bmy8GApHkzP5tUGlnEc3hN%2Bn9cFokT85cahttlz6WfuCXt%2BsQ%2BpvYTPZ0iwIAm3ghvpSW0fsnIPOHsLzaJkK6T8khzV0rPcx%2BbJBUET38sAHMxWP8gHb48WZM9lU5j8Qd46j%2FCh5lKNkiCJxta1Ao5IrBk3kDN9RHgh%2BxC0G25ArHP1%2F0sreOOZLJx7tegDtxapKRHu7Lbu4b4dv&X-Amz-Signature=47dfb4d4de55293f01b896ffd46a0399af7b76cbd84447cd8e1b49c1e79e5a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
