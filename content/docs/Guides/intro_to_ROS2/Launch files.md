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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EYAR7F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHUvfTRtk%2FkMPpyNdZLlJurqj%2Bek64pHVPaozeZS4%2BpOAiBzUuRDBN1CLkO0UyHjhxtcvV%2Ba9YH%2F%2FNXEzy5pZhqBoSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMq6qmItjpWfJ9Qyf1KtwDHi18HRSPh8WKCrIM4UPalf9JWoPe9SfQJaPRSp6yJ8oxQmqTSv3sn8FTpNpGSNjHYTJQm3bWuL7XW9i42nBQVzWYs2bV5vQClTS83K4EwZ6Hae3jRUbENP4Beweh5dEBQtGwTn1EvZDVOdoQunViIyhHNznwN2yJPHDA9BtAYFXZMjqDALcTHLSBVGJMEC7WmuG57uQVtg7U7YiOlajSpPwiPkZaNHWaEaxVrSFoYrW2cW4mFnzJ0OTMbdOJ3iNDTDqIi%2BfX9obgx2dRFrzZv7lpJaIekoehiKRMF7fd0pt2%2F%2F2mEt3kki4hj9B45hE%2BhIl1VhFJh3%2FtJydz7USm2EovhF4ILwEM8FdvQDiw3GGR%2Fj8egbHNhLth2bfztRxYrXyg5v%2BwR7BvZ9FDQNkGmcCbHcuXZI1h7Z99gH%2FT1v6zx%2Fa1Cal33FYyDidVgxd3JXuH%2BvtHPSg22bgYeT4eGlcf0CA8S4H0W1dVwv1U7pT7RqIkMY6QWmuZo1YaJgyEciL4Q%2BXeNjXNQ1XngWRDs%2Fv%2BrkxagAOjuW7AXAHoG8%2FTz9pR50UnC7eWj0EA1P0%2BQ%2BXsSwNXR%2BcT6%2Fx%2Bry1JEDK4kN%2FazmzT2uGBotu%2FTkkzfyU8VMo5CtnNr8swloXUwwY6pgF4HU3Lho7bqy05kvjeJPeWGSMTENzdaTpjmbSgPfUrAi2m2BBeOereU%2BSMc%2FF7548MhEjxjzwp6H%2FrgKnnZReLstSHoxPu9W9Ourrv3DcseWZrDJh%2FRI8HnB29iRjRwUOtn%2Bz4VhjTStbtwsvqv%2FkuI8VNHhax2zYj6HZJ%2BcsG3TP0378tVH%2BFiGGsLkUiQN64upWYGpscRQQLoKiRaEaid1pRjNxi&X-Amz-Signature=b7ba478a625f73f4c5d52e36c46024ebe7b6123e8c86a86e7f98898fa766ad8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EYAR7F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHUvfTRtk%2FkMPpyNdZLlJurqj%2Bek64pHVPaozeZS4%2BpOAiBzUuRDBN1CLkO0UyHjhxtcvV%2Ba9YH%2F%2FNXEzy5pZhqBoSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMq6qmItjpWfJ9Qyf1KtwDHi18HRSPh8WKCrIM4UPalf9JWoPe9SfQJaPRSp6yJ8oxQmqTSv3sn8FTpNpGSNjHYTJQm3bWuL7XW9i42nBQVzWYs2bV5vQClTS83K4EwZ6Hae3jRUbENP4Beweh5dEBQtGwTn1EvZDVOdoQunViIyhHNznwN2yJPHDA9BtAYFXZMjqDALcTHLSBVGJMEC7WmuG57uQVtg7U7YiOlajSpPwiPkZaNHWaEaxVrSFoYrW2cW4mFnzJ0OTMbdOJ3iNDTDqIi%2BfX9obgx2dRFrzZv7lpJaIekoehiKRMF7fd0pt2%2F%2F2mEt3kki4hj9B45hE%2BhIl1VhFJh3%2FtJydz7USm2EovhF4ILwEM8FdvQDiw3GGR%2Fj8egbHNhLth2bfztRxYrXyg5v%2BwR7BvZ9FDQNkGmcCbHcuXZI1h7Z99gH%2FT1v6zx%2Fa1Cal33FYyDidVgxd3JXuH%2BvtHPSg22bgYeT4eGlcf0CA8S4H0W1dVwv1U7pT7RqIkMY6QWmuZo1YaJgyEciL4Q%2BXeNjXNQ1XngWRDs%2Fv%2BrkxagAOjuW7AXAHoG8%2FTz9pR50UnC7eWj0EA1P0%2BQ%2BXsSwNXR%2BcT6%2Fx%2Bry1JEDK4kN%2FazmzT2uGBotu%2FTkkzfyU8VMo5CtnNr8swloXUwwY6pgF4HU3Lho7bqy05kvjeJPeWGSMTENzdaTpjmbSgPfUrAi2m2BBeOereU%2BSMc%2FF7548MhEjxjzwp6H%2FrgKnnZReLstSHoxPu9W9Ourrv3DcseWZrDJh%2FRI8HnB29iRjRwUOtn%2Bz4VhjTStbtwsvqv%2FkuI8VNHhax2zYj6HZJ%2BcsG3TP0378tVH%2BFiGGsLkUiQN64upWYGpscRQQLoKiRaEaid1pRjNxi&X-Amz-Signature=b9d0eed93e0bc8a81b4502c0f3046f23c0bfd40ae7088aa0d054e65651fd6beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EYAR7F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHUvfTRtk%2FkMPpyNdZLlJurqj%2Bek64pHVPaozeZS4%2BpOAiBzUuRDBN1CLkO0UyHjhxtcvV%2Ba9YH%2F%2FNXEzy5pZhqBoSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMq6qmItjpWfJ9Qyf1KtwDHi18HRSPh8WKCrIM4UPalf9JWoPe9SfQJaPRSp6yJ8oxQmqTSv3sn8FTpNpGSNjHYTJQm3bWuL7XW9i42nBQVzWYs2bV5vQClTS83K4EwZ6Hae3jRUbENP4Beweh5dEBQtGwTn1EvZDVOdoQunViIyhHNznwN2yJPHDA9BtAYFXZMjqDALcTHLSBVGJMEC7WmuG57uQVtg7U7YiOlajSpPwiPkZaNHWaEaxVrSFoYrW2cW4mFnzJ0OTMbdOJ3iNDTDqIi%2BfX9obgx2dRFrzZv7lpJaIekoehiKRMF7fd0pt2%2F%2F2mEt3kki4hj9B45hE%2BhIl1VhFJh3%2FtJydz7USm2EovhF4ILwEM8FdvQDiw3GGR%2Fj8egbHNhLth2bfztRxYrXyg5v%2BwR7BvZ9FDQNkGmcCbHcuXZI1h7Z99gH%2FT1v6zx%2Fa1Cal33FYyDidVgxd3JXuH%2BvtHPSg22bgYeT4eGlcf0CA8S4H0W1dVwv1U7pT7RqIkMY6QWmuZo1YaJgyEciL4Q%2BXeNjXNQ1XngWRDs%2Fv%2BrkxagAOjuW7AXAHoG8%2FTz9pR50UnC7eWj0EA1P0%2BQ%2BXsSwNXR%2BcT6%2Fx%2Bry1JEDK4kN%2FazmzT2uGBotu%2FTkkzfyU8VMo5CtnNr8swloXUwwY6pgF4HU3Lho7bqy05kvjeJPeWGSMTENzdaTpjmbSgPfUrAi2m2BBeOereU%2BSMc%2FF7548MhEjxjzwp6H%2FrgKnnZReLstSHoxPu9W9Ourrv3DcseWZrDJh%2FRI8HnB29iRjRwUOtn%2Bz4VhjTStbtwsvqv%2FkuI8VNHhax2zYj6HZJ%2BcsG3TP0378tVH%2BFiGGsLkUiQN64upWYGpscRQQLoKiRaEaid1pRjNxi&X-Amz-Signature=1776d5c8b6d7752e3db29129835307123395ab2ef4536da3715708f12191f427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
