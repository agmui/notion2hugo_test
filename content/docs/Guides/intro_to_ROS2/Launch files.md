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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWVP4BT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIE%2FKdr60qUhJXAnNPSV8xJVZSsk37X7MSsXSEy8SYtkBAiB9xgy3mp6nQH79bLAxA44REldJh3%2BQexYBU8YIvG7JFir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMfKhfn%2FKfyOeMHmssKtwDoKbGNN2cp8D22RE2Pv%2FxhcZdtJ8hfEgN6XlgcjKpQdNsFwFCtej7dACFFCWX%2Flfdv5fIlLJsT%2FS5sLu3OJHQJbKeTwj%2FyG6gdIzL8WmcuzBYd7URsXG%2FdiMINvnLQhZojJ%2FoLiHczbVc1JuwGuvbNfxdtulT7XG4bfI1%2FCFotRfulZEH1bDOFLO3aPF2Zn5BB32S6VlCgh17nrJx2BAdfT6zwYD1vZQbTd1Zr%2FZk3fvvKX6sQgWeOA01e%2Bew%2FUL81SRAgXKfuxyCq3YS5j3A5tu6dZ5nPnLgA2X5x4TskqZFb3JGH9YWaQLVeNAWV4NBHCfUiNi%2FZk6aWGfBetrVUZV1MOgM2zqeFMHJmXY%2BWpp5LLZ2rHSSu0D4ncT0traIv1mZ9xotVTfyiuiswfAANNpj0KJWTeool32YmMjzqSrx0yWZBGL17J8BEJxjosz3opWkVuw9bmlRxZoP7rZJTAE7tty3QXbfcO9BftjGdcwgOmV0cB4EvVNP9avdnHwfB6y5xMp8Ik37KS9PhwVyuKUAUXc%2B%2FwhJvLefn6fXUnnZPVrZRebDv4gbKS2WuYx9Egl2z%2FwvbR4ejfCTHfbqiAvdqqr%2Fs1R0buyRJ301MUjBHTvCPQFBFlOjPhIwmPPkwgY6pgG7rEdYFRxiWBHAGxdu1dFk8SYeBtbvycM2atwepR5%2F4gKiS9YgTCSWpFSEDH4672hySeLTYbePvFvCexVI2MC0pxsU4mN%2BGZX4hHm7jWE9ddGWpPPV%2BXKCCjBchYq3JiaHye%2FbFACIWbBtuMEYPEM0I1pr6VC%2BMdFJU0tGE2i83H0YHDMGBlSZMDMMiqvGTh4TLaVzeXhM8p1QoGeSxIhIdZoo0dk%2B&X-Amz-Signature=3edf8a12a6b4c83ef0c2bb0cd2daa57aaf979d0d05ad3a9f7979dc1754a0b4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWVP4BT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIE%2FKdr60qUhJXAnNPSV8xJVZSsk37X7MSsXSEy8SYtkBAiB9xgy3mp6nQH79bLAxA44REldJh3%2BQexYBU8YIvG7JFir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMfKhfn%2FKfyOeMHmssKtwDoKbGNN2cp8D22RE2Pv%2FxhcZdtJ8hfEgN6XlgcjKpQdNsFwFCtej7dACFFCWX%2Flfdv5fIlLJsT%2FS5sLu3OJHQJbKeTwj%2FyG6gdIzL8WmcuzBYd7URsXG%2FdiMINvnLQhZojJ%2FoLiHczbVc1JuwGuvbNfxdtulT7XG4bfI1%2FCFotRfulZEH1bDOFLO3aPF2Zn5BB32S6VlCgh17nrJx2BAdfT6zwYD1vZQbTd1Zr%2FZk3fvvKX6sQgWeOA01e%2Bew%2FUL81SRAgXKfuxyCq3YS5j3A5tu6dZ5nPnLgA2X5x4TskqZFb3JGH9YWaQLVeNAWV4NBHCfUiNi%2FZk6aWGfBetrVUZV1MOgM2zqeFMHJmXY%2BWpp5LLZ2rHSSu0D4ncT0traIv1mZ9xotVTfyiuiswfAANNpj0KJWTeool32YmMjzqSrx0yWZBGL17J8BEJxjosz3opWkVuw9bmlRxZoP7rZJTAE7tty3QXbfcO9BftjGdcwgOmV0cB4EvVNP9avdnHwfB6y5xMp8Ik37KS9PhwVyuKUAUXc%2B%2FwhJvLefn6fXUnnZPVrZRebDv4gbKS2WuYx9Egl2z%2FwvbR4ejfCTHfbqiAvdqqr%2Fs1R0buyRJ301MUjBHTvCPQFBFlOjPhIwmPPkwgY6pgG7rEdYFRxiWBHAGxdu1dFk8SYeBtbvycM2atwepR5%2F4gKiS9YgTCSWpFSEDH4672hySeLTYbePvFvCexVI2MC0pxsU4mN%2BGZX4hHm7jWE9ddGWpPPV%2BXKCCjBchYq3JiaHye%2FbFACIWbBtuMEYPEM0I1pr6VC%2BMdFJU0tGE2i83H0YHDMGBlSZMDMMiqvGTh4TLaVzeXhM8p1QoGeSxIhIdZoo0dk%2B&X-Amz-Signature=07465495c82fcecb43911d6e1f8aa5bd4c3dab08ee51c70bf8eb05d56b6b18ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWVP4BT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIE%2FKdr60qUhJXAnNPSV8xJVZSsk37X7MSsXSEy8SYtkBAiB9xgy3mp6nQH79bLAxA44REldJh3%2BQexYBU8YIvG7JFir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMfKhfn%2FKfyOeMHmssKtwDoKbGNN2cp8D22RE2Pv%2FxhcZdtJ8hfEgN6XlgcjKpQdNsFwFCtej7dACFFCWX%2Flfdv5fIlLJsT%2FS5sLu3OJHQJbKeTwj%2FyG6gdIzL8WmcuzBYd7URsXG%2FdiMINvnLQhZojJ%2FoLiHczbVc1JuwGuvbNfxdtulT7XG4bfI1%2FCFotRfulZEH1bDOFLO3aPF2Zn5BB32S6VlCgh17nrJx2BAdfT6zwYD1vZQbTd1Zr%2FZk3fvvKX6sQgWeOA01e%2Bew%2FUL81SRAgXKfuxyCq3YS5j3A5tu6dZ5nPnLgA2X5x4TskqZFb3JGH9YWaQLVeNAWV4NBHCfUiNi%2FZk6aWGfBetrVUZV1MOgM2zqeFMHJmXY%2BWpp5LLZ2rHSSu0D4ncT0traIv1mZ9xotVTfyiuiswfAANNpj0KJWTeool32YmMjzqSrx0yWZBGL17J8BEJxjosz3opWkVuw9bmlRxZoP7rZJTAE7tty3QXbfcO9BftjGdcwgOmV0cB4EvVNP9avdnHwfB6y5xMp8Ik37KS9PhwVyuKUAUXc%2B%2FwhJvLefn6fXUnnZPVrZRebDv4gbKS2WuYx9Egl2z%2FwvbR4ejfCTHfbqiAvdqqr%2Fs1R0buyRJ301MUjBHTvCPQFBFlOjPhIwmPPkwgY6pgG7rEdYFRxiWBHAGxdu1dFk8SYeBtbvycM2atwepR5%2F4gKiS9YgTCSWpFSEDH4672hySeLTYbePvFvCexVI2MC0pxsU4mN%2BGZX4hHm7jWE9ddGWpPPV%2BXKCCjBchYq3JiaHye%2FbFACIWbBtuMEYPEM0I1pr6VC%2BMdFJU0tGE2i83H0YHDMGBlSZMDMMiqvGTh4TLaVzeXhM8p1QoGeSxIhIdZoo0dk%2B&X-Amz-Signature=417e0c1f98dddf51e69ec5dd31f5d8d20140c2834120f63f5d7bc4a293a177f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
