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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUO2ICC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAIOC2g4erA0yXGT1YCjkM9vs0G8NmAg%2BTWxrOXawlZxAiBjmhpTvyBnMtKh2Eo8g0TreayDJGdWE1lLuXbLRQX%2Bzir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMHSNSOrr24UHO8FKMKtwDGWXzw1Ow7szy38h0sN6ZYIaaaIrPU0Iy9YsbP7xhTruNk4y9FJSuxkC18Bgc622C8CU%2B2XJ1KCAZ943rFPguC8KexZ%2BTz%2B6EcMb24sT84MXDCCuxNObbAT%2BCZ3r1U3beBvnV4zw1G4Ndd21p7keIijFCQRA2wy67fA6wZHAW1qSt3yT%2Fjd6HVCNlVAPuoIerkeiZqS2ShpZOyHvsY%2FBpaGqMbDshNpLzY5%2BSzOgtI0YaixQpKAKo8HJT4cfjYpaeAEw6ne3Phr6ZtGZaQQV8b5dWHsDx2%2F9m05aXmCnnJhDT%2FQPs%2BFcO5RKMAOCdxcO6EGYg6qJnLT9yrAlFvPJy0ECQHuRco4wwTeJBCmOihxnMCjTbN3Gn1%2FjRPi%2FfMmVy5sDUqsm9%2B5GXuWcamzsRyJz5cyFSL4okH9zpXa%2BrgF40eogT3u5UV5%2Feq%2FOtttJss%2FUMHJUkA1k8mCUlV19TluHe1RmaLYwG16JAed%2FixfZ9d9RcALgVhzSf6TlmHnTfnRHO4jY%2FjL6zUBtW2GNs%2FOJvtqW5JKQt6z6cZ5BDbMiFgxNe0WT3pqGPbKb0KpqufpzamoEQZPrmbo5JmjDKq2%2FAzB2RgRzGo%2FOOnH%2BfRNHvKJsu6Ict45XvNP0w9YrAwgY6pgHfJT9N5WBpfdglKAFx3qAT70zwOiG1tyJnx460hIJQUIJpKE42ClnJTsH2l2zl%2F%2F3Rn8mWZh2ttupJA9BAJkqOJzJ%2FKa3M3RD%2FIRNZ8yXlIHFNHZV4MsL24CiQ5BwIGTPICPjwWUV5aYB%2Ffa%2B36LG4%2FnVxQ6WPBVfbM0PTLhKP6KBjYTcFR8h6wwR3JOsrj1E1mqm6LPUVQbwmSDGYQH%2BzGqO1D%2F%2Fx&X-Amz-Signature=f794fec7c14637d76dcbd27dbd44950b98c502177089581342e91ac2bca6a655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUO2ICC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAIOC2g4erA0yXGT1YCjkM9vs0G8NmAg%2BTWxrOXawlZxAiBjmhpTvyBnMtKh2Eo8g0TreayDJGdWE1lLuXbLRQX%2Bzir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMHSNSOrr24UHO8FKMKtwDGWXzw1Ow7szy38h0sN6ZYIaaaIrPU0Iy9YsbP7xhTruNk4y9FJSuxkC18Bgc622C8CU%2B2XJ1KCAZ943rFPguC8KexZ%2BTz%2B6EcMb24sT84MXDCCuxNObbAT%2BCZ3r1U3beBvnV4zw1G4Ndd21p7keIijFCQRA2wy67fA6wZHAW1qSt3yT%2Fjd6HVCNlVAPuoIerkeiZqS2ShpZOyHvsY%2FBpaGqMbDshNpLzY5%2BSzOgtI0YaixQpKAKo8HJT4cfjYpaeAEw6ne3Phr6ZtGZaQQV8b5dWHsDx2%2F9m05aXmCnnJhDT%2FQPs%2BFcO5RKMAOCdxcO6EGYg6qJnLT9yrAlFvPJy0ECQHuRco4wwTeJBCmOihxnMCjTbN3Gn1%2FjRPi%2FfMmVy5sDUqsm9%2B5GXuWcamzsRyJz5cyFSL4okH9zpXa%2BrgF40eogT3u5UV5%2Feq%2FOtttJss%2FUMHJUkA1k8mCUlV19TluHe1RmaLYwG16JAed%2FixfZ9d9RcALgVhzSf6TlmHnTfnRHO4jY%2FjL6zUBtW2GNs%2FOJvtqW5JKQt6z6cZ5BDbMiFgxNe0WT3pqGPbKb0KpqufpzamoEQZPrmbo5JmjDKq2%2FAzB2RgRzGo%2FOOnH%2BfRNHvKJsu6Ict45XvNP0w9YrAwgY6pgHfJT9N5WBpfdglKAFx3qAT70zwOiG1tyJnx460hIJQUIJpKE42ClnJTsH2l2zl%2F%2F3Rn8mWZh2ttupJA9BAJkqOJzJ%2FKa3M3RD%2FIRNZ8yXlIHFNHZV4MsL24CiQ5BwIGTPICPjwWUV5aYB%2Ffa%2B36LG4%2FnVxQ6WPBVfbM0PTLhKP6KBjYTcFR8h6wwR3JOsrj1E1mqm6LPUVQbwmSDGYQH%2BzGqO1D%2F%2Fx&X-Amz-Signature=c2ad05489406e80567bb4cb63438d847197f3bf54121bd35521a1f9c6c2551de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUO2ICC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAIOC2g4erA0yXGT1YCjkM9vs0G8NmAg%2BTWxrOXawlZxAiBjmhpTvyBnMtKh2Eo8g0TreayDJGdWE1lLuXbLRQX%2Bzir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMHSNSOrr24UHO8FKMKtwDGWXzw1Ow7szy38h0sN6ZYIaaaIrPU0Iy9YsbP7xhTruNk4y9FJSuxkC18Bgc622C8CU%2B2XJ1KCAZ943rFPguC8KexZ%2BTz%2B6EcMb24sT84MXDCCuxNObbAT%2BCZ3r1U3beBvnV4zw1G4Ndd21p7keIijFCQRA2wy67fA6wZHAW1qSt3yT%2Fjd6HVCNlVAPuoIerkeiZqS2ShpZOyHvsY%2FBpaGqMbDshNpLzY5%2BSzOgtI0YaixQpKAKo8HJT4cfjYpaeAEw6ne3Phr6ZtGZaQQV8b5dWHsDx2%2F9m05aXmCnnJhDT%2FQPs%2BFcO5RKMAOCdxcO6EGYg6qJnLT9yrAlFvPJy0ECQHuRco4wwTeJBCmOihxnMCjTbN3Gn1%2FjRPi%2FfMmVy5sDUqsm9%2B5GXuWcamzsRyJz5cyFSL4okH9zpXa%2BrgF40eogT3u5UV5%2Feq%2FOtttJss%2FUMHJUkA1k8mCUlV19TluHe1RmaLYwG16JAed%2FixfZ9d9RcALgVhzSf6TlmHnTfnRHO4jY%2FjL6zUBtW2GNs%2FOJvtqW5JKQt6z6cZ5BDbMiFgxNe0WT3pqGPbKb0KpqufpzamoEQZPrmbo5JmjDKq2%2FAzB2RgRzGo%2FOOnH%2BfRNHvKJsu6Ict45XvNP0w9YrAwgY6pgHfJT9N5WBpfdglKAFx3qAT70zwOiG1tyJnx460hIJQUIJpKE42ClnJTsH2l2zl%2F%2F3Rn8mWZh2ttupJA9BAJkqOJzJ%2FKa3M3RD%2FIRNZ8yXlIHFNHZV4MsL24CiQ5BwIGTPICPjwWUV5aYB%2Ffa%2B36LG4%2FnVxQ6WPBVfbM0PTLhKP6KBjYTcFR8h6wwR3JOsrj1E1mqm6LPUVQbwmSDGYQH%2BzGqO1D%2F%2Fx&X-Amz-Signature=0b3be985500644454771eafb7aff0dc78f313f0dda051d1746348318283d7d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
