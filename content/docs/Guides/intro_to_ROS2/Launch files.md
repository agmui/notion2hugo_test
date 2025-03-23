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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSP5JBG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDsAyn%2FVV5qhuGvEhfG%2FhVf0S7zv3Oj823N4EwoM6LGoQIhALzuskOqAbjQEqS7q6WZtris7v%2FB9WvHYeoiK6WL7hQnKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr8UJgazxjh46oIfsq3AMhFQb952Mxzmjo6BACIjF6OLNOgo9USo%2FR4%2Fur%2BKEIbpA%2BR56W7eVufWeywRMiFaJhyNYrccqdGU0DdwJzSsNZizyjRPqNJ3bg8JgwL6DCawd7Mboe%2FoCSDMFwUwVKxcbNW%2BIfXNJESUBcks6FmYrufcbYcTKxQwbZgLSj9VklZlh4BKsUWee39oTvnlikL%2BImPX1WZIiNMnYShbAxCHR2gDimOfbsDTFju4vMhXM%2Bv8d93MIXxaFQOUSG7hOuExG9B2TDWRGUvxDYy%2F2ersYA%2FuRWfE3QTzjBtBWE9A9c73SAMMWgAu%2FftU3k16u3D2ktIVNYTOw45gM5VLOdweM1%2FpNy6Cj4QMLmCHG0y47RHSADTuIHKEKcKg%2FBzIceSOPwE%2Fg%2FsitjdeMpfEdTbHExmD86GkGhGQ9LyLrePXluFjuT%2BxRDOVDuIqVMwxO11%2Fu1CJHkbRePJwm3ioEyWuf%2B7Te7WbtaXVt%2BVZL1aypZmLkNh5MA6Pija0Ph8kxr%2FJzWJVqZA2uDisWrUUz%2Fq4UV%2BGIeqLdbTO15epW3QOJYJV78J0cubJCR3kTl8hMy%2FUxvvDno%2Fxr00hrQCVPtBAmn6I3TU8E3DX6APCqO4JklluhDh4hU3sGCVx4ggTCL4%2F2%2BBjqkAQU10BdYfsxywjFQ84BE4mbP8%2FU9PqaT%2FcaIY7RC0Edi4TlsBwgRHlEkFb2PF12ILxkqrX%2BBURL%2Fnw%2BZmK55NX480E2aWN37ipmw0%2B%2F5GIspzaSxsXS%2BRPSpCZidKyPeO0smap%2Bl2d3DmWDLsk6orW80Ss2%2FpSst6ytjm8Ho61eDdm0OCpw8SuvTiFinldnqdKw%2BIKVfuBicc%2FaJOa7LJkZt2%2FKc&X-Amz-Signature=75323e6bfa313eeaa67b3a4eee8492610acb32efaeead4f03d062e9a9fb7d16d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSP5JBG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDsAyn%2FVV5qhuGvEhfG%2FhVf0S7zv3Oj823N4EwoM6LGoQIhALzuskOqAbjQEqS7q6WZtris7v%2FB9WvHYeoiK6WL7hQnKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr8UJgazxjh46oIfsq3AMhFQb952Mxzmjo6BACIjF6OLNOgo9USo%2FR4%2Fur%2BKEIbpA%2BR56W7eVufWeywRMiFaJhyNYrccqdGU0DdwJzSsNZizyjRPqNJ3bg8JgwL6DCawd7Mboe%2FoCSDMFwUwVKxcbNW%2BIfXNJESUBcks6FmYrufcbYcTKxQwbZgLSj9VklZlh4BKsUWee39oTvnlikL%2BImPX1WZIiNMnYShbAxCHR2gDimOfbsDTFju4vMhXM%2Bv8d93MIXxaFQOUSG7hOuExG9B2TDWRGUvxDYy%2F2ersYA%2FuRWfE3QTzjBtBWE9A9c73SAMMWgAu%2FftU3k16u3D2ktIVNYTOw45gM5VLOdweM1%2FpNy6Cj4QMLmCHG0y47RHSADTuIHKEKcKg%2FBzIceSOPwE%2Fg%2FsitjdeMpfEdTbHExmD86GkGhGQ9LyLrePXluFjuT%2BxRDOVDuIqVMwxO11%2Fu1CJHkbRePJwm3ioEyWuf%2B7Te7WbtaXVt%2BVZL1aypZmLkNh5MA6Pija0Ph8kxr%2FJzWJVqZA2uDisWrUUz%2Fq4UV%2BGIeqLdbTO15epW3QOJYJV78J0cubJCR3kTl8hMy%2FUxvvDno%2Fxr00hrQCVPtBAmn6I3TU8E3DX6APCqO4JklluhDh4hU3sGCVx4ggTCL4%2F2%2BBjqkAQU10BdYfsxywjFQ84BE4mbP8%2FU9PqaT%2FcaIY7RC0Edi4TlsBwgRHlEkFb2PF12ILxkqrX%2BBURL%2Fnw%2BZmK55NX480E2aWN37ipmw0%2B%2F5GIspzaSxsXS%2BRPSpCZidKyPeO0smap%2Bl2d3DmWDLsk6orW80Ss2%2FpSst6ytjm8Ho61eDdm0OCpw8SuvTiFinldnqdKw%2BIKVfuBicc%2FaJOa7LJkZt2%2FKc&X-Amz-Signature=67c253b65b200b862daefbe0d8fdbf0835872a3f0952a383d3821a34be6f30a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSP5JBG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDsAyn%2FVV5qhuGvEhfG%2FhVf0S7zv3Oj823N4EwoM6LGoQIhALzuskOqAbjQEqS7q6WZtris7v%2FB9WvHYeoiK6WL7hQnKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr8UJgazxjh46oIfsq3AMhFQb952Mxzmjo6BACIjF6OLNOgo9USo%2FR4%2Fur%2BKEIbpA%2BR56W7eVufWeywRMiFaJhyNYrccqdGU0DdwJzSsNZizyjRPqNJ3bg8JgwL6DCawd7Mboe%2FoCSDMFwUwVKxcbNW%2BIfXNJESUBcks6FmYrufcbYcTKxQwbZgLSj9VklZlh4BKsUWee39oTvnlikL%2BImPX1WZIiNMnYShbAxCHR2gDimOfbsDTFju4vMhXM%2Bv8d93MIXxaFQOUSG7hOuExG9B2TDWRGUvxDYy%2F2ersYA%2FuRWfE3QTzjBtBWE9A9c73SAMMWgAu%2FftU3k16u3D2ktIVNYTOw45gM5VLOdweM1%2FpNy6Cj4QMLmCHG0y47RHSADTuIHKEKcKg%2FBzIceSOPwE%2Fg%2FsitjdeMpfEdTbHExmD86GkGhGQ9LyLrePXluFjuT%2BxRDOVDuIqVMwxO11%2Fu1CJHkbRePJwm3ioEyWuf%2B7Te7WbtaXVt%2BVZL1aypZmLkNh5MA6Pija0Ph8kxr%2FJzWJVqZA2uDisWrUUz%2Fq4UV%2BGIeqLdbTO15epW3QOJYJV78J0cubJCR3kTl8hMy%2FUxvvDno%2Fxr00hrQCVPtBAmn6I3TU8E3DX6APCqO4JklluhDh4hU3sGCVx4ggTCL4%2F2%2BBjqkAQU10BdYfsxywjFQ84BE4mbP8%2FU9PqaT%2FcaIY7RC0Edi4TlsBwgRHlEkFb2PF12ILxkqrX%2BBURL%2Fnw%2BZmK55NX480E2aWN37ipmw0%2B%2F5GIspzaSxsXS%2BRPSpCZidKyPeO0smap%2Bl2d3DmWDLsk6orW80Ss2%2FpSst6ytjm8Ho61eDdm0OCpw8SuvTiFinldnqdKw%2BIKVfuBicc%2FaJOa7LJkZt2%2FKc&X-Amz-Signature=e7d178c2e2befeac495355adf9ee7112239a39c2250cb3d12431336cdba9efb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
