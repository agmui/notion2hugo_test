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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKKHKLW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAqbcM%2F3cdQH0tZutyADOlaS%2B7xG2vIbKFaX9cHWLPuQIhALQwW0qKOF8t6kH0hl2EnUhmS3FPq3qDaXJrh30B3F0FKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJhdmnRvY%2BYWyCbzcq3AMzrcI7v8OCvd5JSi6dUZuDESsTgP1J1tMaz1mgHxUrXIy3bd7qnsbUzWryRiZjxgd9el%2B%2Fw%2B3zmiPAO1ggMMmTheTGtTLmDdY7qDKp%2F4URgXq63X%2B0gZaExvLHyYv%2FwnJo1XBJfcXxT1c4XihFT70zvwbMcNAfV5UwlL3KAObsUD6fRvU7dDMNQnB6tmFPHplJ5RPoU6OsccpYjRb9vmGVCkyK1OaW%2FOeaYjxol6BEaBSfwgRnPfrWAgiQhU5F9HSkfnM4%2BW3kQmfHYjDHiAD0yHcPyTQhiKNvIttDIIt4xhcq0RCxGHKky6zeEwjmohLKbAC9aPTsfZug%2FLJVmwc%2BsvTa%2FjGTbpluW1%2B%2FRTe2cQzYsLv1%2FchY%2Fqj%2FrTbUwBNzwRlp5wF20n%2B%2BtPxxEHIkksWXlxQOCb3T2tVUpnUDdaDpr1yEfjYX5VzAxp2IK3tg9U0b14N9Ya0Jl9E1uOgqW42Jr378x2RA8Msbcl%2BoGoAaTVJBOQmGIp0NhEmwzZc6DFXUksGpse0IbZh5kZi%2BVzIUVp7i0yaSdCDUupKBsDxIr03BbFUL9ibkyqoHWVPxCgGaktcvNshb7s7%2Bhs4px81LGKhOW0%2Bffct57wt6DYY6ZjPhSLgA%2FzkYIjD95OG%2BBjqkAYqvM2hZpcwL3LnH5o4PzYmfCJBTANhiCgMRU4u01nfftzdYEVZ0pf%2F1ku2dr1F4GLEwOXjocW5wViuckQ8Gb8D3CUSKrb3KpS7nC7dHaYPkzr8PjGi3LsEc4p5wJ5ddQq3ZECiLVDEebMULh3EHzUoKDQkau2jyR31JWcUXswy%2BKg4Pfy%2Bf2x1ht5F7hsHlnJOvgYwTJzCCttchPJB91XO2BR%2Bl&X-Amz-Signature=80e61586469a32f1c84acc86c93c9c29029eeacf04bc946b512af84a718b52bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKKHKLW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAqbcM%2F3cdQH0tZutyADOlaS%2B7xG2vIbKFaX9cHWLPuQIhALQwW0qKOF8t6kH0hl2EnUhmS3FPq3qDaXJrh30B3F0FKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJhdmnRvY%2BYWyCbzcq3AMzrcI7v8OCvd5JSi6dUZuDESsTgP1J1tMaz1mgHxUrXIy3bd7qnsbUzWryRiZjxgd9el%2B%2Fw%2B3zmiPAO1ggMMmTheTGtTLmDdY7qDKp%2F4URgXq63X%2B0gZaExvLHyYv%2FwnJo1XBJfcXxT1c4XihFT70zvwbMcNAfV5UwlL3KAObsUD6fRvU7dDMNQnB6tmFPHplJ5RPoU6OsccpYjRb9vmGVCkyK1OaW%2FOeaYjxol6BEaBSfwgRnPfrWAgiQhU5F9HSkfnM4%2BW3kQmfHYjDHiAD0yHcPyTQhiKNvIttDIIt4xhcq0RCxGHKky6zeEwjmohLKbAC9aPTsfZug%2FLJVmwc%2BsvTa%2FjGTbpluW1%2B%2FRTe2cQzYsLv1%2FchY%2Fqj%2FrTbUwBNzwRlp5wF20n%2B%2BtPxxEHIkksWXlxQOCb3T2tVUpnUDdaDpr1yEfjYX5VzAxp2IK3tg9U0b14N9Ya0Jl9E1uOgqW42Jr378x2RA8Msbcl%2BoGoAaTVJBOQmGIp0NhEmwzZc6DFXUksGpse0IbZh5kZi%2BVzIUVp7i0yaSdCDUupKBsDxIr03BbFUL9ibkyqoHWVPxCgGaktcvNshb7s7%2Bhs4px81LGKhOW0%2Bffct57wt6DYY6ZjPhSLgA%2FzkYIjD95OG%2BBjqkAYqvM2hZpcwL3LnH5o4PzYmfCJBTANhiCgMRU4u01nfftzdYEVZ0pf%2F1ku2dr1F4GLEwOXjocW5wViuckQ8Gb8D3CUSKrb3KpS7nC7dHaYPkzr8PjGi3LsEc4p5wJ5ddQq3ZECiLVDEebMULh3EHzUoKDQkau2jyR31JWcUXswy%2BKg4Pfy%2Bf2x1ht5F7hsHlnJOvgYwTJzCCttchPJB91XO2BR%2Bl&X-Amz-Signature=57a43f0aee3c0b668d2c9840ee2fe675da13a207565475f8f74856ecb4b3f6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKKHKLW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAqbcM%2F3cdQH0tZutyADOlaS%2B7xG2vIbKFaX9cHWLPuQIhALQwW0qKOF8t6kH0hl2EnUhmS3FPq3qDaXJrh30B3F0FKv8DCEwQABoMNjM3NDIzMTgzODA1IgyJhdmnRvY%2BYWyCbzcq3AMzrcI7v8OCvd5JSi6dUZuDESsTgP1J1tMaz1mgHxUrXIy3bd7qnsbUzWryRiZjxgd9el%2B%2Fw%2B3zmiPAO1ggMMmTheTGtTLmDdY7qDKp%2F4URgXq63X%2B0gZaExvLHyYv%2FwnJo1XBJfcXxT1c4XihFT70zvwbMcNAfV5UwlL3KAObsUD6fRvU7dDMNQnB6tmFPHplJ5RPoU6OsccpYjRb9vmGVCkyK1OaW%2FOeaYjxol6BEaBSfwgRnPfrWAgiQhU5F9HSkfnM4%2BW3kQmfHYjDHiAD0yHcPyTQhiKNvIttDIIt4xhcq0RCxGHKky6zeEwjmohLKbAC9aPTsfZug%2FLJVmwc%2BsvTa%2FjGTbpluW1%2B%2FRTe2cQzYsLv1%2FchY%2Fqj%2FrTbUwBNzwRlp5wF20n%2B%2BtPxxEHIkksWXlxQOCb3T2tVUpnUDdaDpr1yEfjYX5VzAxp2IK3tg9U0b14N9Ya0Jl9E1uOgqW42Jr378x2RA8Msbcl%2BoGoAaTVJBOQmGIp0NhEmwzZc6DFXUksGpse0IbZh5kZi%2BVzIUVp7i0yaSdCDUupKBsDxIr03BbFUL9ibkyqoHWVPxCgGaktcvNshb7s7%2Bhs4px81LGKhOW0%2Bffct57wt6DYY6ZjPhSLgA%2FzkYIjD95OG%2BBjqkAYqvM2hZpcwL3LnH5o4PzYmfCJBTANhiCgMRU4u01nfftzdYEVZ0pf%2F1ku2dr1F4GLEwOXjocW5wViuckQ8Gb8D3CUSKrb3KpS7nC7dHaYPkzr8PjGi3LsEc4p5wJ5ddQq3ZECiLVDEebMULh3EHzUoKDQkau2jyR31JWcUXswy%2BKg4Pfy%2Bf2x1ht5F7hsHlnJOvgYwTJzCCttchPJB91XO2BR%2Bl&X-Amz-Signature=4c8713434c1c4cf67ed3502f57cd2401118d939a5b3be4a9a82caa2c4e832ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
