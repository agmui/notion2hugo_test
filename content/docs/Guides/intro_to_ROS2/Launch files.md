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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOJSNJF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHrnyxeAVKwYauEin%2BxsUg2XCDbq8RkyINBY1cf6ZXAIgbh7Wo4rzJpT8TFDmmr3oMAO31MwyM%2BvlEIP35UaxxJQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGAAPqkSUKZLtgxq8CrcA8oC2M2EU5Ub6LpuiJFJZQbWuAhYS2I6Vqr04NvFh6STtGdc4J1bdwIKNeN3IVM4HWhH7ZR6eldhNWy5OcdY42Z8zWz8suz22%2FEIbMq5j3t7iidR7cKl1aZJveUbfEa5HWQR9x4FZYvliSKBfTVDxIt62q4ZJb68t36%2Fd4XiLP3Tb2v83Omi3cfkcFNfp1%2BTNOop3dbVyaXpz4tls6XCoxvwQSo3FVJpV0NrZVMtg9ezWx8y83q9QqdIvNeaRggZ3MLxo5lhO9RkJtDsG7%2B%2Baom3UIO5ThRuiJxhGCp15genN6DdxzhlXHrOL%2BdOmDDZoeoIwnlkqR2%2F2rgv%2BmYIECb5DCaFZsXs%2F4g9HMjiR9w0ys5BaKf9BTQc0lQVqszwR82Iu%2FOntK9U3eW0hTI02oNBtc9DhKNsnJutFkmpzPqDVtM8GyAcm%2BlyC3L8nu7TwhVEdjzByScZyB0gkXFq6W1D32eorZ%2BrWMSDni6TU5Mak7gMWDfwLZwJcty0DrfeFm0OtZc4sUrwzaCfelKgbtqKMPEV9tHPlEqKT1GG3zVWvkOnuEwHbYLmbkEs0bBdnfIX7hjTm76lI96z1ESiMoar1tRv7FJ%2Bp8niR64pBX0xjGgF3rpiwvZYEXe0MMekzcMGOqUBs%2B9vfQZfVw%2BwPg67V8yNa3LcrzspNx%2ByMlAuoZvB3GNzfS7qj66EuKLt3Z2pNzgkxOrJsY4uTVCh6YeHQGrraGU9trAS3ttl8gZ4cP0v1TyUwzJ7syoP%2B%2FQdB4PVchcXPCjJ%2BJTnEnw39MyXMbbxHX0CUnSV03tjPOGKDK1QKEcmiTZuZwR8rA0sl0xpcKkDPvAFP4Y6RDqYLirQYPQ2YBNhXxfl&X-Amz-Signature=a6903d1a293ebd108cb5e4ce3f715081be804cec0ea44423ab15995f5c1109c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOJSNJF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHrnyxeAVKwYauEin%2BxsUg2XCDbq8RkyINBY1cf6ZXAIgbh7Wo4rzJpT8TFDmmr3oMAO31MwyM%2BvlEIP35UaxxJQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGAAPqkSUKZLtgxq8CrcA8oC2M2EU5Ub6LpuiJFJZQbWuAhYS2I6Vqr04NvFh6STtGdc4J1bdwIKNeN3IVM4HWhH7ZR6eldhNWy5OcdY42Z8zWz8suz22%2FEIbMq5j3t7iidR7cKl1aZJveUbfEa5HWQR9x4FZYvliSKBfTVDxIt62q4ZJb68t36%2Fd4XiLP3Tb2v83Omi3cfkcFNfp1%2BTNOop3dbVyaXpz4tls6XCoxvwQSo3FVJpV0NrZVMtg9ezWx8y83q9QqdIvNeaRggZ3MLxo5lhO9RkJtDsG7%2B%2Baom3UIO5ThRuiJxhGCp15genN6DdxzhlXHrOL%2BdOmDDZoeoIwnlkqR2%2F2rgv%2BmYIECb5DCaFZsXs%2F4g9HMjiR9w0ys5BaKf9BTQc0lQVqszwR82Iu%2FOntK9U3eW0hTI02oNBtc9DhKNsnJutFkmpzPqDVtM8GyAcm%2BlyC3L8nu7TwhVEdjzByScZyB0gkXFq6W1D32eorZ%2BrWMSDni6TU5Mak7gMWDfwLZwJcty0DrfeFm0OtZc4sUrwzaCfelKgbtqKMPEV9tHPlEqKT1GG3zVWvkOnuEwHbYLmbkEs0bBdnfIX7hjTm76lI96z1ESiMoar1tRv7FJ%2Bp8niR64pBX0xjGgF3rpiwvZYEXe0MMekzcMGOqUBs%2B9vfQZfVw%2BwPg67V8yNa3LcrzspNx%2ByMlAuoZvB3GNzfS7qj66EuKLt3Z2pNzgkxOrJsY4uTVCh6YeHQGrraGU9trAS3ttl8gZ4cP0v1TyUwzJ7syoP%2B%2FQdB4PVchcXPCjJ%2BJTnEnw39MyXMbbxHX0CUnSV03tjPOGKDK1QKEcmiTZuZwR8rA0sl0xpcKkDPvAFP4Y6RDqYLirQYPQ2YBNhXxfl&X-Amz-Signature=5a431eb2c55c44732c9f3aea8d504f001a5a081558fd83e82d8fa5646ac28951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOJSNJF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwHrnyxeAVKwYauEin%2BxsUg2XCDbq8RkyINBY1cf6ZXAIgbh7Wo4rzJpT8TFDmmr3oMAO31MwyM%2BvlEIP35UaxxJQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGAAPqkSUKZLtgxq8CrcA8oC2M2EU5Ub6LpuiJFJZQbWuAhYS2I6Vqr04NvFh6STtGdc4J1bdwIKNeN3IVM4HWhH7ZR6eldhNWy5OcdY42Z8zWz8suz22%2FEIbMq5j3t7iidR7cKl1aZJveUbfEa5HWQR9x4FZYvliSKBfTVDxIt62q4ZJb68t36%2Fd4XiLP3Tb2v83Omi3cfkcFNfp1%2BTNOop3dbVyaXpz4tls6XCoxvwQSo3FVJpV0NrZVMtg9ezWx8y83q9QqdIvNeaRggZ3MLxo5lhO9RkJtDsG7%2B%2Baom3UIO5ThRuiJxhGCp15genN6DdxzhlXHrOL%2BdOmDDZoeoIwnlkqR2%2F2rgv%2BmYIECb5DCaFZsXs%2F4g9HMjiR9w0ys5BaKf9BTQc0lQVqszwR82Iu%2FOntK9U3eW0hTI02oNBtc9DhKNsnJutFkmpzPqDVtM8GyAcm%2BlyC3L8nu7TwhVEdjzByScZyB0gkXFq6W1D32eorZ%2BrWMSDni6TU5Mak7gMWDfwLZwJcty0DrfeFm0OtZc4sUrwzaCfelKgbtqKMPEV9tHPlEqKT1GG3zVWvkOnuEwHbYLmbkEs0bBdnfIX7hjTm76lI96z1ESiMoar1tRv7FJ%2Bp8niR64pBX0xjGgF3rpiwvZYEXe0MMekzcMGOqUBs%2B9vfQZfVw%2BwPg67V8yNa3LcrzspNx%2ByMlAuoZvB3GNzfS7qj66EuKLt3Z2pNzgkxOrJsY4uTVCh6YeHQGrraGU9trAS3ttl8gZ4cP0v1TyUwzJ7syoP%2B%2FQdB4PVchcXPCjJ%2BJTnEnw39MyXMbbxHX0CUnSV03tjPOGKDK1QKEcmiTZuZwR8rA0sl0xpcKkDPvAFP4Y6RDqYLirQYPQ2YBNhXxfl&X-Amz-Signature=2adad722bab1475ed7ebe519526865e96422309b69552eb1ece7fc4dd1eb1510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
