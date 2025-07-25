---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655Q3DYJL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC1olnZNHdL6UYf3y49PyvZARRy54LXYDQpxHtFxu21yAIhAJ2ugdSCcZUtXMyDjVDC6Igw1WrcmtSmxP%2FZ6Lj3cTEXKv8DCDkQABoMNjM3NDIzMTgzODA1Igxb7DZTodXc0P7GxScq3AM%2BLss3awTSpoxiVljnIEW1w9jSmDIWlfQ7nHHpd1mUto8OGEq4Wzg7hJMfnYM0PeoBp3g4tRIIjITypjNzda27s4zIompHil56RQF%2BY9q0PE5HvR3S3G4UfS8dSLBXkgNQXj9nCrClKQanbC%2FXqlkCfoDRHQBmQ5LUOrUUzqYCPNvAtJFfOtf1EKyqVk6gf4PbND0ttME4VRuKsNqDPxXV8wk3%2FLjvsJjNddeBULziLj6oHpAM2NYR5nxTlL0RzZV30nNcz%2FRgA%2BskVUAkflPqgUb1alzqtsj%2F3NIrde1pN3Bu5d91e7Tf6eoAiO8BsxAvexcbQvyiJ7IT7P92V%2Bex2tNZtrcBCgce%2BhOEMBy7KqwLAsCB%2Bc4G2AJsQui7JSS%2FsGRdYjxR3c5HlDgRgsKs30%2BS6bp1MaspnRRnMGYD4wgsIe7StrchWjdiQgAQjlZS65pHP0QRQdVfI%2BXRWuufbv6aC1tRhRRRHvwpyVRLVf6IwnPJtSWMh2oC2%2FFbMEoAXThKnXD4v58hDxWIvZHl5dXpCloOfSm7A2BTD6JhqXaUdTks0N%2B%2F3r5KOwYKbs94YCQS4uDUtGP5f%2FT8sGpzRhQf6dsByqVeEmE06dslK5Uxa%2F4F7MpF%2F4yluDD2iYvEBjqkAU4sTlVTmlHhOQkIgtTmgypnGIUusFWQIqQq5xOCwXQPgQbie8zGzlZmG1VbWvWwiEGnZ4WxKQvTYx0xvLTp9Zpkx5IGkSome16s3MCx4aZAxRgciv87V9A4RnSdAdC2VvajOHMaovDBdFWBgNlKbG3Xjbpeea1dnShE14OvbeKC5F8LQgcM676a16jFaeNtQ5UvP4%2FQOtfcToFn0qtGSi40rS7O&X-Amz-Signature=39b47b59603e8ffc9d7e31ab6d7e1e710a7b19dac0b73d866785367a94234161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655Q3DYJL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC1olnZNHdL6UYf3y49PyvZARRy54LXYDQpxHtFxu21yAIhAJ2ugdSCcZUtXMyDjVDC6Igw1WrcmtSmxP%2FZ6Lj3cTEXKv8DCDkQABoMNjM3NDIzMTgzODA1Igxb7DZTodXc0P7GxScq3AM%2BLss3awTSpoxiVljnIEW1w9jSmDIWlfQ7nHHpd1mUto8OGEq4Wzg7hJMfnYM0PeoBp3g4tRIIjITypjNzda27s4zIompHil56RQF%2BY9q0PE5HvR3S3G4UfS8dSLBXkgNQXj9nCrClKQanbC%2FXqlkCfoDRHQBmQ5LUOrUUzqYCPNvAtJFfOtf1EKyqVk6gf4PbND0ttME4VRuKsNqDPxXV8wk3%2FLjvsJjNddeBULziLj6oHpAM2NYR5nxTlL0RzZV30nNcz%2FRgA%2BskVUAkflPqgUb1alzqtsj%2F3NIrde1pN3Bu5d91e7Tf6eoAiO8BsxAvexcbQvyiJ7IT7P92V%2Bex2tNZtrcBCgce%2BhOEMBy7KqwLAsCB%2Bc4G2AJsQui7JSS%2FsGRdYjxR3c5HlDgRgsKs30%2BS6bp1MaspnRRnMGYD4wgsIe7StrchWjdiQgAQjlZS65pHP0QRQdVfI%2BXRWuufbv6aC1tRhRRRHvwpyVRLVf6IwnPJtSWMh2oC2%2FFbMEoAXThKnXD4v58hDxWIvZHl5dXpCloOfSm7A2BTD6JhqXaUdTks0N%2B%2F3r5KOwYKbs94YCQS4uDUtGP5f%2FT8sGpzRhQf6dsByqVeEmE06dslK5Uxa%2F4F7MpF%2F4yluDD2iYvEBjqkAU4sTlVTmlHhOQkIgtTmgypnGIUusFWQIqQq5xOCwXQPgQbie8zGzlZmG1VbWvWwiEGnZ4WxKQvTYx0xvLTp9Zpkx5IGkSome16s3MCx4aZAxRgciv87V9A4RnSdAdC2VvajOHMaovDBdFWBgNlKbG3Xjbpeea1dnShE14OvbeKC5F8LQgcM676a16jFaeNtQ5UvP4%2FQOtfcToFn0qtGSi40rS7O&X-Amz-Signature=bc5d34e65eb48793f96a67fe53b0119935dca30bfa21a1816e5913f2e536be46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655Q3DYJL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC1olnZNHdL6UYf3y49PyvZARRy54LXYDQpxHtFxu21yAIhAJ2ugdSCcZUtXMyDjVDC6Igw1WrcmtSmxP%2FZ6Lj3cTEXKv8DCDkQABoMNjM3NDIzMTgzODA1Igxb7DZTodXc0P7GxScq3AM%2BLss3awTSpoxiVljnIEW1w9jSmDIWlfQ7nHHpd1mUto8OGEq4Wzg7hJMfnYM0PeoBp3g4tRIIjITypjNzda27s4zIompHil56RQF%2BY9q0PE5HvR3S3G4UfS8dSLBXkgNQXj9nCrClKQanbC%2FXqlkCfoDRHQBmQ5LUOrUUzqYCPNvAtJFfOtf1EKyqVk6gf4PbND0ttME4VRuKsNqDPxXV8wk3%2FLjvsJjNddeBULziLj6oHpAM2NYR5nxTlL0RzZV30nNcz%2FRgA%2BskVUAkflPqgUb1alzqtsj%2F3NIrde1pN3Bu5d91e7Tf6eoAiO8BsxAvexcbQvyiJ7IT7P92V%2Bex2tNZtrcBCgce%2BhOEMBy7KqwLAsCB%2Bc4G2AJsQui7JSS%2FsGRdYjxR3c5HlDgRgsKs30%2BS6bp1MaspnRRnMGYD4wgsIe7StrchWjdiQgAQjlZS65pHP0QRQdVfI%2BXRWuufbv6aC1tRhRRRHvwpyVRLVf6IwnPJtSWMh2oC2%2FFbMEoAXThKnXD4v58hDxWIvZHl5dXpCloOfSm7A2BTD6JhqXaUdTks0N%2B%2F3r5KOwYKbs94YCQS4uDUtGP5f%2FT8sGpzRhQf6dsByqVeEmE06dslK5Uxa%2F4F7MpF%2F4yluDD2iYvEBjqkAU4sTlVTmlHhOQkIgtTmgypnGIUusFWQIqQq5xOCwXQPgQbie8zGzlZmG1VbWvWwiEGnZ4WxKQvTYx0xvLTp9Zpkx5IGkSome16s3MCx4aZAxRgciv87V9A4RnSdAdC2VvajOHMaovDBdFWBgNlKbG3Xjbpeea1dnShE14OvbeKC5F8LQgcM676a16jFaeNtQ5UvP4%2FQOtfcToFn0qtGSi40rS7O&X-Amz-Signature=508d8690846a14d5d14b3b6b9cd8bafeb9748b69e2ddca84f593ab866d312295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
