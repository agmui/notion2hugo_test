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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WV2VH52%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDB%2ByUYEa2vAb0As6Ds5IrvvbZa2sjGHerjml6oe8eZGwIgYmFbXrmHGuXRXZBq5%2BhRMkqQud8zdI5Ma2zsVNxlQ%2FQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDvyZyOcdwCg515oiircA7iapKMUui6SduMjNRhh6Md%2Fa3jBtnQLI%2FYXxSwhbhTzNwSRR1ucAPtbBrBIdLR1avvMgeVInvQXgjnUZD8rbZRT7RrDTaAI%2FDj5mGDS0iRunkZoMa5iNwb%2BI1jJ0dN9LRE%2F6%2FmnhBKsQy2lRExsIXeUmTV1C%2FmcU9TM%2FH3N1oyJAG2Pfh%2FP5JL7J4qRbQDj0Ylg7lOHGFGOdlHtxfmqqK2xXhkT%2FImbIFTbO5NAr0mAVY2t5K3xzv4uN2jQx737ytiJQI7IuXM3M8Ue7bKQnnEfKU3n6GbyI%2BeCA1lzHV2TaBS3Y17Qctbc%2FVU4wyqJuP9dKA0HJSYb8VlzRRZH4hyEkI%2FvUiKVKLOy%2Fi2nBqyEea1EFbFrLfaop8gECSyK1igybvgWbiDUUGrUL0hWHJ82auYK9Fsfjhvx0OgJwOA7lNPZw4rtmpFZOhtQUcf%2FwZjdwVOHiDI5VLmh2TOgO7gwTLexPtyfO9yM05HM44sRkcmXDkg%2Ft1U6iv%2FQNDCBa5U9kAAmI1WZkRyg5nJwplQ3mQLwPdaFd7aS559UZ9ZT3Nf2z5%2BU27hocmWRAc8WhoD6Zz6xUmTfWzKLbOLH%2FixyzMiqWluKPsuJXrVkJ0llWnTI%2B03yDL3x%2BBgBMOnn%2F8EGOqUBP%2BfnWngNQCBrNOn2s7p2lXYwiS9ByNMc9t6GkPdsp3PU%2BAItGJqouu7OJG372pgX3WrqloN1388i%2FeVFU9bAy86thUPIRNWDJmdScxkr0Z4tYFwm5NLeyDlKIvKXa9ZG3475s1nG9rhpYrun9HCyDIgVx3elXkBax9SsTp3g9AHloe9DmWD16ItLZfNcCd%2FjUSvNjwlemNjxqfVrtIUiPgqYzyug&X-Amz-Signature=d185ccdd7c57ce6b27e5aeec8d0cabf51519886d35fb7da388da51fbee71dbdc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WV2VH52%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDB%2ByUYEa2vAb0As6Ds5IrvvbZa2sjGHerjml6oe8eZGwIgYmFbXrmHGuXRXZBq5%2BhRMkqQud8zdI5Ma2zsVNxlQ%2FQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDvyZyOcdwCg515oiircA7iapKMUui6SduMjNRhh6Md%2Fa3jBtnQLI%2FYXxSwhbhTzNwSRR1ucAPtbBrBIdLR1avvMgeVInvQXgjnUZD8rbZRT7RrDTaAI%2FDj5mGDS0iRunkZoMa5iNwb%2BI1jJ0dN9LRE%2F6%2FmnhBKsQy2lRExsIXeUmTV1C%2FmcU9TM%2FH3N1oyJAG2Pfh%2FP5JL7J4qRbQDj0Ylg7lOHGFGOdlHtxfmqqK2xXhkT%2FImbIFTbO5NAr0mAVY2t5K3xzv4uN2jQx737ytiJQI7IuXM3M8Ue7bKQnnEfKU3n6GbyI%2BeCA1lzHV2TaBS3Y17Qctbc%2FVU4wyqJuP9dKA0HJSYb8VlzRRZH4hyEkI%2FvUiKVKLOy%2Fi2nBqyEea1EFbFrLfaop8gECSyK1igybvgWbiDUUGrUL0hWHJ82auYK9Fsfjhvx0OgJwOA7lNPZw4rtmpFZOhtQUcf%2FwZjdwVOHiDI5VLmh2TOgO7gwTLexPtyfO9yM05HM44sRkcmXDkg%2Ft1U6iv%2FQNDCBa5U9kAAmI1WZkRyg5nJwplQ3mQLwPdaFd7aS559UZ9ZT3Nf2z5%2BU27hocmWRAc8WhoD6Zz6xUmTfWzKLbOLH%2FixyzMiqWluKPsuJXrVkJ0llWnTI%2B03yDL3x%2BBgBMOnn%2F8EGOqUBP%2BfnWngNQCBrNOn2s7p2lXYwiS9ByNMc9t6GkPdsp3PU%2BAItGJqouu7OJG372pgX3WrqloN1388i%2FeVFU9bAy86thUPIRNWDJmdScxkr0Z4tYFwm5NLeyDlKIvKXa9ZG3475s1nG9rhpYrun9HCyDIgVx3elXkBax9SsTp3g9AHloe9DmWD16ItLZfNcCd%2FjUSvNjwlemNjxqfVrtIUiPgqYzyug&X-Amz-Signature=acf13dece786f5be307450a3e0ba3465be9785556e5e95360d91b27cf4506cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WV2VH52%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDB%2ByUYEa2vAb0As6Ds5IrvvbZa2sjGHerjml6oe8eZGwIgYmFbXrmHGuXRXZBq5%2BhRMkqQud8zdI5Ma2zsVNxlQ%2FQq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDvyZyOcdwCg515oiircA7iapKMUui6SduMjNRhh6Md%2Fa3jBtnQLI%2FYXxSwhbhTzNwSRR1ucAPtbBrBIdLR1avvMgeVInvQXgjnUZD8rbZRT7RrDTaAI%2FDj5mGDS0iRunkZoMa5iNwb%2BI1jJ0dN9LRE%2F6%2FmnhBKsQy2lRExsIXeUmTV1C%2FmcU9TM%2FH3N1oyJAG2Pfh%2FP5JL7J4qRbQDj0Ylg7lOHGFGOdlHtxfmqqK2xXhkT%2FImbIFTbO5NAr0mAVY2t5K3xzv4uN2jQx737ytiJQI7IuXM3M8Ue7bKQnnEfKU3n6GbyI%2BeCA1lzHV2TaBS3Y17Qctbc%2FVU4wyqJuP9dKA0HJSYb8VlzRRZH4hyEkI%2FvUiKVKLOy%2Fi2nBqyEea1EFbFrLfaop8gECSyK1igybvgWbiDUUGrUL0hWHJ82auYK9Fsfjhvx0OgJwOA7lNPZw4rtmpFZOhtQUcf%2FwZjdwVOHiDI5VLmh2TOgO7gwTLexPtyfO9yM05HM44sRkcmXDkg%2Ft1U6iv%2FQNDCBa5U9kAAmI1WZkRyg5nJwplQ3mQLwPdaFd7aS559UZ9ZT3Nf2z5%2BU27hocmWRAc8WhoD6Zz6xUmTfWzKLbOLH%2FixyzMiqWluKPsuJXrVkJ0llWnTI%2B03yDL3x%2BBgBMOnn%2F8EGOqUBP%2BfnWngNQCBrNOn2s7p2lXYwiS9ByNMc9t6GkPdsp3PU%2BAItGJqouu7OJG372pgX3WrqloN1388i%2FeVFU9bAy86thUPIRNWDJmdScxkr0Z4tYFwm5NLeyDlKIvKXa9ZG3475s1nG9rhpYrun9HCyDIgVx3elXkBax9SsTp3g9AHloe9DmWD16ItLZfNcCd%2FjUSvNjwlemNjxqfVrtIUiPgqYzyug&X-Amz-Signature=0bbe05dd2d87ec7ce7e8dc42adc1acbe053d0c61502cfccf794ec5605407802b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
