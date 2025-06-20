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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEPS2W5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcq3nugonqrd7dKdwKj%2Bj%2BVLKXG%2Fb9eTZD2omuLAWLwIhALljx4cyD4KX5YhcA92tZtB%2FwgciruLSKOBDFqXXdZF3KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4NDrRy%2F2qxV%2BE0ssq3AMou56Y2U64zupyT55%2FEcGAtsnpxLVITwPbY8VhN1WacLULyqM5npsJ15HkkqE6lXWdSjM7SM4NX%2BsEuzG2HcKYUzhy9V1VZ4NcrjZ2yzGAkSfrAh9eZ5mnBWmUW87ct0ueLdQcYK5CJzXBE04m9a3oGxR1cEyUXaAolG8iH2UlkRdXSJQEckHQR3Ho7eg1C8s1Gaj1kzlIYtHMtD4mat2Iu%2FLQJFNZ4zkNDywAy5SNso6XBACU7Dc6zediNhfWZmQkAbAYPzxx2pHpfASzWhHqNtEsHpSsHBjLxEXYQpO1BO5Jg3K3oPSGNv21iI%2FsE3UCM5XWqj9Bx18Vyl185FhyPAlEHt%2B43ComRe6WZAXpU8TFFBMX6IG%2Bjxb5phUnlBhijtze9xFqxgNux6FS4gUrrkG9D3MxkZ1azrO4Q6CYgT9Tv49t0aRJBQHm6grLKPaw%2FaReX6Dn%2Ba9hQXrOP7Nb9Yu0o4nynoWt2BddBMtH2aJAisN9UIJUV4MgrujvvTLMX6rc23uUgMycbAdL7ePsx1ArnRaWCSinZeX3Pb7%2FpkNNjbdtfKEfgS8yUUBkvZFAiWbw%2FaGzVfOgXgcx5MWvQcq5LP9JP56jGiSGtEPfBfc8Vj7uBsfBvrF7gjCzs9bCBjqkAVvAJz86ueJIafc4ReA%2FbNjESwhOvxlvFAs72GwtgUkL5RiBRBORo6Pud73x3b7u3knAj5Ur%2FuFojDIRej%2F3k9PlRPFqzBZEFUIOCpv2DMObDDJymIhRaZwMwpUrpai%2BHi5KIkQBZvt1aRdG8aWaDNLGR2n09PILkSiDIbeHiOUxo5aR3PETrqwoWKp4ZURXcnafs6ulxMZRhsYLPBxb5C7iZjtq&X-Amz-Signature=fb17018e536b7c969b1c1b486d8b909d518dbabd95014c6874e340b85f28c42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEPS2W5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcq3nugonqrd7dKdwKj%2Bj%2BVLKXG%2Fb9eTZD2omuLAWLwIhALljx4cyD4KX5YhcA92tZtB%2FwgciruLSKOBDFqXXdZF3KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4NDrRy%2F2qxV%2BE0ssq3AMou56Y2U64zupyT55%2FEcGAtsnpxLVITwPbY8VhN1WacLULyqM5npsJ15HkkqE6lXWdSjM7SM4NX%2BsEuzG2HcKYUzhy9V1VZ4NcrjZ2yzGAkSfrAh9eZ5mnBWmUW87ct0ueLdQcYK5CJzXBE04m9a3oGxR1cEyUXaAolG8iH2UlkRdXSJQEckHQR3Ho7eg1C8s1Gaj1kzlIYtHMtD4mat2Iu%2FLQJFNZ4zkNDywAy5SNso6XBACU7Dc6zediNhfWZmQkAbAYPzxx2pHpfASzWhHqNtEsHpSsHBjLxEXYQpO1BO5Jg3K3oPSGNv21iI%2FsE3UCM5XWqj9Bx18Vyl185FhyPAlEHt%2B43ComRe6WZAXpU8TFFBMX6IG%2Bjxb5phUnlBhijtze9xFqxgNux6FS4gUrrkG9D3MxkZ1azrO4Q6CYgT9Tv49t0aRJBQHm6grLKPaw%2FaReX6Dn%2Ba9hQXrOP7Nb9Yu0o4nynoWt2BddBMtH2aJAisN9UIJUV4MgrujvvTLMX6rc23uUgMycbAdL7ePsx1ArnRaWCSinZeX3Pb7%2FpkNNjbdtfKEfgS8yUUBkvZFAiWbw%2FaGzVfOgXgcx5MWvQcq5LP9JP56jGiSGtEPfBfc8Vj7uBsfBvrF7gjCzs9bCBjqkAVvAJz86ueJIafc4ReA%2FbNjESwhOvxlvFAs72GwtgUkL5RiBRBORo6Pud73x3b7u3knAj5Ur%2FuFojDIRej%2F3k9PlRPFqzBZEFUIOCpv2DMObDDJymIhRaZwMwpUrpai%2BHi5KIkQBZvt1aRdG8aWaDNLGR2n09PILkSiDIbeHiOUxo5aR3PETrqwoWKp4ZURXcnafs6ulxMZRhsYLPBxb5C7iZjtq&X-Amz-Signature=8d33a1508380873e65f3f6482d6e0d3c1c9bdef3c10a9b341e09c7b6e7fcd17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEPS2W5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcq3nugonqrd7dKdwKj%2Bj%2BVLKXG%2Fb9eTZD2omuLAWLwIhALljx4cyD4KX5YhcA92tZtB%2FwgciruLSKOBDFqXXdZF3KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4NDrRy%2F2qxV%2BE0ssq3AMou56Y2U64zupyT55%2FEcGAtsnpxLVITwPbY8VhN1WacLULyqM5npsJ15HkkqE6lXWdSjM7SM4NX%2BsEuzG2HcKYUzhy9V1VZ4NcrjZ2yzGAkSfrAh9eZ5mnBWmUW87ct0ueLdQcYK5CJzXBE04m9a3oGxR1cEyUXaAolG8iH2UlkRdXSJQEckHQR3Ho7eg1C8s1Gaj1kzlIYtHMtD4mat2Iu%2FLQJFNZ4zkNDywAy5SNso6XBACU7Dc6zediNhfWZmQkAbAYPzxx2pHpfASzWhHqNtEsHpSsHBjLxEXYQpO1BO5Jg3K3oPSGNv21iI%2FsE3UCM5XWqj9Bx18Vyl185FhyPAlEHt%2B43ComRe6WZAXpU8TFFBMX6IG%2Bjxb5phUnlBhijtze9xFqxgNux6FS4gUrrkG9D3MxkZ1azrO4Q6CYgT9Tv49t0aRJBQHm6grLKPaw%2FaReX6Dn%2Ba9hQXrOP7Nb9Yu0o4nynoWt2BddBMtH2aJAisN9UIJUV4MgrujvvTLMX6rc23uUgMycbAdL7ePsx1ArnRaWCSinZeX3Pb7%2FpkNNjbdtfKEfgS8yUUBkvZFAiWbw%2FaGzVfOgXgcx5MWvQcq5LP9JP56jGiSGtEPfBfc8Vj7uBsfBvrF7gjCzs9bCBjqkAVvAJz86ueJIafc4ReA%2FbNjESwhOvxlvFAs72GwtgUkL5RiBRBORo6Pud73x3b7u3knAj5Ur%2FuFojDIRej%2F3k9PlRPFqzBZEFUIOCpv2DMObDDJymIhRaZwMwpUrpai%2BHi5KIkQBZvt1aRdG8aWaDNLGR2n09PILkSiDIbeHiOUxo5aR3PETrqwoWKp4ZURXcnafs6ulxMZRhsYLPBxb5C7iZjtq&X-Amz-Signature=31fabeb285dc4cd5cc4fb2c7b6dfa7a9974f144a2771e9ddaaa14dd18c967594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
