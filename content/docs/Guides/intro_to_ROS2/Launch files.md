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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI54MUTP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDzumkye%2FEDkrRLNmpNTfQcI2PznFFvMIBwa58s%2B%2FTS0wIhANRphPybC80QITYn%2Fl%2F2uuvvvdrU3tTiU5iO5NcsLbgiKv8DCGQQABoMNjM3NDIzMTgzODA1IgxnvokaitwsdC0GjZQq3ANy4tCgYqgrntMv%2F0bjB8yxIRxc4qmYccEmPoCNqDurUXjF7RNoDLlrmiuT7s4BVHlCrUdoK9XfsR1hTeoTsQhJbjZw0Tw5g94R%2FmzwOd5Y%2B%2B5yG4CFA24E%2Fh1Mh4DBwCzJygxcqn8NFcU%2BVIjGERKF41dXALi1Nj5M8yhKzhhQ%2FyZpwfSb23zxyeBTu%2Bwbw1pq34DB2Y8GUnr2PIy5PMsUro2qFCSaEgGhmYyJUfvh55nJGPoR9qWeH6%2F%2FggyhOeHFtidD77LwaA%2Bk44l4E6mwYISxEA6c9NQEH7geQe0LCBvKsYsbyyiwdqvM0F83HPLgatwk9QX%2BGwj1Em5651nWlPko2mx01o8cYTUZmVqRzOt6dBcdyeIZmMUDlwWYzOqFL9WraQevPdQI6ulDboENaDO3PP1klFxRqxCxBJpaL0FUDHKJscuxPHPxteSgiqxC9AEVB6ISs7piWUFKk1Xl%2BY%2BMFIqwgLQtWrvU7%2BaBmzVfVA9duXvZExrbCtE5DZEqtipsUbt2iQVlD119uo4O4dnZf%2FemVKLr%2Bpjfx4Ccd4TIgOkd2zVPrpLK04re7WUg%2F0SrAC52CtgbRxrY%2FejS0oLk2d3A3vbgCJG2ZISY1EKLwGTH6MjMI2FqmTD34N%2FDBjqkAUUADt1UezU3O8c5yIGBa9GNBbGRh5nqlX%2F4g5BSKlsCmu6u4BzAlhnaMNLYiTUxAud6pEdg8vErIdRMFkQwYiZrX35LEJgOoKf3EaPP7WwzjD%2Fq1ZZL4Tvp77oARCXTGj7Sk9eBUAnPH8pL8keNpr222mfyOWvZ0e2pK1xTmULZVdVavoiOBZhRRK%2BW9tgKpWUdkks0Su5YLnNtEebDqpl7wtuz&X-Amz-Signature=b05661b2fbf24f56c698ebf2301b2e714b9e86deb39d29cc182510f8b0e8029e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI54MUTP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDzumkye%2FEDkrRLNmpNTfQcI2PznFFvMIBwa58s%2B%2FTS0wIhANRphPybC80QITYn%2Fl%2F2uuvvvdrU3tTiU5iO5NcsLbgiKv8DCGQQABoMNjM3NDIzMTgzODA1IgxnvokaitwsdC0GjZQq3ANy4tCgYqgrntMv%2F0bjB8yxIRxc4qmYccEmPoCNqDurUXjF7RNoDLlrmiuT7s4BVHlCrUdoK9XfsR1hTeoTsQhJbjZw0Tw5g94R%2FmzwOd5Y%2B%2B5yG4CFA24E%2Fh1Mh4DBwCzJygxcqn8NFcU%2BVIjGERKF41dXALi1Nj5M8yhKzhhQ%2FyZpwfSb23zxyeBTu%2Bwbw1pq34DB2Y8GUnr2PIy5PMsUro2qFCSaEgGhmYyJUfvh55nJGPoR9qWeH6%2F%2FggyhOeHFtidD77LwaA%2Bk44l4E6mwYISxEA6c9NQEH7geQe0LCBvKsYsbyyiwdqvM0F83HPLgatwk9QX%2BGwj1Em5651nWlPko2mx01o8cYTUZmVqRzOt6dBcdyeIZmMUDlwWYzOqFL9WraQevPdQI6ulDboENaDO3PP1klFxRqxCxBJpaL0FUDHKJscuxPHPxteSgiqxC9AEVB6ISs7piWUFKk1Xl%2BY%2BMFIqwgLQtWrvU7%2BaBmzVfVA9duXvZExrbCtE5DZEqtipsUbt2iQVlD119uo4O4dnZf%2FemVKLr%2Bpjfx4Ccd4TIgOkd2zVPrpLK04re7WUg%2F0SrAC52CtgbRxrY%2FejS0oLk2d3A3vbgCJG2ZISY1EKLwGTH6MjMI2FqmTD34N%2FDBjqkAUUADt1UezU3O8c5yIGBa9GNBbGRh5nqlX%2F4g5BSKlsCmu6u4BzAlhnaMNLYiTUxAud6pEdg8vErIdRMFkQwYiZrX35LEJgOoKf3EaPP7WwzjD%2Fq1ZZL4Tvp77oARCXTGj7Sk9eBUAnPH8pL8keNpr222mfyOWvZ0e2pK1xTmULZVdVavoiOBZhRRK%2BW9tgKpWUdkks0Su5YLnNtEebDqpl7wtuz&X-Amz-Signature=99f40562edd819b511c6558d1f1ba6a8663021cf6ca7e457e854048c79a1c3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI54MUTP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDzumkye%2FEDkrRLNmpNTfQcI2PznFFvMIBwa58s%2B%2FTS0wIhANRphPybC80QITYn%2Fl%2F2uuvvvdrU3tTiU5iO5NcsLbgiKv8DCGQQABoMNjM3NDIzMTgzODA1IgxnvokaitwsdC0GjZQq3ANy4tCgYqgrntMv%2F0bjB8yxIRxc4qmYccEmPoCNqDurUXjF7RNoDLlrmiuT7s4BVHlCrUdoK9XfsR1hTeoTsQhJbjZw0Tw5g94R%2FmzwOd5Y%2B%2B5yG4CFA24E%2Fh1Mh4DBwCzJygxcqn8NFcU%2BVIjGERKF41dXALi1Nj5M8yhKzhhQ%2FyZpwfSb23zxyeBTu%2Bwbw1pq34DB2Y8GUnr2PIy5PMsUro2qFCSaEgGhmYyJUfvh55nJGPoR9qWeH6%2F%2FggyhOeHFtidD77LwaA%2Bk44l4E6mwYISxEA6c9NQEH7geQe0LCBvKsYsbyyiwdqvM0F83HPLgatwk9QX%2BGwj1Em5651nWlPko2mx01o8cYTUZmVqRzOt6dBcdyeIZmMUDlwWYzOqFL9WraQevPdQI6ulDboENaDO3PP1klFxRqxCxBJpaL0FUDHKJscuxPHPxteSgiqxC9AEVB6ISs7piWUFKk1Xl%2BY%2BMFIqwgLQtWrvU7%2BaBmzVfVA9duXvZExrbCtE5DZEqtipsUbt2iQVlD119uo4O4dnZf%2FemVKLr%2Bpjfx4Ccd4TIgOkd2zVPrpLK04re7WUg%2F0SrAC52CtgbRxrY%2FejS0oLk2d3A3vbgCJG2ZISY1EKLwGTH6MjMI2FqmTD34N%2FDBjqkAUUADt1UezU3O8c5yIGBa9GNBbGRh5nqlX%2F4g5BSKlsCmu6u4BzAlhnaMNLYiTUxAud6pEdg8vErIdRMFkQwYiZrX35LEJgOoKf3EaPP7WwzjD%2Fq1ZZL4Tvp77oARCXTGj7Sk9eBUAnPH8pL8keNpr222mfyOWvZ0e2pK1xTmULZVdVavoiOBZhRRK%2BW9tgKpWUdkks0Su5YLnNtEebDqpl7wtuz&X-Amz-Signature=162b19ea750543fef9731a636b6b65c5ce04a6d5673fce4e8f900920a9cf23f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
