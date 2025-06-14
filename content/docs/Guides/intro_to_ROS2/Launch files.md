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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E4CJJG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDv1%2BUtH%2Bikt0s%2FXIjpXt2cXbNzpiiAP8gDT0Cb8lcOrAiBUDZN5aK4UbVbNOFhpz7oKnER5YMG2RPrjNBNTx3DkHyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMLViiDn94QQgAtERVKtwD7Srb%2F%2FvK3dSyiKRF0gqelQA4IghBMTVf%2BsPHaqNor6VS8aKAgGTrvpMTqs2SX7cdfPVZfxVHi%2BkKd%2F%2Bh4Br7sHEQll3W%2B3gPwF3TW0DYrqvbmAjUhJ2FaoDVdBrylGrajzoUodpgEd52PLI6lTpXIMZbPdVXlQ%2Ffgb3ovN8%2FoH%2BRJOe9zkAYRDBD5CZ85MLdyzgnAAzXdUfyaBgxLwytu0BzlhWzFiBF3qRjlN3KoWDT9gh7LWEK7j89%2FAkXf4b%2BqUFMkeYcpbTZcVRmWrcMOBqyGGTboME3JjZBDK42W%2FWt2k4XYVaNd%2FOd23RUT3a60Kw7tqUBLhkFUrpW9HP1RymKsJ8GKk1JAKMG4EQrExkJt%2FqttCZ8uqY9LQ2YQqzmgXId0LngEzyyrgnbtuwpQHqcS1JOp8pLsFvjAyhfSRziiPCV6g6uVonwYtNhdFvXqb8RAHpEyI2N4ukDmxBxd%2FHbr4h1Fb1DCBarRF396K5iIazeCa10o4Pua1yKVd3TEpBTMfkpcKsrVYVWAVs%2BapekqEwUev1GZjqFFm3BeSIgmH8LrXyk7G6eajIYf20Zg6PprLgltaXs8S0WDNlzGx6llOObte9x4nKjx4ah5dz99qUtqgCSHbaxIN0wt72zwgY6pgF6GXtqgpD6lK1bZXOZMdWI8hx%2BQxJcc7569Rj5sM%2FKkqEwQS6eogUqc8XJC0bN5P1NhQ7OvHixoawyQ5fiMYVeFZDIbpuR5hp%2BivdLziwDE11NKToFkbRc4naphuaAtqSiZviARCrb9wO0WkxkpljTUbwzJTEadDKeNDwC4TD12qsvc9ZNff9uwnZLhBtPabxzbjbYABDCSHp1RXxCEY3EZ1VvjW7A&X-Amz-Signature=53fd6eb72548264c3af2411bd6f02a6431834d2bfc1fe03dfb8a69e8f9bca386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E4CJJG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDv1%2BUtH%2Bikt0s%2FXIjpXt2cXbNzpiiAP8gDT0Cb8lcOrAiBUDZN5aK4UbVbNOFhpz7oKnER5YMG2RPrjNBNTx3DkHyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMLViiDn94QQgAtERVKtwD7Srb%2F%2FvK3dSyiKRF0gqelQA4IghBMTVf%2BsPHaqNor6VS8aKAgGTrvpMTqs2SX7cdfPVZfxVHi%2BkKd%2F%2Bh4Br7sHEQll3W%2B3gPwF3TW0DYrqvbmAjUhJ2FaoDVdBrylGrajzoUodpgEd52PLI6lTpXIMZbPdVXlQ%2Ffgb3ovN8%2FoH%2BRJOe9zkAYRDBD5CZ85MLdyzgnAAzXdUfyaBgxLwytu0BzlhWzFiBF3qRjlN3KoWDT9gh7LWEK7j89%2FAkXf4b%2BqUFMkeYcpbTZcVRmWrcMOBqyGGTboME3JjZBDK42W%2FWt2k4XYVaNd%2FOd23RUT3a60Kw7tqUBLhkFUrpW9HP1RymKsJ8GKk1JAKMG4EQrExkJt%2FqttCZ8uqY9LQ2YQqzmgXId0LngEzyyrgnbtuwpQHqcS1JOp8pLsFvjAyhfSRziiPCV6g6uVonwYtNhdFvXqb8RAHpEyI2N4ukDmxBxd%2FHbr4h1Fb1DCBarRF396K5iIazeCa10o4Pua1yKVd3TEpBTMfkpcKsrVYVWAVs%2BapekqEwUev1GZjqFFm3BeSIgmH8LrXyk7G6eajIYf20Zg6PprLgltaXs8S0WDNlzGx6llOObte9x4nKjx4ah5dz99qUtqgCSHbaxIN0wt72zwgY6pgF6GXtqgpD6lK1bZXOZMdWI8hx%2BQxJcc7569Rj5sM%2FKkqEwQS6eogUqc8XJC0bN5P1NhQ7OvHixoawyQ5fiMYVeFZDIbpuR5hp%2BivdLziwDE11NKToFkbRc4naphuaAtqSiZviARCrb9wO0WkxkpljTUbwzJTEadDKeNDwC4TD12qsvc9ZNff9uwnZLhBtPabxzbjbYABDCSHp1RXxCEY3EZ1VvjW7A&X-Amz-Signature=b6b2c08234717828544b242140920dd0acfe08ec5149e37aee689e01d14fc1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E4CJJG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDv1%2BUtH%2Bikt0s%2FXIjpXt2cXbNzpiiAP8gDT0Cb8lcOrAiBUDZN5aK4UbVbNOFhpz7oKnER5YMG2RPrjNBNTx3DkHyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMLViiDn94QQgAtERVKtwD7Srb%2F%2FvK3dSyiKRF0gqelQA4IghBMTVf%2BsPHaqNor6VS8aKAgGTrvpMTqs2SX7cdfPVZfxVHi%2BkKd%2F%2Bh4Br7sHEQll3W%2B3gPwF3TW0DYrqvbmAjUhJ2FaoDVdBrylGrajzoUodpgEd52PLI6lTpXIMZbPdVXlQ%2Ffgb3ovN8%2FoH%2BRJOe9zkAYRDBD5CZ85MLdyzgnAAzXdUfyaBgxLwytu0BzlhWzFiBF3qRjlN3KoWDT9gh7LWEK7j89%2FAkXf4b%2BqUFMkeYcpbTZcVRmWrcMOBqyGGTboME3JjZBDK42W%2FWt2k4XYVaNd%2FOd23RUT3a60Kw7tqUBLhkFUrpW9HP1RymKsJ8GKk1JAKMG4EQrExkJt%2FqttCZ8uqY9LQ2YQqzmgXId0LngEzyyrgnbtuwpQHqcS1JOp8pLsFvjAyhfSRziiPCV6g6uVonwYtNhdFvXqb8RAHpEyI2N4ukDmxBxd%2FHbr4h1Fb1DCBarRF396K5iIazeCa10o4Pua1yKVd3TEpBTMfkpcKsrVYVWAVs%2BapekqEwUev1GZjqFFm3BeSIgmH8LrXyk7G6eajIYf20Zg6PprLgltaXs8S0WDNlzGx6llOObte9x4nKjx4ah5dz99qUtqgCSHbaxIN0wt72zwgY6pgF6GXtqgpD6lK1bZXOZMdWI8hx%2BQxJcc7569Rj5sM%2FKkqEwQS6eogUqc8XJC0bN5P1NhQ7OvHixoawyQ5fiMYVeFZDIbpuR5hp%2BivdLziwDE11NKToFkbRc4naphuaAtqSiZviARCrb9wO0WkxkpljTUbwzJTEadDKeNDwC4TD12qsvc9ZNff9uwnZLhBtPabxzbjbYABDCSHp1RXxCEY3EZ1VvjW7A&X-Amz-Signature=cc0dd00db1a9ed4248e124e8ccec54b994e77baf80bcf3e0338a8b48ccc24a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
