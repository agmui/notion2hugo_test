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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL3SVSX3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApRveTMCzCoo%2BGCx%2BLTo%2FFn5SgfFa4MQSRLoCYjBMugAiB8VgDbwwFl9%2B1ZnTSq5UBHxQhu7NNT46REJOYi7DXOSSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfJC57aAViuVw8VEIKtwDJ3qp0cxse7ZMSGP9dTynEd03WMHklX1EtXDF9lxuN4lxch32QjsWPubZretuDjT4HvXFn2jyWc%2F%2BFdCpj9%2FV7DjXg03yEIUIBMsx9FJVoJYBpkRNuJooRzMdOySNS3eabtsKoh8Y1HVzJ2SyzPocjE3JVGzY6cjwNnioO6wT%2Bu259ZgMde9Cc35lxXjr3r4EXSemj9jhsatxpqLjx7t5hPeakaPDTJQyiJxTRY4NAEXRPOs16GhVbiEIm0pokoqzKS%2FaO%2BA4x7c0iiW1HGUKL80O8UqwikcPAqRfpv5eXzZ1y0wQChFtd9E4kDaFlQCE%2BpHBMI9jXQrlYl4u51fMslhkx62%2F4pRU9cIUHjYvQnJY5IyZUg4S0lSw9rJ8Ny6%2BOUysUT2O1tiNo%2BpycO2WPdP4D5Di8oQmsaNn%2FY8XamLg3%2FmIPjR9OBVvHCu4C4toHgEApWj8j%2BIvTacpBidhera3aTHDOm0NO3EisQIBQEWaytnpCedskpf1sjgbcSxvX48304S7D%2F9tpqRbOjuR17IqpzjwGUqwTrQ%2FrB2dLjwdJd3BXNjAuK9Zph8H4O4vT8sWC0DxoNbFP9WQd7DOHr1PQi7E3zOL%2Bp8of6rLBNCPUUUY83LmZjyQSc4w8t6fwgY6pgE7GhfVqDFD%2FWYHmsGbQRhGSarRoBAtlukkgvl6fu7XrMN4CPjsy9ukkBo9R9rJ%2BqdbXJ%2FQBbu%2F8iPUVjed78NaYLOD4fByaeNaaZOI4gAwW5Aw1Eui7%2Bjj6yDTQxo84yX8egF9%2FVZQRQjBrssk2P8eyyaBUuUlLRVKVPHBtjOGwGAkWjenwXpABwex2XIhghWO%2FIq%2FnNBLJoczZQ5UacBw%2F3vgDjrH&X-Amz-Signature=3045df4d8b3c96fd992c7ec1e7b0ba4b3f74874fe807720703cba49bc01bad3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL3SVSX3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApRveTMCzCoo%2BGCx%2BLTo%2FFn5SgfFa4MQSRLoCYjBMugAiB8VgDbwwFl9%2B1ZnTSq5UBHxQhu7NNT46REJOYi7DXOSSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfJC57aAViuVw8VEIKtwDJ3qp0cxse7ZMSGP9dTynEd03WMHklX1EtXDF9lxuN4lxch32QjsWPubZretuDjT4HvXFn2jyWc%2F%2BFdCpj9%2FV7DjXg03yEIUIBMsx9FJVoJYBpkRNuJooRzMdOySNS3eabtsKoh8Y1HVzJ2SyzPocjE3JVGzY6cjwNnioO6wT%2Bu259ZgMde9Cc35lxXjr3r4EXSemj9jhsatxpqLjx7t5hPeakaPDTJQyiJxTRY4NAEXRPOs16GhVbiEIm0pokoqzKS%2FaO%2BA4x7c0iiW1HGUKL80O8UqwikcPAqRfpv5eXzZ1y0wQChFtd9E4kDaFlQCE%2BpHBMI9jXQrlYl4u51fMslhkx62%2F4pRU9cIUHjYvQnJY5IyZUg4S0lSw9rJ8Ny6%2BOUysUT2O1tiNo%2BpycO2WPdP4D5Di8oQmsaNn%2FY8XamLg3%2FmIPjR9OBVvHCu4C4toHgEApWj8j%2BIvTacpBidhera3aTHDOm0NO3EisQIBQEWaytnpCedskpf1sjgbcSxvX48304S7D%2F9tpqRbOjuR17IqpzjwGUqwTrQ%2FrB2dLjwdJd3BXNjAuK9Zph8H4O4vT8sWC0DxoNbFP9WQd7DOHr1PQi7E3zOL%2Bp8of6rLBNCPUUUY83LmZjyQSc4w8t6fwgY6pgE7GhfVqDFD%2FWYHmsGbQRhGSarRoBAtlukkgvl6fu7XrMN4CPjsy9ukkBo9R9rJ%2BqdbXJ%2FQBbu%2F8iPUVjed78NaYLOD4fByaeNaaZOI4gAwW5Aw1Eui7%2Bjj6yDTQxo84yX8egF9%2FVZQRQjBrssk2P8eyyaBUuUlLRVKVPHBtjOGwGAkWjenwXpABwex2XIhghWO%2FIq%2FnNBLJoczZQ5UacBw%2F3vgDjrH&X-Amz-Signature=bbede3c107e60ca187f4c28d90aada5287f22159c75ec2f67ed2bdd752c824d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL3SVSX3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApRveTMCzCoo%2BGCx%2BLTo%2FFn5SgfFa4MQSRLoCYjBMugAiB8VgDbwwFl9%2B1ZnTSq5UBHxQhu7NNT46REJOYi7DXOSSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfJC57aAViuVw8VEIKtwDJ3qp0cxse7ZMSGP9dTynEd03WMHklX1EtXDF9lxuN4lxch32QjsWPubZretuDjT4HvXFn2jyWc%2F%2BFdCpj9%2FV7DjXg03yEIUIBMsx9FJVoJYBpkRNuJooRzMdOySNS3eabtsKoh8Y1HVzJ2SyzPocjE3JVGzY6cjwNnioO6wT%2Bu259ZgMde9Cc35lxXjr3r4EXSemj9jhsatxpqLjx7t5hPeakaPDTJQyiJxTRY4NAEXRPOs16GhVbiEIm0pokoqzKS%2FaO%2BA4x7c0iiW1HGUKL80O8UqwikcPAqRfpv5eXzZ1y0wQChFtd9E4kDaFlQCE%2BpHBMI9jXQrlYl4u51fMslhkx62%2F4pRU9cIUHjYvQnJY5IyZUg4S0lSw9rJ8Ny6%2BOUysUT2O1tiNo%2BpycO2WPdP4D5Di8oQmsaNn%2FY8XamLg3%2FmIPjR9OBVvHCu4C4toHgEApWj8j%2BIvTacpBidhera3aTHDOm0NO3EisQIBQEWaytnpCedskpf1sjgbcSxvX48304S7D%2F9tpqRbOjuR17IqpzjwGUqwTrQ%2FrB2dLjwdJd3BXNjAuK9Zph8H4O4vT8sWC0DxoNbFP9WQd7DOHr1PQi7E3zOL%2Bp8of6rLBNCPUUUY83LmZjyQSc4w8t6fwgY6pgE7GhfVqDFD%2FWYHmsGbQRhGSarRoBAtlukkgvl6fu7XrMN4CPjsy9ukkBo9R9rJ%2BqdbXJ%2FQBbu%2F8iPUVjed78NaYLOD4fByaeNaaZOI4gAwW5Aw1Eui7%2Bjj6yDTQxo84yX8egF9%2FVZQRQjBrssk2P8eyyaBUuUlLRVKVPHBtjOGwGAkWjenwXpABwex2XIhghWO%2FIq%2FnNBLJoczZQ5UacBw%2F3vgDjrH&X-Amz-Signature=63234faf3820960a5e71b37fc18c63618aadd1561afeb9c6bb89e9981496c65a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
