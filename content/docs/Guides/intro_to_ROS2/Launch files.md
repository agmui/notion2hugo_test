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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPF4POX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCBFRZikYBE9gDlfgyPUux9gk5sXBjK9ZEyPGoTqJ0nwQIhAIjfg3kkMcMsqQRmKU8YAIC7E2lYJoBfmC1ZdFoGd59LKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi0eczjNYfQZxij3Mq3AOWJAvLsVIx9lEWfLhPCtwUufDKNYQZ4a4VFQZ1o%2BRLQ%2FtwhjXkLXdukhLfSlXkveseckYcaIzOsPEAWD0v7tGaaYp8wtjHfUHjguLD6bNgl9qxhJu5cRIyUFBaWMgze%2BFAk9ieWeUIv5x1h1kmLcS8MIR0brBnlERUZF67fJJdxwjRG97AtYV%2F%2F44%2BeM0833iTYK0%2FkavRCQXg4PRwLOXZNhEVBopQJrqryRKg3Rs%2FCRlcL%2FlCEKsT7xE0HkuU2IRoWW33%2B1JBWzTo%2Fg%2BgeJIbNnFc3OFzArXDKQuJZW3%2F61qJs3oP4LPEw2OaqOBXGfRxm5eiyE7WY7GS08a5kNo9HtkoRylfEJoNIwYIygdUNLYCCoKGMk6PEclACB2nErjHXAQkyxJNjj%2Br5ttpdRkXuEpbNMlyCKVbQ01SPd6I6xJ5x6YSteiU5x1Whbgh53Nrf2w4xqAZOONnYJzKHnVfeYKgIES3nP9y%2B67UDErhgy6%2BnoO4vucMLuK5VH%2BhkP9LnrMwiia3XuVMH1ZqjtMhlHNMvAN2VP%2BnuW4iB0Hq9dJQboHpQQASWkyzlFAKHf4AhNYemq%2BAH8u8lgmNcQLyUSg5RJW17ARCoEx%2FohjS5Yc%2BLg9rlcZe%2BK1inzDJ4vfBBjqkAeFcLaKfqpiXgb5OWb%2BNf21bv8qSM3XmanG9A8aXSZfRrGKXtBDSYqM4QAokfOgsUs1hpbO3EqAD9MzIOBwT2K%2FVoDUUxaPmoy%2FZbKyJ9CHBy0%2F1Q8bJ3MgTfBD3Y1LgJZOeidlHPsnjFzlMoinV0fEMAwqc%2FgWbNgsahF8Dp%2FifoKrYvOxG7NR8GYWFBwXSGFKDWAgP4CiS%2FyQQl9G7MyvIGzqp&X-Amz-Signature=7cfb56f130c049a03b8a89e13c4100d3d7bc787a820425de0043c513762caa05&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPF4POX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCBFRZikYBE9gDlfgyPUux9gk5sXBjK9ZEyPGoTqJ0nwQIhAIjfg3kkMcMsqQRmKU8YAIC7E2lYJoBfmC1ZdFoGd59LKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi0eczjNYfQZxij3Mq3AOWJAvLsVIx9lEWfLhPCtwUufDKNYQZ4a4VFQZ1o%2BRLQ%2FtwhjXkLXdukhLfSlXkveseckYcaIzOsPEAWD0v7tGaaYp8wtjHfUHjguLD6bNgl9qxhJu5cRIyUFBaWMgze%2BFAk9ieWeUIv5x1h1kmLcS8MIR0brBnlERUZF67fJJdxwjRG97AtYV%2F%2F44%2BeM0833iTYK0%2FkavRCQXg4PRwLOXZNhEVBopQJrqryRKg3Rs%2FCRlcL%2FlCEKsT7xE0HkuU2IRoWW33%2B1JBWzTo%2Fg%2BgeJIbNnFc3OFzArXDKQuJZW3%2F61qJs3oP4LPEw2OaqOBXGfRxm5eiyE7WY7GS08a5kNo9HtkoRylfEJoNIwYIygdUNLYCCoKGMk6PEclACB2nErjHXAQkyxJNjj%2Br5ttpdRkXuEpbNMlyCKVbQ01SPd6I6xJ5x6YSteiU5x1Whbgh53Nrf2w4xqAZOONnYJzKHnVfeYKgIES3nP9y%2B67UDErhgy6%2BnoO4vucMLuK5VH%2BhkP9LnrMwiia3XuVMH1ZqjtMhlHNMvAN2VP%2BnuW4iB0Hq9dJQboHpQQASWkyzlFAKHf4AhNYemq%2BAH8u8lgmNcQLyUSg5RJW17ARCoEx%2FohjS5Yc%2BLg9rlcZe%2BK1inzDJ4vfBBjqkAeFcLaKfqpiXgb5OWb%2BNf21bv8qSM3XmanG9A8aXSZfRrGKXtBDSYqM4QAokfOgsUs1hpbO3EqAD9MzIOBwT2K%2FVoDUUxaPmoy%2FZbKyJ9CHBy0%2F1Q8bJ3MgTfBD3Y1LgJZOeidlHPsnjFzlMoinV0fEMAwqc%2FgWbNgsahF8Dp%2FifoKrYvOxG7NR8GYWFBwXSGFKDWAgP4CiS%2FyQQl9G7MyvIGzqp&X-Amz-Signature=9744b278b88b93888ef618f4d89a0bd2839e08c1b6755be3aa080e3ba7ed703d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPF4POX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCBFRZikYBE9gDlfgyPUux9gk5sXBjK9ZEyPGoTqJ0nwQIhAIjfg3kkMcMsqQRmKU8YAIC7E2lYJoBfmC1ZdFoGd59LKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi0eczjNYfQZxij3Mq3AOWJAvLsVIx9lEWfLhPCtwUufDKNYQZ4a4VFQZ1o%2BRLQ%2FtwhjXkLXdukhLfSlXkveseckYcaIzOsPEAWD0v7tGaaYp8wtjHfUHjguLD6bNgl9qxhJu5cRIyUFBaWMgze%2BFAk9ieWeUIv5x1h1kmLcS8MIR0brBnlERUZF67fJJdxwjRG97AtYV%2F%2F44%2BeM0833iTYK0%2FkavRCQXg4PRwLOXZNhEVBopQJrqryRKg3Rs%2FCRlcL%2FlCEKsT7xE0HkuU2IRoWW33%2B1JBWzTo%2Fg%2BgeJIbNnFc3OFzArXDKQuJZW3%2F61qJs3oP4LPEw2OaqOBXGfRxm5eiyE7WY7GS08a5kNo9HtkoRylfEJoNIwYIygdUNLYCCoKGMk6PEclACB2nErjHXAQkyxJNjj%2Br5ttpdRkXuEpbNMlyCKVbQ01SPd6I6xJ5x6YSteiU5x1Whbgh53Nrf2w4xqAZOONnYJzKHnVfeYKgIES3nP9y%2B67UDErhgy6%2BnoO4vucMLuK5VH%2BhkP9LnrMwiia3XuVMH1ZqjtMhlHNMvAN2VP%2BnuW4iB0Hq9dJQboHpQQASWkyzlFAKHf4AhNYemq%2BAH8u8lgmNcQLyUSg5RJW17ARCoEx%2FohjS5Yc%2BLg9rlcZe%2BK1inzDJ4vfBBjqkAeFcLaKfqpiXgb5OWb%2BNf21bv8qSM3XmanG9A8aXSZfRrGKXtBDSYqM4QAokfOgsUs1hpbO3EqAD9MzIOBwT2K%2FVoDUUxaPmoy%2FZbKyJ9CHBy0%2F1Q8bJ3MgTfBD3Y1LgJZOeidlHPsnjFzlMoinV0fEMAwqc%2FgWbNgsahF8Dp%2FifoKrYvOxG7NR8GYWFBwXSGFKDWAgP4CiS%2FyQQl9G7MyvIGzqp&X-Amz-Signature=c221ec3f546dd996a8f855ed916de2ec6642b3fc4b8121754e9c3a83389aa2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
