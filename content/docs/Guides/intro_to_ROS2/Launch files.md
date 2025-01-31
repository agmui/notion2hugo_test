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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDB2S7E%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdQjJuxyqRH7RIbTOqJpg4O8Wt0DvjOPsMvyyGxz3YcAIhALXTDjY8kPsIsfmmFrS6hpjZyqZMm8pgoCbFBFKrrJzVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzhdby4FblU%2FvYzl0q3AP873ve8tJYNjvfGD50Kz7nSE4FLZ0Qs0qTzdrWvzlxursp%2FBNbLJlnjWycs3u7LVi4kP%2FwluVNX3Zntsoj46TDD0DDnjNG7Htsg955rnZQ0oV%2FmlrgqXhkZL9zgv%2BkH0XMyZGBjubm8rXIBuf4SLsZtRhH6Hx9gKp7ArjQOeQF%2FMRe2WVn%2FkZFJz8LcRVQge%2FoW3sqwAsD43rDgAf%2FNHgJbhmMcGJ1zI8bFk%2F%2Bv9AUdWuC%2BASlyTXHI5WN3FXxNfD7s%2BpaqPhy9quTGB18uG1zy59%2BerrytHqmuDQ0sprxrXpOf%2F0be21oeNFygkl7TSm2XazJLR6u2hXzwYJ9KYN2kLZBqKHbNE3b1g2qPvgKliKgAbZUaPuNNFk%2BsMQAMBESRxmiq%2B9Kz4eA9BK3KIDDaePS5Sq5L9%2FbRznlcxTpk3UxDeGo%2BBCnugO1AGy%2FDLho%2BsozQQV80eG6ncB3bqApM2HSgynQlHdPJM9z8he36Un6xR3BbfzBWOBIPyQXTwlb%2FZIGB%2BCYvqPH9UpTSR5scdhDippqZ3SLCJT%2BkGaOzo%2FhK9wIaMC9O0PuiPQZtue6FwHUOY%2BzO%2FM6JKmQp9geaAc3PLNqIgYq%2BlJv%2B9OK%2BHh%2BPiNAGeakZBEpMDCL9%2FK8BjqkAchRmlQP7cN%2Bp6oJbPiAUkRh%2Bek%2Fjz6%2F6ur4AcgCoERyAbU7h%2B%2BE3GqcKtKa84T8rOaEabAmku%2F28XijcdikDiEsEEN93FCJeUIGXRwbMFtCBEPJhQ7MaHiDQhjpghsDXIUkCwnpgZoiC%2FMhG1k2yfyrPZ9%2BuGIXHptaISRLQ6SUiKyf3lsHOsz%2FY8WGr8LO8LDR8OyruZ%2FIUGkr%2Fih%2F3M8N06EP&X-Amz-Signature=2001659875cc516966474d4f06eb334d13e7a5459af5a329aa85d5db0b34181f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDB2S7E%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdQjJuxyqRH7RIbTOqJpg4O8Wt0DvjOPsMvyyGxz3YcAIhALXTDjY8kPsIsfmmFrS6hpjZyqZMm8pgoCbFBFKrrJzVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzhdby4FblU%2FvYzl0q3AP873ve8tJYNjvfGD50Kz7nSE4FLZ0Qs0qTzdrWvzlxursp%2FBNbLJlnjWycs3u7LVi4kP%2FwluVNX3Zntsoj46TDD0DDnjNG7Htsg955rnZQ0oV%2FmlrgqXhkZL9zgv%2BkH0XMyZGBjubm8rXIBuf4SLsZtRhH6Hx9gKp7ArjQOeQF%2FMRe2WVn%2FkZFJz8LcRVQge%2FoW3sqwAsD43rDgAf%2FNHgJbhmMcGJ1zI8bFk%2F%2Bv9AUdWuC%2BASlyTXHI5WN3FXxNfD7s%2BpaqPhy9quTGB18uG1zy59%2BerrytHqmuDQ0sprxrXpOf%2F0be21oeNFygkl7TSm2XazJLR6u2hXzwYJ9KYN2kLZBqKHbNE3b1g2qPvgKliKgAbZUaPuNNFk%2BsMQAMBESRxmiq%2B9Kz4eA9BK3KIDDaePS5Sq5L9%2FbRznlcxTpk3UxDeGo%2BBCnugO1AGy%2FDLho%2BsozQQV80eG6ncB3bqApM2HSgynQlHdPJM9z8he36Un6xR3BbfzBWOBIPyQXTwlb%2FZIGB%2BCYvqPH9UpTSR5scdhDippqZ3SLCJT%2BkGaOzo%2FhK9wIaMC9O0PuiPQZtue6FwHUOY%2BzO%2FM6JKmQp9geaAc3PLNqIgYq%2BlJv%2B9OK%2BHh%2BPiNAGeakZBEpMDCL9%2FK8BjqkAchRmlQP7cN%2Bp6oJbPiAUkRh%2Bek%2Fjz6%2F6ur4AcgCoERyAbU7h%2B%2BE3GqcKtKa84T8rOaEabAmku%2F28XijcdikDiEsEEN93FCJeUIGXRwbMFtCBEPJhQ7MaHiDQhjpghsDXIUkCwnpgZoiC%2FMhG1k2yfyrPZ9%2BuGIXHptaISRLQ6SUiKyf3lsHOsz%2FY8WGr8LO8LDR8OyruZ%2FIUGkr%2Fih%2F3M8N06EP&X-Amz-Signature=6573c585d31a22e6907f3d52eee6101cbe8ba448519f25a6eac4a720e27f31b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDB2S7E%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdQjJuxyqRH7RIbTOqJpg4O8Wt0DvjOPsMvyyGxz3YcAIhALXTDjY8kPsIsfmmFrS6hpjZyqZMm8pgoCbFBFKrrJzVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzhdby4FblU%2FvYzl0q3AP873ve8tJYNjvfGD50Kz7nSE4FLZ0Qs0qTzdrWvzlxursp%2FBNbLJlnjWycs3u7LVi4kP%2FwluVNX3Zntsoj46TDD0DDnjNG7Htsg955rnZQ0oV%2FmlrgqXhkZL9zgv%2BkH0XMyZGBjubm8rXIBuf4SLsZtRhH6Hx9gKp7ArjQOeQF%2FMRe2WVn%2FkZFJz8LcRVQge%2FoW3sqwAsD43rDgAf%2FNHgJbhmMcGJ1zI8bFk%2F%2Bv9AUdWuC%2BASlyTXHI5WN3FXxNfD7s%2BpaqPhy9quTGB18uG1zy59%2BerrytHqmuDQ0sprxrXpOf%2F0be21oeNFygkl7TSm2XazJLR6u2hXzwYJ9KYN2kLZBqKHbNE3b1g2qPvgKliKgAbZUaPuNNFk%2BsMQAMBESRxmiq%2B9Kz4eA9BK3KIDDaePS5Sq5L9%2FbRznlcxTpk3UxDeGo%2BBCnugO1AGy%2FDLho%2BsozQQV80eG6ncB3bqApM2HSgynQlHdPJM9z8he36Un6xR3BbfzBWOBIPyQXTwlb%2FZIGB%2BCYvqPH9UpTSR5scdhDippqZ3SLCJT%2BkGaOzo%2FhK9wIaMC9O0PuiPQZtue6FwHUOY%2BzO%2FM6JKmQp9geaAc3PLNqIgYq%2BlJv%2B9OK%2BHh%2BPiNAGeakZBEpMDCL9%2FK8BjqkAchRmlQP7cN%2Bp6oJbPiAUkRh%2Bek%2Fjz6%2F6ur4AcgCoERyAbU7h%2B%2BE3GqcKtKa84T8rOaEabAmku%2F28XijcdikDiEsEEN93FCJeUIGXRwbMFtCBEPJhQ7MaHiDQhjpghsDXIUkCwnpgZoiC%2FMhG1k2yfyrPZ9%2BuGIXHptaISRLQ6SUiKyf3lsHOsz%2FY8WGr8LO8LDR8OyruZ%2FIUGkr%2Fih%2F3M8N06EP&X-Amz-Signature=6bbfd9711346fcb8c9d971dbcbd28596760acfbe9b3fa94bb645b7e3dbe23f95&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
