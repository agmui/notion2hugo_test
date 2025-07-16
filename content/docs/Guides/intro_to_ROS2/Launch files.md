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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2XQJEG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICCFpHlcBe6NN3kf938x5kbI%2FWvPuuqQS91iMKEmnAiHAiBTBa5cCwKYgBm70JEZm1YseNYnJHFNyZyyJFzzfVmJ2yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMcCBmzPIDOdCETcvuKtwD72Yu5T0lPA5wZw%2F4BjRb1xUMqtw7eRQwT%2Fgix7B9UTD4Hnstl5hefbEuBXQEO4hcvEA8%2Bh%2FELQkI42euRy5e9sb1r93TD6Ttuwg%2FH3oqZzscDb8O5Zwui%2B3P9s6CMk3e6S4WVoUfGiDDwTerjkSa%2Fujli82t4Oy3bY2I%2BrYb6myRNKg9ueFm4ZngQ04AJCB9xhDKGkZn3KDyabYEer7rHZvy3PbgSYtk0XHU6y39QVFeG8bnXkCHex%2BzSCVZCEjnFB9m6MjAAbhU%2FyjantOfJbR8A3XyDRR43fITBxgwP8M1GtjCqSD7gl9D1z4RZrN3%2FpChTmZ6TaEI0W5DMiS1YRxMq6KFi6g%2F9J%2BFVf0YeJ7F9zcSlcZekcUgI16eMT9UU3oSBGGhaxQU%2FwDGR6M1U%2FRDcRCrBYSWLB1TnFTmOCWF%2BWIxW1NPHorGNFjjlvl8fMJOA2zcU5x%2BqhqtdG%2BpftndGaHCuD1hHS%2FPO0L2GpWiNQZtxfp3dhq1ywzlain%2FfpEVfSjx24hWoEgWDAFj%2Bx7I558BEKFn5x%2BsD4oSxNuEb9nnuoLyAbY7IbzYWjQVDRJLueq1Hdzas%2F2P0ivU7%2B2Nyh7IgoYPEp3%2BlRDhJqUc4eXGz5xrGpm%2BMpQwhq%2FcwwY6pgFfK8BTs2F%2FlwiIaRuUZUIVlIzmyf7qxxrboDiMptJ9zpxj5RsQkXPpcCkZ31jZD7ezszDIORAbE%2BjVhe4RVaznp9uYysomju1AvO6%2FQsoxhOehbRe%2BpUIOtZwDpH0eeaeaKptj3XL4%2FLk2E0qvBV7iQh1H7PwOyT7%2Bg12M7hHBifjSDRlZXPf8OM%2FTCIFD7MIB%2F24kO0uWc9Sjh0fI4jgB5TE%2FWJ8C&X-Amz-Signature=8d84e68bb72a65ca31f61dc2dc136491a6da901549aeb085949b9bad9d15c37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2XQJEG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICCFpHlcBe6NN3kf938x5kbI%2FWvPuuqQS91iMKEmnAiHAiBTBa5cCwKYgBm70JEZm1YseNYnJHFNyZyyJFzzfVmJ2yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMcCBmzPIDOdCETcvuKtwD72Yu5T0lPA5wZw%2F4BjRb1xUMqtw7eRQwT%2Fgix7B9UTD4Hnstl5hefbEuBXQEO4hcvEA8%2Bh%2FELQkI42euRy5e9sb1r93TD6Ttuwg%2FH3oqZzscDb8O5Zwui%2B3P9s6CMk3e6S4WVoUfGiDDwTerjkSa%2Fujli82t4Oy3bY2I%2BrYb6myRNKg9ueFm4ZngQ04AJCB9xhDKGkZn3KDyabYEer7rHZvy3PbgSYtk0XHU6y39QVFeG8bnXkCHex%2BzSCVZCEjnFB9m6MjAAbhU%2FyjantOfJbR8A3XyDRR43fITBxgwP8M1GtjCqSD7gl9D1z4RZrN3%2FpChTmZ6TaEI0W5DMiS1YRxMq6KFi6g%2F9J%2BFVf0YeJ7F9zcSlcZekcUgI16eMT9UU3oSBGGhaxQU%2FwDGR6M1U%2FRDcRCrBYSWLB1TnFTmOCWF%2BWIxW1NPHorGNFjjlvl8fMJOA2zcU5x%2BqhqtdG%2BpftndGaHCuD1hHS%2FPO0L2GpWiNQZtxfp3dhq1ywzlain%2FfpEVfSjx24hWoEgWDAFj%2Bx7I558BEKFn5x%2BsD4oSxNuEb9nnuoLyAbY7IbzYWjQVDRJLueq1Hdzas%2F2P0ivU7%2B2Nyh7IgoYPEp3%2BlRDhJqUc4eXGz5xrGpm%2BMpQwhq%2FcwwY6pgFfK8BTs2F%2FlwiIaRuUZUIVlIzmyf7qxxrboDiMptJ9zpxj5RsQkXPpcCkZ31jZD7ezszDIORAbE%2BjVhe4RVaznp9uYysomju1AvO6%2FQsoxhOehbRe%2BpUIOtZwDpH0eeaeaKptj3XL4%2FLk2E0qvBV7iQh1H7PwOyT7%2Bg12M7hHBifjSDRlZXPf8OM%2FTCIFD7MIB%2F24kO0uWc9Sjh0fI4jgB5TE%2FWJ8C&X-Amz-Signature=1d97cc2ea28cd40f746f0a2e72a3948ad118bbb56f0b9012b5fca12f28eb00a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2XQJEG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICCFpHlcBe6NN3kf938x5kbI%2FWvPuuqQS91iMKEmnAiHAiBTBa5cCwKYgBm70JEZm1YseNYnJHFNyZyyJFzzfVmJ2yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMcCBmzPIDOdCETcvuKtwD72Yu5T0lPA5wZw%2F4BjRb1xUMqtw7eRQwT%2Fgix7B9UTD4Hnstl5hefbEuBXQEO4hcvEA8%2Bh%2FELQkI42euRy5e9sb1r93TD6Ttuwg%2FH3oqZzscDb8O5Zwui%2B3P9s6CMk3e6S4WVoUfGiDDwTerjkSa%2Fujli82t4Oy3bY2I%2BrYb6myRNKg9ueFm4ZngQ04AJCB9xhDKGkZn3KDyabYEer7rHZvy3PbgSYtk0XHU6y39QVFeG8bnXkCHex%2BzSCVZCEjnFB9m6MjAAbhU%2FyjantOfJbR8A3XyDRR43fITBxgwP8M1GtjCqSD7gl9D1z4RZrN3%2FpChTmZ6TaEI0W5DMiS1YRxMq6KFi6g%2F9J%2BFVf0YeJ7F9zcSlcZekcUgI16eMT9UU3oSBGGhaxQU%2FwDGR6M1U%2FRDcRCrBYSWLB1TnFTmOCWF%2BWIxW1NPHorGNFjjlvl8fMJOA2zcU5x%2BqhqtdG%2BpftndGaHCuD1hHS%2FPO0L2GpWiNQZtxfp3dhq1ywzlain%2FfpEVfSjx24hWoEgWDAFj%2Bx7I558BEKFn5x%2BsD4oSxNuEb9nnuoLyAbY7IbzYWjQVDRJLueq1Hdzas%2F2P0ivU7%2B2Nyh7IgoYPEp3%2BlRDhJqUc4eXGz5xrGpm%2BMpQwhq%2FcwwY6pgFfK8BTs2F%2FlwiIaRuUZUIVlIzmyf7qxxrboDiMptJ9zpxj5RsQkXPpcCkZ31jZD7ezszDIORAbE%2BjVhe4RVaznp9uYysomju1AvO6%2FQsoxhOehbRe%2BpUIOtZwDpH0eeaeaKptj3XL4%2FLk2E0qvBV7iQh1H7PwOyT7%2Bg12M7hHBifjSDRlZXPf8OM%2FTCIFD7MIB%2F24kO0uWc9Sjh0fI4jgB5TE%2FWJ8C&X-Amz-Signature=c5b647aa9f1f772b685a47535b16ddb6b53ef863f9872c860730ee18cbe04e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
