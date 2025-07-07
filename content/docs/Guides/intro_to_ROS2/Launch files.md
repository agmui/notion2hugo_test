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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FE6SZP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDJl0U%2F%2BTUEgZ7%2BGcR9CG8eYDQQOnjAC%2BFtaK0LSB7UXQIgc%2FXGJdMvVuGjSJE5RRD3dSn7gztEyasv6YA71TJryF4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGjFrMsR%2Bk4ox%2BSH0CrcAxXLxTfURr9ZisdVVLQPj3p3cPgMgIvVkY6kEVrXFqCsT22jWHogCgVGRJZ6UuRiztgJpkxbXcL7%2FJ6L6V7bhIG5juHuHUyq5uqgpVq9lbnXVR3kldBxjh6Elz0SEKozlBDpo1whzhHdF4nsyzYkdGRd4LEhWaFEILw5NV2L5taSELQPlcRWtM1vbg%2FHigijnlr%2BanCuqEmHrhZ9na0w%2FCJ5Y2okUgTyHNIJTzoq7Gs6ov81%2BSNhvxRj4eQ6yJopB43vAwjYRqBo%2FatqciFXnriHHFFk%2FKfTqLSYFlhXo7o74DJvIqMBPKNlOBEtsDfUG1F4XK2ZSv8AYj74xNc4MPZenpVFL0GX9f4yIRnuhOu9mZ0HNZ8Su3aJEVuMo3ZLgVXAshlWx5N9A1SalL9WHAm2c2FDdWewo1r%2BGx%2FgZUfylFwftA0bgKt9QiCR5IM%2FeSHFRZRuO%2FJS3UyuEjgcx1E3GtlqruHyIcl8Crq%2Bzl7Lbsm3VVSKqkaAc%2BmMHg6R0eh%2Basi2thdjsei%2BezAu8zdRvZ3mmZqSXE1lFAosJWjNpSEOobc3bK6DNeK7can1GJ%2BmEnHO0a2vKI45eibFIk8e3GtdyjgbWR6gFZxLFGmKfzVT3CZbyAkTZGj9MLKdrMMGOqUBWYzlNSzUEipp0%2FnSRJDsWimX2Xo82UVx%2F9Q8%2BDA4bFEqAtwK1%2F8KsfguFzLb6aTHo80sD9Csu%2BnOUncqB%2B4ytFDMl1LXB%2BpZYdsyuVu0sZuZ1%2BgnmstB1NU3DU4d6dtrERAsH2m%2Fnf15cYUA9xyrkQFwqFdgVigPeazKxPLfsjtToZyA%2BLGOFDzmDbULGQAsk2GOuXn4gHRfO2WnpwHFPL%2BlECG%2B&X-Amz-Signature=28fce67bc8292fc31d92767af20a1b48ed2c2bf32aa62726366a7beafbfaeb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FE6SZP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDJl0U%2F%2BTUEgZ7%2BGcR9CG8eYDQQOnjAC%2BFtaK0LSB7UXQIgc%2FXGJdMvVuGjSJE5RRD3dSn7gztEyasv6YA71TJryF4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGjFrMsR%2Bk4ox%2BSH0CrcAxXLxTfURr9ZisdVVLQPj3p3cPgMgIvVkY6kEVrXFqCsT22jWHogCgVGRJZ6UuRiztgJpkxbXcL7%2FJ6L6V7bhIG5juHuHUyq5uqgpVq9lbnXVR3kldBxjh6Elz0SEKozlBDpo1whzhHdF4nsyzYkdGRd4LEhWaFEILw5NV2L5taSELQPlcRWtM1vbg%2FHigijnlr%2BanCuqEmHrhZ9na0w%2FCJ5Y2okUgTyHNIJTzoq7Gs6ov81%2BSNhvxRj4eQ6yJopB43vAwjYRqBo%2FatqciFXnriHHFFk%2FKfTqLSYFlhXo7o74DJvIqMBPKNlOBEtsDfUG1F4XK2ZSv8AYj74xNc4MPZenpVFL0GX9f4yIRnuhOu9mZ0HNZ8Su3aJEVuMo3ZLgVXAshlWx5N9A1SalL9WHAm2c2FDdWewo1r%2BGx%2FgZUfylFwftA0bgKt9QiCR5IM%2FeSHFRZRuO%2FJS3UyuEjgcx1E3GtlqruHyIcl8Crq%2Bzl7Lbsm3VVSKqkaAc%2BmMHg6R0eh%2Basi2thdjsei%2BezAu8zdRvZ3mmZqSXE1lFAosJWjNpSEOobc3bK6DNeK7can1GJ%2BmEnHO0a2vKI45eibFIk8e3GtdyjgbWR6gFZxLFGmKfzVT3CZbyAkTZGj9MLKdrMMGOqUBWYzlNSzUEipp0%2FnSRJDsWimX2Xo82UVx%2F9Q8%2BDA4bFEqAtwK1%2F8KsfguFzLb6aTHo80sD9Csu%2BnOUncqB%2B4ytFDMl1LXB%2BpZYdsyuVu0sZuZ1%2BgnmstB1NU3DU4d6dtrERAsH2m%2Fnf15cYUA9xyrkQFwqFdgVigPeazKxPLfsjtToZyA%2BLGOFDzmDbULGQAsk2GOuXn4gHRfO2WnpwHFPL%2BlECG%2B&X-Amz-Signature=92b2aef9a16b6bf857c2b54f91f64f46c9dc98656de2fd40de2c39b191e80d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FE6SZP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDJl0U%2F%2BTUEgZ7%2BGcR9CG8eYDQQOnjAC%2BFtaK0LSB7UXQIgc%2FXGJdMvVuGjSJE5RRD3dSn7gztEyasv6YA71TJryF4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGjFrMsR%2Bk4ox%2BSH0CrcAxXLxTfURr9ZisdVVLQPj3p3cPgMgIvVkY6kEVrXFqCsT22jWHogCgVGRJZ6UuRiztgJpkxbXcL7%2FJ6L6V7bhIG5juHuHUyq5uqgpVq9lbnXVR3kldBxjh6Elz0SEKozlBDpo1whzhHdF4nsyzYkdGRd4LEhWaFEILw5NV2L5taSELQPlcRWtM1vbg%2FHigijnlr%2BanCuqEmHrhZ9na0w%2FCJ5Y2okUgTyHNIJTzoq7Gs6ov81%2BSNhvxRj4eQ6yJopB43vAwjYRqBo%2FatqciFXnriHHFFk%2FKfTqLSYFlhXo7o74DJvIqMBPKNlOBEtsDfUG1F4XK2ZSv8AYj74xNc4MPZenpVFL0GX9f4yIRnuhOu9mZ0HNZ8Su3aJEVuMo3ZLgVXAshlWx5N9A1SalL9WHAm2c2FDdWewo1r%2BGx%2FgZUfylFwftA0bgKt9QiCR5IM%2FeSHFRZRuO%2FJS3UyuEjgcx1E3GtlqruHyIcl8Crq%2Bzl7Lbsm3VVSKqkaAc%2BmMHg6R0eh%2Basi2thdjsei%2BezAu8zdRvZ3mmZqSXE1lFAosJWjNpSEOobc3bK6DNeK7can1GJ%2BmEnHO0a2vKI45eibFIk8e3GtdyjgbWR6gFZxLFGmKfzVT3CZbyAkTZGj9MLKdrMMGOqUBWYzlNSzUEipp0%2FnSRJDsWimX2Xo82UVx%2F9Q8%2BDA4bFEqAtwK1%2F8KsfguFzLb6aTHo80sD9Csu%2BnOUncqB%2B4ytFDMl1LXB%2BpZYdsyuVu0sZuZ1%2BgnmstB1NU3DU4d6dtrERAsH2m%2Fnf15cYUA9xyrkQFwqFdgVigPeazKxPLfsjtToZyA%2BLGOFDzmDbULGQAsk2GOuXn4gHRfO2WnpwHFPL%2BlECG%2B&X-Amz-Signature=42967ae4bf25f73c91581e0153933a1aec6ebc311d98e81c2d8d747ca98a17e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
