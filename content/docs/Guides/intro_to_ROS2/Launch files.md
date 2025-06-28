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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWYKFMQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMHsJRKqzfj1Ma7DYDEpMSsOymBw4tCHEfLkX4EPatAiArBwp7HZrTSRRs914wCh9Cmv3OcZZKK56Z9nbT%2BPJY1iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZTgyDLXJG17zELGKtwDwgBSUnPvQcMyBqkv34E6ypZFBeILdRpRmIjHf1nNyyPzdqaWGnDhCwXyOvTFj4Hoy82%2F3OdGvkrrGBvAZODjFH2Tc64%2Be7RSIE0suem3Dx8931CIi500d6g8AiH0mTA%2F1e0rHbVNcNpO3XdpLCD1tUjbVqccxkI%2BKAtTqhHsMB2YBivY%2BrwrzSGBC1oAYszP3wgkeDVi4SGyFgQzUg%2BvA3a8Ms2oQZHIkO33pZ4X7cXcmldYiJnnEizAVB1OaNfklE2T9W%2BxVheMjlIZLlFrvql06XS5p7fvqj%2Fp7NkYrk2kw72oAyc8rckyoUu9IOdVOvC21%2FDmX6nx73P6oj5kJccc7K9c6o2UfVAE%2Ft6lCnvIFyuX0e60z9w0ys7xQ3ISBmR4zYWLg2Owp7l38XhyJ9kPDJ9hC%2BpQsFMpbJ3Y85chF6qQP0hhO7PiiVr4e8qlLv6pbUHuKlETXSxuJfZ5zsUBGYp19QvBa9ek%2Fc4cazvC8JVUyk%2FjHySp55c2Opqh3jX%2BKTF6%2BfYKaf65p%2FxWnTam6rB2WA0cBIljndgoeOSvrVnS7WOktLVn%2Ffc2DQsazWwKTa4qi8xk2zitLhCAdisp5Hq4yF%2Ba%2Fv15QBWWT4cteplTOVQYY0a2re4wlfr9wgY6pgH2VEnzuhMhGi7iUaOoS0l7Ds5y9yP06GpuEpl3qEPr%2FsQtGsxhA9qqfMy84bbti3O7TQXTo2O2EbN4p4Atio6wP1PXsHRkBcU9msOBM4QJRLgVj8pHoHPZ5v7RD11UGH%2FrEsJfPs5v%2FvDpBPg2KAfuZWb%2Ft7LiCoC8lF%2BOxAIS6EPjs%2F9cdFxgMerpQZf2T%2FzCd6ZcP%2FralM0Tl0rvM3Sj5Qz%2BgLLf&X-Amz-Signature=ae5487a8cdcfeb69303f650493fa49d7d305cb8eed6c940f90bd644b02407a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWYKFMQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMHsJRKqzfj1Ma7DYDEpMSsOymBw4tCHEfLkX4EPatAiArBwp7HZrTSRRs914wCh9Cmv3OcZZKK56Z9nbT%2BPJY1iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZTgyDLXJG17zELGKtwDwgBSUnPvQcMyBqkv34E6ypZFBeILdRpRmIjHf1nNyyPzdqaWGnDhCwXyOvTFj4Hoy82%2F3OdGvkrrGBvAZODjFH2Tc64%2Be7RSIE0suem3Dx8931CIi500d6g8AiH0mTA%2F1e0rHbVNcNpO3XdpLCD1tUjbVqccxkI%2BKAtTqhHsMB2YBivY%2BrwrzSGBC1oAYszP3wgkeDVi4SGyFgQzUg%2BvA3a8Ms2oQZHIkO33pZ4X7cXcmldYiJnnEizAVB1OaNfklE2T9W%2BxVheMjlIZLlFrvql06XS5p7fvqj%2Fp7NkYrk2kw72oAyc8rckyoUu9IOdVOvC21%2FDmX6nx73P6oj5kJccc7K9c6o2UfVAE%2Ft6lCnvIFyuX0e60z9w0ys7xQ3ISBmR4zYWLg2Owp7l38XhyJ9kPDJ9hC%2BpQsFMpbJ3Y85chF6qQP0hhO7PiiVr4e8qlLv6pbUHuKlETXSxuJfZ5zsUBGYp19QvBa9ek%2Fc4cazvC8JVUyk%2FjHySp55c2Opqh3jX%2BKTF6%2BfYKaf65p%2FxWnTam6rB2WA0cBIljndgoeOSvrVnS7WOktLVn%2Ffc2DQsazWwKTa4qi8xk2zitLhCAdisp5Hq4yF%2Ba%2Fv15QBWWT4cteplTOVQYY0a2re4wlfr9wgY6pgH2VEnzuhMhGi7iUaOoS0l7Ds5y9yP06GpuEpl3qEPr%2FsQtGsxhA9qqfMy84bbti3O7TQXTo2O2EbN4p4Atio6wP1PXsHRkBcU9msOBM4QJRLgVj8pHoHPZ5v7RD11UGH%2FrEsJfPs5v%2FvDpBPg2KAfuZWb%2Ft7LiCoC8lF%2BOxAIS6EPjs%2F9cdFxgMerpQZf2T%2FzCd6ZcP%2FralM0Tl0rvM3Sj5Qz%2BgLLf&X-Amz-Signature=e4c5101783b0ee02a6acd8eda4fc0987de8cde2cd4a24359b822ced4d5fc9881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWYKFMQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNMHsJRKqzfj1Ma7DYDEpMSsOymBw4tCHEfLkX4EPatAiArBwp7HZrTSRRs914wCh9Cmv3OcZZKK56Z9nbT%2BPJY1iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZTgyDLXJG17zELGKtwDwgBSUnPvQcMyBqkv34E6ypZFBeILdRpRmIjHf1nNyyPzdqaWGnDhCwXyOvTFj4Hoy82%2F3OdGvkrrGBvAZODjFH2Tc64%2Be7RSIE0suem3Dx8931CIi500d6g8AiH0mTA%2F1e0rHbVNcNpO3XdpLCD1tUjbVqccxkI%2BKAtTqhHsMB2YBivY%2BrwrzSGBC1oAYszP3wgkeDVi4SGyFgQzUg%2BvA3a8Ms2oQZHIkO33pZ4X7cXcmldYiJnnEizAVB1OaNfklE2T9W%2BxVheMjlIZLlFrvql06XS5p7fvqj%2Fp7NkYrk2kw72oAyc8rckyoUu9IOdVOvC21%2FDmX6nx73P6oj5kJccc7K9c6o2UfVAE%2Ft6lCnvIFyuX0e60z9w0ys7xQ3ISBmR4zYWLg2Owp7l38XhyJ9kPDJ9hC%2BpQsFMpbJ3Y85chF6qQP0hhO7PiiVr4e8qlLv6pbUHuKlETXSxuJfZ5zsUBGYp19QvBa9ek%2Fc4cazvC8JVUyk%2FjHySp55c2Opqh3jX%2BKTF6%2BfYKaf65p%2FxWnTam6rB2WA0cBIljndgoeOSvrVnS7WOktLVn%2Ffc2DQsazWwKTa4qi8xk2zitLhCAdisp5Hq4yF%2Ba%2Fv15QBWWT4cteplTOVQYY0a2re4wlfr9wgY6pgH2VEnzuhMhGi7iUaOoS0l7Ds5y9yP06GpuEpl3qEPr%2FsQtGsxhA9qqfMy84bbti3O7TQXTo2O2EbN4p4Atio6wP1PXsHRkBcU9msOBM4QJRLgVj8pHoHPZ5v7RD11UGH%2FrEsJfPs5v%2FvDpBPg2KAfuZWb%2Ft7LiCoC8lF%2BOxAIS6EPjs%2F9cdFxgMerpQZf2T%2FzCd6ZcP%2FralM0Tl0rvM3Sj5Qz%2BgLLf&X-Amz-Signature=95b61acc202511c2f1cf8ff2a27526f5dfc14baf5fcb6455596a09e1d9fdd2ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
