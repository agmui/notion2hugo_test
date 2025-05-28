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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663554MAGS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsyJhY%2BRf7z8P3DmuzZVC46rV%2FNl86U3g5eOh3B0mzBAiEA2Tg2%2BDHemq3JsoYrY2dIzA47jXfd5sG0Pefpr6s3KHUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGAZtjn9zOK6A8TQayrcA72f5gSuhcSZ2Vc2vRVlyKHlTkY8iD%2B9E%2BDg1G38dFzYLWafLvG9ktJbZ%2FITMJwURkMCkrN486TWif2%2BKvKG38laXA4tYxAfE3UER7hppY57Hk%2F7ROoOz3P4JS3GvM7MaHw1%2Bq5kAWvrNFsOnh2va%2B2HTY%2BnORDfK7kmk4EHv7mfXBNKr1xxTzEE9XzTyc%2B8J3NG9nRvJ6pJ5n3YF9PmVEN%2F5eclQcToNIGA7T%2FaxfoIAylPFYjvKO4Q0KQ90hZaSKQ96OYoVq5CdjLJpjhIpHar1pUSpWrrcn787F9yxIjiXKAjgLQ7DLCRHwz%2FFwU9d91yhLKJpcvZUpQcoRiU3cKB%2F%2FgrUS7drw7%2BpZGhDp%2F59cxZEBNc%2FYwncbM7yIAjifw8Cc9HLNhLNWXiMvSjk3ddF1GIDVky0w770%2B9ZQ9hR7%2BRifSOMUf1NDiJZ%2BMTqobjXwX%2B7exaEltEpcxS8kyCITLDW%2B0uxj7THT6AoZ5nN8SPnnn444ZQAi9eSCism1RaGEmL%2BaTm%2FnNvxEJ4q7vj5BqevxYJi868kp6i3RFDUT7GkuJuwraQcbwmwuCvvB7oIeW7Xypnp4w0oBUtwtOr4H17ePck%2FoIeNII08q5aZ9y7Cabwbu73vEFH1MOuX2sEGOqUBgISwMgv7%2FwGN8k9fzEADp1DGEIqz%2BKO1eDqGGkpwmIZcx40B57L%2BS%2BescDVNXwGfnj%2Bmbldiq7%2BLq%2BCr6agryBU6vhMNbgLrFKXSunvRkQuod3xJVf9LBhEu%2BOR9ZjB7S%2BwxB1nsMK7jI4muadzq2AgYDVfZFCoH6LReQvS39ZdnTn8qlXiuDwv8%2FllBU0OJkno%2Bywkp5BOaoEey4QbpbSpmTWrC&X-Amz-Signature=a37958d101f622cbaaf24b7515b25e9a85e4bbc6182160890ae4ca1026030b24&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663554MAGS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsyJhY%2BRf7z8P3DmuzZVC46rV%2FNl86U3g5eOh3B0mzBAiEA2Tg2%2BDHemq3JsoYrY2dIzA47jXfd5sG0Pefpr6s3KHUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGAZtjn9zOK6A8TQayrcA72f5gSuhcSZ2Vc2vRVlyKHlTkY8iD%2B9E%2BDg1G38dFzYLWafLvG9ktJbZ%2FITMJwURkMCkrN486TWif2%2BKvKG38laXA4tYxAfE3UER7hppY57Hk%2F7ROoOz3P4JS3GvM7MaHw1%2Bq5kAWvrNFsOnh2va%2B2HTY%2BnORDfK7kmk4EHv7mfXBNKr1xxTzEE9XzTyc%2B8J3NG9nRvJ6pJ5n3YF9PmVEN%2F5eclQcToNIGA7T%2FaxfoIAylPFYjvKO4Q0KQ90hZaSKQ96OYoVq5CdjLJpjhIpHar1pUSpWrrcn787F9yxIjiXKAjgLQ7DLCRHwz%2FFwU9d91yhLKJpcvZUpQcoRiU3cKB%2F%2FgrUS7drw7%2BpZGhDp%2F59cxZEBNc%2FYwncbM7yIAjifw8Cc9HLNhLNWXiMvSjk3ddF1GIDVky0w770%2B9ZQ9hR7%2BRifSOMUf1NDiJZ%2BMTqobjXwX%2B7exaEltEpcxS8kyCITLDW%2B0uxj7THT6AoZ5nN8SPnnn444ZQAi9eSCism1RaGEmL%2BaTm%2FnNvxEJ4q7vj5BqevxYJi868kp6i3RFDUT7GkuJuwraQcbwmwuCvvB7oIeW7Xypnp4w0oBUtwtOr4H17ePck%2FoIeNII08q5aZ9y7Cabwbu73vEFH1MOuX2sEGOqUBgISwMgv7%2FwGN8k9fzEADp1DGEIqz%2BKO1eDqGGkpwmIZcx40B57L%2BS%2BescDVNXwGfnj%2Bmbldiq7%2BLq%2BCr6agryBU6vhMNbgLrFKXSunvRkQuod3xJVf9LBhEu%2BOR9ZjB7S%2BwxB1nsMK7jI4muadzq2AgYDVfZFCoH6LReQvS39ZdnTn8qlXiuDwv8%2FllBU0OJkno%2Bywkp5BOaoEey4QbpbSpmTWrC&X-Amz-Signature=b7e1a343aa8e9caf917a0e5ebdb5d2452ac3f0856e7cc1435fded412ecdf4e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663554MAGS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsyJhY%2BRf7z8P3DmuzZVC46rV%2FNl86U3g5eOh3B0mzBAiEA2Tg2%2BDHemq3JsoYrY2dIzA47jXfd5sG0Pefpr6s3KHUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGAZtjn9zOK6A8TQayrcA72f5gSuhcSZ2Vc2vRVlyKHlTkY8iD%2B9E%2BDg1G38dFzYLWafLvG9ktJbZ%2FITMJwURkMCkrN486TWif2%2BKvKG38laXA4tYxAfE3UER7hppY57Hk%2F7ROoOz3P4JS3GvM7MaHw1%2Bq5kAWvrNFsOnh2va%2B2HTY%2BnORDfK7kmk4EHv7mfXBNKr1xxTzEE9XzTyc%2B8J3NG9nRvJ6pJ5n3YF9PmVEN%2F5eclQcToNIGA7T%2FaxfoIAylPFYjvKO4Q0KQ90hZaSKQ96OYoVq5CdjLJpjhIpHar1pUSpWrrcn787F9yxIjiXKAjgLQ7DLCRHwz%2FFwU9d91yhLKJpcvZUpQcoRiU3cKB%2F%2FgrUS7drw7%2BpZGhDp%2F59cxZEBNc%2FYwncbM7yIAjifw8Cc9HLNhLNWXiMvSjk3ddF1GIDVky0w770%2B9ZQ9hR7%2BRifSOMUf1NDiJZ%2BMTqobjXwX%2B7exaEltEpcxS8kyCITLDW%2B0uxj7THT6AoZ5nN8SPnnn444ZQAi9eSCism1RaGEmL%2BaTm%2FnNvxEJ4q7vj5BqevxYJi868kp6i3RFDUT7GkuJuwraQcbwmwuCvvB7oIeW7Xypnp4w0oBUtwtOr4H17ePck%2FoIeNII08q5aZ9y7Cabwbu73vEFH1MOuX2sEGOqUBgISwMgv7%2FwGN8k9fzEADp1DGEIqz%2BKO1eDqGGkpwmIZcx40B57L%2BS%2BescDVNXwGfnj%2Bmbldiq7%2BLq%2BCr6agryBU6vhMNbgLrFKXSunvRkQuod3xJVf9LBhEu%2BOR9ZjB7S%2BwxB1nsMK7jI4muadzq2AgYDVfZFCoH6LReQvS39ZdnTn8qlXiuDwv8%2FllBU0OJkno%2Bywkp5BOaoEey4QbpbSpmTWrC&X-Amz-Signature=212442eca437d56639f1b065bfc4779d9668714770d0e1da8cd6a66c79949565&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
