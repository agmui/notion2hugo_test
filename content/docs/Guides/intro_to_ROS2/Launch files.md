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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BIK7QL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQeGPSquYvdi7uDNFOWrkH16lzs8kBRK6DxVKlEWJmggIhALGC3Z7M0q2cEZttcPuufUbWtbMjDv1D442WV%2Fm6OsafKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3bxmS3QT51oWlE5oq3AP0EIDpXkkXLdI5CEdUMGHJkf7j4DNQQsN%2BQ3hX8UEHNtxvCoFQF%2F6Ys2s0%2FVeGPHP0a%2FVhQKa4MmbT0uOFx5ydeHFDiN6%2FtNnBKvYLqzA9BwzA7DbwCfQlxRDByazkg3DTMVZvzZCkiLPpb%2BznVtMwpJdp1XqdA6n5uYuYjrzbDjgWgORDttyhm3GNU%2F5rzkn6M60tUwvYd8%2BplKwL8OWWlIpKmQ%2Bp%2F2Bt6lGGaFfzjvjbHaU%2BuYE6S6dKX4EQul5Rg1XkdIlvXdA2GksGKD6XMNE02cufiTp8BZ6Fsz8fCFVt0Jailm3kTNB7HSE%2FV05ievoA8xsHz4jN53n7JFNvhHkgkgo2TO1Pk49wA0tRjhGgM%2FyrtemYu0yEdRG29eXnMyaiSnD0zTp12uPsK0FTagtfaPCgKJDhgP%2BqYd3dMnrTJhWwCtvRu6yJDjBmvmiNJRlyag7cexL6ergsFD%2B2SJaVBUENxPwwGTU1Z4RlJ4LiquERLuJ8vgDhygwf6BUk%2FMkyhpPBFPW%2FW9ieFMaaNTP2aiEDTw6mUyZsrHNX3ndVHHjwBvRh0mGQVfgYFkQc83miacm%2FBZavvmKl%2Fy6gba%2BQdhf2NNGC%2BSJyTtINAkdE8EnsPYriFY5iJDDkoM3CBjqkAfZskWAQUDgDp5v%2Fdobk33MDbuajn0qobPFtLtrsALcwlk3QDGOFJNmGq%2BH3kT%2FYZ7Ugb4Dbhm2lY9bQUOlKG1P5UqZ3ra%2FbR8p4VF36AAKWq7hDg9s8Qq%2BbefEBj0593idXGgR%2FquEEBEWV3YxUMTX7TKAZN1CWTdXbHPZx%2FW7U5AFMb7ZFjrfQGHSwHE1gCwLolpW%2Bz1j5voD4XKJzchy9uGbh&X-Amz-Signature=058af4508f3ee931ca654f6e67c41f953503722993a913b08f55bb33d34e7702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BIK7QL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQeGPSquYvdi7uDNFOWrkH16lzs8kBRK6DxVKlEWJmggIhALGC3Z7M0q2cEZttcPuufUbWtbMjDv1D442WV%2Fm6OsafKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3bxmS3QT51oWlE5oq3AP0EIDpXkkXLdI5CEdUMGHJkf7j4DNQQsN%2BQ3hX8UEHNtxvCoFQF%2F6Ys2s0%2FVeGPHP0a%2FVhQKa4MmbT0uOFx5ydeHFDiN6%2FtNnBKvYLqzA9BwzA7DbwCfQlxRDByazkg3DTMVZvzZCkiLPpb%2BznVtMwpJdp1XqdA6n5uYuYjrzbDjgWgORDttyhm3GNU%2F5rzkn6M60tUwvYd8%2BplKwL8OWWlIpKmQ%2Bp%2F2Bt6lGGaFfzjvjbHaU%2BuYE6S6dKX4EQul5Rg1XkdIlvXdA2GksGKD6XMNE02cufiTp8BZ6Fsz8fCFVt0Jailm3kTNB7HSE%2FV05ievoA8xsHz4jN53n7JFNvhHkgkgo2TO1Pk49wA0tRjhGgM%2FyrtemYu0yEdRG29eXnMyaiSnD0zTp12uPsK0FTagtfaPCgKJDhgP%2BqYd3dMnrTJhWwCtvRu6yJDjBmvmiNJRlyag7cexL6ergsFD%2B2SJaVBUENxPwwGTU1Z4RlJ4LiquERLuJ8vgDhygwf6BUk%2FMkyhpPBFPW%2FW9ieFMaaNTP2aiEDTw6mUyZsrHNX3ndVHHjwBvRh0mGQVfgYFkQc83miacm%2FBZavvmKl%2Fy6gba%2BQdhf2NNGC%2BSJyTtINAkdE8EnsPYriFY5iJDDkoM3CBjqkAfZskWAQUDgDp5v%2Fdobk33MDbuajn0qobPFtLtrsALcwlk3QDGOFJNmGq%2BH3kT%2FYZ7Ugb4Dbhm2lY9bQUOlKG1P5UqZ3ra%2FbR8p4VF36AAKWq7hDg9s8Qq%2BbefEBj0593idXGgR%2FquEEBEWV3YxUMTX7TKAZN1CWTdXbHPZx%2FW7U5AFMb7ZFjrfQGHSwHE1gCwLolpW%2Bz1j5voD4XKJzchy9uGbh&X-Amz-Signature=dc5e4cae8cedc613fd2ed7c70ac49632c91763f90e7df3b1bac2d003e0b21138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BIK7QL%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQeGPSquYvdi7uDNFOWrkH16lzs8kBRK6DxVKlEWJmggIhALGC3Z7M0q2cEZttcPuufUbWtbMjDv1D442WV%2Fm6OsafKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3bxmS3QT51oWlE5oq3AP0EIDpXkkXLdI5CEdUMGHJkf7j4DNQQsN%2BQ3hX8UEHNtxvCoFQF%2F6Ys2s0%2FVeGPHP0a%2FVhQKa4MmbT0uOFx5ydeHFDiN6%2FtNnBKvYLqzA9BwzA7DbwCfQlxRDByazkg3DTMVZvzZCkiLPpb%2BznVtMwpJdp1XqdA6n5uYuYjrzbDjgWgORDttyhm3GNU%2F5rzkn6M60tUwvYd8%2BplKwL8OWWlIpKmQ%2Bp%2F2Bt6lGGaFfzjvjbHaU%2BuYE6S6dKX4EQul5Rg1XkdIlvXdA2GksGKD6XMNE02cufiTp8BZ6Fsz8fCFVt0Jailm3kTNB7HSE%2FV05ievoA8xsHz4jN53n7JFNvhHkgkgo2TO1Pk49wA0tRjhGgM%2FyrtemYu0yEdRG29eXnMyaiSnD0zTp12uPsK0FTagtfaPCgKJDhgP%2BqYd3dMnrTJhWwCtvRu6yJDjBmvmiNJRlyag7cexL6ergsFD%2B2SJaVBUENxPwwGTU1Z4RlJ4LiquERLuJ8vgDhygwf6BUk%2FMkyhpPBFPW%2FW9ieFMaaNTP2aiEDTw6mUyZsrHNX3ndVHHjwBvRh0mGQVfgYFkQc83miacm%2FBZavvmKl%2Fy6gba%2BQdhf2NNGC%2BSJyTtINAkdE8EnsPYriFY5iJDDkoM3CBjqkAfZskWAQUDgDp5v%2Fdobk33MDbuajn0qobPFtLtrsALcwlk3QDGOFJNmGq%2BH3kT%2FYZ7Ugb4Dbhm2lY9bQUOlKG1P5UqZ3ra%2FbR8p4VF36AAKWq7hDg9s8Qq%2BbefEBj0593idXGgR%2FquEEBEWV3YxUMTX7TKAZN1CWTdXbHPZx%2FW7U5AFMb7ZFjrfQGHSwHE1gCwLolpW%2Bz1j5voD4XKJzchy9uGbh&X-Amz-Signature=21282c5f6ef7e28e40a2509c535c1c7d0d0340d8cc890016a0c7ca131aefc020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
