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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7O774K%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjvdoAO6S29DtDaJ4hvTFoKdSoFbPa%2BUC%2BnEQzYGGW3AIhANDNwLEDvxhHPrVGXTcSIJXVkjQmILxX69CPWMywqEYeKv8DCBEQABoMNjM3NDIzMTgzODA1IgxH8FHInnmZ%2Fmc5Fnoq3AMMxMhzEfsu2Rk0AjZvbhrDAh5gaiE4Cu%2Bsh4TsJ7RZlag7MKiPl0B0m4ooXx0Weacv%2BUupiQ66NPSiJ5nFVPx%2BJRBq0HcGTtnxWflNTcO%2BGOk8xvR0cd6uPlGRWdxZlt0KGFRH12csfkGdbTWJPP1ZwmJ6G5BmHWnB2nHmjPSWxhQp2wue%2B5czyHWc2Tk%2FqMPzN8LqcEz6kTi%2F40Rp1oEsHwO7X4UY%2B0kbUehiXG2sVocDMgP8GhnODg6IAve20xhSyyJ9z%2FGMYtJJDwEAlTCp9O1rm47yqofO%2FUocoTfunoorsKnAzCJY1y%2B9LQzHcJMPbx3gmQrPuAaQScFnTozKXVZhjsXipbQgq1KQhA9iC39ecxOva5jWQBqQ8wr9qZlG4IbWyl4BnRuLU8I4Rvl4eFWVrdlYJr%2F5FBzrC8f1qJB8YkytwlDTXQ6Cde6LGmJW0Sbd%2B1Y76S3f%2BePC5LDGI75%2BP6raKq6CTP3xpk%2F%2BoPXxitPjHAK6PwrW4GymjabEAU5rT8hFcWnuYqPWGZF%2BjW5jgBwxYoofTdJVdDJlj8eP31f8%2Buo1zvtom7XcorodO5EJUmKTjOOwo1nys4aERUoINTeDMhfE9X4Qsbmvwvh9yZ9s%2BzQ4BzvQDzD24dS%2BBjqkAdItdZApQnEIARQ%2B1FB44BNJzoUIXyV57yGAPA7gMy4QEvLymK6Gc2xZUHraxG7Ltfc0ZtNhWmxpX7IN5LDalMIuzOkbwR2tUWn9mOe2VyebseyhXb56F1KMrNzrUDJM4U%2BqBcpqbofFeifVLDz0%2B4m4zfxfNmIIlppkbqGl8%2Fns7KvTOFobaw9gkSz05MdKDGMt57OoSjhYTDoTyA5ybXyJ1ENC&X-Amz-Signature=6fa68803c4582bf9d4a8aa4a92d7da7a709383ec06d4266a696187ac6e5d961d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7O774K%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjvdoAO6S29DtDaJ4hvTFoKdSoFbPa%2BUC%2BnEQzYGGW3AIhANDNwLEDvxhHPrVGXTcSIJXVkjQmILxX69CPWMywqEYeKv8DCBEQABoMNjM3NDIzMTgzODA1IgxH8FHInnmZ%2Fmc5Fnoq3AMMxMhzEfsu2Rk0AjZvbhrDAh5gaiE4Cu%2Bsh4TsJ7RZlag7MKiPl0B0m4ooXx0Weacv%2BUupiQ66NPSiJ5nFVPx%2BJRBq0HcGTtnxWflNTcO%2BGOk8xvR0cd6uPlGRWdxZlt0KGFRH12csfkGdbTWJPP1ZwmJ6G5BmHWnB2nHmjPSWxhQp2wue%2B5czyHWc2Tk%2FqMPzN8LqcEz6kTi%2F40Rp1oEsHwO7X4UY%2B0kbUehiXG2sVocDMgP8GhnODg6IAve20xhSyyJ9z%2FGMYtJJDwEAlTCp9O1rm47yqofO%2FUocoTfunoorsKnAzCJY1y%2B9LQzHcJMPbx3gmQrPuAaQScFnTozKXVZhjsXipbQgq1KQhA9iC39ecxOva5jWQBqQ8wr9qZlG4IbWyl4BnRuLU8I4Rvl4eFWVrdlYJr%2F5FBzrC8f1qJB8YkytwlDTXQ6Cde6LGmJW0Sbd%2B1Y76S3f%2BePC5LDGI75%2BP6raKq6CTP3xpk%2F%2BoPXxitPjHAK6PwrW4GymjabEAU5rT8hFcWnuYqPWGZF%2BjW5jgBwxYoofTdJVdDJlj8eP31f8%2Buo1zvtom7XcorodO5EJUmKTjOOwo1nys4aERUoINTeDMhfE9X4Qsbmvwvh9yZ9s%2BzQ4BzvQDzD24dS%2BBjqkAdItdZApQnEIARQ%2B1FB44BNJzoUIXyV57yGAPA7gMy4QEvLymK6Gc2xZUHraxG7Ltfc0ZtNhWmxpX7IN5LDalMIuzOkbwR2tUWn9mOe2VyebseyhXb56F1KMrNzrUDJM4U%2BqBcpqbofFeifVLDz0%2B4m4zfxfNmIIlppkbqGl8%2Fns7KvTOFobaw9gkSz05MdKDGMt57OoSjhYTDoTyA5ybXyJ1ENC&X-Amz-Signature=038d95ec0bbd91db36f71ea48d841f13a58d16f88562ea83846b2d3f103c7432&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7O774K%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjvdoAO6S29DtDaJ4hvTFoKdSoFbPa%2BUC%2BnEQzYGGW3AIhANDNwLEDvxhHPrVGXTcSIJXVkjQmILxX69CPWMywqEYeKv8DCBEQABoMNjM3NDIzMTgzODA1IgxH8FHInnmZ%2Fmc5Fnoq3AMMxMhzEfsu2Rk0AjZvbhrDAh5gaiE4Cu%2Bsh4TsJ7RZlag7MKiPl0B0m4ooXx0Weacv%2BUupiQ66NPSiJ5nFVPx%2BJRBq0HcGTtnxWflNTcO%2BGOk8xvR0cd6uPlGRWdxZlt0KGFRH12csfkGdbTWJPP1ZwmJ6G5BmHWnB2nHmjPSWxhQp2wue%2B5czyHWc2Tk%2FqMPzN8LqcEz6kTi%2F40Rp1oEsHwO7X4UY%2B0kbUehiXG2sVocDMgP8GhnODg6IAve20xhSyyJ9z%2FGMYtJJDwEAlTCp9O1rm47yqofO%2FUocoTfunoorsKnAzCJY1y%2B9LQzHcJMPbx3gmQrPuAaQScFnTozKXVZhjsXipbQgq1KQhA9iC39ecxOva5jWQBqQ8wr9qZlG4IbWyl4BnRuLU8I4Rvl4eFWVrdlYJr%2F5FBzrC8f1qJB8YkytwlDTXQ6Cde6LGmJW0Sbd%2B1Y76S3f%2BePC5LDGI75%2BP6raKq6CTP3xpk%2F%2BoPXxitPjHAK6PwrW4GymjabEAU5rT8hFcWnuYqPWGZF%2BjW5jgBwxYoofTdJVdDJlj8eP31f8%2Buo1zvtom7XcorodO5EJUmKTjOOwo1nys4aERUoINTeDMhfE9X4Qsbmvwvh9yZ9s%2BzQ4BzvQDzD24dS%2BBjqkAdItdZApQnEIARQ%2B1FB44BNJzoUIXyV57yGAPA7gMy4QEvLymK6Gc2xZUHraxG7Ltfc0ZtNhWmxpX7IN5LDalMIuzOkbwR2tUWn9mOe2VyebseyhXb56F1KMrNzrUDJM4U%2BqBcpqbofFeifVLDz0%2B4m4zfxfNmIIlppkbqGl8%2Fns7KvTOFobaw9gkSz05MdKDGMt57OoSjhYTDoTyA5ybXyJ1ENC&X-Amz-Signature=82e9ecbfe4488265b30735c14378e888cad6c61b31ec7c89f2a27e7b11e35685&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
