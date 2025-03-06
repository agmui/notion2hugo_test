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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTNOQM4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOdfMFA3rfmzxbnFkck69g46oYHeLWNFVB0F6k3ukDZAiEArY%2FAhiZz18ut5MMl9LQF2i4FZQx10CPmK%2FRDM7YkBmYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDANGWh%2B1FEzgSQjdDircAwLAQQdUZBrxBbDCvDnOxGXiH78zt%2FCh3NbrSHx2YcU%2F7BME93w9VBet6V6LzOK29cpUE7GgaJgebY%2FBULeaNQYYAq8ExzUShpwtPWRQ%2BD4hFoGHrNxZzcNmAbPqO2jgiMHQBAyOXZgbiuc5FUZn3WBHJtmH7jDE3MrXA44VSl3YmkYqwx76DdVwzIKoN0%2BncMapzIj7%2FzpxUi%2BmIXQU3cpFVO6I8q4kpUnuLZSq1GfhNXZ9MU7PinOjtXpTMN7dfw5AnBMROiMMf5gTMo98zeO0BAvDYvUVNSjj1%2BT0FuMjYVaOlGb9U4NqBkhsAny8OfaIhg7l0yHzV8g5C4hxfnkKjI%2Bu7tAoq9F9lY6c1dZ3NTzKupHpZRAd7ySVBTWHt47xW3H43%2FqKSK0pnwhakhkRiodo6AUc0wB95WNUXIbLgv4SbTj%2FfICrCuOwylIJdkTST62KJsLuCsvVjXC6Xh341cq4ZuKsSI3D%2Be6fYIPJ2qdEw9Yq%2BUVcTVnqoKvb0CPtCzetaq1lKWv4t%2F4HV4JWl8fNmycSUVfhkFHyQCnAmxF%2Byfz4sJOGdsh3tHmleVceX%2BEjk5DVqHTdsXJUbwuNWhMYqrd72pO8stDIXa78UzwLuXKzRL6c7qTBMNzvpr4GOqUBIOYvDNMW%2B3QzJqBCptcvyTIPrMHgSboKdd9N71dvjeIT%2BtZTobN5OqmDCv43Ld4pENwGchiSuX%2Ba2ck%2F8D74fk%2FdnEe4odMX4vKULzgjuwbrQnDhYI8%2FIea1kl%2FeZxikCIWgZCSgsgEKFtNWR83MHVQGqCUVRFQ3RSZ2Ne7ywDHA00S9%2FIW3IvXwZwSmOt%2FvLYe9EqEim8Am6KZ4Vi%2FYJOFcAZKZ&X-Amz-Signature=03325b3edd30c8632adf90724a0121fe3fe67c70a5556ea12f576d6f5c5a66a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTNOQM4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOdfMFA3rfmzxbnFkck69g46oYHeLWNFVB0F6k3ukDZAiEArY%2FAhiZz18ut5MMl9LQF2i4FZQx10CPmK%2FRDM7YkBmYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDANGWh%2B1FEzgSQjdDircAwLAQQdUZBrxBbDCvDnOxGXiH78zt%2FCh3NbrSHx2YcU%2F7BME93w9VBet6V6LzOK29cpUE7GgaJgebY%2FBULeaNQYYAq8ExzUShpwtPWRQ%2BD4hFoGHrNxZzcNmAbPqO2jgiMHQBAyOXZgbiuc5FUZn3WBHJtmH7jDE3MrXA44VSl3YmkYqwx76DdVwzIKoN0%2BncMapzIj7%2FzpxUi%2BmIXQU3cpFVO6I8q4kpUnuLZSq1GfhNXZ9MU7PinOjtXpTMN7dfw5AnBMROiMMf5gTMo98zeO0BAvDYvUVNSjj1%2BT0FuMjYVaOlGb9U4NqBkhsAny8OfaIhg7l0yHzV8g5C4hxfnkKjI%2Bu7tAoq9F9lY6c1dZ3NTzKupHpZRAd7ySVBTWHt47xW3H43%2FqKSK0pnwhakhkRiodo6AUc0wB95WNUXIbLgv4SbTj%2FfICrCuOwylIJdkTST62KJsLuCsvVjXC6Xh341cq4ZuKsSI3D%2Be6fYIPJ2qdEw9Yq%2BUVcTVnqoKvb0CPtCzetaq1lKWv4t%2F4HV4JWl8fNmycSUVfhkFHyQCnAmxF%2Byfz4sJOGdsh3tHmleVceX%2BEjk5DVqHTdsXJUbwuNWhMYqrd72pO8stDIXa78UzwLuXKzRL6c7qTBMNzvpr4GOqUBIOYvDNMW%2B3QzJqBCptcvyTIPrMHgSboKdd9N71dvjeIT%2BtZTobN5OqmDCv43Ld4pENwGchiSuX%2Ba2ck%2F8D74fk%2FdnEe4odMX4vKULzgjuwbrQnDhYI8%2FIea1kl%2FeZxikCIWgZCSgsgEKFtNWR83MHVQGqCUVRFQ3RSZ2Ne7ywDHA00S9%2FIW3IvXwZwSmOt%2FvLYe9EqEim8Am6KZ4Vi%2FYJOFcAZKZ&X-Amz-Signature=bc66d48dd6af3e0e19d444fbe478325478304f3695c8d3c3e95fb3e46334fd64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTNOQM4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOdfMFA3rfmzxbnFkck69g46oYHeLWNFVB0F6k3ukDZAiEArY%2FAhiZz18ut5MMl9LQF2i4FZQx10CPmK%2FRDM7YkBmYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDANGWh%2B1FEzgSQjdDircAwLAQQdUZBrxBbDCvDnOxGXiH78zt%2FCh3NbrSHx2YcU%2F7BME93w9VBet6V6LzOK29cpUE7GgaJgebY%2FBULeaNQYYAq8ExzUShpwtPWRQ%2BD4hFoGHrNxZzcNmAbPqO2jgiMHQBAyOXZgbiuc5FUZn3WBHJtmH7jDE3MrXA44VSl3YmkYqwx76DdVwzIKoN0%2BncMapzIj7%2FzpxUi%2BmIXQU3cpFVO6I8q4kpUnuLZSq1GfhNXZ9MU7PinOjtXpTMN7dfw5AnBMROiMMf5gTMo98zeO0BAvDYvUVNSjj1%2BT0FuMjYVaOlGb9U4NqBkhsAny8OfaIhg7l0yHzV8g5C4hxfnkKjI%2Bu7tAoq9F9lY6c1dZ3NTzKupHpZRAd7ySVBTWHt47xW3H43%2FqKSK0pnwhakhkRiodo6AUc0wB95WNUXIbLgv4SbTj%2FfICrCuOwylIJdkTST62KJsLuCsvVjXC6Xh341cq4ZuKsSI3D%2Be6fYIPJ2qdEw9Yq%2BUVcTVnqoKvb0CPtCzetaq1lKWv4t%2F4HV4JWl8fNmycSUVfhkFHyQCnAmxF%2Byfz4sJOGdsh3tHmleVceX%2BEjk5DVqHTdsXJUbwuNWhMYqrd72pO8stDIXa78UzwLuXKzRL6c7qTBMNzvpr4GOqUBIOYvDNMW%2B3QzJqBCptcvyTIPrMHgSboKdd9N71dvjeIT%2BtZTobN5OqmDCv43Ld4pENwGchiSuX%2Ba2ck%2F8D74fk%2FdnEe4odMX4vKULzgjuwbrQnDhYI8%2FIea1kl%2FeZxikCIWgZCSgsgEKFtNWR83MHVQGqCUVRFQ3RSZ2Ne7ywDHA00S9%2FIW3IvXwZwSmOt%2FvLYe9EqEim8Am6KZ4Vi%2FYJOFcAZKZ&X-Amz-Signature=b9e7b11a830b505e21245e575387f2d780a9d431215230dcff2e78ef6ade95c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
