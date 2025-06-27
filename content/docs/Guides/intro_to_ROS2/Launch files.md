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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3VHZMZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFmrKPrRVuW%2BE8B3jOkuC61aTIVEFkp8SextONl0NUGRAiEAkp%2BdAKktVyVo%2B0zNjWI1tm0i%2B2vb0Vx%2FfVL9nRMLFHsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAFTcfMc7mdwuZXM9CrcA2Ned2aRnVn0483Z30xXK6dptC9OLpYdSeOoGCp6QywdBRRJMrZSHfdSL%2F3ohd9ukOr1LaA8M08K%2BjXw1u7QMvv6FYl%2Bp9ACX0gtzyedM9KWGHKReBlNSifXCNZwKwHVsTxaL3H9pY15PhXt1EQy0CBKbGY6OVU9sah6ku6w4z4v2x29C2fPumjIQS04IjD4%2BMm7eTKjAoK8kaqg82NDpR%2B5TZpE6oc28DgMfTruEcNIu%2FfYJPIr6M6YXEofmspZnyTTy%2BZ1qzr6x9nzCb065wGzOctsswI6M8RS8ClM%2FurtdH13cDSs2UOUhOL6qhYnisucUiAx40rlyNhe4RCDHlPyroLLXO6TRmV%2F9hD51PEzEA6qISz%2BRkK24huow5mhp1GserBJAz7R7fhpZHs8G582bOAtRPS3nNwHSNiQesnusDsv4z0ez2%2BsLgezqxyVz3qET0n%2FRfbVyxvJ0n0TvmNL1zIPEQNYBTXrh5klPIvLykFdQYZl39g%2B0JXuBBjHXvOmc1V123aKuNq4IEPYHRb1JLNIbptrOta96CsTXloPXHBoAjSJVVROC%2Fr6B70cau6ZXeKcmDyKMwge6UEs329Kfx8ANZkEp7xXQlXJ80qERtz7n58iUDUHZV3EMOnK%2BMIGOqUBop14WPG3uKrLXaw9NMZx%2BUZzViVJPfKXWgxdU4ggB687Hy7dc8bMib3aQKPRXF%2FJLqAg2nMQiWTqj0nmY4%2BZ6zOVqG0pzsfb1mcVkVDYDvwd4YNzvtXjG3m00AsnMii%2BB%2B1aM5szNf6y7Rti55bAoB1kj3%2BkoJ5wegcQygjntP6Zul8xWBYodylKR9ukfA2GZlVGKN4sNZCRh1tWl3OApRoLiZE3&X-Amz-Signature=01899badba609a2f83a2dace997af5830a007b67b4d2e0c087a0152586b2f689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3VHZMZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFmrKPrRVuW%2BE8B3jOkuC61aTIVEFkp8SextONl0NUGRAiEAkp%2BdAKktVyVo%2B0zNjWI1tm0i%2B2vb0Vx%2FfVL9nRMLFHsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAFTcfMc7mdwuZXM9CrcA2Ned2aRnVn0483Z30xXK6dptC9OLpYdSeOoGCp6QywdBRRJMrZSHfdSL%2F3ohd9ukOr1LaA8M08K%2BjXw1u7QMvv6FYl%2Bp9ACX0gtzyedM9KWGHKReBlNSifXCNZwKwHVsTxaL3H9pY15PhXt1EQy0CBKbGY6OVU9sah6ku6w4z4v2x29C2fPumjIQS04IjD4%2BMm7eTKjAoK8kaqg82NDpR%2B5TZpE6oc28DgMfTruEcNIu%2FfYJPIr6M6YXEofmspZnyTTy%2BZ1qzr6x9nzCb065wGzOctsswI6M8RS8ClM%2FurtdH13cDSs2UOUhOL6qhYnisucUiAx40rlyNhe4RCDHlPyroLLXO6TRmV%2F9hD51PEzEA6qISz%2BRkK24huow5mhp1GserBJAz7R7fhpZHs8G582bOAtRPS3nNwHSNiQesnusDsv4z0ez2%2BsLgezqxyVz3qET0n%2FRfbVyxvJ0n0TvmNL1zIPEQNYBTXrh5klPIvLykFdQYZl39g%2B0JXuBBjHXvOmc1V123aKuNq4IEPYHRb1JLNIbptrOta96CsTXloPXHBoAjSJVVROC%2Fr6B70cau6ZXeKcmDyKMwge6UEs329Kfx8ANZkEp7xXQlXJ80qERtz7n58iUDUHZV3EMOnK%2BMIGOqUBop14WPG3uKrLXaw9NMZx%2BUZzViVJPfKXWgxdU4ggB687Hy7dc8bMib3aQKPRXF%2FJLqAg2nMQiWTqj0nmY4%2BZ6zOVqG0pzsfb1mcVkVDYDvwd4YNzvtXjG3m00AsnMii%2BB%2B1aM5szNf6y7Rti55bAoB1kj3%2BkoJ5wegcQygjntP6Zul8xWBYodylKR9ukfA2GZlVGKN4sNZCRh1tWl3OApRoLiZE3&X-Amz-Signature=4a9267416a9adaf731494bf35b2451bf51e65451c37810e9a68e25d6ae0999b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3VHZMZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFmrKPrRVuW%2BE8B3jOkuC61aTIVEFkp8SextONl0NUGRAiEAkp%2BdAKktVyVo%2B0zNjWI1tm0i%2B2vb0Vx%2FfVL9nRMLFHsq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAFTcfMc7mdwuZXM9CrcA2Ned2aRnVn0483Z30xXK6dptC9OLpYdSeOoGCp6QywdBRRJMrZSHfdSL%2F3ohd9ukOr1LaA8M08K%2BjXw1u7QMvv6FYl%2Bp9ACX0gtzyedM9KWGHKReBlNSifXCNZwKwHVsTxaL3H9pY15PhXt1EQy0CBKbGY6OVU9sah6ku6w4z4v2x29C2fPumjIQS04IjD4%2BMm7eTKjAoK8kaqg82NDpR%2B5TZpE6oc28DgMfTruEcNIu%2FfYJPIr6M6YXEofmspZnyTTy%2BZ1qzr6x9nzCb065wGzOctsswI6M8RS8ClM%2FurtdH13cDSs2UOUhOL6qhYnisucUiAx40rlyNhe4RCDHlPyroLLXO6TRmV%2F9hD51PEzEA6qISz%2BRkK24huow5mhp1GserBJAz7R7fhpZHs8G582bOAtRPS3nNwHSNiQesnusDsv4z0ez2%2BsLgezqxyVz3qET0n%2FRfbVyxvJ0n0TvmNL1zIPEQNYBTXrh5klPIvLykFdQYZl39g%2B0JXuBBjHXvOmc1V123aKuNq4IEPYHRb1JLNIbptrOta96CsTXloPXHBoAjSJVVROC%2Fr6B70cau6ZXeKcmDyKMwge6UEs329Kfx8ANZkEp7xXQlXJ80qERtz7n58iUDUHZV3EMOnK%2BMIGOqUBop14WPG3uKrLXaw9NMZx%2BUZzViVJPfKXWgxdU4ggB687Hy7dc8bMib3aQKPRXF%2FJLqAg2nMQiWTqj0nmY4%2BZ6zOVqG0pzsfb1mcVkVDYDvwd4YNzvtXjG3m00AsnMii%2BB%2B1aM5szNf6y7Rti55bAoB1kj3%2BkoJ5wegcQygjntP6Zul8xWBYodylKR9ukfA2GZlVGKN4sNZCRh1tWl3OApRoLiZE3&X-Amz-Signature=445f564e868c9983657e6d6fd4e88cd6af66f74e4f31d6490ce415440f579f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
