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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KPORDO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUAEZbdfkoAd2ZdFkukcYB44CacENHsLykhXLU3Q%2FydAiEA4ORhD2jSlHA20WoIpu21BBnpKunKrDNnjfimjiSCvNYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2z4wtQpc8OVN%2B9TSrcA8PmQHVCuB3N6HkKIdBfP5DStmL1p8bJieSJsn2HLJexwu8n4mcjHdcifyMUpUVVWRZbxw89C3NOPjxKjkz1nkw7sG26KHESzHJK4QenAeijECAcdI1QYey7ju8Id7p2fYBQLaIUdhs9Q1n9%2FYPL2WDXVC3wKb6fOdct%2BItABMeBhDRQKNvdph2d8bHkY0u1wBz1ZjYJ2UHMRL0dzVuTAt7fXFjhnG5Uo0826L5HnjRjoxiwuxiQYnfGVV2GUsEXte8uWunGtY%2FcwR2aMkKqwh1rta6IB%2BoRqHy93u%2Ffj6PvhrLwcNO%2Bj9O%2FWsnTBz3UlqEei1kC4kxtzraKrIiZAkYt2KsH%2FzuGJhyLjDihGF8Gqd%2FrRvdxYwU9Nk3O8MDfxL9rN7Wpi7lGCaHctdvx6pbElbgZbaEkB%2FDOHTonhxZ8HZ3iUlhj6Q6EIFS7DmLS7YkmWqbQlBKh656zNI10xvGrTwMgw2wiDzZrvz6tF6hpve7W5hSjPWlvmFBqx6NFDxMeVeOEGAZx9KOIqtXXCCLIZTYwRlQIJenQXYK%2BYyo6DNqrfQK3wDCRcY%2BTa4TUsZ1jV%2F1vY%2FXcpT7mdHnzs9vG9hq9ynBZFgfWxbNlug0nYpze5cU9rdAeGpAoMMStsr0GOqUBMyVV6i8o%2BnAne7imjPGsdw2ca5X%2FbplcJblSrzo33%2FqLCdAjWhPQ3%2FavQfO7BTy2TPVdnSUq6OhmuAKYjxClPNc7VYnmk0p5im5%2BmJ%2BCFzOAKHysBfr%2FRlHHo9Gv9v%2FbERZIrL89l0BbUXDrQ5%2F0Qz5BVQPkZLwtp1VhbM9csgPnPGElCWsoN4klzG7Uj4AwL1Q1n4CSNfXR3mY8P%2B0zTsDU%2Ba%2BN&X-Amz-Signature=38aa2283cee5bdbfd7f7a962d4e9cdb52ce10b2b52efdb0a56d9b492a8e4af1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KPORDO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUAEZbdfkoAd2ZdFkukcYB44CacENHsLykhXLU3Q%2FydAiEA4ORhD2jSlHA20WoIpu21BBnpKunKrDNnjfimjiSCvNYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2z4wtQpc8OVN%2B9TSrcA8PmQHVCuB3N6HkKIdBfP5DStmL1p8bJieSJsn2HLJexwu8n4mcjHdcifyMUpUVVWRZbxw89C3NOPjxKjkz1nkw7sG26KHESzHJK4QenAeijECAcdI1QYey7ju8Id7p2fYBQLaIUdhs9Q1n9%2FYPL2WDXVC3wKb6fOdct%2BItABMeBhDRQKNvdph2d8bHkY0u1wBz1ZjYJ2UHMRL0dzVuTAt7fXFjhnG5Uo0826L5HnjRjoxiwuxiQYnfGVV2GUsEXte8uWunGtY%2FcwR2aMkKqwh1rta6IB%2BoRqHy93u%2Ffj6PvhrLwcNO%2Bj9O%2FWsnTBz3UlqEei1kC4kxtzraKrIiZAkYt2KsH%2FzuGJhyLjDihGF8Gqd%2FrRvdxYwU9Nk3O8MDfxL9rN7Wpi7lGCaHctdvx6pbElbgZbaEkB%2FDOHTonhxZ8HZ3iUlhj6Q6EIFS7DmLS7YkmWqbQlBKh656zNI10xvGrTwMgw2wiDzZrvz6tF6hpve7W5hSjPWlvmFBqx6NFDxMeVeOEGAZx9KOIqtXXCCLIZTYwRlQIJenQXYK%2BYyo6DNqrfQK3wDCRcY%2BTa4TUsZ1jV%2F1vY%2FXcpT7mdHnzs9vG9hq9ynBZFgfWxbNlug0nYpze5cU9rdAeGpAoMMStsr0GOqUBMyVV6i8o%2BnAne7imjPGsdw2ca5X%2FbplcJblSrzo33%2FqLCdAjWhPQ3%2FavQfO7BTy2TPVdnSUq6OhmuAKYjxClPNc7VYnmk0p5im5%2BmJ%2BCFzOAKHysBfr%2FRlHHo9Gv9v%2FbERZIrL89l0BbUXDrQ5%2F0Qz5BVQPkZLwtp1VhbM9csgPnPGElCWsoN4klzG7Uj4AwL1Q1n4CSNfXR3mY8P%2B0zTsDU%2Ba%2BN&X-Amz-Signature=ae656713e4c852545ea6f0eae106850141bdd1b7b418ad537b948ad7e7aa4f16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6KPORDO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUAEZbdfkoAd2ZdFkukcYB44CacENHsLykhXLU3Q%2FydAiEA4ORhD2jSlHA20WoIpu21BBnpKunKrDNnjfimjiSCvNYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2z4wtQpc8OVN%2B9TSrcA8PmQHVCuB3N6HkKIdBfP5DStmL1p8bJieSJsn2HLJexwu8n4mcjHdcifyMUpUVVWRZbxw89C3NOPjxKjkz1nkw7sG26KHESzHJK4QenAeijECAcdI1QYey7ju8Id7p2fYBQLaIUdhs9Q1n9%2FYPL2WDXVC3wKb6fOdct%2BItABMeBhDRQKNvdph2d8bHkY0u1wBz1ZjYJ2UHMRL0dzVuTAt7fXFjhnG5Uo0826L5HnjRjoxiwuxiQYnfGVV2GUsEXte8uWunGtY%2FcwR2aMkKqwh1rta6IB%2BoRqHy93u%2Ffj6PvhrLwcNO%2Bj9O%2FWsnTBz3UlqEei1kC4kxtzraKrIiZAkYt2KsH%2FzuGJhyLjDihGF8Gqd%2FrRvdxYwU9Nk3O8MDfxL9rN7Wpi7lGCaHctdvx6pbElbgZbaEkB%2FDOHTonhxZ8HZ3iUlhj6Q6EIFS7DmLS7YkmWqbQlBKh656zNI10xvGrTwMgw2wiDzZrvz6tF6hpve7W5hSjPWlvmFBqx6NFDxMeVeOEGAZx9KOIqtXXCCLIZTYwRlQIJenQXYK%2BYyo6DNqrfQK3wDCRcY%2BTa4TUsZ1jV%2F1vY%2FXcpT7mdHnzs9vG9hq9ynBZFgfWxbNlug0nYpze5cU9rdAeGpAoMMStsr0GOqUBMyVV6i8o%2BnAne7imjPGsdw2ca5X%2FbplcJblSrzo33%2FqLCdAjWhPQ3%2FavQfO7BTy2TPVdnSUq6OhmuAKYjxClPNc7VYnmk0p5im5%2BmJ%2BCFzOAKHysBfr%2FRlHHo9Gv9v%2FbERZIrL89l0BbUXDrQ5%2F0Qz5BVQPkZLwtp1VhbM9csgPnPGElCWsoN4klzG7Uj4AwL1Q1n4CSNfXR3mY8P%2B0zTsDU%2Ba%2BN&X-Amz-Signature=e2dd9e290efd1541b43165ef07ba227dedb46f5affead25758b73edfb340746f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
