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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTWQRCQ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDU60A0TB9vid7UgRU5PqXndpCCMZsFaFZARiQVbOfCgAIhAKj4MsWqi3xBLjHxdX5rjN2OsY7D%2F4%2B0T%2Bkh8vsdm9xFKv8DCHUQABoMNjM3NDIzMTgzODA1IgxP1MxoXL1yDKQ0S0Qq3ANri7JAEH04prlRw%2F%2FqOVlo0GdWTn8Vghj17FyxxLfFxE9A%2B7c1sXXtJxrqc8QZ16SiRljL3v6A%2F9msQr%2Bj7qTbsCwiqsRUJjaLLt81ynRxBB39DbiOk3x1FR%2FCs0VaL12GovzdCELqhZN35gX85x1%2BBTpFGP6beQp9RjqJVrf23aOkCCoDW8m%2BA1A7d7zqKfmdLFvUusg%2BdLuuS0JTlOj5z1Hl6UBdMkGtke4d8FN8eQ4aUTruEwgo%2BERIq%2BjSyW0083zcjn5LTy349GanOvJv2dlqJMieJfa5p7nPj5eTBq4qYWTuTkJVyvj8GjRK5pY9m%2FiwDi3tvFyz6RtuCQJkfm0EKr%2BFeK7nsEwLWHn%2FcckQYsZLe%2FamBWWbDZJxWEWKbD1IbGAZI1CBaqnDhfUPN3qlTf9QI%2BHP26ya28c6Hj5AGAqfsKHlGXs%2BmSTmCGN%2Fy0oNUySq5YUANH%2Fqe%2FX1NdtedR8ECfXtgAntMQw5MBNr2f1SWLxi2YvDszjFgjwHO2OBBCSOVMyox7nYDoJI25ZPzqLFMPIf3aTblZatqs3B12vA3CqmRkkkbcOBzCOeR%2FYdniUKc%2BNQvGjsLPrQGYlWQqZvwngVjIFZPfe%2FdPSM%2FZVm7GMsWEEe4jDA8Je9BjqkAdWdZuYhdBLxzoj3FKw3H0UwIhuaMFou25IfHbIzV4iBVi4PcH5qqK428lvP0fM3dk19FwALxrsi2ySkK3zVasFvA%2FCFxbYIMyxoFCmlfgJCBjHZR4pMYe5VNsLiqN0xXFQZ5tAcw0oR0K6Xh3wFXIn8wRLLALKvwKFpAqZjLsTd93A4OkC8FRuw4vOid9L6OET5G4P%2F6jXzn8JEdqy7dYKSj6lQ&X-Amz-Signature=aff10eb95e5f223b6dc8a647cc780adfa8a5befe6fca544ddafb4c6fd2e580b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTWQRCQ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDU60A0TB9vid7UgRU5PqXndpCCMZsFaFZARiQVbOfCgAIhAKj4MsWqi3xBLjHxdX5rjN2OsY7D%2F4%2B0T%2Bkh8vsdm9xFKv8DCHUQABoMNjM3NDIzMTgzODA1IgxP1MxoXL1yDKQ0S0Qq3ANri7JAEH04prlRw%2F%2FqOVlo0GdWTn8Vghj17FyxxLfFxE9A%2B7c1sXXtJxrqc8QZ16SiRljL3v6A%2F9msQr%2Bj7qTbsCwiqsRUJjaLLt81ynRxBB39DbiOk3x1FR%2FCs0VaL12GovzdCELqhZN35gX85x1%2BBTpFGP6beQp9RjqJVrf23aOkCCoDW8m%2BA1A7d7zqKfmdLFvUusg%2BdLuuS0JTlOj5z1Hl6UBdMkGtke4d8FN8eQ4aUTruEwgo%2BERIq%2BjSyW0083zcjn5LTy349GanOvJv2dlqJMieJfa5p7nPj5eTBq4qYWTuTkJVyvj8GjRK5pY9m%2FiwDi3tvFyz6RtuCQJkfm0EKr%2BFeK7nsEwLWHn%2FcckQYsZLe%2FamBWWbDZJxWEWKbD1IbGAZI1CBaqnDhfUPN3qlTf9QI%2BHP26ya28c6Hj5AGAqfsKHlGXs%2BmSTmCGN%2Fy0oNUySq5YUANH%2Fqe%2FX1NdtedR8ECfXtgAntMQw5MBNr2f1SWLxi2YvDszjFgjwHO2OBBCSOVMyox7nYDoJI25ZPzqLFMPIf3aTblZatqs3B12vA3CqmRkkkbcOBzCOeR%2FYdniUKc%2BNQvGjsLPrQGYlWQqZvwngVjIFZPfe%2FdPSM%2FZVm7GMsWEEe4jDA8Je9BjqkAdWdZuYhdBLxzoj3FKw3H0UwIhuaMFou25IfHbIzV4iBVi4PcH5qqK428lvP0fM3dk19FwALxrsi2ySkK3zVasFvA%2FCFxbYIMyxoFCmlfgJCBjHZR4pMYe5VNsLiqN0xXFQZ5tAcw0oR0K6Xh3wFXIn8wRLLALKvwKFpAqZjLsTd93A4OkC8FRuw4vOid9L6OET5G4P%2F6jXzn8JEdqy7dYKSj6lQ&X-Amz-Signature=ff30259c5928981500c828e81fdab0d1c24386ce9d5c6015a673a26a0c3cefb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTWQRCQ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDU60A0TB9vid7UgRU5PqXndpCCMZsFaFZARiQVbOfCgAIhAKj4MsWqi3xBLjHxdX5rjN2OsY7D%2F4%2B0T%2Bkh8vsdm9xFKv8DCHUQABoMNjM3NDIzMTgzODA1IgxP1MxoXL1yDKQ0S0Qq3ANri7JAEH04prlRw%2F%2FqOVlo0GdWTn8Vghj17FyxxLfFxE9A%2B7c1sXXtJxrqc8QZ16SiRljL3v6A%2F9msQr%2Bj7qTbsCwiqsRUJjaLLt81ynRxBB39DbiOk3x1FR%2FCs0VaL12GovzdCELqhZN35gX85x1%2BBTpFGP6beQp9RjqJVrf23aOkCCoDW8m%2BA1A7d7zqKfmdLFvUusg%2BdLuuS0JTlOj5z1Hl6UBdMkGtke4d8FN8eQ4aUTruEwgo%2BERIq%2BjSyW0083zcjn5LTy349GanOvJv2dlqJMieJfa5p7nPj5eTBq4qYWTuTkJVyvj8GjRK5pY9m%2FiwDi3tvFyz6RtuCQJkfm0EKr%2BFeK7nsEwLWHn%2FcckQYsZLe%2FamBWWbDZJxWEWKbD1IbGAZI1CBaqnDhfUPN3qlTf9QI%2BHP26ya28c6Hj5AGAqfsKHlGXs%2BmSTmCGN%2Fy0oNUySq5YUANH%2Fqe%2FX1NdtedR8ECfXtgAntMQw5MBNr2f1SWLxi2YvDszjFgjwHO2OBBCSOVMyox7nYDoJI25ZPzqLFMPIf3aTblZatqs3B12vA3CqmRkkkbcOBzCOeR%2FYdniUKc%2BNQvGjsLPrQGYlWQqZvwngVjIFZPfe%2FdPSM%2FZVm7GMsWEEe4jDA8Je9BjqkAdWdZuYhdBLxzoj3FKw3H0UwIhuaMFou25IfHbIzV4iBVi4PcH5qqK428lvP0fM3dk19FwALxrsi2ySkK3zVasFvA%2FCFxbYIMyxoFCmlfgJCBjHZR4pMYe5VNsLiqN0xXFQZ5tAcw0oR0K6Xh3wFXIn8wRLLALKvwKFpAqZjLsTd93A4OkC8FRuw4vOid9L6OET5G4P%2F6jXzn8JEdqy7dYKSj6lQ&X-Amz-Signature=7479782287d3b85960e4c7644abbe4f3eab80547e8466121d962d8ec77dd093d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
