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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULTNLAB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDYCgz1505Kqvtjo2N%2BJEFn9KcT9ZcGlrLR3OgNsmgQNAiA77DlNCKrYndv6CkS0qwKGyzdlvUx3D1mFIy01JnlovSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqG4w%2BipiQK0IYZMwKtwDmDHn1t2CZkPeUxa2lmEDJah5dPESBdJSxlHe%2FQUDRF8BCA3dAYUoj45fSoTCvU%2BgPl3ZVQttipogk7aUlheou3It0BslN0N3QOhkhLaQB1hmWlDvc96vjnkG1uBourUTAX8wNXS4iEDrke%2BCSIkl52V1Lzrwugz8xZQ1TThtXSmyaHeLDPb9JlBwPSFXkGzADsaOEX%2FLR0aF2cZaXWwdFKvyv6Xp0AGyCXr2wyX9QBGm%2FU9Gvazmz41w%2BGmUHSVBjz7Ho5xzVEKRC2x5NTU3F92CqqDokkmjFZ6MGKA33cwcfDadr5KHqMU%2Fughn%2BY1927ILJs19gxoPpqrLoFjQQYVROCthrh%2BteG8F2OpHZflRCgn%2FPnfAQsunsTZQaeZ0rsCQZz8cXIvi0fnhext7KvBTczLyt665SX8kwPHj%2BR0sD4KDECHgvlCOrGiZYwKnELr253WW%2FBT6DULDfhvOCcy%2F1yvRL4tIRkPEQPuHJMrczyasVv6%2BwbhloQnO9V1zK9UKaaj1%2B2JpTGw0Y4mx0H%2FhdRGxSo87JIvZ6qCBFw5vT6ZSMEYgH1T5hZ4xoaxVJbTPZakubJmO1P0Vg4%2FhynwqnwOc3f8%2FvgwjjuSDQOwHWLDi4GOZEkOfPqkw9ZSMvgY6pgF6wi9qn5I69tK12XhDUUucnUTqC5Jwh5m8jZG2V4fLXRiCMMMLVeY%2BUcRcSvP0E%2FC4mopVxFph7nt2hgDeY3LaLOnZbJDz%2BwVxb6u2M5qEOzFld0IMVpAwIguoZM2MjVBF%2F917igOpj3kV9TwWReoErQYi6G9%2F6rgOMkqfWxLuZ%2BuJQPDvR9EsSnLu0AqSx4IkS3tUxrghhVGlSnl2s%2F0mJx8Ob2Az&X-Amz-Signature=51b8ae9ae23a95425a01c7d43749396c77d6d0af9d50b9d9740a64c52ce750dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULTNLAB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDYCgz1505Kqvtjo2N%2BJEFn9KcT9ZcGlrLR3OgNsmgQNAiA77DlNCKrYndv6CkS0qwKGyzdlvUx3D1mFIy01JnlovSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqG4w%2BipiQK0IYZMwKtwDmDHn1t2CZkPeUxa2lmEDJah5dPESBdJSxlHe%2FQUDRF8BCA3dAYUoj45fSoTCvU%2BgPl3ZVQttipogk7aUlheou3It0BslN0N3QOhkhLaQB1hmWlDvc96vjnkG1uBourUTAX8wNXS4iEDrke%2BCSIkl52V1Lzrwugz8xZQ1TThtXSmyaHeLDPb9JlBwPSFXkGzADsaOEX%2FLR0aF2cZaXWwdFKvyv6Xp0AGyCXr2wyX9QBGm%2FU9Gvazmz41w%2BGmUHSVBjz7Ho5xzVEKRC2x5NTU3F92CqqDokkmjFZ6MGKA33cwcfDadr5KHqMU%2Fughn%2BY1927ILJs19gxoPpqrLoFjQQYVROCthrh%2BteG8F2OpHZflRCgn%2FPnfAQsunsTZQaeZ0rsCQZz8cXIvi0fnhext7KvBTczLyt665SX8kwPHj%2BR0sD4KDECHgvlCOrGiZYwKnELr253WW%2FBT6DULDfhvOCcy%2F1yvRL4tIRkPEQPuHJMrczyasVv6%2BwbhloQnO9V1zK9UKaaj1%2B2JpTGw0Y4mx0H%2FhdRGxSo87JIvZ6qCBFw5vT6ZSMEYgH1T5hZ4xoaxVJbTPZakubJmO1P0Vg4%2FhynwqnwOc3f8%2FvgwjjuSDQOwHWLDi4GOZEkOfPqkw9ZSMvgY6pgF6wi9qn5I69tK12XhDUUucnUTqC5Jwh5m8jZG2V4fLXRiCMMMLVeY%2BUcRcSvP0E%2FC4mopVxFph7nt2hgDeY3LaLOnZbJDz%2BwVxb6u2M5qEOzFld0IMVpAwIguoZM2MjVBF%2F917igOpj3kV9TwWReoErQYi6G9%2F6rgOMkqfWxLuZ%2BuJQPDvR9EsSnLu0AqSx4IkS3tUxrghhVGlSnl2s%2F0mJx8Ob2Az&X-Amz-Signature=283afb298e9f3dfd5eb92e1a373f52a8d29b370d84557a891bed1e9343294172&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULTNLAB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDYCgz1505Kqvtjo2N%2BJEFn9KcT9ZcGlrLR3OgNsmgQNAiA77DlNCKrYndv6CkS0qwKGyzdlvUx3D1mFIy01JnlovSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqG4w%2BipiQK0IYZMwKtwDmDHn1t2CZkPeUxa2lmEDJah5dPESBdJSxlHe%2FQUDRF8BCA3dAYUoj45fSoTCvU%2BgPl3ZVQttipogk7aUlheou3It0BslN0N3QOhkhLaQB1hmWlDvc96vjnkG1uBourUTAX8wNXS4iEDrke%2BCSIkl52V1Lzrwugz8xZQ1TThtXSmyaHeLDPb9JlBwPSFXkGzADsaOEX%2FLR0aF2cZaXWwdFKvyv6Xp0AGyCXr2wyX9QBGm%2FU9Gvazmz41w%2BGmUHSVBjz7Ho5xzVEKRC2x5NTU3F92CqqDokkmjFZ6MGKA33cwcfDadr5KHqMU%2Fughn%2BY1927ILJs19gxoPpqrLoFjQQYVROCthrh%2BteG8F2OpHZflRCgn%2FPnfAQsunsTZQaeZ0rsCQZz8cXIvi0fnhext7KvBTczLyt665SX8kwPHj%2BR0sD4KDECHgvlCOrGiZYwKnELr253WW%2FBT6DULDfhvOCcy%2F1yvRL4tIRkPEQPuHJMrczyasVv6%2BwbhloQnO9V1zK9UKaaj1%2B2JpTGw0Y4mx0H%2FhdRGxSo87JIvZ6qCBFw5vT6ZSMEYgH1T5hZ4xoaxVJbTPZakubJmO1P0Vg4%2FhynwqnwOc3f8%2FvgwjjuSDQOwHWLDi4GOZEkOfPqkw9ZSMvgY6pgF6wi9qn5I69tK12XhDUUucnUTqC5Jwh5m8jZG2V4fLXRiCMMMLVeY%2BUcRcSvP0E%2FC4mopVxFph7nt2hgDeY3LaLOnZbJDz%2BwVxb6u2M5qEOzFld0IMVpAwIguoZM2MjVBF%2F917igOpj3kV9TwWReoErQYi6G9%2F6rgOMkqfWxLuZ%2BuJQPDvR9EsSnLu0AqSx4IkS3tUxrghhVGlSnl2s%2F0mJx8Ob2Az&X-Amz-Signature=7add1befb3a3b99db148b5ef80c3598de55abddec0b5f87480aeb88b04535619&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
