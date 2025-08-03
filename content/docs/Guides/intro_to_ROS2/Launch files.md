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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HLQPKL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3%2FyTadySrUdT9v6fOmysJUGF0y7ZKTJ7m%2FpMnbq7MEAiEA8xlNKD%2B6P1nkY94%2BIWoccORUphqOnO3T83kLk8YFsXYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL1%2Be0glFoXfHzeIACrcAz2JnOqRsVYs2qQ9LSdB3bOhrKEaiR5JDXB6fdTLKPrMBvk5xRAX1fKbwit84S21nKdnVqpptmfJLg8Ke2JvOxTNit7AwzREgcll%2BwbKusnBRJ7004eaZgy5KDmfGaXjzHlfHKn2fx%2Fpp5oFIIHWkEuUnbk5XGmTnQGXSNGxNNnkoySjzSxbIXF255Ia7oHeykHnBX0sI6tI%2Fa5aAIU%2Bpg%2Bm6mb%2FJH6PqmpKZIaX3TI0JxCXa1cq6lFYekyrt8PUVsOHY4oth6dX3VZiXRCFvDf8wPlm9iR9pAiG6Nx6mn32xH6rLZDQPyF516f1jR56elxWI7oXEoZm1GTbVqq7ClJrPzzEH3XFXUrAJ%2Fma4xJy%2B9jkuNKlkrn3BfwvP3AANyo9W6MGYvz%2B68Pj6fcdxAILYTtZO276dXAakwTaNpA8sx9nF6czSsaCW5iIbc3Bwpj6iNHLYxUO0VHt%2BrgPVQU5Xo7NY9XKNSTmM0UQwnZBlBy%2BRurGV5Qe8spoyUiHOSyjFIJJfeWP8cVXFXK9zxbCV419blX55Ld5Ia61r0xPBvd7hWdXtG0eIZMfhgVS9BDRj6R9KjFp78qvXp2WE0%2Bw4pOrV6uz%2BQ6f1WXMxKM%2BF3bRTG%2F3ZNdwz6x9ML2hu8QGOqUBxcf7LzurOEjAJkUYK6heBmu79KJcIe7nGKuvhiwiXqCnuttH7vTcb4xg2eF2i7Idr8UIHc7BzxHM%2BjBK0bx9DIaAlywkAt5FPKnm67H3%2FPwUS%2BVvbcGdGhcReOHYBALuHcSXtAgVy4tZn5YMKdXfdV4jSpitXrjaeilkIhz63oLC5GqUm0LN0t2ZlIDvTfUQuP0bJGo9wyYjUiMiIGL8mtfsPFhE&X-Amz-Signature=6c08d3bea5d129e1ad4d2537a3723b9cbfdb49b8b57ffdffab9c7695d6fe92a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HLQPKL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3%2FyTadySrUdT9v6fOmysJUGF0y7ZKTJ7m%2FpMnbq7MEAiEA8xlNKD%2B6P1nkY94%2BIWoccORUphqOnO3T83kLk8YFsXYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL1%2Be0glFoXfHzeIACrcAz2JnOqRsVYs2qQ9LSdB3bOhrKEaiR5JDXB6fdTLKPrMBvk5xRAX1fKbwit84S21nKdnVqpptmfJLg8Ke2JvOxTNit7AwzREgcll%2BwbKusnBRJ7004eaZgy5KDmfGaXjzHlfHKn2fx%2Fpp5oFIIHWkEuUnbk5XGmTnQGXSNGxNNnkoySjzSxbIXF255Ia7oHeykHnBX0sI6tI%2Fa5aAIU%2Bpg%2Bm6mb%2FJH6PqmpKZIaX3TI0JxCXa1cq6lFYekyrt8PUVsOHY4oth6dX3VZiXRCFvDf8wPlm9iR9pAiG6Nx6mn32xH6rLZDQPyF516f1jR56elxWI7oXEoZm1GTbVqq7ClJrPzzEH3XFXUrAJ%2Fma4xJy%2B9jkuNKlkrn3BfwvP3AANyo9W6MGYvz%2B68Pj6fcdxAILYTtZO276dXAakwTaNpA8sx9nF6czSsaCW5iIbc3Bwpj6iNHLYxUO0VHt%2BrgPVQU5Xo7NY9XKNSTmM0UQwnZBlBy%2BRurGV5Qe8spoyUiHOSyjFIJJfeWP8cVXFXK9zxbCV419blX55Ld5Ia61r0xPBvd7hWdXtG0eIZMfhgVS9BDRj6R9KjFp78qvXp2WE0%2Bw4pOrV6uz%2BQ6f1WXMxKM%2BF3bRTG%2F3ZNdwz6x9ML2hu8QGOqUBxcf7LzurOEjAJkUYK6heBmu79KJcIe7nGKuvhiwiXqCnuttH7vTcb4xg2eF2i7Idr8UIHc7BzxHM%2BjBK0bx9DIaAlywkAt5FPKnm67H3%2FPwUS%2BVvbcGdGhcReOHYBALuHcSXtAgVy4tZn5YMKdXfdV4jSpitXrjaeilkIhz63oLC5GqUm0LN0t2ZlIDvTfUQuP0bJGo9wyYjUiMiIGL8mtfsPFhE&X-Amz-Signature=037244d8aa718a2430ee21e6a0c3c67c5fd890f89a1ba5b2dd3fb3f0420c774c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HLQPKL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3%2FyTadySrUdT9v6fOmysJUGF0y7ZKTJ7m%2FpMnbq7MEAiEA8xlNKD%2B6P1nkY94%2BIWoccORUphqOnO3T83kLk8YFsXYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL1%2Be0glFoXfHzeIACrcAz2JnOqRsVYs2qQ9LSdB3bOhrKEaiR5JDXB6fdTLKPrMBvk5xRAX1fKbwit84S21nKdnVqpptmfJLg8Ke2JvOxTNit7AwzREgcll%2BwbKusnBRJ7004eaZgy5KDmfGaXjzHlfHKn2fx%2Fpp5oFIIHWkEuUnbk5XGmTnQGXSNGxNNnkoySjzSxbIXF255Ia7oHeykHnBX0sI6tI%2Fa5aAIU%2Bpg%2Bm6mb%2FJH6PqmpKZIaX3TI0JxCXa1cq6lFYekyrt8PUVsOHY4oth6dX3VZiXRCFvDf8wPlm9iR9pAiG6Nx6mn32xH6rLZDQPyF516f1jR56elxWI7oXEoZm1GTbVqq7ClJrPzzEH3XFXUrAJ%2Fma4xJy%2B9jkuNKlkrn3BfwvP3AANyo9W6MGYvz%2B68Pj6fcdxAILYTtZO276dXAakwTaNpA8sx9nF6czSsaCW5iIbc3Bwpj6iNHLYxUO0VHt%2BrgPVQU5Xo7NY9XKNSTmM0UQwnZBlBy%2BRurGV5Qe8spoyUiHOSyjFIJJfeWP8cVXFXK9zxbCV419blX55Ld5Ia61r0xPBvd7hWdXtG0eIZMfhgVS9BDRj6R9KjFp78qvXp2WE0%2Bw4pOrV6uz%2BQ6f1WXMxKM%2BF3bRTG%2F3ZNdwz6x9ML2hu8QGOqUBxcf7LzurOEjAJkUYK6heBmu79KJcIe7nGKuvhiwiXqCnuttH7vTcb4xg2eF2i7Idr8UIHc7BzxHM%2BjBK0bx9DIaAlywkAt5FPKnm67H3%2FPwUS%2BVvbcGdGhcReOHYBALuHcSXtAgVy4tZn5YMKdXfdV4jSpitXrjaeilkIhz63oLC5GqUm0LN0t2ZlIDvTfUQuP0bJGo9wyYjUiMiIGL8mtfsPFhE&X-Amz-Signature=a2491279961ab0c044d90c20a12fe56bc143328b1ddd543711c6aecba553a8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
