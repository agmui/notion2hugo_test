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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SESZ3CRF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi%2FU1hD7CJgvJIPeHyzmGRghfSvI7mmFUIZoNo5q5n0AiB7hZKkjjOlVZxqiz10jzYXNtl38xEBdoZ3vEJsPLZ9ayr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMfjng5DSfOgeTn1twKtwDilCKbcEvQEUqz2DYTwlgJE90d08vEZhzbX9B7E%2Ba%2FBptmhqcD36xsp2l2Df93JrDPtmHqZGGKn%2Fe9mnntBKorQLHYwOKvk22HNpUdBSU6g3l%2F3lBNK7hguvrH3gafKSpQXE08fpOcLR%2BO6i4NM6VNZyT%2F5WwACzzmBiI%2F7D7uL%2FdpegFVh1r9jkgjio1iU4D%2BnUoyCqFX4W%2FE8OAh0koXp913fSNrdZPQ68mFg0MbwGDreGnAgBL9kLh5qVxr6g6J2W9aoO%2FfCz9isXjaw6CG7R9xXBRdi8pVtnQFcSs01fFQqCRmJgwq30c5jPOnG%2BPi3ZF1DLLIGOjfowESDtcnW2U2sgT7oWq5SSYTxOG%2Fds6MuaHzjUVaYI2hUWOMSZgIn7dlajYJtD%2BZzNc16vSgdHNFzo0XHLciXKTyRgCNFr3zj4nYS6qLKVAc7k%2BfBkXlAX6yiFvn6mkTVxpsoZvHW5MOKs0qVUp7dBjc5pqoDcmChW9qTcruu%2FQbhdAj6Pbmja2aZSJs30YnyT72FN4Kqmd9daFj%2BuuVxEZJtR%2FGBe3JM3c9K5wekllC5LBkSEi3Ozz5j2QH4L7Lui32nvbCO%2FrUCNyb5%2FuxYw6ptwNlT2r5fzyPwo%2Br7FGCYYwrevZwQY6pgFFiVs7tLwt93EyvrqOpLENR2e7KyktqsmH%2FqwasIKmyHgxppfhzdfVyRkio2shoZUxfqvs88yd%2B1iG5Y2aLzqRO3d5MYTYMEVQTiosXyJSZJyaNFyrVeBhaLZ7MNW2SAaYnb%2BZ1bD66Ww0gBb7BXZhJZuz41nBqRIS5Qn6lajV0UfR4GDagt3gWznsetgx1IteHPkmz5U9QkwX117oBJt7LBbGLZZ3&X-Amz-Signature=7082cc7530530dc5742160996505e17fe908d6ee3a2cf019b5472275db60c19a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SESZ3CRF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi%2FU1hD7CJgvJIPeHyzmGRghfSvI7mmFUIZoNo5q5n0AiB7hZKkjjOlVZxqiz10jzYXNtl38xEBdoZ3vEJsPLZ9ayr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMfjng5DSfOgeTn1twKtwDilCKbcEvQEUqz2DYTwlgJE90d08vEZhzbX9B7E%2Ba%2FBptmhqcD36xsp2l2Df93JrDPtmHqZGGKn%2Fe9mnntBKorQLHYwOKvk22HNpUdBSU6g3l%2F3lBNK7hguvrH3gafKSpQXE08fpOcLR%2BO6i4NM6VNZyT%2F5WwACzzmBiI%2F7D7uL%2FdpegFVh1r9jkgjio1iU4D%2BnUoyCqFX4W%2FE8OAh0koXp913fSNrdZPQ68mFg0MbwGDreGnAgBL9kLh5qVxr6g6J2W9aoO%2FfCz9isXjaw6CG7R9xXBRdi8pVtnQFcSs01fFQqCRmJgwq30c5jPOnG%2BPi3ZF1DLLIGOjfowESDtcnW2U2sgT7oWq5SSYTxOG%2Fds6MuaHzjUVaYI2hUWOMSZgIn7dlajYJtD%2BZzNc16vSgdHNFzo0XHLciXKTyRgCNFr3zj4nYS6qLKVAc7k%2BfBkXlAX6yiFvn6mkTVxpsoZvHW5MOKs0qVUp7dBjc5pqoDcmChW9qTcruu%2FQbhdAj6Pbmja2aZSJs30YnyT72FN4Kqmd9daFj%2BuuVxEZJtR%2FGBe3JM3c9K5wekllC5LBkSEi3Ozz5j2QH4L7Lui32nvbCO%2FrUCNyb5%2FuxYw6ptwNlT2r5fzyPwo%2Br7FGCYYwrevZwQY6pgFFiVs7tLwt93EyvrqOpLENR2e7KyktqsmH%2FqwasIKmyHgxppfhzdfVyRkio2shoZUxfqvs88yd%2B1iG5Y2aLzqRO3d5MYTYMEVQTiosXyJSZJyaNFyrVeBhaLZ7MNW2SAaYnb%2BZ1bD66Ww0gBb7BXZhJZuz41nBqRIS5Qn6lajV0UfR4GDagt3gWznsetgx1IteHPkmz5U9QkwX117oBJt7LBbGLZZ3&X-Amz-Signature=81223e583a883c8090be93b180012150678e9517d188a3c5d830df3609d4ad69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SESZ3CRF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi%2FU1hD7CJgvJIPeHyzmGRghfSvI7mmFUIZoNo5q5n0AiB7hZKkjjOlVZxqiz10jzYXNtl38xEBdoZ3vEJsPLZ9ayr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMfjng5DSfOgeTn1twKtwDilCKbcEvQEUqz2DYTwlgJE90d08vEZhzbX9B7E%2Ba%2FBptmhqcD36xsp2l2Df93JrDPtmHqZGGKn%2Fe9mnntBKorQLHYwOKvk22HNpUdBSU6g3l%2F3lBNK7hguvrH3gafKSpQXE08fpOcLR%2BO6i4NM6VNZyT%2F5WwACzzmBiI%2F7D7uL%2FdpegFVh1r9jkgjio1iU4D%2BnUoyCqFX4W%2FE8OAh0koXp913fSNrdZPQ68mFg0MbwGDreGnAgBL9kLh5qVxr6g6J2W9aoO%2FfCz9isXjaw6CG7R9xXBRdi8pVtnQFcSs01fFQqCRmJgwq30c5jPOnG%2BPi3ZF1DLLIGOjfowESDtcnW2U2sgT7oWq5SSYTxOG%2Fds6MuaHzjUVaYI2hUWOMSZgIn7dlajYJtD%2BZzNc16vSgdHNFzo0XHLciXKTyRgCNFr3zj4nYS6qLKVAc7k%2BfBkXlAX6yiFvn6mkTVxpsoZvHW5MOKs0qVUp7dBjc5pqoDcmChW9qTcruu%2FQbhdAj6Pbmja2aZSJs30YnyT72FN4Kqmd9daFj%2BuuVxEZJtR%2FGBe3JM3c9K5wekllC5LBkSEi3Ozz5j2QH4L7Lui32nvbCO%2FrUCNyb5%2FuxYw6ptwNlT2r5fzyPwo%2Br7FGCYYwrevZwQY6pgFFiVs7tLwt93EyvrqOpLENR2e7KyktqsmH%2FqwasIKmyHgxppfhzdfVyRkio2shoZUxfqvs88yd%2B1iG5Y2aLzqRO3d5MYTYMEVQTiosXyJSZJyaNFyrVeBhaLZ7MNW2SAaYnb%2BZ1bD66Ww0gBb7BXZhJZuz41nBqRIS5Qn6lajV0UfR4GDagt3gWznsetgx1IteHPkmz5U9QkwX117oBJt7LBbGLZZ3&X-Amz-Signature=0c3122c8c5c911178c7988726b8ef95d08ab161b4b7fcaf87809daa3402ff07e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
