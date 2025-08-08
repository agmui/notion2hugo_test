---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Z7PHEV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCYYrhVseJ%2Fud2U%2FqjqHswmRzjjpTt48K6suO3Cz8xgLQIhAM2m%2BA0GaYw%2FWlZiQTmBRDZvQ5V%2BGiIpwUBx9wVZ0nwMKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5nYqw0NZkAb0%2Biqkq3APJWGWl1D0xDf4Zs%2BygpDhDDVXH6HwCpbFfgjzti5NtBBCKZkUAhw%2B%2BHQ%2BUFCeAynJd4RxH1QElF%2F4a%2FEZQMY23SUHFSQ6ZkPrJdMb6v6ClDPojWxMGyznDoAb0%2FpEDy7WilYrZwoAGFItrfgqYqwCOiw6kihPWwrGgxaEbemUr%2Bu4BCi4wJtKf1KQGIULG55cpq%2B2Lw4PkKkjpPt4t%2FULMgbJvFlnyoc2P0CDf0QI6kdX5AuTLcRmnijm7ObFyP4HdFg%2B%2FrF7nvcjdFqoshWSIuYgfHasxlGUVkjqlW6Voa5Hlh6ynOYsbBWwnD%2FGGWTgyXXr9pxEi3d6bgK4nEN59%2BKFR1BkOm%2FctN0wLc0lXM7H7yNvdIIPnBA2ZWVUZuujAJC6vQPaBjdz11UuP9hQb9yKlO4slWqOA1Pfm8fxvHBkXJlP2MXLNAJdfEhjPxIiMatRpcvR78YVXyIjv2oSeisHbSIusgj6xE7apNNSYT8Uya2BCmMXKGUhIeS9%2FCugXtoSU%2F4ligswSnBfpMN9mEdl2SlVmiir4iQuUx4D8q8OGtZMBa%2Fmwljffp2M0irSzL6xDnpNObgYnhk4WlQltdSuqXxgjVwediS94tZ6R0tG%2Fy5A8GKyqBXzpCDDGutnEBjqkAYYaX11dsJ%2Bh3AqTgAsFLGOrWXE%2FKh6xPyTu6dw3%2FzvphzVYXewV%2FMpgJnrvu0ErGL1vmJDKGWnktCDgxax0aa02MjRnsSzO1BlCzWDU%2B50SdVn6nNvqMBH9b%2FbI18ZzLaE8trNTmwh0d4vXmHJOETgpMNVKjgNifTmpPi1E6ZHWAEL8R4y45klmQljGXe73RZOrjjp6yjYlcGmhm6LQT041Dfug&X-Amz-Signature=1f9c0dc182f13f3af5026d8773e29180941d8aded5abf337d5ac46c2b6044cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Z7PHEV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCYYrhVseJ%2Fud2U%2FqjqHswmRzjjpTt48K6suO3Cz8xgLQIhAM2m%2BA0GaYw%2FWlZiQTmBRDZvQ5V%2BGiIpwUBx9wVZ0nwMKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5nYqw0NZkAb0%2Biqkq3APJWGWl1D0xDf4Zs%2BygpDhDDVXH6HwCpbFfgjzti5NtBBCKZkUAhw%2B%2BHQ%2BUFCeAynJd4RxH1QElF%2F4a%2FEZQMY23SUHFSQ6ZkPrJdMb6v6ClDPojWxMGyznDoAb0%2FpEDy7WilYrZwoAGFItrfgqYqwCOiw6kihPWwrGgxaEbemUr%2Bu4BCi4wJtKf1KQGIULG55cpq%2B2Lw4PkKkjpPt4t%2FULMgbJvFlnyoc2P0CDf0QI6kdX5AuTLcRmnijm7ObFyP4HdFg%2B%2FrF7nvcjdFqoshWSIuYgfHasxlGUVkjqlW6Voa5Hlh6ynOYsbBWwnD%2FGGWTgyXXr9pxEi3d6bgK4nEN59%2BKFR1BkOm%2FctN0wLc0lXM7H7yNvdIIPnBA2ZWVUZuujAJC6vQPaBjdz11UuP9hQb9yKlO4slWqOA1Pfm8fxvHBkXJlP2MXLNAJdfEhjPxIiMatRpcvR78YVXyIjv2oSeisHbSIusgj6xE7apNNSYT8Uya2BCmMXKGUhIeS9%2FCugXtoSU%2F4ligswSnBfpMN9mEdl2SlVmiir4iQuUx4D8q8OGtZMBa%2Fmwljffp2M0irSzL6xDnpNObgYnhk4WlQltdSuqXxgjVwediS94tZ6R0tG%2Fy5A8GKyqBXzpCDDGutnEBjqkAYYaX11dsJ%2Bh3AqTgAsFLGOrWXE%2FKh6xPyTu6dw3%2FzvphzVYXewV%2FMpgJnrvu0ErGL1vmJDKGWnktCDgxax0aa02MjRnsSzO1BlCzWDU%2B50SdVn6nNvqMBH9b%2FbI18ZzLaE8trNTmwh0d4vXmHJOETgpMNVKjgNifTmpPi1E6ZHWAEL8R4y45klmQljGXe73RZOrjjp6yjYlcGmhm6LQT041Dfug&X-Amz-Signature=e89d0d0637e7fa8c294ce3c0983200bc0f47112d22f344d48698339d98d8bfef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Z7PHEV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCYYrhVseJ%2Fud2U%2FqjqHswmRzjjpTt48K6suO3Cz8xgLQIhAM2m%2BA0GaYw%2FWlZiQTmBRDZvQ5V%2BGiIpwUBx9wVZ0nwMKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5nYqw0NZkAb0%2Biqkq3APJWGWl1D0xDf4Zs%2BygpDhDDVXH6HwCpbFfgjzti5NtBBCKZkUAhw%2B%2BHQ%2BUFCeAynJd4RxH1QElF%2F4a%2FEZQMY23SUHFSQ6ZkPrJdMb6v6ClDPojWxMGyznDoAb0%2FpEDy7WilYrZwoAGFItrfgqYqwCOiw6kihPWwrGgxaEbemUr%2Bu4BCi4wJtKf1KQGIULG55cpq%2B2Lw4PkKkjpPt4t%2FULMgbJvFlnyoc2P0CDf0QI6kdX5AuTLcRmnijm7ObFyP4HdFg%2B%2FrF7nvcjdFqoshWSIuYgfHasxlGUVkjqlW6Voa5Hlh6ynOYsbBWwnD%2FGGWTgyXXr9pxEi3d6bgK4nEN59%2BKFR1BkOm%2FctN0wLc0lXM7H7yNvdIIPnBA2ZWVUZuujAJC6vQPaBjdz11UuP9hQb9yKlO4slWqOA1Pfm8fxvHBkXJlP2MXLNAJdfEhjPxIiMatRpcvR78YVXyIjv2oSeisHbSIusgj6xE7apNNSYT8Uya2BCmMXKGUhIeS9%2FCugXtoSU%2F4ligswSnBfpMN9mEdl2SlVmiir4iQuUx4D8q8OGtZMBa%2Fmwljffp2M0irSzL6xDnpNObgYnhk4WlQltdSuqXxgjVwediS94tZ6R0tG%2Fy5A8GKyqBXzpCDDGutnEBjqkAYYaX11dsJ%2Bh3AqTgAsFLGOrWXE%2FKh6xPyTu6dw3%2FzvphzVYXewV%2FMpgJnrvu0ErGL1vmJDKGWnktCDgxax0aa02MjRnsSzO1BlCzWDU%2B50SdVn6nNvqMBH9b%2FbI18ZzLaE8trNTmwh0d4vXmHJOETgpMNVKjgNifTmpPi1E6ZHWAEL8R4y45klmQljGXe73RZOrjjp6yjYlcGmhm6LQT041Dfug&X-Amz-Signature=ec2e306b9b26a06a48ea5f0bbe4c73eb7e29cdc0515897bdfd25c16511984630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
