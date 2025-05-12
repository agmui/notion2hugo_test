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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDJ4KKO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDXO3mqy8untITolN3KfFOR%2B0qh2GjDMAKkktxzrU9jAAIhAPJscdVai3a0%2FYTvwyr8Pdv7Z8lMG20Ykx1QQXtR7VFzKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZeaMel3GoV5Xu9Vkq3AP9zoBSERyq4lGFC2DLqZFXn0xis%2FLtA1ivyeA9AlQxhlHmOG1HHlGAReh2bg4XT%2BjYf9%2BgEik0bxUATx1jKM6yK57hgmzTG40hchNKVycEtXOh4zU8PQX8fFOyeqjldhrArzdUCw%2FarWK2FjlzPqctzy5dofV44KajwG4DCfVkwXNPSZY4m9%2BwmoqQRUIjAOY0b1OeZIQGdJP3yzxfXc1SicOKZ%2FbiyxAmsAdi8McZxtgFn2nTtQE9o%2FLqMFYs2EWKFqNVNd6YS9CMw2IXTqoqi%2B%2FUZ7d11cNvngBDFwFdMCXmY185bNhq4k5hQqzQ8Fmk3HuuiBPInaochXLQDvlTVZoYxq71Vbjrk%2BTDl2ItwnIXcFX%2BZpl%2BzGzWlEMQgaqcxNzVs4Ag3WnIJGDVnQLQ%2BR6fSpYfnfPQXFFI8UNyRSohn83%2FHipbuXjpvSLAxpFCCZA%2Fjl8hLxZJ8C9ejAggYLddHj0MZVLq3ckB8HkytrwUGzOse4P2dtkX6epy1Oe1Nxg5%2BueAY2EFHUo%2BWX3Yb7%2FVTn9bddwD7K8CUX5%2BT59Jp%2Fkl5cPtTZb8aEKS4cPPRhPbU8Y6oJQdPgEK4z2C2N1jPQti7zUSyotRkaAfV0iW1K%2BuvwDXsjzQWzDkqYnBBjqkAToqCjTa0aF6GZJkd9iJqCwNZYmZz%2FCjmsUxX98ZHs8Nx058J1ru9RqTRh4R7%2FdNnohR1TZOIx4wh%2FZ4QHDrFEOHuXK1QuOmrlO1dmXXFuVa9EuoG3t2M1tR4H6gbKvVGhP5v%2BEsX50O3M074WQkufQ%2Bkz4umon769V19rjb5U%2FoqmqjyIB0TAtaC9K5FgTaxtL%2Bw2ASB7sJamdW0ZzJTWYcQnun&X-Amz-Signature=de7008ffa56a373279b43f59ab8c5ff18ad26f8f2f8027621b6f03e24e9bf345&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDJ4KKO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDXO3mqy8untITolN3KfFOR%2B0qh2GjDMAKkktxzrU9jAAIhAPJscdVai3a0%2FYTvwyr8Pdv7Z8lMG20Ykx1QQXtR7VFzKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZeaMel3GoV5Xu9Vkq3AP9zoBSERyq4lGFC2DLqZFXn0xis%2FLtA1ivyeA9AlQxhlHmOG1HHlGAReh2bg4XT%2BjYf9%2BgEik0bxUATx1jKM6yK57hgmzTG40hchNKVycEtXOh4zU8PQX8fFOyeqjldhrArzdUCw%2FarWK2FjlzPqctzy5dofV44KajwG4DCfVkwXNPSZY4m9%2BwmoqQRUIjAOY0b1OeZIQGdJP3yzxfXc1SicOKZ%2FbiyxAmsAdi8McZxtgFn2nTtQE9o%2FLqMFYs2EWKFqNVNd6YS9CMw2IXTqoqi%2B%2FUZ7d11cNvngBDFwFdMCXmY185bNhq4k5hQqzQ8Fmk3HuuiBPInaochXLQDvlTVZoYxq71Vbjrk%2BTDl2ItwnIXcFX%2BZpl%2BzGzWlEMQgaqcxNzVs4Ag3WnIJGDVnQLQ%2BR6fSpYfnfPQXFFI8UNyRSohn83%2FHipbuXjpvSLAxpFCCZA%2Fjl8hLxZJ8C9ejAggYLddHj0MZVLq3ckB8HkytrwUGzOse4P2dtkX6epy1Oe1Nxg5%2BueAY2EFHUo%2BWX3Yb7%2FVTn9bddwD7K8CUX5%2BT59Jp%2Fkl5cPtTZb8aEKS4cPPRhPbU8Y6oJQdPgEK4z2C2N1jPQti7zUSyotRkaAfV0iW1K%2BuvwDXsjzQWzDkqYnBBjqkAToqCjTa0aF6GZJkd9iJqCwNZYmZz%2FCjmsUxX98ZHs8Nx058J1ru9RqTRh4R7%2FdNnohR1TZOIx4wh%2FZ4QHDrFEOHuXK1QuOmrlO1dmXXFuVa9EuoG3t2M1tR4H6gbKvVGhP5v%2BEsX50O3M074WQkufQ%2Bkz4umon769V19rjb5U%2FoqmqjyIB0TAtaC9K5FgTaxtL%2Bw2ASB7sJamdW0ZzJTWYcQnun&X-Amz-Signature=900993fa6a322b290945ad51fbbe14e6271103cb9b796d2c0d76964eaaf4b093&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDJ4KKO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDXO3mqy8untITolN3KfFOR%2B0qh2GjDMAKkktxzrU9jAAIhAPJscdVai3a0%2FYTvwyr8Pdv7Z8lMG20Ykx1QQXtR7VFzKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZeaMel3GoV5Xu9Vkq3AP9zoBSERyq4lGFC2DLqZFXn0xis%2FLtA1ivyeA9AlQxhlHmOG1HHlGAReh2bg4XT%2BjYf9%2BgEik0bxUATx1jKM6yK57hgmzTG40hchNKVycEtXOh4zU8PQX8fFOyeqjldhrArzdUCw%2FarWK2FjlzPqctzy5dofV44KajwG4DCfVkwXNPSZY4m9%2BwmoqQRUIjAOY0b1OeZIQGdJP3yzxfXc1SicOKZ%2FbiyxAmsAdi8McZxtgFn2nTtQE9o%2FLqMFYs2EWKFqNVNd6YS9CMw2IXTqoqi%2B%2FUZ7d11cNvngBDFwFdMCXmY185bNhq4k5hQqzQ8Fmk3HuuiBPInaochXLQDvlTVZoYxq71Vbjrk%2BTDl2ItwnIXcFX%2BZpl%2BzGzWlEMQgaqcxNzVs4Ag3WnIJGDVnQLQ%2BR6fSpYfnfPQXFFI8UNyRSohn83%2FHipbuXjpvSLAxpFCCZA%2Fjl8hLxZJ8C9ejAggYLddHj0MZVLq3ckB8HkytrwUGzOse4P2dtkX6epy1Oe1Nxg5%2BueAY2EFHUo%2BWX3Yb7%2FVTn9bddwD7K8CUX5%2BT59Jp%2Fkl5cPtTZb8aEKS4cPPRhPbU8Y6oJQdPgEK4z2C2N1jPQti7zUSyotRkaAfV0iW1K%2BuvwDXsjzQWzDkqYnBBjqkAToqCjTa0aF6GZJkd9iJqCwNZYmZz%2FCjmsUxX98ZHs8Nx058J1ru9RqTRh4R7%2FdNnohR1TZOIx4wh%2FZ4QHDrFEOHuXK1QuOmrlO1dmXXFuVa9EuoG3t2M1tR4H6gbKvVGhP5v%2BEsX50O3M074WQkufQ%2Bkz4umon769V19rjb5U%2FoqmqjyIB0TAtaC9K5FgTaxtL%2Bw2ASB7sJamdW0ZzJTWYcQnun&X-Amz-Signature=28939b3c916f5a52676a02efbf82a08b7b892d5806ba7012d04e842440cea7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
