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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDP6OUT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBwOd8MkIGN4Xdn%2FpR7RGrrqj%2FNrinJ4l0n8NrsQTfGPAiAWaHFWDer58%2F3%2Bh8aJ2%2B4TQDp%2BiA3zvqvqZtgSC5YvXSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54lZN%2FSMqXTtilxhKtwDvV5x7TimTbrpHy7DPsXsBRUokWjcyNGtfdX62wLZgc7R257Vu6LYlf9IDIG3YCrZbA3JxGjTonDs8S6wAQtYnOhO%2BU851E%2FW3b48THqWt3Dq7OOB28nMAuE2n6QoaXpVTSt0y4xbPTtxLtgt%2F5JM1By2cVTpwSUCCDQyrdzktJbRblQasRcztOCzDpSd03H31EH%2BVO4Eaf93yOQBUpoLU510at3FghZfmgTWgG8vdEaf0WzZaZQ7WpUEwDCcLw0YfhagXzYD8%2FCqE9muf4ldyCwCE5ewH4YX0wovVtfTPOZw%2Fd0xAGm8XX16SSU3m%2FLVyyZn9bE3LJ6cwEQdSG9vv2%2BHuRb3JCcXrnTDXJqb7l30R%2Bvtj0xKO2i8hRRXs%2FflnJSNkKNlUu%2FstgJ%2Bdxzr58Ovk3F2teBaHkEwkrK%2BXuzW%2F4MGjDqjfJxws0Q8xWBWCzNusb2iMrhJoJQ%2BGkA9IBHAhWZWcaj4HxugdG1Nr8VwrW%2BW56xK%2BAsbNhPWlXT2UD1HMcQCw%2Fxf3tCaZq4dSMUCvjHohV%2Bqh78DdD7dvrxayqA41EzWsJzMBUO45FPyV6poWZViVH%2FMLjSphmJF7t0y%2BosuZzWlW3Y0TAHNDvh2cm46GOQVEpt8Krows6vPwAY6pgECaWR8XpwhlJCEXazpn4ULzEMiCWN8DK292PjMciXStghrxufo%2F3c7MP%2FZ16FXsCqC85mv63C3jbyTaeObw2Gqb1AM%2Fg9S4KV5xkz7cF8GUjBEUcfQ3VHFGDJ09re4WFjls%2FVzEYlTYUTs8d80WHR4Juxz5sWNGDrrjyqhqu7yVisYzGZG0sb5u9z250ZCyAmBn7q9GqXzH8kXh2Z%2B1VRB3oaa5bAo&X-Amz-Signature=4ef08fb6f2e53e4e16d0f861a21271557b5b20c5313796d71699eac62eddf131&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDP6OUT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBwOd8MkIGN4Xdn%2FpR7RGrrqj%2FNrinJ4l0n8NrsQTfGPAiAWaHFWDer58%2F3%2Bh8aJ2%2B4TQDp%2BiA3zvqvqZtgSC5YvXSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54lZN%2FSMqXTtilxhKtwDvV5x7TimTbrpHy7DPsXsBRUokWjcyNGtfdX62wLZgc7R257Vu6LYlf9IDIG3YCrZbA3JxGjTonDs8S6wAQtYnOhO%2BU851E%2FW3b48THqWt3Dq7OOB28nMAuE2n6QoaXpVTSt0y4xbPTtxLtgt%2F5JM1By2cVTpwSUCCDQyrdzktJbRblQasRcztOCzDpSd03H31EH%2BVO4Eaf93yOQBUpoLU510at3FghZfmgTWgG8vdEaf0WzZaZQ7WpUEwDCcLw0YfhagXzYD8%2FCqE9muf4ldyCwCE5ewH4YX0wovVtfTPOZw%2Fd0xAGm8XX16SSU3m%2FLVyyZn9bE3LJ6cwEQdSG9vv2%2BHuRb3JCcXrnTDXJqb7l30R%2Bvtj0xKO2i8hRRXs%2FflnJSNkKNlUu%2FstgJ%2Bdxzr58Ovk3F2teBaHkEwkrK%2BXuzW%2F4MGjDqjfJxws0Q8xWBWCzNusb2iMrhJoJQ%2BGkA9IBHAhWZWcaj4HxugdG1Nr8VwrW%2BW56xK%2BAsbNhPWlXT2UD1HMcQCw%2Fxf3tCaZq4dSMUCvjHohV%2Bqh78DdD7dvrxayqA41EzWsJzMBUO45FPyV6poWZViVH%2FMLjSphmJF7t0y%2BosuZzWlW3Y0TAHNDvh2cm46GOQVEpt8Krows6vPwAY6pgECaWR8XpwhlJCEXazpn4ULzEMiCWN8DK292PjMciXStghrxufo%2F3c7MP%2FZ16FXsCqC85mv63C3jbyTaeObw2Gqb1AM%2Fg9S4KV5xkz7cF8GUjBEUcfQ3VHFGDJ09re4WFjls%2FVzEYlTYUTs8d80WHR4Juxz5sWNGDrrjyqhqu7yVisYzGZG0sb5u9z250ZCyAmBn7q9GqXzH8kXh2Z%2B1VRB3oaa5bAo&X-Amz-Signature=77df458fdf878bb35219027287a6a35448c9f0b8ae0fb31d90c3b2bad9c6181f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDP6OUT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBwOd8MkIGN4Xdn%2FpR7RGrrqj%2FNrinJ4l0n8NrsQTfGPAiAWaHFWDer58%2F3%2Bh8aJ2%2B4TQDp%2BiA3zvqvqZtgSC5YvXSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM54lZN%2FSMqXTtilxhKtwDvV5x7TimTbrpHy7DPsXsBRUokWjcyNGtfdX62wLZgc7R257Vu6LYlf9IDIG3YCrZbA3JxGjTonDs8S6wAQtYnOhO%2BU851E%2FW3b48THqWt3Dq7OOB28nMAuE2n6QoaXpVTSt0y4xbPTtxLtgt%2F5JM1By2cVTpwSUCCDQyrdzktJbRblQasRcztOCzDpSd03H31EH%2BVO4Eaf93yOQBUpoLU510at3FghZfmgTWgG8vdEaf0WzZaZQ7WpUEwDCcLw0YfhagXzYD8%2FCqE9muf4ldyCwCE5ewH4YX0wovVtfTPOZw%2Fd0xAGm8XX16SSU3m%2FLVyyZn9bE3LJ6cwEQdSG9vv2%2BHuRb3JCcXrnTDXJqb7l30R%2Bvtj0xKO2i8hRRXs%2FflnJSNkKNlUu%2FstgJ%2Bdxzr58Ovk3F2teBaHkEwkrK%2BXuzW%2F4MGjDqjfJxws0Q8xWBWCzNusb2iMrhJoJQ%2BGkA9IBHAhWZWcaj4HxugdG1Nr8VwrW%2BW56xK%2BAsbNhPWlXT2UD1HMcQCw%2Fxf3tCaZq4dSMUCvjHohV%2Bqh78DdD7dvrxayqA41EzWsJzMBUO45FPyV6poWZViVH%2FMLjSphmJF7t0y%2BosuZzWlW3Y0TAHNDvh2cm46GOQVEpt8Krows6vPwAY6pgECaWR8XpwhlJCEXazpn4ULzEMiCWN8DK292PjMciXStghrxufo%2F3c7MP%2FZ16FXsCqC85mv63C3jbyTaeObw2Gqb1AM%2Fg9S4KV5xkz7cF8GUjBEUcfQ3VHFGDJ09re4WFjls%2FVzEYlTYUTs8d80WHR4Juxz5sWNGDrrjyqhqu7yVisYzGZG0sb5u9z250ZCyAmBn7q9GqXzH8kXh2Z%2B1VRB3oaa5bAo&X-Amz-Signature=afc950a19bcfc726f4b4d489b335c919efd98d11b1f435f7c4ee9d8b49b1dbd9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
