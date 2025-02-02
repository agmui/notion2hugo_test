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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQU554I%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9ChO%2BfMTspP%2Bnfmw8l%2FGJWd%2Bq0%2BPVe091R0m4ImVwEgIhAPvhVYnwWMh3yg%2BP5jLdsWV973FKBUJHzUa4A%2BO85yrjKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6uYbNwkWukAXrnfIq3ANiSty23XfXBY77bWnB0z5XZXC67MICuwLHDzIT%2B8PeuJxtoMCAlwARZJsdWZrxdXrwekZjN2%2FqNz8VIWGqXWbMIfPGrD0sNpdmyEuhD1Iub3cCGqoz8K1llpEPtSIY34bv9tlw1n2RRSBudnIChr2hb2ULvt5%2FG8xEE5%2BUWqD3QD%2Fm0R98nduvr07Qylns%2BR6eVCIvst6eV5d6xcBk4SMunJqdxEjBqRHHlVin3Z017NmzC0Sm4soQ%2FbDDk9jLh1kyJCL8XwOH6kCYO%2FiguV9JhMzJZKqSydI7zJF7d7q%2FdxspZVTYeTadRWLB%2FFSKm5i9tfJT2h%2F72nSJDre3SyNkfwdXQgZvd1MKyrMWpat0tY4r1SQgRALZIIuy20AGYysrVteBqs4IZrNHpkuasUo9bmtIgRPM%2BhKVbfLeiHr3rJkKtFZ6no92kNHO0GIVRb%2FiZzJPnvFsRwM%2FbDanhfE5suvdXiw7ken09vomG9lVqTXzc1AcUSbLA5s3MtcVTKzomYBAMjly8eEKnz4%2BIdPLqYHcxdZs75v1WBs2pjkDSxAzq3JbTXL%2FEC5fY7sLkfkUjHbWFhRlxVKHSasYqyie3E8rT8KEmrF6Z6YvgtzihUSad4Dd3EjC9F9EHDDb5v68BjqkAb9rRjqG1GLu5rQe3f7p4l7ClQdD3MRABH2pC5YmOvpc71CbwkcX%2FNGNPYzAj9mdgQQPD9Xpx47mdYEy3d12OBGUwaxIfog9oz4R8z372UMFKxK9qV93RcvZwv1nkRFMwiOSbo9CfGAgvM2QJxsWOIWLpzDSsrGZuo58%2FzJsZma%2BqTpN6iMi0BPZH2r6TQJ3LNseepWXjAeHFqPsHXRDMkFq4%2FU%2F&X-Amz-Signature=def9fa5b0cabae716df9dc914bf64234a68cac44f25958d8cded20be9ffa547b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQU554I%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9ChO%2BfMTspP%2Bnfmw8l%2FGJWd%2Bq0%2BPVe091R0m4ImVwEgIhAPvhVYnwWMh3yg%2BP5jLdsWV973FKBUJHzUa4A%2BO85yrjKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6uYbNwkWukAXrnfIq3ANiSty23XfXBY77bWnB0z5XZXC67MICuwLHDzIT%2B8PeuJxtoMCAlwARZJsdWZrxdXrwekZjN2%2FqNz8VIWGqXWbMIfPGrD0sNpdmyEuhD1Iub3cCGqoz8K1llpEPtSIY34bv9tlw1n2RRSBudnIChr2hb2ULvt5%2FG8xEE5%2BUWqD3QD%2Fm0R98nduvr07Qylns%2BR6eVCIvst6eV5d6xcBk4SMunJqdxEjBqRHHlVin3Z017NmzC0Sm4soQ%2FbDDk9jLh1kyJCL8XwOH6kCYO%2FiguV9JhMzJZKqSydI7zJF7d7q%2FdxspZVTYeTadRWLB%2FFSKm5i9tfJT2h%2F72nSJDre3SyNkfwdXQgZvd1MKyrMWpat0tY4r1SQgRALZIIuy20AGYysrVteBqs4IZrNHpkuasUo9bmtIgRPM%2BhKVbfLeiHr3rJkKtFZ6no92kNHO0GIVRb%2FiZzJPnvFsRwM%2FbDanhfE5suvdXiw7ken09vomG9lVqTXzc1AcUSbLA5s3MtcVTKzomYBAMjly8eEKnz4%2BIdPLqYHcxdZs75v1WBs2pjkDSxAzq3JbTXL%2FEC5fY7sLkfkUjHbWFhRlxVKHSasYqyie3E8rT8KEmrF6Z6YvgtzihUSad4Dd3EjC9F9EHDDb5v68BjqkAb9rRjqG1GLu5rQe3f7p4l7ClQdD3MRABH2pC5YmOvpc71CbwkcX%2FNGNPYzAj9mdgQQPD9Xpx47mdYEy3d12OBGUwaxIfog9oz4R8z372UMFKxK9qV93RcvZwv1nkRFMwiOSbo9CfGAgvM2QJxsWOIWLpzDSsrGZuo58%2FzJsZma%2BqTpN6iMi0BPZH2r6TQJ3LNseepWXjAeHFqPsHXRDMkFq4%2FU%2F&X-Amz-Signature=d97abe4070ba1963b1cc5b28031bad7f44167eda903b4d7e5293df51fd543e27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FQU554I%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9ChO%2BfMTspP%2Bnfmw8l%2FGJWd%2Bq0%2BPVe091R0m4ImVwEgIhAPvhVYnwWMh3yg%2BP5jLdsWV973FKBUJHzUa4A%2BO85yrjKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6uYbNwkWukAXrnfIq3ANiSty23XfXBY77bWnB0z5XZXC67MICuwLHDzIT%2B8PeuJxtoMCAlwARZJsdWZrxdXrwekZjN2%2FqNz8VIWGqXWbMIfPGrD0sNpdmyEuhD1Iub3cCGqoz8K1llpEPtSIY34bv9tlw1n2RRSBudnIChr2hb2ULvt5%2FG8xEE5%2BUWqD3QD%2Fm0R98nduvr07Qylns%2BR6eVCIvst6eV5d6xcBk4SMunJqdxEjBqRHHlVin3Z017NmzC0Sm4soQ%2FbDDk9jLh1kyJCL8XwOH6kCYO%2FiguV9JhMzJZKqSydI7zJF7d7q%2FdxspZVTYeTadRWLB%2FFSKm5i9tfJT2h%2F72nSJDre3SyNkfwdXQgZvd1MKyrMWpat0tY4r1SQgRALZIIuy20AGYysrVteBqs4IZrNHpkuasUo9bmtIgRPM%2BhKVbfLeiHr3rJkKtFZ6no92kNHO0GIVRb%2FiZzJPnvFsRwM%2FbDanhfE5suvdXiw7ken09vomG9lVqTXzc1AcUSbLA5s3MtcVTKzomYBAMjly8eEKnz4%2BIdPLqYHcxdZs75v1WBs2pjkDSxAzq3JbTXL%2FEC5fY7sLkfkUjHbWFhRlxVKHSasYqyie3E8rT8KEmrF6Z6YvgtzihUSad4Dd3EjC9F9EHDDb5v68BjqkAb9rRjqG1GLu5rQe3f7p4l7ClQdD3MRABH2pC5YmOvpc71CbwkcX%2FNGNPYzAj9mdgQQPD9Xpx47mdYEy3d12OBGUwaxIfog9oz4R8z372UMFKxK9qV93RcvZwv1nkRFMwiOSbo9CfGAgvM2QJxsWOIWLpzDSsrGZuo58%2FzJsZma%2BqTpN6iMi0BPZH2r6TQJ3LNseepWXjAeHFqPsHXRDMkFq4%2FU%2F&X-Amz-Signature=e5700ce9d2673fd972ef03fefbb3626229a4609fb05c36f6715cba513d33221c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
