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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663II67BRW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMAJcvxXUw9pE5%2BwhJMFgH78ZODa1JAy5D1J0jPecdjgIhAL3l0qQZ0bUtrbm7ZpZIkGzPDyKt09YcsTRh57HYv5iyKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxcSRN2UvqVGNs8Qq3APDrMNDDBndn9abbxeIzeLIzPbadUP6SRi9I9Cv3yVZn9du2tiqqZXoxYgwSfcjpm6IMuCzf1fo3Uo%2FHuvPygscEYbiU2caKyc6jK%2BW8Pqf%2Foe4T9%2BqgSYSo%2FdBAvIv8rqKNaHMhoJPPGBoy%2FsET5sif6NdwA1NmAV6KFS6dWT3FeVs%2BM59bnzn01vlTsPgZoPZDFMw1Pj1%2FxguZznwQLmBNqqzXTctX5d1lBQxS14QuOvUrrng55gjrEKuPS5AgepM8d9hKBb1dYwGj093aGDTIDK4oIm4RbWQB0ZtZ7ZA6wkV0TDvy3%2F7zTXrOcgG%2FRpoicfNVF1j8J0qxNoJi7ujLLM7kCqjvo6%2F3Xvr0JJCeabaHpmgSO0pFWj%2FIpddhf3JjsZrKyJ0l8ySbsN1YmuElHso39apiNUXcBBWyttp13%2BmTEZmpECxMdJqKEgoDmoD3ykHU90eOR7qsbJWrTntDVZcAM08m0%2BNupFFfKUng6OqOw23%2FVMp6R4ghH86pcsZTZPKhsTJCo9Gfkv4nxpYxfcv74W1Y3GQotOVTbNArqu0CSjIxbNcHV%2BIqx8dXT34Fy2hicQ7WcGF1XihjR3sa99u8kPeGs%2BWAEkhkKrX9QoeMPx1A88RV9W6JjCcsLK9BjqkAXXma5MHksHXsk%2BMl5CVhPO6MD6UlHD7Mxg3FgJgix3fyGbQizfkV1cFU7d8z8KxBnfVDcTVUokP5oBtKo%2FO1n172wtjjXuI1jUmyTWMKwktWypJGg8nRRML%2BjhRiYZMtjokJJxF6davmDPsNU6mCIYjIC3tWkifs1J1vn36h%2F0rMarydKhqf45SBHI%2BSs2rJ8hm0pQxNSy4NubB%2FJGc1S7gs1gS&X-Amz-Signature=498170f68d29a39e62f95be733f9bf0a202dd73493e3a002b611dada5566dfbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663II67BRW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMAJcvxXUw9pE5%2BwhJMFgH78ZODa1JAy5D1J0jPecdjgIhAL3l0qQZ0bUtrbm7ZpZIkGzPDyKt09YcsTRh57HYv5iyKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxcSRN2UvqVGNs8Qq3APDrMNDDBndn9abbxeIzeLIzPbadUP6SRi9I9Cv3yVZn9du2tiqqZXoxYgwSfcjpm6IMuCzf1fo3Uo%2FHuvPygscEYbiU2caKyc6jK%2BW8Pqf%2Foe4T9%2BqgSYSo%2FdBAvIv8rqKNaHMhoJPPGBoy%2FsET5sif6NdwA1NmAV6KFS6dWT3FeVs%2BM59bnzn01vlTsPgZoPZDFMw1Pj1%2FxguZznwQLmBNqqzXTctX5d1lBQxS14QuOvUrrng55gjrEKuPS5AgepM8d9hKBb1dYwGj093aGDTIDK4oIm4RbWQB0ZtZ7ZA6wkV0TDvy3%2F7zTXrOcgG%2FRpoicfNVF1j8J0qxNoJi7ujLLM7kCqjvo6%2F3Xvr0JJCeabaHpmgSO0pFWj%2FIpddhf3JjsZrKyJ0l8ySbsN1YmuElHso39apiNUXcBBWyttp13%2BmTEZmpECxMdJqKEgoDmoD3ykHU90eOR7qsbJWrTntDVZcAM08m0%2BNupFFfKUng6OqOw23%2FVMp6R4ghH86pcsZTZPKhsTJCo9Gfkv4nxpYxfcv74W1Y3GQotOVTbNArqu0CSjIxbNcHV%2BIqx8dXT34Fy2hicQ7WcGF1XihjR3sa99u8kPeGs%2BWAEkhkKrX9QoeMPx1A88RV9W6JjCcsLK9BjqkAXXma5MHksHXsk%2BMl5CVhPO6MD6UlHD7Mxg3FgJgix3fyGbQizfkV1cFU7d8z8KxBnfVDcTVUokP5oBtKo%2FO1n172wtjjXuI1jUmyTWMKwktWypJGg8nRRML%2BjhRiYZMtjokJJxF6davmDPsNU6mCIYjIC3tWkifs1J1vn36h%2F0rMarydKhqf45SBHI%2BSs2rJ8hm0pQxNSy4NubB%2FJGc1S7gs1gS&X-Amz-Signature=a567565d0339bde0730b2cd4940266deaac6f33c887e38d81d4de155ab7218ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663II67BRW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMAJcvxXUw9pE5%2BwhJMFgH78ZODa1JAy5D1J0jPecdjgIhAL3l0qQZ0bUtrbm7ZpZIkGzPDyKt09YcsTRh57HYv5iyKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxcSRN2UvqVGNs8Qq3APDrMNDDBndn9abbxeIzeLIzPbadUP6SRi9I9Cv3yVZn9du2tiqqZXoxYgwSfcjpm6IMuCzf1fo3Uo%2FHuvPygscEYbiU2caKyc6jK%2BW8Pqf%2Foe4T9%2BqgSYSo%2FdBAvIv8rqKNaHMhoJPPGBoy%2FsET5sif6NdwA1NmAV6KFS6dWT3FeVs%2BM59bnzn01vlTsPgZoPZDFMw1Pj1%2FxguZznwQLmBNqqzXTctX5d1lBQxS14QuOvUrrng55gjrEKuPS5AgepM8d9hKBb1dYwGj093aGDTIDK4oIm4RbWQB0ZtZ7ZA6wkV0TDvy3%2F7zTXrOcgG%2FRpoicfNVF1j8J0qxNoJi7ujLLM7kCqjvo6%2F3Xvr0JJCeabaHpmgSO0pFWj%2FIpddhf3JjsZrKyJ0l8ySbsN1YmuElHso39apiNUXcBBWyttp13%2BmTEZmpECxMdJqKEgoDmoD3ykHU90eOR7qsbJWrTntDVZcAM08m0%2BNupFFfKUng6OqOw23%2FVMp6R4ghH86pcsZTZPKhsTJCo9Gfkv4nxpYxfcv74W1Y3GQotOVTbNArqu0CSjIxbNcHV%2BIqx8dXT34Fy2hicQ7WcGF1XihjR3sa99u8kPeGs%2BWAEkhkKrX9QoeMPx1A88RV9W6JjCcsLK9BjqkAXXma5MHksHXsk%2BMl5CVhPO6MD6UlHD7Mxg3FgJgix3fyGbQizfkV1cFU7d8z8KxBnfVDcTVUokP5oBtKo%2FO1n172wtjjXuI1jUmyTWMKwktWypJGg8nRRML%2BjhRiYZMtjokJJxF6davmDPsNU6mCIYjIC3tWkifs1J1vn36h%2F0rMarydKhqf45SBHI%2BSs2rJ8hm0pQxNSy4NubB%2FJGc1S7gs1gS&X-Amz-Signature=e0d2cc5180f1a6324f02a2b2129c4586b15e7de32bea43994ca94517471daaa4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
