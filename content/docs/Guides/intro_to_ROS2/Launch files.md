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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMVKONJ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEf%2F0qwnYXz9sT3kFKK6riHRzOjnP%2FXIgPL97XFMNa4NAiA4m%2FHjQncdxUSghkOOTwWLNeI1xbUZ1pBc8K%2BVQKxbZiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06gODmKqr6jBnAcgKtwDPtWCfJ6PADF5p3arvazeawlwADKsDVUfzEqvMLZOg7wblX6UnWTicj3hTAoud6%2BEPtpRyhzOqMu1wf4np3kONyI%2FJbl0I%2BZOYp7OcalqBkLiicWrqXYmfTG6afKqV6IVSYiX4hVinnmNH9R2a4%2Be%2FC3AYZcUJX%2B%2BgvpoAdXU8B6Tze0Uur%2BBlrhESnpA47Fe3027F41d3o7boQY2mtUmdXZ09mxT9mqxFhDZ%2BRoI4T6Xf0XiRU%2FilwSbRWqjzzUOzJL2gweg3mmV7CGAkBKmoxmVinWILgQnzWgvZHsS%2FZSUoOwh9YDnhTCKnrDoZdW3MAjpdH8LKHT3d7zUHr6qWEv6skTfbPwV1y8DnC%2FTAKYQR6yHmp%2B6WNYkpRkvyuv6vy%2Fc4gRrjfTveUxpLFPOUElGwONPerKbde6JGQLHRI59Jv15Ry9cschiLWnuuT2tc9dFywubcYA%2BSgmwG1IPiAo7hlEzi0BV9TyVrwQJCokgiDnEAVvdPfe%2BIu%2F6unmmIU7WO2asZqkd%2B60FwJBByvUkWr4UIJZulg%2FZLKo1mRaVpbvXdfUU%2BzA%2FZpgOyvvq8bg3zNW5Ki8%2Fs3KhW1FTJwTRPLq%2F6IXOI1MdzhglcFH8oEeIGxQJRpME1Wgw0%2FaqvQY6pgFNp9B4KQC95X%2FTfBYcUlbeKmfe19J8feoB4P2VNZ98n41BfC6Kq795wczP0luU8yEH2LBkY%2FUZbYS%2FRfvkrpcmVdQNvxATVtWLiVKRjoZ%2FUBU11lwwaQLVVD0zSJkh9YpNUzxmbGeMDD9bPs%2BpKdGAA4N8%2FxbEQTxIylMY8HTq%2BZPymmy7%2FEPaBwHOeR02DJ8jygEdV1l3LJZ1olc%2FLfyYAzgzGarn&X-Amz-Signature=6103021322606ddbb2a50853d8b44efe3f87e04cb0853e86f98d7016e4a50356&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMVKONJ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEf%2F0qwnYXz9sT3kFKK6riHRzOjnP%2FXIgPL97XFMNa4NAiA4m%2FHjQncdxUSghkOOTwWLNeI1xbUZ1pBc8K%2BVQKxbZiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06gODmKqr6jBnAcgKtwDPtWCfJ6PADF5p3arvazeawlwADKsDVUfzEqvMLZOg7wblX6UnWTicj3hTAoud6%2BEPtpRyhzOqMu1wf4np3kONyI%2FJbl0I%2BZOYp7OcalqBkLiicWrqXYmfTG6afKqV6IVSYiX4hVinnmNH9R2a4%2Be%2FC3AYZcUJX%2B%2BgvpoAdXU8B6Tze0Uur%2BBlrhESnpA47Fe3027F41d3o7boQY2mtUmdXZ09mxT9mqxFhDZ%2BRoI4T6Xf0XiRU%2FilwSbRWqjzzUOzJL2gweg3mmV7CGAkBKmoxmVinWILgQnzWgvZHsS%2FZSUoOwh9YDnhTCKnrDoZdW3MAjpdH8LKHT3d7zUHr6qWEv6skTfbPwV1y8DnC%2FTAKYQR6yHmp%2B6WNYkpRkvyuv6vy%2Fc4gRrjfTveUxpLFPOUElGwONPerKbde6JGQLHRI59Jv15Ry9cschiLWnuuT2tc9dFywubcYA%2BSgmwG1IPiAo7hlEzi0BV9TyVrwQJCokgiDnEAVvdPfe%2BIu%2F6unmmIU7WO2asZqkd%2B60FwJBByvUkWr4UIJZulg%2FZLKo1mRaVpbvXdfUU%2BzA%2FZpgOyvvq8bg3zNW5Ki8%2Fs3KhW1FTJwTRPLq%2F6IXOI1MdzhglcFH8oEeIGxQJRpME1Wgw0%2FaqvQY6pgFNp9B4KQC95X%2FTfBYcUlbeKmfe19J8feoB4P2VNZ98n41BfC6Kq795wczP0luU8yEH2LBkY%2FUZbYS%2FRfvkrpcmVdQNvxATVtWLiVKRjoZ%2FUBU11lwwaQLVVD0zSJkh9YpNUzxmbGeMDD9bPs%2BpKdGAA4N8%2FxbEQTxIylMY8HTq%2BZPymmy7%2FEPaBwHOeR02DJ8jygEdV1l3LJZ1olc%2FLfyYAzgzGarn&X-Amz-Signature=ac4fdf957056efa18bf40a15048a99be9d488ac2c94273647b257ce8fe392d93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMVKONJ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEf%2F0qwnYXz9sT3kFKK6riHRzOjnP%2FXIgPL97XFMNa4NAiA4m%2FHjQncdxUSghkOOTwWLNeI1xbUZ1pBc8K%2BVQKxbZiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06gODmKqr6jBnAcgKtwDPtWCfJ6PADF5p3arvazeawlwADKsDVUfzEqvMLZOg7wblX6UnWTicj3hTAoud6%2BEPtpRyhzOqMu1wf4np3kONyI%2FJbl0I%2BZOYp7OcalqBkLiicWrqXYmfTG6afKqV6IVSYiX4hVinnmNH9R2a4%2Be%2FC3AYZcUJX%2B%2BgvpoAdXU8B6Tze0Uur%2BBlrhESnpA47Fe3027F41d3o7boQY2mtUmdXZ09mxT9mqxFhDZ%2BRoI4T6Xf0XiRU%2FilwSbRWqjzzUOzJL2gweg3mmV7CGAkBKmoxmVinWILgQnzWgvZHsS%2FZSUoOwh9YDnhTCKnrDoZdW3MAjpdH8LKHT3d7zUHr6qWEv6skTfbPwV1y8DnC%2FTAKYQR6yHmp%2B6WNYkpRkvyuv6vy%2Fc4gRrjfTveUxpLFPOUElGwONPerKbde6JGQLHRI59Jv15Ry9cschiLWnuuT2tc9dFywubcYA%2BSgmwG1IPiAo7hlEzi0BV9TyVrwQJCokgiDnEAVvdPfe%2BIu%2F6unmmIU7WO2asZqkd%2B60FwJBByvUkWr4UIJZulg%2FZLKo1mRaVpbvXdfUU%2BzA%2FZpgOyvvq8bg3zNW5Ki8%2Fs3KhW1FTJwTRPLq%2F6IXOI1MdzhglcFH8oEeIGxQJRpME1Wgw0%2FaqvQY6pgFNp9B4KQC95X%2FTfBYcUlbeKmfe19J8feoB4P2VNZ98n41BfC6Kq795wczP0luU8yEH2LBkY%2FUZbYS%2FRfvkrpcmVdQNvxATVtWLiVKRjoZ%2FUBU11lwwaQLVVD0zSJkh9YpNUzxmbGeMDD9bPs%2BpKdGAA4N8%2FxbEQTxIylMY8HTq%2BZPymmy7%2FEPaBwHOeR02DJ8jygEdV1l3LJZ1olc%2FLfyYAzgzGarn&X-Amz-Signature=03f4db0a6acaf654f89b057fdc9d6323e3e9e885ff8631d8499aa4ffa5e627d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
