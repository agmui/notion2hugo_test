---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA73EXDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9XVmXQBDx355MHCsQL274fMZES5OxiV31MIPI9w3w8gIhANACYk%2FYRul2vk0kIs0AVZVhTIwKwyikaKpl8Cg3yIl7KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6JymILSa71YoIp2Qq3ANgysNmDHUHXaMQBBKl4BeTjTyCkyqACYdAE0WqAV1vR3mw8q1y9z2q7%2B%2FwQk4F9ZWdSZ10niaZfTp3w3Njk4ZVHpBiqYiIo2mnqwK58D9AR3y52A9dWg%2BiwlX2HxppdbzEkWvJyklVTtHMt4F0TSbgv3P6sEeJ9Kqlkge5Xq80jYVelNg%2BL91QRwGfo%2BgUi%2FLRVowZzD8Sok8nCMIl2fXmUgfN9Pa%2FibIRxVQ4Lc%2FtE9S0cGXGJ2F%2FY5HRYZcUXQYtR9%2BPmFVyaCPNoU0wGssM%2F3TtgVX%2FkAjMQxBeDaalEmCrhMn7EMvTBqD%2Fl6%2BeDzp98UKDysPeuC5d7rlBQV%2Fgh6rh38LqAS2sCOMFpCGQvb4YHBK14hBoMPjtodA6YuhnO3fzwgKR8x4gb%2Fiu%2BTIXjghyC4ZVzjs3TO7Zs1GZ0HwfebZSqviH8gddLKkL4lRQ3zuRYgghAHyGqqePVrvFI6mLYUMJfsqY%2F5Yeko2Bk0RzaoxvdtUar2Ck0oeE8%2BcU%2FPxO2hf3tRF4BDuoTXOCOAu9baovpH4%2B7KbdXMnIm1MY8ymKKcTXf4yT9P6tvp9t%2Bn57zwDy6Pmi472c9LNp0YeV5TyJNbLw1nGvCC3nPkDPXBGGI9WbWSbFmTCuoqjEBjqkATQVco9%2BhMch7nipLyoT7PvNn4d%2FfoQhJu1pMpl9Svei3CIDAxbrgKbpExVNyeMdp1v2nN4CnluKDsiuUr6D%2BK14l1tKAfobVFXOp6pxgTO%2FrjzRNNF4r1xcYeWc8UIyyUn%2B42ID6zu687oYH%2B%2BB%2B9WxRJKfK4dfJLufhXkJ9CzP2gaNX1bjalb%2BPQWVv2pv7X8A259yiDc2BPJFoGN%2BU6y6XsnS&X-Amz-Signature=5384a61b3fe55841f3d3d2a44b799c2dbc2e02ac8c6375cb9a7155feac520425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA73EXDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9XVmXQBDx355MHCsQL274fMZES5OxiV31MIPI9w3w8gIhANACYk%2FYRul2vk0kIs0AVZVhTIwKwyikaKpl8Cg3yIl7KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6JymILSa71YoIp2Qq3ANgysNmDHUHXaMQBBKl4BeTjTyCkyqACYdAE0WqAV1vR3mw8q1y9z2q7%2B%2FwQk4F9ZWdSZ10niaZfTp3w3Njk4ZVHpBiqYiIo2mnqwK58D9AR3y52A9dWg%2BiwlX2HxppdbzEkWvJyklVTtHMt4F0TSbgv3P6sEeJ9Kqlkge5Xq80jYVelNg%2BL91QRwGfo%2BgUi%2FLRVowZzD8Sok8nCMIl2fXmUgfN9Pa%2FibIRxVQ4Lc%2FtE9S0cGXGJ2F%2FY5HRYZcUXQYtR9%2BPmFVyaCPNoU0wGssM%2F3TtgVX%2FkAjMQxBeDaalEmCrhMn7EMvTBqD%2Fl6%2BeDzp98UKDysPeuC5d7rlBQV%2Fgh6rh38LqAS2sCOMFpCGQvb4YHBK14hBoMPjtodA6YuhnO3fzwgKR8x4gb%2Fiu%2BTIXjghyC4ZVzjs3TO7Zs1GZ0HwfebZSqviH8gddLKkL4lRQ3zuRYgghAHyGqqePVrvFI6mLYUMJfsqY%2F5Yeko2Bk0RzaoxvdtUar2Ck0oeE8%2BcU%2FPxO2hf3tRF4BDuoTXOCOAu9baovpH4%2B7KbdXMnIm1MY8ymKKcTXf4yT9P6tvp9t%2Bn57zwDy6Pmi472c9LNp0YeV5TyJNbLw1nGvCC3nPkDPXBGGI9WbWSbFmTCuoqjEBjqkATQVco9%2BhMch7nipLyoT7PvNn4d%2FfoQhJu1pMpl9Svei3CIDAxbrgKbpExVNyeMdp1v2nN4CnluKDsiuUr6D%2BK14l1tKAfobVFXOp6pxgTO%2FrjzRNNF4r1xcYeWc8UIyyUn%2B42ID6zu687oYH%2B%2BB%2B9WxRJKfK4dfJLufhXkJ9CzP2gaNX1bjalb%2BPQWVv2pv7X8A259yiDc2BPJFoGN%2BU6y6XsnS&X-Amz-Signature=7b201d7bc62d36aa3c5255f96f81dcc574263f4473cef61e0e462ec59f5a6c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA73EXDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9XVmXQBDx355MHCsQL274fMZES5OxiV31MIPI9w3w8gIhANACYk%2FYRul2vk0kIs0AVZVhTIwKwyikaKpl8Cg3yIl7KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6JymILSa71YoIp2Qq3ANgysNmDHUHXaMQBBKl4BeTjTyCkyqACYdAE0WqAV1vR3mw8q1y9z2q7%2B%2FwQk4F9ZWdSZ10niaZfTp3w3Njk4ZVHpBiqYiIo2mnqwK58D9AR3y52A9dWg%2BiwlX2HxppdbzEkWvJyklVTtHMt4F0TSbgv3P6sEeJ9Kqlkge5Xq80jYVelNg%2BL91QRwGfo%2BgUi%2FLRVowZzD8Sok8nCMIl2fXmUgfN9Pa%2FibIRxVQ4Lc%2FtE9S0cGXGJ2F%2FY5HRYZcUXQYtR9%2BPmFVyaCPNoU0wGssM%2F3TtgVX%2FkAjMQxBeDaalEmCrhMn7EMvTBqD%2Fl6%2BeDzp98UKDysPeuC5d7rlBQV%2Fgh6rh38LqAS2sCOMFpCGQvb4YHBK14hBoMPjtodA6YuhnO3fzwgKR8x4gb%2Fiu%2BTIXjghyC4ZVzjs3TO7Zs1GZ0HwfebZSqviH8gddLKkL4lRQ3zuRYgghAHyGqqePVrvFI6mLYUMJfsqY%2F5Yeko2Bk0RzaoxvdtUar2Ck0oeE8%2BcU%2FPxO2hf3tRF4BDuoTXOCOAu9baovpH4%2B7KbdXMnIm1MY8ymKKcTXf4yT9P6tvp9t%2Bn57zwDy6Pmi472c9LNp0YeV5TyJNbLw1nGvCC3nPkDPXBGGI9WbWSbFmTCuoqjEBjqkATQVco9%2BhMch7nipLyoT7PvNn4d%2FfoQhJu1pMpl9Svei3CIDAxbrgKbpExVNyeMdp1v2nN4CnluKDsiuUr6D%2BK14l1tKAfobVFXOp6pxgTO%2FrjzRNNF4r1xcYeWc8UIyyUn%2B42ID6zu687oYH%2B%2BB%2B9WxRJKfK4dfJLufhXkJ9CzP2gaNX1bjalb%2BPQWVv2pv7X8A259yiDc2BPJFoGN%2BU6y6XsnS&X-Amz-Signature=f561f667f7734a6a78288a2d96388483b2c41bd82def012fbd08305b5309773a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
