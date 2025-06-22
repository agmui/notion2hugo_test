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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRA44RI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC73W6Ic9rbA7kDIo6bSf27X%2B0WLHCSjjlu%2F55mR7nA2AIgQzsqWtyWDVzWTA%2BwIdZQcLjmrdslWN9gZFmFPbieXXEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcDQbj2%2FsKTZcPaxCrcA6itQcoLLJRiQPGnSZ2sFLyrmq8%2BDMuddqa9B03k9ZBisZgrFG4u1G6%2B0PDe620DPRlS0MElG%2BXKWUswWaUI5FOnBEVatIkE4Sa82kzNN9gHLe%2FjYl3vMX%2BCw1ZsKzqeo%2FQyq411X6jluWErXPon2qeL9620vhu3jLTWI7Q3bQ%2BiYBsbRSzc7cCw%2Bn2E%2Ft%2B9bEhVd2KMV6FcXFeQ%2BKfzaJQncYpwnk22yeb15BwCrqxAPJMfx05ltZ2IK1CNF00pd9L7G19Bl96gKXZ8mA3KZc0gIJGftyYmoC2zC44Ou4lAQSeFTOgfeDwLHmNjd0Mei6P8sViUxgvYmq1HJHEzqzQZYuRwPSs9v4nzhzAC9tTBgD4tAq0nb2gQZWTQtppKQL69kciWHi70FwUubxBizgPcoPRl5emxdIFeyA6TtzNiUVUl3VDUTCqqpYs6pR9la7Nt%2B1tTlm4v9Bc%2FzYaZvK%2Fli2h5kAiou%2B2U3o%2BfruoEbuAKXHycfmPPttGwjWWmv9XqfCNFhys7ueh3JTTAJwfbodZbo%2B1F4pWqJWvEnFT6mm%2BCNK4LPbTjpB%2BejO0I1s6dhYwd%2B%2BoxARwYkAoJS1YPGc1HAPT%2F4D23rSTXJno8H14A8z%2FUV6%2F%2FWbWeMIHs38IGOqUBaioPYMrxcjHtjSgoS3rpHoICp6pVzIXnmlapn%2FXqDhsGnRhUkdTUsp%2BG%2FtIxrqP4Zo6k%2FlrX0mnxby5UySg2Ds095VfdzuYNLMdvP%2FoUXUTOckgiLGOdMmP4HVQg2gwwvNqZp4cJdGDpu%2FFl7gF7YUt7Ai4BzW6ijUw7qxV40lnQR3e1G6VG8gk0LPlDpCUAk4jKTpegfVfKpLUlT0KdF%2BPZ36BP&X-Amz-Signature=7c5bd4ed42985bfb3d0ecd7b0ef77466108363925ce42546d3042c1a25c0b673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRA44RI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC73W6Ic9rbA7kDIo6bSf27X%2B0WLHCSjjlu%2F55mR7nA2AIgQzsqWtyWDVzWTA%2BwIdZQcLjmrdslWN9gZFmFPbieXXEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcDQbj2%2FsKTZcPaxCrcA6itQcoLLJRiQPGnSZ2sFLyrmq8%2BDMuddqa9B03k9ZBisZgrFG4u1G6%2B0PDe620DPRlS0MElG%2BXKWUswWaUI5FOnBEVatIkE4Sa82kzNN9gHLe%2FjYl3vMX%2BCw1ZsKzqeo%2FQyq411X6jluWErXPon2qeL9620vhu3jLTWI7Q3bQ%2BiYBsbRSzc7cCw%2Bn2E%2Ft%2B9bEhVd2KMV6FcXFeQ%2BKfzaJQncYpwnk22yeb15BwCrqxAPJMfx05ltZ2IK1CNF00pd9L7G19Bl96gKXZ8mA3KZc0gIJGftyYmoC2zC44Ou4lAQSeFTOgfeDwLHmNjd0Mei6P8sViUxgvYmq1HJHEzqzQZYuRwPSs9v4nzhzAC9tTBgD4tAq0nb2gQZWTQtppKQL69kciWHi70FwUubxBizgPcoPRl5emxdIFeyA6TtzNiUVUl3VDUTCqqpYs6pR9la7Nt%2B1tTlm4v9Bc%2FzYaZvK%2Fli2h5kAiou%2B2U3o%2BfruoEbuAKXHycfmPPttGwjWWmv9XqfCNFhys7ueh3JTTAJwfbodZbo%2B1F4pWqJWvEnFT6mm%2BCNK4LPbTjpB%2BejO0I1s6dhYwd%2B%2BoxARwYkAoJS1YPGc1HAPT%2F4D23rSTXJno8H14A8z%2FUV6%2F%2FWbWeMIHs38IGOqUBaioPYMrxcjHtjSgoS3rpHoICp6pVzIXnmlapn%2FXqDhsGnRhUkdTUsp%2BG%2FtIxrqP4Zo6k%2FlrX0mnxby5UySg2Ds095VfdzuYNLMdvP%2FoUXUTOckgiLGOdMmP4HVQg2gwwvNqZp4cJdGDpu%2FFl7gF7YUt7Ai4BzW6ijUw7qxV40lnQR3e1G6VG8gk0LPlDpCUAk4jKTpegfVfKpLUlT0KdF%2BPZ36BP&X-Amz-Signature=65bcac8e4c937b7a18faefd3b51bc181b9fa78b4e61d328ba1e81a0de21326c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRA44RI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC73W6Ic9rbA7kDIo6bSf27X%2B0WLHCSjjlu%2F55mR7nA2AIgQzsqWtyWDVzWTA%2BwIdZQcLjmrdslWN9gZFmFPbieXXEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcDQbj2%2FsKTZcPaxCrcA6itQcoLLJRiQPGnSZ2sFLyrmq8%2BDMuddqa9B03k9ZBisZgrFG4u1G6%2B0PDe620DPRlS0MElG%2BXKWUswWaUI5FOnBEVatIkE4Sa82kzNN9gHLe%2FjYl3vMX%2BCw1ZsKzqeo%2FQyq411X6jluWErXPon2qeL9620vhu3jLTWI7Q3bQ%2BiYBsbRSzc7cCw%2Bn2E%2Ft%2B9bEhVd2KMV6FcXFeQ%2BKfzaJQncYpwnk22yeb15BwCrqxAPJMfx05ltZ2IK1CNF00pd9L7G19Bl96gKXZ8mA3KZc0gIJGftyYmoC2zC44Ou4lAQSeFTOgfeDwLHmNjd0Mei6P8sViUxgvYmq1HJHEzqzQZYuRwPSs9v4nzhzAC9tTBgD4tAq0nb2gQZWTQtppKQL69kciWHi70FwUubxBizgPcoPRl5emxdIFeyA6TtzNiUVUl3VDUTCqqpYs6pR9la7Nt%2B1tTlm4v9Bc%2FzYaZvK%2Fli2h5kAiou%2B2U3o%2BfruoEbuAKXHycfmPPttGwjWWmv9XqfCNFhys7ueh3JTTAJwfbodZbo%2B1F4pWqJWvEnFT6mm%2BCNK4LPbTjpB%2BejO0I1s6dhYwd%2B%2BoxARwYkAoJS1YPGc1HAPT%2F4D23rSTXJno8H14A8z%2FUV6%2F%2FWbWeMIHs38IGOqUBaioPYMrxcjHtjSgoS3rpHoICp6pVzIXnmlapn%2FXqDhsGnRhUkdTUsp%2BG%2FtIxrqP4Zo6k%2FlrX0mnxby5UySg2Ds095VfdzuYNLMdvP%2FoUXUTOckgiLGOdMmP4HVQg2gwwvNqZp4cJdGDpu%2FFl7gF7YUt7Ai4BzW6ijUw7qxV40lnQR3e1G6VG8gk0LPlDpCUAk4jKTpegfVfKpLUlT0KdF%2BPZ36BP&X-Amz-Signature=f6f02cf6426f3f386081765d5955ef488ab69c51389fc592cf8dc6c047b3cb11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
