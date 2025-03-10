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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2AO3PM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDZpRkVcCVYUUJpErpzY%2BaBcbKQpenozLXoO2%2F4blyXZAIhAJ7nQ2LpSJJoJzQReq80mt0KMy5agP3ufy3lF27HQrqYKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTHy6%2FA4xyx4vR4I4q3APsaOv3CGmGCwoYtCnrCMpEAGhthaECl2K6ldnyD6AqWLBm6zEsTRUNMg9%2B%2BYlR1HxVc67%2FbYV6VoFtJ6XXsmJ917by%2F04lbQIhrzsyG9O34ObPQQqZXy7OXK1ZUY%2BqrbUC1xIisygY2TF5ExRwntJPEt2qpBZGV5cStVQYW3VnBL601sESiluObJa6QKd2ZTWnHYV%2BF8gpe%2BJhbD2zwOmzGFY02sBIIGjfj0avKjuASCr1DXVozlWls%2BsciNN7v7mJtoDMiC01ZfgJXXo%2F29Bn3jk6AgwokYW3yTtQhwzPkkLgB0oO%2FKDiclZdLv3edVOXYs3McD4LNA33nvXkR2GieqxwpQ2TS%2FyCRai8ly84UgyXYLcIReUNsyR%2FjCZ%2FO3sKEe%2B4tcWi%2Bc2WEjt9%2FBr9LYzhvw9P%2FaWRen6zvJktNpgWTIvoQa0s%2FnXAFEBko6AnD%2F81J1baciufjFcXbEzlxtHg3pV7HbB67pU5BQC0EB4iVFdMwzbd9W4wlQEjS9NuZONqksmdrZzsb9s9R7eURCIXcjDUu0Fs9gnYiiIDL2a6ohNauw79AjnVy9pWxd6gndt7I%2B6%2FVgxqRhfVA5Td0ms7hxlTk%2BVce0hoYXZTNbgRKMoAKN4jVb5RlzDNybu%2BBjqkAXudM%2BKIEhNHwDt%2BM9oDMg6q2DgL6LoH9ZmskckhmtBnmLqYYTk0h1jbw%2BqxjTzcoQ4HIxdTvdwTRF4K0h8HlTtrEVMH0qe3X32Be5uWcrs%2FFmXqBf5IQkHwRag4Lawnlr0IsXU96IrzvayP5ymDPJublW1JCCY2WSvVoKyS51o4aTDdqinzFv7Sro0XzpEyiCjrmawcaPNpS8muq%2FV3VUaXfdbH&X-Amz-Signature=829be0ed13be91956765750216147294b5172fbdcee180ac6808ac60e40b65db&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2AO3PM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDZpRkVcCVYUUJpErpzY%2BaBcbKQpenozLXoO2%2F4blyXZAIhAJ7nQ2LpSJJoJzQReq80mt0KMy5agP3ufy3lF27HQrqYKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTHy6%2FA4xyx4vR4I4q3APsaOv3CGmGCwoYtCnrCMpEAGhthaECl2K6ldnyD6AqWLBm6zEsTRUNMg9%2B%2BYlR1HxVc67%2FbYV6VoFtJ6XXsmJ917by%2F04lbQIhrzsyG9O34ObPQQqZXy7OXK1ZUY%2BqrbUC1xIisygY2TF5ExRwntJPEt2qpBZGV5cStVQYW3VnBL601sESiluObJa6QKd2ZTWnHYV%2BF8gpe%2BJhbD2zwOmzGFY02sBIIGjfj0avKjuASCr1DXVozlWls%2BsciNN7v7mJtoDMiC01ZfgJXXo%2F29Bn3jk6AgwokYW3yTtQhwzPkkLgB0oO%2FKDiclZdLv3edVOXYs3McD4LNA33nvXkR2GieqxwpQ2TS%2FyCRai8ly84UgyXYLcIReUNsyR%2FjCZ%2FO3sKEe%2B4tcWi%2Bc2WEjt9%2FBr9LYzhvw9P%2FaWRen6zvJktNpgWTIvoQa0s%2FnXAFEBko6AnD%2F81J1baciufjFcXbEzlxtHg3pV7HbB67pU5BQC0EB4iVFdMwzbd9W4wlQEjS9NuZONqksmdrZzsb9s9R7eURCIXcjDUu0Fs9gnYiiIDL2a6ohNauw79AjnVy9pWxd6gndt7I%2B6%2FVgxqRhfVA5Td0ms7hxlTk%2BVce0hoYXZTNbgRKMoAKN4jVb5RlzDNybu%2BBjqkAXudM%2BKIEhNHwDt%2BM9oDMg6q2DgL6LoH9ZmskckhmtBnmLqYYTk0h1jbw%2BqxjTzcoQ4HIxdTvdwTRF4K0h8HlTtrEVMH0qe3X32Be5uWcrs%2FFmXqBf5IQkHwRag4Lawnlr0IsXU96IrzvayP5ymDPJublW1JCCY2WSvVoKyS51o4aTDdqinzFv7Sro0XzpEyiCjrmawcaPNpS8muq%2FV3VUaXfdbH&X-Amz-Signature=f49d166c8944acd8471f5cdd2e2b10ecc3d5c23b4dbd6cb07c2e4836d66a0942&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2AO3PM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDZpRkVcCVYUUJpErpzY%2BaBcbKQpenozLXoO2%2F4blyXZAIhAJ7nQ2LpSJJoJzQReq80mt0KMy5agP3ufy3lF27HQrqYKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTHy6%2FA4xyx4vR4I4q3APsaOv3CGmGCwoYtCnrCMpEAGhthaECl2K6ldnyD6AqWLBm6zEsTRUNMg9%2B%2BYlR1HxVc67%2FbYV6VoFtJ6XXsmJ917by%2F04lbQIhrzsyG9O34ObPQQqZXy7OXK1ZUY%2BqrbUC1xIisygY2TF5ExRwntJPEt2qpBZGV5cStVQYW3VnBL601sESiluObJa6QKd2ZTWnHYV%2BF8gpe%2BJhbD2zwOmzGFY02sBIIGjfj0avKjuASCr1DXVozlWls%2BsciNN7v7mJtoDMiC01ZfgJXXo%2F29Bn3jk6AgwokYW3yTtQhwzPkkLgB0oO%2FKDiclZdLv3edVOXYs3McD4LNA33nvXkR2GieqxwpQ2TS%2FyCRai8ly84UgyXYLcIReUNsyR%2FjCZ%2FO3sKEe%2B4tcWi%2Bc2WEjt9%2FBr9LYzhvw9P%2FaWRen6zvJktNpgWTIvoQa0s%2FnXAFEBko6AnD%2F81J1baciufjFcXbEzlxtHg3pV7HbB67pU5BQC0EB4iVFdMwzbd9W4wlQEjS9NuZONqksmdrZzsb9s9R7eURCIXcjDUu0Fs9gnYiiIDL2a6ohNauw79AjnVy9pWxd6gndt7I%2B6%2FVgxqRhfVA5Td0ms7hxlTk%2BVce0hoYXZTNbgRKMoAKN4jVb5RlzDNybu%2BBjqkAXudM%2BKIEhNHwDt%2BM9oDMg6q2DgL6LoH9ZmskckhmtBnmLqYYTk0h1jbw%2BqxjTzcoQ4HIxdTvdwTRF4K0h8HlTtrEVMH0qe3X32Be5uWcrs%2FFmXqBf5IQkHwRag4Lawnlr0IsXU96IrzvayP5ymDPJublW1JCCY2WSvVoKyS51o4aTDdqinzFv7Sro0XzpEyiCjrmawcaPNpS8muq%2FV3VUaXfdbH&X-Amz-Signature=1e4ec3f5515810e3c5eb81ce92beb0bceb50caee085aa93212cc9c92f50c1faf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
