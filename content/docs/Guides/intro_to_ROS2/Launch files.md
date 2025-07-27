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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7ADRQ2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIH1cmmSZGp%2FgPGh2TQS55h%2BEtGn3ePK0mj870aiyI7JRAiEA9XAOXbp9nKJPQ7nY60nyf17eOZKIv0JWdTLKCy7puR4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEwKwZgsYUYgIqd%2FXircAxAFc6Q%2Bz1q2NSEY3wB0VK85ykcm8QfB9KoxWU7hRPi1x52ryzvBIvRXuYB0JQBLdh%2FNklRyi7e4Nv%2BS%2BBiJ%2BTgdBdlR4Bu6lJ%2Fa6aGulrn7wYKXvr%2BTTHLK0oz83IUKi3AkieJP%2FzrHPVrgobkorhSmMzh0cSOnaon6jVTfRy1N2Rvmae%2FY1F324Q64Yknbjtmlk8ref28YVM2vf0qKnwyP2uwFDiazrOFKCL9MjUP6puTvGlp7DcJ5J7pPokmR%2Fh50G8lpwTP47XdUczGf5NtP%2F8H5%2FkK9w0XoX90E8lUnQwvbjxt%2FgWxYYdBFemb8%2BY2yRqw0bb9q%2BfcfPDY6H0NfBh99ZysMhnSWE4KJw8jgom5folynM6vsn3E5rJh1OLimTssLZ6gCYBiiSDr40vpp37XXGTlCfsokXvxtkr8wFxo3MYouiQe9gHFPGzGn9lcy1Jb6bKYU5mg3l6Y1BsB0ODfUD%2F6y9lm44AmNkFSVjSEefItTqdqNKO1jnZDnJC%2FKZ%2FsvZn80FXozv30GSBBGwXvNzrdou7HWf57El7JohjUbRhjhsgkAek2YWGUu7lgwm9rL8MGjTw2qfdE%2Fqq%2BBbHbb9USeNoxUSLhb9wu52M%2Fp08ViOvLuzoTxMJS7lsQGOqUBVMyegUZEM5%2Bmvut7nfGD4lk4EChmrJvRTcCZjA%2BqJVcNiJykZBga58g22Zu5oyHgu59jc7FmwuOx6qqyGtFAoHXkL1aQZvMsVH%2FpU6Wn1lMnQCb%2F5s1thYlRZaC7zYFFw0ifi%2FJUDcie3HGEs0rdUAoAQ0ChkFBz3L8HHLis3TY%2F%2F6hRJIXEYX6VHwQ5eLG3KrYsShm4EBr7dxRCM7kGS%2ByHr%2BEc&X-Amz-Signature=570d9be42e870314959634e69efaef3787a3c99976e7e2491fc5057ff24bc21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7ADRQ2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIH1cmmSZGp%2FgPGh2TQS55h%2BEtGn3ePK0mj870aiyI7JRAiEA9XAOXbp9nKJPQ7nY60nyf17eOZKIv0JWdTLKCy7puR4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEwKwZgsYUYgIqd%2FXircAxAFc6Q%2Bz1q2NSEY3wB0VK85ykcm8QfB9KoxWU7hRPi1x52ryzvBIvRXuYB0JQBLdh%2FNklRyi7e4Nv%2BS%2BBiJ%2BTgdBdlR4Bu6lJ%2Fa6aGulrn7wYKXvr%2BTTHLK0oz83IUKi3AkieJP%2FzrHPVrgobkorhSmMzh0cSOnaon6jVTfRy1N2Rvmae%2FY1F324Q64Yknbjtmlk8ref28YVM2vf0qKnwyP2uwFDiazrOFKCL9MjUP6puTvGlp7DcJ5J7pPokmR%2Fh50G8lpwTP47XdUczGf5NtP%2F8H5%2FkK9w0XoX90E8lUnQwvbjxt%2FgWxYYdBFemb8%2BY2yRqw0bb9q%2BfcfPDY6H0NfBh99ZysMhnSWE4KJw8jgom5folynM6vsn3E5rJh1OLimTssLZ6gCYBiiSDr40vpp37XXGTlCfsokXvxtkr8wFxo3MYouiQe9gHFPGzGn9lcy1Jb6bKYU5mg3l6Y1BsB0ODfUD%2F6y9lm44AmNkFSVjSEefItTqdqNKO1jnZDnJC%2FKZ%2FsvZn80FXozv30GSBBGwXvNzrdou7HWf57El7JohjUbRhjhsgkAek2YWGUu7lgwm9rL8MGjTw2qfdE%2Fqq%2BBbHbb9USeNoxUSLhb9wu52M%2Fp08ViOvLuzoTxMJS7lsQGOqUBVMyegUZEM5%2Bmvut7nfGD4lk4EChmrJvRTcCZjA%2BqJVcNiJykZBga58g22Zu5oyHgu59jc7FmwuOx6qqyGtFAoHXkL1aQZvMsVH%2FpU6Wn1lMnQCb%2F5s1thYlRZaC7zYFFw0ifi%2FJUDcie3HGEs0rdUAoAQ0ChkFBz3L8HHLis3TY%2F%2F6hRJIXEYX6VHwQ5eLG3KrYsShm4EBr7dxRCM7kGS%2ByHr%2BEc&X-Amz-Signature=b870ff14bcffa03e5425fd47b080a213f0e7745617503efbc002a349f676892d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7ADRQ2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIH1cmmSZGp%2FgPGh2TQS55h%2BEtGn3ePK0mj870aiyI7JRAiEA9XAOXbp9nKJPQ7nY60nyf17eOZKIv0JWdTLKCy7puR4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEwKwZgsYUYgIqd%2FXircAxAFc6Q%2Bz1q2NSEY3wB0VK85ykcm8QfB9KoxWU7hRPi1x52ryzvBIvRXuYB0JQBLdh%2FNklRyi7e4Nv%2BS%2BBiJ%2BTgdBdlR4Bu6lJ%2Fa6aGulrn7wYKXvr%2BTTHLK0oz83IUKi3AkieJP%2FzrHPVrgobkorhSmMzh0cSOnaon6jVTfRy1N2Rvmae%2FY1F324Q64Yknbjtmlk8ref28YVM2vf0qKnwyP2uwFDiazrOFKCL9MjUP6puTvGlp7DcJ5J7pPokmR%2Fh50G8lpwTP47XdUczGf5NtP%2F8H5%2FkK9w0XoX90E8lUnQwvbjxt%2FgWxYYdBFemb8%2BY2yRqw0bb9q%2BfcfPDY6H0NfBh99ZysMhnSWE4KJw8jgom5folynM6vsn3E5rJh1OLimTssLZ6gCYBiiSDr40vpp37XXGTlCfsokXvxtkr8wFxo3MYouiQe9gHFPGzGn9lcy1Jb6bKYU5mg3l6Y1BsB0ODfUD%2F6y9lm44AmNkFSVjSEefItTqdqNKO1jnZDnJC%2FKZ%2FsvZn80FXozv30GSBBGwXvNzrdou7HWf57El7JohjUbRhjhsgkAek2YWGUu7lgwm9rL8MGjTw2qfdE%2Fqq%2BBbHbb9USeNoxUSLhb9wu52M%2Fp08ViOvLuzoTxMJS7lsQGOqUBVMyegUZEM5%2Bmvut7nfGD4lk4EChmrJvRTcCZjA%2BqJVcNiJykZBga58g22Zu5oyHgu59jc7FmwuOx6qqyGtFAoHXkL1aQZvMsVH%2FpU6Wn1lMnQCb%2F5s1thYlRZaC7zYFFw0ifi%2FJUDcie3HGEs0rdUAoAQ0ChkFBz3L8HHLis3TY%2F%2F6hRJIXEYX6VHwQ5eLG3KrYsShm4EBr7dxRCM7kGS%2ByHr%2BEc&X-Amz-Signature=140b2ae78a7f25661f523e66085c866c32859dc0feb14f52441cd05c5d9850f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
