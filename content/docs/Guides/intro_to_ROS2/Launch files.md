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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFED76LZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGO9Pw3NC4O%2B19Cx4Jg7GqwZrURXgDBQL%2BNv5RqSc0BAAiEAlG9aB2ovqD2GAXg8GKexk00jmhVipJjPTDD1vG406yUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFN3dO8fXce65BdBCrcAxHdHBFaavPGT5D04I0MJmHI6Op7z4q1%2BDizLI0qw97SNjNR%2FchheZrfIU0bRgcZfCHqMBJHkxW5ZUtZvQTKsBxYG4BkE0j3%2BWPOt%2BJ5IgHLAhSfxwgpSWw1AXSC0xhBofaRP89YzKD5dROC3XtfWmFTaHTNQY9xazxdxXc2qWxyTJ9Z5TrdjrURB%2FEIXdHzhaabxjO3s35035a6BU1ScIis1bKDeYtA6T6y8%2BukMl%2BmYNm8F%2BcKTGLw68Ve3hn9cPEY2wiyvrTzf38QHINM7ieQr7JwrJv19gWeUWL80SO5fhjKjFfzwCdYS4QwTQd%2FiOVA%2BlsaOLvjNX%2FvXqFfMsuF3tktcSdFuOZC0pJpfSDA1lbiaIQFnLUosY8Zg6liCFBoKvLfEtoRF7SxXzjLa5u%2BpZKpHCJtRwUcP1xK%2FmkT%2FWSUnAxKrXjbeCK98UY9aP9Wpq2VM6GNmOBc9phwlL3iWhBOevIODPJYJzsZEzHmdDgS6K7x3EFOHzkeQKlHDdtu5hSQEGaeRkNW10ZVbK4lrZqVlk5MVNMKtsawFz2IbEEvDXTQ1wyhLAZ4Nbtj0siC5jXmr4yWvOXkv4jWiFn2pDg%2FZRMWgyEXNVY202pFo%2BBUajav0edrUWjHMMznpsIGOqUBMDg6otM91%2BurdhJW5rE03oeUGldoFaGMYVqdyFHG0TveQy%2B0JCgrfVWg%2Butj5IHTldSdRC6jQXJY9%2BrP%2FFzL0m81dMkHb3h%2BqazOnZqwxetxzQlQDhmi35f%2B7cyGcrDPxQw4rNf%2F2jRCwAxwgT54PAJ%2Fxi%2F01Yel9QqNrIOY1FHucFWTmoxn5bVucBw4K9NAcimIa2owUSnzE0YlDOLlkCfDCMm2&X-Amz-Signature=7000084d2f5b1943534cd9022d26029aac5452a10eb9ed9d6fed142063346a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFED76LZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGO9Pw3NC4O%2B19Cx4Jg7GqwZrURXgDBQL%2BNv5RqSc0BAAiEAlG9aB2ovqD2GAXg8GKexk00jmhVipJjPTDD1vG406yUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFN3dO8fXce65BdBCrcAxHdHBFaavPGT5D04I0MJmHI6Op7z4q1%2BDizLI0qw97SNjNR%2FchheZrfIU0bRgcZfCHqMBJHkxW5ZUtZvQTKsBxYG4BkE0j3%2BWPOt%2BJ5IgHLAhSfxwgpSWw1AXSC0xhBofaRP89YzKD5dROC3XtfWmFTaHTNQY9xazxdxXc2qWxyTJ9Z5TrdjrURB%2FEIXdHzhaabxjO3s35035a6BU1ScIis1bKDeYtA6T6y8%2BukMl%2BmYNm8F%2BcKTGLw68Ve3hn9cPEY2wiyvrTzf38QHINM7ieQr7JwrJv19gWeUWL80SO5fhjKjFfzwCdYS4QwTQd%2FiOVA%2BlsaOLvjNX%2FvXqFfMsuF3tktcSdFuOZC0pJpfSDA1lbiaIQFnLUosY8Zg6liCFBoKvLfEtoRF7SxXzjLa5u%2BpZKpHCJtRwUcP1xK%2FmkT%2FWSUnAxKrXjbeCK98UY9aP9Wpq2VM6GNmOBc9phwlL3iWhBOevIODPJYJzsZEzHmdDgS6K7x3EFOHzkeQKlHDdtu5hSQEGaeRkNW10ZVbK4lrZqVlk5MVNMKtsawFz2IbEEvDXTQ1wyhLAZ4Nbtj0siC5jXmr4yWvOXkv4jWiFn2pDg%2FZRMWgyEXNVY202pFo%2BBUajav0edrUWjHMMznpsIGOqUBMDg6otM91%2BurdhJW5rE03oeUGldoFaGMYVqdyFHG0TveQy%2B0JCgrfVWg%2Butj5IHTldSdRC6jQXJY9%2BrP%2FFzL0m81dMkHb3h%2BqazOnZqwxetxzQlQDhmi35f%2B7cyGcrDPxQw4rNf%2F2jRCwAxwgT54PAJ%2Fxi%2F01Yel9QqNrIOY1FHucFWTmoxn5bVucBw4K9NAcimIa2owUSnzE0YlDOLlkCfDCMm2&X-Amz-Signature=8f3b83301b7d498a1c56eeffc958893ed03680c422050d6ef35dd182cc6b6200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFED76LZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGO9Pw3NC4O%2B19Cx4Jg7GqwZrURXgDBQL%2BNv5RqSc0BAAiEAlG9aB2ovqD2GAXg8GKexk00jmhVipJjPTDD1vG406yUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFN3dO8fXce65BdBCrcAxHdHBFaavPGT5D04I0MJmHI6Op7z4q1%2BDizLI0qw97SNjNR%2FchheZrfIU0bRgcZfCHqMBJHkxW5ZUtZvQTKsBxYG4BkE0j3%2BWPOt%2BJ5IgHLAhSfxwgpSWw1AXSC0xhBofaRP89YzKD5dROC3XtfWmFTaHTNQY9xazxdxXc2qWxyTJ9Z5TrdjrURB%2FEIXdHzhaabxjO3s35035a6BU1ScIis1bKDeYtA6T6y8%2BukMl%2BmYNm8F%2BcKTGLw68Ve3hn9cPEY2wiyvrTzf38QHINM7ieQr7JwrJv19gWeUWL80SO5fhjKjFfzwCdYS4QwTQd%2FiOVA%2BlsaOLvjNX%2FvXqFfMsuF3tktcSdFuOZC0pJpfSDA1lbiaIQFnLUosY8Zg6liCFBoKvLfEtoRF7SxXzjLa5u%2BpZKpHCJtRwUcP1xK%2FmkT%2FWSUnAxKrXjbeCK98UY9aP9Wpq2VM6GNmOBc9phwlL3iWhBOevIODPJYJzsZEzHmdDgS6K7x3EFOHzkeQKlHDdtu5hSQEGaeRkNW10ZVbK4lrZqVlk5MVNMKtsawFz2IbEEvDXTQ1wyhLAZ4Nbtj0siC5jXmr4yWvOXkv4jWiFn2pDg%2FZRMWgyEXNVY202pFo%2BBUajav0edrUWjHMMznpsIGOqUBMDg6otM91%2BurdhJW5rE03oeUGldoFaGMYVqdyFHG0TveQy%2B0JCgrfVWg%2Butj5IHTldSdRC6jQXJY9%2BrP%2FFzL0m81dMkHb3h%2BqazOnZqwxetxzQlQDhmi35f%2B7cyGcrDPxQw4rNf%2F2jRCwAxwgT54PAJ%2Fxi%2F01Yel9QqNrIOY1FHucFWTmoxn5bVucBw4K9NAcimIa2owUSnzE0YlDOLlkCfDCMm2&X-Amz-Signature=0b51a39a067cb3162e58098e7373ea78dfd32fbb58e4f5bc7713a5a79b0dcb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
