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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBDQAUG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcWYXWo7rFL8iwKpb00XvvIRQQW0iTOe0Y7FYuxuKDcAiAlEx1GLnlrxUXA7X0dq9T1q11gR4QFWNN45DhzwgXKbir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5mA%2BgKqlfWtNbTw5KtwDvDGbVTlXX56SNo3y%2B2pIjIYQRtpAWHE9xFHUePh0m2I53mA5HBiovQxYLVJFzGbJhIGT9yvpD2qlkz8tYmAni%2FRs5dT9ocWKMIpBjOTaLkGERS4uD%2FV%2BS37IGe%2FsJS6KTc%2FYTtwke4bGy6NZoPBbW5xEBjH6tmlz23kG%2FnB5CvCMgBKbOFV9nEvSYeYjwp%2FBZP0VmhP53l4bEd5Asl4nt%2Bj8CtcC0oC0%2B0T2%2F3VX2fNz4DnMt2VEVhwuL9kPqME1hc6cKXWQVM3cS7dpFfSdP6h0fP8TYE9Gvr4%2BY6JnMFpmF7u4C9LNriwLmweiy0oIx16QQxl8sweAAAzpavBlgRKH4E6v5Wvjyk4IxT52pWKGiL3sYZ3LdX9SNpVv%2B3OjA%2FLoBwtLmrJP8%2FKtY82VqOUVTsgr15U3YsK2BZXt0OWnE65iC1M1T1FZJD8A42wcJ6QOeMeTJSEPWUuNXlskPDfB5Myl%2Fc7bZYWAG3wA6MP%2FWV7V0zZOzJpuOu5gMGL68mWzLFmsDd%2FZx5jG8Mk8NsEcdcvP%2BdgPzJpzwccsrU1tWmkLh1%2F6bdnEizTWK%2BQPRTJnFKPraM604KSDEGh6j66JsjEWJFZb4YF%2Fd8FJE%2B%2BQBjAQgVjZbqE3%2Bw8wt9z0vwY6pgHxY1GZ5lUyqpix%2FAjQUFN506oaPVjT91I1ZnVeRq%2FY4DdQlKCuDnsp14Ed9SWHYKy8%2FFyDTy3DyhxMP8rUxmegNYqOXbFFdXFmc%2BbtWu7dvlTjFXOBAtdUMO%2BxHxdgZXDqqOYzkEwZuAbMtJZVBt%2B%2FDDgcB%2F0g3EtrCe61PcVeVNkCvYtSztCiIqps%2BETA46cfT3jSmcekMyevsMrG%2BgwiYiaE5Bmr&X-Amz-Signature=5df9282f35d2396cbb38d507203ec3128166fc07287c24a9836ee4e573b195a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBDQAUG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcWYXWo7rFL8iwKpb00XvvIRQQW0iTOe0Y7FYuxuKDcAiAlEx1GLnlrxUXA7X0dq9T1q11gR4QFWNN45DhzwgXKbir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5mA%2BgKqlfWtNbTw5KtwDvDGbVTlXX56SNo3y%2B2pIjIYQRtpAWHE9xFHUePh0m2I53mA5HBiovQxYLVJFzGbJhIGT9yvpD2qlkz8tYmAni%2FRs5dT9ocWKMIpBjOTaLkGERS4uD%2FV%2BS37IGe%2FsJS6KTc%2FYTtwke4bGy6NZoPBbW5xEBjH6tmlz23kG%2FnB5CvCMgBKbOFV9nEvSYeYjwp%2FBZP0VmhP53l4bEd5Asl4nt%2Bj8CtcC0oC0%2B0T2%2F3VX2fNz4DnMt2VEVhwuL9kPqME1hc6cKXWQVM3cS7dpFfSdP6h0fP8TYE9Gvr4%2BY6JnMFpmF7u4C9LNriwLmweiy0oIx16QQxl8sweAAAzpavBlgRKH4E6v5Wvjyk4IxT52pWKGiL3sYZ3LdX9SNpVv%2B3OjA%2FLoBwtLmrJP8%2FKtY82VqOUVTsgr15U3YsK2BZXt0OWnE65iC1M1T1FZJD8A42wcJ6QOeMeTJSEPWUuNXlskPDfB5Myl%2Fc7bZYWAG3wA6MP%2FWV7V0zZOzJpuOu5gMGL68mWzLFmsDd%2FZx5jG8Mk8NsEcdcvP%2BdgPzJpzwccsrU1tWmkLh1%2F6bdnEizTWK%2BQPRTJnFKPraM604KSDEGh6j66JsjEWJFZb4YF%2Fd8FJE%2B%2BQBjAQgVjZbqE3%2Bw8wt9z0vwY6pgHxY1GZ5lUyqpix%2FAjQUFN506oaPVjT91I1ZnVeRq%2FY4DdQlKCuDnsp14Ed9SWHYKy8%2FFyDTy3DyhxMP8rUxmegNYqOXbFFdXFmc%2BbtWu7dvlTjFXOBAtdUMO%2BxHxdgZXDqqOYzkEwZuAbMtJZVBt%2B%2FDDgcB%2F0g3EtrCe61PcVeVNkCvYtSztCiIqps%2BETA46cfT3jSmcekMyevsMrG%2BgwiYiaE5Bmr&X-Amz-Signature=51799eb465f95da6e51e2508b43962211c5e760f9ca646a43f1d57c4388ea6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBDQAUG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcWYXWo7rFL8iwKpb00XvvIRQQW0iTOe0Y7FYuxuKDcAiAlEx1GLnlrxUXA7X0dq9T1q11gR4QFWNN45DhzwgXKbir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM5mA%2BgKqlfWtNbTw5KtwDvDGbVTlXX56SNo3y%2B2pIjIYQRtpAWHE9xFHUePh0m2I53mA5HBiovQxYLVJFzGbJhIGT9yvpD2qlkz8tYmAni%2FRs5dT9ocWKMIpBjOTaLkGERS4uD%2FV%2BS37IGe%2FsJS6KTc%2FYTtwke4bGy6NZoPBbW5xEBjH6tmlz23kG%2FnB5CvCMgBKbOFV9nEvSYeYjwp%2FBZP0VmhP53l4bEd5Asl4nt%2Bj8CtcC0oC0%2B0T2%2F3VX2fNz4DnMt2VEVhwuL9kPqME1hc6cKXWQVM3cS7dpFfSdP6h0fP8TYE9Gvr4%2BY6JnMFpmF7u4C9LNriwLmweiy0oIx16QQxl8sweAAAzpavBlgRKH4E6v5Wvjyk4IxT52pWKGiL3sYZ3LdX9SNpVv%2B3OjA%2FLoBwtLmrJP8%2FKtY82VqOUVTsgr15U3YsK2BZXt0OWnE65iC1M1T1FZJD8A42wcJ6QOeMeTJSEPWUuNXlskPDfB5Myl%2Fc7bZYWAG3wA6MP%2FWV7V0zZOzJpuOu5gMGL68mWzLFmsDd%2FZx5jG8Mk8NsEcdcvP%2BdgPzJpzwccsrU1tWmkLh1%2F6bdnEizTWK%2BQPRTJnFKPraM604KSDEGh6j66JsjEWJFZb4YF%2Fd8FJE%2B%2BQBjAQgVjZbqE3%2Bw8wt9z0vwY6pgHxY1GZ5lUyqpix%2FAjQUFN506oaPVjT91I1ZnVeRq%2FY4DdQlKCuDnsp14Ed9SWHYKy8%2FFyDTy3DyhxMP8rUxmegNYqOXbFFdXFmc%2BbtWu7dvlTjFXOBAtdUMO%2BxHxdgZXDqqOYzkEwZuAbMtJZVBt%2B%2FDDgcB%2F0g3EtrCe61PcVeVNkCvYtSztCiIqps%2BETA46cfT3jSmcekMyevsMrG%2BgwiYiaE5Bmr&X-Amz-Signature=b60d6dd97b1a08a6346cb251bac258c3ece8bb8f4530fe5d0ef3c6a5fea89e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
