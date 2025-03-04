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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK6QGJ2C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5JT7iPON5DREE4Q6RAHlikd%2Fm%2BDv%2FG9zYPHtMuIuLrQIhAIhPFEvL7CGwaLBixLcXvPmDmY9rw5I0gc9hsvqO7VOJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4VYqMlHzAdFAbX9wq3ANbh60ZOcRIak48f09uJRxclVQcTESHR667O2EnG8XnmcDjh1ofDccBstIKQovZktsj7zZymQo5kmaA7XclWtrXk%2BAGnsJrdoOobTBLqd5gcj7FyIYrdcGqNLeGnT5q4bDPcnbU56ri3weVZneFIyEa3yzKtjc6ZGakeYU%2BgnAhxcCQj%2FGEZChXTIKR3W5Hy2hjn8mA9fLP123gRRBBwYL2nBlfnRevUhYbSfUI1zYKthKtNjTxwNyczd0wYEobZireJSpe7bF69pQeX3iJXRYHfw6Psq5Ey1uHq1wnP4g3oyKFTUJEeMlTXrV5KSh0XTo40MYcorC8T9lS0fNg7LavJUL5%2FO4WTiqeedS4vR8qYVDSTmf33NuqGqN1fGxoJOMbjQMS6DX31eu5fhMfWKCctRYFcgzB3KIHJDZ1%2Bb69AIHUAhUti2SczVhQltOhYCsrOUylANCqeEbNOlq85RmMMLHGlRLZVU4MaCUfSkjR6Nnsf3wZ5MlN4xdYQ10G6Bn5vRrU0yqVfbTtojyeiRJokR%2BgUaeGWWQ%2FWUHWptL4TooHLrQW6Utp3DfDI70USKfZxuiBbv1V79jPdzDX8zwI5C%2F4VyECkVBXfkBfBFyEmluB8x0HKDV5Q3pA7DC4npq%2BBjqkAVY5FW0mKyLn4Js5PueqFgbAxCztb3R9U%2FCFn826f84hBkx%2BVzOe4rjQiobedRHw79o45mZD3LIVINWDrXPpFo03ntpzXKR4FYagaDDsjg5oweNFlKntURcOO9m4EybQfVl%2BgW7sOXj9tJeRpWvZGCe5IuofHJW4ubPVzwY9J62Xcym12KEulxzpnhMkK7X%2BVrtpZ%2BEsPID6ASMglxCmNAADa8yw&X-Amz-Signature=dec8924349dbac7f3db54f1a0f506aef64a691345112d8189b31938d5c82fbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK6QGJ2C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5JT7iPON5DREE4Q6RAHlikd%2Fm%2BDv%2FG9zYPHtMuIuLrQIhAIhPFEvL7CGwaLBixLcXvPmDmY9rw5I0gc9hsvqO7VOJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4VYqMlHzAdFAbX9wq3ANbh60ZOcRIak48f09uJRxclVQcTESHR667O2EnG8XnmcDjh1ofDccBstIKQovZktsj7zZymQo5kmaA7XclWtrXk%2BAGnsJrdoOobTBLqd5gcj7FyIYrdcGqNLeGnT5q4bDPcnbU56ri3weVZneFIyEa3yzKtjc6ZGakeYU%2BgnAhxcCQj%2FGEZChXTIKR3W5Hy2hjn8mA9fLP123gRRBBwYL2nBlfnRevUhYbSfUI1zYKthKtNjTxwNyczd0wYEobZireJSpe7bF69pQeX3iJXRYHfw6Psq5Ey1uHq1wnP4g3oyKFTUJEeMlTXrV5KSh0XTo40MYcorC8T9lS0fNg7LavJUL5%2FO4WTiqeedS4vR8qYVDSTmf33NuqGqN1fGxoJOMbjQMS6DX31eu5fhMfWKCctRYFcgzB3KIHJDZ1%2Bb69AIHUAhUti2SczVhQltOhYCsrOUylANCqeEbNOlq85RmMMLHGlRLZVU4MaCUfSkjR6Nnsf3wZ5MlN4xdYQ10G6Bn5vRrU0yqVfbTtojyeiRJokR%2BgUaeGWWQ%2FWUHWptL4TooHLrQW6Utp3DfDI70USKfZxuiBbv1V79jPdzDX8zwI5C%2F4VyECkVBXfkBfBFyEmluB8x0HKDV5Q3pA7DC4npq%2BBjqkAVY5FW0mKyLn4Js5PueqFgbAxCztb3R9U%2FCFn826f84hBkx%2BVzOe4rjQiobedRHw79o45mZD3LIVINWDrXPpFo03ntpzXKR4FYagaDDsjg5oweNFlKntURcOO9m4EybQfVl%2BgW7sOXj9tJeRpWvZGCe5IuofHJW4ubPVzwY9J62Xcym12KEulxzpnhMkK7X%2BVrtpZ%2BEsPID6ASMglxCmNAADa8yw&X-Amz-Signature=404c8780abf577176bd6abb71e522293f5009b56628144dba683723ae2a8bcab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK6QGJ2C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5JT7iPON5DREE4Q6RAHlikd%2Fm%2BDv%2FG9zYPHtMuIuLrQIhAIhPFEvL7CGwaLBixLcXvPmDmY9rw5I0gc9hsvqO7VOJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4VYqMlHzAdFAbX9wq3ANbh60ZOcRIak48f09uJRxclVQcTESHR667O2EnG8XnmcDjh1ofDccBstIKQovZktsj7zZymQo5kmaA7XclWtrXk%2BAGnsJrdoOobTBLqd5gcj7FyIYrdcGqNLeGnT5q4bDPcnbU56ri3weVZneFIyEa3yzKtjc6ZGakeYU%2BgnAhxcCQj%2FGEZChXTIKR3W5Hy2hjn8mA9fLP123gRRBBwYL2nBlfnRevUhYbSfUI1zYKthKtNjTxwNyczd0wYEobZireJSpe7bF69pQeX3iJXRYHfw6Psq5Ey1uHq1wnP4g3oyKFTUJEeMlTXrV5KSh0XTo40MYcorC8T9lS0fNg7LavJUL5%2FO4WTiqeedS4vR8qYVDSTmf33NuqGqN1fGxoJOMbjQMS6DX31eu5fhMfWKCctRYFcgzB3KIHJDZ1%2Bb69AIHUAhUti2SczVhQltOhYCsrOUylANCqeEbNOlq85RmMMLHGlRLZVU4MaCUfSkjR6Nnsf3wZ5MlN4xdYQ10G6Bn5vRrU0yqVfbTtojyeiRJokR%2BgUaeGWWQ%2FWUHWptL4TooHLrQW6Utp3DfDI70USKfZxuiBbv1V79jPdzDX8zwI5C%2F4VyECkVBXfkBfBFyEmluB8x0HKDV5Q3pA7DC4npq%2BBjqkAVY5FW0mKyLn4Js5PueqFgbAxCztb3R9U%2FCFn826f84hBkx%2BVzOe4rjQiobedRHw79o45mZD3LIVINWDrXPpFo03ntpzXKR4FYagaDDsjg5oweNFlKntURcOO9m4EybQfVl%2BgW7sOXj9tJeRpWvZGCe5IuofHJW4ubPVzwY9J62Xcym12KEulxzpnhMkK7X%2BVrtpZ%2BEsPID6ASMglxCmNAADa8yw&X-Amz-Signature=786a79bf32c74e55f8da4a8db80478660d9ea2f8dfd5227e0839a752c565c072&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
