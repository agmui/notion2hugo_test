---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHEHQ3U%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXU3ngxNLK9c0jcq9YopfQEWdsaC1VRisIz8AGXpivkgIhAIxpE0bASNC6xamjkDR1V3T9673zGA7CirvuNezK1NviKv8DCCEQABoMNjM3NDIzMTgzODA1Igwl5T%2Bi7jzhMsf3m00q3ANQmiGzmE7fNlP8U1Rrzv8TwHKVxmzpauVOC7tFZ4rEDVyHyMwab3s7g2RqEYhJhQVNMxH5YegdrlJT%2Fxmdj0iaxfEoWnIwuTxEikI%2Fgny1YSSrx13UO91sb%2FmtJuFnbtw3go9PZwAZzP6u%2BJxeslkgjrRFpKw%2B58DOhoqqlXXux8NZxMv4jDOZ9W0AtZlEfprzcOMz%2FpsyDw5zct9HE3jazs0bVhDDyTd1Ble3K1W%2FNxX7%2BXKbowC2EXyzHf0UWgEYyYs1MNGHcyYcaLjJ%2B0ac7mHHtw1tWeYOhGXqSFIGtmde%2BwSxjZ%2FoZVzHnIcs3aEmlBpreTyhDfSdcHVT7s5lLC0lK9850M6lSdh4BjDGKiTwyisOmXDPYw4ut5kl%2Fgs8J02BmAxzzpU8zm4VIl91K5Ibhyym3Jzg3PnR4NkH2sfmcsk4L7JemoMWCD88xQO%2Bg2P9THKsIPAWuPuR9ZYov8ekJMgZYyv0%2BGljusygLArNkvaCLHpIhH%2F2%2FDcTMNrHSKZhd4pqYX3viH16pME3j9bjrd59v8Vam1r1O1bw%2Bh870E4oAXEbI5wI2zAnADa1Y5qOkbOtGXW6TU5u1Q554rquDvNJ3rSWiXgWmUf2nhzYFYTKeDsProWG9jD00o3GBjqkAaqicmuP6y00MIr0WIpboLzTZZ%2Bta9V%2BJDSQZRVOGYVvXweQ9n9sO%2Fr6zTQnnrW587iryU%2FB%2FCBJgLBNj1aO5qcoCncYI%2BpzH%2F29BOJyCzts8JiweZTVN6lDjs6PXDIeGqD2y2a2WSL1KONlnfSBs8oy9m0SZePt1bjUB6BvlV94vxBC42ZcGsQ3u5RZnyQ%2FgrChWKYEO124XxrVFx%2BWE5u0Fpmm&X-Amz-Signature=4f679866cd85df006b8b04b4268663df41a79dee5807760ecff243fa816e0326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHEHQ3U%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXU3ngxNLK9c0jcq9YopfQEWdsaC1VRisIz8AGXpivkgIhAIxpE0bASNC6xamjkDR1V3T9673zGA7CirvuNezK1NviKv8DCCEQABoMNjM3NDIzMTgzODA1Igwl5T%2Bi7jzhMsf3m00q3ANQmiGzmE7fNlP8U1Rrzv8TwHKVxmzpauVOC7tFZ4rEDVyHyMwab3s7g2RqEYhJhQVNMxH5YegdrlJT%2Fxmdj0iaxfEoWnIwuTxEikI%2Fgny1YSSrx13UO91sb%2FmtJuFnbtw3go9PZwAZzP6u%2BJxeslkgjrRFpKw%2B58DOhoqqlXXux8NZxMv4jDOZ9W0AtZlEfprzcOMz%2FpsyDw5zct9HE3jazs0bVhDDyTd1Ble3K1W%2FNxX7%2BXKbowC2EXyzHf0UWgEYyYs1MNGHcyYcaLjJ%2B0ac7mHHtw1tWeYOhGXqSFIGtmde%2BwSxjZ%2FoZVzHnIcs3aEmlBpreTyhDfSdcHVT7s5lLC0lK9850M6lSdh4BjDGKiTwyisOmXDPYw4ut5kl%2Fgs8J02BmAxzzpU8zm4VIl91K5Ibhyym3Jzg3PnR4NkH2sfmcsk4L7JemoMWCD88xQO%2Bg2P9THKsIPAWuPuR9ZYov8ekJMgZYyv0%2BGljusygLArNkvaCLHpIhH%2F2%2FDcTMNrHSKZhd4pqYX3viH16pME3j9bjrd59v8Vam1r1O1bw%2Bh870E4oAXEbI5wI2zAnADa1Y5qOkbOtGXW6TU5u1Q554rquDvNJ3rSWiXgWmUf2nhzYFYTKeDsProWG9jD00o3GBjqkAaqicmuP6y00MIr0WIpboLzTZZ%2Bta9V%2BJDSQZRVOGYVvXweQ9n9sO%2Fr6zTQnnrW587iryU%2FB%2FCBJgLBNj1aO5qcoCncYI%2BpzH%2F29BOJyCzts8JiweZTVN6lDjs6PXDIeGqD2y2a2WSL1KONlnfSBs8oy9m0SZePt1bjUB6BvlV94vxBC42ZcGsQ3u5RZnyQ%2FgrChWKYEO124XxrVFx%2BWE5u0Fpmm&X-Amz-Signature=03f589957990bdb6819c5c99bda72a5242de6cfb8e7d29beaff5bba198590405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHEHQ3U%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXU3ngxNLK9c0jcq9YopfQEWdsaC1VRisIz8AGXpivkgIhAIxpE0bASNC6xamjkDR1V3T9673zGA7CirvuNezK1NviKv8DCCEQABoMNjM3NDIzMTgzODA1Igwl5T%2Bi7jzhMsf3m00q3ANQmiGzmE7fNlP8U1Rrzv8TwHKVxmzpauVOC7tFZ4rEDVyHyMwab3s7g2RqEYhJhQVNMxH5YegdrlJT%2Fxmdj0iaxfEoWnIwuTxEikI%2Fgny1YSSrx13UO91sb%2FmtJuFnbtw3go9PZwAZzP6u%2BJxeslkgjrRFpKw%2B58DOhoqqlXXux8NZxMv4jDOZ9W0AtZlEfprzcOMz%2FpsyDw5zct9HE3jazs0bVhDDyTd1Ble3K1W%2FNxX7%2BXKbowC2EXyzHf0UWgEYyYs1MNGHcyYcaLjJ%2B0ac7mHHtw1tWeYOhGXqSFIGtmde%2BwSxjZ%2FoZVzHnIcs3aEmlBpreTyhDfSdcHVT7s5lLC0lK9850M6lSdh4BjDGKiTwyisOmXDPYw4ut5kl%2Fgs8J02BmAxzzpU8zm4VIl91K5Ibhyym3Jzg3PnR4NkH2sfmcsk4L7JemoMWCD88xQO%2Bg2P9THKsIPAWuPuR9ZYov8ekJMgZYyv0%2BGljusygLArNkvaCLHpIhH%2F2%2FDcTMNrHSKZhd4pqYX3viH16pME3j9bjrd59v8Vam1r1O1bw%2Bh870E4oAXEbI5wI2zAnADa1Y5qOkbOtGXW6TU5u1Q554rquDvNJ3rSWiXgWmUf2nhzYFYTKeDsProWG9jD00o3GBjqkAaqicmuP6y00MIr0WIpboLzTZZ%2Bta9V%2BJDSQZRVOGYVvXweQ9n9sO%2Fr6zTQnnrW587iryU%2FB%2FCBJgLBNj1aO5qcoCncYI%2BpzH%2F29BOJyCzts8JiweZTVN6lDjs6PXDIeGqD2y2a2WSL1KONlnfSBs8oy9m0SZePt1bjUB6BvlV94vxBC42ZcGsQ3u5RZnyQ%2FgrChWKYEO124XxrVFx%2BWE5u0Fpmm&X-Amz-Signature=9cf2f18b213589f0c133c8a0044303609bbd8d3a7a43c70adec51ffcfca139b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
