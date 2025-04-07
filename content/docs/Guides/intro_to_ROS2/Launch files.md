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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJBDOOW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADclsPkdYCprDSeCI8Nvd2L2gXq6%2FsnmP98FGIJBDKYAiEA9F5zeZ5XFZyLkwm6DPxIpKX2orzvMitv25HtqP1BLwcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPVQE%2BAKXretkk26cSrcA01J%2Bsj%2FAXMcIvHTV3F1K59%2BWtDchHerJmnw9jkd8hACv12femR0hNy6M7eJkbPuCTHVMOe0%2F6XKBAnhQm8KwA8sEMecVXZDTELtCTOAoiC0c7J03G%2FgpbA%2F6Z2femJJ49j5WBOx96XX4mcg1VOKVLj9L6d2Sl5Rp2psSRqZJjfPpYvla4z30NLG9PeJt%2BEHc1MXyqkbyEOxHvRV9quzJAE3NEDuWCKWreBv8q1uVhEupCpYoBv9WJCeto%2Bhl%2BYTu%2BWUz5VWAHfxFR6kVYgs%2FH2rMQkj5tIxjmNDbl7xFKMLtbKhUcY79iyTjd6b%2FR7%2BMYvZ9BzTQWJ9DVExdcaFJ88jVdryfQIb0B2fvsDGaAraxbDoom7fl1CuTRCw0zbY5Z9d2IbQqB1rhI%2F0KBkkA%2BYH9F3xrUJfuvGWNyjwflnS3TuYoA04GS3v1yLUbRG4TeOte8yDfDwALkQENbYjityQ2QxgJYR2YKQHFL2j9kmJUpmpPC1XR8uVhCsrB9W%2BnX5g94QDTQRaAZ1X7YHzPODPu5XIH58oiCTwnWc%2BUFobmBoyw1q30R0GNSEC4vunSehteNB5NgBOgI57LXFm2z1M60ExoRqkG1n6uTYijDpzf2bcFjw5pCPMnb9rMNaf0b8GOqUBGuRFvKi6k1OKwv3WHz9hUlIz6gIMNPz%2B4BFn%2Bl7flaIQAmXXHeQ3dxl3zTlovWzmDG7ST1PXuP4shI46NCB91OJA01yBcYFryy9%2BFd5oWcYHxW64AxSOmHy87DuIWMjXz91QtrLkvp54N8M3OUcE1JFLHXbkaYaryQNfkE1SFLU3t0T2Uwoli0wP2DtkcoM7a55ZhHqfuH5bBmPtVqdKrumGFkg2&X-Amz-Signature=a6362f8bf0dfc1caf244ff26533974da9c52d12616ae01486ca0833b2d9cd7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJBDOOW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADclsPkdYCprDSeCI8Nvd2L2gXq6%2FsnmP98FGIJBDKYAiEA9F5zeZ5XFZyLkwm6DPxIpKX2orzvMitv25HtqP1BLwcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPVQE%2BAKXretkk26cSrcA01J%2Bsj%2FAXMcIvHTV3F1K59%2BWtDchHerJmnw9jkd8hACv12femR0hNy6M7eJkbPuCTHVMOe0%2F6XKBAnhQm8KwA8sEMecVXZDTELtCTOAoiC0c7J03G%2FgpbA%2F6Z2femJJ49j5WBOx96XX4mcg1VOKVLj9L6d2Sl5Rp2psSRqZJjfPpYvla4z30NLG9PeJt%2BEHc1MXyqkbyEOxHvRV9quzJAE3NEDuWCKWreBv8q1uVhEupCpYoBv9WJCeto%2Bhl%2BYTu%2BWUz5VWAHfxFR6kVYgs%2FH2rMQkj5tIxjmNDbl7xFKMLtbKhUcY79iyTjd6b%2FR7%2BMYvZ9BzTQWJ9DVExdcaFJ88jVdryfQIb0B2fvsDGaAraxbDoom7fl1CuTRCw0zbY5Z9d2IbQqB1rhI%2F0KBkkA%2BYH9F3xrUJfuvGWNyjwflnS3TuYoA04GS3v1yLUbRG4TeOte8yDfDwALkQENbYjityQ2QxgJYR2YKQHFL2j9kmJUpmpPC1XR8uVhCsrB9W%2BnX5g94QDTQRaAZ1X7YHzPODPu5XIH58oiCTwnWc%2BUFobmBoyw1q30R0GNSEC4vunSehteNB5NgBOgI57LXFm2z1M60ExoRqkG1n6uTYijDpzf2bcFjw5pCPMnb9rMNaf0b8GOqUBGuRFvKi6k1OKwv3WHz9hUlIz6gIMNPz%2B4BFn%2Bl7flaIQAmXXHeQ3dxl3zTlovWzmDG7ST1PXuP4shI46NCB91OJA01yBcYFryy9%2BFd5oWcYHxW64AxSOmHy87DuIWMjXz91QtrLkvp54N8M3OUcE1JFLHXbkaYaryQNfkE1SFLU3t0T2Uwoli0wP2DtkcoM7a55ZhHqfuH5bBmPtVqdKrumGFkg2&X-Amz-Signature=522a1ad4e12397f284d1b541d9e1cc15a162f81e7659c18cb772c03ae2e4828f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJBDOOW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADclsPkdYCprDSeCI8Nvd2L2gXq6%2FsnmP98FGIJBDKYAiEA9F5zeZ5XFZyLkwm6DPxIpKX2orzvMitv25HtqP1BLwcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPVQE%2BAKXretkk26cSrcA01J%2Bsj%2FAXMcIvHTV3F1K59%2BWtDchHerJmnw9jkd8hACv12femR0hNy6M7eJkbPuCTHVMOe0%2F6XKBAnhQm8KwA8sEMecVXZDTELtCTOAoiC0c7J03G%2FgpbA%2F6Z2femJJ49j5WBOx96XX4mcg1VOKVLj9L6d2Sl5Rp2psSRqZJjfPpYvla4z30NLG9PeJt%2BEHc1MXyqkbyEOxHvRV9quzJAE3NEDuWCKWreBv8q1uVhEupCpYoBv9WJCeto%2Bhl%2BYTu%2BWUz5VWAHfxFR6kVYgs%2FH2rMQkj5tIxjmNDbl7xFKMLtbKhUcY79iyTjd6b%2FR7%2BMYvZ9BzTQWJ9DVExdcaFJ88jVdryfQIb0B2fvsDGaAraxbDoom7fl1CuTRCw0zbY5Z9d2IbQqB1rhI%2F0KBkkA%2BYH9F3xrUJfuvGWNyjwflnS3TuYoA04GS3v1yLUbRG4TeOte8yDfDwALkQENbYjityQ2QxgJYR2YKQHFL2j9kmJUpmpPC1XR8uVhCsrB9W%2BnX5g94QDTQRaAZ1X7YHzPODPu5XIH58oiCTwnWc%2BUFobmBoyw1q30R0GNSEC4vunSehteNB5NgBOgI57LXFm2z1M60ExoRqkG1n6uTYijDpzf2bcFjw5pCPMnb9rMNaf0b8GOqUBGuRFvKi6k1OKwv3WHz9hUlIz6gIMNPz%2B4BFn%2Bl7flaIQAmXXHeQ3dxl3zTlovWzmDG7ST1PXuP4shI46NCB91OJA01yBcYFryy9%2BFd5oWcYHxW64AxSOmHy87DuIWMjXz91QtrLkvp54N8M3OUcE1JFLHXbkaYaryQNfkE1SFLU3t0T2Uwoli0wP2DtkcoM7a55ZhHqfuH5bBmPtVqdKrumGFkg2&X-Amz-Signature=58684183cecf808bdcd2356d613fdd1a51c6a7b05cb617de7d1edcfd7ce1a5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
