---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTISCB5W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAanBD4khFT02TR91CPs63%2FfLWncZusyX56%2BP46GH9GjAiBZ1X%2Bf4fLigto4sFzMmztt6klFnpzasRDyemZEzPA%2BYiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjvH6Bb9W2CQ7UDwKtwDDCW4VMzv9L0XN2qV4YHVD9i9YiOhT74vMwK2biNVvhXWiEH69IBcLGsg7aFFkcEZX6bEX8aDRdM3qf8rwLp%2BsxXNpBe%2FqadRrYEsMX7BB2mkrNHF7eyPmv9MWSkdnyN8FKSxPutMp3BjtKjycbBcghWKXxsrX9Pys55bCNnFiNA%2FkMIdDqa%2BCrIxqJaIZt0lfy2PnQ%2Fv6sb4c3qK7rxtTyIFpWYhfBdXFAqf5cEmBCodw0WMksmfJQc1Iq863lZalFtMWUxwKzY0bGdSMIemR0AtPHMEUujdqE7ZKg31uL9Pu9Yy%2Fx3%2BxHWOJKgMFn8CbH%2BiW0NqNm942dUJXPwIWISkSdu2w%2FLSrI4juNXZs6q0rxgx3BLaxMM9HRNWGMXcvVGtLc0eh7t4n%2BAYB7BNM6wMQldVWyjI7yr8ImUP0DXCkWWPBrPeqwJ4ifwS0RNrosuWVVqo%2ByF6VAmV%2BZTw%2Fuz%2B2J4U%2F0ke2c3gL31fMqKSltDdjCtUr3fyTA9c4j1msVonC4PLzLIOqdakxtANJTsi14eJCXpw0tayrUNpVzcM3CAPTGmV%2FHA2wuXVqTGi8z%2FIri28tpOykNVGp%2BwgdHuzZgB1B2u3G1GobguLbbAODFXkZlT%2Fuma2%2Fcgw2qKqxAY6pgGVkDwK1kvxy7s56yMTFIxhZPxsczA2fvoh5rKN3FEbViojzZiZtokCGHhy%2B9WSe8HWZiE%2Byy4NSXeh0SISB7%2FAYuU39Azm%2BwmYuiK4zyEJIZ2ZdtgSjVemvEeVmOB9SZe9gXBa3WTlVzvOai5RQ5Vsmr%2BoR43pmt1KGPiTGMGzHLc3opuO8HtIRMPfNWZTYcWccGgXbnVoYCI8u15vhRYQNi0F4zOh&X-Amz-Signature=ee5396a4edc0605c7cb8e63126457684618f450fd73b9ead78be69cacf3f8458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTISCB5W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAanBD4khFT02TR91CPs63%2FfLWncZusyX56%2BP46GH9GjAiBZ1X%2Bf4fLigto4sFzMmztt6klFnpzasRDyemZEzPA%2BYiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjvH6Bb9W2CQ7UDwKtwDDCW4VMzv9L0XN2qV4YHVD9i9YiOhT74vMwK2biNVvhXWiEH69IBcLGsg7aFFkcEZX6bEX8aDRdM3qf8rwLp%2BsxXNpBe%2FqadRrYEsMX7BB2mkrNHF7eyPmv9MWSkdnyN8FKSxPutMp3BjtKjycbBcghWKXxsrX9Pys55bCNnFiNA%2FkMIdDqa%2BCrIxqJaIZt0lfy2PnQ%2Fv6sb4c3qK7rxtTyIFpWYhfBdXFAqf5cEmBCodw0WMksmfJQc1Iq863lZalFtMWUxwKzY0bGdSMIemR0AtPHMEUujdqE7ZKg31uL9Pu9Yy%2Fx3%2BxHWOJKgMFn8CbH%2BiW0NqNm942dUJXPwIWISkSdu2w%2FLSrI4juNXZs6q0rxgx3BLaxMM9HRNWGMXcvVGtLc0eh7t4n%2BAYB7BNM6wMQldVWyjI7yr8ImUP0DXCkWWPBrPeqwJ4ifwS0RNrosuWVVqo%2ByF6VAmV%2BZTw%2Fuz%2B2J4U%2F0ke2c3gL31fMqKSltDdjCtUr3fyTA9c4j1msVonC4PLzLIOqdakxtANJTsi14eJCXpw0tayrUNpVzcM3CAPTGmV%2FHA2wuXVqTGi8z%2FIri28tpOykNVGp%2BwgdHuzZgB1B2u3G1GobguLbbAODFXkZlT%2Fuma2%2Fcgw2qKqxAY6pgGVkDwK1kvxy7s56yMTFIxhZPxsczA2fvoh5rKN3FEbViojzZiZtokCGHhy%2B9WSe8HWZiE%2Byy4NSXeh0SISB7%2FAYuU39Azm%2BwmYuiK4zyEJIZ2ZdtgSjVemvEeVmOB9SZe9gXBa3WTlVzvOai5RQ5Vsmr%2BoR43pmt1KGPiTGMGzHLc3opuO8HtIRMPfNWZTYcWccGgXbnVoYCI8u15vhRYQNi0F4zOh&X-Amz-Signature=1fc6d8de853eb1446f6c7275ec016a7d05476881a67faa12dd49824038bf13e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTISCB5W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAanBD4khFT02TR91CPs63%2FfLWncZusyX56%2BP46GH9GjAiBZ1X%2Bf4fLigto4sFzMmztt6klFnpzasRDyemZEzPA%2BYiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdjvH6Bb9W2CQ7UDwKtwDDCW4VMzv9L0XN2qV4YHVD9i9YiOhT74vMwK2biNVvhXWiEH69IBcLGsg7aFFkcEZX6bEX8aDRdM3qf8rwLp%2BsxXNpBe%2FqadRrYEsMX7BB2mkrNHF7eyPmv9MWSkdnyN8FKSxPutMp3BjtKjycbBcghWKXxsrX9Pys55bCNnFiNA%2FkMIdDqa%2BCrIxqJaIZt0lfy2PnQ%2Fv6sb4c3qK7rxtTyIFpWYhfBdXFAqf5cEmBCodw0WMksmfJQc1Iq863lZalFtMWUxwKzY0bGdSMIemR0AtPHMEUujdqE7ZKg31uL9Pu9Yy%2Fx3%2BxHWOJKgMFn8CbH%2BiW0NqNm942dUJXPwIWISkSdu2w%2FLSrI4juNXZs6q0rxgx3BLaxMM9HRNWGMXcvVGtLc0eh7t4n%2BAYB7BNM6wMQldVWyjI7yr8ImUP0DXCkWWPBrPeqwJ4ifwS0RNrosuWVVqo%2ByF6VAmV%2BZTw%2Fuz%2B2J4U%2F0ke2c3gL31fMqKSltDdjCtUr3fyTA9c4j1msVonC4PLzLIOqdakxtANJTsi14eJCXpw0tayrUNpVzcM3CAPTGmV%2FHA2wuXVqTGi8z%2FIri28tpOykNVGp%2BwgdHuzZgB1B2u3G1GobguLbbAODFXkZlT%2Fuma2%2Fcgw2qKqxAY6pgGVkDwK1kvxy7s56yMTFIxhZPxsczA2fvoh5rKN3FEbViojzZiZtokCGHhy%2B9WSe8HWZiE%2Byy4NSXeh0SISB7%2FAYuU39Azm%2BwmYuiK4zyEJIZ2ZdtgSjVemvEeVmOB9SZe9gXBa3WTlVzvOai5RQ5Vsmr%2BoR43pmt1KGPiTGMGzHLc3opuO8HtIRMPfNWZTYcWccGgXbnVoYCI8u15vhRYQNi0F4zOh&X-Amz-Signature=cda42228e5eee1e3be7f17cc2d4bf7272655992a9f7ae4534ada9ac33219dc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
