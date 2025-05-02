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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEZA2ZG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCIymhr9pLMnliTcoMZeNoP0GpicDm5Mc%2FaSz6ub636GAIhAMvMjlBqcYyo4Clr3RSSN4adyJjJkh7Rr%2FbWkWwjlbHgKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKrHTOg9xkbcAnE8Yq3ANpTOAB%2FqJRB3KzAPELqE8EwsK6iTLMa92XtdqPUxWfGX56xKZeM5qZG4%2B5aYQ344vgXvU5a97iDOzyFcUlTcza4DP91U%2FdB%2BjGzuvUhijWVEGuz4wcPNlRcTafsablKn9tbC0D31YFpOQRRSh0CWTSvMj9zz8d9n3LXJu6japZTHyIhoKQhvqFXkTsVrIYq0JcLSyDhNPPTL1hx1oBW8MA3kldd5ONZlinW6swCNtlPhMfew%2FkJul2valxsfC1wanqrqtfDkXoGf51QlTHKfKNgnllW6ONKc7sPSuScaumBGc3apsOgg%2B34A0vFX2k4RFbAGp2R9UDhinz1pMKZZMBpEIQrWIf7ecP3gwLizQml9FgzJV9ixVVaYuWoCVqsfp15NVLTOUJFtCo4X5nkhm0zewSbYPtoOd9Ty0IZmejn%2B7DVi22Lo%2BuRp9VPVlFqHD8BkQHdyPlLe%2ByllYZfd1%2FKvT2Q%2FOLuTt6%2FvcuhV4M870P5tXDwS4UW4LFALm3gDLY50MRdIsmKLuTNp7pY17iMkP6Ll%2FNDkXPCM6TyJu9o8TvwFOhoLLZULEPylb5JJ6S8gSerWldNvl8er917EkKjRXwv21dokHnqmA1BzkNlQ4MumtaNlY41ASyiDCp5NPABjqkARQ0X0TB%2BgRrT3P7OvrRxT%2BUooh8rA4neGCsQzpSTcX6TbWgPgEBOfwQkzFFwodRLg%2BFyATJV940FgJbOQc8gn%2BNaKFcF5gyC9zRYEf0pFEyJyM3qVdZaMFWXH%2Bp%2Bg8jEEzOAQoga7mqZTSf02ccXYEeglAKapvU5f60JiW%2BQmNXZCCbkRsUzjHfDuQyk2Iq7IYhxiPZSWo1EjrvTS%2BNz2OMcw0k&X-Amz-Signature=fa7acf412a2bdd87cda285f4f9825fcd17b65c5d539c790fa3bf0f47deb06d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEZA2ZG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCIymhr9pLMnliTcoMZeNoP0GpicDm5Mc%2FaSz6ub636GAIhAMvMjlBqcYyo4Clr3RSSN4adyJjJkh7Rr%2FbWkWwjlbHgKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKrHTOg9xkbcAnE8Yq3ANpTOAB%2FqJRB3KzAPELqE8EwsK6iTLMa92XtdqPUxWfGX56xKZeM5qZG4%2B5aYQ344vgXvU5a97iDOzyFcUlTcza4DP91U%2FdB%2BjGzuvUhijWVEGuz4wcPNlRcTafsablKn9tbC0D31YFpOQRRSh0CWTSvMj9zz8d9n3LXJu6japZTHyIhoKQhvqFXkTsVrIYq0JcLSyDhNPPTL1hx1oBW8MA3kldd5ONZlinW6swCNtlPhMfew%2FkJul2valxsfC1wanqrqtfDkXoGf51QlTHKfKNgnllW6ONKc7sPSuScaumBGc3apsOgg%2B34A0vFX2k4RFbAGp2R9UDhinz1pMKZZMBpEIQrWIf7ecP3gwLizQml9FgzJV9ixVVaYuWoCVqsfp15NVLTOUJFtCo4X5nkhm0zewSbYPtoOd9Ty0IZmejn%2B7DVi22Lo%2BuRp9VPVlFqHD8BkQHdyPlLe%2ByllYZfd1%2FKvT2Q%2FOLuTt6%2FvcuhV4M870P5tXDwS4UW4LFALm3gDLY50MRdIsmKLuTNp7pY17iMkP6Ll%2FNDkXPCM6TyJu9o8TvwFOhoLLZULEPylb5JJ6S8gSerWldNvl8er917EkKjRXwv21dokHnqmA1BzkNlQ4MumtaNlY41ASyiDCp5NPABjqkARQ0X0TB%2BgRrT3P7OvrRxT%2BUooh8rA4neGCsQzpSTcX6TbWgPgEBOfwQkzFFwodRLg%2BFyATJV940FgJbOQc8gn%2BNaKFcF5gyC9zRYEf0pFEyJyM3qVdZaMFWXH%2Bp%2Bg8jEEzOAQoga7mqZTSf02ccXYEeglAKapvU5f60JiW%2BQmNXZCCbkRsUzjHfDuQyk2Iq7IYhxiPZSWo1EjrvTS%2BNz2OMcw0k&X-Amz-Signature=d12677ca3d34826969b0c6e695d3d14533db10d9163e5416d14fdecc5b6e67ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEZA2ZG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCIymhr9pLMnliTcoMZeNoP0GpicDm5Mc%2FaSz6ub636GAIhAMvMjlBqcYyo4Clr3RSSN4adyJjJkh7Rr%2FbWkWwjlbHgKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKrHTOg9xkbcAnE8Yq3ANpTOAB%2FqJRB3KzAPELqE8EwsK6iTLMa92XtdqPUxWfGX56xKZeM5qZG4%2B5aYQ344vgXvU5a97iDOzyFcUlTcza4DP91U%2FdB%2BjGzuvUhijWVEGuz4wcPNlRcTafsablKn9tbC0D31YFpOQRRSh0CWTSvMj9zz8d9n3LXJu6japZTHyIhoKQhvqFXkTsVrIYq0JcLSyDhNPPTL1hx1oBW8MA3kldd5ONZlinW6swCNtlPhMfew%2FkJul2valxsfC1wanqrqtfDkXoGf51QlTHKfKNgnllW6ONKc7sPSuScaumBGc3apsOgg%2B34A0vFX2k4RFbAGp2R9UDhinz1pMKZZMBpEIQrWIf7ecP3gwLizQml9FgzJV9ixVVaYuWoCVqsfp15NVLTOUJFtCo4X5nkhm0zewSbYPtoOd9Ty0IZmejn%2B7DVi22Lo%2BuRp9VPVlFqHD8BkQHdyPlLe%2ByllYZfd1%2FKvT2Q%2FOLuTt6%2FvcuhV4M870P5tXDwS4UW4LFALm3gDLY50MRdIsmKLuTNp7pY17iMkP6Ll%2FNDkXPCM6TyJu9o8TvwFOhoLLZULEPylb5JJ6S8gSerWldNvl8er917EkKjRXwv21dokHnqmA1BzkNlQ4MumtaNlY41ASyiDCp5NPABjqkARQ0X0TB%2BgRrT3P7OvrRxT%2BUooh8rA4neGCsQzpSTcX6TbWgPgEBOfwQkzFFwodRLg%2BFyATJV940FgJbOQc8gn%2BNaKFcF5gyC9zRYEf0pFEyJyM3qVdZaMFWXH%2Bp%2Bg8jEEzOAQoga7mqZTSf02ccXYEeglAKapvU5f60JiW%2BQmNXZCCbkRsUzjHfDuQyk2Iq7IYhxiPZSWo1EjrvTS%2BNz2OMcw0k&X-Amz-Signature=f9448e3db04452212ca2955ab542440e59301ae09300768249a54e89f720d916&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
