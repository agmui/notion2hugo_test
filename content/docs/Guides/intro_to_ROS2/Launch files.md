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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MEWM5I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIArCRWL%2Bpb3x86aKGk7NnV3C6s7tHhNsIp%2B204DSC6NJAiA6qMBcvE0bXbs7AJN9coaCzV%2F8P9qGMtXAQAe%2BpOO37CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVN18OGC9s78r1usKtwDZ6kmBaULmWovfRtx%2FwKYh6WA66ITvOS86Ru1dwmKbYMRsy3xzZMA2rlChfULAaynzK5Ab%2FF9FrP7vwnnEe2QJ79M5lZjjdrWCzJe9LTZ0CPNErx75LNYW8QU%2BtMLlqOmHNuMO902QKDB7h9vbiiCfRvso%2BZv%2Bbo3b4LwZ0%2BWiOLGYLbzKixicGgPF9Qe9ZFL22x4Qx7kZiEmyzkK%2B2bgQfvlq%2FkQ9ejJ1UW5UEObzm%2Fb0ePFw5Lgw1JV7eYw3Fpoagmt6BuzshlPZNP9qFbRvGbVljuqpTNktSnNMh9sYK%2F9k%2F%2Btzu5q2NpvTRv19zrVoyacYE8B1Mv7NcLVulCnLHYYqxMW1%2FbqG5XxCDFQIQwTEuYuxiZFwgmiSfD688qYwb3SUqwQZO2zIJs8p7iOcWDQoQW3d7JmpD4ZtvlJnsdkasFmolH6cs0cp7X4YkKZs3iFhHauuAQrdHnqmh%2B1q5wHwbtm5jsgLnR46NuqTwyriFkz0vgznOx3c5Ttcns0KKZTFL3Rt8FU2SR88Wyk6uxZe9lL3XZeLxJt7j50Muyy37hcH5uMqpXIfwUi4WULZGJt2hqXnikqUpgDlKVfm3EOe86HltijrPSCgD6ZIbNkg8LoDJFB%2Fi3qveowj8nNwAY6pgFn6DrfcXDNYYJmFlLSsdmrWzzy40rfEMRK5EDfj%2BZxltCSUZl4q4XbBWt3%2FzCXC%2B8X72mSy4LpgKVMXFR6Ona%2BIKdW2zJL1Jh4Hc8l84Aftm%2BIFLoCFNebffK7U%2Fzsi3ZI31v0DNlCBSRUvuyKCf89QnqyNgkLES1TwO9sAeMkSh26%2BBalt5Sh7KyMnGSzNLaRw7RbuYrywnsD0wVfDBWJiHTBUqDD&X-Amz-Signature=f30fef29a0545397d6b6df674bf2829c13e49057af6c927913285b96996c377d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MEWM5I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIArCRWL%2Bpb3x86aKGk7NnV3C6s7tHhNsIp%2B204DSC6NJAiA6qMBcvE0bXbs7AJN9coaCzV%2F8P9qGMtXAQAe%2BpOO37CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVN18OGC9s78r1usKtwDZ6kmBaULmWovfRtx%2FwKYh6WA66ITvOS86Ru1dwmKbYMRsy3xzZMA2rlChfULAaynzK5Ab%2FF9FrP7vwnnEe2QJ79M5lZjjdrWCzJe9LTZ0CPNErx75LNYW8QU%2BtMLlqOmHNuMO902QKDB7h9vbiiCfRvso%2BZv%2Bbo3b4LwZ0%2BWiOLGYLbzKixicGgPF9Qe9ZFL22x4Qx7kZiEmyzkK%2B2bgQfvlq%2FkQ9ejJ1UW5UEObzm%2Fb0ePFw5Lgw1JV7eYw3Fpoagmt6BuzshlPZNP9qFbRvGbVljuqpTNktSnNMh9sYK%2F9k%2F%2Btzu5q2NpvTRv19zrVoyacYE8B1Mv7NcLVulCnLHYYqxMW1%2FbqG5XxCDFQIQwTEuYuxiZFwgmiSfD688qYwb3SUqwQZO2zIJs8p7iOcWDQoQW3d7JmpD4ZtvlJnsdkasFmolH6cs0cp7X4YkKZs3iFhHauuAQrdHnqmh%2B1q5wHwbtm5jsgLnR46NuqTwyriFkz0vgznOx3c5Ttcns0KKZTFL3Rt8FU2SR88Wyk6uxZe9lL3XZeLxJt7j50Muyy37hcH5uMqpXIfwUi4WULZGJt2hqXnikqUpgDlKVfm3EOe86HltijrPSCgD6ZIbNkg8LoDJFB%2Fi3qveowj8nNwAY6pgFn6DrfcXDNYYJmFlLSsdmrWzzy40rfEMRK5EDfj%2BZxltCSUZl4q4XbBWt3%2FzCXC%2B8X72mSy4LpgKVMXFR6Ona%2BIKdW2zJL1Jh4Hc8l84Aftm%2BIFLoCFNebffK7U%2Fzsi3ZI31v0DNlCBSRUvuyKCf89QnqyNgkLES1TwO9sAeMkSh26%2BBalt5Sh7KyMnGSzNLaRw7RbuYrywnsD0wVfDBWJiHTBUqDD&X-Amz-Signature=b52e50c9d0c6cc1f653e84b6ad57fc88f7da1d88bb63801c3f98a152c8a6bce9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MEWM5I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIArCRWL%2Bpb3x86aKGk7NnV3C6s7tHhNsIp%2B204DSC6NJAiA6qMBcvE0bXbs7AJN9coaCzV%2F8P9qGMtXAQAe%2BpOO37CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVN18OGC9s78r1usKtwDZ6kmBaULmWovfRtx%2FwKYh6WA66ITvOS86Ru1dwmKbYMRsy3xzZMA2rlChfULAaynzK5Ab%2FF9FrP7vwnnEe2QJ79M5lZjjdrWCzJe9LTZ0CPNErx75LNYW8QU%2BtMLlqOmHNuMO902QKDB7h9vbiiCfRvso%2BZv%2Bbo3b4LwZ0%2BWiOLGYLbzKixicGgPF9Qe9ZFL22x4Qx7kZiEmyzkK%2B2bgQfvlq%2FkQ9ejJ1UW5UEObzm%2Fb0ePFw5Lgw1JV7eYw3Fpoagmt6BuzshlPZNP9qFbRvGbVljuqpTNktSnNMh9sYK%2F9k%2F%2Btzu5q2NpvTRv19zrVoyacYE8B1Mv7NcLVulCnLHYYqxMW1%2FbqG5XxCDFQIQwTEuYuxiZFwgmiSfD688qYwb3SUqwQZO2zIJs8p7iOcWDQoQW3d7JmpD4ZtvlJnsdkasFmolH6cs0cp7X4YkKZs3iFhHauuAQrdHnqmh%2B1q5wHwbtm5jsgLnR46NuqTwyriFkz0vgznOx3c5Ttcns0KKZTFL3Rt8FU2SR88Wyk6uxZe9lL3XZeLxJt7j50Muyy37hcH5uMqpXIfwUi4WULZGJt2hqXnikqUpgDlKVfm3EOe86HltijrPSCgD6ZIbNkg8LoDJFB%2Fi3qveowj8nNwAY6pgFn6DrfcXDNYYJmFlLSsdmrWzzy40rfEMRK5EDfj%2BZxltCSUZl4q4XbBWt3%2FzCXC%2B8X72mSy4LpgKVMXFR6Ona%2BIKdW2zJL1Jh4Hc8l84Aftm%2BIFLoCFNebffK7U%2Fzsi3ZI31v0DNlCBSRUvuyKCf89QnqyNgkLES1TwO9sAeMkSh26%2BBalt5Sh7KyMnGSzNLaRw7RbuYrywnsD0wVfDBWJiHTBUqDD&X-Amz-Signature=da46e73f8f8c8f1e845f6fcbcc278b01c40ba10773934b1f973c3887c15b0231&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
