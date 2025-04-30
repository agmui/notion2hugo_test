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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WB3F4TB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD6TBhzUDf9X%2FD7fBkdEk15hbR74SJsZi9Dw4rOMXvouQIhAMJs7cxOFXRw8XgPB3R41o9elG%2BERpi0ZSm%2BIs%2BYxGRLKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxxRVGPzHw%2FjdNwzkq3AOSGutkASKAh9VqeZIsg%2BjpheMpdYHFNw05s67jvgy9exN9zFDXdQzwLQ5SfBN%2F4aRga663ghPWqxbi8bpf619lgQYde6vcTrSsDs4%2FqMFI2Dlpo4DMB9b3An0c4zQYTGo7UiOtjhvPH1%2BKQ7id0ZkY%2FRamV2oIVF7C9BMd7iFYlBFjS6Y34nsPl0dtr%2ByOGyZteQCu6ujzR5Ga%2FN5bmBjhiArZZzPYehihbqcHqLIM69NJhTWf0ccCjMTpu4oLt%2F5NT7jzXV%2FcmcfwlfgHAlw3yibt2Of73ZHjKztExrVWbnjbDeceH6l7o914Psc7125AjhKQWnRDHhnyMXyrw%2BRkr6yDJzqGzskwE41lI20xoUlP3ycqlz7hx8Xl22nh0d0HWzlKBIgU%2F9LCNTTMXHpn0INa1BYhGEPHb8MVqYGBiOCndfX5aH28jSF%2Fl7KnLpoL1dZZG8Fc5wDXmfVxw4LmgfJZ3SgLHtaUS9AK%2BUPColp6d%2FIAFrjHN7dk8CvbmLJai6cxNvAbAWu1fVSqBQhTfFbJVui%2Fdp5cjqiZ6m6hIaKlbgSh4Ks0QHjA8vUy2J9kAHXCBX8RydUFjEYO3ykv%2BKvW6kMKzPUGM8GKbTOU%2F39vtvim5G9FWIIGXjDincnABjqkAbyHpJAoBl%2B2E%2FSawPYht79bmGAVqaiymt8opxXDXJPS2gGwaCjlNJk6cFCITLLYqnvfTPrG%2BgoIHXMM4voZODr5nAzKKFqi3i%2FlyLtNJYmiKc2DDvf1SIMvZtsIM9Q9jXU3ji2STjt4MqwrScGfaTwu5QXRsLDPEs8GzCEFdGjGNi4qzcFkDET5KTIK4fPNNCd%2FX9KytPFAuVfAUDRUeJhfLZgE&X-Amz-Signature=7b5af50dc31c32885de38439523fcb785dde253e2a2a40f9a48a2e8e919eba52&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WB3F4TB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD6TBhzUDf9X%2FD7fBkdEk15hbR74SJsZi9Dw4rOMXvouQIhAMJs7cxOFXRw8XgPB3R41o9elG%2BERpi0ZSm%2BIs%2BYxGRLKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxxRVGPzHw%2FjdNwzkq3AOSGutkASKAh9VqeZIsg%2BjpheMpdYHFNw05s67jvgy9exN9zFDXdQzwLQ5SfBN%2F4aRga663ghPWqxbi8bpf619lgQYde6vcTrSsDs4%2FqMFI2Dlpo4DMB9b3An0c4zQYTGo7UiOtjhvPH1%2BKQ7id0ZkY%2FRamV2oIVF7C9BMd7iFYlBFjS6Y34nsPl0dtr%2ByOGyZteQCu6ujzR5Ga%2FN5bmBjhiArZZzPYehihbqcHqLIM69NJhTWf0ccCjMTpu4oLt%2F5NT7jzXV%2FcmcfwlfgHAlw3yibt2Of73ZHjKztExrVWbnjbDeceH6l7o914Psc7125AjhKQWnRDHhnyMXyrw%2BRkr6yDJzqGzskwE41lI20xoUlP3ycqlz7hx8Xl22nh0d0HWzlKBIgU%2F9LCNTTMXHpn0INa1BYhGEPHb8MVqYGBiOCndfX5aH28jSF%2Fl7KnLpoL1dZZG8Fc5wDXmfVxw4LmgfJZ3SgLHtaUS9AK%2BUPColp6d%2FIAFrjHN7dk8CvbmLJai6cxNvAbAWu1fVSqBQhTfFbJVui%2Fdp5cjqiZ6m6hIaKlbgSh4Ks0QHjA8vUy2J9kAHXCBX8RydUFjEYO3ykv%2BKvW6kMKzPUGM8GKbTOU%2F39vtvim5G9FWIIGXjDincnABjqkAbyHpJAoBl%2B2E%2FSawPYht79bmGAVqaiymt8opxXDXJPS2gGwaCjlNJk6cFCITLLYqnvfTPrG%2BgoIHXMM4voZODr5nAzKKFqi3i%2FlyLtNJYmiKc2DDvf1SIMvZtsIM9Q9jXU3ji2STjt4MqwrScGfaTwu5QXRsLDPEs8GzCEFdGjGNi4qzcFkDET5KTIK4fPNNCd%2FX9KytPFAuVfAUDRUeJhfLZgE&X-Amz-Signature=d64684011079add9cdcdd73cb300fa54ea6b6b6b54d13f940ca9c543450dc30c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WB3F4TB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD6TBhzUDf9X%2FD7fBkdEk15hbR74SJsZi9Dw4rOMXvouQIhAMJs7cxOFXRw8XgPB3R41o9elG%2BERpi0ZSm%2BIs%2BYxGRLKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxxRVGPzHw%2FjdNwzkq3AOSGutkASKAh9VqeZIsg%2BjpheMpdYHFNw05s67jvgy9exN9zFDXdQzwLQ5SfBN%2F4aRga663ghPWqxbi8bpf619lgQYde6vcTrSsDs4%2FqMFI2Dlpo4DMB9b3An0c4zQYTGo7UiOtjhvPH1%2BKQ7id0ZkY%2FRamV2oIVF7C9BMd7iFYlBFjS6Y34nsPl0dtr%2ByOGyZteQCu6ujzR5Ga%2FN5bmBjhiArZZzPYehihbqcHqLIM69NJhTWf0ccCjMTpu4oLt%2F5NT7jzXV%2FcmcfwlfgHAlw3yibt2Of73ZHjKztExrVWbnjbDeceH6l7o914Psc7125AjhKQWnRDHhnyMXyrw%2BRkr6yDJzqGzskwE41lI20xoUlP3ycqlz7hx8Xl22nh0d0HWzlKBIgU%2F9LCNTTMXHpn0INa1BYhGEPHb8MVqYGBiOCndfX5aH28jSF%2Fl7KnLpoL1dZZG8Fc5wDXmfVxw4LmgfJZ3SgLHtaUS9AK%2BUPColp6d%2FIAFrjHN7dk8CvbmLJai6cxNvAbAWu1fVSqBQhTfFbJVui%2Fdp5cjqiZ6m6hIaKlbgSh4Ks0QHjA8vUy2J9kAHXCBX8RydUFjEYO3ykv%2BKvW6kMKzPUGM8GKbTOU%2F39vtvim5G9FWIIGXjDincnABjqkAbyHpJAoBl%2B2E%2FSawPYht79bmGAVqaiymt8opxXDXJPS2gGwaCjlNJk6cFCITLLYqnvfTPrG%2BgoIHXMM4voZODr5nAzKKFqi3i%2FlyLtNJYmiKc2DDvf1SIMvZtsIM9Q9jXU3ji2STjt4MqwrScGfaTwu5QXRsLDPEs8GzCEFdGjGNi4qzcFkDET5KTIK4fPNNCd%2FX9KytPFAuVfAUDRUeJhfLZgE&X-Amz-Signature=91c1adaca2104e559924c4245f7b0667f7ce7abe93997b6a4f45574e517cd6fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
