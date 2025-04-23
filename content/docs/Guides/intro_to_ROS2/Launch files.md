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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAZGWEA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC0RYHbPByb7bQJ9USLTR1R0MoLetf1hwGZ9TlHACwZRQIhAL3oWUYjV7bvVmFE86vioM3lDUMZe12VdZG5qVe5m2cOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkopfJ%2FRt10GyQ4DYq3AN3dSf8%2BPUyOVXWKt2bf0otCr3q6T3M%2FZDPBLdOeVruIaN7ReHumoaMyjxdKYKUwgpGGJfThbeCLGEbI4gtdru%2Bs7ML%2FPzAt7Ytrj26dJhlwIOKQeQH3%2Bo8oUvFWnb3pgOppBxfJWQfcHunsyroMHv1gLLdRF5Yv59l9wEncKy%2BW2Ykc7dridSsws4eAvfsUwEUC7u7hAK%2Fr1v4a2S%2BTk9BVgCOpR7E%2Fp3Tn1UyIKX8%2Bj15pzjGKiBBYpygYIPRrHIHvwVQfRvU0fVOITbG8r7VZUIQ7%2BEngkLTwYCcuHWzkaKJGk5Oms31jUdBvgGSVS965LWrrbPpXscrmnFa7fhcuYWoFSw53AzQC98Pe0ZySEeCIgdhe9nKAob98PAmqT5DOuVz5jqaZwHTg5Lue77BFtUdx3wJtwu76nhHZIpahqj3zIPPqCc%2B7df3nj8nDMGKy1PUKlkGR%2BjG%2BZDT7kc9PyfSJzBqorns4cOfNYt1Igi9WNVu81slcLvOLFCgk%2FdEUalUs8WrOt0PNyNVawqOiYAxScNzlRtDKT2bo%2B%2Bvkb3m%2FkSVlBs0HbyuUDrC8ltCEkxauDFHzRauq9OxtXq6enDJiohRNaYa3Wx9paQYpd64VGqWOddzlGfxbTDOjaXABjqkAX%2B%2FBReg4NQ2%2BqgKwS1CrX001dXxXYzuo%2FSWpyB%2Brx1LDU7WWxEvRoNqNQ2xE9RiTRqLEOL3gEgeoVZFicyeF2xvJuiiKg4DFj%2BjXeS2msJFcLgLiveoDocARtdPI7s%2B5M6q6k%2BlBZd4vNVzRK%2BbYwUTcOpdUSprJEy9PDZzOE21WrgD2MaMBSnsr3P6JeeL%2FVCSIPz7g7UoCc3L5YFrWcc2u8VM&X-Amz-Signature=fffc15447f636359c6d6842473a38d61583000c5433dbbb42129986c383c5a49&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAZGWEA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC0RYHbPByb7bQJ9USLTR1R0MoLetf1hwGZ9TlHACwZRQIhAL3oWUYjV7bvVmFE86vioM3lDUMZe12VdZG5qVe5m2cOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkopfJ%2FRt10GyQ4DYq3AN3dSf8%2BPUyOVXWKt2bf0otCr3q6T3M%2FZDPBLdOeVruIaN7ReHumoaMyjxdKYKUwgpGGJfThbeCLGEbI4gtdru%2Bs7ML%2FPzAt7Ytrj26dJhlwIOKQeQH3%2Bo8oUvFWnb3pgOppBxfJWQfcHunsyroMHv1gLLdRF5Yv59l9wEncKy%2BW2Ykc7dridSsws4eAvfsUwEUC7u7hAK%2Fr1v4a2S%2BTk9BVgCOpR7E%2Fp3Tn1UyIKX8%2Bj15pzjGKiBBYpygYIPRrHIHvwVQfRvU0fVOITbG8r7VZUIQ7%2BEngkLTwYCcuHWzkaKJGk5Oms31jUdBvgGSVS965LWrrbPpXscrmnFa7fhcuYWoFSw53AzQC98Pe0ZySEeCIgdhe9nKAob98PAmqT5DOuVz5jqaZwHTg5Lue77BFtUdx3wJtwu76nhHZIpahqj3zIPPqCc%2B7df3nj8nDMGKy1PUKlkGR%2BjG%2BZDT7kc9PyfSJzBqorns4cOfNYt1Igi9WNVu81slcLvOLFCgk%2FdEUalUs8WrOt0PNyNVawqOiYAxScNzlRtDKT2bo%2B%2Bvkb3m%2FkSVlBs0HbyuUDrC8ltCEkxauDFHzRauq9OxtXq6enDJiohRNaYa3Wx9paQYpd64VGqWOddzlGfxbTDOjaXABjqkAX%2B%2FBReg4NQ2%2BqgKwS1CrX001dXxXYzuo%2FSWpyB%2Brx1LDU7WWxEvRoNqNQ2xE9RiTRqLEOL3gEgeoVZFicyeF2xvJuiiKg4DFj%2BjXeS2msJFcLgLiveoDocARtdPI7s%2B5M6q6k%2BlBZd4vNVzRK%2BbYwUTcOpdUSprJEy9PDZzOE21WrgD2MaMBSnsr3P6JeeL%2FVCSIPz7g7UoCc3L5YFrWcc2u8VM&X-Amz-Signature=859a320c47211e2f664010f829f4e60fad40199ee3215e0b527a73f42e06e15a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAZGWEA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC0RYHbPByb7bQJ9USLTR1R0MoLetf1hwGZ9TlHACwZRQIhAL3oWUYjV7bvVmFE86vioM3lDUMZe12VdZG5qVe5m2cOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkopfJ%2FRt10GyQ4DYq3AN3dSf8%2BPUyOVXWKt2bf0otCr3q6T3M%2FZDPBLdOeVruIaN7ReHumoaMyjxdKYKUwgpGGJfThbeCLGEbI4gtdru%2Bs7ML%2FPzAt7Ytrj26dJhlwIOKQeQH3%2Bo8oUvFWnb3pgOppBxfJWQfcHunsyroMHv1gLLdRF5Yv59l9wEncKy%2BW2Ykc7dridSsws4eAvfsUwEUC7u7hAK%2Fr1v4a2S%2BTk9BVgCOpR7E%2Fp3Tn1UyIKX8%2Bj15pzjGKiBBYpygYIPRrHIHvwVQfRvU0fVOITbG8r7VZUIQ7%2BEngkLTwYCcuHWzkaKJGk5Oms31jUdBvgGSVS965LWrrbPpXscrmnFa7fhcuYWoFSw53AzQC98Pe0ZySEeCIgdhe9nKAob98PAmqT5DOuVz5jqaZwHTg5Lue77BFtUdx3wJtwu76nhHZIpahqj3zIPPqCc%2B7df3nj8nDMGKy1PUKlkGR%2BjG%2BZDT7kc9PyfSJzBqorns4cOfNYt1Igi9WNVu81slcLvOLFCgk%2FdEUalUs8WrOt0PNyNVawqOiYAxScNzlRtDKT2bo%2B%2Bvkb3m%2FkSVlBs0HbyuUDrC8ltCEkxauDFHzRauq9OxtXq6enDJiohRNaYa3Wx9paQYpd64VGqWOddzlGfxbTDOjaXABjqkAX%2B%2FBReg4NQ2%2BqgKwS1CrX001dXxXYzuo%2FSWpyB%2Brx1LDU7WWxEvRoNqNQ2xE9RiTRqLEOL3gEgeoVZFicyeF2xvJuiiKg4DFj%2BjXeS2msJFcLgLiveoDocARtdPI7s%2B5M6q6k%2BlBZd4vNVzRK%2BbYwUTcOpdUSprJEy9PDZzOE21WrgD2MaMBSnsr3P6JeeL%2FVCSIPz7g7UoCc3L5YFrWcc2u8VM&X-Amz-Signature=b013e50f59def9ada4c08af04b1e057fb7b4d6a0ee6a0023b1991acb35399fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
