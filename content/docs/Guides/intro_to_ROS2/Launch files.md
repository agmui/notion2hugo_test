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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFWYCBG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBu9ylGUO9LclnU5WVQJFvFFG9XJiuRTFZwutILr7SmvAiBYBvRG2qZ7ORtWK3im9MPj8z40%2F9jUANWpWMdUl5LDDyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAfIlVHy9ghN2Ss%2FVKtwDe06qB5WPZLBRzH%2BKkEd%2BB5JBIwqOhUgqY1I66LNg5R3%2BnjxR%2BphdNhYQ%2BaDsTsUEYRj%2FdENGBrQo%2BKuLtq1xx4tZ7GKShMcghQ5A%2BciXvOqKEJdfcfMmvavlADnJFwJqnxTkKgvNqPgxDkEWE4QBXjguEVYztp7%2FasbphAH5ROKgn0xHKDn3gqKNbnOBhGsDHZSRQs2FnJt5tQRCgNpf7ZfkDpXX0TlHKt%2FEnmFkR8dCdqyrtydEcDkCQnu9YAGRC04GZIosO2JonZTEjDwxjpLDNnFWm9kDKqkxw48CUgN%2FM3UJvKqcawJ917sQy8YdeyIRqbLClP2tX%2BFR5DHu6nNMHMykCX%2FgYNEShuBcRqflmS8yFUhybMV2TaG%2FQVyw8uop0kcb3%2FmYh0NGNPZvzejRvtAjGggumytfi8e790Cc3z5%2B8ODhk%2BUR7ATUpLmgvt%2FE2xca2BS%2FYR9juInnXtuD%2BzwHuh1fu5IBVqtTJwCTvKR3CawD5NuLpQR6aJ7VVI7Q4kt02snP3AuJBzVabIfa4fBf7hy3gb%2BEdRKAQ37%2BrNPcQIC95WIlwROrNefp5dvtgvxlH5C7OLc%2FZrW95Ap7JLJBcjWlQnP7sGFFv6Lu1wCkcIcKxfgIa4kwmN2uxAY6pgFKN8S7d7Wi4kIHcuQ9Y4y4g41ggJ4dzSaPkWEeqTdhAt2QbHqvYp7YIfuOEpB4pzasjMOJko0cqGeTSKwhN%2Fk5aAkJFYGAtlS%2FvLCohrE9z4srFwGoHj7Qy24K4572QHrEwdqyucd4%2Ber3x0FKHGDZlHK5BhNnGpS34uJ2ycqgAi%2BWX%2FVY6sxXYugoTRQuzBgBcKYUSHLWBoMxzjW7boi71RV9Y%2FpW&X-Amz-Signature=911e30d93b953e2b20b0b6beb10f83cf9b3201e4192bfc06bff3a5b3db93129b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFWYCBG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBu9ylGUO9LclnU5WVQJFvFFG9XJiuRTFZwutILr7SmvAiBYBvRG2qZ7ORtWK3im9MPj8z40%2F9jUANWpWMdUl5LDDyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAfIlVHy9ghN2Ss%2FVKtwDe06qB5WPZLBRzH%2BKkEd%2BB5JBIwqOhUgqY1I66LNg5R3%2BnjxR%2BphdNhYQ%2BaDsTsUEYRj%2FdENGBrQo%2BKuLtq1xx4tZ7GKShMcghQ5A%2BciXvOqKEJdfcfMmvavlADnJFwJqnxTkKgvNqPgxDkEWE4QBXjguEVYztp7%2FasbphAH5ROKgn0xHKDn3gqKNbnOBhGsDHZSRQs2FnJt5tQRCgNpf7ZfkDpXX0TlHKt%2FEnmFkR8dCdqyrtydEcDkCQnu9YAGRC04GZIosO2JonZTEjDwxjpLDNnFWm9kDKqkxw48CUgN%2FM3UJvKqcawJ917sQy8YdeyIRqbLClP2tX%2BFR5DHu6nNMHMykCX%2FgYNEShuBcRqflmS8yFUhybMV2TaG%2FQVyw8uop0kcb3%2FmYh0NGNPZvzejRvtAjGggumytfi8e790Cc3z5%2B8ODhk%2BUR7ATUpLmgvt%2FE2xca2BS%2FYR9juInnXtuD%2BzwHuh1fu5IBVqtTJwCTvKR3CawD5NuLpQR6aJ7VVI7Q4kt02snP3AuJBzVabIfa4fBf7hy3gb%2BEdRKAQ37%2BrNPcQIC95WIlwROrNefp5dvtgvxlH5C7OLc%2FZrW95Ap7JLJBcjWlQnP7sGFFv6Lu1wCkcIcKxfgIa4kwmN2uxAY6pgFKN8S7d7Wi4kIHcuQ9Y4y4g41ggJ4dzSaPkWEeqTdhAt2QbHqvYp7YIfuOEpB4pzasjMOJko0cqGeTSKwhN%2Fk5aAkJFYGAtlS%2FvLCohrE9z4srFwGoHj7Qy24K4572QHrEwdqyucd4%2Ber3x0FKHGDZlHK5BhNnGpS34uJ2ycqgAi%2BWX%2FVY6sxXYugoTRQuzBgBcKYUSHLWBoMxzjW7boi71RV9Y%2FpW&X-Amz-Signature=25ad4dea84e7943a49b33995e1130caed97c6c2a608ed913e71377d63bfd9eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFWYCBG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBu9ylGUO9LclnU5WVQJFvFFG9XJiuRTFZwutILr7SmvAiBYBvRG2qZ7ORtWK3im9MPj8z40%2F9jUANWpWMdUl5LDDyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAfIlVHy9ghN2Ss%2FVKtwDe06qB5WPZLBRzH%2BKkEd%2BB5JBIwqOhUgqY1I66LNg5R3%2BnjxR%2BphdNhYQ%2BaDsTsUEYRj%2FdENGBrQo%2BKuLtq1xx4tZ7GKShMcghQ5A%2BciXvOqKEJdfcfMmvavlADnJFwJqnxTkKgvNqPgxDkEWE4QBXjguEVYztp7%2FasbphAH5ROKgn0xHKDn3gqKNbnOBhGsDHZSRQs2FnJt5tQRCgNpf7ZfkDpXX0TlHKt%2FEnmFkR8dCdqyrtydEcDkCQnu9YAGRC04GZIosO2JonZTEjDwxjpLDNnFWm9kDKqkxw48CUgN%2FM3UJvKqcawJ917sQy8YdeyIRqbLClP2tX%2BFR5DHu6nNMHMykCX%2FgYNEShuBcRqflmS8yFUhybMV2TaG%2FQVyw8uop0kcb3%2FmYh0NGNPZvzejRvtAjGggumytfi8e790Cc3z5%2B8ODhk%2BUR7ATUpLmgvt%2FE2xca2BS%2FYR9juInnXtuD%2BzwHuh1fu5IBVqtTJwCTvKR3CawD5NuLpQR6aJ7VVI7Q4kt02snP3AuJBzVabIfa4fBf7hy3gb%2BEdRKAQ37%2BrNPcQIC95WIlwROrNefp5dvtgvxlH5C7OLc%2FZrW95Ap7JLJBcjWlQnP7sGFFv6Lu1wCkcIcKxfgIa4kwmN2uxAY6pgFKN8S7d7Wi4kIHcuQ9Y4y4g41ggJ4dzSaPkWEeqTdhAt2QbHqvYp7YIfuOEpB4pzasjMOJko0cqGeTSKwhN%2Fk5aAkJFYGAtlS%2FvLCohrE9z4srFwGoHj7Qy24K4572QHrEwdqyucd4%2Ber3x0FKHGDZlHK5BhNnGpS34uJ2ycqgAi%2BWX%2FVY6sxXYugoTRQuzBgBcKYUSHLWBoMxzjW7boi71RV9Y%2FpW&X-Amz-Signature=65b65e7d39285af950784e1da78f3fc3903a6d7841e0410ddd0503da419e4f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
