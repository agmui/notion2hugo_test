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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GP2JWDR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDqtBvokusHnkOvYlWSLwNMKn7%2F7s7nN%2Fu8LZwWp9sb4AiBd3tAwB%2FRW1n9gyXbrcAcpPeC39TT6bZ%2F0cfjhqh9qSyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM3dbAMwooKTjtuQXqKtwDB6g8AF7caqXD1IA3M8TyiOHb6yCqSq72jkbjwZE1cCLYhOnG0DKlR1dqeQHskjlUqY5wK%2FeSA9MvyC%2BGyIOVJOAZhB81It4Uf%2BU8xB8dDGsEQR4roS3WHo4wWkMYZm%2FIzENdKv7U3r2K%2BmfybbWx5NVyTWQ1fXd5XVzLwlYDLnbE6MQlcuGFGMBTtWMNAKl7RvCkStZ1xeuzZfsWTguk%2FJQy%2BjEMjVpf2jqDdZAN0wiGxjvRZBZj%2FAfCwwuPEBJo9RevtyvyaMiVM0Ikl8DQ3r2xVKnx9NQJacYdL9rdChtaDpo9HXM1V60zhLeDcDmuL2c58tU4mp0uuMU8nJlqRPltVfttLenjW6Fiv%2BL9q0ro8IYBMQ%2BiOpTU2Asw3mj6WY98DpQpWsjWlUQJXfC5IVTSi1NHEb6rR2k6JRScqsaK6dSxrf3kjIAHirtY%2BTIGAZbluICoSJSHqh4qytLK5EFLWvARu65%2BxJCSB83Df0vxPpJAmNs4aqEh3v9yJuRvKZgzqn5xoDn1zdtKQMrCVS8hOYwIR7BWB53SEJWWKi5TD3hAareyC3W51%2BrJJZdYtaI44B3ZVtcSuD5B9xrW2iif1kHh%2B3jktroT89c%2BsU%2FszQDIxGmXDKFlbUMw2beuwwY6pgHeGQj2hknwQDf6K3WGm4zV%2FubuVY5qpX%2BRkizYjgZ%2FF1PH9eHnZqwfROEXqQhMKXw6M3OHzoDWOuW8lYCnKpUj6YgIutyGatgWDhV76HAhnaS8t7pIVrTIKdOp5I40Ea8XJrdWCLw8gfmVKV8mvMIM6jRC1etnMBgLUl6zVs9a%2FgbPyLWX33kM8A3BtLTV3U%2F%2B3DhJPXLrckmBaBvs3C1iJnPaI08y&X-Amz-Signature=c1e3826fdf3eec5fb67ae362c761a626b1ef6d03f154c2492d419a71c6d2091d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GP2JWDR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDqtBvokusHnkOvYlWSLwNMKn7%2F7s7nN%2Fu8LZwWp9sb4AiBd3tAwB%2FRW1n9gyXbrcAcpPeC39TT6bZ%2F0cfjhqh9qSyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM3dbAMwooKTjtuQXqKtwDB6g8AF7caqXD1IA3M8TyiOHb6yCqSq72jkbjwZE1cCLYhOnG0DKlR1dqeQHskjlUqY5wK%2FeSA9MvyC%2BGyIOVJOAZhB81It4Uf%2BU8xB8dDGsEQR4roS3WHo4wWkMYZm%2FIzENdKv7U3r2K%2BmfybbWx5NVyTWQ1fXd5XVzLwlYDLnbE6MQlcuGFGMBTtWMNAKl7RvCkStZ1xeuzZfsWTguk%2FJQy%2BjEMjVpf2jqDdZAN0wiGxjvRZBZj%2FAfCwwuPEBJo9RevtyvyaMiVM0Ikl8DQ3r2xVKnx9NQJacYdL9rdChtaDpo9HXM1V60zhLeDcDmuL2c58tU4mp0uuMU8nJlqRPltVfttLenjW6Fiv%2BL9q0ro8IYBMQ%2BiOpTU2Asw3mj6WY98DpQpWsjWlUQJXfC5IVTSi1NHEb6rR2k6JRScqsaK6dSxrf3kjIAHirtY%2BTIGAZbluICoSJSHqh4qytLK5EFLWvARu65%2BxJCSB83Df0vxPpJAmNs4aqEh3v9yJuRvKZgzqn5xoDn1zdtKQMrCVS8hOYwIR7BWB53SEJWWKi5TD3hAareyC3W51%2BrJJZdYtaI44B3ZVtcSuD5B9xrW2iif1kHh%2B3jktroT89c%2BsU%2FszQDIxGmXDKFlbUMw2beuwwY6pgHeGQj2hknwQDf6K3WGm4zV%2FubuVY5qpX%2BRkizYjgZ%2FF1PH9eHnZqwfROEXqQhMKXw6M3OHzoDWOuW8lYCnKpUj6YgIutyGatgWDhV76HAhnaS8t7pIVrTIKdOp5I40Ea8XJrdWCLw8gfmVKV8mvMIM6jRC1etnMBgLUl6zVs9a%2FgbPyLWX33kM8A3BtLTV3U%2F%2B3DhJPXLrckmBaBvs3C1iJnPaI08y&X-Amz-Signature=1179e6432785de126571092a785fbfff56556bb784fb95b6200a7423a4251675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GP2JWDR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDqtBvokusHnkOvYlWSLwNMKn7%2F7s7nN%2Fu8LZwWp9sb4AiBd3tAwB%2FRW1n9gyXbrcAcpPeC39TT6bZ%2F0cfjhqh9qSyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM3dbAMwooKTjtuQXqKtwDB6g8AF7caqXD1IA3M8TyiOHb6yCqSq72jkbjwZE1cCLYhOnG0DKlR1dqeQHskjlUqY5wK%2FeSA9MvyC%2BGyIOVJOAZhB81It4Uf%2BU8xB8dDGsEQR4roS3WHo4wWkMYZm%2FIzENdKv7U3r2K%2BmfybbWx5NVyTWQ1fXd5XVzLwlYDLnbE6MQlcuGFGMBTtWMNAKl7RvCkStZ1xeuzZfsWTguk%2FJQy%2BjEMjVpf2jqDdZAN0wiGxjvRZBZj%2FAfCwwuPEBJo9RevtyvyaMiVM0Ikl8DQ3r2xVKnx9NQJacYdL9rdChtaDpo9HXM1V60zhLeDcDmuL2c58tU4mp0uuMU8nJlqRPltVfttLenjW6Fiv%2BL9q0ro8IYBMQ%2BiOpTU2Asw3mj6WY98DpQpWsjWlUQJXfC5IVTSi1NHEb6rR2k6JRScqsaK6dSxrf3kjIAHirtY%2BTIGAZbluICoSJSHqh4qytLK5EFLWvARu65%2BxJCSB83Df0vxPpJAmNs4aqEh3v9yJuRvKZgzqn5xoDn1zdtKQMrCVS8hOYwIR7BWB53SEJWWKi5TD3hAareyC3W51%2BrJJZdYtaI44B3ZVtcSuD5B9xrW2iif1kHh%2B3jktroT89c%2BsU%2FszQDIxGmXDKFlbUMw2beuwwY6pgHeGQj2hknwQDf6K3WGm4zV%2FubuVY5qpX%2BRkizYjgZ%2FF1PH9eHnZqwfROEXqQhMKXw6M3OHzoDWOuW8lYCnKpUj6YgIutyGatgWDhV76HAhnaS8t7pIVrTIKdOp5I40Ea8XJrdWCLw8gfmVKV8mvMIM6jRC1etnMBgLUl6zVs9a%2FgbPyLWX33kM8A3BtLTV3U%2F%2B3DhJPXLrckmBaBvs3C1iJnPaI08y&X-Amz-Signature=4db739e6199b38041df5ef4e815b4c529bf3b94e2334dbc39265ffd49b6635d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
