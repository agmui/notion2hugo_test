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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36IDDRA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG33MvGTn5pL8%2F5LIqmeO5PAOWkWI87s3WfaTpWC1ynAIhAMrDxrRmgYkbrci2KG%2F%2FDF88GbED3uNDNJHo8UR3zVk3Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwTky2o4L2f4Vp9BiYq3AObXFO%2FVLal8o9ORmf21xBPULGVk9bmMZbvs%2BIqNJTBNMLUsZ0IA1KVb5oPqHl%2FATWu4C8JcZmNdbjVxwaeCUZIu7GF5EuqL14zp60YHhu8%2BNzrSnE%2BiHlIb88u%2F7NY2uxK5%2Bck09FBnKXGMLFO0Z2Kub4hqSCPG30RX5wDXrGH2qjupG5KVRpwjeH9sZ52YuP1WgTo4j%2BUIcunSDM3Yf6ff135Ezoq87l1D46tHs8UAn%2FVBNdfNX4BKc2bIGqgdMq2G%2Fq4kbhf0Kep5MiBeycLaAu62ueYj4RWF%2F0x9ivUiYxdQ5u6ANJsiXevrcsL03dsp3bTg1lvIW1RoljO%2FceYLSw7cKt%2FuQmyJztmuSjZA0gx7Iye%2FdeKwZ54qkUzAulVfBduUwJ2iBLl%2BNF0ZIyIAO2noi5DxODIm9yC6sU2YRh5aaDZAxGVJlpfEufViiebtcY1LX9Ntz0dF8kRZnwiGIo6zWpoJNUo%2FcmYfGAWD5GIc0VoES9n1vNwQow7oUqtKZwT44Spk192%2BADL6Bq3Vptu5T2YOetD7ukbI4uwkXKZoLr8YE2hKtbEoNVUjkj9QzEC2BFlo7lFUk4AQ2R0%2FaEFMHKa74IJm%2FF0XxbAhOrbjlEBRy4hkfIc1zCh4u%2B9BjqkAY0G9XIRXU7qgyB206e%2BHgxsZtJ4ZZARGw75Beev3lg86UOG6vvQuGn%2FXDTMZXS%2B%2BvgLhY4YaOAKMd7gxZwx8%2FsHfuasGihp9MC0OC5vMM8461FHRkPo6PJrCqs2RI6n%2F31IWCYlccfT8XjZnocmMOv0Prc1hViXrJC8UwSIVO5ooYNGuxP6u9JP%2F9lYSldH0SFI1d6nzpjrRC5IWEWH76QrPVyd&X-Amz-Signature=944f2e9cae39aeb806ef749b77d9a7ce497c2a3b43480586fd07397cf0f96511&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36IDDRA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG33MvGTn5pL8%2F5LIqmeO5PAOWkWI87s3WfaTpWC1ynAIhAMrDxrRmgYkbrci2KG%2F%2FDF88GbED3uNDNJHo8UR3zVk3Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwTky2o4L2f4Vp9BiYq3AObXFO%2FVLal8o9ORmf21xBPULGVk9bmMZbvs%2BIqNJTBNMLUsZ0IA1KVb5oPqHl%2FATWu4C8JcZmNdbjVxwaeCUZIu7GF5EuqL14zp60YHhu8%2BNzrSnE%2BiHlIb88u%2F7NY2uxK5%2Bck09FBnKXGMLFO0Z2Kub4hqSCPG30RX5wDXrGH2qjupG5KVRpwjeH9sZ52YuP1WgTo4j%2BUIcunSDM3Yf6ff135Ezoq87l1D46tHs8UAn%2FVBNdfNX4BKc2bIGqgdMq2G%2Fq4kbhf0Kep5MiBeycLaAu62ueYj4RWF%2F0x9ivUiYxdQ5u6ANJsiXevrcsL03dsp3bTg1lvIW1RoljO%2FceYLSw7cKt%2FuQmyJztmuSjZA0gx7Iye%2FdeKwZ54qkUzAulVfBduUwJ2iBLl%2BNF0ZIyIAO2noi5DxODIm9yC6sU2YRh5aaDZAxGVJlpfEufViiebtcY1LX9Ntz0dF8kRZnwiGIo6zWpoJNUo%2FcmYfGAWD5GIc0VoES9n1vNwQow7oUqtKZwT44Spk192%2BADL6Bq3Vptu5T2YOetD7ukbI4uwkXKZoLr8YE2hKtbEoNVUjkj9QzEC2BFlo7lFUk4AQ2R0%2FaEFMHKa74IJm%2FF0XxbAhOrbjlEBRy4hkfIc1zCh4u%2B9BjqkAY0G9XIRXU7qgyB206e%2BHgxsZtJ4ZZARGw75Beev3lg86UOG6vvQuGn%2FXDTMZXS%2B%2BvgLhY4YaOAKMd7gxZwx8%2FsHfuasGihp9MC0OC5vMM8461FHRkPo6PJrCqs2RI6n%2F31IWCYlccfT8XjZnocmMOv0Prc1hViXrJC8UwSIVO5ooYNGuxP6u9JP%2F9lYSldH0SFI1d6nzpjrRC5IWEWH76QrPVyd&X-Amz-Signature=37f84f771153e1fea09f917c772f10b07f0e0e779dac0cb6f817087168a6bd76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36IDDRA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG33MvGTn5pL8%2F5LIqmeO5PAOWkWI87s3WfaTpWC1ynAIhAMrDxrRmgYkbrci2KG%2F%2FDF88GbED3uNDNJHo8UR3zVk3Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwTky2o4L2f4Vp9BiYq3AObXFO%2FVLal8o9ORmf21xBPULGVk9bmMZbvs%2BIqNJTBNMLUsZ0IA1KVb5oPqHl%2FATWu4C8JcZmNdbjVxwaeCUZIu7GF5EuqL14zp60YHhu8%2BNzrSnE%2BiHlIb88u%2F7NY2uxK5%2Bck09FBnKXGMLFO0Z2Kub4hqSCPG30RX5wDXrGH2qjupG5KVRpwjeH9sZ52YuP1WgTo4j%2BUIcunSDM3Yf6ff135Ezoq87l1D46tHs8UAn%2FVBNdfNX4BKc2bIGqgdMq2G%2Fq4kbhf0Kep5MiBeycLaAu62ueYj4RWF%2F0x9ivUiYxdQ5u6ANJsiXevrcsL03dsp3bTg1lvIW1RoljO%2FceYLSw7cKt%2FuQmyJztmuSjZA0gx7Iye%2FdeKwZ54qkUzAulVfBduUwJ2iBLl%2BNF0ZIyIAO2noi5DxODIm9yC6sU2YRh5aaDZAxGVJlpfEufViiebtcY1LX9Ntz0dF8kRZnwiGIo6zWpoJNUo%2FcmYfGAWD5GIc0VoES9n1vNwQow7oUqtKZwT44Spk192%2BADL6Bq3Vptu5T2YOetD7ukbI4uwkXKZoLr8YE2hKtbEoNVUjkj9QzEC2BFlo7lFUk4AQ2R0%2FaEFMHKa74IJm%2FF0XxbAhOrbjlEBRy4hkfIc1zCh4u%2B9BjqkAY0G9XIRXU7qgyB206e%2BHgxsZtJ4ZZARGw75Beev3lg86UOG6vvQuGn%2FXDTMZXS%2B%2BvgLhY4YaOAKMd7gxZwx8%2FsHfuasGihp9MC0OC5vMM8461FHRkPo6PJrCqs2RI6n%2F31IWCYlccfT8XjZnocmMOv0Prc1hViXrJC8UwSIVO5ooYNGuxP6u9JP%2F9lYSldH0SFI1d6nzpjrRC5IWEWH76QrPVyd&X-Amz-Signature=06796d841259a4cbe8f39b83f3f956a7aeac7374fa3803e26b51015974e78d01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
