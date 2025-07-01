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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YLPCPG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqtycvAsmRKDacBPJ4cwi5H%2BXDGY7i1N4Zp09rc7wSuAiAkni8GvEe8vOumIaMKk%2BjR6QjQ11pZp12455ToFvAwXiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5V5DgxKh8ABgWDd9KtwDr45MlbBAOFTQ%2FoBiMZnkjSBNPYXIwZ%2FZWM%2FDkfHxLKHnRTXaFs6W61KUoalgFgIJFvY%2FUDD9tlPX5D8h4%2BlUQ0gDzPAx1mRLEmQf5yIMcwhBZUUseUh5iRefhJpT5a0M45uf2q7ckx392DT0khBnYCUALmvDIXRIvDGm7%2B5St13iIdlBWnKNCz9W%2BlInsvX5vLiLEgUVx%2Fc4E78B8DWsaAayFeHqmJC9HQzJ8DODlmp286tQW6XoMKqBiUVP1rYOUQCvGyAWoB8TzqORTM%2BsJSEYdI%2BdZytXj9AJnMDpV1AzalQiD69po45dCpJizl4%2Frsg6m9YSuQhA3rwgQohBGX5zdbzN2OyG04CCZ6MGlK%2BHxOF3yOCsnSfbGsgYcvaKy7V9%2FE%2FmlDUNCONp7n0Uqu6Q8tCDtwLh%2B9Hsvzfyu8c4TvWgZXXsLTcqoSsmPV%2ByAcsVsKDsSEX0S0blRr3a7Qa0pgXPRwhJOpwVRYvUj7so%2FJ9%2BtY6Kn0EvLDLhcBBLl0HUsBrEw1V3gm31rCxIgHBVdxJoPdFo1K3IE3sfMUjH4IoXKnspnSLaAL7gIVaihdv%2BqCUCpyRWOOZcXsQhxepudauZbd6rz%2BKMlZPj0vDRqULOh8OgPSGyJ3Aw2sCPwwY6pgF1VDwcrRSvK7VUCqbLU2QPacRQLD52xBzopi5MuMsIS1kOgOILYCF4%2FlqtmVRwGl4G6DfBQZQqu9W1bU%2FB40CVq7Jd90avzm7oIDbFLYecFauw7buQmAFm54s3keaLjPxCvB2Ag2mfaLAfwT%2B9H95%2FtMmRAV6bfQGm%2FaSJSYEaTWXRnhaHCsQygvhwTYd98PcUrDH2Dh9yM297ogCkAroJqTHbZ2e4&X-Amz-Signature=8dc3a0ac68a85d058471a916676b6abe70bf538b39f4154b0c5d39188e898a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YLPCPG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqtycvAsmRKDacBPJ4cwi5H%2BXDGY7i1N4Zp09rc7wSuAiAkni8GvEe8vOumIaMKk%2BjR6QjQ11pZp12455ToFvAwXiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5V5DgxKh8ABgWDd9KtwDr45MlbBAOFTQ%2FoBiMZnkjSBNPYXIwZ%2FZWM%2FDkfHxLKHnRTXaFs6W61KUoalgFgIJFvY%2FUDD9tlPX5D8h4%2BlUQ0gDzPAx1mRLEmQf5yIMcwhBZUUseUh5iRefhJpT5a0M45uf2q7ckx392DT0khBnYCUALmvDIXRIvDGm7%2B5St13iIdlBWnKNCz9W%2BlInsvX5vLiLEgUVx%2Fc4E78B8DWsaAayFeHqmJC9HQzJ8DODlmp286tQW6XoMKqBiUVP1rYOUQCvGyAWoB8TzqORTM%2BsJSEYdI%2BdZytXj9AJnMDpV1AzalQiD69po45dCpJizl4%2Frsg6m9YSuQhA3rwgQohBGX5zdbzN2OyG04CCZ6MGlK%2BHxOF3yOCsnSfbGsgYcvaKy7V9%2FE%2FmlDUNCONp7n0Uqu6Q8tCDtwLh%2B9Hsvzfyu8c4TvWgZXXsLTcqoSsmPV%2ByAcsVsKDsSEX0S0blRr3a7Qa0pgXPRwhJOpwVRYvUj7so%2FJ9%2BtY6Kn0EvLDLhcBBLl0HUsBrEw1V3gm31rCxIgHBVdxJoPdFo1K3IE3sfMUjH4IoXKnspnSLaAL7gIVaihdv%2BqCUCpyRWOOZcXsQhxepudauZbd6rz%2BKMlZPj0vDRqULOh8OgPSGyJ3Aw2sCPwwY6pgF1VDwcrRSvK7VUCqbLU2QPacRQLD52xBzopi5MuMsIS1kOgOILYCF4%2FlqtmVRwGl4G6DfBQZQqu9W1bU%2FB40CVq7Jd90avzm7oIDbFLYecFauw7buQmAFm54s3keaLjPxCvB2Ag2mfaLAfwT%2B9H95%2FtMmRAV6bfQGm%2FaSJSYEaTWXRnhaHCsQygvhwTYd98PcUrDH2Dh9yM297ogCkAroJqTHbZ2e4&X-Amz-Signature=58bd3a21be1461c66deea4f0765e2fb35a8d63ff716793b2e8bd8133278fed81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YLPCPG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqtycvAsmRKDacBPJ4cwi5H%2BXDGY7i1N4Zp09rc7wSuAiAkni8GvEe8vOumIaMKk%2BjR6QjQ11pZp12455ToFvAwXiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5V5DgxKh8ABgWDd9KtwDr45MlbBAOFTQ%2FoBiMZnkjSBNPYXIwZ%2FZWM%2FDkfHxLKHnRTXaFs6W61KUoalgFgIJFvY%2FUDD9tlPX5D8h4%2BlUQ0gDzPAx1mRLEmQf5yIMcwhBZUUseUh5iRefhJpT5a0M45uf2q7ckx392DT0khBnYCUALmvDIXRIvDGm7%2B5St13iIdlBWnKNCz9W%2BlInsvX5vLiLEgUVx%2Fc4E78B8DWsaAayFeHqmJC9HQzJ8DODlmp286tQW6XoMKqBiUVP1rYOUQCvGyAWoB8TzqORTM%2BsJSEYdI%2BdZytXj9AJnMDpV1AzalQiD69po45dCpJizl4%2Frsg6m9YSuQhA3rwgQohBGX5zdbzN2OyG04CCZ6MGlK%2BHxOF3yOCsnSfbGsgYcvaKy7V9%2FE%2FmlDUNCONp7n0Uqu6Q8tCDtwLh%2B9Hsvzfyu8c4TvWgZXXsLTcqoSsmPV%2ByAcsVsKDsSEX0S0blRr3a7Qa0pgXPRwhJOpwVRYvUj7so%2FJ9%2BtY6Kn0EvLDLhcBBLl0HUsBrEw1V3gm31rCxIgHBVdxJoPdFo1K3IE3sfMUjH4IoXKnspnSLaAL7gIVaihdv%2BqCUCpyRWOOZcXsQhxepudauZbd6rz%2BKMlZPj0vDRqULOh8OgPSGyJ3Aw2sCPwwY6pgF1VDwcrRSvK7VUCqbLU2QPacRQLD52xBzopi5MuMsIS1kOgOILYCF4%2FlqtmVRwGl4G6DfBQZQqu9W1bU%2FB40CVq7Jd90avzm7oIDbFLYecFauw7buQmAFm54s3keaLjPxCvB2Ag2mfaLAfwT%2B9H95%2FtMmRAV6bfQGm%2FaSJSYEaTWXRnhaHCsQygvhwTYd98PcUrDH2Dh9yM297ogCkAroJqTHbZ2e4&X-Amz-Signature=d9721c318c4550a441db28b6d3c6a8beecbe201bd88903b3d966813c47307395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
