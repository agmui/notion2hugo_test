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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7FFTMY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCj7YUvEn3mI4koRSgNQqEfAvUbapjyV9bQdN33B2SL2AIhAO%2FeA9JYJL01I2HBFcvjlEdM8G%2BtRXZp3W9sTbe0cnI1Kv8DCDsQABoMNjM3NDIzMTgzODA1Igzi0qSDvy7vLw43Bu8q3APs4NWodmRHmffkj7k1hyfnw%2B802Tm3x%2BYwzQDzkvLjPTdac8%2BTLEUL%2BoQjvtWG9ntEfFuOTmLbMCnd2F%2Fx9AYsWWkkdYMvg8a2TSoDBmGQt8YL0SiOJ4PGLVZVasQefKd%2Ff8fuFbMOjdfH2oQEx%2BIsnFgdS43gMCFR6Oir%2FNCwTaPVP7q0JTer03ZF79QNUxCGMnr46iXWrmhuFKDH9CgVbgp%2Fjb0kpC3ma%2FNTCg4DQTk4yg0lLEK047Z1278VodtjXJwMhEGL%2B2b0LpPN%2FY5Ye7JCYn%2F1AQQKE%2FeNDofGqKSrqZ5H5kqbGooQDSVZquxiMHeNKUo68pzByCwO8uTI9Rjf8qG0n%2FPPV4McPdyJVGHRMoML0Z4GAvEJN%2FS%2FI1pi0cioufRdaAxcckIHp3AlOGwrGL3Wec4CyKw3j5jtaaH4NFoe49%2Bb7AdPAVGTVR0plZx9R3TKgfnYKf5jHeEjazXIFQ4ubVaJkbMe%2BT14n0AXLPzq9p7Q5gmuQUfffs%2BIhZx%2F7j8tTnRaeKAycJy9uWu%2Bvq87c6TK48y6i3His9ubIcYLLznrzNOaZ6uF8qYPPcvVheyxOvjJsusrkx8UWFYZwIgkKJiHJcOz4XWxdI5TftdYaoc%2FB11apTDkns%2FBBjqkAafGLVvnoctya%2FOEKe7ODeKqDGZzG%2Bjy6%2B5io9WvKIKwupuYEOHhOewOrTen2F4ZaEH%2F1zZZ%2BFfr6ykDqt7ivFEpkxUeOLwKPOTrcupgmghzt3UGfDhQu3UPegcZCa9Hiq40JzVwvPRO1j6wvvpcXDC8uvO5lBNzLyLFFbrKvkE3rcKkMHXrob%2F1xA27BCREMxpEMFOQMKvLhhCYQMQMhLq6qxLC&X-Amz-Signature=3e68d982189e81ccdcd9e2111c9a02d7f49301cda37957c2cb9c44c0a196ab2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7FFTMY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCj7YUvEn3mI4koRSgNQqEfAvUbapjyV9bQdN33B2SL2AIhAO%2FeA9JYJL01I2HBFcvjlEdM8G%2BtRXZp3W9sTbe0cnI1Kv8DCDsQABoMNjM3NDIzMTgzODA1Igzi0qSDvy7vLw43Bu8q3APs4NWodmRHmffkj7k1hyfnw%2B802Tm3x%2BYwzQDzkvLjPTdac8%2BTLEUL%2BoQjvtWG9ntEfFuOTmLbMCnd2F%2Fx9AYsWWkkdYMvg8a2TSoDBmGQt8YL0SiOJ4PGLVZVasQefKd%2Ff8fuFbMOjdfH2oQEx%2BIsnFgdS43gMCFR6Oir%2FNCwTaPVP7q0JTer03ZF79QNUxCGMnr46iXWrmhuFKDH9CgVbgp%2Fjb0kpC3ma%2FNTCg4DQTk4yg0lLEK047Z1278VodtjXJwMhEGL%2B2b0LpPN%2FY5Ye7JCYn%2F1AQQKE%2FeNDofGqKSrqZ5H5kqbGooQDSVZquxiMHeNKUo68pzByCwO8uTI9Rjf8qG0n%2FPPV4McPdyJVGHRMoML0Z4GAvEJN%2FS%2FI1pi0cioufRdaAxcckIHp3AlOGwrGL3Wec4CyKw3j5jtaaH4NFoe49%2Bb7AdPAVGTVR0plZx9R3TKgfnYKf5jHeEjazXIFQ4ubVaJkbMe%2BT14n0AXLPzq9p7Q5gmuQUfffs%2BIhZx%2F7j8tTnRaeKAycJy9uWu%2Bvq87c6TK48y6i3His9ubIcYLLznrzNOaZ6uF8qYPPcvVheyxOvjJsusrkx8UWFYZwIgkKJiHJcOz4XWxdI5TftdYaoc%2FB11apTDkns%2FBBjqkAafGLVvnoctya%2FOEKe7ODeKqDGZzG%2Bjy6%2B5io9WvKIKwupuYEOHhOewOrTen2F4ZaEH%2F1zZZ%2BFfr6ykDqt7ivFEpkxUeOLwKPOTrcupgmghzt3UGfDhQu3UPegcZCa9Hiq40JzVwvPRO1j6wvvpcXDC8uvO5lBNzLyLFFbrKvkE3rcKkMHXrob%2F1xA27BCREMxpEMFOQMKvLhhCYQMQMhLq6qxLC&X-Amz-Signature=7fb2b3e6d16b0f11f517fc8d31ee99c51f8dec0bb9508863bae7cd1328396874&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7FFTMY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCj7YUvEn3mI4koRSgNQqEfAvUbapjyV9bQdN33B2SL2AIhAO%2FeA9JYJL01I2HBFcvjlEdM8G%2BtRXZp3W9sTbe0cnI1Kv8DCDsQABoMNjM3NDIzMTgzODA1Igzi0qSDvy7vLw43Bu8q3APs4NWodmRHmffkj7k1hyfnw%2B802Tm3x%2BYwzQDzkvLjPTdac8%2BTLEUL%2BoQjvtWG9ntEfFuOTmLbMCnd2F%2Fx9AYsWWkkdYMvg8a2TSoDBmGQt8YL0SiOJ4PGLVZVasQefKd%2Ff8fuFbMOjdfH2oQEx%2BIsnFgdS43gMCFR6Oir%2FNCwTaPVP7q0JTer03ZF79QNUxCGMnr46iXWrmhuFKDH9CgVbgp%2Fjb0kpC3ma%2FNTCg4DQTk4yg0lLEK047Z1278VodtjXJwMhEGL%2B2b0LpPN%2FY5Ye7JCYn%2F1AQQKE%2FeNDofGqKSrqZ5H5kqbGooQDSVZquxiMHeNKUo68pzByCwO8uTI9Rjf8qG0n%2FPPV4McPdyJVGHRMoML0Z4GAvEJN%2FS%2FI1pi0cioufRdaAxcckIHp3AlOGwrGL3Wec4CyKw3j5jtaaH4NFoe49%2Bb7AdPAVGTVR0plZx9R3TKgfnYKf5jHeEjazXIFQ4ubVaJkbMe%2BT14n0AXLPzq9p7Q5gmuQUfffs%2BIhZx%2F7j8tTnRaeKAycJy9uWu%2Bvq87c6TK48y6i3His9ubIcYLLznrzNOaZ6uF8qYPPcvVheyxOvjJsusrkx8UWFYZwIgkKJiHJcOz4XWxdI5TftdYaoc%2FB11apTDkns%2FBBjqkAafGLVvnoctya%2FOEKe7ODeKqDGZzG%2Bjy6%2B5io9WvKIKwupuYEOHhOewOrTen2F4ZaEH%2F1zZZ%2BFfr6ykDqt7ivFEpkxUeOLwKPOTrcupgmghzt3UGfDhQu3UPegcZCa9Hiq40JzVwvPRO1j6wvvpcXDC8uvO5lBNzLyLFFbrKvkE3rcKkMHXrob%2F1xA27BCREMxpEMFOQMKvLhhCYQMQMhLq6qxLC&X-Amz-Signature=d3c1229709a1d34de608b63fd90f01d688929cd6d5e491f83a07c712604cc1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
