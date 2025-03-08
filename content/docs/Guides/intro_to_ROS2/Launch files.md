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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEH67VD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC69qEM6uyTQggXAvsAlJ7SgamcGcko3CIZVyEso3A1XAIgLGdEOyw8046SqQBBpryrqmEerCatsyb0dQ47v7ws7GQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMmbMoXeEpi%2BOq7UYCrcA%2B5a0Bsd6IIa0GYSu%2FPUkT%2Fuged2X7u45dC%2Bosf4fyznieps9YbD4sH8UlsB5DfHhbquw%2FXJRhXAUScM7K9mLznsr2cvLqpWdPQEfW8xk9ignWVD5xq4IHO4Zvm5AEj3y0SsXbgPd7Kbi6UVHsbLZe8q4IUU6T0VrpISPndjDkDxZa7kJYNyKmSvRHWW7%2BL5RmBhjSIJRQbHnQYQdHfJ4xr2QPQK1NtQMmVRPptiEQrEQFLFgS317raP%2Bu%2FmmFxz4Lumf%2F0QcbiRtcnR6HYXfqNc4H02OohQ9kBvNa61fgx0JI%2FRFKteVWq0L1dale6HxH1VEwH8Px0ZYud%2B8dKMW8SeoxESlESU%2BzOerXy1JUAGmeDWsdJ9dWSSRFGdyMshXlssggBmfT8uBpR7qdK2XgfF6q9Ks8Xu7xbtTwQKcgqZGoU4lQo6X2U6k5KC4fZBs6Axs%2Bstc9fI4BT3%2FEVC2D%2FNnFvzNbwg5KrZoqc6u4o%2BzMRGPCcJQev3UWXZsM5u7Rw13GIA%2BRWd2w6%2BaHWsCTsXs%2BP6Dbgs43qwPSptIXT%2B5MmE7WB24CWvtFj8hNuRuXnefjdXoCZa8VKiHUHtvhN9sWQn0Mu80ye03KKK7kf8jLHw5xoyYrlafyahMJ7gr74GOqUBylEFoaGKPaVo4ZlvF7OTRAERx8kx8uhcmXfvNYso61VC%2BWG1mWwsnq7cnMW22%2FEKAtO5x%2F9L7%2FDFwpScOtGKvkNmMhvX7G8%2Bik%2B5NAIR4y0k%2B%2BFy8GxF4p%2B8auC5XikuFL3XbaLhMQ7cCt6BqVP4%2FKtpLDlEKqzFmYz4XXGgWRAN8XakX4ogyF0uXp4ck43GiVcwbacUJdv6TQloAPQeZDKyUXV8&X-Amz-Signature=01122f8258c304013d03162d92ee4863b1580a4f3e1ba56dacdedf34b502839e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEH67VD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC69qEM6uyTQggXAvsAlJ7SgamcGcko3CIZVyEso3A1XAIgLGdEOyw8046SqQBBpryrqmEerCatsyb0dQ47v7ws7GQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMmbMoXeEpi%2BOq7UYCrcA%2B5a0Bsd6IIa0GYSu%2FPUkT%2Fuged2X7u45dC%2Bosf4fyznieps9YbD4sH8UlsB5DfHhbquw%2FXJRhXAUScM7K9mLznsr2cvLqpWdPQEfW8xk9ignWVD5xq4IHO4Zvm5AEj3y0SsXbgPd7Kbi6UVHsbLZe8q4IUU6T0VrpISPndjDkDxZa7kJYNyKmSvRHWW7%2BL5RmBhjSIJRQbHnQYQdHfJ4xr2QPQK1NtQMmVRPptiEQrEQFLFgS317raP%2Bu%2FmmFxz4Lumf%2F0QcbiRtcnR6HYXfqNc4H02OohQ9kBvNa61fgx0JI%2FRFKteVWq0L1dale6HxH1VEwH8Px0ZYud%2B8dKMW8SeoxESlESU%2BzOerXy1JUAGmeDWsdJ9dWSSRFGdyMshXlssggBmfT8uBpR7qdK2XgfF6q9Ks8Xu7xbtTwQKcgqZGoU4lQo6X2U6k5KC4fZBs6Axs%2Bstc9fI4BT3%2FEVC2D%2FNnFvzNbwg5KrZoqc6u4o%2BzMRGPCcJQev3UWXZsM5u7Rw13GIA%2BRWd2w6%2BaHWsCTsXs%2BP6Dbgs43qwPSptIXT%2B5MmE7WB24CWvtFj8hNuRuXnefjdXoCZa8VKiHUHtvhN9sWQn0Mu80ye03KKK7kf8jLHw5xoyYrlafyahMJ7gr74GOqUBylEFoaGKPaVo4ZlvF7OTRAERx8kx8uhcmXfvNYso61VC%2BWG1mWwsnq7cnMW22%2FEKAtO5x%2F9L7%2FDFwpScOtGKvkNmMhvX7G8%2Bik%2B5NAIR4y0k%2B%2BFy8GxF4p%2B8auC5XikuFL3XbaLhMQ7cCt6BqVP4%2FKtpLDlEKqzFmYz4XXGgWRAN8XakX4ogyF0uXp4ck43GiVcwbacUJdv6TQloAPQeZDKyUXV8&X-Amz-Signature=268f2c0f30d6552d810ceede08c5ef9f4ef7b2e358ca471877e4c97229a09e71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEH67VD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC69qEM6uyTQggXAvsAlJ7SgamcGcko3CIZVyEso3A1XAIgLGdEOyw8046SqQBBpryrqmEerCatsyb0dQ47v7ws7GQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMmbMoXeEpi%2BOq7UYCrcA%2B5a0Bsd6IIa0GYSu%2FPUkT%2Fuged2X7u45dC%2Bosf4fyznieps9YbD4sH8UlsB5DfHhbquw%2FXJRhXAUScM7K9mLznsr2cvLqpWdPQEfW8xk9ignWVD5xq4IHO4Zvm5AEj3y0SsXbgPd7Kbi6UVHsbLZe8q4IUU6T0VrpISPndjDkDxZa7kJYNyKmSvRHWW7%2BL5RmBhjSIJRQbHnQYQdHfJ4xr2QPQK1NtQMmVRPptiEQrEQFLFgS317raP%2Bu%2FmmFxz4Lumf%2F0QcbiRtcnR6HYXfqNc4H02OohQ9kBvNa61fgx0JI%2FRFKteVWq0L1dale6HxH1VEwH8Px0ZYud%2B8dKMW8SeoxESlESU%2BzOerXy1JUAGmeDWsdJ9dWSSRFGdyMshXlssggBmfT8uBpR7qdK2XgfF6q9Ks8Xu7xbtTwQKcgqZGoU4lQo6X2U6k5KC4fZBs6Axs%2Bstc9fI4BT3%2FEVC2D%2FNnFvzNbwg5KrZoqc6u4o%2BzMRGPCcJQev3UWXZsM5u7Rw13GIA%2BRWd2w6%2BaHWsCTsXs%2BP6Dbgs43qwPSptIXT%2B5MmE7WB24CWvtFj8hNuRuXnefjdXoCZa8VKiHUHtvhN9sWQn0Mu80ye03KKK7kf8jLHw5xoyYrlafyahMJ7gr74GOqUBylEFoaGKPaVo4ZlvF7OTRAERx8kx8uhcmXfvNYso61VC%2BWG1mWwsnq7cnMW22%2FEKAtO5x%2F9L7%2FDFwpScOtGKvkNmMhvX7G8%2Bik%2B5NAIR4y0k%2B%2BFy8GxF4p%2B8auC5XikuFL3XbaLhMQ7cCt6BqVP4%2FKtpLDlEKqzFmYz4XXGgWRAN8XakX4ogyF0uXp4ck43GiVcwbacUJdv6TQloAPQeZDKyUXV8&X-Amz-Signature=c9fc8923ab7007395a6875d2a81e949125b0053fde4bc8b8c144b740da2e5cca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
