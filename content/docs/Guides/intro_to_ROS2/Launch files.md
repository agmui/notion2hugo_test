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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMRTUWQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF9ZfCAbpq1lKxVHSeE2W2av8PFKltC%2BFPIO4810ZUcAiAlZ3ACWacQvlY%2B8XrxCMM9m051TLwdpKIZpTrPdGDYAiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmCz1yX8ziibijPCKtwDBtJxRmw2hIYwrhpoIJfXFOCUuFW3hLC3y6EoTrVWnWPzQuXy3zn6f7J8tKrw%2FfRvhj7iO2bGRnqIkHYvc74y0rOaD2Y3VBi121liHb2MY8wKXTjqLOx0BlPEv2oLIpA10pI9YbstuP7cBVrnygS%2FvSwdddQQ2FDNU88mcRwxPbOMFj63u7ZMNfjjXHkdBoKxi0nFU8ktgxl31K5gZhNXOwZHDunCeIPpga%2FwNNZfNKsDOs8Uci9TD8WivJMIZfB%2BFLQioK68l6sxJvNCZ0r2aE6OPUib66WltM096l2l2aVs8OzHlHv%2F866vqbG2Mts7bNm%2FlVtcSJH1I8Kpe11DdXK6BZd%2BG9SfXX39bJu0DsyPz4PLq02dcu2hJH3YYDw9gwrxIWqumxaOjgrz0dgBklh3HpatkJO0RDvrNzCyOwA3cMp1zVKRKJcBpsBEnpfCLfppCVDHzwQzJqXYu3ruDRi%2FYOK0vaCmmdq9JXAiw%2FyjYYm9u8d2S3gHTghGwby5A8wuSZIVyRNSW1%2Bmxm%2B6vDY5%2FkQMSnwBDu1yzyXFS8NbbS0JhTTZsoEX4JFotkWx%2FOXpOuUjjQYCukeIctFEX5Vo49KDqtxv3Pc80zn6Z%2Fzrw%2FkjCvMtD4K6suow9MTswwY6pgFdo20VLHRngvlQqMEjKWTt%2FqcDmrl9E4qylQTL9Td7N5Wi%2B8M6auj4j5rkBJR6RJ%2FSbWk78kjQcj%2BkHun%2B0ENQwkOtJiyku4mcgZfFBG3sTzg0C098UIDgI6d%2FeIe6x3ZwaUw%2BWJ5Q%2BOkLjJLh4u62A1sPTXygdk%2FdFtfT%2FmEH%2FarZze%2BLj47OQLUu%2BggSEkRANVLWrPckjVOYlR6ooX2k8X2di5yv&X-Amz-Signature=1827be5cea69367ed0c3c30433efc05f5ccc66e59be2acf75b7168b1621a6acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMRTUWQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF9ZfCAbpq1lKxVHSeE2W2av8PFKltC%2BFPIO4810ZUcAiAlZ3ACWacQvlY%2B8XrxCMM9m051TLwdpKIZpTrPdGDYAiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmCz1yX8ziibijPCKtwDBtJxRmw2hIYwrhpoIJfXFOCUuFW3hLC3y6EoTrVWnWPzQuXy3zn6f7J8tKrw%2FfRvhj7iO2bGRnqIkHYvc74y0rOaD2Y3VBi121liHb2MY8wKXTjqLOx0BlPEv2oLIpA10pI9YbstuP7cBVrnygS%2FvSwdddQQ2FDNU88mcRwxPbOMFj63u7ZMNfjjXHkdBoKxi0nFU8ktgxl31K5gZhNXOwZHDunCeIPpga%2FwNNZfNKsDOs8Uci9TD8WivJMIZfB%2BFLQioK68l6sxJvNCZ0r2aE6OPUib66WltM096l2l2aVs8OzHlHv%2F866vqbG2Mts7bNm%2FlVtcSJH1I8Kpe11DdXK6BZd%2BG9SfXX39bJu0DsyPz4PLq02dcu2hJH3YYDw9gwrxIWqumxaOjgrz0dgBklh3HpatkJO0RDvrNzCyOwA3cMp1zVKRKJcBpsBEnpfCLfppCVDHzwQzJqXYu3ruDRi%2FYOK0vaCmmdq9JXAiw%2FyjYYm9u8d2S3gHTghGwby5A8wuSZIVyRNSW1%2Bmxm%2B6vDY5%2FkQMSnwBDu1yzyXFS8NbbS0JhTTZsoEX4JFotkWx%2FOXpOuUjjQYCukeIctFEX5Vo49KDqtxv3Pc80zn6Z%2Fzrw%2FkjCvMtD4K6suow9MTswwY6pgFdo20VLHRngvlQqMEjKWTt%2FqcDmrl9E4qylQTL9Td7N5Wi%2B8M6auj4j5rkBJR6RJ%2FSbWk78kjQcj%2BkHun%2B0ENQwkOtJiyku4mcgZfFBG3sTzg0C098UIDgI6d%2FeIe6x3ZwaUw%2BWJ5Q%2BOkLjJLh4u62A1sPTXygdk%2FdFtfT%2FmEH%2FarZze%2BLj47OQLUu%2BggSEkRANVLWrPckjVOYlR6ooX2k8X2di5yv&X-Amz-Signature=f13a58a76131689cbd23ef2bf19215a3ddcaf3790d1c03fd4857e6e1921cff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMRTUWQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF9ZfCAbpq1lKxVHSeE2W2av8PFKltC%2BFPIO4810ZUcAiAlZ3ACWacQvlY%2B8XrxCMM9m051TLwdpKIZpTrPdGDYAiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwmCz1yX8ziibijPCKtwDBtJxRmw2hIYwrhpoIJfXFOCUuFW3hLC3y6EoTrVWnWPzQuXy3zn6f7J8tKrw%2FfRvhj7iO2bGRnqIkHYvc74y0rOaD2Y3VBi121liHb2MY8wKXTjqLOx0BlPEv2oLIpA10pI9YbstuP7cBVrnygS%2FvSwdddQQ2FDNU88mcRwxPbOMFj63u7ZMNfjjXHkdBoKxi0nFU8ktgxl31K5gZhNXOwZHDunCeIPpga%2FwNNZfNKsDOs8Uci9TD8WivJMIZfB%2BFLQioK68l6sxJvNCZ0r2aE6OPUib66WltM096l2l2aVs8OzHlHv%2F866vqbG2Mts7bNm%2FlVtcSJH1I8Kpe11DdXK6BZd%2BG9SfXX39bJu0DsyPz4PLq02dcu2hJH3YYDw9gwrxIWqumxaOjgrz0dgBklh3HpatkJO0RDvrNzCyOwA3cMp1zVKRKJcBpsBEnpfCLfppCVDHzwQzJqXYu3ruDRi%2FYOK0vaCmmdq9JXAiw%2FyjYYm9u8d2S3gHTghGwby5A8wuSZIVyRNSW1%2Bmxm%2B6vDY5%2FkQMSnwBDu1yzyXFS8NbbS0JhTTZsoEX4JFotkWx%2FOXpOuUjjQYCukeIctFEX5Vo49KDqtxv3Pc80zn6Z%2Fzrw%2FkjCvMtD4K6suow9MTswwY6pgFdo20VLHRngvlQqMEjKWTt%2FqcDmrl9E4qylQTL9Td7N5Wi%2B8M6auj4j5rkBJR6RJ%2FSbWk78kjQcj%2BkHun%2B0ENQwkOtJiyku4mcgZfFBG3sTzg0C098UIDgI6d%2FeIe6x3ZwaUw%2BWJ5Q%2BOkLjJLh4u62A1sPTXygdk%2FdFtfT%2FmEH%2FarZze%2BLj47OQLUu%2BggSEkRANVLWrPckjVOYlR6ooX2k8X2di5yv&X-Amz-Signature=ab4e2406504ba9137a08c563e74de2222f1eef1782add21494dea730162a88cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
