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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4LGMXV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDL6cxBLCsnVEWBMDBRBOJ%2FCgGN1UZSVpXXwmgUAfn2pgIhAIjCGHxKms0MFr0qIqmw1V4%2FBk58BoQH91%2B4BmZbQNaXKv8DCC8QABoMNjM3NDIzMTgzODA1IgzlQuQ%2FDVSlpsbPCPQq3APYhfkBMJrkOc2jlA85uOZ%2FMTAuhsGGl94bcYF0jvhYImbVN56WEEf2e3vM974akCYrrx9GuZz4b6d6HTA37UI1%2BrNY6k7cWkuaxh10gd0kOiPsGk6LXSJy9O%2Bw5fixvPoJD6yUidlp5QWeawyNmClve9sDipwNd5wFXmaHx7ImZa%2FiGjDrS1UA%2F7Qik3wx35m%2B19ihA%2F3lD5fA4AFPxGAAG93mYsOj2oGIoHzZmUkynwclMWk3czWrexl%2BQJeQkXymPbIZRNmUwBdzLPn%2FCBCSqyhNY909Z38Hpr2hLZQK%2BCTlfANfLED3ymCCW%2B97IbYRyVy%2BHnyktXqIvnOthZ%2FqChIZASUjpu6bTwlT0zXHFldmgEpu8JAjanAIec0w92B1OYzbhINcej6pY0I3tPmwK4cby%2FBLTveizcvg8pKWmgAN5mJnD%2BtPYZJdzeAP5Ups62lyjm1YKd8a3FsO1Nx%2BaZ4zbbgF5R5S8p%2FNZ5rVXM92uTNQBXbWs%2BQdV3DWOBJIMUbU3Tn1nS4HyPRSURyLb5YhyNHO4Qs6LTtAsADKDpKhmrvpiEdPfAVaqTiDowgZXgZaVh8J2fPy5V2GFq2yKw0I0rd%2BVSHM4Y3KwqxiFe44gYRWONuoG%2FPQKjCF3erCBjqkAYiH%2FKcTcElJiQdz248zD3hA3swddeeK6A2HtwQDtzQvqBNzKRgX%2Bp635iVxL0Kuz%2FK3XPWKG3wQKPaAlZI4tukyB7tWgefd21p4N67Cl2V52XRi71v2JhiJcM4QYRj1l%2FH5Ec7XG63JdmIq8pGs2jaKZOFCR9PQ6PMfS2F%2F7nrRi%2F2r5OKErgLTP2b86x3T2cq%2B3wSvOhqyy1JiQD4qJzidDGsG&X-Amz-Signature=d820939d338b75edd13a3c095df554b3941f498043819a89dde03dc071b3255b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4LGMXV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDL6cxBLCsnVEWBMDBRBOJ%2FCgGN1UZSVpXXwmgUAfn2pgIhAIjCGHxKms0MFr0qIqmw1V4%2FBk58BoQH91%2B4BmZbQNaXKv8DCC8QABoMNjM3NDIzMTgzODA1IgzlQuQ%2FDVSlpsbPCPQq3APYhfkBMJrkOc2jlA85uOZ%2FMTAuhsGGl94bcYF0jvhYImbVN56WEEf2e3vM974akCYrrx9GuZz4b6d6HTA37UI1%2BrNY6k7cWkuaxh10gd0kOiPsGk6LXSJy9O%2Bw5fixvPoJD6yUidlp5QWeawyNmClve9sDipwNd5wFXmaHx7ImZa%2FiGjDrS1UA%2F7Qik3wx35m%2B19ihA%2F3lD5fA4AFPxGAAG93mYsOj2oGIoHzZmUkynwclMWk3czWrexl%2BQJeQkXymPbIZRNmUwBdzLPn%2FCBCSqyhNY909Z38Hpr2hLZQK%2BCTlfANfLED3ymCCW%2B97IbYRyVy%2BHnyktXqIvnOthZ%2FqChIZASUjpu6bTwlT0zXHFldmgEpu8JAjanAIec0w92B1OYzbhINcej6pY0I3tPmwK4cby%2FBLTveizcvg8pKWmgAN5mJnD%2BtPYZJdzeAP5Ups62lyjm1YKd8a3FsO1Nx%2BaZ4zbbgF5R5S8p%2FNZ5rVXM92uTNQBXbWs%2BQdV3DWOBJIMUbU3Tn1nS4HyPRSURyLb5YhyNHO4Qs6LTtAsADKDpKhmrvpiEdPfAVaqTiDowgZXgZaVh8J2fPy5V2GFq2yKw0I0rd%2BVSHM4Y3KwqxiFe44gYRWONuoG%2FPQKjCF3erCBjqkAYiH%2FKcTcElJiQdz248zD3hA3swddeeK6A2HtwQDtzQvqBNzKRgX%2Bp635iVxL0Kuz%2FK3XPWKG3wQKPaAlZI4tukyB7tWgefd21p4N67Cl2V52XRi71v2JhiJcM4QYRj1l%2FH5Ec7XG63JdmIq8pGs2jaKZOFCR9PQ6PMfS2F%2F7nrRi%2F2r5OKErgLTP2b86x3T2cq%2B3wSvOhqyy1JiQD4qJzidDGsG&X-Amz-Signature=db757c83c2e644eab49d6af0352af61c04cea2fdc49d77fc2cd02f5a0c8d524a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4LGMXV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDL6cxBLCsnVEWBMDBRBOJ%2FCgGN1UZSVpXXwmgUAfn2pgIhAIjCGHxKms0MFr0qIqmw1V4%2FBk58BoQH91%2B4BmZbQNaXKv8DCC8QABoMNjM3NDIzMTgzODA1IgzlQuQ%2FDVSlpsbPCPQq3APYhfkBMJrkOc2jlA85uOZ%2FMTAuhsGGl94bcYF0jvhYImbVN56WEEf2e3vM974akCYrrx9GuZz4b6d6HTA37UI1%2BrNY6k7cWkuaxh10gd0kOiPsGk6LXSJy9O%2Bw5fixvPoJD6yUidlp5QWeawyNmClve9sDipwNd5wFXmaHx7ImZa%2FiGjDrS1UA%2F7Qik3wx35m%2B19ihA%2F3lD5fA4AFPxGAAG93mYsOj2oGIoHzZmUkynwclMWk3czWrexl%2BQJeQkXymPbIZRNmUwBdzLPn%2FCBCSqyhNY909Z38Hpr2hLZQK%2BCTlfANfLED3ymCCW%2B97IbYRyVy%2BHnyktXqIvnOthZ%2FqChIZASUjpu6bTwlT0zXHFldmgEpu8JAjanAIec0w92B1OYzbhINcej6pY0I3tPmwK4cby%2FBLTveizcvg8pKWmgAN5mJnD%2BtPYZJdzeAP5Ups62lyjm1YKd8a3FsO1Nx%2BaZ4zbbgF5R5S8p%2FNZ5rVXM92uTNQBXbWs%2BQdV3DWOBJIMUbU3Tn1nS4HyPRSURyLb5YhyNHO4Qs6LTtAsADKDpKhmrvpiEdPfAVaqTiDowgZXgZaVh8J2fPy5V2GFq2yKw0I0rd%2BVSHM4Y3KwqxiFe44gYRWONuoG%2FPQKjCF3erCBjqkAYiH%2FKcTcElJiQdz248zD3hA3swddeeK6A2HtwQDtzQvqBNzKRgX%2Bp635iVxL0Kuz%2FK3XPWKG3wQKPaAlZI4tukyB7tWgefd21p4N67Cl2V52XRi71v2JhiJcM4QYRj1l%2FH5Ec7XG63JdmIq8pGs2jaKZOFCR9PQ6PMfS2F%2F7nrRi%2F2r5OKErgLTP2b86x3T2cq%2B3wSvOhqyy1JiQD4qJzidDGsG&X-Amz-Signature=a3625b84ddb9c4c3f7e48bd05f15e718a511ad824dd726ca1d648ca1a98127db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
