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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYKZ7NOU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9h8GPEmMAKlhADrDi851RxnjIQGPTkx05%2BrDnpD4QNQIgLeGAShDrIt%2F9dP1GSpTIhA28nhYYtAA0lfv7I5WE5dUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLWMXK9K0z%2BOTPMVYircAye5oy4JxOWTKp83V%2BaWuqf5%2B1DLR58OIfBjskiJ1bcc8vQZLx6QS985p0Xc7o0kr1Bhhr9vz0f9PsibK%2BYh9k53T5swnf0sADLfpdZLFR09K5Jmjp8aln1ebMuQshaZItFIlLCrHExAuT806FoTwWq%2FYm9WieJhB7VkuZpCEwjnMs7Qc6xfWx1lMcrk37kntx8tuU1cX7opJOxvkgIc0R%2F8hEabdjXdmGpl1JecRUwRQKjvY8vAKcVQyLrEq%2FFTS4flLyzq0aBHWnf7BaPfWicuEGFA%2FGBXq3cz5Mxb55PbypJQUhehnj41D4dlDffhQuxYBQINpISZ20AnalrbzorvZHPPtCVGny7%2Fzv4m0kUNnvp%2B4CTj9aHs0ycjLPE8xqoTvOaIpy1%2FR81xPfiv5DZBUuK8Zw%2F3WvvN9QupOvBl%2BuOkCAgmChhNndC5AQxrYQzEVB97JllGpw3gwIQPX0uStBZcpwQD%2FG9LSlYbnBfue%2FP3LdYR%2FyGmPJgk3smJ6v%2BSAoD6OozJLV2NnXgR7Dz93ldy6RSZoBIS55sJ1wuayQVYUScjlSnf4ldKtecGJrK1WgeV%2BIghDHa8x5LlRBsmrKsVD9uAKZsrurPPdTnaALO8taK68YmDIUKfMKHC%2Bb8GOqUBUcCKbGd5yqEBJ9xdnoAxFnC1MZsqfCVUoBBgp2mDNKeMjGPaI3Spo1njVnNfJzboBo61%2FFOQKcHS2RjGtqXIlfJPZNwtFFy%2B5QgVdIRUIl8bFOqhafDorgnVbx%2Byf7WXamyoLsaXrooA2i4xnao6kN2lD4oTnyvlb5TmRFCNkyCTjirTZxZbr6q8l94yCF6L5%2FLqbbXKBpU4Jy2B4IHZpX42CFJq&X-Amz-Signature=31b670ce7f8bf5cd311d51f4e8d6bea272f540aeefc89aee93d8d292894f7b56&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYKZ7NOU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9h8GPEmMAKlhADrDi851RxnjIQGPTkx05%2BrDnpD4QNQIgLeGAShDrIt%2F9dP1GSpTIhA28nhYYtAA0lfv7I5WE5dUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLWMXK9K0z%2BOTPMVYircAye5oy4JxOWTKp83V%2BaWuqf5%2B1DLR58OIfBjskiJ1bcc8vQZLx6QS985p0Xc7o0kr1Bhhr9vz0f9PsibK%2BYh9k53T5swnf0sADLfpdZLFR09K5Jmjp8aln1ebMuQshaZItFIlLCrHExAuT806FoTwWq%2FYm9WieJhB7VkuZpCEwjnMs7Qc6xfWx1lMcrk37kntx8tuU1cX7opJOxvkgIc0R%2F8hEabdjXdmGpl1JecRUwRQKjvY8vAKcVQyLrEq%2FFTS4flLyzq0aBHWnf7BaPfWicuEGFA%2FGBXq3cz5Mxb55PbypJQUhehnj41D4dlDffhQuxYBQINpISZ20AnalrbzorvZHPPtCVGny7%2Fzv4m0kUNnvp%2B4CTj9aHs0ycjLPE8xqoTvOaIpy1%2FR81xPfiv5DZBUuK8Zw%2F3WvvN9QupOvBl%2BuOkCAgmChhNndC5AQxrYQzEVB97JllGpw3gwIQPX0uStBZcpwQD%2FG9LSlYbnBfue%2FP3LdYR%2FyGmPJgk3smJ6v%2BSAoD6OozJLV2NnXgR7Dz93ldy6RSZoBIS55sJ1wuayQVYUScjlSnf4ldKtecGJrK1WgeV%2BIghDHa8x5LlRBsmrKsVD9uAKZsrurPPdTnaALO8taK68YmDIUKfMKHC%2Bb8GOqUBUcCKbGd5yqEBJ9xdnoAxFnC1MZsqfCVUoBBgp2mDNKeMjGPaI3Spo1njVnNfJzboBo61%2FFOQKcHS2RjGtqXIlfJPZNwtFFy%2B5QgVdIRUIl8bFOqhafDorgnVbx%2Byf7WXamyoLsaXrooA2i4xnao6kN2lD4oTnyvlb5TmRFCNkyCTjirTZxZbr6q8l94yCF6L5%2FLqbbXKBpU4Jy2B4IHZpX42CFJq&X-Amz-Signature=f97e5caec7dcb26435e5c2a1088ac2c6b1aa9fe0ec1e15fd0f26d46bde236780&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYKZ7NOU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9h8GPEmMAKlhADrDi851RxnjIQGPTkx05%2BrDnpD4QNQIgLeGAShDrIt%2F9dP1GSpTIhA28nhYYtAA0lfv7I5WE5dUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLWMXK9K0z%2BOTPMVYircAye5oy4JxOWTKp83V%2BaWuqf5%2B1DLR58OIfBjskiJ1bcc8vQZLx6QS985p0Xc7o0kr1Bhhr9vz0f9PsibK%2BYh9k53T5swnf0sADLfpdZLFR09K5Jmjp8aln1ebMuQshaZItFIlLCrHExAuT806FoTwWq%2FYm9WieJhB7VkuZpCEwjnMs7Qc6xfWx1lMcrk37kntx8tuU1cX7opJOxvkgIc0R%2F8hEabdjXdmGpl1JecRUwRQKjvY8vAKcVQyLrEq%2FFTS4flLyzq0aBHWnf7BaPfWicuEGFA%2FGBXq3cz5Mxb55PbypJQUhehnj41D4dlDffhQuxYBQINpISZ20AnalrbzorvZHPPtCVGny7%2Fzv4m0kUNnvp%2B4CTj9aHs0ycjLPE8xqoTvOaIpy1%2FR81xPfiv5DZBUuK8Zw%2F3WvvN9QupOvBl%2BuOkCAgmChhNndC5AQxrYQzEVB97JllGpw3gwIQPX0uStBZcpwQD%2FG9LSlYbnBfue%2FP3LdYR%2FyGmPJgk3smJ6v%2BSAoD6OozJLV2NnXgR7Dz93ldy6RSZoBIS55sJ1wuayQVYUScjlSnf4ldKtecGJrK1WgeV%2BIghDHa8x5LlRBsmrKsVD9uAKZsrurPPdTnaALO8taK68YmDIUKfMKHC%2Bb8GOqUBUcCKbGd5yqEBJ9xdnoAxFnC1MZsqfCVUoBBgp2mDNKeMjGPaI3Spo1njVnNfJzboBo61%2FFOQKcHS2RjGtqXIlfJPZNwtFFy%2B5QgVdIRUIl8bFOqhafDorgnVbx%2Byf7WXamyoLsaXrooA2i4xnao6kN2lD4oTnyvlb5TmRFCNkyCTjirTZxZbr6q8l94yCF6L5%2FLqbbXKBpU4Jy2B4IHZpX42CFJq&X-Amz-Signature=f8e66d2d28cd6c21bb0a37ed6acbf67130139dea2f81a48c28a2d28155e8defe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
