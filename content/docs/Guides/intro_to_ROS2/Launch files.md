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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMOSXYZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCFMVQQpJn5jY2OdyL8EaNTPzntJMMXiQ%2FoOQMHosLJjQIgKfUu3vajJm1fbcbQIgjPdS5gMFPd7neTUfuHF5hi%2B9UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOOmK1l9yITvWlQVircA%2FFHQN%2FT5%2FHk%2BOIOWw53Y%2Bf%2BHXcbRiWRwvUZ91QaJKgaptbrniB3ieQ9RqwsttE6EjwIy71SnhNi8exk7AvjRtWSyUKWSSmKR41cWy43GViHD%2BiNVlxzI6uRM9Il3mdodLnlo2jYwlVlgl506w7Sn8hinT84gUZbevbieai8GwBH9SfgTMUZ2XFaX9BVmnP3iW6jBOqm%2BwfJAKTCBlTSpz17fi5ojHtJyPEZFZ8uz49m%2BPKRKRGbMUInYDE%2FVrzSsiV0zvqPMS8yoD9GiaCKaRDZ0s3fCtI54LnFiSl2q2qO8%2Bu3PrHP%2BwztdIAds33jX1KmvFtFYuay4ZvPJxcHlAKj2zBPopX5SDIWMQlyvYpvWKtNxrGCBJ26hvJlooav%2FsICxfOc5zXJW4d0HB%2F84d6IlXGwNlUtO2sZnlQ9vp%2F0Ieinf6%2BlleI0JroxHlf2JTeAHF8gz%2B0dgzaXXiz67q8PB1pmqhTxjqujBTJPUcfA4UCMqzm8cgmWgc3OAOifsiiK9vbvfNf17KxoZbGI7Kz%2FKbQmufueq5OD6Xj1efC6mbLa5rQTRA3B5TjNYOcP9GA5RxygJJPiVGvR44NEKz8wZEGhM5DrLH8RhRL7lO9WcrUMrec3j988kHXEMPiGucEGOqUB779RmX26UMfhjmwJTZkCulndyrf5J0IsUV6uIo2hLrC5a8v5LvGBZilP%2BMhiT0nxSn1cKeKlWMKaPmrdwgyG7TAPrHD5237kkCJS9pIq2wTEqvJtOdBTxSXfsgN%2FgyWHl7iDvKNWZMtIxK0ytO6W6G%2BtFyGGBKyVgNX8TRDw4IdQzNH4npmrGb9G4zWRbiUlUCaJR1O0vUip7Yo4yjOvWbzdgLgV&X-Amz-Signature=30ddb3a392520947cb2ba6ff5a353da2fbeb64435c9b51f2496f6ef2f34a7e09&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMOSXYZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCFMVQQpJn5jY2OdyL8EaNTPzntJMMXiQ%2FoOQMHosLJjQIgKfUu3vajJm1fbcbQIgjPdS5gMFPd7neTUfuHF5hi%2B9UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOOmK1l9yITvWlQVircA%2FFHQN%2FT5%2FHk%2BOIOWw53Y%2Bf%2BHXcbRiWRwvUZ91QaJKgaptbrniB3ieQ9RqwsttE6EjwIy71SnhNi8exk7AvjRtWSyUKWSSmKR41cWy43GViHD%2BiNVlxzI6uRM9Il3mdodLnlo2jYwlVlgl506w7Sn8hinT84gUZbevbieai8GwBH9SfgTMUZ2XFaX9BVmnP3iW6jBOqm%2BwfJAKTCBlTSpz17fi5ojHtJyPEZFZ8uz49m%2BPKRKRGbMUInYDE%2FVrzSsiV0zvqPMS8yoD9GiaCKaRDZ0s3fCtI54LnFiSl2q2qO8%2Bu3PrHP%2BwztdIAds33jX1KmvFtFYuay4ZvPJxcHlAKj2zBPopX5SDIWMQlyvYpvWKtNxrGCBJ26hvJlooav%2FsICxfOc5zXJW4d0HB%2F84d6IlXGwNlUtO2sZnlQ9vp%2F0Ieinf6%2BlleI0JroxHlf2JTeAHF8gz%2B0dgzaXXiz67q8PB1pmqhTxjqujBTJPUcfA4UCMqzm8cgmWgc3OAOifsiiK9vbvfNf17KxoZbGI7Kz%2FKbQmufueq5OD6Xj1efC6mbLa5rQTRA3B5TjNYOcP9GA5RxygJJPiVGvR44NEKz8wZEGhM5DrLH8RhRL7lO9WcrUMrec3j988kHXEMPiGucEGOqUB779RmX26UMfhjmwJTZkCulndyrf5J0IsUV6uIo2hLrC5a8v5LvGBZilP%2BMhiT0nxSn1cKeKlWMKaPmrdwgyG7TAPrHD5237kkCJS9pIq2wTEqvJtOdBTxSXfsgN%2FgyWHl7iDvKNWZMtIxK0ytO6W6G%2BtFyGGBKyVgNX8TRDw4IdQzNH4npmrGb9G4zWRbiUlUCaJR1O0vUip7Yo4yjOvWbzdgLgV&X-Amz-Signature=8b19ea828c3154f69ee75210ec60a8f0185bd76ed882e6aef1dac1c8b0f79b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMOSXYZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCFMVQQpJn5jY2OdyL8EaNTPzntJMMXiQ%2FoOQMHosLJjQIgKfUu3vajJm1fbcbQIgjPdS5gMFPd7neTUfuHF5hi%2B9UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOOmK1l9yITvWlQVircA%2FFHQN%2FT5%2FHk%2BOIOWw53Y%2Bf%2BHXcbRiWRwvUZ91QaJKgaptbrniB3ieQ9RqwsttE6EjwIy71SnhNi8exk7AvjRtWSyUKWSSmKR41cWy43GViHD%2BiNVlxzI6uRM9Il3mdodLnlo2jYwlVlgl506w7Sn8hinT84gUZbevbieai8GwBH9SfgTMUZ2XFaX9BVmnP3iW6jBOqm%2BwfJAKTCBlTSpz17fi5ojHtJyPEZFZ8uz49m%2BPKRKRGbMUInYDE%2FVrzSsiV0zvqPMS8yoD9GiaCKaRDZ0s3fCtI54LnFiSl2q2qO8%2Bu3PrHP%2BwztdIAds33jX1KmvFtFYuay4ZvPJxcHlAKj2zBPopX5SDIWMQlyvYpvWKtNxrGCBJ26hvJlooav%2FsICxfOc5zXJW4d0HB%2F84d6IlXGwNlUtO2sZnlQ9vp%2F0Ieinf6%2BlleI0JroxHlf2JTeAHF8gz%2B0dgzaXXiz67q8PB1pmqhTxjqujBTJPUcfA4UCMqzm8cgmWgc3OAOifsiiK9vbvfNf17KxoZbGI7Kz%2FKbQmufueq5OD6Xj1efC6mbLa5rQTRA3B5TjNYOcP9GA5RxygJJPiVGvR44NEKz8wZEGhM5DrLH8RhRL7lO9WcrUMrec3j988kHXEMPiGucEGOqUB779RmX26UMfhjmwJTZkCulndyrf5J0IsUV6uIo2hLrC5a8v5LvGBZilP%2BMhiT0nxSn1cKeKlWMKaPmrdwgyG7TAPrHD5237kkCJS9pIq2wTEqvJtOdBTxSXfsgN%2FgyWHl7iDvKNWZMtIxK0ytO6W6G%2BtFyGGBKyVgNX8TRDw4IdQzNH4npmrGb9G4zWRbiUlUCaJR1O0vUip7Yo4yjOvWbzdgLgV&X-Amz-Signature=715c658183a514d5c43a59be0863dfe8e42f864bb6dd67920b73591f034f86e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
