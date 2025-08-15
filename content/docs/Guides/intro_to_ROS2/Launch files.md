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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDJODAU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICugCMh%2BaQmD%2BlhmrK5Wi4zXo6nWuClfluqsiD49RHW4AiEAyWX8qOH89vDzUAZZafl7DQhkN4w7QYeYiL0CLWbzdCYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNA25Ppb5QJEM7M3ESrcA9GwPfsbHF0V9PG7r%2B7iba9eti3P7tZHIvF12NNFB5fdMrVUH%2Fdo232IEPdS7%2FDxC2B7COitdPwfjpxwBsDhJJxfTYcOAljubg10v3b3yZ4cvOkVIgXUCtjMKB8F%2FLZcAEI%2FwP79VqjIt%2Ft%2FHMgFMLGyaSOzgUJ1jR71y%2BCQz7VFgn3F9yoLy6u7mVnkkUSrobLXWKOmz19TXiL0%2FUO5y6%2Bmtrq2d4Y5nI9wNkb9PD06GNMgGdaGNa7UGOZPq0BdA0SgjzzOABBno7PbcUzE5XKCELVwctsmtpJMKqQPIGBWlN%2FkA2aCH0u2fW8%2B033qtRwMs2ic4jgDZmTlVEFIRPGyZX%2BBrkjJGSxtzuxKidUmyY%2BgfhRXnCAUQfvs5RlSXnzzByvEZPFYxIm7fpx0qDLX20j1kmO11qi04UQiUSvkIeImZPAUaVdiN21lxdjoLx2S6ny1ld07fDiXgIHcr6FLA5cRfDhBJe5CddUc0AnpWipKXUxdE1i59RScQ7%2FFKmgRElg6b8QLZ2JN0KZ%2Fty3KGQ9KzVvCwBIQn0yagy7pSpf1N3%2BnyskI9N3OexwBeA8hxGloKf5oTZlDcIC%2Fq9JYYzslzFOVFPSH533l%2FQX1yfDWN0Vvu2MjDzf1MIOj%2BsQGOqUBbjbWK6bnYA4ur0BkZScd1JRhHByibmifxrJ7vnnsVZNR%2BY8D1AGQbFKSjsHgnwFTgirxQxM0XlBdCzu%2BCgJkB78dVjjJsRSTwOjxO0mENBf9jAJthDkp1wcmrEV9ON7gCiz92g5nGy%2FJlbuXxiUohH422GYel0kdHQM0nFcIAmOg9l1RcPZszm7gSI05RrfOztOjHFCTp0sXZ%2Bg0C4vs7rlUcjEJ&X-Amz-Signature=a88d8165431773e1da34e30263250292dff1f20ba84aaba340f3e757ff7388a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDJODAU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICugCMh%2BaQmD%2BlhmrK5Wi4zXo6nWuClfluqsiD49RHW4AiEAyWX8qOH89vDzUAZZafl7DQhkN4w7QYeYiL0CLWbzdCYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNA25Ppb5QJEM7M3ESrcA9GwPfsbHF0V9PG7r%2B7iba9eti3P7tZHIvF12NNFB5fdMrVUH%2Fdo232IEPdS7%2FDxC2B7COitdPwfjpxwBsDhJJxfTYcOAljubg10v3b3yZ4cvOkVIgXUCtjMKB8F%2FLZcAEI%2FwP79VqjIt%2Ft%2FHMgFMLGyaSOzgUJ1jR71y%2BCQz7VFgn3F9yoLy6u7mVnkkUSrobLXWKOmz19TXiL0%2FUO5y6%2Bmtrq2d4Y5nI9wNkb9PD06GNMgGdaGNa7UGOZPq0BdA0SgjzzOABBno7PbcUzE5XKCELVwctsmtpJMKqQPIGBWlN%2FkA2aCH0u2fW8%2B033qtRwMs2ic4jgDZmTlVEFIRPGyZX%2BBrkjJGSxtzuxKidUmyY%2BgfhRXnCAUQfvs5RlSXnzzByvEZPFYxIm7fpx0qDLX20j1kmO11qi04UQiUSvkIeImZPAUaVdiN21lxdjoLx2S6ny1ld07fDiXgIHcr6FLA5cRfDhBJe5CddUc0AnpWipKXUxdE1i59RScQ7%2FFKmgRElg6b8QLZ2JN0KZ%2Fty3KGQ9KzVvCwBIQn0yagy7pSpf1N3%2BnyskI9N3OexwBeA8hxGloKf5oTZlDcIC%2Fq9JYYzslzFOVFPSH533l%2FQX1yfDWN0Vvu2MjDzf1MIOj%2BsQGOqUBbjbWK6bnYA4ur0BkZScd1JRhHByibmifxrJ7vnnsVZNR%2BY8D1AGQbFKSjsHgnwFTgirxQxM0XlBdCzu%2BCgJkB78dVjjJsRSTwOjxO0mENBf9jAJthDkp1wcmrEV9ON7gCiz92g5nGy%2FJlbuXxiUohH422GYel0kdHQM0nFcIAmOg9l1RcPZszm7gSI05RrfOztOjHFCTp0sXZ%2Bg0C4vs7rlUcjEJ&X-Amz-Signature=e2e61d1239bcf17c2bf60e7f561c1c3b0a5131dcfa9d66b2fd31d54d3067f180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDJODAU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICugCMh%2BaQmD%2BlhmrK5Wi4zXo6nWuClfluqsiD49RHW4AiEAyWX8qOH89vDzUAZZafl7DQhkN4w7QYeYiL0CLWbzdCYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNA25Ppb5QJEM7M3ESrcA9GwPfsbHF0V9PG7r%2B7iba9eti3P7tZHIvF12NNFB5fdMrVUH%2Fdo232IEPdS7%2FDxC2B7COitdPwfjpxwBsDhJJxfTYcOAljubg10v3b3yZ4cvOkVIgXUCtjMKB8F%2FLZcAEI%2FwP79VqjIt%2Ft%2FHMgFMLGyaSOzgUJ1jR71y%2BCQz7VFgn3F9yoLy6u7mVnkkUSrobLXWKOmz19TXiL0%2FUO5y6%2Bmtrq2d4Y5nI9wNkb9PD06GNMgGdaGNa7UGOZPq0BdA0SgjzzOABBno7PbcUzE5XKCELVwctsmtpJMKqQPIGBWlN%2FkA2aCH0u2fW8%2B033qtRwMs2ic4jgDZmTlVEFIRPGyZX%2BBrkjJGSxtzuxKidUmyY%2BgfhRXnCAUQfvs5RlSXnzzByvEZPFYxIm7fpx0qDLX20j1kmO11qi04UQiUSvkIeImZPAUaVdiN21lxdjoLx2S6ny1ld07fDiXgIHcr6FLA5cRfDhBJe5CddUc0AnpWipKXUxdE1i59RScQ7%2FFKmgRElg6b8QLZ2JN0KZ%2Fty3KGQ9KzVvCwBIQn0yagy7pSpf1N3%2BnyskI9N3OexwBeA8hxGloKf5oTZlDcIC%2Fq9JYYzslzFOVFPSH533l%2FQX1yfDWN0Vvu2MjDzf1MIOj%2BsQGOqUBbjbWK6bnYA4ur0BkZScd1JRhHByibmifxrJ7vnnsVZNR%2BY8D1AGQbFKSjsHgnwFTgirxQxM0XlBdCzu%2BCgJkB78dVjjJsRSTwOjxO0mENBf9jAJthDkp1wcmrEV9ON7gCiz92g5nGy%2FJlbuXxiUohH422GYel0kdHQM0nFcIAmOg9l1RcPZszm7gSI05RrfOztOjHFCTp0sXZ%2Bg0C4vs7rlUcjEJ&X-Amz-Signature=7cb8f1c145a218b05dafeab93d0c180a77a46f77a76b4ab5b7dde447b08083b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
