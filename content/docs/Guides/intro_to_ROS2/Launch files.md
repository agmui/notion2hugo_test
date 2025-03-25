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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YU4ONUO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAon%2FVwwVcfNAjKWO%2BkGAdS%2FOsxZGnjadgnJZHnVLENXAiEApeLyhPcLH3su9Rk0GkQyxh7WeAywe8uqU1PffefOogUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDkoRO5qzTbsXQMA%2FCrcA2NYXtRKBUBcY3GyU%2F%2Fh9q23oKp%2B0IIUPCQiPv6ClD1fxnqnD8LAYdxhWRXLVVIXRNmTzo5CKqC5a06Bl%2FEzql%2F%2F0MMJ61eDbmX1JHagfsU7zSt9Z7Q0PkQEuTfkAdhve3FRhhRxN7uk6vcg%2BFKjB7ovyiK8ZWYpvEPxDRgl0XwB2B91g1EtmCgv2CSqqXhiyblqWlWPyDC0JVcdsO0lUHLcMVgZJUDmVwOWw6ho1mN7ICqVi%2FKIXq8%2BAiMEaqlHNvk3svQz6PZJ9eyAX10tv0WOhcjUW2nF2pe8rDjLgVMLWgeDFw%2Fr7Q68xZWHgXwEbedzxKFGcx%2Bfjn5PuMhnMZFGqOlhhHRvmonYnGmnLfFiDYddvZoMSZVDqwQr8Yu1lHJXT1WK%2FE%2FxLxhiRzEmXgttVn5QYbCf203JJTwN8VoEjQTYBd9P5Mt8khK1Q%2F%2BKC5qqYymuUCwzmjSDdqhIKlvlYFX3OwHs1aF6%2BvL0e9jYI0k%2BGQpJS4t4FWdhQVRrbpv9bV2zoVjDaYUUB3FtyT7r%2BrjGfMGvcqydzEoGQrTs2hCZDHyx0BHoh3hpsd6VEBuq2E3SQNx3oxTxBltb8WCoQoO3j9h%2FNS%2FBllAaHBKIacFBCn%2FAk6EjWyMnMM%2BYjL8GOqUBGCSw8WJe8rjQLu9SPPqNw998lart%2FXSNssaTQ9gMVM5JxV7VwUrQXZUIpHoF8AVzAbIM7V7qBYhH1ffqEab8PV%2FZRingRmH4fDCqueL0lau6BsAqtxX%2Ff6PcfnCgVmcvmzoXbJLAd3ZtYAgOYNfTxwtZyq0jlQhdWQ4RVFAzcsdTBvFbi3vNlthqfUoT%2BGoWPnJ5Em3tWWmeoGchiFTDbtIQewrO&X-Amz-Signature=6bff82931b65bfc4d79fc5a31ed3c02f3b23170ddc316b82a12d38d265a5fc33&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YU4ONUO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAon%2FVwwVcfNAjKWO%2BkGAdS%2FOsxZGnjadgnJZHnVLENXAiEApeLyhPcLH3su9Rk0GkQyxh7WeAywe8uqU1PffefOogUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDkoRO5qzTbsXQMA%2FCrcA2NYXtRKBUBcY3GyU%2F%2Fh9q23oKp%2B0IIUPCQiPv6ClD1fxnqnD8LAYdxhWRXLVVIXRNmTzo5CKqC5a06Bl%2FEzql%2F%2F0MMJ61eDbmX1JHagfsU7zSt9Z7Q0PkQEuTfkAdhve3FRhhRxN7uk6vcg%2BFKjB7ovyiK8ZWYpvEPxDRgl0XwB2B91g1EtmCgv2CSqqXhiyblqWlWPyDC0JVcdsO0lUHLcMVgZJUDmVwOWw6ho1mN7ICqVi%2FKIXq8%2BAiMEaqlHNvk3svQz6PZJ9eyAX10tv0WOhcjUW2nF2pe8rDjLgVMLWgeDFw%2Fr7Q68xZWHgXwEbedzxKFGcx%2Bfjn5PuMhnMZFGqOlhhHRvmonYnGmnLfFiDYddvZoMSZVDqwQr8Yu1lHJXT1WK%2FE%2FxLxhiRzEmXgttVn5QYbCf203JJTwN8VoEjQTYBd9P5Mt8khK1Q%2F%2BKC5qqYymuUCwzmjSDdqhIKlvlYFX3OwHs1aF6%2BvL0e9jYI0k%2BGQpJS4t4FWdhQVRrbpv9bV2zoVjDaYUUB3FtyT7r%2BrjGfMGvcqydzEoGQrTs2hCZDHyx0BHoh3hpsd6VEBuq2E3SQNx3oxTxBltb8WCoQoO3j9h%2FNS%2FBllAaHBKIacFBCn%2FAk6EjWyMnMM%2BYjL8GOqUBGCSw8WJe8rjQLu9SPPqNw998lart%2FXSNssaTQ9gMVM5JxV7VwUrQXZUIpHoF8AVzAbIM7V7qBYhH1ffqEab8PV%2FZRingRmH4fDCqueL0lau6BsAqtxX%2Ff6PcfnCgVmcvmzoXbJLAd3ZtYAgOYNfTxwtZyq0jlQhdWQ4RVFAzcsdTBvFbi3vNlthqfUoT%2BGoWPnJ5Em3tWWmeoGchiFTDbtIQewrO&X-Amz-Signature=05ec0c070c62db3a2b5ad57011c14d63bcaa0e381b421a35c4ecfc8b561a21f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YU4ONUO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAon%2FVwwVcfNAjKWO%2BkGAdS%2FOsxZGnjadgnJZHnVLENXAiEApeLyhPcLH3su9Rk0GkQyxh7WeAywe8uqU1PffefOogUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDkoRO5qzTbsXQMA%2FCrcA2NYXtRKBUBcY3GyU%2F%2Fh9q23oKp%2B0IIUPCQiPv6ClD1fxnqnD8LAYdxhWRXLVVIXRNmTzo5CKqC5a06Bl%2FEzql%2F%2F0MMJ61eDbmX1JHagfsU7zSt9Z7Q0PkQEuTfkAdhve3FRhhRxN7uk6vcg%2BFKjB7ovyiK8ZWYpvEPxDRgl0XwB2B91g1EtmCgv2CSqqXhiyblqWlWPyDC0JVcdsO0lUHLcMVgZJUDmVwOWw6ho1mN7ICqVi%2FKIXq8%2BAiMEaqlHNvk3svQz6PZJ9eyAX10tv0WOhcjUW2nF2pe8rDjLgVMLWgeDFw%2Fr7Q68xZWHgXwEbedzxKFGcx%2Bfjn5PuMhnMZFGqOlhhHRvmonYnGmnLfFiDYddvZoMSZVDqwQr8Yu1lHJXT1WK%2FE%2FxLxhiRzEmXgttVn5QYbCf203JJTwN8VoEjQTYBd9P5Mt8khK1Q%2F%2BKC5qqYymuUCwzmjSDdqhIKlvlYFX3OwHs1aF6%2BvL0e9jYI0k%2BGQpJS4t4FWdhQVRrbpv9bV2zoVjDaYUUB3FtyT7r%2BrjGfMGvcqydzEoGQrTs2hCZDHyx0BHoh3hpsd6VEBuq2E3SQNx3oxTxBltb8WCoQoO3j9h%2FNS%2FBllAaHBKIacFBCn%2FAk6EjWyMnMM%2BYjL8GOqUBGCSw8WJe8rjQLu9SPPqNw998lart%2FXSNssaTQ9gMVM5JxV7VwUrQXZUIpHoF8AVzAbIM7V7qBYhH1ffqEab8PV%2FZRingRmH4fDCqueL0lau6BsAqtxX%2Ff6PcfnCgVmcvmzoXbJLAd3ZtYAgOYNfTxwtZyq0jlQhdWQ4RVFAzcsdTBvFbi3vNlthqfUoT%2BGoWPnJ5Em3tWWmeoGchiFTDbtIQewrO&X-Amz-Signature=de4d164e32cc344c2eb305f79fe8e892972f8e90c4c975768c8fb8e3f7181029&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
