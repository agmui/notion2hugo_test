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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636I7EZ7S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvgufc3sbq%2FUgHEFCWqBvti6KrXvnQT3lWbLPVH%2FOPAiEAgZalfUz1h1FT34bYn6szO%2FqHaknYo18Qd3faxMboQHUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4WYySAlf4a86s61yrcA5%2BqA7%2F%2Fa%2FM0iAfnJakckGVHY%2Fh%2B2e9pM4QwnsgabLX9xtbNOlQP2HPBGj5W3YraAtoB%2BnA4noEULJFhBEsMD49h9ZtnZ2UpIiIDNK0uP%2FCGtqg0rEbk2jLlSxFPWM5ECNcQZaMT5AOHB%2FGq%2FOi1bVxI7nsnFf8d%2Bz5PpsBn0eI4l9VYmeyNJc0J%2FojsQyECv5LAunKBcwNpYXU%2FVIoMaQ0t0AvOVetxdwifHl0IsrWx0eKcfkMMjkTuZd8B3fmKkLDym4eMW5k4mGsPx6QL%2BsrQSlKKoM8%2FW2QPJD4641fjNfN2F78LdQyG6fXr%2Fl0Ssav9kFx%2FXtWipqTYQgX%2Bg3VWWtSqtSIsATm8oWUkB6KZoMZbh9mVE3frzGb2o2MC8mae%2BpJ3eR1pLWOXn7%2BhkPifGc4zsfwAv29VNSassoa1FD1HfSOYy84MQ%2B84ThCBf%2BXPBF10yrpn4EnwSdfUudpThw8oGFXqrYer3cQTaxMuaoMMdPYmU5agjbte2I%2B%2F9oozAbGLJfe4%2FWQr3HXcFznZTPjvYjwOiw3XOGgI5mssV9D6Tb4rqiWe0PYV%2BAHBiEl7vYLzsE2sFVHbLa%2BFxaw6TnO4Yhwl8LfrK9XaJg17YZtY8ICHSiSYh9WeMJin6MEGOqUBWzQaugF2JJ5vYuHgLnuvmifudVtruvXl5dklQeza20RSsfvHM%2Fdkb4XTdMu7D5kIXXODfgwpMCiaAG1XSFJN7o9lZ7gPnd0ETYRY2XvGo286Fp3tMXDnrnb135hiQIJe8KqrHGCRLbxrGKzPAA8KT85tQf16dHyLyImqDnpfnarQ4Ph1pwsaJou24dg4k6v1HahIjDb0Uscmeykny68dNxQTjtJU&X-Amz-Signature=ba046866b812ed77437a941d54da00156f8015818c1d62097dce12d5f291b8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636I7EZ7S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvgufc3sbq%2FUgHEFCWqBvti6KrXvnQT3lWbLPVH%2FOPAiEAgZalfUz1h1FT34bYn6szO%2FqHaknYo18Qd3faxMboQHUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4WYySAlf4a86s61yrcA5%2BqA7%2F%2Fa%2FM0iAfnJakckGVHY%2Fh%2B2e9pM4QwnsgabLX9xtbNOlQP2HPBGj5W3YraAtoB%2BnA4noEULJFhBEsMD49h9ZtnZ2UpIiIDNK0uP%2FCGtqg0rEbk2jLlSxFPWM5ECNcQZaMT5AOHB%2FGq%2FOi1bVxI7nsnFf8d%2Bz5PpsBn0eI4l9VYmeyNJc0J%2FojsQyECv5LAunKBcwNpYXU%2FVIoMaQ0t0AvOVetxdwifHl0IsrWx0eKcfkMMjkTuZd8B3fmKkLDym4eMW5k4mGsPx6QL%2BsrQSlKKoM8%2FW2QPJD4641fjNfN2F78LdQyG6fXr%2Fl0Ssav9kFx%2FXtWipqTYQgX%2Bg3VWWtSqtSIsATm8oWUkB6KZoMZbh9mVE3frzGb2o2MC8mae%2BpJ3eR1pLWOXn7%2BhkPifGc4zsfwAv29VNSassoa1FD1HfSOYy84MQ%2B84ThCBf%2BXPBF10yrpn4EnwSdfUudpThw8oGFXqrYer3cQTaxMuaoMMdPYmU5agjbte2I%2B%2F9oozAbGLJfe4%2FWQr3HXcFznZTPjvYjwOiw3XOGgI5mssV9D6Tb4rqiWe0PYV%2BAHBiEl7vYLzsE2sFVHbLa%2BFxaw6TnO4Yhwl8LfrK9XaJg17YZtY8ICHSiSYh9WeMJin6MEGOqUBWzQaugF2JJ5vYuHgLnuvmifudVtruvXl5dklQeza20RSsfvHM%2Fdkb4XTdMu7D5kIXXODfgwpMCiaAG1XSFJN7o9lZ7gPnd0ETYRY2XvGo286Fp3tMXDnrnb135hiQIJe8KqrHGCRLbxrGKzPAA8KT85tQf16dHyLyImqDnpfnarQ4Ph1pwsaJou24dg4k6v1HahIjDb0Uscmeykny68dNxQTjtJU&X-Amz-Signature=2248dafe244a45664639c13e0f07cce305297ae9a1fabcae9430ef1df9b3d935&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636I7EZ7S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvgufc3sbq%2FUgHEFCWqBvti6KrXvnQT3lWbLPVH%2FOPAiEAgZalfUz1h1FT34bYn6szO%2FqHaknYo18Qd3faxMboQHUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4WYySAlf4a86s61yrcA5%2BqA7%2F%2Fa%2FM0iAfnJakckGVHY%2Fh%2B2e9pM4QwnsgabLX9xtbNOlQP2HPBGj5W3YraAtoB%2BnA4noEULJFhBEsMD49h9ZtnZ2UpIiIDNK0uP%2FCGtqg0rEbk2jLlSxFPWM5ECNcQZaMT5AOHB%2FGq%2FOi1bVxI7nsnFf8d%2Bz5PpsBn0eI4l9VYmeyNJc0J%2FojsQyECv5LAunKBcwNpYXU%2FVIoMaQ0t0AvOVetxdwifHl0IsrWx0eKcfkMMjkTuZd8B3fmKkLDym4eMW5k4mGsPx6QL%2BsrQSlKKoM8%2FW2QPJD4641fjNfN2F78LdQyG6fXr%2Fl0Ssav9kFx%2FXtWipqTYQgX%2Bg3VWWtSqtSIsATm8oWUkB6KZoMZbh9mVE3frzGb2o2MC8mae%2BpJ3eR1pLWOXn7%2BhkPifGc4zsfwAv29VNSassoa1FD1HfSOYy84MQ%2B84ThCBf%2BXPBF10yrpn4EnwSdfUudpThw8oGFXqrYer3cQTaxMuaoMMdPYmU5agjbte2I%2B%2F9oozAbGLJfe4%2FWQr3HXcFznZTPjvYjwOiw3XOGgI5mssV9D6Tb4rqiWe0PYV%2BAHBiEl7vYLzsE2sFVHbLa%2BFxaw6TnO4Yhwl8LfrK9XaJg17YZtY8ICHSiSYh9WeMJin6MEGOqUBWzQaugF2JJ5vYuHgLnuvmifudVtruvXl5dklQeza20RSsfvHM%2Fdkb4XTdMu7D5kIXXODfgwpMCiaAG1XSFJN7o9lZ7gPnd0ETYRY2XvGo286Fp3tMXDnrnb135hiQIJe8KqrHGCRLbxrGKzPAA8KT85tQf16dHyLyImqDnpfnarQ4Ph1pwsaJou24dg4k6v1HahIjDb0Uscmeykny68dNxQTjtJU&X-Amz-Signature=5a9fc4fe1ba0e676b5a51de76b8369afffa1043da0c0cd541058080fe6bf6651&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
