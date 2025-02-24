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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRY32XLD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL8K6WYZAX4DJ69hYbfStiNDnGn1USI4T9Xu6QRIi2OAiBgS0GK8IBKzVvd41umnL55Q6doYsrk8xKPgnVaAJrNxCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMzczqCFWLgasPL0uEKtwDh8OssCLugr6%2FhjVf4KZJSRQ8Ow7See9ZhtOHG2vj973i9fpaOftNW3LSZUr2JMAaJKp9jTJYdGoqmemPZfvWqbrzRwUULfA%2FBAY9gTvpYYMEjh6ELbrheO7Oq17v2plCfGOR9Hw%2B3Cii4Z%2FFZpcAtubGvf%2FhyoFFxJUHHm2xH%2BAvsSXk1E8%2Fx9LlMqjfmRr4YmxoKpbz9kJEVx%2Bt2M5n7pQYvV5gqPdpwyB2B%2FZQV2CVBii%2BKpNqZJADtQRDEKTs%2Bs%2Bg50GXZjjNK09oQYT4k%2FhgLmWLzy7vg8q%2FVdBQsldi1aRYjEhvSG3mkcUDu0Fn9XGoUU4SPECjBZSUIsUeQFFnuxczPZcyLxe1HFfK92BDaEoxCUzJ%2F9I1s8JngJynawUA502qYAENhfGLMywKj5Lh0sztO1OVHxue%2BkxYGHHYbpglXyVolJrrdeIImqSeSg7AovjbEddn725MC9qWSFAi%2Bdy3jLbzuayTT82bEUYEuMg%2BxTcPNEl97BLoEm8VpZtRAn2wHAtn9l53HHlkmbCxbvsuf2P9xmaK6NHynsLLFSRdcpQiYVDDfA4OSCu39iWk5Q7RAPxC7HsKl6J9laVbA6JhzRkdYs0IXeZ9WMYTE9ciUL8az4vJo08w1P7xvQY6pgFpi4f7jn0uUj9wVujS9CdYcLsbnq7gKAd%2BV4U4qjl2caykM6wx0MYG8ZhXDNNr4K2%2B4Fq2nlPIHvW24ZzMAxbwhxggcBRh0o7wzDKWV3jXt5V1U24Ei5ubY%2FrID65qgDaNAtoO5Tt7ckHP28h%2Fo0YPjhET4WGXdoE6Ed01eEbSiLxQXdvrGCa3kYjsrjTnxWtEZ1PQEdOHx3IiUpxG4hqAI0Q7ldqO&X-Amz-Signature=a835d511b41a52b56b5a364d839abf7c4fe896e2dfc94d2e0eeb28c5d74aa60d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRY32XLD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL8K6WYZAX4DJ69hYbfStiNDnGn1USI4T9Xu6QRIi2OAiBgS0GK8IBKzVvd41umnL55Q6doYsrk8xKPgnVaAJrNxCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMzczqCFWLgasPL0uEKtwDh8OssCLugr6%2FhjVf4KZJSRQ8Ow7See9ZhtOHG2vj973i9fpaOftNW3LSZUr2JMAaJKp9jTJYdGoqmemPZfvWqbrzRwUULfA%2FBAY9gTvpYYMEjh6ELbrheO7Oq17v2plCfGOR9Hw%2B3Cii4Z%2FFZpcAtubGvf%2FhyoFFxJUHHm2xH%2BAvsSXk1E8%2Fx9LlMqjfmRr4YmxoKpbz9kJEVx%2Bt2M5n7pQYvV5gqPdpwyB2B%2FZQV2CVBii%2BKpNqZJADtQRDEKTs%2Bs%2Bg50GXZjjNK09oQYT4k%2FhgLmWLzy7vg8q%2FVdBQsldi1aRYjEhvSG3mkcUDu0Fn9XGoUU4SPECjBZSUIsUeQFFnuxczPZcyLxe1HFfK92BDaEoxCUzJ%2F9I1s8JngJynawUA502qYAENhfGLMywKj5Lh0sztO1OVHxue%2BkxYGHHYbpglXyVolJrrdeIImqSeSg7AovjbEddn725MC9qWSFAi%2Bdy3jLbzuayTT82bEUYEuMg%2BxTcPNEl97BLoEm8VpZtRAn2wHAtn9l53HHlkmbCxbvsuf2P9xmaK6NHynsLLFSRdcpQiYVDDfA4OSCu39iWk5Q7RAPxC7HsKl6J9laVbA6JhzRkdYs0IXeZ9WMYTE9ciUL8az4vJo08w1P7xvQY6pgFpi4f7jn0uUj9wVujS9CdYcLsbnq7gKAd%2BV4U4qjl2caykM6wx0MYG8ZhXDNNr4K2%2B4Fq2nlPIHvW24ZzMAxbwhxggcBRh0o7wzDKWV3jXt5V1U24Ei5ubY%2FrID65qgDaNAtoO5Tt7ckHP28h%2Fo0YPjhET4WGXdoE6Ed01eEbSiLxQXdvrGCa3kYjsrjTnxWtEZ1PQEdOHx3IiUpxG4hqAI0Q7ldqO&X-Amz-Signature=fc095be0d3621f7981a384f83a4c52fd54a75fc4bfce3e805e65b5b362000479&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRY32XLD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDL8K6WYZAX4DJ69hYbfStiNDnGn1USI4T9Xu6QRIi2OAiBgS0GK8IBKzVvd41umnL55Q6doYsrk8xKPgnVaAJrNxCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMzczqCFWLgasPL0uEKtwDh8OssCLugr6%2FhjVf4KZJSRQ8Ow7See9ZhtOHG2vj973i9fpaOftNW3LSZUr2JMAaJKp9jTJYdGoqmemPZfvWqbrzRwUULfA%2FBAY9gTvpYYMEjh6ELbrheO7Oq17v2plCfGOR9Hw%2B3Cii4Z%2FFZpcAtubGvf%2FhyoFFxJUHHm2xH%2BAvsSXk1E8%2Fx9LlMqjfmRr4YmxoKpbz9kJEVx%2Bt2M5n7pQYvV5gqPdpwyB2B%2FZQV2CVBii%2BKpNqZJADtQRDEKTs%2Bs%2Bg50GXZjjNK09oQYT4k%2FhgLmWLzy7vg8q%2FVdBQsldi1aRYjEhvSG3mkcUDu0Fn9XGoUU4SPECjBZSUIsUeQFFnuxczPZcyLxe1HFfK92BDaEoxCUzJ%2F9I1s8JngJynawUA502qYAENhfGLMywKj5Lh0sztO1OVHxue%2BkxYGHHYbpglXyVolJrrdeIImqSeSg7AovjbEddn725MC9qWSFAi%2Bdy3jLbzuayTT82bEUYEuMg%2BxTcPNEl97BLoEm8VpZtRAn2wHAtn9l53HHlkmbCxbvsuf2P9xmaK6NHynsLLFSRdcpQiYVDDfA4OSCu39iWk5Q7RAPxC7HsKl6J9laVbA6JhzRkdYs0IXeZ9WMYTE9ciUL8az4vJo08w1P7xvQY6pgFpi4f7jn0uUj9wVujS9CdYcLsbnq7gKAd%2BV4U4qjl2caykM6wx0MYG8ZhXDNNr4K2%2B4Fq2nlPIHvW24ZzMAxbwhxggcBRh0o7wzDKWV3jXt5V1U24Ei5ubY%2FrID65qgDaNAtoO5Tt7ckHP28h%2Fo0YPjhET4WGXdoE6Ed01eEbSiLxQXdvrGCa3kYjsrjTnxWtEZ1PQEdOHx3IiUpxG4hqAI0Q7ldqO&X-Amz-Signature=513712828540152d1d4289c5a1a88e5691e1f3b0863456983b77329010b27dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
