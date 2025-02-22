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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVRGHX6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7A4Mue5exnT8iWOETVB9ubwRxrVZUsEog0BtKLiDyWAiB%2BFMJgWJwfubWyxF57I%2FRhox5%2Foz5cc7syojBMmr8%2FsCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWa4fimR4D3t6H5k1KtwD4Ts36IqvRE4RrTiNIJHmoXuEb3322jFF3BbQTShr12USg6OCR9aWY9lXlLyP%2Fo9tfb759A1VeYBT8E6tT%2Bv%2FD4xCMJbYBspwJ0KWU7yolICNtlTHDq73RJhyAxzCvvhGbYgioNGuaOfTYfxnp5DlrohWEKJ4kGy7LTdW11Xg%2B45pPLmQO3Q5MPGBK1MjN0qFChjABKe%2BRCFqMrCQufbMurQlgDzpdU7VjH5JWGrBL8L88dPI65XQyzR9XLZgYevAfA%2BoOINlEdXz9hbwgLs4QnB66l%2F0eOFKuqIUTDbxSsx168BNySwNdczpXnbaV82f9JpNIPpL5wf826CA9s8Wv7h2Rxsh65oDcjY8FJOZIMFEK45UxnEO4teQce%2BYq7N0IYNdYLqdCakse5owCYfZrweAn7Ehw28w%2Fm2GvCBd1zO%2FrYNqvUcqm7qG4WQaMav4WvbsA5FMnjn1rvby9VcvG8OyUuknc9ZcePWMj0gSzxuIJJbYru16D75oIWdJx2w1gxIf7UGrqv%2FCoMRkvYUAgoyrPL1ZUhOo6EqW6fE1LdLjIC7icmxO9D13%2BEqc4nCT6QKhe9AFSSDnHt0LjbXZPpw%2BtUrwj3bdm1xvw%2FC2s660l%2FRuKb1ufoW%2FJAYwu8flvQY6pgFG6%2FGKQUUwP8IvVBDtUFNDR2Pb9pskPdSeRyH3o6gVH%2Bw4GN%2B0f%2Fqmm0eNfKZEZg8E6G3AByL2t5NEMA42yFk2XLF1g2qeAFTLflsCSS4Nsh8e4tNL9bdNQLHVbMDSp7iraajquvWFL95pQ317KOmj9WHmiR4ijN0ZVQ0%2FKEnQ%2Ff%2BxEFyos1nh1Hont0i8B2CK%2FBZgo%2FB5gRDejy%2BVu5UoQemIawvT&X-Amz-Signature=ecd8d3624ac3d471bbe542574d7d7f5b0904412ecb4e87f6c4d487571422c610&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVRGHX6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7A4Mue5exnT8iWOETVB9ubwRxrVZUsEog0BtKLiDyWAiB%2BFMJgWJwfubWyxF57I%2FRhox5%2Foz5cc7syojBMmr8%2FsCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWa4fimR4D3t6H5k1KtwD4Ts36IqvRE4RrTiNIJHmoXuEb3322jFF3BbQTShr12USg6OCR9aWY9lXlLyP%2Fo9tfb759A1VeYBT8E6tT%2Bv%2FD4xCMJbYBspwJ0KWU7yolICNtlTHDq73RJhyAxzCvvhGbYgioNGuaOfTYfxnp5DlrohWEKJ4kGy7LTdW11Xg%2B45pPLmQO3Q5MPGBK1MjN0qFChjABKe%2BRCFqMrCQufbMurQlgDzpdU7VjH5JWGrBL8L88dPI65XQyzR9XLZgYevAfA%2BoOINlEdXz9hbwgLs4QnB66l%2F0eOFKuqIUTDbxSsx168BNySwNdczpXnbaV82f9JpNIPpL5wf826CA9s8Wv7h2Rxsh65oDcjY8FJOZIMFEK45UxnEO4teQce%2BYq7N0IYNdYLqdCakse5owCYfZrweAn7Ehw28w%2Fm2GvCBd1zO%2FrYNqvUcqm7qG4WQaMav4WvbsA5FMnjn1rvby9VcvG8OyUuknc9ZcePWMj0gSzxuIJJbYru16D75oIWdJx2w1gxIf7UGrqv%2FCoMRkvYUAgoyrPL1ZUhOo6EqW6fE1LdLjIC7icmxO9D13%2BEqc4nCT6QKhe9AFSSDnHt0LjbXZPpw%2BtUrwj3bdm1xvw%2FC2s660l%2FRuKb1ufoW%2FJAYwu8flvQY6pgFG6%2FGKQUUwP8IvVBDtUFNDR2Pb9pskPdSeRyH3o6gVH%2Bw4GN%2B0f%2Fqmm0eNfKZEZg8E6G3AByL2t5NEMA42yFk2XLF1g2qeAFTLflsCSS4Nsh8e4tNL9bdNQLHVbMDSp7iraajquvWFL95pQ317KOmj9WHmiR4ijN0ZVQ0%2FKEnQ%2Ff%2BxEFyos1nh1Hont0i8B2CK%2FBZgo%2FB5gRDejy%2BVu5UoQemIawvT&X-Amz-Signature=4c37a6df5b2c77435ed83b6ab4a9c0f0b5eaea353e4f7fa3c914427ce21c44eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVRGHX6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7A4Mue5exnT8iWOETVB9ubwRxrVZUsEog0BtKLiDyWAiB%2BFMJgWJwfubWyxF57I%2FRhox5%2Foz5cc7syojBMmr8%2FsCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWa4fimR4D3t6H5k1KtwD4Ts36IqvRE4RrTiNIJHmoXuEb3322jFF3BbQTShr12USg6OCR9aWY9lXlLyP%2Fo9tfb759A1VeYBT8E6tT%2Bv%2FD4xCMJbYBspwJ0KWU7yolICNtlTHDq73RJhyAxzCvvhGbYgioNGuaOfTYfxnp5DlrohWEKJ4kGy7LTdW11Xg%2B45pPLmQO3Q5MPGBK1MjN0qFChjABKe%2BRCFqMrCQufbMurQlgDzpdU7VjH5JWGrBL8L88dPI65XQyzR9XLZgYevAfA%2BoOINlEdXz9hbwgLs4QnB66l%2F0eOFKuqIUTDbxSsx168BNySwNdczpXnbaV82f9JpNIPpL5wf826CA9s8Wv7h2Rxsh65oDcjY8FJOZIMFEK45UxnEO4teQce%2BYq7N0IYNdYLqdCakse5owCYfZrweAn7Ehw28w%2Fm2GvCBd1zO%2FrYNqvUcqm7qG4WQaMav4WvbsA5FMnjn1rvby9VcvG8OyUuknc9ZcePWMj0gSzxuIJJbYru16D75oIWdJx2w1gxIf7UGrqv%2FCoMRkvYUAgoyrPL1ZUhOo6EqW6fE1LdLjIC7icmxO9D13%2BEqc4nCT6QKhe9AFSSDnHt0LjbXZPpw%2BtUrwj3bdm1xvw%2FC2s660l%2FRuKb1ufoW%2FJAYwu8flvQY6pgFG6%2FGKQUUwP8IvVBDtUFNDR2Pb9pskPdSeRyH3o6gVH%2Bw4GN%2B0f%2Fqmm0eNfKZEZg8E6G3AByL2t5NEMA42yFk2XLF1g2qeAFTLflsCSS4Nsh8e4tNL9bdNQLHVbMDSp7iraajquvWFL95pQ317KOmj9WHmiR4ijN0ZVQ0%2FKEnQ%2Ff%2BxEFyos1nh1Hont0i8B2CK%2FBZgo%2FB5gRDejy%2BVu5UoQemIawvT&X-Amz-Signature=e1dda65a5a38a2e753b6d178c145cb31a2dbaec192a8cae1bb218dd4d1672fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
