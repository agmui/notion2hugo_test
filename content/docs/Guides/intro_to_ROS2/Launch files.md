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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECFS64W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCWoz%2BHi8fqvxdjnsnxkDsvpXwqrzwJPKhbwk1xOnQ9AiAHifOpGw02AJXlszcLJDIPLuEuBMUpC9Q%2BkRZUdHdIZyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMylEp7fkrr%2BZrKVneKtwDHJyGqJFn27f59kHKl2NwrYoGkaaZsCuz7EHkA88l%2BsxgZSkRn9U7%2BezwXm%2BV4cBpZGub6H1UfnuE9BP8Zebo1EM9bb5ZoX943Ge%2FQrOhKaCCzDGY2c%2BRWZOe2P9R0p26EM6VRbVzToBk%2FxVTKUjsNnplY7gwJeJ3taQhmfw8q1leeDcwdE0j2q%2Bb04RKeAQIaeGuRQ8DfuRuOtNHxb6vPCCDu2yRy6hBrufTHAJH0BUvcutmMeiquoUN6YGmvHsp6sZiFhXJUvFXgX5sZwdNm8AQXDvo6tKa%2BvsXKac70DNAfzoJjrGZSXYoZT3vOEicUS5hUkbW%2BHm5aEaHpvHCv6wDLhxaMpEqWy6uSHtd9%2BYq7kY5rmxjKi20VWAFkPmEh0uK4rTf9I80jlIXCqpsxvxJnGy%2F4BfEyEjOcILN%2FSbYrpW1%2FZ9xyKKA0RkMbNqd89DL%2BXhUzxQieq8dGfFXIEw%2F0uwsNxSO0WaGsuJbn%2B6iJssewrcCxBVduiAP4REfMPvE0wU4FVah1sstn%2B6Xday5X4bFsWL3fABFMQSOoxOOqM3K9Al2WGTKtFDkCFSN%2FGOgKZX0zNq4XgTccaQrxyXa%2BnuVeZxx%2BZkYCxVmp1bpu7nT5uQI60kthlYw5rqUwwY6pgHkjE%2FM1x7IbWDlU68zuQ3%2B%2BAthr8%2B8YACcKW7aIi1hE%2FLCBPqXN39YlKSC%2BPHY%2FaqZumO1V8MAbuj6PhCE%2Bi3DXJF18B1044jieug0YSOWcvxU8zsDTgEo1Zx46ko1L8aWulixU7cs5kNMuENWgV%2BFyjs8svEMHjCKtDCkghjsNBLk5G6zQ5lru8TbVXKWgw84IuQ5h%2FfvJJj4zxWIRvjr6JDRJ66F&X-Amz-Signature=cacee7e338d451b9a5b26a22f470face5bb9135e1421c3ddb9ac3efeb7da4723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECFS64W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCWoz%2BHi8fqvxdjnsnxkDsvpXwqrzwJPKhbwk1xOnQ9AiAHifOpGw02AJXlszcLJDIPLuEuBMUpC9Q%2BkRZUdHdIZyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMylEp7fkrr%2BZrKVneKtwDHJyGqJFn27f59kHKl2NwrYoGkaaZsCuz7EHkA88l%2BsxgZSkRn9U7%2BezwXm%2BV4cBpZGub6H1UfnuE9BP8Zebo1EM9bb5ZoX943Ge%2FQrOhKaCCzDGY2c%2BRWZOe2P9R0p26EM6VRbVzToBk%2FxVTKUjsNnplY7gwJeJ3taQhmfw8q1leeDcwdE0j2q%2Bb04RKeAQIaeGuRQ8DfuRuOtNHxb6vPCCDu2yRy6hBrufTHAJH0BUvcutmMeiquoUN6YGmvHsp6sZiFhXJUvFXgX5sZwdNm8AQXDvo6tKa%2BvsXKac70DNAfzoJjrGZSXYoZT3vOEicUS5hUkbW%2BHm5aEaHpvHCv6wDLhxaMpEqWy6uSHtd9%2BYq7kY5rmxjKi20VWAFkPmEh0uK4rTf9I80jlIXCqpsxvxJnGy%2F4BfEyEjOcILN%2FSbYrpW1%2FZ9xyKKA0RkMbNqd89DL%2BXhUzxQieq8dGfFXIEw%2F0uwsNxSO0WaGsuJbn%2B6iJssewrcCxBVduiAP4REfMPvE0wU4FVah1sstn%2B6Xday5X4bFsWL3fABFMQSOoxOOqM3K9Al2WGTKtFDkCFSN%2FGOgKZX0zNq4XgTccaQrxyXa%2BnuVeZxx%2BZkYCxVmp1bpu7nT5uQI60kthlYw5rqUwwY6pgHkjE%2FM1x7IbWDlU68zuQ3%2B%2BAthr8%2B8YACcKW7aIi1hE%2FLCBPqXN39YlKSC%2BPHY%2FaqZumO1V8MAbuj6PhCE%2Bi3DXJF18B1044jieug0YSOWcvxU8zsDTgEo1Zx46ko1L8aWulixU7cs5kNMuENWgV%2BFyjs8svEMHjCKtDCkghjsNBLk5G6zQ5lru8TbVXKWgw84IuQ5h%2FfvJJj4zxWIRvjr6JDRJ66F&X-Amz-Signature=12f3149a4c18d04351750d94ebf10dec1e384fb2a3655e8f593e9f1a3c8e4429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RECFS64W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCWoz%2BHi8fqvxdjnsnxkDsvpXwqrzwJPKhbwk1xOnQ9AiAHifOpGw02AJXlszcLJDIPLuEuBMUpC9Q%2BkRZUdHdIZyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMylEp7fkrr%2BZrKVneKtwDHJyGqJFn27f59kHKl2NwrYoGkaaZsCuz7EHkA88l%2BsxgZSkRn9U7%2BezwXm%2BV4cBpZGub6H1UfnuE9BP8Zebo1EM9bb5ZoX943Ge%2FQrOhKaCCzDGY2c%2BRWZOe2P9R0p26EM6VRbVzToBk%2FxVTKUjsNnplY7gwJeJ3taQhmfw8q1leeDcwdE0j2q%2Bb04RKeAQIaeGuRQ8DfuRuOtNHxb6vPCCDu2yRy6hBrufTHAJH0BUvcutmMeiquoUN6YGmvHsp6sZiFhXJUvFXgX5sZwdNm8AQXDvo6tKa%2BvsXKac70DNAfzoJjrGZSXYoZT3vOEicUS5hUkbW%2BHm5aEaHpvHCv6wDLhxaMpEqWy6uSHtd9%2BYq7kY5rmxjKi20VWAFkPmEh0uK4rTf9I80jlIXCqpsxvxJnGy%2F4BfEyEjOcILN%2FSbYrpW1%2FZ9xyKKA0RkMbNqd89DL%2BXhUzxQieq8dGfFXIEw%2F0uwsNxSO0WaGsuJbn%2B6iJssewrcCxBVduiAP4REfMPvE0wU4FVah1sstn%2B6Xday5X4bFsWL3fABFMQSOoxOOqM3K9Al2WGTKtFDkCFSN%2FGOgKZX0zNq4XgTccaQrxyXa%2BnuVeZxx%2BZkYCxVmp1bpu7nT5uQI60kthlYw5rqUwwY6pgHkjE%2FM1x7IbWDlU68zuQ3%2B%2BAthr8%2B8YACcKW7aIi1hE%2FLCBPqXN39YlKSC%2BPHY%2FaqZumO1V8MAbuj6PhCE%2Bi3DXJF18B1044jieug0YSOWcvxU8zsDTgEo1Zx46ko1L8aWulixU7cs5kNMuENWgV%2BFyjs8svEMHjCKtDCkghjsNBLk5G6zQ5lru8TbVXKWgw84IuQ5h%2FfvJJj4zxWIRvjr6JDRJ66F&X-Amz-Signature=cfc69a2183635f4aeb10ae24d6c31be09fe60ab6b2f76064893a55b94e9b9a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
