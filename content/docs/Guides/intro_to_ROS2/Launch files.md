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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFB3HQNP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWfgQV7sXrqFiUgBrj7JbrTxdclZYKqTn%2BmUAsgZkwbAiABppudTdHbRmSwdAsMt%2B6xxjybjRDxC7%2FsFFT6cFvRlCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLkRxLq3uWyx%2BeiJKtwDa%2F66Cgr%2B%2FYKmH87lfHUKRYyZUJu8qE%2BOB51763fYd0yZFlbl1RAEpCsJ8LJ0ezPBiwQ%2FnrkrpcUTW0MaHzLRrtSh1VnUXnjyZbDHb0UqvFnmZmdWRDYzdsKBtZWbyhFVOB03kiVScMpAPqAgbfr6xUQh%2BAmWkplBecZdaLlnsGKupYoyeLLyJkUKkqq2O5xNK6dsWfInG8e9DvUpui2D%2FzHWnlH6BfJ820PR3Uyr9h%2BQ0mIhO1q4fjj1qZPWXaLlwnAWjLYWNGy9gma8SLb1xKG5GqYeCnVVI%2F4AwbIehCANhCJ5w6gkAVsFiH5PEgphRGuxaJv9r5%2FKfuHfWLfN5PaP9sSwTQsLIUeF4HVNi6WuMfXYHAJ7Kyd3WWQkkZoShO8vMw%2B1E%2BOjDOpPoin04CoLPuscymabJazbFEdQ5edQwHB2PohOMO4E%2Fy8yLHqMonq3DBiCHFrBeJAYHX9Zg7zIz28KshEpmfiY38q0dbB3klPicekDi9hLXC5WquiYN6J31ycy5nuu%2BiYKuuyGP%2FODPcOwr3LLIyMq754F2Vx46BBlxOTfhSyWevFflVqQSiKLYfydpbVujz48EDIgEN5TqVCpTanoi8LtqTU4ohm0cA94uOeXYJ2QOJQwismuvQY6pgF7vv4K3wkQUyeKBCIZqJIvHelXoASoZ2596h6aE7K%2BhLFTYp686DxXi2IVGsYHM6fpElwll3ArnRkJoz08KQ0THaTcqCt4qjy1GvZFuZM%2BdhCgezNWSEqmfgw%2BOd9hdMg6Iuzlt1edbZu%2F4iKSU26BcKhM7JtDkEAAkQk8FjaPN7%2Bl%2FN%2B%2FJK7dHli8NnAjwESkI9gNUdhekCc3McTbnR9ew94Nd%2BYy&X-Amz-Signature=bd03acf27a7b338371b76fc67da5009ec22a6e6e55720455a3f72ab166bebd8d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFB3HQNP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWfgQV7sXrqFiUgBrj7JbrTxdclZYKqTn%2BmUAsgZkwbAiABppudTdHbRmSwdAsMt%2B6xxjybjRDxC7%2FsFFT6cFvRlCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLkRxLq3uWyx%2BeiJKtwDa%2F66Cgr%2B%2FYKmH87lfHUKRYyZUJu8qE%2BOB51763fYd0yZFlbl1RAEpCsJ8LJ0ezPBiwQ%2FnrkrpcUTW0MaHzLRrtSh1VnUXnjyZbDHb0UqvFnmZmdWRDYzdsKBtZWbyhFVOB03kiVScMpAPqAgbfr6xUQh%2BAmWkplBecZdaLlnsGKupYoyeLLyJkUKkqq2O5xNK6dsWfInG8e9DvUpui2D%2FzHWnlH6BfJ820PR3Uyr9h%2BQ0mIhO1q4fjj1qZPWXaLlwnAWjLYWNGy9gma8SLb1xKG5GqYeCnVVI%2F4AwbIehCANhCJ5w6gkAVsFiH5PEgphRGuxaJv9r5%2FKfuHfWLfN5PaP9sSwTQsLIUeF4HVNi6WuMfXYHAJ7Kyd3WWQkkZoShO8vMw%2B1E%2BOjDOpPoin04CoLPuscymabJazbFEdQ5edQwHB2PohOMO4E%2Fy8yLHqMonq3DBiCHFrBeJAYHX9Zg7zIz28KshEpmfiY38q0dbB3klPicekDi9hLXC5WquiYN6J31ycy5nuu%2BiYKuuyGP%2FODPcOwr3LLIyMq754F2Vx46BBlxOTfhSyWevFflVqQSiKLYfydpbVujz48EDIgEN5TqVCpTanoi8LtqTU4ohm0cA94uOeXYJ2QOJQwismuvQY6pgF7vv4K3wkQUyeKBCIZqJIvHelXoASoZ2596h6aE7K%2BhLFTYp686DxXi2IVGsYHM6fpElwll3ArnRkJoz08KQ0THaTcqCt4qjy1GvZFuZM%2BdhCgezNWSEqmfgw%2BOd9hdMg6Iuzlt1edbZu%2F4iKSU26BcKhM7JtDkEAAkQk8FjaPN7%2Bl%2FN%2B%2FJK7dHli8NnAjwESkI9gNUdhekCc3McTbnR9ew94Nd%2BYy&X-Amz-Signature=7c5180a3a15531815cda0a96528da25a6c5c44c31d14c1d7b5471c0eaebb38e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFB3HQNP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWfgQV7sXrqFiUgBrj7JbrTxdclZYKqTn%2BmUAsgZkwbAiABppudTdHbRmSwdAsMt%2B6xxjybjRDxC7%2FsFFT6cFvRlCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLkRxLq3uWyx%2BeiJKtwDa%2F66Cgr%2B%2FYKmH87lfHUKRYyZUJu8qE%2BOB51763fYd0yZFlbl1RAEpCsJ8LJ0ezPBiwQ%2FnrkrpcUTW0MaHzLRrtSh1VnUXnjyZbDHb0UqvFnmZmdWRDYzdsKBtZWbyhFVOB03kiVScMpAPqAgbfr6xUQh%2BAmWkplBecZdaLlnsGKupYoyeLLyJkUKkqq2O5xNK6dsWfInG8e9DvUpui2D%2FzHWnlH6BfJ820PR3Uyr9h%2BQ0mIhO1q4fjj1qZPWXaLlwnAWjLYWNGy9gma8SLb1xKG5GqYeCnVVI%2F4AwbIehCANhCJ5w6gkAVsFiH5PEgphRGuxaJv9r5%2FKfuHfWLfN5PaP9sSwTQsLIUeF4HVNi6WuMfXYHAJ7Kyd3WWQkkZoShO8vMw%2B1E%2BOjDOpPoin04CoLPuscymabJazbFEdQ5edQwHB2PohOMO4E%2Fy8yLHqMonq3DBiCHFrBeJAYHX9Zg7zIz28KshEpmfiY38q0dbB3klPicekDi9hLXC5WquiYN6J31ycy5nuu%2BiYKuuyGP%2FODPcOwr3LLIyMq754F2Vx46BBlxOTfhSyWevFflVqQSiKLYfydpbVujz48EDIgEN5TqVCpTanoi8LtqTU4ohm0cA94uOeXYJ2QOJQwismuvQY6pgF7vv4K3wkQUyeKBCIZqJIvHelXoASoZ2596h6aE7K%2BhLFTYp686DxXi2IVGsYHM6fpElwll3ArnRkJoz08KQ0THaTcqCt4qjy1GvZFuZM%2BdhCgezNWSEqmfgw%2BOd9hdMg6Iuzlt1edbZu%2F4iKSU26BcKhM7JtDkEAAkQk8FjaPN7%2Bl%2FN%2B%2FJK7dHli8NnAjwESkI9gNUdhekCc3McTbnR9ew94Nd%2BYy&X-Amz-Signature=cb2973795a8a33208ebb8a0273a9d601c1ca6e0e7eae777808175700ce15477f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
