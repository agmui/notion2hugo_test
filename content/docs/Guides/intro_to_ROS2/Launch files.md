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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653NMLMY2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsC0gtSXuostUZcqt1GxCNg%2BZ7f3Rx29XZOMxku7kSKAiBFqLlyKzMqnexj%2FKbvZop2Vc0NM01m17EBmYRgdAzojyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaDXtvfelzFVYpGnCKtwDDK6k6XFSVwG6tuyssNC4nWcJb87riGmLr6WoPJ6L1DXNxKzuZDzzynE%2BmHayyibZjOtJ78jQQbTaSScSfMPJyHzwDnEaCf0wAgQ9rJAtG5QMarHac4vpemmXQ1MMBxZfQlDh0ukObrMNIaw3YnUDgLboqlgN7PBwxMa2paiWuUgXjExMpAbPTqKf7L9oQFufquy2l2Qqvx1oE0TSeN%2FsdAAUU9eJ7Fm2IM%2FQkknxck7OoZDp6%2BfDJcRKu3LpEGsg25lftnIvpw8vkAjlqHf2Ivj2kLjSg%2BNHqOX8OQOCWagKcms9I72iwX%2B8q6fO5BVt1OodyYiiD4mPU8mV3DEsIBqhhDIWZj56e0kz4Gaewy9Rg51sITdfpkWjjAgRF3c8%2F7CGF2qjcQZ%2Bv148ut9ptB6IQBzJrM5cUqsxvQ0%2B12q%2F9fP%2FYl4%2Fc9yEmLPKfVuIzOUx75pzhU8H%2FL%2BWq4oN5DmJcGZQ3jn9LP%2FKuJNi0O5Hn%2BmwxydLcAaSCdMOYZgu4Q%2FXm5Q9pzV%2FuPQEFpkAEVVyIZoEPH9g5mtp8pVqQhyfcOuvlPxCQVQJf9SIPsp8OYT0YQ5j4zZ2hjF%2FmfGzJnAE2%2FXrw9YSRlYt4%2FhMAUktynKRMBFyrEhyGLgww%2Bi6vwY6pgGD6%2BSHdF8RQdPWyTk9J7M5K1HqAwdWFGuQ%2B8aBHb3dYOpaHfHp%2BZ8OrkCei235MzGdEQKKjQE8Iz%2BkLChbHvxTKjBLrz4H00Ant6BK44%2BglP5XzoGqvyiWeFpXJcq1CY0aUj6cMbDRZPDdRFVZH0Ydu2DStkaY9eRCyy9vZLObxaO1qGogWThF32IkgsMLpXaXjtCD6HMhrmnnhjaEEMzd5JCoOWid&X-Amz-Signature=f0c366d688a1af94d1c240e712f2a38c150908ed15e29092f06f2e521383677c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653NMLMY2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsC0gtSXuostUZcqt1GxCNg%2BZ7f3Rx29XZOMxku7kSKAiBFqLlyKzMqnexj%2FKbvZop2Vc0NM01m17EBmYRgdAzojyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaDXtvfelzFVYpGnCKtwDDK6k6XFSVwG6tuyssNC4nWcJb87riGmLr6WoPJ6L1DXNxKzuZDzzynE%2BmHayyibZjOtJ78jQQbTaSScSfMPJyHzwDnEaCf0wAgQ9rJAtG5QMarHac4vpemmXQ1MMBxZfQlDh0ukObrMNIaw3YnUDgLboqlgN7PBwxMa2paiWuUgXjExMpAbPTqKf7L9oQFufquy2l2Qqvx1oE0TSeN%2FsdAAUU9eJ7Fm2IM%2FQkknxck7OoZDp6%2BfDJcRKu3LpEGsg25lftnIvpw8vkAjlqHf2Ivj2kLjSg%2BNHqOX8OQOCWagKcms9I72iwX%2B8q6fO5BVt1OodyYiiD4mPU8mV3DEsIBqhhDIWZj56e0kz4Gaewy9Rg51sITdfpkWjjAgRF3c8%2F7CGF2qjcQZ%2Bv148ut9ptB6IQBzJrM5cUqsxvQ0%2B12q%2F9fP%2FYl4%2Fc9yEmLPKfVuIzOUx75pzhU8H%2FL%2BWq4oN5DmJcGZQ3jn9LP%2FKuJNi0O5Hn%2BmwxydLcAaSCdMOYZgu4Q%2FXm5Q9pzV%2FuPQEFpkAEVVyIZoEPH9g5mtp8pVqQhyfcOuvlPxCQVQJf9SIPsp8OYT0YQ5j4zZ2hjF%2FmfGzJnAE2%2FXrw9YSRlYt4%2FhMAUktynKRMBFyrEhyGLgww%2Bi6vwY6pgGD6%2BSHdF8RQdPWyTk9J7M5K1HqAwdWFGuQ%2B8aBHb3dYOpaHfHp%2BZ8OrkCei235MzGdEQKKjQE8Iz%2BkLChbHvxTKjBLrz4H00Ant6BK44%2BglP5XzoGqvyiWeFpXJcq1CY0aUj6cMbDRZPDdRFVZH0Ydu2DStkaY9eRCyy9vZLObxaO1qGogWThF32IkgsMLpXaXjtCD6HMhrmnnhjaEEMzd5JCoOWid&X-Amz-Signature=146f59d67ad2fc49eebf9edef580facbaf99a1eaf0afb5c9bd1917d8789afc8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653NMLMY2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsC0gtSXuostUZcqt1GxCNg%2BZ7f3Rx29XZOMxku7kSKAiBFqLlyKzMqnexj%2FKbvZop2Vc0NM01m17EBmYRgdAzojyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaDXtvfelzFVYpGnCKtwDDK6k6XFSVwG6tuyssNC4nWcJb87riGmLr6WoPJ6L1DXNxKzuZDzzynE%2BmHayyibZjOtJ78jQQbTaSScSfMPJyHzwDnEaCf0wAgQ9rJAtG5QMarHac4vpemmXQ1MMBxZfQlDh0ukObrMNIaw3YnUDgLboqlgN7PBwxMa2paiWuUgXjExMpAbPTqKf7L9oQFufquy2l2Qqvx1oE0TSeN%2FsdAAUU9eJ7Fm2IM%2FQkknxck7OoZDp6%2BfDJcRKu3LpEGsg25lftnIvpw8vkAjlqHf2Ivj2kLjSg%2BNHqOX8OQOCWagKcms9I72iwX%2B8q6fO5BVt1OodyYiiD4mPU8mV3DEsIBqhhDIWZj56e0kz4Gaewy9Rg51sITdfpkWjjAgRF3c8%2F7CGF2qjcQZ%2Bv148ut9ptB6IQBzJrM5cUqsxvQ0%2B12q%2F9fP%2FYl4%2Fc9yEmLPKfVuIzOUx75pzhU8H%2FL%2BWq4oN5DmJcGZQ3jn9LP%2FKuJNi0O5Hn%2BmwxydLcAaSCdMOYZgu4Q%2FXm5Q9pzV%2FuPQEFpkAEVVyIZoEPH9g5mtp8pVqQhyfcOuvlPxCQVQJf9SIPsp8OYT0YQ5j4zZ2hjF%2FmfGzJnAE2%2FXrw9YSRlYt4%2FhMAUktynKRMBFyrEhyGLgww%2Bi6vwY6pgGD6%2BSHdF8RQdPWyTk9J7M5K1HqAwdWFGuQ%2B8aBHb3dYOpaHfHp%2BZ8OrkCei235MzGdEQKKjQE8Iz%2BkLChbHvxTKjBLrz4H00Ant6BK44%2BglP5XzoGqvyiWeFpXJcq1CY0aUj6cMbDRZPDdRFVZH0Ydu2DStkaY9eRCyy9vZLObxaO1qGogWThF32IkgsMLpXaXjtCD6HMhrmnnhjaEEMzd5JCoOWid&X-Amz-Signature=720bdd03394d22cd320552ee567ee6179a461941963a28a14d12ea3a79504aad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
