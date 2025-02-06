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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OT53ZXS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDr1zm%2BuR5sqSB4lMYa7S1OwNvymQnw2iDEIEftOyBSgAIgZwVQ8V6a23BoVL%2BKaqq1meY3ZjPyX0K2A9gC1zhVMbUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDBkB%2BQGx1EXRaiPexSrcA1bkmkRbq18ktRIeRVQZQKhHFK2tBiq0sJuNTWpjIJULiLw4yBbE4N%2BJ4uZnwEersBTvmaH0YvYT%2FG6kD%2Fi1pAfY8J7jwGQNuIb3QTr8VQya4ye918oWHmb8p4JElLmD6Jxn62Q8ZCI82gGF0VNsRSU%2BW01U7gQSQWacNwLStmwEEA0HcnvAms3DtWd2GiV56I1rD3Ok3uWqpXLe8gfEUIyN6euumov8wWpQBMhTH%2BmP3ADPlaCLDJiFhd%2BEP16VCnSmTXnlh1ivS%2F8x4UGfi%2FwCKLzsZFM7QSvFDKUZyKSEPBGpCLXKL9qb5RvwZYVFN6QeTqeB%2BOsXnS3CAe8LUIwPTgIny9aqTs1j0MKyzvmO4PYYn0Q6qDCy6H4aoISYcLHxEYsprdgjLXTZ%2B2AEr0hGyQ9MgaON%2B3vioY2v4fXXWPeZnGsUGK5vNZnayaNzcQPw%2BHL22UQ302cyFKP88mieKlV%2Flk%2ByguPdG3sC086RHhyJ%2FuzpBi%2BdtQaaYWLdeAwe2qnCRdgdW3nUwGgVLKApmXNMUSbyJ%2F%2F0uRrWDaMh1swHTuu0vclHrcj0bK83Pb%2FqxLUNMsKhjtQhmKtip1KFJ6s0%2Fg15IZzZAzUU3MWrgA3v8GS90Ai93LjZMMX9k70GOqUB68Sx7WkI%2FaeEo5sp4BB%2BW%2BluiH6W%2BjU0i7ygaLb30OjCvVrX7vklogE2YumWZE9m4rjRZo57fLM4iEN9OFEHNAsZ%2BmEUDeZXqoNWt5AWI18dPgZ07TyGIcgymR7e6fN580hpMqkK3d6rLr2AkmA8jkbIUDMYeXPlkDak%2Bu0f%2FSliN2ebU6XWLzwv5X30gGip0%2FHr%2FYt0KT8uZ9EAZfcp21CG9%2FWL&X-Amz-Signature=ab2c61e1a683a7f4a2fb946838270cf26d9b4064394e9fefe992c2d14f05e3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OT53ZXS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDr1zm%2BuR5sqSB4lMYa7S1OwNvymQnw2iDEIEftOyBSgAIgZwVQ8V6a23BoVL%2BKaqq1meY3ZjPyX0K2A9gC1zhVMbUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDBkB%2BQGx1EXRaiPexSrcA1bkmkRbq18ktRIeRVQZQKhHFK2tBiq0sJuNTWpjIJULiLw4yBbE4N%2BJ4uZnwEersBTvmaH0YvYT%2FG6kD%2Fi1pAfY8J7jwGQNuIb3QTr8VQya4ye918oWHmb8p4JElLmD6Jxn62Q8ZCI82gGF0VNsRSU%2BW01U7gQSQWacNwLStmwEEA0HcnvAms3DtWd2GiV56I1rD3Ok3uWqpXLe8gfEUIyN6euumov8wWpQBMhTH%2BmP3ADPlaCLDJiFhd%2BEP16VCnSmTXnlh1ivS%2F8x4UGfi%2FwCKLzsZFM7QSvFDKUZyKSEPBGpCLXKL9qb5RvwZYVFN6QeTqeB%2BOsXnS3CAe8LUIwPTgIny9aqTs1j0MKyzvmO4PYYn0Q6qDCy6H4aoISYcLHxEYsprdgjLXTZ%2B2AEr0hGyQ9MgaON%2B3vioY2v4fXXWPeZnGsUGK5vNZnayaNzcQPw%2BHL22UQ302cyFKP88mieKlV%2Flk%2ByguPdG3sC086RHhyJ%2FuzpBi%2BdtQaaYWLdeAwe2qnCRdgdW3nUwGgVLKApmXNMUSbyJ%2F%2F0uRrWDaMh1swHTuu0vclHrcj0bK83Pb%2FqxLUNMsKhjtQhmKtip1KFJ6s0%2Fg15IZzZAzUU3MWrgA3v8GS90Ai93LjZMMX9k70GOqUB68Sx7WkI%2FaeEo5sp4BB%2BW%2BluiH6W%2BjU0i7ygaLb30OjCvVrX7vklogE2YumWZE9m4rjRZo57fLM4iEN9OFEHNAsZ%2BmEUDeZXqoNWt5AWI18dPgZ07TyGIcgymR7e6fN580hpMqkK3d6rLr2AkmA8jkbIUDMYeXPlkDak%2Bu0f%2FSliN2ebU6XWLzwv5X30gGip0%2FHr%2FYt0KT8uZ9EAZfcp21CG9%2FWL&X-Amz-Signature=6c4b6445a4a7fcd1b0f9f5f80f0b8d1cd6a34895fc842ab594c8fbbfd4963bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OT53ZXS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDr1zm%2BuR5sqSB4lMYa7S1OwNvymQnw2iDEIEftOyBSgAIgZwVQ8V6a23BoVL%2BKaqq1meY3ZjPyX0K2A9gC1zhVMbUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDBkB%2BQGx1EXRaiPexSrcA1bkmkRbq18ktRIeRVQZQKhHFK2tBiq0sJuNTWpjIJULiLw4yBbE4N%2BJ4uZnwEersBTvmaH0YvYT%2FG6kD%2Fi1pAfY8J7jwGQNuIb3QTr8VQya4ye918oWHmb8p4JElLmD6Jxn62Q8ZCI82gGF0VNsRSU%2BW01U7gQSQWacNwLStmwEEA0HcnvAms3DtWd2GiV56I1rD3Ok3uWqpXLe8gfEUIyN6euumov8wWpQBMhTH%2BmP3ADPlaCLDJiFhd%2BEP16VCnSmTXnlh1ivS%2F8x4UGfi%2FwCKLzsZFM7QSvFDKUZyKSEPBGpCLXKL9qb5RvwZYVFN6QeTqeB%2BOsXnS3CAe8LUIwPTgIny9aqTs1j0MKyzvmO4PYYn0Q6qDCy6H4aoISYcLHxEYsprdgjLXTZ%2B2AEr0hGyQ9MgaON%2B3vioY2v4fXXWPeZnGsUGK5vNZnayaNzcQPw%2BHL22UQ302cyFKP88mieKlV%2Flk%2ByguPdG3sC086RHhyJ%2FuzpBi%2BdtQaaYWLdeAwe2qnCRdgdW3nUwGgVLKApmXNMUSbyJ%2F%2F0uRrWDaMh1swHTuu0vclHrcj0bK83Pb%2FqxLUNMsKhjtQhmKtip1KFJ6s0%2Fg15IZzZAzUU3MWrgA3v8GS90Ai93LjZMMX9k70GOqUB68Sx7WkI%2FaeEo5sp4BB%2BW%2BluiH6W%2BjU0i7ygaLb30OjCvVrX7vklogE2YumWZE9m4rjRZo57fLM4iEN9OFEHNAsZ%2BmEUDeZXqoNWt5AWI18dPgZ07TyGIcgymR7e6fN580hpMqkK3d6rLr2AkmA8jkbIUDMYeXPlkDak%2Bu0f%2FSliN2ebU6XWLzwv5X30gGip0%2FHr%2FYt0KT8uZ9EAZfcp21CG9%2FWL&X-Amz-Signature=74b9605d81e6431e2e1de14aac35866baad83f1c5bf5758f11f4521db5bf6fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
